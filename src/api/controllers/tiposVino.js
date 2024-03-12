const tiposVino = require('../models/tiposVino')

const getTiposVino = async (req, res, next) => {
  try {
    const tipoVino = await tiposVino.find().populate("vinos")
    return res.status(200).json(tipoVino)
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getTiposVinoById = async (req, res, next) => {
  try {
    const { id } = req.params
    const tipoVino = await tiposVino.findById(id).populate("vinos")
    return res.status(200).json(tipoVino)
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const putTiposVino = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldTiposVino =  await tiposVino.findById(id)
    const newTiposVino = await tiposVino(req.body)
    newTiposVino._id = id
    newTiposVino.vinos = [...oldTiposVino.vinos, req.body.vinos]
    const tiposVinoUpdated = await tiposVino.findByIdAndUpdate(id, newTiposVino, {new: true})
    return res.status(200).json(tiposVinoUpdated)
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const postTiposVino = async (req, res, next) => {
  try {
    const newTipoVino = new tiposVino(req.body)
    const tipoVinoSaved = await newTipoVino.save()
    return res.status(400).json(tipoVinoSaved)
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const deleteTiposVino = async (req, res, next) => {
  try {
    const { id } = req.params
    const tipoVinoDeleted = await tiposVino.findByIdAndDelete(id)
    return res.status(200).json(tipoVinoDeleted)
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

module.exports = {
  getTiposVino,
  getTiposVinoById,
  putTiposVino,
  postTiposVino,
  deleteTiposVino
}