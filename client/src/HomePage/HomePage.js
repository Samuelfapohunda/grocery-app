import {React, useState} from 'react'
import './HomePage.css'
import Main from './Main'
import data from './data'
import Footer from './Footer.js'



function HomePage() {
const [cartItems, setCartItems] = useState([])
const {products} = data
const onAdd = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);

  if(exist) {
    const newCartItems = cartItems.map((x) => 
    x.id === product.id ? {...exist, qty: exist.qty + 1} : x )  
  setCartItems(newCartItems);
  } else {
    const newCartItems = [...cartItems, {...product, qty: 1}];
    setCartItems(newCartItems)
  }
}

const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if(exist.qty === 1) {
    const newCartItems = cartItems.filter((x) => x.id !== product.id);
    setCartItems(newCartItems)
  } else {
    const newCartItems = cartItems.map((x) => 
    x.id === product.id ? {...exist, qty: exist.qty - 1} : x );
    setCartItems(newCartItems)  
  }
}

  return (
    <div className='homepage'>
     <Main 
     cartItems={cartItems}
     onAdd={onAdd}
     onRemove={onRemove}
      products={products} />


<Footer countCartItems={cartItems.length} />
    </div>
  )
}

export default HomePage