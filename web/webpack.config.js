module.exports = {
  context: __dirname,
  entry: './entry.js',

  output: {
    path: './build',
    filename: "bundle.js",
    publicPath: '/build/'
  }
};
