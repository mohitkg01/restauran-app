import React,{useRef}from 'react'
import classes from './MealItem.module.css'
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const amountInputRef=useRef();
  const submitHandler=event=>{
    event.preventDefault();
    
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=+enteredAmount;

    if(enteredAmount<0){
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button className={classes.button}>Add</button>
    </form>
  )
}

export default MealItemForm