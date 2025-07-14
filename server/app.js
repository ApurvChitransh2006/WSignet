require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/db");
const userRoutes = require("./routes/user.routes.js");
const authRoutes = require("./routes/auth.routes.js");
const itemRoutes = require("./routes/products.routes.js");
const accountsRoutes = require("./routes/accounts.routes.js");
const ledgerRoutes = require("./routes/ledger.routes.js");
const app = express();

connectToDb();

app.use(morgan("dev"));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
  origin: process.env.REACT_APP_URL, 
  credentials: true
}));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/item", itemRoutes);
app.use("/api/accounts", accountsRoutes);
app.use("/api/ledger", ledgerRoutes);

app.get("/", (req, res) => {
  res.json({ Message: "This is a Test API" });
});

const PORT = process.env.PORT || 5000; // use Render's dynamic port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
