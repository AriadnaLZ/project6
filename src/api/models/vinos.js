const mongoose = require('mongoose')

const vinoSchema = new mongoose.Schema({
  nombre: {type: String, required: true},
  imagen: {type: String, required: true},
  precio: {type: Number, required: true},
 categoria: {
  type: String,
  required: true,
  enum: [
    'joven',
    'crianza',
    'reserva',
    'gran reserva'
  ]
 }
}, {
  timestamps:true,
  collection: "vinos"
})

const Vino = mongoose.model('vinos', vinoSchema, 'vinos')
module.exports = Vino