import { NextRequest, NextResponse } from 'next/server'

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

    // In production, you would:
    // 1. Send an email notification (e.g., via Resend, SendGrid)
    // 2. Save to a database (e.g., via Prisma)
    // 3. Send a WhatsApp notification to the team
    // For now, we log it and return success

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('📩 New Contact Form Submission')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log(`Name:    ${fullName}`)
    console.log(`Phone:   ${phone}`)
    console.log(`Email:   ${email}`)
    console.log(`Company: ${company}`)
    console.log(`Source:  ${referral}`)
    console.log(`Message: ${message}`)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

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
