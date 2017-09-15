"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = function () {
  function Storage() {
    _classCallCheck(this, Storage);

    this.items = {};
  }

  _createClass(Storage, [{
    key: "setItem",
    value: function setItem(key, value) {
      this.items[key] = value;
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return this.items[key];
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      if (Object.keys(this.items).includes(key)) {
        var value = this.items[key];
        delete this.items[key];
        return value;
      }

      return null;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items = {};
      return true;
    }
  }, {
    key: "key",
    value: function key(n) {
      return Object.keys(this.items)[n];
    }
  }]);

  return Storage;
}();

exports.default = Storage;