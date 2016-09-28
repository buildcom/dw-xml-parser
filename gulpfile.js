var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require("gulp-rename");;

gulp.task('sass', function() {
  return gulp.src('styles/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('styles/css'));
});

gulp.task('watch', function(){
  gulp.watch('styles/sass/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'watch']);