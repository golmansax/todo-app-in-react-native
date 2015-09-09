import React from 'react';
import * as Router from 'react-router';
import TodosIndexRouteHandler from './todos/index_route_handler';
import './layout.css';

const routes = (
  <Router.Route handler={TodosIndexRouteHandler} path='/' />
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, global.document.getElementById('content'));
});
