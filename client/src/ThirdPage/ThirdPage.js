import React from 'react'
import './ThirdPage.css'
import { IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { ArrowForward } from '@material-ui/icons'
import image from './bar1.png'
import screen from './screen.png'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import bar from './bar2.png'


function ThirdPage() {
  return (
    <div className='thirdpage'>
        <div className='screen'>
         <img src= {screen} width= {'342px'}  height={'286px'} alt="bar"   />
         </div>

         <div className='word'>
            <p>Swift and Fast payment <br />options with no hassle</p>
         </div>

         <footer className='feet'>
         <Link to="/page2">
  <IconButton>
    <ArrowBack fontSize='large'/> 
     </IconButton></Link>
   <div>
   <img src= {bar} width= {'30px'}  height={'3px'} alt="bar"   />
     <img src= {bar} width= {'30px'}  height={'3px'} alt="bar"    /> 
     <img src= {image} width= {'30px'}  height={'3px'} alt="bar"  />
 </div>

 <Link to="/page4">
     <IconButton>
    <ArrowForward fontSize='large'/> 
     </IconButton>
     </Link>
         </footer>
    </div>
  )
}

export default ThirdPage