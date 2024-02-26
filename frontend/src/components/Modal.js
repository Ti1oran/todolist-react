import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={isOpen ? `${styles.modalOverlay} ${styles.active}` : styles.modalOverlay} onClick={onClose}>
      <div className={isOpen ? `${styles.modalContent} ${styles.active}` : styles.modalContent} onClick={e => e.stopPropagation()}>
        {title && <h2 className={styles.modalTitle}>{title}</h2>}
        {children}
        <button className={styles.closeButton} onClick={onClose}></button>
      </div>
    </div>
  );
};

export default Modal;
