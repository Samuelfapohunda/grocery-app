import React from 'react'
import './SecondPage.css'
import { IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { ArrowForward } from '@material-ui/icons'
import image from './bar1.png'
import grocery from './1.png'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import bar from './bar2.png'



function SecondPage() {
  return (
    <div className='secondPage'>
    <img className='image' height={'350px'} width={'250px'} src={grocery} alt="bag" />
     <body className='container'>
      <div className='slim'>
           <p>
        Shop and savour our <br /> succulent <span>fruits</span> <br /> 
     </p>
     Affordable pricing, freshness 24/7 and <br />enjoy our discounts
     </div>
     
    </body>

    <footer>
      
<Link to="/">
  <IconButton>
    <ArrowBack fontSize='large'/> 
     </IconButton></Link>
   <div>
   <img src= {bar} width= {'30px'}  height={'3px'} alt="bar"   />
     <img src= {image} width= {'30px'}  height={'3px'} alt="bar"  />
     <img src= {bar} width= {'30px'}  height={'3px'} alt="bar"    />
 </div>

 <Link to="/page3">
     <IconButton>
    <ArrowForward fontSize='large'/> 
     </IconButton>
     </Link>
    </footer>
  
    </div>
  )
}

export default SecondPage