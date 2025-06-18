import express from 'express'

const app = express()

const HOST = 'localhost'
const PORT = 2903
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(() => {
  console.log(`Server running at http://${HOST}:${PORT}`)
})
