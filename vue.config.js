module.exports = {
  configureWebpack:{
    optimization: {
      splitChunks: {
        minSize: 200000,
        maxSize: 250000,
      }
    }
  },
  crossorigin: 'anonymous',
}