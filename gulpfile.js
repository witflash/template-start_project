require('require-dir')('./gulp/tasks', { recurse: true });

// import modules

const browserSync = require('browser-sync');
const uglify = require('gulp-uglifyjs');
const concat = require('gulp-concat');

const del = require('del');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
