const mongoose = require('mongoose')

const baseLayers = require('../seed_data/base_layers.json')
const condiments = require('../seed_data/condiments.json')
const mixins = require('../seed_data/condiments.json')
const seasonings = require('../seed_data/seasonings.json')
const shells = require('../seed_data/shells.json')

mongoose.connect('mongodb://127.0.0.1:27017/tiktaco')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log('Could not connect to MongoDB', err))

const ingredientSchema = new mongoose.Schema({
  name: String,
  recipe_link: String
})

const BaseLayer = mongoose.model('Base Layer', ingredientSchema)
const Condiment = mongoose.model('Condiment', ingredientSchema)
const Mixin = mongoose.model('Mixin', ingredientSchema)
const Seasoning = mongoose.model('Seasoning', ingredientSchema)
const Shell = mongoose.model('Shell', ingredientSchema)

const seedIngredients = async (ingredientData, model) => {
  ingredientData.forEach(ingredient => {
    new model(ingredient).save()
  })
}

seedIngredients(baseLayers.data, BaseLayer)
seedIngredients(condiments.data, Condiment)
seedIngredients(mixins.data, Mixin)
seedIngredients(seasonings.data, Seasoning)
seedIngredients(shells.data, Shell)