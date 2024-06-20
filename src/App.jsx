// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Cart from './Cart';
import Signup from './Signup';
import Payment from './Payment';

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    let calculatedTotalPrice = 0;
    cart.forEach((product) => {
      calculatedTotalPrice += product.discountedPrice * product.quantity; // Multiply by quantity
    });
    setTotalPrice(calculatedTotalPrice);
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product.id !== productToRemove.id);
    setCart(updatedCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/pay" element={<Payment />}></Route>
        <Route path="/" element={<Home
          cart={cart}
          totalPrice={totalPrice}
          showCart={showCart}
          onHide={() => setShowCart(false)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          toggleCart={toggleCart}
        />}></Route>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
