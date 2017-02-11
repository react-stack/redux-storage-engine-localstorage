'use strict';

var _idbKeyval = require('idb-keyval');

var _idbKeyval2 = _interopRequireDefault(_idbKeyval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('engine', function () {
    describe('load', function () {
        it('should reject if json cannot be loaded', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _idbKeyval2['default'].set('key', 'val');

                        case 2:
                            _context.next = 4;
                            return _idbKeyval2['default'].set('key1');

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        })));

        it('should resolve with data', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            var result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _idbKeyval2['default'].set('key', 'val');

                        case 2:
                            _context2.next = 4;
                            return _idbKeyval2['default'].set('key');

                        case 4:
                            result = _context2.sent;

                            result.should.equal('val');

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        })));
    });

    describe('save', function () {
        it('should asve via setItem', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        })));

        it('should load with the given key', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        })));
    });
});