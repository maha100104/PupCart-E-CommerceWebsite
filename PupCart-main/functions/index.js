/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// ✅ Your email config (use real credentials or environment vars in production)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_email_password",
  },
});

// ✅ Triggered when a user signs up
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const mailOptions = {
    from: "PupCart <your_email@gmail.com>",
    to: user.email,
    subject: "Welcome to PupCart 🐾",
    text: `Hi ${user.displayName || "there"},\n\nThanks for creating an account at PupCart! 🎉`,
  };

  return transporter.sendMail(mailOptions)
    .then(() => console.log("✅ Email sent to", user.email))
    .catch((error) => console.error("❌ Email error:", error));
});
