const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');

// Middleware
app.use(cors()); // Позволяет обрабатывать запросы из разных источников
app.use(express.json()); // Позволяет серверу принимать и разбирать JSON в теле запроса

// Маршруты
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// Базовый маршрут для проверки, что сервер работает
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Подключение к базе данных MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));

// Порт, на котором будет запущен сервер
const PORT = process.env.PORT || 5000;

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
