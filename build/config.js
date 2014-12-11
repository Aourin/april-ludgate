module.exports = exports = {};

// --------------------------
// Common Paths
// --------------------------
exports.base  = '.'; // project root (not relative to this file)
exports.paths = {
  src  : exports.base + '/src',
  dest : exports.base + '/dist',
};

// --------------------------
// Application
// --------------------------
exports.app       = {};
exports.app.entry = 'index.js';
exports.app.dist  = 'app-bundle';
exports.app.map   = exports.app.dist + '.map.json';
exports.app.src   = exports.paths.src  + '/client/app';
exports.app.dest  = exports.paths.dest + '/client/app';

// --------------------------
// Sass
// --------------------------
exports.sass = {
  src       : exports.src + '/client/sass',
  dest      : exports.dest + '/client/css',
  prefix    : ['last 2 versions', '> 2%'],
  cssMinify : {
    keepSpecialComments: 0
  }
};

// --------------------------
// JavaScript
// --------------------------
exports.js = {};
exports.js.globals = {
  'console'     : true,
  'alert'       : false,
  'document'    : false,
  'window'      : false,
  'setInterval' : false,
  'setTimeout'  : false,
  'Image'       : false,
  'require'     : false,
  'exports'     : true,
  'module'      : true
};

exports.lint = {
  'bitwise'   : false,
  'camelcase' : true,
  'curly'     : false,
  'eqeqeq'    : true,
  'forin'     : true,
  'immed'     : true,
  'indent'    : 2,
  'latedef'   : false,
  'noarg'     : true,
  'noempty'   : true,
  'nonew'     : false,
  'plusplus'  : false,
  'quotmark'  : 'single',
  'undef'     : true,
  'unused'    : false,
  'strict'    : false,
  'maxparams' : false,
  'maxdepth'  : false,
  'maxlen'    : 80,
  'forin'     : false,
  'globals'   : exports.js.globals
};

// --------------------------
// Karma Testing
// --------------------------
exports.karma = {
  basePath : process.cwd(),

  port      : 8000,
  colors    : true,
  autoWatch : true,
  logLevel  : 'INFO',

  files: [
    'client/dist/app/' + exports.app.dist + '.js'
  ],
  exclude : [],

  browsers: ['PhantomJS'],
  plugins: [
    'karma-mocha',
    'karma-phantomjs-launcher',
    'karma-chai',
    'karma-sinon-chai',
    'karma-mocha-reporter'
  ],
  frameworks : ['mocha', 'chai', 'sinon-chai'],
  reporters  : ['mocha'],
};