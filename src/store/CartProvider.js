import React,{useReducer} from 'react'
import CartContext from './cart-context'

const defaultCartState={
  items:[],
  totalAmount:0
};

const cartReducer=(state,action)=>{
  if(action.type==='ADD_ITEM'){
    const updatedItems=state.items.concat(action.item);
    const updatedAmount=state.totalAmount+action.item.price*action.item.amount;
    return {
      items:updatedItems,
      totalAmount:updatedAmount
    };
  }
  return  defaultCartState;
};

const CartProvider = (props) => {
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
    
    const addItemToCarthandler=item=>{
      dispatchCartAction({type:'ADD_ITEM',item:item});
    };

    const removeItemFromCartHandler=id=>{
      dispatchCartAction({type:'REMOVE',id:id});
    };

    const cartContext={
        item:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCarthandler,
        removeItem:removeItemFromCartHandler
    }
  return (
   <CartContext.Provider value={cartContext}>
        {props.children}
   </CartContext.Provider>
  )
}

export default CartProvider