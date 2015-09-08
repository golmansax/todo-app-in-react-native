import React from 'react';
import * as Router from 'react-router';
import App from './app';

const routes = (
  <Router.Route handler={App} path='/' />
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, global.document.getElementById('content'));
});
