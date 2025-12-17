import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  // Debug: Check if API key is loaded
  console.log('🔑 API Key loaded:', process.env.RESEND_API_KEY ? 'Yes (starts with: ' + process.env.RESEND_API_KEY.substring(0, 10) + '...)' : 'NO - Missing!');
  
  try {
    const body = await request.json();
    const { name, email, phone, service, preferredDate, preferredTime, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const bookingId = `BK-${Date.now()}`;
    const submittedAt = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    // Send email to DevAll team
    try {
      console.log('🔄 Attempting to send email to: nguyenlamphuquykh@gmail.com');
      const emailResult = await resend.emails.send({
        from: 'DevAll Booking <onboarding@resend.dev>',
        to: 'nguyenlamphuquykh@gmail.com',
        subject: `🔔 New Consultation Booking - ${bookingId}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #1F2937 0%, #111827 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .booking-id { background: #1F2937; color: white; padding: 15px; border-radius: 8px; text-align: center; font-size: 20px; font-weight: bold; margin: 20px 0; }
                .info-row { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #1F2937; }
                .label { font-weight: bold; color: #1F2937; margin-bottom: 5px; }
                .value { color: #374151; }
                .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">🍁 New Consultation Booking</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">DevAll Digitalise Solutions</p>
                </div>
                <div class="content">
                  <div class="booking-id">
                    Booking ID: ${bookingId}
                  </div>
                  
                  <div class="info-row">
                    <div class="label">👤 Client Name</div>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📧 Email</div>
                    <div class="value">${email}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📱 Phone</div>
                    <div class="value">${phone}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">💼 Service of Interest</div>
                    <div class="value">${service || 'Not specified'}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">📅 Preferred Date</div>
                    <div class="value">${preferredDate || 'Not specified'}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">⏰ Preferred Time</div>
                    <div class="value">${preferredTime || 'Not specified'}</div>
                  </div>
                  
                  ${message ? `
                  <div class="info-row">
                    <div class="label">💬 Additional Notes</div>
                    <div class="value">${message}</div>
                  </div>
                  ` : ''}
                  
                  <div class="info-row">
                    <div class="label">🕐 Submitted At</div>
                    <div class="value">${submittedAt}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>This is an automated notification from DevAll Booking System</p>
                  <p>Please contact the client as soon as possible to confirm the consultation.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
      
      console.log('✅ Email sent successfully to DevAll team:', emailResult);

      // Send confirmation email to customer
      console.log('🔄 Attempting to send confirmation email to:', email);
      const confirmationResult = await resend.emails.send({
        from: 'DevAll Team <onboarding@resend.dev>',
        to: email,
        subject: '✅ Your Consultation Booking Confirmed',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #1F2937 0%, #111827 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .booking-id { background: #1F2937; color: white; padding: 15px; border-radius: 8px; text-align: center; font-size: 18px; font-weight: bold; margin: 20px 0; }
                .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; }
                .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">Thank You, ${name}! 🍁</h1>
                  <p style="margin: 10px 0 0 0;">Your consultation has been booked</p>
                </div>
                <div class="content">
                  <p>We have received your consultation booking request and will contact you shortly to confirm the details.</p>
                  
                  <div class="booking-id">
                    Your Booking ID: ${bookingId}
                  </div>
                  
                  <div class="info-box">
                    <h3 style="margin-top: 0; color: #1F2937;">📋 Booking Details</h3>
                    <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
                    <p><strong>Preferred Time:</strong> ${preferredTime || 'Not specified'}</p>
                    <p><strong>Service:</strong> ${service || 'General Consultation'}</p>
                  </div>
                  
                  <div class="info-box">
                    <h3 style="margin-top: 0; color: #1F2937;">📞 What's Next?</h3>
                    <ul>
                      <li>Our team will review your request</li>
                      <li>We'll contact you within 24 hours to confirm the consultation time</li>
                      <li>Keep your phone handy for our call</li>
                    </ul>
                  </div>
                  
                  <p style="margin-top: 20px;">If you have any urgent questions, please contact us at:</p>
                  <p><strong>Email:</strong> contact@devall.vn<br>
                  <strong>Phone:</strong> +84 XXX XXX XXX</p>
                </div>
                <div class="footer">
                  <p><strong>DevAll Digitalise Solutions</strong></p>
                  <p>Your vision is the start of market leadership...</p>
                  <p style="margin-top: 15px; font-size: 12px;">This is an automated confirmation email. Please do not reply directly to this email.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
      
      console.log('✅ Confirmation email sent successfully to customer:', confirmationResult);

    } catch (emailError) {
      console.error('❌ Email sending error:', emailError);
      console.error('Error details:', JSON.stringify(emailError, null, 2));
      // Continue even if email fails - at least log the booking
    }

    // Log booking details
    console.log(`
      ✅ New Consultation Booking:
      --------------------------------
      Booking ID: ${bookingId}
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service: ${service || 'General Consultation'}
      Preferred Date: ${preferredDate || 'Not specified'}
      Preferred Time: ${preferredTime || 'Not specified'}
      Message: ${message || 'No additional message'}
      Submitted: ${submittedAt}
      --------------------------------
    `);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Booking received successfully. We will contact you shortly to confirm your consultation.',
        bookingId
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking. Please try again.' },
      { status: 500 }
    );
  }
}
