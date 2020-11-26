const axios = require('axios');
const CronJob = require('cron').CronJob;

const serverUrl = process.env.SERVER_URL || 'http://localhost:4000';
const cronTimeServerPing = '*/10 * * * *';

function callServer(endpoint) {
  axios
    .get(new URL(endpoint, serverUrl).toString())
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// keep server up
new CronJob({
  cronTime: cronTimeServerPing,
  onTick: () => {
    console.log('Ping');
    callServer('/ping');
  },
  start: true,
});
