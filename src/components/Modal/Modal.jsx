import React, { useEffect } from 'react';
import css from './Modal.module.css'

const Modal = ({ imageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.Overlay} onClick={onClose}>
      <div className={css.Modal}>
        <img src={imageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal
