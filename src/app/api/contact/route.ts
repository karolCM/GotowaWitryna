import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";
import { buildAdminEmail, buildClientEmail, type ContactFormData } from "@/lib/email-templates";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, email, socialLink, industryName, source } = body;

    if (!companyName || !email || !socialLink) {
      return NextResponse.json(
        { error: "Brakuje wymaganych pol formularza." },
        { status: 400 }
      );
    }

    const data: ContactFormData = {
      companyName: String(companyName).trim(),
      email: String(email).trim().toLowerCase(),
      socialLink: String(socialLink).trim(),
      industryName: industryName ? String(industryName).trim() : undefined,
      source: source ? String(source).trim() : undefined,
    };

    const from = process.env.MAILTRAP_FROM ?? "GotowaWitryna <hello@gotowawitryna.pl>";
    const adminEmail = process.env.ADMIN_EMAIL ?? "karol@devtrade.pl";

    // Send both emails concurrently
    await Promise.all([
      // Admin notification
      transporter.sendMail({
        from,
        to: adminEmail,
        subject: `[GotowaWitryna] Nowe zgloszenie demo — ${data.companyName}`,
        html: buildAdminEmail(data),
      }),
      // Client confirmation
      transporter.sendMail({
        from,
        to: data.email,
        subject: "Twoje demo GotowaWitryna jest w drodze! Gotowe w 24h",
        html: buildClientEmail(data),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] email error:", error);
    return NextResponse.json(
      { error: "Nie udalo sie wyslac wiadomosci. Sprobuj ponownie." },
      { status: 500 }
    );
  }
}
