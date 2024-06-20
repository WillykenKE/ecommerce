import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product'
import Cart from './Cart';
import './App.css';
import Footer from './Footer';
import MainNav from './MainNav';

// Import your Items.js file
import items from './Items';
import MainHero from './MainHero';

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
    <div>
      <MainNav />
      <MainHero />
    <div className="container app-container">
      <div className='d-block'>
        <div className='text-center my-5'>
          <h1>Get more save less</h1>
      </div>
      <div className='float-end'>
      <button className="btn btn-warning toggle-cart-btn" onClick={toggleCart}>
        {showCart ? 'Hide Cart' : 'Show Cart'}
      </button>
      </div>
      <div className="main-content">
        <div className="row">
          {items.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          ))}
        </div>
      </div>
      <Cart
        cart={cart}
        totalPrice={totalPrice}
        showCart={showCart}
        onHide={() => setShowCart(false)}
        removeFromCart={removeFromCart}
      />
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
