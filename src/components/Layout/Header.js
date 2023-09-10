import React from 'react';
import img from '../../Assets/download.jpg';
import './Header.css'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  
 
  return (
    <>
      <header className='header'>
        <h1>Order Meals</h1> 
        <HeaderCartButton onClick={props.ShowCart}/>       
      </header>
      <div className='img-main'>
        <img src={img} alt="Dashboard" />
      </div>
    </>
  )
}

export default Header