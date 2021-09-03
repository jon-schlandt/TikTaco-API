const express = require('express')
const { BaseLayer, Condiment, Mixin, Seasoning, Shell } = require('../schemas')

const router = express.Router()

const getRandomIngredient = async (model) => {
  const ingredients = await model.find({})
  return ingredients[Math.floor(Math.random() * ingredients.length)]
}

const aggregateIngredients = async (req, res) => {  
  const baseLayer = await getRandomIngredient(BaseLayer)
  const condiment = await getRandomIngredient(Condiment)
  const mixin = await getRandomIngredient(Mixin)
  const seasoning = await getRandomIngredient(Seasoning)
  const shell = await getRandomIngredient(Shell)

  res.status(200).json({ base_layer: baseLayer, condiment, mixin, seasoning, shell })
}

router.get('/', aggregateIngredients)

module.exports = router
