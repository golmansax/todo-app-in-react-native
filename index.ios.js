/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  View,
} = React;

var MOCKED_TODO_DATA = [
  {
    name: 'Watch Wimbledon Final',
    date: 'Jul 12 2015',
    image: 'http://www.hdicon.com/wp-content/uploads/2010/06/Wimbledon.png',
  },
  {
    name: 'Finish React Native Tutorial',
    date: 'Aug 12 2015',
    image: 'http://facebook.github.io/react/img/logo_og.png',
  },
];

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
    };
  },

  componentDidMount: function () {
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(MOCKED_TODO_DATA),
        loaded: true,
      });
    }, 500);
  },

  render: function () {
    if (!this.state.loaded) {
      return this._renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderTodo}
        style={styles.listView}
      />
    );
  },

  _renderTodo: function (todo) {
    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{ uri: todo.image }} />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{todo.name}</Text>
          <Text style={styles.date}>{todo.date}</Text>
        </View>
      </View>
    );
  },

  _renderLoadingView: function () {
    return (
      <View style={styles.container}>
        <Text>Loading todos...</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 8,
  },
  date: {
    textAlign: 'center'
  },
  thumbnail: {
    width: 50,
    height: 50
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('TodoApp', () => TodoApp);
