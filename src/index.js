const express = require('express')
const connectDB = require('./config/db')
const bookRoutes = require('./routes/bookRoutes')
require('dotenv').config()

const app = express()
const PORT = 5000

app.use(express.json())

connectDB()

app.use('/api/books', bookRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})