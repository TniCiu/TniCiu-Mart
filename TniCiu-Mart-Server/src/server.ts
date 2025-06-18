import express from 'express'

const app = express()
const hostname = 'localhost'
const port = 2903

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
