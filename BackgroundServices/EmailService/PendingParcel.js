const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendmail");
const Parcel = require("../models/Parcel");

dotenv.config();

const SendPracelPendingEmail = async () => {
  const parcels = await Parcel.find({ status: 0 });

  if (parcels.length > 0) {
    for (let parcel of parcels) {
      // Email to the Sender
      ejs.renderFile(
        "templates/pendingparcel.ejs",
        {
          sendername: parcel.sendername,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientname,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, data) => {
          if (err) {
            console.log("EJS render error (sender):", err);
            return;
          }

          let messageOption = {
            from: process.env.EMAIL,
            to: parcel.senderemail,
            subject: "Wait for a While, Your Parcel is being Processed....",
            html: data,
          };

          try {
            await sendMail(messageOption);
            console.log("Pending email sent to sender:", parcel.senderemail);
          } catch (error) {
            console.log("Email send error (sender):", error);
          }
        }
      );

      // Email to the Recipient
      ejs.renderFile(
        "templates/pendingparcel.ejs",
        {
          sendername: parcel.sendername,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientname,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, data) => {
          if (err) {
            console.log("EJS render error (recipient):", err);
            return;
          }

          let messageOption = {
            from: process.env.EMAIL,
            to: parcel.recipientemail,
            subject: "You've got a parcel",
            html: data,
          };

          try {
            await sendMail(messageOption);
            console.log("Pending email sent to recipient:", parcel.recipientemail);
            await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 1 } });
          } catch (error) {
            console.log("Email send error (recipient):", error);
          }
        }
      );
    }
  }
};

module.exports = { SendPracelPendingEmail };
