module.exports = {
  entry: ['./src/app/index.js'],
  output: {
    path: __dirname + '/build/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['jsx', 'babel?stage=0'] }
    ]
  },
  plugins: []
}