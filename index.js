const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;

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
  const myId = req.params.id;

  const catagoryCourse = course.filter(course => course.catagory_id === myId);
  res.send(catagoryCourse)
})

app.get('/latest/course', (req, res) => {
  const latest = course.filter(course => course.catagory_id === '1')
  res.send(latest)
})

app.get('/detail/:id', (req, res) => {
  const myId = req.params.id;
  const singleCourseDetail = course.find(course => course.id === myId)
  res.send(singleCourseDetail)
})





app.listen(port, () => {
  console.log(`site running at port: ${port}`);
})     