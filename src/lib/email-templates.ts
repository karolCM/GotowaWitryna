export interface ContactFormData {
  companyName: string;
  email: string;
  socialLink: string;
  industryName?: string;
  source?: string;
}

// ─── Admin notification email ─────────────────────────────────────────────────

export function buildAdminEmail(data: ContactFormData): string {
  const industry = data.industryName
    ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Branża</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#111827;">${data.industryName}</td></tr>`
    : "";
  const source = data.source
    ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Źródło</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#111827;">${data.source}</td></tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Nowe zgłoszenie demo — GotowaWitryna</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#ea580c 0%,#c2410c 100%);border-radius:16px 16px 0 0;padding:40px 48px;text-align:center;">
          <div style="font-size:32px;margin-bottom:8px;">&#128293;</div>
          <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;letter-spacing:-0.5px;">
            Nowe zgłoszenie demo
          </h1>
          <p style="margin:8px 0 0;color:#fed7aa;font-size:14px;">GotowaWitryna.pl</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#fff;padding:40px 48px;">
          <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.6;">
            Ktoś wypełnił formularz i prosi o bezpłatne demo strony. Oto szczegóły:
          </p>

          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <tr style="background:#f9fafb;">
              <td colspan="2" style="padding:14px 20px;font-size:12px;font-weight:700;color:#6b7280;letter-spacing:0.05em;text-transform:uppercase;">
                Dane zgłoszenia
              </td>
            </tr>
            <tr style="border-top:1px solid #e5e7eb;">
              <td style="padding:14px 20px;color:#6b7280;font-size:14px;width:40%;border-right:1px solid #e5e7eb;">Firma</td>
              <td style="padding:14px 20px;font-size:14px;font-weight:600;color:#111827;">${data.companyName}</td>
            </tr>
            <tr style="background:#f9fafb;border-top:1px solid #e5e7eb;">
              <td style="padding:14px 20px;color:#6b7280;font-size:14px;width:40%;border-right:1px solid #e5e7eb;">E-mail</td>
              <td style="padding:14px 20px;font-size:14px;font-weight:600;color:#ea580c;">
                <a href="mailto:${data.email}" style="color:#ea580c;text-decoration:none;">${data.email}</a>
              </td>
            </tr>
            <tr style="border-top:1px solid #e5e7eb;">
              <td style="padding:14px 20px;color:#6b7280;font-size:14px;width:40%;border-right:1px solid #e5e7eb;">Profil FB/IG</td>
              <td style="padding:14px 20px;font-size:14px;">
                <a href="${data.socialLink}" style="color:#3b82f6;text-decoration:none;word-break:break-all;">${data.socialLink}</a>
              </td>
            </tr>
            ${industry}
            ${source}
          </table>

          <div style="margin:32px 0;text-align:center;">
            <a href="mailto:${data.email}?subject=Twoje%20demo%20GotowaWitryna%20jest%20gotowe"
               style="display:inline-block;background:linear-gradient(135deg,#ea580c,#c2410c);color:#fff;text-decoration:none;padding:14px 32px;border-radius:10px;font-weight:700;font-size:15px;">
              &#9993;&nbsp; Odpowiedz klientowi
            </a>
          </div>

          <p style="margin:0;color:#9ca3af;font-size:13px;text-align:center;">
            Wiadomość wysłana automatycznie z formularza GotowaWitryna.pl
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#1f2937;border-radius:0 0 16px 16px;padding:24px 48px;text-align:center;">
          <p style="margin:0;color:#9ca3af;font-size:13px;">
            GotowaWitryna.pl &mdash; Profesjonalne strony dla lokalnych firm
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Client confirmation email ─────────────────────────────────────────────────

export function buildClientEmail(data: ContactFormData): string {
  const firstName = data.companyName.split(" ")[0];

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Twoje demo jest w drodze! — GotowaWitryna</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Hero header -->
        <tr><td style="background:linear-gradient(135deg,#ea580c 0%,#9a3412 100%);border-radius:16px 16px 0 0;padding:56px 48px;text-align:center;">
          <div style="font-size:56px;line-height:1;margin-bottom:16px;">&#127881;</div>
          <h1 style="margin:0 0 8px;color:#fff;font-size:28px;font-weight:800;letter-spacing:-0.5px;">
            Twoje demo jest w drodze!
          </h1>
          <p style="margin:0;color:#fed7aa;font-size:16px;line-height:1.5;">
            Przygotujemy je specjalnie dla Ciebie&nbsp;&mdash;&nbsp;w ciągu 24 godzin.
          </p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#fff;padding:48px;">

          <p style="margin:0 0 20px;color:#374151;font-size:16px;line-height:1.7;">
            Cześć <strong style="color:#111827;">${firstName}</strong>,
          </p>
          <p style="margin:0 0 20px;color:#374151;font-size:16px;line-height:1.7;">
            Dziękujemy za wypełnienie formularza! Odebraliśmy Twoje zgłoszenie
            i już zabieramy się do pracy nad projektem Twojej strony.
          </p>

          <!-- Timeline -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin:32px 0;">
            <tr>
              <td style="width:44px;vertical-align:top;padding-top:2px;">
                <div style="width:36px;height:36px;background:#ea580c;border-radius:50%;color:#fff;font-weight:700;font-size:14px;text-align:center;line-height:36px;">1</div>
              </td>
              <td style="padding:0 0 24px 12px;">
                <p style="margin:0 0 4px;font-weight:700;color:#111827;font-size:15px;">Teraz</p>
                <p style="margin:0;color:#6b7280;font-size:14px;line-height:1.5;">
                  Pobieramy zdjęcia i informacje z Twojego profilu w mediach społecznościowych.
                </p>
              </td>
            </tr>
            <tr>
              <td style="width:44px;vertical-align:top;padding-top:2px;">
                <div style="width:36px;height:36px;background:#f97316;border-radius:50%;color:#fff;font-weight:700;font-size:14px;text-align:center;line-height:36px;">2</div>
              </td>
              <td style="padding:0 0 24px 12px;">
                <p style="margin:0 0 4px;font-weight:700;color:#111827;font-size:15px;">W ciągu kilku godzin</p>
                <p style="margin:0;color:#6b7280;font-size:14px;line-height:1.5;">
                  Budujemy Twoją spersonalizowaną stronę www z logo, ofertą i galerią.
                </p>
              </td>
            </tr>
            <tr>
              <td style="width:44px;vertical-align:top;padding-top:2px;">
                <div style="width:36px;height:36px;background:#fb923c;border-radius:50%;color:#fff;font-weight:700;font-size:14px;text-align:center;line-height:36px;">3</div>
              </td>
              <td style="padding:0 0 0 12px;">
                <p style="margin:0 0 4px;font-weight:700;color:#111827;font-size:15px;">Do 24 godzin</p>
                <p style="margin:0;color:#6b7280;font-size:14px;line-height:1.5;">
                  Wysyłamy link do gotowego projektu. Oglądasz za darmo, bez zobowiązań.
                </p>
              </td>
            </tr>
          </table>

          <!-- Info box -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;margin:32px 0;">
            <tr><td style="padding:20px 24px;">
              <p style="margin:0 0 8px;font-weight:700;color:#9a3412;font-size:15px;">&#128161; Co się teraz dzieje?</p>
              <ul style="margin:0;padding-left:20px;color:#c2410c;font-size:14px;line-height:1.8;">
                <li>Analizujemy Twój profil w mediach społecznościowych</li>
                <li>Dobieramy odpowiedni szablon i kolorystykę dla Twojej branży</li>
                <li>Tworzymy treści zoptymalizowane pod SEO dla Twojej lokalizacji</li>
                <li>Konfigurujemy Google Business Profile</li>
              </ul>
            </td></tr>
          </table>

          <!-- Summary box -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:12px;margin:0 0 32px;">
            <tr><td style="padding:20px 24px;">
              <p style="margin:0 0 12px;font-size:12px;font-weight:700;color:#9ca3af;letter-spacing:0.08em;text-transform:uppercase;">Twoje zgłoszenie</p>
              <p style="margin:0 0 6px;font-size:14px;color:#374151;"><strong>Firma:</strong> ${data.companyName}</p>
              <p style="margin:0 0 6px;font-size:14px;color:#374151;"><strong>E-mail:</strong> ${data.email}</p>
              <p style="margin:0;font-size:14px;color:#374151;"><strong>Profil:</strong> ${data.socialLink}</p>
            </td></tr>
          </table>

          <p style="margin:0;color:#6b7280;font-size:14px;line-height:1.6;text-align:center;">
            Masz pytania? Odpisz na tę wiadomość lub napisz na
            <a href="mailto:karol@devtrade.pl" style="color:#ea580c;text-decoration:none;font-weight:600;">karol@devtrade.pl</a>
          </p>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:linear-gradient(135deg,#1f2937,#111827);border-radius:0 0 16px 16px;padding:32px 48px;text-align:center;">
          <p style="margin:0 0 8px;color:#f9fafb;font-size:16px;font-weight:700;">GotowaWitryna.pl</p>
          <p style="margin:0 0 16px;color:#9ca3af;font-size:13px;">Profesjonalne strony internetowe dla lokalnych firm</p>
          <div style="display:flex;gap:8px;justify-content:center;">
            <span style="color:#9ca3af;font-size:12px;">&#127757; Bez zobowiązań</span>
            <span style="color:#4b5563;font-size:12px;">&bull;</span>
            <span style="color:#9ca3af;font-size:12px;">&#9203; Gotowe w 24h</span>
            <span style="color:#4b5563;font-size:12px;">&bull;</span>
            <span style="color:#9ca3af;font-size:12px;">&#128274; Dane są bezpieczne</span>
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
