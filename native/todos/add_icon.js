var React = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
} = React;
var { Icon } = require('react-native-icons');
var { colors } = require('../../shared/styles');
var { add } = require('../../shared/todos/store');

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
    this._addTodo = this._addTodo.bind(this);
  }

  render() {
    return (
      <TouchableHighlight onPress={this._addTodo}>
        <Icon
          name='fontawesome|plus'
          size={30}
          color={colors.purple}
          style={styles.plus}
        />
      </TouchableHighlight>
    );
  }

  _addTodo() {
    add({
      name: 'Build real add functionality',
      date: 'Mar 11 2020',
      image: 'http://3.bp.blogspot.com/-t9e7S8huhaQ/VBMVN6CbNGI/AAAAAAAAA14/' +
        '02am46_jiJM/s1600/Big_smile.png',
      completed: false,
    });
  }
}

TodoAddIcon.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

module.exports = TodoAddIcon;
