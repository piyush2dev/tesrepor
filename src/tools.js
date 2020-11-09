const axios = require("axios");
const { SITE_CONFIG_WEB_URL, SITE_INFO_URL, SITE_CONFIG_URL } = require("./constants");
const config = require("./config");

var fetchSiteInfo = (host) => {
  var url = (host && config.siteInfoCachedUrl(host)) || SITE_INFO_URL;
  console.log(`\n=== fetchSiteInfo Url ===\n ${url}`);
  return axios.get(url, { headers: { 'x-api-key': config.apiKey } }).then(r => {
    console.log(`Fetched site info for host ${url} at ${new Date()}\n`);
    console.log(`\n=== fetchSiteInfo data ===\n ${JSON.stringify(r.data, null, 2)}`);
    return r.data;
  })
    .catch(e => {
      console.log(`Site Info Error ${e}`);
    });
};

var fetchSiteConfig = (siteInfo) => {
  var url = (siteInfo && config.siteConfigUrl(siteInfo.gist.id)) || SITE_CONFIG_URL;
  let siteValue;
  // let siteValue = siteCache.get(siteInfo.gist.id);
  var headers = {
    'If-Modified-Since': new Date().toString()
  };

  console.log("\n==== fetchSiteConfig ===\n", url);
  return axios(url, {
    headers: headers,
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

let fetchSiteConfigWeb = (siteConfig) => {
  let url = (siteConfig && siteConfig.Web) || SITE_CONFIG_WEB_URL;
  let webValue;
  // let webValue = siteCache.get(siteConfig.id + "web");
  let headers = {
    'If-Modified-Since': new Date().toString()
  };
  return axios(url, {
    headers: headers,
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500 else give error in catch block
    }
  })
    .then(response => {
      console.log(`Fetched site WEB config from ${url} at ${new Date()}\n`);
      if (response.status > 200 && response.status < 400) {
        console.log(`Response Status ${response.status} ${new Date()}\n`);
        console.log("\n==== fetchSiteConfigWeb unmodified data ====\n", response.data);
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

let fetchPageMetadata = async (config, siteConfig, siteConfigWeb, path, ip, lang, originalUrl, host, referrer) => {
  console.log(`Current Page ${path} at ${new Date()}\n`);
  let ignoreRequest = path.includes("undefined") || path.includes("null") || path.includes("//") ||
    path.includes("wp-") || path.includes("+") || path.includes(".png") || path.includes(".env") ||
    path.includes(".txt") || path.includes(".php") || path.includes(".rss") || path.includes(".xml") ||
    path.includes(".json") || path.includes(".jsp") || path.includes(".ttf") || path.includes(".woff") ||
    path.includes(".svg") || path.includes(".gif") || path.includes(".css") || path.includes(".js") || path === "/404";
  if (!ignoreRequest) {
    var baseUrl = config.tempBaseUrl || siteConfig.apiBaseUrlCached || siteConfig.apiBaseUrl;
    var apiUrl = baseUrl + '/content/pages';
    var embedVideoPermalink = null;
    var siteMetadata = {},
      fetchDetails = false,
      moduleLimit = 0,
      languageCode = "",
      embedVideoPermalink = '/';
    if (lang && lang !== "") {
      languageCode = (lang).toUpperCase();
    } else {
      languageCode = "default";
    }

    console.log(`Client Request IP ${ip} at ${new Date()}\n`)
    console.log(`Fetching country code at ${new Date()}\n`)
    let countryCode = { country: "IN" } || await getGeoliteLocation(ip)
    console.log(`Fetched Country ${countryCode && countryCode.country} at ${new Date()}\n`)

    if (lang && lang !== "") {
      languageCode = (lang).toUpperCase()
    } else {
      languageCode = "default"
    }

    if (path.includes("embed/player")) {
      var embedUrl = new URL('https://' + host + originalUrl)
      var params = new URLSearchParams(embedUrl.search)
      var videoId = params.get('filmId')
      var videoInfoApiUrl = baseUrl + '/content/videos/' + videoId;
      var embedVideoToken = null;
      await axios.get(videoInfoApiUrl, {
        headers: {
          "x-api-key": config.apiKey
        },
        params: { "site": siteConfig.internalName }
      })
        .then(res => {
          console.log(`Embed Video data fetched at ${new Date()}\n`)
          embedVideoPermalink = res.data && res.data.gist.permalink;
        })
        .catch(e => console.error(e));
    }
    //Disable x-frame header for embeded route and tools
    if (originalUrl.indexOf('embed/player') > -1) {
      console.log(`Embed Player at ${new Date()}\n`);
      var embedFlag = false;
      var refererDomain = referrer ? referrer : host;
      console.log(`RefererDomain ${refererDomain}\n`);
      var isEmbedEnabled = siteConfig && siteConfig.embedPlayer && siteConfig.embedPlayer.embedPlayer;
      console.log(`isEmbedEnabled ${isEmbedEnabled}\n`);
      if (refererDomain && isEmbedEnabled) {
        console.log(`Embed player enabled - ${new Date()}\n`);
        embedFlag = true;
        var allowedDomains = siteConfig.embedPlayer.allowedDomains;
        if (allowedDomains && allowedDomains.length > 0) {
          refererDomain = refererDomain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
          if (!allowedDomains.includes(refererDomain)) {
            embedFlag = false;
            console.log(`${refererDomain} is not added in allowed list - ${new Date()}\n`)
          }
        }
      }

      if (embedFlag) {
        const embedToken = await fetchEmbedToken(siteConfig, config, refererDomain, host, originalUrl)
        if (embedToken) {
          embedVideoToken = embedToken;
        }
      }
    }


    console.log(`Site Name ${siteConfig.internalName} at ${new Date()}\n`)
    console.log(`Language Code ${languageCode} at ${new Date()}\n`)

    var contentApiHeaders = {
      'x-api-key': config.apiKey,
    };
    if (ip) {
      contentApiHeaders['X-Forwarded-For'] = ip;
    }
    var params = {
      "path": path,
      "site": siteConfig.internalName,
      "moduleOffset": 0,
      "moduleLimit": moduleLimit,
      "includeContent": fetchDetails,
      "languageCode": languageCode,
      "countryCode": (countryCode && countryCode.country) || ""
    };
    console.log(`API URL ${apiUrl}`)
    console.log(`Params ${JSON.stringify(params)}`);
    return axios.get(apiUrl, {
      params: params,
      headers: contentApiHeaders
    }).then(r => {
      console.log(`Fetched page metadata at ${new Date()}\n`)
      console.log("\n==== fetchPageMetadata data ======\n", JSON.stringify(r.data, null, 2));
      siteMetadata = {
        "title": r.data.metadataMap && r.data.metadataMap.title ? r.data.metadataMap.title : r.data.title,
        "description": r.data.metadataMap && r.data.metadataMap.description ? r.data.metadataMap.description : r.data.title,
        "keywords": r.data.metadataMap && r.data.metadataMap.keywords ? r.data.metadataMap.keywords : r.data.title,
        "image": (r.data.metadataMap && r.data.metadataMap.image) ? (r.data.metadataMap && r.data.metadataMap.image) : (siteConfig.images && siteConfig.images.placeholderPoster ? siteConfig.images.placeholderPoster : (siteConfigWeb.images ? siteConfigWeb.images.desktopLogo : "")),
        "h1title": r.data.metadataMap && r.data.metadataMap.h1Title ? r.data.metadataMap.h1Title : r.data.title,
        "h2title": r.data.metadataMap && r.data.metadataMap.h2Title ? r.data.metadataMap.h2Title : r.data.title,
        "embedVideoPermalink": embedVideoPermalink ? embedVideoPermalink : '/',
        "embedVideoToken": embedVideoToken
      }
      if (r.data.title === "Video Page") {
        siteMetadata['type'] = "video.movie";
      } else if (r.data.title === "Show Page") {
        siteMetadata['type'] = "video.tv_show";
      } else if (r.data.title === "Article Page") {
        siteMetadata['type'] = "article";
      } else if (r.data.title === "Event Page") {
        siteMetadata['type'] = "event";
      } else {
        siteMetadata['type'] = "website";
      }
      console.log("\n==== Final fetchPageMetadata data ===\n", JSON.stringify(siteMetadata, null, 2));
      return siteMetadata
    })
      .catch(e => {
        console.log(`Page API Error ${e}`);
        siteMetadata = {
          "error": e
        };
        return siteMetadata;
      });
  } else {
    let errorObject = {
      "error": "Path contains undefined"
    };
    return errorObject
  }
};

let fetchAllData = () => {
  let fetchApiArray = [fetchSiteInfo(), fetchSiteConfig(), fetchSiteConfigWeb()];
  return Promise.all(fetchApiArray);
};

module.exports = {
  fetchSiteInfo,
  fetchSiteConfig,
  fetchSiteConfigWeb,
  fetchAllData,
};