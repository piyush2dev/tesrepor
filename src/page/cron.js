const redis = require('redis');
const initialApiResponse = require('./helper');

const client = redis.createClient({
  host: 'redis-cache',
});

const getIntialData = async () => {
  try {
    console.log('CRON - Fetching Data...');
    const promises = await Promise.all(
      initialApiResponse.map((apiCall) => apiCall())
    );

    initialApiResponse.forEach((key, idx) => {
      client.set(key.name, JSON.stringify(promises[idx].data));
      client.set('timestamp', new Date().toString());
    });
  } catch (err) {
    // console.error(err);
    console.log(err);
  }
};

getIntialData();

setInterval(() => {
  getIntialData();
}, 3600000);
