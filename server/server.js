const express = require('express')
const cors = require('cors')
const apiRouter = require('./controllers/api')

const app = express()
app.use(express.json())
app.use(cors())
app.use(apiRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})