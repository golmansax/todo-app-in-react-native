var slugify = require('../utils/slugify');

var MOCKED_TODO_DATA = [
  {
    name: 'Watch Wimbledon Final',
    date: 'Jul 12 2015',
    image: 'http://www.hdicon.com/wp-content/uploads/2010/06/Wimbledon.png',
    completed: false,
  },
  {
    name: 'Finish React Native Tutorial',
    date: 'Aug 12 2015',
    image: 'http://facebook.github.io/react/img/logo_og.png',
    completed: false,
  },
];
var todos = MOCKED_TODO_DATA;
var listeners = [];

function get(slug) {
  return todos.find((todo) => todo.slug === slug);
}

function emitChange() {
  listeners.forEach((listener) => listener());
}

todos.forEach((todo) => todo.slug = slugify(todo.name));

module.exports.getAll = () => todos;

module.exports.get = get;

module.exports.addChangeListener = (listener) => {
  listeners.push(listener);
};

module.exports.removeChangeListener = (myListener) => {
  listeners = listeners.filter((listener) => myListener !== listener);
};

module.exports.update = (slug, data) => {
  const todo = get(slug);

  Object.keys(data).forEach((key) => todo[key] = data[key]);
  emitChange();
};

module.exports.remove = (slug) => {
  todos = todos.filter((todo) => todo.slug !== slug);
  emitChange();
};
