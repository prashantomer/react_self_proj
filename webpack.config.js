var webpack = require('webpack')

var config = {
  context: __dirname + '/app',
  entry: './js/main.js',

  output: {
    path:'./',
    filename: 'app.js',
  },

  devServer: {
    inline: true,
    port: (process.env.PORT || 3000),
    historyApiFallback: true
  },

  module: {
    loaders: [
       {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
    
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]
}

module.exports = config;