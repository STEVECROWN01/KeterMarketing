import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

interface ContactPayload {
  fullName: string
  phone: string
  email: string
  company: string
  referral: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json()

    // Basic validation
    const { fullName, phone, email, company, referral, message } = body
    if (!fullName || !phone || !email || !company || !referral || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      )
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide.' },
        { status: 400 }
      )
    }

    // Save to database
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
      console.error('Database save failed:', dbError)
      // Fall back to structured logging if DB is unavailable
      console.info('Contact form submission (DB unavailable)', {
        fullName, phone, email, company, referral, message,
      })
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
