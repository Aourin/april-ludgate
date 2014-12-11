var gulp   = require('gulp'),
    common = require('gulp-common');

module.exports = function assetsTask (config, plugins, exports) {

  gulp.task('assets', ['sass', 'img', 'fonts'], function () {
    // done...
  });

  gulp.task('assets:watch', ['sass:watch'], function () {

  });

  gulp.task('sass', function () {
    compileSass(gulp.src(config.sass.src));
  });

  // gulp-watch changed its argument structure... do we
  // really need to include the gulp.src()?
  gulp.task('sass:watch', ['sass'], function () {
    gulp.src(config.sass.src)
      .pipe(plugins.watch(config.sass.src, compileSass));
  });

  function compileSass (stream) {
    stream
      .pipe(plugins.plumber())
      .pipe(plugins.sass())
      .pipe(plugins.autoprefixer.apply(config.sass.prefix))
      .pipe(plugins.minifyCss(config.sass.cssMinify))
      .pipe(gulp.dest(config.sass.dest));
  }

  // copy font files to dist
  gulp.task('fonts', function() {
    // common.plumb(common.src('/fonts/**/*'))
    //   .pipe(common.toDest('/fonts'));
  });

  // copy images to dist
  // TODO: compression
  gulp.task('img', function() {
    // common.plumb(common.src('/images/**/*'))
    //   .pipe(common.toDest('/images'));
  });
};