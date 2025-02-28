const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
const app = express();


//Middleware
// Enable CORS for all routes
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/auth",authRoute);


//DataBAse connection
const DB_path = process.env.DB;
mongoose.connect(DB_path, {
    useNewUrlParser: true,       // Use the new URL parser
    useUnifiedTopology: true,    // Use the new Server Discovery and Monitoring engine
  }).then(() => {
    console.log("DB connection is successful");
  }).catch((err) => {
    console.log("DB connection failed:", err);
  });



//server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is runnig on port ${PORT}`)

})
