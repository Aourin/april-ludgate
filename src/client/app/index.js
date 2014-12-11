var $          = require('jquery'),
    QUOTES     = require('./quotes'),
    QUOTES_LEN = QUOTES.length,
    _quotesIdx = 0;

// TODO: actual initialization...
// TODO: preload images
// TODO: quote manager module
// TODO: make this not suck LOL

$(function () {
  var _actions    = {},
      _$quoteImg  = $('.quote-container .quote-image-container img'),
      _$quoteCopy = $('.quote-container .quote-copy');

  _$quoteCopy.text(QUOTES[0]);

  _actions.quote = {
    previous : function (context) {
      _quotesIdx = _quotesIdx === 0
        ? QUOTES_LEN - 1 : _quotesIdx - 1;
      syncQuote();
    },

    next : function (context) {
      _quotesIdx = _quotesIdx === QUOTES_LEN - 1
        ? 0 : _quotesIdx + 1;
      syncQuote();
    },

    random : function (context) {
      _quotesIdx = Math.floor(Math.random() * QUOTES_LEN);
      syncQuote();
    }
  };

  function syncQuote () {
    _$quoteCopy.text(QUOTES[_quotesIdx]);
    selectImage();
  }

  function selectImage () {
    // I'm super lazy!!!
    _$quoteImg.attr('src', '/static/img/april_0' + Math.floor(Math.random() * 4) + '.jpg');
  }
  selectImage();

  function dispatchAction () {
    var $this     = $(this),
        action    = $this.attr('data-action'),
        namespace = $this.attr('data-action-namespace'),
        handler;

    handler = namespace ?
      _actions[namespace][action] : _actions[action];

    if (handler && typeof handler === 'function') {
      handler(this);
    }
  }

  $('body')
    .on('click', '[data-action]', dispatchAction);

});