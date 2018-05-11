gulp.task('js', () =>
  gulp
    .src(`${config.src.js}/**/*.js`)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.dest.js)));

gulp.task('uglify', ['js'], () =>
  gulp
    .src(`${config.dest.js}/**/*.js`)
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dest.js)));
