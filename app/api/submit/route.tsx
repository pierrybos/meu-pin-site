import { NextResponse } from 'next/server';
import { EmailTemplate } from '@app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const message = formData.get('message')
  const clube = formData.get('clube')

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['pierry.bos@gmail.com'],
      subject: 'MeuPin - Contato do Site',
      react: EmailTemplate({ name, email, phone, message, clube }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
