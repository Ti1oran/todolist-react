const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// Маршрут регистрации
router.post('/register', register);

// Маршрут входа
router.post('/login', login);

module.exports = router;
