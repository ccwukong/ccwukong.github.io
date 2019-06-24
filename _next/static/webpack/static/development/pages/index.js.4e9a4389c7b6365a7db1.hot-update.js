webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CollectionItem.js":
/*!**************************************!*\
  !*** ./components/CollectionItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_ionicons_lib_IosPlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ionicons/lib/IosPlay */ "./node_modules/react-ionicons/lib/IosPlay.js");
/* harmony import */ var react_ionicons_lib_IosPlay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_IosPlay__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/chencheng/Documents/Projects/Gistion/components/CollectionItem.js";





var CollectionItem = function CollectionItem(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'article' : _ref$type,
      _ref$episodes = _ref.episodes,
      episodes = _ref$episodes === void 0 ? [] : _ref$episodes,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? '' : _ref$content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collection-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collection-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "embed-responsive embed-responsive-16by9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, type === 'article' ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: title,
    className: "embed-responsive-item",
    src: episodes[0].mediaUrl,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collection-item-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
    flush: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, episodes.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroupItem"], {
      key: item.id,
      className: "playlist-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Part ", item.id, ": ", item.title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_ionicons_lib_IosPlay__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onClick: function onClick() {
        return alert('Hi!');
      },
      fontSize: "1.25em",
      color: "#666",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  }))));
};

CollectionItem.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  episodes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CollectionItem);

/***/ })

})
//# sourceMappingURL=index.js.4e9a4389c7b6365a7db1.hot-update.js.map