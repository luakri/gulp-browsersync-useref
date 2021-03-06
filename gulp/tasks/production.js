/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function(cb) {

    global.isProd = true;

    runSequence(['scripts', 'htmlbuild', 'sass', 'copyimages'], 'gzip', cb);
});
