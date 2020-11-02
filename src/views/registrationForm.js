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
        <div className="row">
        <div className="eleven columns" style = {formStyle}>
        
        <h2>Please <b>Register</b> your details below to get started!</h2>
        <form class="reg-form" onSubmit={registerUser} encType="multipart/form-data">

            <label>ID</label> 
            <input  type = "text" placeholder="Type your preferred userID.." required value ={id} onChange = {event => setid(event.target.value)}></input>
            <label>First name</label>
             <input  type = "text" placeholder="Type your firstname.." required value ={firstName} onChange = {event => setFirstName(event.target.value)}></input>
            <label>Last name</label> 
            <input   type = "text" placeholder="Type your lastname.." required value ={lastName} onChange = {event => setLastName(event.target.value)}></input>
            <label>Password</label> 
            <input type = "password" placeholder="Password.." required value ={password} onChange = {event => setPassword(event.target.value)}></input>
            <label>Email address</label> 
            <input  type = "text"  placeholder="Type your Email address.."required value ={email} onChange = {event => setEmail(event.target.value)}></input>

            <button style = {buttonStyle}>Register</button>
        </form>
         
        </div>
    </div>
    
    </>
    )
} 


export default Registration