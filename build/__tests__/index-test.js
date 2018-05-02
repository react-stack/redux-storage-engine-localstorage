'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('engine', function () {
    var returnVal = 'SOME_VAL';
    var idbKeyVal = {
        set: sinon.stub().returns(new Promise(function (resolve) {
            resolve(returnVal);
        })),
        get: sinon.stub().returns(new Promise(function (resolve) {
            resolve(returnVal);
        }))
    };
    describe('check proxies', function () {
        it('should call the idbKeyVal set method and return the response as it is', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return idbKeyVal.set('key', 'val');

                        case 2:
                            result = _context.sent;

                            idbKeyVal.set.should.have.been.calledWith('key', 'val');
                            result.should.equal(returnVal);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        })));

        it('should call the idbKeyVal get method and return the response as it is', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            var result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return idbKeyVal.get('key');

                        case 2:
                            result = _context2.sent;

                            idbKeyVal.get.should.have.been.calledWith('key');
                            result.should.equal(returnVal);

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        })));
    });
});