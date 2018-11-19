const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    library: 'dummymod',
    filename: 'dummymod.all.js',
    path: path.resolve(__dirname, 'dist')
  }
}