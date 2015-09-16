import React from 'react';
import Button from '../components/button';
import styles from './list_item.styl';

export default class TodosListItem extends React.Component {
  render() {
    return (
      <div className={styles.listItem}>
        <div className={styles.content}>
          <h3>{this.props.todo.name}</h3>
        </div>
        <div className={styles.actions}>
          <Button type='outline'>I completed this!</Button>
          <Button type='outline'>Remove</Button>
        </div>
      </div>
    );
  }
}
