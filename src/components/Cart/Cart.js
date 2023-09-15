import React,{useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
 
  const cartCtx=useContext(CartContext);
  console.log(cartCtx.item);

  const totalAmount=`${cartCtx.totalAmount}`
  const itemLenght=cartCtx.item.length>0;

  const cartItemRemoveHandler=id=>{
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler=item=>{
    cartCtx.addItem({...item,amount:1})
  };
  
    const cartItem=(
    <ul className={classes.cartitem}>
      {cartCtx.item.map((it)=>(
      <CartItem key={it.id} name={it.name}
       amount={it.amount} price={it.price}
      onRemove={cartItemRemoveHandler.bind(null,it.id)}
       onAdd={cartItemAddHandler.bind(null,it)}/>
      ))}
      </ul>);
  return (
    <Modal onClose={props.onClose}>
        {cartItem}
        <div  className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.action}>
            <button className={classes.close} onClick={props.onClose}>Close</button>
            {itemLenght && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart