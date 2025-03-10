const  nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config()
function createTransporter(config) {
  const transporter = nodemailer.createTransport(config);
  return transporter;
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


const sendMail = async (messageoption) => {
    try {
      const transporter = await createTransporter(configurations);
      await transporter.verify();
      const info = await transporter.sendMail(messageoption); // Use await without a callback
      console.log("Message sent: %s", info.response);
    } catch (error) {
      console.error("Error sending email: ", error);
    }
  };

module.exports=sendMail;