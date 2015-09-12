import React from 'react';
import TodosStore from '../../shared/todos/store';
import Grid from '../components/grid';
import styles from './index_route_handler.styl';

export default class TodosIndexRouteHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: TodosStore.getAll() };
  }

  render() {
    return (
      <Grid className={styles.todosList}>
        {this.state.todos.map(this._renderTodo)}
      </Grid>
    );
  }

  _renderTodo(todo, index) {
    return <div key={index}>{todo.name}</div>;
  }
}
