import express from 'express'
import { env } from './config/environment'

const app = express()


app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(() => {
  console.log(`Server running at http://${env.APP_HOST}:${env.APP_PORT}`)
})
