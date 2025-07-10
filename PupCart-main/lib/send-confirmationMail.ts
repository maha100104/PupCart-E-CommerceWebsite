// lib/sendConfirmation.ts
import emailjs from "@emailjs/browser"

export const sendConfirmationEmail = async (userEmail: string) => {
  try {
    await emailjs.send(
      "service_dk61pco",      // your service ID
      "template_ke8ughk",     // your template ID
      { email: userEmail },   // variables to replace in template
      "PIDm5lMmS4JSf3G6A"      // your public key
    )
    console.log("✅ Email sent to:", userEmail)
  } catch (err) {
    console.error("❌ Failed to send email", err)
  }
}
