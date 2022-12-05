import React from 'react'
import './Footer.css'
import { HomeOutlined } from '@material-ui/icons'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Person } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { ShoppingBasket } from '@material-ui/icons'
import {Tooltip} from '@material-ui/core'

function Footer() {
  return (
    <div className='footer'>
    <Tooltip placement='top' title={<h3 style={{ color: "white"}}>Home</h3>}>
        <IconButton>
            <HomeOutlined style={{
            color: 'black'
        }} fontSize='large'/>
            </IconButton>
     </Tooltip>


<Tooltip placement='top' title={<h3 style={{ color: "white"}}>Basket</h3>}>
            <IconButton>
            < ShoppingBasket style={{
            color: 'black'
        }} fontSize='large'/>
            </IconButton>
            </Tooltip>


<Tooltip placement='top' title={<h3 style={{ color: "white"}}>Cart</h3>}>
            <IconButton>
            < ShoppingCartOutlined  style={{
            color: 'black'
        }} fontSize='large'/>
            </IconButton>
            </Tooltip>
   
<Tooltip placement='top' title={<h3 style={{ color: "white"}}>Profile</h3>}>
            <IconButton>
            <Person  style={{
            color: 'black'
        }} fontSize='large'/>
            </IconButton>
            </Tooltip>
   
    </div>
  )
}

export default Footer