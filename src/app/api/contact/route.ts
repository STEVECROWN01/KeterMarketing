import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'

// ── Rate limiting (in-memory, per-IP) ──
const submissionCounts = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60_000 // 1 minute
const RATE_LIMIT_MAX = 3 // max 3 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = submissionCounts.get(ip)
  if (!entry || now > entry.resetAt) {
    submissionCounts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// Periodically prune stale entries to prevent memory leaks
setInterval(() => {
  const now = Date.now()
  for (const [ip, entry] of submissionCounts) {
    if (now > entry.resetAt) submissionCounts.delete(ip)
  }
}, 5 * 60_000) // every 5 minutes

// ── Zod schema for validation ──
const contactSchema = z.object({
  fullName: z.string().min(1, 'Le nom est requis.').max(100),
  phone: z.string().min(1, 'Le téléphone est requis.').max(30),
  email: z.string().email('Format d\'email invalide.').max(200),
  company: z.string().min(1, 'L\'entreprise est requise.').max(100),
  referral: z.string().min(1, 'Le champ comment nous avez-vous connus est requis.').max(100),
  message: z.string().min(1, 'Le message est requis.').max(5000),
})

export async function POST(request: NextRequest) {
  try {
    // ── Rate limiting ──
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer dans un instant.' },
        { status: 429 }
      )
    }

    // ── Validate payload ──
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || 'Données invalides.'
      return NextResponse.json(
        { error: firstError },
        { status: 400 }
      )
    }

    const { fullName, phone, email, company, referral, message } = parsed.data

    // ── Save to database ──
    try {
      await db.contactSubmission.create({
        data: {
          fullName,
          phone,
          email,
          company,
          referral,
          message,
        },
      })
    } catch (dbError) {
      console.error('Database save failed:', dbError instanceof Error ? dbError.message : 'Unknown error')
      // Return error to the client — data was NOT saved
      return NextResponse.json(
        { error: 'Impossible d\'enregistrer votre message. Veuillez réessayer ou nous contacter via WhatsApp.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message reçu avec succès !',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    )
  }
}
