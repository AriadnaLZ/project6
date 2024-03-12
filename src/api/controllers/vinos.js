const Vino = require("../models/vinos")

const getVinos = async (req, res, next) => {
  try {
    const vinos = await Vino.find()
    return res.status(200).json(vinos)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getVinosById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vino = await Vino.findById(id)
    return res.status(200).json(vino)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getVinosbyCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params
    const vinos = await Vino.find( { categoria} )
    return res.status(200).json(vinos)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getVinosByPrice = async (req, res, next) => {
  try {
    const { precio } = req.params
    const vinos = await Vino.find({precio: { $lt: precio}})
    return res.status(200).json(vinos)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postVinos = async (req, res, next) => {
  try {
    const newVino = new Vino(req.body)
    const vinoSaved = await newVino.save()
    return res.status(201).json(vinoSaved)
    } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const putVinos = async (req, res, next) => {
  try {
    const { id } = req.params
    const newVino = new Vino(req.body)
    newVino._id = id
    const vinoUpdated = await Vino.findByIdAndUpdate(id, newVino, {
      new: true
    })
    return res.status(200).json(vinoUpdated)
  } catch (error) {
    
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteVinos = async (req, res, next) => {
  try {
    const { id } = req.params
    const vinoDeleted = await Vino.findByIdAndDelete(id)
    return res.status(200).json(vinoDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  getVinos,
getVinosById,
getVinosbyCategory,
getVinosByPrice,
postVinos,
putVinos,
deleteVinos
}