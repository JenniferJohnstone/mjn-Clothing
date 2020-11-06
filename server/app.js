const express = require('express')
const cors = require('cors')
const apiRouter = require('./controllers/api')

const app = express()

app.use(express.json())
app.use(cors())
app.use(apiRouter)
// app.use(express.static('build'))


module.exports = app