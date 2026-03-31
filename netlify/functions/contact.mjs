import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const contactRecipient = process.env.CONTACT_TO_EMAIL || 'omnicoretech516@gmail.com'

const json = (statusCode, body) =>
  new Response(JSON.stringify(body), {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
  })

export default async (request) => {
  if (request.method !== 'POST') {
    return json(405, { error: 'Method not allowed' })
  }

  const { name, email, company, service, message } = await request.json()

  if (!name || !email || !message) {
    return json(400, { error: 'Name, email, and message are required.' })
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return json(500, { error: 'Missing email configuration.' })
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [contactRecipient],
      replyTo: email,
      subject: `New Omnicore Tech inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'Not provided'}`,
        `Service: ${service || 'Not provided'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>New Omnicore Tech inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, '<br />')}</p>
        </div>
      `,
    })

    return json(200, { ok: true })
  } catch (error) {
    console.error('Resend email send failed', error)
    return json(500, { error: 'Failed to send email.' })
  }
}
