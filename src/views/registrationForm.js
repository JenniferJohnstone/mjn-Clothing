import React, { useState } from "react";
import Register from '../model/register'

const Registration = () => {

    const [id, setid] = useState(null)
    const [password, setPassword] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [response, setResponse] = useState(null)

    const registerUser = (event) => {
        event.preventDefault()
        Register(id, firstName, lastName, password, email, setResponse)
        setid(' ')
        setPassword(' ')
        setFirstName(' ')
        setLastName(' ')
        setEmail(' ')
    }

    const buttonStyle = {
        display : 'block', 
        margin: 'auto' 
    }
    const formStyle = {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        textAlign : "center"
    }

    if(response !== null) {
        console.log('this is the response', response)
        return(
            <h1>{response}</h1>
        )
    }

    return (
        <>
        <div style = {formStyle}>
        <h2>Please Register your details below to get started!</h2>
        <form onSubmit={registerUser} encType="multipart/form-data">

            <h4>id</h4> <input type = "text" required value ={id} onChange = {event => setid(event.target.value)}></input>
            <h4>first name</h4> <input type = "text" required value ={firstName} onChange = {event => setFirstName(event.target.value)}></input>
            <h4>last name</h4> <input type = "text" required value ={lastName} onChange = {event => setLastName(event.target.value)}></input>
            <h4>password</h4> <input type = "text" required value ={password} onChange = {event => setPassword(event.target.value)}></input>
            <h4>email</h4> <input type = "text" required value ={email} onChange = {event => setEmail(event.target.value)}></input>

            <button style = {buttonStyle}>Create User</button>
        </form>
    </div>
    </>
    )
} 


export default Registration