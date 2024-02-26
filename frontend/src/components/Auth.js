import React, { useState } from 'react';

const Auth = () => {
  // Состояние для управления вводом в формах регистрации и входа
  const [isSignUp, setIsSignUp] = useState(true); // Переключатель между регистрацией и входом
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Логика регистрации
      console.log('Регистрация:', formData);
    } else {
      // Логика входа
      console.log('Вход:', formData);
    }
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <div>
      <h2>{isSignUp ? 'Регистрация' : 'Вход'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isSignUp ? 'Зарегистрироваться' : 'Войти'}</button>
      </form>
      <button onClick={switchMode}>
        {isSignUp ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
      </button>
    </div>
  );
};

export default Auth;