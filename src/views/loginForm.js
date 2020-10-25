import React, {useState} from 'react'
import login from '../model/login'

const LoginForm = ({setUser}) => {
    const [password, setPassword] = useState(' ')
    const [id, setId] = useState(' ')

    const Login = (event) => {
        event.preventDefault()
        login(id, password, setUser)
        setPassword(' ')
        setId(' ')
    }


    return(
        <>
        <form>
            <label for ='email'> userID </label> <input type="text" value = {id}  onChange = {event => setId(event.target.value)}></input>
            <label for ='password'> password </label> <input type="text" value = {password}  onChange = {event => setPassword(event.target.value)}></input>
            <button onClick={Login}>login</button>
        </form>
        </>
    )

}


export default LoginForm