require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectToDb = require('./config/db')
const userRoutes = require('./routes/user.routes.js')
const app = express()

connectToDb()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/api/user', userRoutes)

app.get('/', (req, res)=>{
  res.json({'Message':'This is a Test API'})
})

module.exports = app