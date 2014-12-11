var gulp   = require('gulp'),
    common = require('gulp-common');

module.exports = function serverTask (config, plugins, exports) {
  var app = require('../../src/server'),
      server;

  gulp.task('server', function() {
    server = app.start();
  });
};