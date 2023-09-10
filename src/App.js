import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";


function App() {
  const [isCartOpen,setCart]=useState(false);
  const cartHandler=()=>{
    setCart(true);
  }
  const cartColse=()=>{
    setCart(false);
  }
  return (
    <div className="App">
    {isCartOpen && <Cart onClose={cartColse} />}
    <Header ShowCart={cartHandler}/>
    <Meals/>
    </div>
  );
}

export default App;
