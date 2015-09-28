var React = require('react-native');
var NavBar = require('react-native-navbar');
var TodoIndexView = require('./index_view');
var TodoNewView = require('./new_view');
var TodoAddIcon = require('../add_icon');

module.exports.index = {
  title: 'Todo List',
  component: TodoIndexView,
  navBar: (
    <NavBar
      title='My Todo List'
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
