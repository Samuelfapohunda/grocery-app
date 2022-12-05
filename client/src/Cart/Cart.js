import React from 'react'
import './Cart.css'




function Cart(props) {


  const  { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 50 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice



  return (
    <div className='cart'>
      <h1>Cart Items</h1>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className='row'>
            <div className='col-1'>{item.name}</div>
            <div className="col">
            <button onClick={() => onRemove(item)} className="remove">
                        -
                    </button>

                    <button onClick={() => onAdd(item)} className="add">
                        -
                    </button>
            </div>

            <div className="col-1 text-right">
              {item.qty} x ${item.Price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
          <hr />
          <div className="row">
            <div className="col-2">
              Items Price
            </div>

            <div className="col-1 text-right">
            ${itemsPrice.toFixed(2)}
            </div>
          </div>

          <div className="row">
            <div className="col-2">
             Tax Price
            </div>

            <div className="col-1 text-right">
            ${taxPrice.toFixed(2)}
            </div>
          </div>

          <div className="row">
            <div className="col-2">
             Shipping Price
            </div>

            <div className="col-1 text-right">
            ${shippingPrice.toFixed(2)}
            </div>
          </div>

          <div className="row">
            <div className="col-2">
             Total Price
            </div>

            <div className="col-1 text-right">
            ${totalPrice.toFixed(2)}
            </div>
          </div>

          <hr />

          <div className="row">
            <button onClick={() => alert('Implement Checkout!')}>
              Checkout</button>
          </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart