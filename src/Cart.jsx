import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = ({ cart, totalPrice, showCart, onHide, removeFromCart }) => {
  return (
    <Modal show={showCart} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} x {product.quantity} = $
              {product.discountedPrice * product.quantity}{' '}
              <button className='btn btn-link text-decoration-none' onClick={() => removeFromCart(product)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total Price: ${totalPrice}</h3>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/login" className='btn btn-secondary' onClick={onHide}>
          Pay
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
