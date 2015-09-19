var React = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
} = React;
var { Icon } = require('react-native-icons');
var { colors } = require('../../shared/styles');
var TodoRoutes = require('./routes');

var styles = StyleSheet.create({
  plus: {
    width: 50,
    height: 50,
    top: 5,
  },
});

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
          color={colors.purple}
          style={styles.plus}
        />
      </TouchableHighlight>
    );
  }

  _navigateToAdd() {
    this.props.navigator.push(TodoRoutes.new);
  }
}

TodoAddIcon.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

module.exports = TodoAddIcon;
