const { getVinos, getVinosbyCategory, getVinosByPrice, getVinosById, postVinos, putVinos, deleteVinos } = require("../controllers/vinos");

const vinosRouter = require('express').Router()

vinosRouter.get('/precio/:precio', getVinosByPrice)
vinosRouter.get('/categoria/:categoria', getVinosbyCategory)
vinosRouter.get('/:id', getVinosById)
vinosRouter.get('/', getVinos)
vinosRouter.post('/', postVinos)
vinosRouter.put('/:id', putVinos)
vinosRouter.delete('/:id', deleteVinos)

module.exports = vinosRouter