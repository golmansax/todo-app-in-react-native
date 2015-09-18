import React from 'react';
import TodosStore from '../../shared/todos/store';
import TodosListItem from './list_item';
import { Grid } from '../components';
import styles from './index_route_handler.styl';

export default class TodosIndexRouteHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: TodosStore.getAll() };
  }

  render() {
    return (
      <div>
        <Grid className={styles.todosList}>
          <h1>My Todo List</h1>
          {this.state.todos.map(this._renderTodo)}
        </Grid>
      </div>
    );
  }

  _renderTodo(todo, index) {
    return <TodosListItem key={index} todo={todo} />;
  }
}
