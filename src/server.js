require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const generate = require('./routes/generate')

const app = express()
const port = process.env.PORT || 3001
const allowlist = ['https://tiktaco.heroku.app', 'https://tiktaco.netlify.app', 'http://localhost:3000']

mongoose.connect(`${process.env.DB_URI}/tiktaco`)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log('Could not connect to MongoDB', err))

app.use(cors({
  origin: (origin, cb) => {
    if (allowlist.indexOf(origin) !== -1) {
      cb(null, true)
    } else {
      cb(new Error('Not allowed by CORS'))
    }
  } 
}))

app.use(express.json())
app.use('/api/generate', generate)

app.listen(port, () => console.log(`Listening on port ${port}...`))
