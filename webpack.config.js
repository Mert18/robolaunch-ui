const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  // Other rules...
  plugins: [new NodePolyfillPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
