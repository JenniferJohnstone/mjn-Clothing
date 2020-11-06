import axios from 'axios'

const addToCart = (item, user, setResponse) => {

    const baseUrl = 'http://localhost:3001/api/cart/'

    console.log('posting this',{item, user})
    axios.post(baseUrl, {item, user})
    .then(response => {
        console.log('this is the response',response.data)
        setResponse(response.data.contents)
    })

}

export default addToCart