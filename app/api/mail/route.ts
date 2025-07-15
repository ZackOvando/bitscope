import { render } from "@react-email/render";
import WelcomeTemplate from "../../../emails";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest, response: NextResponse) {

  const { email, firstname } = await request.json();

  const { data, error } = await resend.emails.send({
    from: "Zack Ovando<ovandozack@gmail.com>",
    to: [email],
    subject: "Thank you for joining the Bitscope waitlist!",
    reply_to: "ovandozack@gmail.com",
    html: await render(WelcomeTemplate({ userFirstname: firstname })),
  });

  if (error) {
    return NextResponse.json(error);
  }

  if (!data) {
    return NextResponse.json({ message: "Failed to send email" });
  }

  return NextResponse.json({ message: "Email sent successfully" });
}
