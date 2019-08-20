const express = require('express');
const app = express();
const path = require('path');
// const getSensorReadings = require('./get-sensor-readings');
const getCachedSensorReadings = require('./get-cached-sensor-readings')

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/temperature', (req, res) => {
  
  res.json({
    value: getCachedSensorReadings.getTemperature().toFixed(1)
  })

  // getSensorReadings((err, temperature, humidity) => {
  //   if (!err) {
  //     res.json({
  //       value: temperature.toFixed(1)
  //     });
  //     // res.send(temperature.toFixed(1));
  //     // res.send(temperature.toFixed(1) + '°C');
  //   }
  // })

  // res.send(getCachedSensorReadings.getTemperature().toFixed(1) + '°C');
  // res.send('24 °C');
});

app.get('/humidity', (req, res) => {
  
  res.json({
    value: getCachedSensorReadings.getHumidity().toFixed(1)
  })

  // getSensorReadings((err, temperature, humidity) => {
  //   if (!err) {
  //     res.json({
  //       value: humidity.toFixed(1)
  //     });
  //   }
  // })

  // res.send(getCachedSensorReadings.getHumidity().toFixed(1) + '%')
  // res.send('48%');
});

app.get('/hello', (req, res) => {
  res.send('Hello from Pi!');
});

app.listen(3000, ()=> {
  console.log('Server listening on port 3000');
})
