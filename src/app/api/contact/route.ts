import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, subject, message } = body;

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const discordPayload = {
      content: `<@852816933626970122>\n🚨 **New Project Inquiry!**\n\n**Name:** ${name}\n**Email:** ${email}\n**Company:** ${company || 'N/A'}\n**Type:** ${subject}\n\n**Message:**\n${message}`
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordPayload),
    });

    if (!response.ok) {
      throw new Error('Discord rejected the payload');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}