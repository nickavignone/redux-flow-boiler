module.exports = {
  plugins: [
    require('autoprefixer')({
      cascade: true,
      remove: true
    })/*,
    require('css-mqpacker')(),
    require('cssnano')({
      discardComments: {
        removeAll: true
      },
      autoprefixer: false,
      zindex: false,
      normalizeUrl: false
    })*/
  ]
};