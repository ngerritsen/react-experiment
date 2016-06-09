module.exports = {
  entry: './src/main.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel'
      }
    ]
  }
}
