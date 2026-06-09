import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Check for existing subscriber
    const existing = await db.newsletterSubscriber.findUnique({
      where: { email },
    })

    if (existing) {
      if (existing.isActive) {
        return NextResponse.json(
          { error: 'This email is already subscribed.' },
          { status: 409 }
        )
      }
      // Re-subscribe
      await db.newsletterSubscriber.update({
        where: { email },
        data: { isActive: true, unsubscribedAt: null },
      })
      return NextResponse.json(
        { success: true, message: 'Welcome back! You have been re-subscribed.' },
        { status: 200 }
      )
    }

    // Create new subscriber
    const subscriber = await db.newsletterSubscriber.create({
      data: { email },
    })

    return NextResponse.json(
      { success: true, id: subscriber.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
