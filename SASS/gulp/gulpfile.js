const gulp = require ('gulp');
const sass = require ('gulp-sass');
const sourcemaps = require ('gulp-sourcemaps');
const cssbeautify = require ('gulp-cssbeautify');
const watch = require ('gulp-watch');
/*Плагины JS */
var concat = require('gulp-concat');
var uglyfly = require('gulp-uglyfly');/*Минификация файлов JS*/
/*Плагин для работы с изображениями*/
const imagemin = require('gulp-imagemin');
/*Плагин для авто подстановки префиксов webkit, ms, moz*/
const autoprefixer = require('gulp-autoprefixer');
/*Плагин отслеживает изменения онлайн в браузере*/
var server = require('gulp-server-livereload');

/*gulp задача в ручном режиме*/
gulp.task('sass-compile', function(){
  return gulp.src('./scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error',sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(cssbeautify())
  .pipe(gulp.dest('./css/'))
})

/*gulp задача в автоматическом режиме*/
gulp.task('watch', function(){
  gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
})
/*Плагины JS */
gulp.task('default', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglyfly())
    .pipe(gulp.dest('./dist/'));
});

exports.default = () => (
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
/*Плагин для авто подстановки префиксов webkit, ms, moz*/
exports.default = () => (
    gulp.src('css/styleautopr.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);
/*Плагин отслеживает изменения онлайн в браузере*/
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      defaultFile:	'index.html',
      directoryListing: true,
      open: true
    }));
});
//
// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }
//
// exports.default = defaultTask
