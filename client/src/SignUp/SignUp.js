import { React, useState } from "react";
import { Visibility } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import './SignUp.css'

function SignUp() {

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


    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault()
    
      console.log( firstname, lastname, email, password);
      fetch("http://localhost:6500/signup", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        }, 
        body: JSON.stringify({
          firstname,
          email,
          lastname,
          password
        }),
      }).then((res) => res.json())
      .then((data) => {
    
        if(data.status==="ok"){
        console.log(data, "user registered");
         }else{
          console.log("User Already Exists")
         }
       
        if(data.status==="ok"){
          window.location.href="/login";  
        } if(data.status ==="error"){
         
          document.getElementById('slime').innerHTML="Something went wrong!!"
        }
      })
        
      
      }



  return (
    <div className='sixthpage'>
   <header>
    <h1>
        Create An Account
    </h1>
   </header>

   <div>
<p style={{
  color: "red"
}} id='slime'></p>

</div>

   <form className='add-forms'>
        <div className='form-controls'>
            <label>First Name</label>
            <input type="firstname"
onChange={(e) => setFirstname(e.target.value)}
value={firstname} />
        </div>

        <div className='form-controls'>
            <label>Last Name</label>
            <input type="lastname"
onChange={(e) => setLastname(e.target.value)}
value={lastname} />
        </div>

        <div className='form-controls'>
            <label>Email</label>
            <input type="email"
onChange={(e) => setEmail(e.target.value)}
value={email}  />
        </div>

        <div className='form-controls'>
            <label>Password</label>
            <input type="password"
onChange={(e) => setPassword(e.target.value)}
value={password}  />
            {/* <IconButton className='see'> <Visibility /></IconButton> */}
       </div>
        <input type="submit" onClick={handleSubmit}  className='buttons' value='Sign Up'/>
     </form>
     <div className="account">  Already have an account? <a href="/login">Sign In</a></div>
    </div>
  )
}

export default SignUp