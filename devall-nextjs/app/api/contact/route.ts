import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  // Debug: Check if API key is loaded
  console.log('🔑 API Key loaded:', process.env.RESEND_API_KEY ? 'Yes (starts with: ' + process.env.RESEND_API_KEY.substring(0, 10) + '...)' : 'NO - Missing!');
  
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
    const contactId = `CT-${Date.now()}`;

    // Send email to DevAll team
    try {
      console.log('🔄 Attempting to send email to: nguyenlamphuquykh@gmail.com');
      const emailResult = await resend.emails.send({
        from: 'DevAll Contact <onboarding@resend.dev>',
        to: 'nguyenlamphuquykh@gmail.com',
        subject: `🔔 New Contact Form - ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #1F2937 0%, #111827 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .contact-id { background: #1F2937; color: white; padding: 15px; border-radius: 8px; text-align: center; font-size: 20px; font-weight: bold; margin: 20px 0; }
                .info-row { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #1F2937; }
                .label { font-weight: bold; color: #1F2937; margin-bottom: 5px; }
                .value { color: #374151; }
                .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">🍁 New Contact Form Submission</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">DevAll Digitalise Solutions</p>
                </div>
                <div class="content">
                  <div class="contact-id">
                    Contact ID: ${contactId}
                  </div>
                  
                  <div class="info-row">
                    <div class="label">👤 Client Name</div>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📧 Email</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📱 Phone</div>
                    <div class="value"><a href="tel:${phone}">${phone}</a></div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">💼 Service of Interest</div>
                    <div class="value">${service || 'Not specified'}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">💬 Message</div>
                    <div class="value" style="white-space: pre-wrap;">${message}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">🕐 Submitted At</div>
                    <div class="value">${submittedAt}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>This is an automated notification from DevAll Contact System</p>
                  <p>Please respond to the client as soon as possible.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
      
      console.log('✅ Email sent successfully to DevAll team:', emailResult);

      // Note: Customer confirmation email is disabled for free Resend plan
      // Free plan only allows sending to verified email address
      // To enable customer emails, verify a domain at resend.com/domains

    } catch (emailError) {
      console.error('❌ Email sending error:', emailError);
      console.error('Error details:', JSON.stringify(emailError, null, 2));
      // Continue even if email fails - at least log the submission
    }

    // Log contact details
    console.log(`
      ✅ New Contact Form Submission:
      --------------------------------
      Contact ID: ${contactId}
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service: ${service || 'Not specified'}
      Message: ${message}
      Submitted: ${submittedAt}
      --------------------------------
    `);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
