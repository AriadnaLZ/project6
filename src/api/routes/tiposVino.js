const {
  getTiposVino,
  getTiposVinoById,
  putTiposVino,
  postTiposVino,
  deleteTiposVino
} = require('../controllers/tiposVino')


const tiposVinoRouter = require('express').Router()

tiposVinoRouter.get("/:id", getTiposVinoById)
tiposVinoRouter.get('/', getTiposVino)
tiposVinoRouter.post('/', postTiposVino)
tiposVinoRouter.put('/:id', putTiposVino)
tiposVinoRouter.delete('/:id', deleteTiposVino)

module.exports = tiposVinoRouter