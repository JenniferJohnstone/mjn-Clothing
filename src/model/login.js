import axios from 'axios'

const login = (id, password, setUser, setMessage, setResponse) => {
    const baseUrl = '/api/login/'

    console.log('logging in',id,password)
    axios.post(baseUrl , {id, password})
        .then(response => {
            console.log('this was the respone',response.data.cart)
            const user = response.data.firstname
            console.log('this is the user', user)
            setUser({name: response.data.firstname, cart: response.data.cart})
            setMessage(response.data.error)
            if(response.data.cart !== null){
                setResponse(response.data.cart)
            }
        })
}


export default login