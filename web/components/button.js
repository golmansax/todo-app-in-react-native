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
