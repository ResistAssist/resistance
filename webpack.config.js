const path = require("path");

// Build directory is where the bundle file will be placed
var BUILD_DIR = path.resolve(__dirname, 'client/dist');
// App directory is where all of your raw JSX files will be placed
var APP_DIR = path.resolve(__dirname, 'client/src');

module.exports = {
  entry: APP_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  mode:'development',
  devServer: {
  contentBase: BUILD_DIR
    },   
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};