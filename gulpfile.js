const config = {
  src: {
    root: 'src',
    sass: 'src/sass',
    html: 'src/templates',
    js: 'src/js',
    img: 'src/img',
  },
  dest: {
    root: 'dist/',
    css: 'dist/css/',
    js: 'dist/js/',
    img: 'dist/img/',
  },
};

// import modules
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglifyjs');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const del = require('del');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const autoprefixer = require('gulp-autoprefixer');
const nunjucks = require('gulp-nunjucks');


gulp.task('nunjucks', () => gulp.src(`${config.src.html}/**/[^_]*.html`)
  .pipe(nunjucks.compile())
  .pipe(gulp.dest(config.dest.root)));

gulp.task('sass', () => gulp.src(`${config.src.root}/**/*.scss`)
  .pipe(scss().on('error', sass.logError))
  .pipe(autoprefixer(['last 2 versions'], {cascade:true }))
  .pipe(gulp.dest(config.dest.css)));

gulp.task('css-min', ['scss'], () => {
  return gulp.src(config.dest.css + '*.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'})) 
    .pipe(gulp.dest(config.dest.css));
});

gulp.task('img', () => {
  return gulp.src(config.src.img + '**/*')
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.dest.img));
});

gulp.task('js', () => {
  return gulp.src(config.src.js + '**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.dest.js));
});

gulp.task('uglify', ['js'], () => {
  return gulp.src(config.dest.js + '**/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest.js))
});

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: config.dest.root
    },
    notify: true
  });
});

gulp.task('clean', () => {
  return del.sync(config.dest.root);
});

gulp.task('default', ['browser-sync', 'nunjucks', 'scss', 'js', 'img'], () => {
  gulp.watch(config.src.html + '**/*.html', ['nunjucks', browserSync.reload]);
  gulp.watch(config.src.sass + '**/*.scss', ['scss', browserSync.reload]);
  gulp.watch(config.src.js + '**/*.js', ['js', browserSync.reload]);
  gulp.watch(config.src.img + '**/*.*', ['img', browserSync.reload]);
    
});

gulp.task('build', ['clean', 'nunjucks', 'scss', 'img', 'css-min', 'js', 'uglify'], () => {
  return
});
