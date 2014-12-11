var QUOTES     = require('./quotes'),
    QUOTES_LEN = QUOTES.length,
    MAX_IDX    = QUOTES_LEN - 1,
    IMG_COUNT  = 4;

var RESOLVED_QUOTES = shuffle(QUOTES.map(function (copy) {
  return {
    copy : copy,
    img  : ['0', Math.floor(Math.random() * IMG_COUNT)].join('')
  };
}));

var _cache   = {},
    _current = 0;

module.exports = exports = {};

exports.current = function current () {
  return moveTo(_current);
};

exports.next = function next () {
  return moveTo(
    _current === MAX_IDX ? MAX_IDX : _current + 1
  );
};

exports.previous = function previous () {
  return moveTo(
    _current === 0 ? 0 : _current - 1
  );
};

exports.random = function random () {
  return moveTo(Math.floor(Math.random() * QUOTES_LEN));
};

function moveTo (idx) {
  console.log('moving to: ' + idx);
  return RESOLVED_QUOTES[_current = idx];
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle (o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};