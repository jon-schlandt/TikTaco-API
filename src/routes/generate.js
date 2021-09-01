const express = require('express')
const mongoose = require('mongoose')
const Joi = require('joi')
const ingredientSchema = require('../schemas/ingredient')

mongoose.connect('mongodb://127.0.0.1:27017/tiktaco')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log('Could not connect to MongoDB', err))

const router = express.Router()

const BaseLayer = mongoose.model('Base Layer', ingredientSchema)
const Condiment = mongoose.model('Condiment', ingredientSchema)
const Mixin = mongoose.model('Mixin', ingredientSchema)
const Seasoning = mongoose.model('Seasoning', ingredientSchema)
const Shell = mongoose.model('Shell', ingredientSchema)

const getIngredients = async (req, res, next) => {
  if (req.method !== 'GET') {
    next()
  }
  
  const baseLayers = await BaseLayer.find({})
  console.log(baseLayers)

  next()
}

router.use(getIngredients)

router.get('/', (req, res) => {
  res.send('Hello world!')
})

module.exports = router
