var config = {
  context: __dirname + '/app',
  entry: './js/main.js',

  output: {
    path:'./',
    filename: 'app.js',
  },

  devServer: {
    inline: true,
    port: 3000,
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
  }
}

module.exports = config;