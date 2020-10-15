const fs = require('fs')
const bcrypt = require('bcrypt')

const rawData = fs.readFileSync('server/sampledata.json')
const data = JSON.parse(rawData)

data.users.map(u => {
    const pwcrypt = bcrypt.hash(u.password, 10).then(result => console.log(u.firstname, result))
})