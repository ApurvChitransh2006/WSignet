const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log("Database Connected Successfully !!!");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
};

module.exports = connectToDb;
