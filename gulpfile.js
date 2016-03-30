var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var includer = require('gulp-htmlincluder');
var reload = browserSync.reload;

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(['*.html','js/**/*.js']).on("change", function() {
        reload();
    })
});
gulp.task('htmlIncluder', function() {
    gulp.src('tpl/*.html')
        .pipe(includer())
        .pipe(gulp.dest(''));
});
 
gulp.task('watch', function() {
    gulp.watch(['tpl/*.html'], function(event) {
      gulp.start('default');
    });
});

gulp.task('default',['htmlIncluder','watch','browser-sync']);

