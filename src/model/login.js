import axios from 'axios'

const login = (id, password, setUser) => {
    const baseUrl = 'http://localhost:3001/api/login/'

    console.log('logging in',id,password)
    axios.post(baseUrl , {id, password})
        .then(response => {
            console.log('this was the respone',response)
            const user = response.data.firstname
            console.log('this is the user', user)
            setUser(user)
        })
}


export default login