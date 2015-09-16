import React from 'react';
import styles from './button.styl';

export default class Button extends React.Component {
  render() {
    return (
      <div className={styles[this.props.type]}>
        {this.props.children}
      </div>
    );
  }
}

Button.defaultProps = { type: 'main' };
Button.propTypes = {
  type: React.PropTypes.oneOf('main', 'outline'),
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),
};
