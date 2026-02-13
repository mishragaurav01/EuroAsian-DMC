import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, mobile, whatsapp, date, destination, message } = body;

        // Create reusable transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Build structured HTML email
        const htmlContent = `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                <div style="background-color: #E86D48; padding: 20px 30px; border-radius: 8px 8px 0 0;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🚀 New Lead Submission</h1>
                </div>
                <div style="padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #1F3A5F; width: 140px;">Name</td>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; color: #334155;">${name || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #1F3A5F;">Email</td>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; color: #334155;">${email || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #1F3A5F;">Mobile</td>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; color: #334155;">${mobile || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #1F3A5F;">WhatsApp</td>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; color: #334155;">${whatsapp || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #1F3A5F;">Travel Date</td>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; color: #334155;">${date || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #1F3A5F;">Destination</td>
                            <td style="padding: 12px 8px; border-bottom: 1px solid #f1f5f9; color: #334155;">${destination || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 8px; font-weight: 600; color: #1F3A5F; vertical-align: top;">Message</td>
                            <td style="padding: 12px 8px; color: #334155;">${message || 'No message provided'}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
                        This lead was submitted via the EuroAsian DMC website contact form.
                    </div>
                </div>
            </div>
        `;

        // Send mail
        await transporter.sendMail({
            from: `"EuroAsian DMC Website" <${process.env.EMAIL_USER}>`,
            to: 'gm3669317@gmail.com',
            subject: 'New Lead Submission',
            html: htmlContent,
        });

        return Response.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Email sending failed:', error);
        return Response.json(
            { success: false, error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
