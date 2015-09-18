import React from 'react';
import { IconButton, Button } from '../components';
import styles from './list_item.styl';

export default class TodosListItem extends React.Component {
  render() {
    return (
      <div className={styles.listItem}>
        <div className={styles.content}>
          <h3>{this.props.todo.name}</h3>
        </div>
        <div className={styles.actions}>
          <div className={styles.removeButtonContainer}>
            <IconButton icon='times' onClick={this._removeSelf} />
          </div>
          <Button type='outline'>I completed this!</Button>
        </div>
      </div>
    );
  }

  _removeSelf() {
    alert('here');
  }
}

TodosListItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
};
