const gulp = require('gulp');
const config = require('../config');
const del = require('del');

gulp.task('clean', () => del.sync(config.dest.root));
