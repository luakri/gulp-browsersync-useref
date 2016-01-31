'use strict';

var config = require('../config');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var useref = require('gulp-useref');
var lazypipe = require('lazypipe');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');

gulp.task('htmlbuild', function() {

    return gulp.src(config.views.index)
        .pipe(gulpif(!global.isProd, useref({}, lazypipe().pipe(sourcemaps.init, {loadMaps: true}))))

        // Uglify.
        .pipe(useref())
        .pipe(gulpif('*.js', gulpif(global.isProd, uglify({
            mangle: false,
            compress: {
                'drop_console': true
            }
        }))))

        .pipe(gulpif(!global.isProd, sourcemaps.write()))
        .pipe(gulp.dest(config.views.dest))
        .pipe(browserSync.stream({once: true}));
});
