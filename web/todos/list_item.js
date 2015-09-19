import React from 'react';
import { IconButton, Button } from '../components';
import styles from './list_item.styl';
import { update, remove } from '../../shared/todos/store';

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);
    this._removeSelf = this._removeSelf.bind(this);
    this._markComplete = this._markComplete.bind(this);
    this._renderCompleteButton = this._renderCompleteButton.bind(this);
    this._renderStatus = this._renderStatus.bind(this);
  }

  render() {
    return (
      <div className={styles.listItem}>
        <div className={styles.content}>
          <h3>{this.props.todo.name}</h3>
          <p>
            <strong>Due Date: </strong>
            {this.props.todo.date}
          </p>
          <p>
            <strong>Status: </strong>
            {this._renderStatus()}
          </p>
        </div>
        <div className={styles.actions}>
          <div className={styles.removeButtonContainer}>
            <IconButton icon='times' onClick={this._removeSelf} />
          </div>
          {this._renderCompleteButton()}
        </div>
      </div>
    );
  }

  _renderStatus() {
    if (this.props.todo.completed) {
      return <span className={styles.completeStatus}>Completed!</span>;
    }

    return <span className={styles.incompleteStatus}>Incomplete</span>;
  }

  _renderCompleteButton() {
    if (this.props.todo.completed) { return null; }
    return (
      <Button icon='check' type='outline' onClick={this._markComplete}>
        I completed this!
      </Button>
    );
  }

  _removeSelf() {
    remove(this.props.todo.slug);
  }

  _markComplete() {
    update(this.props.todo.slug, { completed: true });
  }
}

TodosListItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
};
