import React from 'react'
import './Category.css'
import { IconButton } from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { NotificationsNoneRounded } from '@material-ui/icons'
import {BrowserRouter as Link} from 'react-router-dom'
import { Search } from '@material-ui/icons';
import { TextField, InputAdornment } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons'
import { MenuRounded } from '@material-ui/icons'
import strawberry from './images/strawberry.png'
import bellpepper from './images/bellpepper.png'
import carrot from './images/carrot.png'
import onions from './images/onions.png'
import pepper from './images/pepper.png'
import cherry from './images/cherry.png'
import brocolli from './images/brocolli.png'
import Footer from './Footer'

function Category() {
  return (
    <div className='categories'>
        <div className='top-side'>
        <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Return</h3>}>
        <Link to="/homepage">
       <IconButton>
        < ArrowBack  fontSize='large'/> 
        </IconButton></Link>
        </Tooltip>

     <TextField
   style={{
    height: '45px',
    width: '65%',
    marginTop: 5
   }}
   className='spa'
   id="outlined-basic"
  variant='standard'
  InputProps={{
    disableUnderline: true,
    startAdornment: (
      <InputAdornment position="start">
       
      <Search style={{fill: 'grey', marginLeft: 10,
    marginTop: 25}} />

      </InputAdornment>
    
    ),
    endAdornment: (
      <InputAdornment position="end">
        
      </InputAdornment>
    )
  }}
/>

<IconButton style={{
          backgroundColor: '#EFEFEF',
          width: 45,
          height: 45,
          marginTop: 5
         }}>
    < MenuRounded  style={{fill: 'black'}}  />
       </IconButton>

</div>

       <div style={{
        paddingLeft: 20
       }}>
        <h1>Categories</h1>
     <h3>Browse by Categories</h3>
     </div>

     <div className='grid'>
          
     <div style={{
         backgroundColor: 'white',
         boxShadow: '5px 6px 12px #888888',
        height:100,
        width: 100,
        borderRadius:50,
        textAlign: 'center',
        textAlign: 'center'
     }}>
   <img src={strawberry} alt="apple" height='100px' width='100px' />
      <p style={{
        marginTop:  -5,
        marginLeft: 5
      }}>Fruits</p>     
     </div>

     <div style={{
          backgroundColor: 'white',
         boxShadow: '5px 6px 12px #888888',
        height:100,
        width: 100,
        borderRadius:50,
        textAlign: 'center'
     }}>
<img src={pepper} alt="pepper" height='100px' width='100px' />
<p style={{
        marginTop:  -5,
        marginLeft: 5
      }}>Vegetables</p>     
     </div>

     <div style={{
          backgroundColor: 'white',
         boxShadow: '5px 6px 12px #888888',
        height:100,
        width: 100,
        borderRadius:50,
        textAlign: 'center'
     }}>
<img src={onions} alt="onions" height='100px' width='100px' />
<p style={{
        marginTop:  -5,
        marginLeft: 5
      }}></p>     
     </div>

     <div style={{
          backgroundColor: 'white',
         boxShadow: '5px 6px 12px #888888',
        height:100,
         backgroundColor: 'white',
         boxShadow: '5px 6px 12px #888888',
        width: 100,
        borderRadius:50,
        textAlign: 'center'
     }}>
<img src={onions} alt="onions" height='100px' width='100px' />
<p style={{
        marginTop:  -5,
        marginLeft: 5
      }}></p> 
     </div>

     <div style={{
          backgroundColor: 'white',
         boxShadow: '5px 6px 12px #888888',
        height:100,
        width: 100,
        borderRadius:50,
        textAlign: 'center'
     }}>
<img src={onions} alt="onions" height='100px' width='100px' />
<p style={{
        marginTop:  -5,
        marginLeft: 5
      }}></p> 
     </div>

     <div style={{
          backgroundColor: 'white',
         boxShadow: '5px 6px 12px #888888',
        height:100,
        width: 100,
        borderRadius:50,
        textAlign: 'center'
     }}>
<img src={carrot} alt="carrot" height='100px' width='100px' />
<p style={{
        marginTop:  -5,
        marginLeft: 5
      }}></p> 
     </div>

     <div style={{
          backgroundColor: 'white',
         boxShadow: '5px 6px 12px #888888',
        height:100,
        width: 100,
        borderRadius:50,
        textAlign: 'center'
     }}>
<img src={bellpepper} alt="bellpepper" height='100px' width='100px' />
<p style={{
        marginTop:  -5,
        marginLeft: 5
      }}></p> 
     </div>

     <div style={{
          backgroundColor: 'white',
         boxShadow: '5px 6px 12px #888888',
        height:100,
        width: 100,
        borderRadius:50,
        textAlign: 'center'
     }}>
<img src={cherry} alt="cherry" height='80px' width='80px' />
<p style={{
        marginTop:  -5,
        marginLeft: 5
      }}></p> 
     </div>

     <div style={{
          backgroundColor: 'white',
         boxShadow: '5px 6px 12px #888888',
        height:100,
        width: 100,
        borderRadius:50,
        textAlign: 'center'
     }}>
<img src={brocolli} alt="brocolli" height='100px' width='100px' />
<p style={{
        marginTop:  -5,
        marginLeft: 5
      }}></p> 
     </div>

     </div>

     < Footer />
    </div>
  )
}

export default Category