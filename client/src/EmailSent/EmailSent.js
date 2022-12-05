import React from 'react'
import message from './message.png'
import './EmailSent.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function EmailSent() {
  return (
    <div className='eightpage'>
         <header>
            <h1>Email has been sent
            </h1>
            <h4>Please check your inbox and click on the<br />received link to reset your password</h4>
        </header>

        <div className='message'>
    <img  src={message} height='145px' width='145px' alt="lock" />
</div>

<Link to='/resetpassword'> <input type="submit"  className='buttonss'  value='Confirm'/></Link>
    </div>
  )
}

export default EmailSent