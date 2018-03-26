var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
// Default task
gulp.task('default', []);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task('dev', ['browserSync'], function() {
  gulp.watch('./css/*.css', browserSync.reload);
  gulp.watch('./*.html', browserSync.reload);
});
