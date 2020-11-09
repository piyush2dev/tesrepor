const path = require('path')

// cont env = 'prod';
const env = 'staging';


const client = env==='staging' ? {
  id: '57e4b76f-6168-41af-bdd8-c76a2e5bf798',
  domainName: 'staging-hoichoitv.viewlift.com',
  apiKey: 'BkSBbok02k6RYUlCLRzI23wac0euoSfC3FP7uW2S'
}: {
  id: '57e4b76f-6168-41af-bdd8-c76a2e5bf798',
  domainName: 'hoichoi.tv',
  apiKey: 'BkSBbok02k6RYUlCLRzI23wac0euoSfC3FP7uW2S'
}

const {id, domainName, apiKey} = client

module.exports = {
  apiProxy: `https://${env}-api.viewlift.com`,
  static: 'public',
  apiKey,
  layoutUrlBase: `https://appcms${env}.viewlift.com/`,
  siteConfigUrl: `https://appcms${env}.viewlift.com/${id}/main.json`,
  siteInfoCachedUrl: `https://${env}-api.viewlift.com/content/sites?domainName=${domainName}`,
  siteConfigWebUrl: `https://appcmsstaging.viewlift.com/${id}/web.json?version=0.11140.0`,
  pageUrl: `https://${env}-api.viewlift.com/content/pages`,
  moduleList: `https://appcms${env}.viewlift.com/${id}/web/3385ad06-ed4d-419a-a54b-1391ee7d38f2.json`,
  internalName: 'staging-hoichoitv'
} 