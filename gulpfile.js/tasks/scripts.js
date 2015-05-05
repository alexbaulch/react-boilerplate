'use strict';

var browserSync     = require('browser-sync');
var config          = require('../config');
var gulp            = require('gulp');
var path            = require('path');
var uglify          = require('gulp-uglify');
var util            = require('gulp-util');
var stripDebug 	    = require('gulp-strip-debug');
var source          = require('vinyl-source-stream');
var browserify      = require('browserify');
var watchify        = require('watchify');
var reactify        = require('reactify');
var errorHandler    = require('../utilities/errorHandler');

gulp.task('scripts', function() {

    var scripts = [path.join(config.scripts.src, '**', '*.js')];

    if (config.production) {
        scripts.push('!' + path.join(config.scripts.src, 'modernizr.js'));
    }

    var bundler = browserify({
        entries: ['./src/scripts/app.js'], // Only need initial file, browserify finds the deps
        transform: ['reactify'], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {},
        packageCache: {},
        fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
        .on('update', function () { // When any files update
            var updateStart = Date.now();
            console.log('Updating!');
            watcher.bundle() // Create new bundle that uses the cache for high performance
            .on('error', errorHandler)
            .pipe(source('app.js'))
            // This is where you add uglifying etc.
            .pipe(config.production ? stripDebug() : util.noop())
            .pipe(config.production ? uglify() : util.noop())
            .pipe(gulp.dest(config.scripts.dist));
            console.log('Updated!', (Date.now() - updateStart) + 'ms');
        })
        .bundle() // Create the initial bundle when starting the task
        .pipe(source('app.js'))
        .pipe(config.production ? stripDebug() : util.noop())
        .pipe(config.production ? uglify() : util.noop())
        .pipe(gulp.dest(config.scripts.dist));
});