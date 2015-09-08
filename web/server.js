import express from 'express';
import React from 'react';
import Layout from './layout';

const server = express();

server.get('/', (req, res) => {
  const html = '<!DOCTYPE html>' + React.renderToStaticMarkup(<Layout/>);
  res.send(html);
});

export default server;
