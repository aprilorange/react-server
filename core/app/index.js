'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _reactAsync = require('react-async');

var _reactAsync2 = _interopRequireDefault(_reactAsync);

var _reactRouterComponent = require('react-router-component');

var _reactRouterComponent2 = _interopRequireDefault(_reactRouterComponent);

var _reactRouterComponentLibCaptureClicks = require('react-router-component/lib/CaptureClicks');

var _reactRouterComponentLibCaptureClicks2 = _interopRequireDefault(_reactRouterComponentLibCaptureClicks);

// import views

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _About = require('./About');

var _About2 = _interopRequireDefault(_About);

var App = (function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _reactAddons2['default'].createElement(
        'html',
        null,
        _reactAddons2['default'].createElement(
          'head',
          null,
          _reactAddons2['default'].createElement(
            'title',
            null,
            '__title-holder__'
          ),
          _reactAddons2['default'].createElement('link', { href: '/static/css/main.css', rel: 'stylesheet' })
        ),
        _reactAddons2['default'].createElement(
          'body',
          null,
          _reactAddons2['default'].createElement(
            _reactDocumentTitle2['default'],
            { title: '__title-holder__' },
            _reactAddons2['default'].createElement(
              _reactRouterComponentLibCaptureClicks2['default'],
              null,
              _reactAddons2['default'].createElement(
                _reactRouterComponent.Locations,
                { ref: 'router', path: this.props.path },
                _reactAddons2['default'].createElement(_reactRouterComponent.Location, { path: '/', handler: _Home2['default'] }),
                _reactAddons2['default'].createElement(_reactRouterComponent.Location, { path: '/about', handler: _About2['default'] })
              )
            )
          ),
          _reactAddons2['default'].createElement('script', { src: '/static/js/bundle.js' })
        )
      );
    }
  }]);

  return App;
})(_reactAddons.Component);

exports['default'] = {
  AppRoutes: App,
  DocumentTitle: _reactDocumentTitle2['default']
};

// Bootstrap client in browsers
if (typeof window !== 'undefined') {
  window.onload = function () {
    _reactAddons2['default'].render(_reactAddons2['default'].createElement(App, null), document);
  };
}
module.exports = exports['default'];