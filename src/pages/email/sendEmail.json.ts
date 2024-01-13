import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend(import.meta.env.RESEND_API_KEY)

// Outputs: /builtwith.json
export const POST: APIRoute = async ({params, request}) => {

    const body = await request.json();
    const {subject, text } = body;
    console.log(subject, text)
    
    
    const send = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'adridevelop11@gmail.com',
        subject,
        html: text.value,
        text
    })

    if(send.data){
        return new Response(
            JSON.stringify({
                message: send.data,
            }),
            {
                status: 200,
                statusText: 'OK'
            }
        );
    } else {
        return new Response(
            JSON.stringify({
                message: send.error,
            }),
            {
                status: 500,
                statusText: 'Internal Server Error'
            }
        );
    }

}