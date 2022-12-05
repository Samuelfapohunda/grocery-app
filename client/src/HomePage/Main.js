import {React, useState} from 'react'
import './HomePage.css'
import { IconButton } from '@material-ui/core'
import {Tooltip} from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { NotificationsNoneRounded } from '@material-ui/icons'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import   { AccountCircle } from '@material-ui/icons'
import { Search } from '@material-ui/icons';
import { TextField, InputAdornment } from "@material-ui/core";
import cherry from './images/cherry.png'
import { MenuRounded } from '@material-ui/icons'
import Product from './Product'


function Main(props) {
    const [selected, setSelected] = useState(0)
    const {cartItems, products, onAdd, onRemove} = props


  return (
    <div className='homepage'>
           <div className='head'>
          <div className='meh'>
          <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Return</h3>}>
        <Link to="/login">
       <IconButton>
        < ArrowBack  fontSize='large'/> 
        </IconButton></Link>
        </Tooltip>

    
     <div className='sam'>
        <b>Hi Sam,</b> <br /> What would you buy today
     </div>
   </div>

     <div className='notif'>
     <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Notifications</h3>}>
 <IconButton  style={{
          backgroundColor: '#EFEFEF',
         }}>
    <   NotificationsNoneRounded  style={{ fill: 'black' }}   fontSize='large'/> 
     </IconButton>
  </Tooltip>

  <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Profile</h3>}>
     <IconButton   style={{
          backgroundColor: '#EFEFEF',
         }}>
    <   AccountCircle style={{ fill: 'black' }}   fontSize='large'/> 
     </IconButton>
     </Tooltip>
     </div>
   
   </div>
        

    <div className='body-container'>
    <div className='slime'>
      
   <TextField
   style={{
    height: '50px',
    marginLeft: 15,
    width: '80%'
   
   }}
   className='sapa'
   id="outlined-basic"
  variant='standard'
  InputProps={{
    disableUnderline: true,
    startAdornment: (
      <InputAdornment position="start">
       
      <Search style={{fill: 'grey', marginLeft: 10,
    marginTop: 25}} />
      </InputAdornment>
    )
  }}
/>

   
         <IconButton style={{
          backgroundColor: '#EFEFEF'
         }}>
    < MenuRounded  style={{fill: 'black', marginTop:3}}  />
       </IconButton>

   
    </div>

    <div className="off">


       <div style={{
       paddingTop: 5,
        height: 100,
        marginLeft: 20,
        width: '150px'
       }}>
        <b style={{
          fontSize: 25
        }}>30% off</b> <br />
       Buy 5kg and above, <br /> get 30% off. <br />
       <a href="#gg">
        <span><b>Shop Now</b></span>
        </a>
       </div>

       <div style={{
        width: 210,
        height: 150,
        marginLeft: 50
       }}>
         <img src={cherry}  height='130px' width='120px' alt="" />
        </div>
      
      </div>


       <div className='category'>
       <a href="/category" style={{
        marginTop: 10,
        fontSize: 20
       }}>
        <b style={{
          fontSize: 25
        }}>Categories</b>
  </a>


       <a href="#gg" style={{
        marginTop: 10,
        fontSize: 20
       }}>See All</a> 

       </div>
   




       <div className='select'>
        <div>
           <p id="toggle" style={{
            display: 'flex',
            justifyContent: 'space-between'
           }}>
            <span style={{cursor: 'pointer'}} onClick={() => setSelected(0)}> All</span>
            <span style={{cursor: 'pointer'}} onClick={() => setSelected(1)}> Vegetable</span>
            <span style={{cursor: 'pointer'}} onClick={() => setSelected(2)}> fruit</span>
            <span style={{cursor: 'pointer'}} onClick={() => setSelected(3)}> Meat</span>
            <span style={{cursor: 'pointer'}} onClick={() => setSelected(4)}> Diary </span>
            <span style={{cursor: 'pointer'}} onClick={() => setSelected(5)}> Oil </span>
           </p>
        </div>
           {(selected === 0) && <div id='left'>



           
           {products.map((product) =>(
              <Product 
                 onAdd={onAdd}
                 onRemove={onRemove}
                  key={product.id} 
                  product={product}
                  item={cartItems.find((x) => x.id === product.id)}
                  >
                  </Product>
            ))}

       
 </div>}




       </div>

    </div>

    
    </div>
  )
}

export default Main