const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
// const cleanCss = require('gulp-clean-css');
// const imagemin = require('gulp-imagemin');
// const pngquant = require('imagemin-pngquant');
// gulp.task('imagemin', () => {
//   return gulp.src('src/images/*')
//     .pipe(imagemin({
//       progressive: true,
//       svgoPlugins: [{
//         removeViewBox: false
//       }],
//       use: [pngquant()]
//     }))
//     .pipe(gulp.dest('dist/images'));
// });
gulp.task('sass', () => {
  gulp.src('styles/main.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('../styles/'));
});


gulp.task('cp', () => {
  gulp.src('*.html')
    .pipe(gulp.dest('..'));
});

gulp.task('watch', () => {
  gulp.watch(['*.html'], ['cp']);
  gulp.watch(['styles/*.scss'], ['sass'])
});

gulp.task('default', ['sass', 'cp', 'watch']);
