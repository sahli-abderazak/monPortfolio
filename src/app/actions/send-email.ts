"use server"

import nodemailer from "nodemailer"

export async function sendEmail(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validation
    if (!name || !email || !subject || !message) {
      return { success: false, message: "Tous les champs sont requis." }
    }

    // Validation email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, message: "Format d'email invalide." }
    }

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME || "rzsa1234@gmail.com",
        pass: process.env.MAIL_PASSWORD || "mspviwvzekyojvrb",
      },
    })

    // Configuration de l'email
    const mailOptions = {
      from: process.env.MAIL_USERNAME || "rzsa1234@gmail.com",
      to: "rzsa1234@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Nouveau Message Portfolio</h1>
          </div>
          
          <div style="padding: 30px;">
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #2563eb;">
              <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px;">Informations du contact</h2>
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; align-items: center;">
                  <strong style="color: #475569; min-width: 80px;">Nom:</strong>
                  <span style="color: #1e293b; font-weight: 500;">${name}</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <strong style="color: #475569; min-width: 80px;">Email:</strong>
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${email}</a>
                </div>
                <div style="display: flex; align-items: center;">
                  <strong style="color: #475569; min-width: 80px;">Sujet:</strong>
                  <span style="color: #1e293b; font-weight: 500;">${subject}</span>
                </div>
              </div>
            </div>

            <div style="background-color: #ffffff; padding: 25px; border: 2px solid #e2e8f0; border-radius: 12px; margin-bottom: 25px;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Message:</h3>
              <div style="line-height: 1.7; color: #475569; font-size: 16px; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); padding: 20px; border-radius: 12px; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #1e40af;">
                📧 Ce message a été envoyé depuis votre portfolio personnel
              </p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #64748b;">
                ${new Date().toLocaleString("fr-FR", {
                  timeZone: "Europe/Paris",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Message envoyé avec succès! Je vous répondrai bientôt." }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return {
      success: false,
      message: "Erreur lors de l'envoi du message. Veuillez réessayer ou me contacter directement.",
    }
  }
}