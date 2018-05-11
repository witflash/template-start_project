gulp.task('img', () =>
  gulp
    .src(`${config.src.img}/**/*`)
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()],
    }))
    .pipe(gulp.dest(config.dest.img)));
