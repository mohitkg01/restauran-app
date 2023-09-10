import React from 'react'
import Modle from '../UI/Modle'
import './Cart.css'

const Cart = (props) => {
    const cartItems=(
        <ul>{[{
            id:'1',
            name:'parathe',
            quantity:'5',
            price:'150'
        }].map((item)=> { <li>{item.price}</li> })}</ul>
    );
  return (
    <Modle>
        {cartItems}
        <div className='total'> 
        <span>Total Amount</span>
        <span className='price'>150</span>
        </div>
        <div className='action'>
            <button className='close'>Close</button>
            <button className='order'>Order</button>
        </div>
    </Modle>
  )
}

export default Cart