const gulp = require('gulp');

gulp.task('watch', ['nunjucks:watch', 'sass:watch', 'js:watch', 'img:watch']);
