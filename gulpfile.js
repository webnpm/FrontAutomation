var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var includer = require('gulp-htmlincluder');
var reload = browserSync.reload;
var less = require('gulp-less');
var path = require('path');

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // gulp.watch(['*.html','js/**/*.js','css/**/*.css']).on("change", function() {
    //     reload();
    // })
});
gulp.task('less', function () {
  gulp.src('css/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});
gulp.task('htmlIncluder', function() {
    gulp.src('tpl/*.html')
        .pipe(includer())
        .pipe(gulp.dest(''));
});
 
gulp.task('watch', function() {
    gulp.watch(['tpl/*.html','css/**/*.less'], function(event) {
       gulp.src('css/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
      gulp.src('tpl/*.html')
        .pipe(includer())
        .pipe(gulp.dest(''));
       
    });
    gulp.watch(['*.html','css/**/*.css'], function(event) {
        reload();
    });
});

gulp.task('default',['browser-sync','watch']);

