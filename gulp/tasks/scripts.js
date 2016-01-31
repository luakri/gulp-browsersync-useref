'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('scripts', function(cb) {

    runSequence(['jshint', 'jscs'], cb);
});
