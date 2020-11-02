import React, {useState} from 'react'
import login from '../model/login'

const LoginForm = ({setUser}) => {
    const [password, setPassword] = useState(null)
    const [id, setId] = useState(null)
    const [response, setResponse] = useState(null)

    const Login = (event) => {
        event.preventDefault()
        login(id, password, setUser, setResponse)
        setPassword(' ')
        setId(' ')
    }

    return(
        <>
        <form className="form">
        <h4><b>Please login or register to get started: </b></h4>
            <label for ='email'  name="id"> </label> <input type="text"  placeholder="User ID" value = {id}  onChange = {event => setId(event.target.value)}></input>
            <label for ='password' name="password"></label> <input type="text"   placeholder="Password" value = {password}  onChange = {event => setPassword(event.target.value)}></input>
            <button onClick={Login}>login</button>
        </form>
        <p>{response}</p>
        </>
    )

}


export default LoginForm