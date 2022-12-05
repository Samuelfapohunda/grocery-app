import React from 'react'
import './Splash.css'
import { IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { ArrowForward } from '@material-ui/icons'
import image from './bar1.png'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import bar from './bar2.png'

function Splash() {
  return (
    <div className='splash'>
    

  <body>
  <div className='body'>
    <h1><b>Go Green</b></h1>
    <p>Source and Shop yor fresh veggies <br /> from Go Green</p>
    </div>
  </body>
    
 

  <footer className='foot'>
      
      <Link to="/">
        <IconButton>
          <ArrowBack fontSize='large'/> 
           </IconButton></Link>
         <div>
           <img src= {image} width= {'30px'}  height={'3px'} alt="bar"  />
         <img src= {bar} width= {'30px'}  height={'3px'} alt="bar"   />
     <img src= {bar} width= {'30px'}  height={'3px'} alt="bar"    />
       </div>
      
       <Link to="/page2">
           <IconButton>
          <ArrowForward fontSize='large'/> 
           </IconButton>
           </Link>
          </footer>
        
    </div>
  )
}

export default Splash