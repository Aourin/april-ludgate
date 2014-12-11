var $ = require('jquery'),
    QuoteManager = require('./quotes');

// TODO: actual initialization...
// TODO: preload images
// TODO: make this not suck LOL

$(function () {
  var _actions    = {},
      _$quoteImg  = $('.quote-container .quote-image-container img'),
      _$quoteCopy = $('.quote-container .quote-copy');

  _actions.quote = {
    previous : function (context) {
      showQuote(QuoteManager.previous());
    },

    next : function (context) {
      showQuote(QuoteManager.next());
    },

    random : function (context) {
      showQuote(QuoteManager.random());
    }
  };

  function showQuote (quote) {
    _$quoteCopy.text(quote.copy);
    _$quoteImg.attr('src', '/static/img/april_' + quote.img + '.jpg');
  }
  showQuote(QuoteManager.current());

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