const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create(); /*позволяет автоматически обновлять информацию в браузере*/

function style () {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream()); /*изменение стилей пушатся и отправляются в брпаузер */
}

function watch () {
  browserSync.init({
    server: {
      baseDir: './' /* корневая директория */
    }
  })
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;