const express = require('express')
const fs = require('fs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const apiRouter = express.Router()
const rawData = fs.readFileSync('server/sample.json')
const data = JSON.parse(rawData)

const axios = require('axios')

const SECRET = 'secret'

//had to do a little adjusting while debugging something
const getUser = (id) => {
    var user = null
    data.users.filter(u => {
        if (u.id == id) {
            user = u
        }
    })
    
    return user
}

//registration
apiRouter.post('/api/users', (req, res) => {
    
    const body = req.body

    if (!body.id || !body.password || !body.firstname || !body.lastname || !body.email) {
        return res.status(401).json({error: 'Please complete the form.'})
    }

    const idCheck = data.users.find(user => user.id === body.id)
    const emailCheck = data.users.find(user => user.email === body.email)

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
        console.log(newUser.password)
        return res.json('Complete the registration! Please log in to start shopping.')
    })
})

//login
apiRouter.post('/api/login', async (req, res) => {
    const {id, password} = req.body

    const user = getUser(id)
    
    if (!user) {
        console.log('user not found')
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

//get items from ebay 
apiRouter.post('/api/shop', (req,res) => {
    console.log('here is the requiest',req.body)
    var url = null
    if(req.body.category == 'general') {
     url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Jennifer-Shopping-PRD-2e65479d5-4f69c2e4&GLOBAL-ID=EBAY-AU&categoryId=15724&RESPONSE-DATA-FORMAT=JSON' 
    }

    if(req.body.category == 'shoes') {
        url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Jennifer-Shopping-PRD-2e65479d5-4f69c2e4&GLOBAL-ID=EBAY-AU&categoryId=3034&RESPONSE-DATA-FORMAT=JSON' 
       }

    if(req.body.category == 'dresses') {
    url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Jennifer-Shopping-PRD-2e65479d5-4f69c2e4&GLOBAL-ID=EBAY-AU&categoryId=63861&RESPONSE-DATA-FORMAT=JSON' 
    }

    if(req.body.category == 'skirts') {
        url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Jennifer-Shopping-PRD-2e65479d5-4f69c2e4&GLOBAL-ID=EBAY-AU&categoryId=63864&RESPONSE-DATA-FORMAT=JSON' 
        }

    if(req.body.category == 'pants') {
        url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Jennifer-Shopping-PRD-2e65479d5-4f69c2e4&GLOBAL-ID=EBAY-AU&categoryId=63863&RESPONSE-DATA-FORMAT=JSON' 
        }

    axios.get(url)
        .then(response => {
            return res.json(response.data)
        })
        .catch(error => {
            return res.status('the request has failed')})
})

module.exports = apiRouter