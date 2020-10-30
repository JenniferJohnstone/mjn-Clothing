require('dotenv').config()
const express = require('express')
const fs = require('fs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const apiRouter = express.Router()
// const rawData = fs.readFileSync('server/sample.json')
// const data = JSON.parse(rawData)

const axios = require('axios')

//database configuration for mongoose 
const SECRET = process.env.SECRET
const url = 'mongodb+srv://assignment:' + SECRET + '@cluster0.arbvm.mongodb.net/Group-B?retryWrites=true&w=majority'
mongoose.connect(url,  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const userSchema = new mongoose.Schema({
    id: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String
  })

  const User = mongoose.model('User', userSchema)


//had to do a little adjusting while debugging something
//this function is no longer used in this version using mongoose
const getUser = (id) => {
    var user = null
    var userId = id
    console.log('i am being called ', userId)

    // data.users.filter(u => {
    //     if (u.id == id) {
    //         user = u
    //     }
    // })

    User.find({id: userId}, function(err, result) {
        if (err) {
            console.log('error finding user in database')
        } else {
        user = result
        console.log('here is the user', result) 
        console.log('after the operation',user)
        return user
        }
    })

}

//registration
//I've commented out lines using the old method for reference if we decide to implement a different database
//also added required to the fields in the form so there's no need to check if it's incomplete
apiRouter.post('/api/users', (req, res) => {
    const body = req.body   
    console.log('heres the request',req.body)

    var existingUser = null
    User.find({id: body.id}, function(err, result) {
        if (err) {
            console.log('error finding user in database')
        } else {
        existingUser = result
        console.log('here is the user/s', existingUser) 
        
        if (existingUser == null || existingUser.length === 0) {

    bcrypt.hash(body.password, 10)
    .then(result => {

        const newUser = new User ({
            id: body.id,
            password: result,
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email
        })
    
        newUser.save().then(result => {
            console.log('user has been added to the database!', result)
        })


        // data.users.push(newUser)
        return res.json('Completed the registration! Please log in to start shopping.')
    })

} else {
    console.log('an account was not created')
    res.json('An existing user was found with the same credentials, please try a different ID')
}
        }

})

})

//login
apiRouter.post('/api/login', async (req, res) => {
    const {id, password} = req.body

    var user = null
    User.find({id: id}, async function(err, result) {
        if(err){
            return res.send({error: 'invalid id or password'})

        } else if (result.length == 0) {
            console.log('user not found')
            res.send('user not found')
        } else {
            user = result[0]
            console.log('this is the user', result)
            console.log('here is the result',user.password)
            if (await bcrypt.compare(password, user.password)) {
        
                const userToken = {
                    id: user.id,
                    firstname: user.firstname
                }
                const token = jwt.sign(userToken, SECRET)
        
                return res.status(200).json({token, id: user.id, firstname: user.firstname})
            } else {
                return res.send ({error: 'invalid id or password'})
            }
        }
    })
})

var general = null
var shoes = null
var dresses = null
var skirts = null
var pants = null


//get items from ebay 
//I made some changes to this function to minimize calls being made to the API, this should help the site render faster
apiRouter.post('/api/shop', (req,res) => {

    var url = null

    const getGeneral = () => {
        if (general == null) {
            url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Jennifer-Shopping-PRD-2e65479d5-4f69c2e4&GLOBAL-ID=EBAY-AU&categoryId=15724&RESPONSE-DATA-FORMAT=JSON' 
            axios.get(url)
            .then(response => {
                general = response.data
                return res.json(response.data)
            })
            .catch(error => {
                return res.status('the request has failed')})
        } else {
            return res.json(general)
        }
    }

    if(req.body.category == 'general') {
        getGeneral()
    } 

    const getShoes = () => {
        if(shoes == null) {
            url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Jennifer-Shopping-PRD-2e65479d5-4f69c2e4&GLOBAL-ID=EBAY-AU&categoryId=3034&RESPONSE-DATA-FORMAT=JSON' 
            axios.get(url)
            .then(response => {
                shoes = response.data
                return res.json(response.data)
            })
            .catch(error => {
                return res.status('the request has failed')})
        } else {
            return res.json(shoes)
        }
    }
    

    if(req.body.category == 'shoes') {
        getShoes()
    } 

    const getDresses = () => {
        if(dresses == null) {
            url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Jennifer-Shopping-PRD-2e65479d5-4f69c2e4&GLOBAL-ID=EBAY-AU&categoryId=63861&RESPONSE-DATA-FORMAT=JSON' 
            axios.get(url)
            .then(response => {
                dresses = response.data
                return res.json(response.data)
            })
            .catch(error => {
                return res.status('the request has failed')})
        } else {
            return res.json(dresses)
        }

        }
    if(req.body.category == 'dresses') {
        getDresses()
    }
    
    const getSkirts = () => {
        if (skirts == null) {
            console.log('is null')
            url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Jennifer-Shopping-PRD-2e65479d5-4f69c2e4&GLOBAL-ID=EBAY-AU&categoryId=63864&RESPONSE-DATA-FORMAT=JSON' 
            axios.get(url)
            .then(response => {
                skirts = response.data
                return res.json(response.data)
            })
            .catch(error => {
                return res.status('the request has failed')})
        } else {
            return res.json(skirts)
        }
    }

    if (req.body.category == 'skirts') {
        getSkirts()
    }

    const getPants = () => {
        if (pants == null) {
            url = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Jennifer-Shopping-PRD-2e65479d5-4f69c2e4&GLOBAL-ID=EBAY-AU&categoryId=63863&RESPONSE-DATA-FORMAT=JSON' 
            axios.get(url)
            .then(response => {
                pants = response.data
                return res.json(response.data)
            })
            .catch(error => {
                return res.status('the request has failed')})
            } else {
                return res.json(pants)
            }
        }
    if(req.body.category == 'pants') {
        getPants()
    }
})

module.exports = apiRouter