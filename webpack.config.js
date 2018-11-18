const path = require('path')

module.exports = {
  entry: './lib/_bundle.js',
  output: {
    filename: 'dummymod.all.js',
    path: path.resolve(__dirname, 'dist')
  }
}