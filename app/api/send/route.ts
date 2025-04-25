import EmailTemplate from '@/components/Mail/EmailTemplate';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { email, subject, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: email,
      to: ['delivered@resend.dev'],
      subject: subject,
      react: await EmailTemplate({ message: message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}