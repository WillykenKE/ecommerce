import React from 'react';
import { Modal } from 'react-bootstrap';

const ProductModal = ({ product, showModal, closeModal }) => {
    const descriptionLines = product.description.split('\n');
  return (
    <Modal show={showModal} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">Description</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2 className='fw-bold mb-3 text-center'>{product.name}</h2>
        {descriptionLines.map((line, index) => (
            <p className='text-black-50' key={index}>{line}</p>
          ))}
          <p className="text-primary">Pieces remaining ({product.quantityAvailable})</p>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
