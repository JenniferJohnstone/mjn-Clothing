import axios from 'axios'
const Register = (id, firstname, lastname, password, email) =>  {

    const baseUrl = 'http://localhost:3001/api/users/'

    console.log('this is what im sending',id,password, firstname, lastname, email)
    axios.post(baseUrl , {id, password, firstname, lastname, email})

}


export default Register
