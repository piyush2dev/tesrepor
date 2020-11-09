const axios = require('axios')
const config = require('../../config') 



const fetchSiteInfo = () => {
  const url = config.siteInfoCachedUrl;
  console.log(`\n=== fetchSiteInfo Url ===\n ${url}`);
  return axios
          .get(url, { headers: { 'x-api-key': config.apiKey }})
          .then(r => {
            console.log(`Fetched site info for host ${url} at ${new Date()}\n`);
            // console.log(`\n=== fetchSiteInfo data ===\n ${JSON.stringify(r.data, null, 2)}`);
            return r.data;
          })
          .catch(e => console.log(`Site Info Error ${e}`));
};


const fetchSiteConfig = () => {
  const url = config.siteConfigUrl;
  let siteValue;

  console.log("\n==== fetchSiteConfig ===\n", url);
  return axios.get(url, {
    headers: {'If-Modified-Since': new Date().toString()},
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500 else give error in catch block
    }
  })
  .then(response => {
      console.log(`Fetched site config from ${url} at ${new Date()}\n`);
      if (response.status > 200 && response.status < 400) {
        console.log(`Response Status ${response.status} ${new Date()}\n`);
        if (siteValue !== undefined) {
          console.log(`Fetched cached site config at ${new Date()}\n`);
          return siteValue;
        } else {
          return axios(url)
            .then(response => {
              console.log(`Fetched fresh data again and stored in cache at ${new Date()}\n`);
              // siteCache.set(siteInfo.gist.id, response.data);
              return response.data;
            });
        }
      } else {
        console.log(`Fetched fresh data ${new Date()}\n`);
        return response.data;
      }
    })
    .catch(e => {
      console.log(`Error occurred ${new Date()}\n`);
    });
};


const  fetchSiteConfigWeb = () => {
  let url = config.siteConfigWebUrl;
  let webValue;
  
  return axios(url, {
    headers: {
      'If-Modified-Since': new Date().toString()
    },
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500 else give error in catch block
    }
  })
    .then(response => {
      console.log(`Fetched site WEB config from ${url} at ${new Date()}\n`);
      if (response.status > 200 && response.status < 400) {
        console.log(`Response Status ${response.status} ${new Date()}\n`);
        // console.log("\n==== fetchSiteConfigWeb unmodified data ====\n", response.data);
        if (webValue !== undefined) {
          console.log(`Fetched cached site WEB config at ${new Date()}\n`);
          return webValue;
        } else {
          return axios(url) // GET default method
            .then(response => {
              // siteCache.set(siteConfig.id + "web", response);
              return response.data;
            });
        }
      } else {
        return response.data;
      }
    })
    .catch(e => {
      console.log(`Error occurred in WEB at ${new Date()}\n`);
      console.error(e);
    });
};


const page = () => {
  console.log('fetching pageapi....')
  return axios({
    method: "GET",
    url: config.pageUrl,
    headers: {
      "x-api-key": config.apiKey,
    },
    params : {
      path: '/',
      site: config.internalName,
      includeContent: true,
      moduleOffset: 0,
      moduleLimit: 4,
      languageCode : 'default',
      countryCode: 'IN'
    }

  })
  .catch(err => console.log(err.message))
}


const moduleList = () => {
  console.log('url',config.moduleList)
  return axios({
    method: "GET",
    url: config.moduleList,
  })
  .catch(() => console.log('err'))
}


module.exports = [
  moduleList,
  page
];



