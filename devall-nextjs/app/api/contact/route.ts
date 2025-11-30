import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Here you would typically send an email using a service like:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - AWS SES
    
    // For now, we'll just log it and return success
    console.log('Contact form submission:', { name, email, phone, service, message });

    // Example with console (replace with actual email service):
    console.log(`
      New Contact Form Submission:
      --------------------------------
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service: ${service || 'Not specified'}
      Message: ${message}
      --------------------------------
    `);

    // TODO: Implement actual email sending here
    // Example with Resend:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'DevAll <onboarding@resend.dev>',
      to: 'contact@devall.vn',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    */

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
