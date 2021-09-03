const mongoose = require('mongoose')

// Schemas

const ingredientSchema = new mongoose.Schema({
  name: String,
  recipe_link: String
})

// Models

const BaseLayer = mongoose.model('Base Layer', ingredientSchema)
const Condiment = mongoose.model('Condiment', ingredientSchema)
const Mixin = mongoose.model('Mixin', ingredientSchema)
const Seasoning = mongoose.model('Seasoning', ingredientSchema)
const Shell = mongoose.model('Shell', ingredientSchema)

module.exports = { BaseLayer, Condiment, Mixin, Seasoning, Shell }
