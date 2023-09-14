import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import { AiOutlineShoppingCart} from "react-icons/ai";
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
 const cartCtx = useContext(CartContext);
 console.log(cartCtx);

 const numberOfCartItems=cartCtx.item.reduce((curNumber,item)=>{
  return curNumber+item.amount;
 },0);
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
        <AiOutlineShoppingCart/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>

    </button>
  )
}

export default HeaderCartButton