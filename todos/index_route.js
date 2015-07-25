'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ListView,
  View,
} = React;
var Button = require('react-native-button');
var { getAll } = require('./store');
var { Icon } = require('react-native-icons');

class TodosIndexRoute extends React.Component {
  constructor() {
    super()
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(getAll()),
        loaded: true,
      });
    }, 500);
  }

  render() {
    if (!this.state.loaded) {
      return this._renderLoadingView();
    }

    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderTodo}
          style={styles.listView}
        />
        <Button style={styles.addButton}>
          Add Todo
        </Button>
        <Icon
          name='fontawesome|facebook-square'
          size={70}
          color='#3b5998'
          style={styles.facebook}
        />
      </View>
    );
  }

  _renderTodo(todo) {
    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={{ uri: todo.image }} />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{todo.name}</Text>
          <Text style={styles.date}>{todo.date}</Text>
        </View>
      </View>
    );
  }

  _renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading todos...</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 8,
  },
  date: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  addButton: {
    flex: 1,
    padding: 10,
    backgroundColor: 'red',
    color: 'white',
  },
  facebook: {
    width: 70,
    height: 70,
    margin: 10
  },
});

module.exports = TodosIndexRoute;
