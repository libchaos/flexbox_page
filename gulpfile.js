const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  gulp.src('src/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/'));
});


gulp.task('copy-assets', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'copy-assets']);
