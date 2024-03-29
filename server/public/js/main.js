
const temperatureCanvasCtx = document.getElementById('temperature-chart').getContext('2d')

const temperatureChartConfig = {
  type: 'line',
  data: {
    labels: ['10:30', '10:31', '10:32', '10:33'],
    // labels: [],
    datasets: [{
      data: [12, 19, 23, 17],
      // data: [],
      backgroundColor: 'rgba(255, 205, 210, 0.5)'
    }]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: 10,
          suggestedMax: 40
        }
      }]
    }
  }
}

const temperatureChart = new Chart(temperatureCanvasCtx, temperatureChartConfig);

const humidityCanvasCtx = document.getElementById('humidity-chart').getContext('2d');

const humidityChartConfig = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: 'rgba(197, 202, 233, 0.5)'
    }]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: 30,
          suggestedMax: 90
        }
      }]
    }
  }
}

const humidityChart = new Chart(humidityCanvasCtx, humidityChartConfig);

const pushData = (arr, value, maxLen) => {
  arr.push(value)
  if (arr.length > maxLen) {
    arr.shift()
  }
}

const temperatureDisplay = document.getElementById('temperature-display');
const humidityDisplay = document.getElementById('humidity-display');

const fetchTemperature = () => {
  console.log('fetchTemperature..');
  fetch('/temperature')
    .then(results => {
      return results.json()
    })
    .then(data => {
      const now = new Date()
      const timeNow = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
      pushData(temperatureChartConfig.data.labels, timeNow, 10);
      pushData(temperatureChartConfig.data.datasets[0].data, data.value, 10);
      temperatureChart.update();
      temperatureDisplay.innerHTML = data.value;
    })
}

const fetchHumidity = () => {
  console.log('fetchHumidity..');
  fetch('/humidity')
    .then(results => {
      return results.json()
    })
    .then(data => {
      const now = new Date()
      const timeNow = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
      pushData(humidityChartConfig.data.labels, timeNow, 10);
      pushData(humidityChartConfig.data.datasets[0].data, data.value, 10);
      humidityChart.update();
      humidityDisplay.innerHTML = data.value;
    })
}

// fetchTemperature();
// fetchHumidity();
/*
Call the above defined functions at regular intervals
*/
setInterval(() => {
  fetchTemperature()
  fetchHumidity()
}, 2000)

console.log('main.js done')
