var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

    // gulp sass
    gulp.task('sass', function () {
    return gulp.src('./css/sass/site-main.scss')

    .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 8'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest('./css/'));
    });

    // gulp watch
    gulp.task('watch', function () {
        gulp.watch('./css/sass/site-main.scss', ['sass']);
    });