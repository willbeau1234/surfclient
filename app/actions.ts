"use server"

const { Resend } = require('resend')
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitBooking(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  console.log('Form data received:', { firstName, lastName, email, message })

  try {
    const { data, error } = await resend.emails.send({
      from: 'Bali Mahalo Surf <onboarding@resend.dev>',
      to: ['balimahalosurfcoach@gmail.com'],
      subject: `New Booking Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Booking Request
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          
          <p style="color: #666; font-size: 14px;">
            Reply directly to this email to respond to ${firstName}.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: `Failed to send email: ${error.message}` }
    }

    console.log('Email sent successfully:', data?.id)
    return { success: true }
    
  } catch (error) {
    console.error('Email error details:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return { success: false, error: `Failed to send email: ${errorMessage}` }
  }
}