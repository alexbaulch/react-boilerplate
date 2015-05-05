'use strict';

var path = require('path');
var util = require('gulp-util');

module.exports = {
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'Android 4',
            'IE 8',
            'IE 9',
            'iOS >= 6'
        ]
    },
    browserSync: {
        server: {
            baseDir: './',
            proxy: 'zonebpgulp.dev'
        }
    },
    jshint: {
        'bitwise': true,
        'browser': true,
        'camelcase': true,
        'curly': true,
        'devel': true,
        'eqeqeq': true,
        'esnext': true,
        'globals': {
            'define': true,
            'jQuery': true,
            'Modernizr': true,
            'require': true
        },
        'immed': true,
        'indent': 4,
        'jquery': true,
        'latedef': true,
        'newcap': true,
        'noarg': true,
        'node': true,
        'quotmark': 'single',
        'regexp': true,
        'smarttabs': true,
        'strict': true,
        'trailing': true,
        'undef': true,
        'unused': true
    },
    production: !!util.env.production,
    sass: {
        errLogToConsole: true
    },
    scripts: {
        dist:  path.join('dist', 'scripts'),
        src:   path.join('src', 'scripts')
    },
    styles: {
        dist:  path.join('dist', 'styles'),
        src:   path.join('src', 'styles')
    }
};
