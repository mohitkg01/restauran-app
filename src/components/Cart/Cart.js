import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';

const Cart = (props) => {
  console.log(props);
    const cartItem=<ul className={classes.cartitem}
    >{[{id:1 ,name:'parathe',quantity:2,price:50}
    ].map(item=><li>{item.name}</li>)}</ul>;
  return (
    <Modal onClose={props.onClose}>
        {cartItem}
        <div  className={classes.total}>
            <span>Total Amount</span>
            <span>500</span>
        </div>
        <div className={classes.action}>
            <button className={classes.close} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart