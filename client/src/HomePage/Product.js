import React from 'react'
import { IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import './HomePage.css'

function Product(props) {
    const {product, item, onAdd, onRemove} = props
  return (
  
    <div className='item'>
        <div  style={{
               height: 100,
             }}>
     <img className="small" height='90px'  width='90px' src={product.image} alt={product.name} />
     </div>
    
  <div style={{
                fontSize: 18,
              display: 'flex',
                textAlign: 'left',
                paddingLeft: 10
              }}>
                
                
                

     <div>
             <b>{product.name}</b> <br /> {product.quantity}kg <br />${product.price}
             </div>
     <div style={{
              marginTop: 30,
              marginRight: 10
             }}>


{item ? (
                <div style={{
                    width: 70,
                    marginLeft: -15,
                    display: 'flex',
                    justifyContent: 'space-between'
                   
                }}>
                    <button onClick={() => onRemove(item)} className="remove">
                        -
                    </button>
                    <span className='p-1'>{item.qty}</span>
                    <button onClick={() => onAdd(item)} className="add">
                    +
                    </button>
                </div>) : (
           < IconButton onClick={() => onAdd(product)} style={{
              backgroundColor: 'green',
             }}>
                 < AddShoppingCart fontSize='small' style={{
                  color: 'white',
                
                 }}/>
             </IconButton>
                )
    }
     </div>
     </div>
    </div>
  )
}

export default Product




