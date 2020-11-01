import axios from 'axios'
const Register = (id, firstname, lastname, password, email, setResponse) =>  {

    const baseUrl = 'http://localhost:3001/api/users/'

    console.log('this is what im sending',id,password, firstname, lastname, email)
    axios.post(baseUrl , {id, password, firstname, lastname, email})
    .then(response => {
        console.log('here is it at register',response.data)
        setResponse(response.data)
        }
    )

}


export default Register
