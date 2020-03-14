var gulp = require('gulp');
var sass = require('gulp-sass');

var sassFiles = 'scss/*.scss',
  cssDest = 'css/';

gulp.task('styles', function(done) {
  gulp
    .src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
  done();
});

gulp.task('watch', function() {
  gulp.watch(sassFiles, gulp.series('styles'));
});
