const express = require('express')
const getIngredients = require('../middleware/aggregator')
const router = express.Router()

router.use('/', getIngredients)

router.get('/', (req, res) => {
  res.send(req.taco)
})

module.exports = router
