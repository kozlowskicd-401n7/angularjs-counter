'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('./index.html');
});

app.get('/chat', (req, res) => {
  res.send('./chat.html');
});

app.listen(PORT, () => {
  console.log('Web Server up on port', PORT);
});