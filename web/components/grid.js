import React from 'react';
import styles from './grid.styl';

console.log(styles);

export default class Grid extends React.Component {
  render() {
    return (
      <div className={styles.grid}>
        {this.props.children}
      </div>
    );
  }
}
