const mongoose = require('mongoose')
const { ingredientSchema } = require('../schemas')

const getURI = () => {
  return process.env.NODE_ENV === 'production'
    ? process.env.PROD_URI
    : process.env.DEV_URI
}

mongoose.connect(`${getURI()}/tiktaco`)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log('Could not connect to MongoDB', err))

const BaseLayer = mongoose.model('Base Layer', ingredientSchema)
const Condiment = mongoose.model('Condiment', ingredientSchema)
const Mixin = mongoose.model('Mixin', ingredientSchema)
const Seasoning = mongoose.model('Seasoning', ingredientSchema)
const Shell = mongoose.model('Shell', ingredientSchema)

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

  req.taco = { base_layer, condiment, mixin, seasoning, shell }
  next()
}

module.exports = aggregateIngredients
