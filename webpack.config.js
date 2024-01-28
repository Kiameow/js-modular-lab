const path = require("path");

module.exports = {
  entry: "./index.js",
  target: ['web', 'es5'],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
	  loader: 'babel-loader'
	}
      }
    ]
  },
};
