var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task('browser-sync', function(){
    browserSync(
        {
            server:{
                baseDir: './src'
            }
        }
    );
});

gulp.task('watch',['browser-sync'],function(){
    gulp.watch('./src/*.html', browserSync.reload);
    gulp.watch('./src/**/*.css',browserSync.reload);
    gulp.watch('./src/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);