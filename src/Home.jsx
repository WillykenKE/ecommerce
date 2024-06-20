// Home.js
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import Cart from './Cart';
import Footer from './Footer';
import MainNav from './MainNav';
import MainHero from './MainHero';
import Subhero from './Subhero';
import items from './Items';
import itemv from './Itemev';

const Home = ({ cart, totalPrice, showCart, onHide, addToCart, removeFromCart, toggleCart }) => {
    const [isElementVisible, setIsElementVisible] = useState(false); // Track element visibility

    useEffect(() => {
      // Create an Intersection Observer
      const element = document.querySelector('.my-element');
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsElementVisible(true);
          }
        });
      });
  
      observer.observe(element);
  
      // Clean up the observer when component unmounts
      return () => {
        observer.unobserve(element);
      };
    }, []);

    return (
    <div className={`my-element ${isElementVisible ? 'fade-in' : ''}`}>
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
            onHide={onHide}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
      <Subhero />
      <div className=" container">
        <div className="row">
          {itemv.map((product) => (
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
      <Footer />
    </div>
  );
};

export default Home;
