import { useState } from "react";
import React from "react";

function Contact() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailAdd, setEmailAdd] = useState("")
    const [describe, setDescribe] = useState("")

    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event){
        setLastName(event.target.value)
    }

    function handleEmailChange(event){
        setEmailAdd(event.target.value)
    }

    function handleDescribeChange(event){
        setDescribe(event.target.value)
    }

    return(
        <form>
            <input type="text" onChange={handleFirstNameChange} value={firstName} placeholder="First Name" />
            <input type="text" onChange={handleLastNameChange} value={lastName} placeholder="Last Name" />
            <input type="email" onChange={handleEmailChange} value={emailAdd} placeholder="Email Address" />
            <textarea type="text" onChange={handleDescribeChange} value={describe} placeholder="How can we help?" />
            <button type="submit">Submit</button>

        </form>
        // the form will go in here 
    )
}

export default Contact

