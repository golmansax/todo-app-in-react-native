'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  AppRegistry,
  Navigator,
} = React;
var NavBar = require('react-native-navbar');
var TodoIndexRoute = require('./todos/index_route');
var { Icon } = require('react-native-icons');

class TodoApp extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          title: 'Todo List',
          component: TodoIndexRoute,
          navBar: (
            <NavBar
              title='I like Todos'
              customNext={
                <Icon
                  name='fontawesome|plus'
                  size={30}
                  color='#3b5998'
                  style={styles.plus}
                />
              }
            />
          ),
        }}
        renderScene={this._renderScene}
      />
    );
  }

  _renderScene(route, navigator) {
    var navBar = route.navBar;
    if (navBar) {
      navBar = React.cloneElement(navBar, {
        navigator: navigator,
        route: route,
      });
    }

    return (
      <View style={{ flex: 1 }}>
        {navBar}
        <route.component />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  plus: {
    width: 50,
    height: 50,
    top: 5,
  },
});

AppRegistry.registerComponent('TodoApp', () => TodoApp);
