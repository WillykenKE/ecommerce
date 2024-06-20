import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook

const ProductDescription = () => {
  // Use the useParams hook to access route parameters
  const { id } = useParams();

  // You can fetch the product details using the id and display the description here
  // Replace this with your actual product data fetching logic

  return (
    <div>
      <h1>Product Description</h1>
      <p>Product ID: {id}</p>
      <p>This is where you can display the product description.</p>
    </div>
  );
};

export default ProductDescription;
