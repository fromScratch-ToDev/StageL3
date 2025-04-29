import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, subject, message } = await request.json();

  const mailgunDomain = process.env.MAILGUN_DOMAIN;
  const mailgunApiKey = process.env.MAILGUN_API_KEY;

  const body = new URLSearchParams();
  body.append('from', `Site Peinture <contact@${mailgunDomain}>`);
  body.append('to', 'ton@email.com');
  body.append('subject', `${subject}`);
  body.append('text', `Email: ${email}\nMessage:\n${message}`);

  const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`api:${mailgunApiKey}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    console.error(await response.text());
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
