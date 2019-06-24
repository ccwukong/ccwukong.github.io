webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CollectionItem.js":
/*!**************************************!*\
  !*** ./components/CollectionItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_ionicons_lib_IosPlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ionicons/lib/IosPlay */ "./node_modules/react-ionicons/lib/IosPlay.js");
/* harmony import */ var react_ionicons_lib_IosPlay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_IosPlay__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_ionicons_lib_IosPause__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ionicons/lib/IosPause */ "./node_modules/react-ionicons/lib/IosPause.js");
/* harmony import */ var react_ionicons_lib_IosPause__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_IosPause__WEBPACK_IMPORTED_MODULE_5__);

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      playing = _useState2[0],
      setPlaying = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "collection-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "collection-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "embed-responsive embed-responsive-16by9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, type === 'article' ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    title: title,
    className: "embed-responsive-item",
    src: episodes[0].mediaUrl,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "collection-item-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroup"], {
    flush: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, episodes.map(function (item) {
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
      key: item.id,
      className: "playlist-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "( playing === item.id ?: Part ", item.id, ": ", item.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_ionicons_lib_IosPlay__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onClick: function onClick() {
        return setPlaying(item.id);
      },
      fontSize: "1.25em",
      color: "#666",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), ")");
  }))));
};

CollectionItem.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  episodes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CollectionItem);

/***/ })

})
//# sourceMappingURL=index.js.c9dcc08d905c4b4a128f.hot-update.js.map