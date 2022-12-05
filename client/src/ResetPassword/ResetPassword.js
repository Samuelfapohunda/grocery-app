import { React, useState } from "react";
import { Visibility } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import './ResetPassword.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function ResetPassword() {


    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }



  return (
    <div className="ninthpage">
 <header>
    <h1>
        Reset Password
    </h1>
    <h4>Input your new password and confirm it below</h4>
   </header>
  


  
   <form className='add-formsss'>
     
   <div className='form-control'>
            <label>Password</label>
            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password"  />
            <IconButton className='see' onClick={togglePassword}> <Visibility /></IconButton>
        </div>

        <div className='form-control'>
            <label>Confirm Password</label>
            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password"  />
          <IconButton className='see' onClick={togglePassword}> <Visibility /></IconButton>
          
        </div>
    <Link to='/login'>
        <input type="submit"  className='buttonsss' value='Save Changes'/>
        </Link>
     </form>


    </div>
  )
}

export default ResetPassword