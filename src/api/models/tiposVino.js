const mongoose = require("mongoose")

const tiposVinoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    vinos: [{ type: mongoose.Types.ObjectId, ref: "vinos", required: false }]
  },
  {
    timestamps: true,
    collection: "tiposVino",
  }
)

const tiposVino = mongoose.model('tiposVino', tiposVinoSchema, 'tiposVino')
module.exports = tiposVino