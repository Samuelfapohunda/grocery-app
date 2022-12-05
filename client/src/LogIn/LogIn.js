import { React, useState } from "react";
import './LogIn.css'
import { Visibility } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'



function LogIn() {

    // const [passwordType, setPasswordType] = useState("password");
    // const [passwordInput, setPasswordInput] = useState("");
    // const handlePasswordChange =(evnt)=>{
    //     setPasswordInput(evnt.target.value);
    // }
    // const togglePassword =()=>{
    //   if(passwordType==="password")
    //   {
    //    setPasswordType("text")
    //    return;
    //   }
    //   setPasswordType("password")
    // }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
  
    console.log(email, password);
  
    fetch("http://localhost:6500/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      }, 
      body: JSON.stringify({
       email,
        password
      }),
    }).then((res) => res.json())
    .then((data) => {
      if(data.status==="ok"){
        window.localStorage.setItem("token", data.data)
        window.location.href="/homepage";
      } else {
       
        document.getElementById('slim').innerHTML="Email or Password Mismatch!!"
      }
    })
  }



  return (
    <div className='fifthpage'> 
  
   <header>
    <h1>Sign In To Your Account</h1>
        <p style={{
  color: "red"
}} id='slim'></p>
   </header>




     <form className='add-form' onSubmit={handleSubmit}>
        <div className='form-control'>
            <label>Email</label>
            <input type="email"
onChange={(e) => setEmail(e.target.value)}
value={email}/>
        </div>

        <div className='form-control'>
            <label>Password</label>
            <input type="password"
onChange={(e) => setPassword(e.target.value)}
value={password} />
         {/* <IconButton className='see' onClick={togglePassword}> <Visibility /></IconButton> */}
            <div className="forgot">
               <a href="/forgotpassword">Forgot Password</a>
            </div>
        </div>

        <input type="submit"  className='button' value='Log In'/>
     </form>

     <div className="account">  Don't have an account? <a href="/signup">Sign Up</a></div>
    </div>
  )
}

export default LogIn