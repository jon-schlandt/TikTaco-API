const express = require('express')
const generate = require('./routes/generate')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use('/api/generate', generate)

app.listen(port, () => console.log(`Listening on port ${port}...`))
