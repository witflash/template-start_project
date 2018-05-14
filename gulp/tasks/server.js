const gulp = require('gulp');
const config = require('../config');
const server = require('browser-sync');

gulp.task('server', () => {
  server.init({
    server: {
      baseDir: config.src.root,
    },
    notify: true,
  });
});

module.exports = server;
