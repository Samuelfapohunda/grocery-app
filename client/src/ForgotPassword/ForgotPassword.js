import React from 'react'
import lock from './lock.png'
import './ForgotPassword.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function ForgotPassword() {
  return (
    <div className='seventhpage'>
        <header>
            <h1>Forgot Your Password?
            </h1>
            <h4>Enter your registered email below to
                 receive<br />password reset instructions</h4>
        </header>

<div className='lock'>
    <img  src={lock} height='145px' width='145px' alt="lock" />
</div>

<div className='form-controlss'>
            <label>Email</label>
            <input type='text'  />
        </div>
        <div className="accounts"> Remember Password? <a href="/login">Log In</a></div>

       <Link to='/emailsent'> <input type="submit"  className='buttons'  value='Send'/></Link>

    </div>
  )
}

export default ForgotPassword