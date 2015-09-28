var React = require('react-native');
var {
  StyleSheet,
  Text,
  Image,
  ListView,
  View,
} = React;
var Button = require('react-native-button');
var { colors } = require('../../../shared/styles');
var { getAll, addChangeListener } = require('../../../shared/todos/store');

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
    backgroundColor: colors.purple,
    color: 'white',
  },
  completeButton: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.purple,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

class TodosIndexView extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    this._reloadTodos();
    addChangeListener(this._reloadTodos.bind(this));
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderTodo}
          style={styles.listView}
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
          <View style={styles.buttonContainer}>
            <Button style={styles.completeButton}>
              I completed this!
            </Button>
            <Button style={styles.completeButton}>
              Remove
            </Button>
          </View>
        </View>
      </View>
    );
  }

  _reloadTodos() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(getAll()),
    });
  }
}

module.exports = TodosIndexView;
