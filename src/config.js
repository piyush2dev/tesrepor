var env = 'staging';
module.exports = {
  apiKey: env === 'prod' ? 'dtGKRIAd7y3mwmuXGk63u3MI3Azl1iYX8w9kaeg3' : 'BkSBbok02k6RYUlCLRzI23wac0euoSfC3FP7uW2S',
  siteConfigUrl: id => `https://appcms${env}.viewlift.com/${id}/main.json`,
  siteInfoCachedUrl: d => `https://${env}-api-cached.viewlift.com/content/sites?domainName=${d}`,
};