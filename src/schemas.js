const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema({
  name: String,
  recipe_link: String
})

module.exports = ingredientSchema
