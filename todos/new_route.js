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

class TodosNewRoute extends React.Component {
  render() {
    return (
      <Text>
        Add!
      </Text>
    );
  }
}

module.exports = TodosNewRoute;
