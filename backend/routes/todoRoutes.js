const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const protect = require('../middleware/authMiddleware'); // Middleware для проверки аутентификации
const router = express.Router();

// Получение всех задач и создание новой задачи
router.route('/')
  .get(protect, getTodos)
  .post(protect, createTodo);

// Обновление и удаление задачи по ID
router.route('/:id')
  .put(protect, updateTodo)
  .delete(protect, deleteTodo);

module.exports = router;
