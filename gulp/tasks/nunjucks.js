const gulp = require('gulp');
const config = require('../config');
const nunjucks = require('gulp-nunjucks');
const plumber = require('gulp-plumber');
const replace = require('gulp-replace-task');
const prettify = require('gulp-prettify');
const server = require('./server');

gulp.task('nunjucks', () => {
  gulp
    .src(`${config.src.html}/[^_]*.html`)
    .pipe(plumber())
    .pipe(nunjucks.compile())
    .pipe(prettify({
      indent_size: 2,
      wrap_attributes: 'auto',
      preserve_newlines: false,
      end_with_newline: true,
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.src.root));
});

gulp.task('nunjucks:watch', () => {
  gulp.watch([`${config.src.html}/**/*.html`], ['nunjucks', server.reload]);
});

gulp.task('nunjucks:build', () => {
  gulp
    .src(`${config.src.root}/*.html`)
    .pipe(plumber())
    .pipe(replace({
      patterns: [
        {
          match: /css\/style.css/g,
          replacement: 'css/style.min.css',
        },
        {
          match: /js\/app.js/g,
          replacement: 'js/app.min.js',
        },
      ],
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.dest.root));
});
