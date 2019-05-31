'use strict';

module.exports = {
  server: {
      baseDir: './dist',
      middleware: {
          1: require('connect-history-api-fallback')({ index: '/angular7-sass-webpack4/index.html', verbose: true })
      }
  }
};