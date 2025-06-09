require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res)=>{
  res.json({'Message':'This is a Test API'})
})

module.exports = app