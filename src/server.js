const express = require('express')
const cors = require('cors')
const generate = require('./routes/generate')

const app = express()
const port = process.env.PORT || 3001

app.use(cors({
  origin: 
    process.env.NODE_ENV === 'production'
      ? 'https://tiktaco.herokuapp.com'
      : 'http://localhost:3000'
}))

app.use(express.json())
app.use('/api/generate', generate)

app.listen(port, () => console.log(`Listening on port ${port}...`))
