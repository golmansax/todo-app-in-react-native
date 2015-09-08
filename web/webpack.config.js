module.exports = {
  context: __dirname,
  entry: './entry.jsx',

  output: {
    path: './build',
    filename: "bundle.js",
    publicPath: '/build/',
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel?optional[]=runtime',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?optional[]=runtime',
      },
    ],
  },
};
