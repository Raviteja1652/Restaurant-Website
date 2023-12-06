import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
  const [cartEnable, setCartEnable] = useState(false);

  const openCartHandler = () => {
    setCartEnable(true)
  };
  const closeCartHandler = () => {
    setCartEnable(false)
  };

  return (
    <div>
      {cartEnable && <Cart onHideCart={closeCartHandler}/>}
      <Header onShowCart={openCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
