import React from 'react';
import {
  getAll,
  addChangeListener,
  removeChangeListener,
} from '../../shared/todos/store';
import TodosListItem from './list_item';
import { Button, Grid } from '../components';
import styles from './index_route_handler.styl';
import { add } from '../../shared/todos/store';

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
          <div className={styles.topbarContainer}>
            <h1 className={styles.topbarHeading}>My Todo List</h1>
            <div className={styles.topbarButtonContainer}>
              <Button type='main' icon='plus' onClick={this._addTodo}>
                Add a todo
              </Button>
            </div>
          </div>
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

  _addTodo() {
    add({
      name: 'Build real add functionality',
      date: 'Mar 11 2020',
      image: 'http://3.bp.blogspot.com/-t9e7S8huhaQ/VBMVN6CbNGI/AAAAAAAAA14/' +
        '02am46_jiJM/s1600/Big_smile.png',
      completed: false,
    });
  }
}
