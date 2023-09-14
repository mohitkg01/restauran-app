import React from 'react'
import img from '../../Assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>MealStore</h1>
       <HeaderCartButton onClick={props.onShowCart}/>
      </header>
     <div classes={classes['img']}>
      <img src={img} alt='image header'/>
     </div>
    </>
  )
}

export default Header