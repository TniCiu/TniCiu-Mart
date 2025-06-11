// const express = require('express')
import express from 'express'

const app = express()

const hostname ='localhost'
const port = 2903

app.get('/',function(req, res){
    res.send('Hello word')
})

app.listen(port,hostname, () => {
    console.log(`hello tniciu mart , i'm running server http://${hostname}:${port}`)

})