import express from 'express';
import path from 'path';
import React from 'react';
import Layout from './layout';

const env = process.env.NODE_ENV || 'development';
const server = express();

if (env === 'development') {
  const httpProxy = require('http-proxy');
  const proxy = httpProxy.createProxyServer();

  server.all('/build/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

server.use(express.static(path.resolve(__dirname, 'public')));

server.get('/', (req, res) => {
  const html = '<!DOCTYPE html>' + React.renderToStaticMarkup(<Layout/>);
  res.send(html);
});

export default server;
