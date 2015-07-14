'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
} = React;
var TodoIndexRoute = require('./todos/index_route');

class TodoApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={{ flex: 1 }}
        initialRoute={{
          title: 'Todo List',
          component: TodoIndexRoute,
        }}
      />
    );
  }
}

AppRegistry.registerComponent('TodoApp', () => TodoApp);
