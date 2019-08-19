const express = require('express');
const app = express();

app.get('/temperature', (req, res) => {
  res.send('24 °C');
});

app.get('/humidity', (req, res) => {
  res.send('48%');
});

app.get('/', (req, res) => {
  res.send('Hello from Pi!');
});

app.listen(3000, ()=> {
  console.log('Server listening on port 3000');
})
