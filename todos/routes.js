'use strict';

var React = require('react-native');
var NavBar = require('react-native-navbar');
var TodoIndexView = require ('./routes/index_view');
var TodoNewView = require ('./routes/new_view');
var TodoAddIcon = require ('./add_icon');

module.exports.index = {
  title: 'Todo List',
  component: TodoIndexView,
  navBar: (
    <NavBar
      title='I like Todos'
      customNext={<TodoAddIcon />}
    />
  ),
};

module.exports.new = {
  title: 'Add Todo',
  component: TodoNewView,
  navBar: (
    <NavBar
      title='Add Todo'
      customNext={<TodoAddIcon />}
    />
  ),
};
