require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/db");
const userRoutes = require("./routes/user.routes.js");
const authRoutes = require("./routes/auth.routes.js");
const app = express();

connectToDb();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ Message: "This is a Test API" });
});

module.exports = app;
