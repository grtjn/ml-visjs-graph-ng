/*jshint node: true */

'use strict';
/*global module*/
// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  // var gulpConfig = require('./gulp.config')();
  var wiredep = require('wiredep');
  var bowerFiles = wiredep({
    devDependencies: true,
    bowerJson: require('./bower.json'),
    directory: './bower_components/',
    ignorePath: '..',
    exclude: [ 'requirejs', 'angularjs', 'font-awesome.css' ]
  }).js;

  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // some available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: bowerFiles.concat([
      'src/**/*.js',
      'test/**/*.js',
      './.tmp/templates.js'
    ]),

    // list of files to exclude
    // exclude: gulpConfig.karma.exclude,

    proxies: {
      '/': 'http://localhost:8888/'
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: gulpConfig.karma.preprocessors,

    // test results reporter to use
    // possible values: 'dots', 'progress', 'coverage'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress', 'coverage', 'notify'],

    // coverageReporter: {
      // dir: gulpConfig.karma.coverage.dir,
      // reporters: gulpConfig.karma.coverage.reporters
    // },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //    browsers: ['Chrome', 'ChromeCanary', 'FirefoxAurora', 'Safari', 'PhantomJS'],
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
