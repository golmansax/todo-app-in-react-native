'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
} = React;
var NavBar = require('react-native-navbar');
var { Icon } = require('react-native-icons');
var TodoRoutes = require('./routes');

class TodoAddIcon extends React.Component {
  constructor(props) {
    super(props);
    this._navigateToAdd = this._navigateToAdd.bind(this);
  }

  render() {
    return (
      <TouchableHighlight onPress={this._navigateToAdd}>
        <Icon
          name='fontawesome|plus'
          size={30}
          color='#3b5998'
          style={styles.plus}
        />
      </TouchableHighlight>
    );
  }

  _navigateToAdd() {
    this.props.navigator.push(TodoRoutes.new);
  }
}

var styles = StyleSheet.create({
  plus: {
    width: 50,
    height: 50,
    top: 5,
  },
});

module.exports = TodoAddIcon
