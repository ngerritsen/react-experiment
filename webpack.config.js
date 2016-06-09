var env = process.env.NODE_ENV

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
        loader: 'babel'
      }
    ]
  }
}

if (env === 'server') {
  config.entry = './src/server.js',
  config.output = {
    path: './server',
    filename: 'bundle.js'
  }
}

module.exports = config
