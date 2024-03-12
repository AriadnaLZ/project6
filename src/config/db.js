const mongoose = require('mongoose')

const connectDB = async () => {
try {
  await mongoose.connect(process.env.DB_URL)
  console.log('Conectado con éxito a la base de datos')
} catch (error) {
console.log('Algo ha salido mal')
}
}

module.exports = { connectDB }

// mongoose
// .connect(process.env.DB_URL).
// then(() => {
//   console.log('Conectado con éxito a la base de datos')
// })
// .catch(() => {
//   console.log('Algo ha fallado')
// })
