module.exports = {
  context: __dirname,
  entry: './entry.js',

  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/build/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?optional[]=runtime',
      },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
    ],
  },
};
