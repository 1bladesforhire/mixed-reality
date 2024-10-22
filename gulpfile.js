var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', function() {
    gulp.watch('styles/*.less', ['less']);
});

gulp.task('less', function() {
    gulp.src('styles/main.less')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('styles/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('styles'))
        // gulp.src('styles/optionb.less')
        //     .pipe(plumber())
        //     .pipe(less())
        //     .pipe(autoprefixer({
        //         browsers: ['last 2 versions'],
        //         cascade: false
        //     }))
        //     .pipe(gulp.dest('styles/'))
        //     .pipe(cssmin())
        //     .pipe(rename({
        //         suffix: '.min'
        //     }))
        //     .pipe(gulp.dest('styles'))
});

gulp.task('default', ['less', 'watch']);