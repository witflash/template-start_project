gulp.task('browser-sync', () =>
  browserSync({
    server: {
      baseDir: config.dest.root,
    },
    notify: true,
  }));
