var sensor = require('node-dht-sensor');
 
// DHT11            sensorType value: 11
// DHT22 or AM2302  sensorType value: 22
sensor.read(22, 4, function(err, temperature, humidity) {
    if (!err) {
        console.log('temp: ' + temperature.toFixed(1) + '°C, ' +
            'humidity: ' + humidity.toFixed(1) + '%'
        );
    }
});