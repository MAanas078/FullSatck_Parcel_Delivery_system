const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendmail");
const Parcel = require("../models/Parcel");
dotenv.config();

const SendParcelDeliveredEmail = async () => {
  const parcels = await Parcel.find({ status: 2 });
  if (parcels.length > 0) {
    for (let parcel of parcels) {
      ejs.renderFile(
        "templates/deliveredparcel.ejs",
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
            console.error("Error rendering EJS for sender:", err);
            return;
          }
          let messageOption = {
            from: process.env.EMAIL,
            to: parcel.senderemail,
            subject: "Your parcel has been delivered",
            html: data,
          };

          try {
            await sendMail(messageOption);
          } catch (error) {
            console.error("Error sending email to sender:", error);
          }
        }
      );

      ejs.renderFile(
        "templates/deliveredparcel.ejs",
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
            console.error("Error rendering EJS for recipient:", err);
            return;
          }
          let messageoption = {
            from: process.env.EMAIL,
            to: parcel.recipientemail,
            subject: "Your parcel has been delivered",
            html: data,
          };
          try {
            await sendMail(messageoption);
            await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 3 } });
          } catch (error) {
            console.error("Error updating parcel status or sending email:", error);
          }
        }
      );
    }
  }
};

module.exports = { SendParcelDeliveredEmail };
