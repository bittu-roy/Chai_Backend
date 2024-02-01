require('dotenv').config()
const express = require('express')
const app = express()  //now here app gets all the functionalities of express--> get, listen..etc.
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('<h1>This is my twitter account!</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})