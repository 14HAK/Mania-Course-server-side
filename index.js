const express = require('express')
const app = express()
const port = 5000
const cors = require("cors");

app.use(cors())
const catagories = require('./Data/catagories.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/catagories', (req, res) => {
  res.send(catagories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})