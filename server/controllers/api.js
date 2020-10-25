const express = require('express')
const fs = require('fs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const apiRouter = express.Router()
const rawData = fs.readFileSync('server/sample.json')
const data = JSON.parse(rawData)

const SECRET = 'secret'

const getUser = (id) => {
    return data.users.filter(u => u.id === id)[0]
}

apiRouter.post('/api/user', (req, res) => {
    
    const body = req.body

    if (!body.id || !body.password || !body.firstname || !body.lastname || !body.email) {
        return res.status(401).json({error: 'Please complete the form.'})
    }

    const idCheck = data.users.find(user => user.id === body.id)
    console.log("id is", idCheck)
    const emailCheck = data.users.find(user => user.email === body.email)
    console.log("email is", emailCheck)

    if (idCheck) {
        return res.status(401).json({error: 'Id is already exist'})
    }

    if (emailCheck) {
        return res.status(401).json({error: 'email is already exist'})
    }

    bcrypt.hash(body.password, 10)
    .then(result => {
        
        const newUser = {
            id: body.id,
            password: result,
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email
        }
    
        data.users.push(newUser)
        return res.status(200).json('Complete the registration! Please log in to start shopping.')
    })
})

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