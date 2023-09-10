 import React from 'react'
 import './AvaliableMeals.css'
 import Card from '../UI/Card'
import Input from './Input'
 const DummyMeals=[{id:'m1',
                    name:'paratha',
                    desc:'Aallo partha plain',
                    price:'50Rs'},
                    {id:'m2',
                    name:'Paneer Partha',
                    desc:'Aallo partha with extra cheese',
                    price:'60Rs'},
                    {id:'m3',
                    name:'Bhujia',
                    desc:'Aallo and vegitables mix',
                    price:'40Rs'},
                    {id:'m4',
                    name:'Aloo sabji',
                    desc:'Aallo with gobhi with extra masala ',
                    price:'60Rs'},
                    {id:'m5',
                    name:'Biryani',
                    desc:'Hyderabadi dum biryani 3 pc',
                    price:'150Rs'}]
 
 const Avaliablemeals = () => {
    const mealList=DummyMeals.map(it=>
    <li><div><h3 className='name'>{it.name}</h3>
    <div className='desc'>{it.desc}</div>
    <div className='price'>{it.price}</div>
    <div>{it.id}</div>
    </div>
    <div>
    <form className='form'>
      <Input  label='quantity' input={{
        id:'amoun',
        type:"number",
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
      }}/>
     <button>+Add</button> 
    </form>
    </div>
    </li>);
   return (
    <section className='meals'>
      <Card>
      <ul>
        {mealList}
        </ul>
      </Card>
        
    </section>
   )
 }
 
 export default Avaliablemeals