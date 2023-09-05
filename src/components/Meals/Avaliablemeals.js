 import React from 'react'
 import './AvaliableMeals.css'
 import Card from '../UI/Card'

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
    <li><div><h3>{it.name}</h3>
    <div>{it.desc}</div>
    <div>{it.price}</div>
    </div>
    <div></div>
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