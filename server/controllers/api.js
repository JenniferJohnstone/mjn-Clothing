const express = require('express')
const fs = require('fs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const apiRouter = express.Router()
const rawData = fs.readFileSync('server/sampledata.json')
const data = JSON.parse(rawData)

const SECRET = 'secret'

const getUser = (id) => {
    return data.users.filter(u => u.id === id)[0]
}

apiRouter.post('/api/login', async (req, res) => {
    const {id, password} = req.body

    const user = getUser(id)
    
    if (!user) {
        return res.status(401).json({error: 'invalid id or password'})
    }

    if (await bcrypt.compare(password, user.password)) {

        const userToken = {
            id: user.id,
            firstname: user.firstname
        }
        const token = jwt.sign(userToken, SECRET)

        return res.status(200).json({token, id: user.id, firstname: user.firstname})
    } else {
        return res.status(401).json({error: 'invalid id or password'})
    }
})

module.exports = apiRouter