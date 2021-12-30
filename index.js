const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 4080

app.use(cors())
app.use(fileUpload())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Assignment BackEnd!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})