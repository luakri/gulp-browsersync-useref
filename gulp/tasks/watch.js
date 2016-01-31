'use strict';

var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', ['browserSync'], function() {

    gulp.watch(config.scripts.src, ['jshint', 'jscs', 'htmlbuild']);
    gulp.watch(config.views.src, ['htmlbuild']);
    gulp.watch(config.sass.src, ['sass']);
});
