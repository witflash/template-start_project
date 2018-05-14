const gulp = require('gulp');
const config = require('../config');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const server = require('./server');

gulp.task('img', () => {
  gulp
    .src(`${config.src.img}/**/*`)
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()],
    }))
    .pipe(gulp.dest(config.dest.img));
});

gulp.task('img:watch', () => {
  gulp.watch(`${config.src.img}/**/*.*`, [server.reload]);
});
