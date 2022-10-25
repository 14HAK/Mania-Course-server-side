const express = require('express')
const app = express()
const port = 5000
const cors = require("cors");

app.use(cors())
const catagories = require('./Data/catagories.json')
const course = require('./Data/course.json')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/catagories', (req, res) => {
  res.send(catagories)
})

app.get('/course/:id', (req, res) => {
  const id = req.params.id;

  const catagory_course = course.filter(cour => cour.catagory_id === id);
  res.send(catagory_course)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})