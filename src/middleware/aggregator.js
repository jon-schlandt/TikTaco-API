const mongoose = require('mongoose')
const config = require('config')
const { ingredientSchema } = require('../schemas')

const getConnectionString = () => {
  if (process.env.NODE_ENV === 'production') {
    const credentials = `${config.get('db.username')}:${config.get('db.password')}`
    return config.get('db.host').replace('<credentials>', credentials)
  }

  return config.get('db.host')
}

mongoose.connect(getConnectionString())
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log('Could not connect to MongoDB', err))

const BaseLayer = mongoose.model('Base Layer', ingredientSchema)
const Condiment = mongoose.model('Condiment', ingredientSchema)
const Mixin = mongoose.model('Mixin', ingredientSchema)
const Seasoning = mongoose.model('Seasoning', ingredientSchema)
const Shell = mongoose.model('Shell', ingredientSchema)

const aggregateIngredients = async (req, res, next) => {
  if (req.method !== 'GET') {
    next()
  }
  
  const baseLayer = await getRandomIngredient(BaseLayer)
  const condiment = await getRandomIngredient(Condiment)
  const mixin = await getRandomIngredient(Mixin)
  const seasoning = await getRandomIngredient(Seasoning)
  const shell = await getRandomIngredient(Shell)

  req.taco = { baseLayer, condiment, mixin, seasoning, shell }
  next()
}

const getRandomIngredient = async (model) => {
  const ingredients = await model.find({})
  return ingredients[Math.floor(Math.random() * ingredients.length)]
}

module.exports = aggregateIngredients
