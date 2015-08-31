var MOCKED_TODO_DATA = [
  {
    name: 'Watch Wimbledon Final',
    date: 'Jul 12 2015',
    image: 'http://www.hdicon.com/wp-content/uploads/2010/06/Wimbledon.png',
  },
  {
    name: 'Finish React Native Tutorial',
    date: 'Aug 12 2015',
    image: 'http://facebook.github.io/react/img/logo_og.png',
  },
];

module.exports.getAll = () => {
  return MOCKED_TODO_DATA;
};
