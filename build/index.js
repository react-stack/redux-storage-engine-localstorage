'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _idbKeyval = require('idb-keyval');

var _idbKeyval2 = _interopRequireDefault(_idbKeyval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (store) {
    return {
        load: function load() {
            return _idbKeyval2['default'].get(store);
        },
        save: function save(state) {
            return _idbKeyval2['default'].set(store, state);
        }
    };
};