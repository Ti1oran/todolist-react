// backend/controllers/todoController.js
const Todo = require('../models/Todo');

// Получение всех задач
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Создание новой задачи
exports.createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = new Todo({
      text,
      user: req.user.id // предполагается, что пользователь идентифицирован и req.user установлен
    });
    const todo = await newTodo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Обновление задачи
exports.updateTodo = async (req, res) => {
  try {
    const { text, isCompleted } = req.body;
    const todo = await Todo.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, { text, isCompleted }, { new: true });
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Удаление задачи
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
