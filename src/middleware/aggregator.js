const { BaseLayer, Condiment, Mixin, Seasoning, Shell } = require('../schemas')

const getRandomIngredient = async (model) => {
  const ingredients = await model.find({})
  return ingredients[Math.floor(Math.random() * ingredients.length)]
}

const aggregateIngredients = async (req, res, next) => {
  if (req.method !== 'GET') {
    next()
  }
  
  const baseLayer = await getRandomIngredient(BaseLayer)
  const condiment = await getRandomIngredient(Condiment)
  const mixin = await getRandomIngredient(Mixin)
  const seasoning = await getRandomIngredient(Seasoning)
  const shell = await getRandomIngredient(Shell)

  req.taco = { base_layer: baseLayer, condiment, mixin, seasoning, shell }
  next()
}

module.exports = aggregateIngredients
