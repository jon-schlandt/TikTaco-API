const express = require('express')
const aggregateIngredients = require('../middleware/aggregator')

const router = express.Router()

router.use('/', aggregateIngredients)

router.get('/', (req, res) => {
  res.send(req.taco)
})

module.exports = router
