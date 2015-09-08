import React from 'react';
import TodosStore from '../../shared/todos/store';
import styles from './index_route_handler.css';

export default class TodosIndexRouteHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: TodosStore.getAll() };
  }

  render() {
    return (
      <div className={styles.todosList}>
        {this.state.todos.map(this._renderTodo)}
      </div>
    );
  }

  _renderTodo(todo, index) {
    return <div key={index}>{todo.name}</div>;
  }
}
