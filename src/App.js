import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartEnable, setCartEnable] = useState(false);

  const openCartHandler = () => {
    setCartEnable(true)
  };
  const closeCartHandler = () => {
    setCartEnable(false)
  };

  return (
    <CartProvider>
      {cartEnable && <Cart onHideCart={closeCartHandler}/>}
      <Header onShowCart={openCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
