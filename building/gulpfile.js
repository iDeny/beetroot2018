let gulp = require('gulp');
let less = require('gulp-less');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
var pug = require('gulp-pug');
var tinypng = require('gulp-tinypng');

// defective version
gulp.task('styles', function () {
  return gulp.src([
      './bem/*/*.less',
      './bem/*.less',
      './style/less-abstract/__normalize.less',
      './style/css/normalize.css'
    ])
    .pipe(less())
    .pipe(gulp.dest('./style/css'));
});

gulp.task('tinypng', function () {
    gulp.src('img/*')
        .pipe(tinypng('k8lBySQTWJqkX2t29DV0tNY0Nyr9XMt7'))
        .pipe(gulp.dest('dist'));
});


// concat version
// gulp.task('styles', function () {
//   return gulp.src([
//       './bem/**/*.less',
//       './style/less-abstract/*.less',
//       './style/css/normalize.css'
//     ])
//     .pipe(concat('style.less'))
//     .pipe(less())
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('./style/css'));
// });

gulp.task('html', function () {
  return gulp.src('*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('**/*.less', gulp.series(['styles', 'html']));
});

gulp.task('default', gulp.series(['styles', 'html', 'watch']));