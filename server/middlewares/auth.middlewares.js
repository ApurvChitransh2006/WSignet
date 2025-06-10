const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader)
    return res.status(400).send("No Tokens")
  const token = authHeader.split(" ")[1]
  const JWT_SECRET_ACCESS_KEY = process.env.JWT_SECRET_ACCESS_KEY
  const decoded = jwt.verify(token, JWT_SECRET_ACCESS_KEY)
  if (!decoded.id)
    return res.status(400).send('Invalid Token')
  req.user = decoded
  next()
}

module.exports = authenticate