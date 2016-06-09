const config = {
  entry: './src/client.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel',
        ignore: /node_modules/
      }
    ]
  }
}

module.exports = config
