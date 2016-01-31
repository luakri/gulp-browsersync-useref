'use strict';

module.exports = {

    browserPort: 9000,
    UIPort: 9001,

    sourceDir: './app/',
    buildDir: './dist/',

    scripts: {
        src: './app/js/**/*.js',
        dest: 'dist/js'
    },

    lintScripts: {
        src: [
            'app/js/**/*.js',
            '!app/js/external/*.js',
            'gulp/**/*.js',
            'gulpfile.js'
        ]
    },

    views: {
        index: './app/index.html',
        src: './app/*.html',
        dest: './dist/'
    },

    sass: {
        src: './app/sass/**/*.scss',
        dest: './dist/css',

        devOptions: {
            errLogToConsole: true,
            outputStyle: 'expanded'
        },

        prodOptions: {
            errLogToConsole: true,
            outputStyle: 'compressed'
        }
    },

    images: {
        src: 'app/images/**/*.{gif,jpeg,jpg,png,ico}',
        dest: 'dist/images'
    },

    gzip: {
        src: 'dist/**/*.{html,xml,json,css,js,js.map,css.map}',
        dest: 'dist/',
        options: {}
    }
};
