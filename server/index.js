const express = require('express');
const app = express();
const path = require('path');
const getSensorReadings = require('./get-sensor-readings');

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/temperature', (req, res) => {
  
  getSensorReadings((err, temperature, humidity) => {
    if (!err) {
      res.send('<strong>' + temperature.toFixed(1) + '</strong>' + '°C');
      // res.send(temperature.toFixed(1) + '°C');
    }
  })

  // res.send(getCachedSensorReadings.getTemperature().toFixed(1) + '°C');
  // res.send('24 °C');
});

app.get('/humidity', (req, res) => {
  
  getSensorReadings((err, temperature, humidity) => {
    if (!err) {
      res.send('<strong>' + humidity.toFixed(1) + '</strong>'+ '%');
    }
  })

  // res.send(getCachedSensorReadings.getHumidity().toFixed(1) + '%')
  // res.send('48%');
});

app.get('/hello', (req, res) => {
  res.send('Hello from Pi!');
});

app.listen(3000, ()=> {
  console.log('Server listening on port 3000');
})
