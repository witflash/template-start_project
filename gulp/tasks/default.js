gulp.task('default', ['browser-sync', 'nunjucks', 'scss', 'js', 'img'], () => {
  gulp.watch(`${config.src.html}**/*.html`, ['nunjucks', browserSync.reload]);
  gulp.watch(`${config.src.sass}**/*.scss`, ['scss', browserSync.reload]);
  gulp.watch(`${config.src.js}**/*.js`, ['js', browserSync.reload]);
  gulp.watch(`${config.src.img}**/*.*`, ['img', browserSync.reload]);
});
