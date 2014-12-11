var gulp       = require('gulp'),
    common     = require('gulp-common'),
    source     = require('vinyl-source-stream'),
    browserify = require('browserify');

module.exports = function appTask (config, plugins) {
  gulp.task('app', ['bundle'], function () {

  });

  gulp.task('bundle', function (cb) {
    var bundler = browserify({
      cache        : {},
      packageCache : {},
      fullPaths    : true,
      debug        : true
    })
    .add([config.app.src, config.app.entry].join('/'));

    if (common.isProd()) {
      bundler.plugin('minifyify', {
        map    : config.app.map,
        output : common.path(config.app.dest, config.app.map)
      });
    }

    bundler
      .bundle(cb)
      .pipe(source(config.app.dist + '.js'))
      .pipe(gulp.dest(config.app.dest));
  });

};