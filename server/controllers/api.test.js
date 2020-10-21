/**
 * @jest-environment node
 */

const supertest = require('supertest')
const fs = require('fs')
const app = require('../app')

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
})