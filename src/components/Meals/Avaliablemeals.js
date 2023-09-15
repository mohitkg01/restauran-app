import React from 'react'
import classes from './Meals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';

const DummyMeals=[{id:'m1',
                    name:'paratha',
                    desc:'Aallo partha plain',
                    price:50},
                    {id:'m2',
                    name:'Paneer Partha',
                    desc:'Aallo partha with extra cheese',
                    price:60},
                    {id:'m3',
                    name:'Bhujia',
                    desc:'Aallo and vegitables mix',
                    price:40},
                    {id:'m4',
                    name:'Aloo sabji',
                    desc:'Aallo with gobhi with extra masala ',
                    price:60},
                    {id:'m5',
                    name:'Biryani',
                    desc:'Hyderabadi dum biryani 3 pc',
                    price:150}];
 


const Avaliablemeals = () => {

  const mealsList=DummyMeals.map(meal=> 
  <MealItem key={meal.id}  id={meal.id} name={meal.name}
   description={meal.desc} price={meal.price}/>)
  return (
    <section className={classes.meals}>
      <Card>
      <ul>
        {mealsList}
      </ul>
      </Card>
    </section>
  )
}

export default Avaliablemeals