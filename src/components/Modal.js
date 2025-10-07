import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='thuvien-modal'>
      <div className='thuvien-modal-content'>
        <span className='thuvien-close' onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
