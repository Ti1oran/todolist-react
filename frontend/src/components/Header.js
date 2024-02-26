import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.webp';
import Modal from './Modal';
import LoginForm from './LoginForm';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const handleLogin = (formData) => {
    console.log('Login Data:', formData);
    // Здесь может быть вызов API для входа
    setIsModalOpen(false); // Закрыть модальное окно после входа
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>
            <img src={logo} alt="Logo"/>
          </a>
          <button onClick={toggleModal}>Зарегистрироваться / Войти</button>
        </div>
      </header>
      <Modal isOpen={isModalOpen} onClose={toggleModal} title="Вход в систему">
        <LoginForm onLogin={handleLogin} />
      </Modal>
    </>
  );
}

export default Header;
