var React = require('react-native');
var {
  View,
  AppRegistry,
  Navigator,
} = React;
var TodoRoutes = require('./todos/routes');

class TodoApp extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={TodoRoutes.index}
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

AppRegistry.registerComponent('TodoApp', () => TodoApp);
