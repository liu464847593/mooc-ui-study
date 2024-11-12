const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass')); // gulp-sass 在最近的版本中已经不再包含默认的 Sass 编译器，因此你需要手动设置一个 Sass 编译器
const minifyCss = require('gulp-minify-css');

gulp.task('sass',async function(){
  return gulp.src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
})
