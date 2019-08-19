var sensor = require('node-dht-sensor')

var sensorType = 22;
var pin = 4;

/*
We abstract away the functionality to read sensor information inside the getSensorReadings function.
This function is also asynchronous. It accepts a callback function as an argument.
*/
const getSensorReadings = (callback) => {

  console.log('getSenorReadings..');
  sensor.read(sensorType, pin, function (err, temperature, humidity) {
    if (!err) {
      /*
      If there is an error, call the callback function with the error as its first argument
      */
      return callback(err)
    }

    /*
    If everything went well, call the callback with "null" as the first argument to indicate thet there was no error.
    The second and third arguments would be the results (temperature and humidty respectively)
    */
    console.log(temperature);
    console.log(humidity);
    callback(null, temperature, humidity)
  })
}

console.log('getSensorReadings.js done.')
module.exports = getSensorReadings