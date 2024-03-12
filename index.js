require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const vinosRouter = require('./src/api/routes/vinos')
const tiposVinoRouter = require('./src/api/routes/tiposVino')

const app = express()


app.use(express.json())
connectDB()
app.use('/api/v1/tiposVinos', tiposVinoRouter)
app.use('/api/v1/vinos', vinosRouter)


app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})

