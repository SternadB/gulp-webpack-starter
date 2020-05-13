//Default webpack.config.js
module.exports = {
  mode: 'development',
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
              "@babel/preset-env"
          ],
        },
      },
    ],
  },
};