const express = require('express')
const Joi = require('joi')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello world!')
})

module.exports = router
