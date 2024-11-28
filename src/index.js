const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()
const PORT = 5000

connectDB()

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})