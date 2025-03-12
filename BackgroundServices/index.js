const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require("node-cron");
const mongoose = require("mongoose");
const { sendWelcomeEmail } = require("./EmailService/WelcomeEmail");
dotenv.config();

//DB connection
const DB = process.env.DB;
 mongoose
  .connect(DB)
  .then(() => {
    console.log("Db connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

//Task Sheduler
const run = () => {
  // Schedule a task to run every minute
  cron.schedule("* * * * * *", () => {
    sendWelcomeEmail();
  });
};
run();

//Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`BackgroundServices is running on Port ${PORT}`);
});
