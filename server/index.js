const express = require('express');
const app = express();
const getSensorReadings = require('./get-sensor-readings');

app.get('/temperature', (req, res) => {
  
  getSensorReadings((err, temperature, humidity) => {
    if (!err) {
      res.send(temperature + '°C');
    }
  })

  // res.send(getCachedSensorReadings.getTemperature().toFixed(1) + '°C');
  // res.send('24 °C');
});

app.get('/humidity', (req, res) => {
  
  getSensorReadings((err, temperature, humidity) => {
    if (!err) {
      res.send(humidity.toFixed(1) + '%');
    }
  })

  // res.send(getCachedSensorReadings.getHumidity().toFixed(1) + '%')
  // res.send('48%');
});

app.get('/', (req, res) => {
  res.send('Hello from Pi!');
});

app.listen(3000, ()=> {
  console.log('Server listening on port 3000');
})
