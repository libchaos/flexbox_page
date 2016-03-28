const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const wrap = require('gulp-wrap');
const browserSync = require('browser-sync');
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
gulp.task('browser-sync', ()=>{
  browserSync({
    server: {
      baseDir: '..'
    }
  });
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('build', ()=>{
  gulp.src("pages/*.html")
    .pipe(wrap({src: "layout/default.html"}))
    .pipe(gulp.dest('..'));
});

gulp.task('sass', () => {
  gulp.src('styles/main.scss')
    .pipe(sass())
    .on('error', handleError)
    .pipe(prefix())
    .pipe(gulp.dest('../styles/'));
});


// gulp.task('cp', () => {
//   gulp.src('*.html')
//     .pipe(gulp.dest('..'));
// });

gulp.task('watch', () => {
  gulp.watch(['**/*.html'], ['build']);
  gulp.watch(['styles/*.scss'], ['sass'])
});

gulp.task('default', ['browser-sync'', 'watch']);
