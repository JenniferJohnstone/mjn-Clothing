import axios from 'axios'

const logOut = ({setUser, setResponse}) => {
    const baseUrl = 'http://localhost:3001/api/logout/'

    setUser({name: null, cart: null})
    setResponse(null)
    axios.post(baseUrl)

}

export default logOut