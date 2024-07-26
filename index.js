const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Устанавливаем директорию для статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Отправка главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
