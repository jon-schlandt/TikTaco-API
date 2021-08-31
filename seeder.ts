const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/tiktaco')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err: Error) => console.log('Could not connect to MongoDB', err))
