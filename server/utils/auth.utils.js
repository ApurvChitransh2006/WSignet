const jwt = require('jsonwebtoken')

// Generate & Return Access Token
const generateAccessToken = (data) => {
  const JWT_SECRET_ACCESS_KEY = process.env.JWT_SECRET_ACCESS_KEY
  const JWT_ACCESS_KEY_EXPIRY = process.env.JWT_ACCESS_KEY_EXPIRY
  const token = jwt.sign(data, JWT_SECRET_ACCESS_KEY, { expiresIn: JWT_ACCESS_KEY_EXPIRY})
  return token
}

// Generate & Return Refresh Token
const generateRefreshToken = (data) => {
  const JWT_SECRET_REFRESH_KEY = process.env.JWT_SECRET_REFRESH_KEY
  const JWT_REFRESH_KEY_EXPIRY = process.env.JWT_REFRESH_KEY_EXPIRY
  const token = jwt.sign(data, JWT_SECRET_REFRESH_KEY, { expiresIn: JWT_REFRESH_KEY_EXPIRY})
  return token
}

module.exports = { generateAccessToken, generateRefreshToken }