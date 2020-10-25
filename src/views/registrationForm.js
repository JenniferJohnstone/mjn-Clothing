import React, { useState } from "react";
import Register from '../model/register'

const Registration = () => {

    const [id, setid] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [firstName, setFirstName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [email, setEmail] = useState(' ')

    const registerUser = (event) => {
        event.preventDefault()
        Register(id, firstName, lastName, password, email)
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

    return (
        <>
        <div style = {formStyle}>
        <h2>Please Register your details below to get started!</h2>
        <form onSubmit={registerUser} encType="multipart/form-data">

            <h4>id</h4> <input type = "text" value ={id} onChange = {event => setid(event.target.value)}></input>
            <h4>first name</h4> <input type = "text" value ={firstName} onChange = {event => setFirstName(event.target.value)}></input>
            <h4>last name</h4> <input type = "text" value ={lastName} onChange = {event => setLastName(event.target.value)}></input>
            <h4>password</h4> <input type = "text" value ={password} onChange = {event => setPassword(event.target.value)}></input>
            <h4>email</h4> <input type = "text" value ={email} onChange = {event => setEmail(event.target.value)}></input>

            <button style = {buttonStyle}>Create User</button>
        </form>


    </div>
    </>
    )
} 


export default Registration