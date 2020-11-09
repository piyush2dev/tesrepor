import React from 'react';

const Html = ({children, initialState, scripts}) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <title>Hoichoi</title>
      <link rel="stylesheet" type="text/css" href="style.css" />
    </head>
    <body>
      <div
        id='root'
        dangerouslySetInnerHTML={{ __html: children}}
      />

      {
        initialState && (
          <script 
            dangerouslySetInnerHTML={{ __html: `window.APP_STATE=${JSON.stringify(initialState)}`}}
          />
        )
      }

      { scripts.map((item, idx) => <script key={idx} src={item} />)}
    </body>
  </html>
)


export default Html;