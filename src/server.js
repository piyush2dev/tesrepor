// server side starting point
import express from 'express';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import redis from 'redis';

import initialApiResponse from './page/helper';
// import Page from './page';
import Html from './page/Html';
import App from './client/App';

const app = express();
const PORT = process.env.PORT || 3000;
const REDIS_PORT = process.env.REDIS_PORT || 6397;

// ====== middlewares ======
app.use(express.static('public'));

// ====== DB-cache ========
const client = redis.createClient({
  host: 'redis-cache',
});

//

const renderApp = (data) => {
  const scripts = ['js/vendor.js', 'js/client.js'];

  //  const initialState  = data

  const appMarkup = renderToString(<App {...data} />);

  const html = renderToStaticMarkup(
    <Html children={appMarkup} scripts={scripts} initialState={data} />
  );

  return `<!DOCTYPE html>${html}`;
};

// Cache middleware/invaildation
const cache = (req, res, next) => {
  // const promises  = initialApiResponse.map(key => {
  //     return new Promise((resolve, reject) => {
  //       client.get(key.name, (err, data) => {
  //         if(err) reject(err);
  //         resolve(data);
  //       })
  //     })
  // })

  // Promise
  // .all(promises)
  // .then(data => res.send(renderApp({...data})))
  // .catch(() => next())

  try {
    client.get('moduleList', (err, moduleList) => {
      client.get('page', (err, page) => {
        res.send(
          renderApp({
            moduleList: JSON.parse(moduleList),
            page: JSON.parse(page),
          })
        );
      });
    });
  } catch (err) {
    next();
  }
};

// Intial api-calls
const getIntialData = async (req, res, next) => {
  try {
    console.log('Fetching Data...');
    const promises = await Promise.all(
      initialApiResponse.map((apiCall) => apiCall())
    );

    initialApiResponse.forEach((key, idx) => {
      client.set(key.name, JSON.stringify(promises[idx].data));
    });

    client.get('moduleList', (err, moduleList) => {
      client.get('page', (err, page) => {
        res.send(renderApp({ moduleList, page }));
      });
    });
  } catch (err) {
    // console.error(err);
    res.status(500);
  }
};

// routes
app.get('*', cache, getIntialData);
// app.get("*", renderReactApp)

// listenner
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
