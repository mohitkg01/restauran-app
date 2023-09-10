import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const HeaderCartButton = (props) => {
  return (
    <button className='button' onClick={props.onClick}>
    <span className='icon'><AiOutlineShoppingCart/></span>
    <span>My cart</span>
    <span className='badge'>2</span>
  </button>
  )
}

export default HeaderCartButton