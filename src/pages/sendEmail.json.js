import { Resend } from "resend";

const resend = new Resend("re_48emvGuW_7z15gu3BYME8xVbJRSP6CDdL");

export async function POST({ request }) {
  const body = await request.json();
  const { subject, text } = body;
  console.log(subject, text);

  const send = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'adridevelop11@gmail.com',
    subject,
    html: text.value,
    text,
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: 'OK',
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: 'Error interno del servidor',
      }
    );
  }
}


