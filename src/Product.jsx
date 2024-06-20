import React, { useState } from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import ProductModal from './ProductModal'; // Import the ProductModal component

const Product = ({ product, addToCart, removeFromCart, cart }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setQuantity(1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="col-md-4">
      <Card className="mb-2 cardz">
        {/* Add an onClick event to open the modal */}
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          onClick={() => setShowModal(true)} // Open the modal when the image is clicked
          className="img-ar"
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Price: ${product.price}
            <br />
            <span className='fw-bold'>
            Discounted Price: ${product.discountedPrice}
            </span>
            <br />
            <span className={product.quantityAvailableStyle}>
            Available Quantity: {product.quantityAvailable}
            </span>
          </Card.Text>
          {isInCart ? (
            <div>
              <Button variant="success" disabled>
                Added to Cart
              </Button>
              <Button className='d-none' variant="danger" onClick={handleRemoveFromCart}>
                Remove
              </Button>
            </div>
          ) : (
            <div>
            {product.quantityAvailable > 4 && (
              <div className="quantity-controls">
                <button
                  className="btn btn-outline-secondary quantity-button"
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span className="quantity fs-5 mx-1">{quantity}</span>
                <button
                  className="btn btn-outline-secondary quantity-button"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity === product.quantityAvailable}
                >
                  +
                </button>
              </div>
            )}
            <Button className='mt-2' variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
          )}
        </Card.Body>
      </Card>
      {/* Render the ProductModal component */}
      {showModal && (
        <ProductModal
          product={product}
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Product;
