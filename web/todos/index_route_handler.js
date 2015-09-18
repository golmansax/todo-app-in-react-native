import React from 'react';
import { getAll, addChangeListener } from '../../shared/todos/store';
import TodosListItem from './list_item';
import { Grid } from '../components';
import styles from './index_route_handler.styl';

export default class TodosIndexRouteHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: getAll() };

    this._reloadTodos = this._reloadTodos.bind(this);
  }

  componentDidMount() {
    addChangeListener(this._reloadTodos);
  }

  componentWillUnmount() {
    removeChangeListener(this._reloadTodos);
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

  _reloadTodos() {
    this.setState({ todos: getAll() });
  }
}
