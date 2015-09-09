import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>TodoApp</title>
          <link
            type='text/css'
            rel='stylesheet'
            href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic'
          />
          <link
            href='//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
            rel='stylesheet'
          />
          <link href='/build/bundle.css' rel='stylesheet' />
          <meta name='viewport' content='width=device-width, user-scalable=no' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        </head>
        <body>
          <div id='content' />
          <script type='text/javascript' src='/build/bundle.js' />
        </body>
      </html>
    );
  }
}
