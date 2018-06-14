'use strict';
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var plumber     = require('gulp-plumber');
var concat      = require('gulp-concat');
var minify      = require('gulp-minify-css');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'compress'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("assets/scss/*.scss", ['sass']);
    gulp.watch("assets/css/*.css", ['compress'])
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("html/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("assets/scss/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('compress', function(){
    return gulp.src('assets/css/*.css')
        .pipe(concat('style.css'))
        .pipe(minify())
        .pipe(gulp.dest('assets/build/css'))
        .pipe(browserSync.stream());
 });

gulp.task('default', ['serve']);