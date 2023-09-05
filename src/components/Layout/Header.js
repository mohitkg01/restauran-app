import React from 'react';
import img from '../../Assets/download.jpg';
import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Header = () => {
  return (
    <>
      <div className='header'>
        <h1>Order Meals</h1>
        <button className='button'>
        <span className='icon'><AiOutlineShoppingCart/></span>
        <span>My cart</span>
        <span className='badge'>2</span>
      </button>
      </div>
      <div className='img-main'>
        <img src={img} alt="Dashboard" />
      </div>
    </>
  )
}

export default Header