'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAsync = require('react-async');

var _reactAsync2 = _interopRequireDefault(_reactAsync);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _app = require('../app');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var app = (0, _express2['default'])();

var server = function server(root) {

  // define middlewares
  app.use((0, _morgan2['default'])('dev'));
  app.use(_bodyParser2['default'].json());
  app.use(_bodyParser2['default'].urlencoded({
    extended: false
  }));
  app.use('/static', _express2['default']['static']('build'));

  // define routers
  app.use(function (req, res, next) {
    try {
      _reactAsync2['default'].renderToStringAsync(_react2['default'].createElement(_app.AppRoutes, { path: req.path }), function (err, markup) {
        if (err) {
          console.log(err);
          return next();
        }
        return res.send('<!DOCTYPE html>' + markup.replace(/__title-holder__/g, _app.DocumentTitle.rewind()));
      });
    } catch (e) {
      console.log(e);
      return next();
    }
  });

  // listen
  app.listen(_config2['default'].port, function () {
    console.log('Site is running at http://localhost:' + _config2['default'].port);
  });
};

exports['default'] = server;
module.exports = exports['default'];