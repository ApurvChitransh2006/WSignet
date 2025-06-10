const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const User = require("../models/user.models");
const { generateAccessToken, generateRefreshToken } = require('../utils/auth.utils');
const authenticate = require("../middlewares/auth.middlewares");

// For Generating Tokens
router.post('/login',async (req, res)=>{
  const data = req.body
  if (!(data.firmcode && data.password))
    return res.status(400).send("The credentials are missing")

  const user = await User.findOne({firmcode: data.firmcode})
  if (!user) 
    return res.status(400).send("There is no one with this Credentials")

  const checkPass = user.comparePass(data.password)
  if (!checkPass) 
    return res.status(400).send("Credentials are Wrong")

  const accessToken = generateAccessToken({ id: user.id, firmname: user.firmname, firmcode: user.firmcode })
  const refreshToken = generateRefreshToken({ id: user.id })
  
  user.refresh_token = refreshToken
  await user.save()

  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "Production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    .json({ accessToken })
})

// For Refreshing Tokens
router.post("/refresh-token", async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).send("No refresh token");

  const JWT_SECRET_REFRESH_KEY = process.env.JWT_SECRET_REFRESH_KEY
  const decoded = jwt.verify(token, JWT_SECRET_REFRESH_KEY);
  const user = await User.findById(decoded.id);
  if (!user || user.refresh_token !== token)
    return res.status(403).send("Invalid refresh token");

  const accessToken = generateAccessToken({ id: user.id, firmname: user.firmname, firmcode: user.firmcode })
  const refreshToken = generateRefreshToken({ id: user.id })
  user.refresh_token = refreshToken;
  await user.save();

  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "Production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    .json({ accessToken });
});

// For getting data from the tokens
router.get('/profile', authenticate, async (req, res)=>{
  const user = await User.findById(req.user.id).select("-password");
  res.status(200).json(user);
})

// For Deleting the tokens
router.post("/logout", async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(204);

  const user = await User.findOne({ refresh_token: token });
  if (user) {
    user.refresh_token = null;
    await user.save();
  }

  res.clearCookie("refreshToken").send("Logged out");
});


module.exports = router