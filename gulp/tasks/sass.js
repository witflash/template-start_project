const gulp = require('gulp');
const config = require('../config');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const server = require('./server');

gulp.task('sass', () => {
  gulp
    .src(`${config.src.sass}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 2 versions'], { cascade: true }))
    .pipe(gulp.dest(config.src.css));
});

gulp.task('sass:watch', () => {
  gulp.watch(`${config.src.sass}/**/*.+(scss|sass)`, ['sass', server.reload]);
});

gulp.task('sass:build', () => {
  gulp
    .src(`${config.src.css}/*.css`)
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dest.css));

  gulp.src(`${config.src.css}/**/*.min.css`).pipe(gulp.dest(config.dest.css));
});
