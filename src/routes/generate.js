const express = require('express')
const { BaseLayer, Condiment, Mixin, Seasoning, Shell } = require('../schemas')

const router = express.Router()

const getRandomIngredient = async (model) => {
  const ingredients = await model.find({})
  return ingredients[Math.floor(Math.random() * ingredients.length)]
}

const getRandomTaco = async (req, res) => {
  try{
    res.status(200).json({ 
      base_layer: await getRandomIngredient(BaseLayer), 
      condiment: await getRandomIngredient(Condiment), 
      mixin: await getRandomIngredient(Mixin), 
      seasoning: await getRandomIngredient(Seasoning), 
      shell: await getRandomIngredient(Shell) 
    })
  } catch (error) {
    res.status(500).json({ error })
  }
}

router.get('/', getRandomTaco)

module.exports = router
