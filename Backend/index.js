const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const parcelRoute = require("./routes/parcel");

dotenv.config();
const app = express();



const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// ✅ ROUTES
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/parcels", parcelRoute);

// ✅ Database Connection
const DB_path = process.env.DB;
mongoose.connect(DB_path, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("DB connection is successful"))
.catch((err) => console.log("DB connection failed:", err));

// ✅ Start Server
const PORT = process.env.PORT || 8001; // Default to 8001 if PORT is not in .env
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
