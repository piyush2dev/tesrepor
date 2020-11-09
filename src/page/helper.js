const axios = require('axios');
const config = require('../../config');

const page = () => {
  console.log('fetching pageapi....');
  return axios({
    method: 'GET',
    url: config.pageUrl,
    headers: {
      'x-api-key': config.apiKey,
    },
    params: {
      path: '/vamp/home',
      site: config.internalName,
      includeContent: true,
      moduleOffset: 0,
      moduleLimit: 4,
      languageCode: 'default',
      countryCode: 'IN',
    },
  }).catch((err) => console.log(err.message));
};

const moduleList = () => {
  console.log('url', config.moduleList);
  return axios({
    method: 'GET',
    url: config.moduleList,
  }).catch(() => console.log('err'));
};

//

module.exports = [moduleList, page];
