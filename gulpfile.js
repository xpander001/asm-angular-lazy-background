var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: ['./', 'example'],
      index: 'example/index.html',
    },
  });
});

gulp.task('watch', function () {
  gulp.watch([
    './example/*',
    './src/*',
  ], browserSync.reload);
});

gulp.task('develop', function () {
  gulp.run('browser-sync', 'watch');
});
