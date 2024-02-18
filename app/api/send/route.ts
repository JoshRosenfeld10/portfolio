import EmailTemplate from '@/app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request) {
    const { email, subject, message } = await req.json();
    
  try {
    const data = await resend.emails.send({
      from: fromEmail as string,
      to: [fromEmail, email],
      subject: subject,
      react: EmailTemplate({ subject: subject, message: message}),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}