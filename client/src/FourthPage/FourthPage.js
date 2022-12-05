import React from 'react'
import man from './man.png';
import './FourthPage.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function FourthPage() {
  return (
    <div className='fourthpage'>
  <img className='man' src={man} height={'400px'} width={'400px'} alt="man" />
    <div className='door'>
    <p>
       Quick Delivery at <br /> your <span>doorstep</span> <br /> 
     </p>
     Online food delivery service that caters <br /> for all your fresh foods
    </div>
  < Link to='/login'>
    <button className='btn'>
        Get Started
    </button>
    </Link>
    </div>
  )
}

export default FourthPage