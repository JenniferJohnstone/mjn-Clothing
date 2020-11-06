import axios from 'axios'

const logOut = ({user, response, setUser, setResponse}) => {
    const baseUrl = '/api/logout/'
    console.log('ehhh?',response)
    axios.post(baseUrl,{user, response})
    setUser({name: null, cart: null})
    setResponse(null)
}

export default logOut