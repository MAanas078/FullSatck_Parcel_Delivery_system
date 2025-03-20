const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

function createTransporter(config) {
  return nodemailer.createTransport(config);
}

let configurations = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

const sendMail = async (messageOptions) => {
  try {
    const transporter = createTransporter(configurations);
    await transporter.verify(); // Verify the connection configuration
    const info = await transporter.sendMail(messageOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

module.exports = sendMail;