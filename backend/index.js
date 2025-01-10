const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect()
  .then(client => {
    console.log('Connected to PostgreSQL');
    client.release();  // Освобождаем клиент после проверки
  })
  .catch(err => {
    console.error('Error connecting to PostgreSQL', err);
  });

app.use(cors());  // Включаем CORS
app.use(express.json());  // Для парсинга JSON данных

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
