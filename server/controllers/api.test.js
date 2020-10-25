/**
 * @jest-environment node
 */

const supertest = require('supertest')
const fs = require('fs')
const app = require('../app')
const apiRouter = require('./api')

const api = supertest(app)

const sampleData = (fileName) => {
    const rawData = fs.readFileSync(fileName)
    const data = JSON.parse(rawData)
}

describe('api', () => {

    beforeEach(async () => {
        sampleData('server/sample.json')
    })

    test('login works with correct username/password', async () => {

        const data = {
            id: 'Bobalooba',
            password: 'bob'
        }

        await api.post('/api/login')
                 .send(data)
                 .expect(200)
    })

    test('login fails with incorrect username', async () => {

        const data = {
            id: 'notBobalooba',
            password: 'bob'
        }

        await api.post('/api/login')
                 .send(data)
                 .expect(401)
    })

    test('login fails with incorrect password', async () => {
        
        const data = {
            id: 'Bobalooba',
            password: 'notbob'
        }

        await api.post('/api/login')
                 .send(data)
                 .expect(401)
    })

    test('registration fails with existed email', async () => {

        const data = {
            id: 'Bean',
            password: 'jimbulator',
            firstname: 'Bean',
            lastname: 'Jimbulator',
            email: 'bob@gmail.com'
        }

        await api.post('/api/user')
                 .send(data)
                 .expect(401)
    })

    test('registration works with correct form', async () => {

        const data = {
            id: 'Bean',
            password: 'jimbulator',
            firstname: 'Bean',
            lastname: 'Jimbulator',
            email: 'jimbulator@gmail.com'
        }

        await api.post('/api/user')
                 .send(data)
                 .expect(200)
    })

    test('registration fails with uncompleted form', async () => {

        const data = {
            id: '',
            password: 'jimbulator',
            firstname: 'Bean',
            lastname: 'Jimbulator',
            email: 'jimbulator@gmail.com'
        }

        await api.post('/api/user')
                 .send(data)
                 .expect(401)
    })

    test('registration fails with existed ID', async () => {

        const data = {
            id: 'Bobalooba',
            password: 'jimbulator',
            firstname: 'Bean',
            lastname: 'Jimbulator',
            email: 'jimbulator@gmail.com'
        }

        await api.post('/api/user')
                 .send(data)
                 .expect(401)
    })
})