/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony export appendChild */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/** @jsx createElement */

var createElement = function createElement(tag, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  if (typeof tag === "function") return tag.apply(void 0, [props].concat(children));
  var element = document.createElement(tag);
  Object.entries(props || {}).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      value = _ref2[1];
    if (name.startsWith("on") && name.toLowerCase() in window) {
      element.addEventListener(name.toLowerCase().substring(2), value);
      return;
    }
    if (name === "className") {
      element.setAttribute("class", value);
      return;
    }
    if (name === "style" && _typeof(value) === "object") {
      Object.keys(value).forEach(function (propName) {
        var propValue = value[propName];
        element.style[propName] = propValue;
      });
      return;
    }
    if (name === "disabled") {
      element.disabled = Boolean(value);
      return;
    }
    if (!value) return;
    element.setAttribute(name, value.toString());
  });
  children.forEach(function (child) {
    appendChild(element, child);
  });
  return element;
};
var appendChild = function appendChild(parent, child) {
  if (Array.isArray(child)) return child.forEach(function (nestedChild) {
    return appendChild(parent, nestedChild);
  });
  if (!child) return;
  parent.appendChild(child !== null && child !== void 0 && child.nodeType ? child : document.createTextNode(child));
};


/***/ }),

/***/ 363:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.AppOverview__SeeAlso {
    margin: 14px;
    gap: 8px;
}

.AppOverview__SeeAlsoList {
    list-style-type: none;
}

.AppOverview__SeeAlsoListItem {
    margin-top: 4px;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/AppOverview/index.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB","sourcesContent":[".AppOverview__SeeAlso {\r\n    margin: 14px;\r\n    gap: 8px;\r\n}\r\n\r\n.AppOverview__SeeAlsoList {\r\n    list-style-type: none;\r\n}\r\n\r\n.AppOverview__SeeAlsoListItem {\r\n    margin-top: 4px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 965:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ButtonBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: calc(100vw - 4px);
    border: 0;
    box-shadow: var(--border-radius) var(--border-radius) 0px var(--shadow-100) inset,
        var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-200) inset,
        var(--border-radius) var(--border-radius) 0px var(--shadow-300),
        var(--border-radius) 0px 0px var(--shadow-300), 0px var(--border-radius) 0px var(--shadow-300);
}
`, "",{"version":3,"sources":["webpack://./webindows/components/ButtonBarContainer/index.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;IACxB,SAAS;IACT;;;sGAGkG;AACtG","sourcesContent":[".ButtonBar {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    width: calc(100vw - 4px);\r\n    border: 0;\r\n    box-shadow: var(--border-radius) var(--border-radius) 0px var(--shadow-100) inset,\r\n        var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-200) inset,\r\n        var(--border-radius) var(--border-radius) 0px var(--shadow-300),\r\n        var(--border-radius) 0px 0px var(--shadow-300), 0px var(--border-radius) 0px var(--shadow-300);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 523:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ViewContainer {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    height: calc(100% - 85px);
    padding-top: 4px;
}

.View {
    background-color: var(--white);
    overflow-y: auto;
    overflow-x: auto;
}

.ViewResizeHandleLeft {
    cursor: ew-resize;
    padding-inline: 4px;
    height: 100%;
    z-index: 2;
}

.CloseBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1px;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/ViewContainer/index.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,QAAQ;AACZ","sourcesContent":[".ViewContainer {\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: calc(100% - 85px);\r\n    padding-top: 4px;\r\n}\r\n\r\n.View {\r\n    background-color: var(--white);\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n}\r\n\r\n.ViewResizeHandleLeft {\r\n    cursor: ew-resize;\r\n    padding-inline: 4px;\r\n    height: 100%;\r\n    z-index: 2;\r\n}\r\n\r\n.CloseBar {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    gap: 1px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 32:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.WindowContent {
    display: flex;
    flex-flow: column;
    height: 100%;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/WindowContent/index.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;AAChB","sourcesContent":[".WindowContent {\r\n    display: flex;\r\n    flex-flow: column;\r\n    height: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--black);
    font-family: var(--font-reg);
    font-size: small;
    background-color: transparent;
    border: 0;
    padding-block: 2px;
    margin: 0;
    cursor: pointer;
    padding-inline: 8px;
}
.Button:active {
    box-shadow: var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-100) inset,
        var(--border-radius) var(--border-radius) 0px var(--shadow-200) inset;
}
.Button:disabled {
    cursor: default;
    color: var(--grey-300);
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/Button/index.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,gBAAgB;IAChB,6BAA6B;IAC7B,SAAS;IACT,kBAAkB;IAClB,SAAS;IACT,eAAe;IACf,mBAAmB;AACvB;AACA;IACI;6EACyE;AAC7E;AACA;IACI,eAAe;IACf,sBAAsB;AAC1B","sourcesContent":[".Button {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: var(--black);\r\n    font-family: var(--font-reg);\r\n    font-size: small;\r\n    background-color: transparent;\r\n    border: 0;\r\n    padding-block: 2px;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    padding-inline: 8px;\r\n}\r\n.Button:active {\r\n    box-shadow: var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-100) inset,\r\n        var(--border-radius) var(--border-radius) 0px var(--shadow-200) inset;\r\n}\r\n.Button:disabled {\r\n    cursor: default;\r\n    color: var(--grey-300);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Icon {
    width: 16px;
    height: 16px;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/Icon/index.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":[".Icon {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.InfoBox {
    margin: 8px;
    padding: 4px;
    background-color: var(--yellow-100);
    border: var(--yellow-200) 1px solid;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/InfoBox/index.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,mCAAmC;AACvC","sourcesContent":[".InfoBox {\r\n    margin: 8px;\r\n    padding: 4px;\r\n    background-color: var(--yellow-100);\r\n    border: var(--yellow-200) 1px solid;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 53:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Link {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
}

.Link:active {
    color: purple;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/Link/index.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,WAAW;IACX,0BAA0B;AAC9B;;AAEA;IACI,aAAa;AACjB","sourcesContent":[".Link {\r\n    cursor: pointer;\r\n    color: blue;\r\n    text-decoration: underline;\r\n}\r\n\r\n.Link:active {\r\n    color: purple;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/WindowContent/index.css
var WindowContent = __webpack_require__(32);
;// CONCATENATED MODULE: ./webindows/components/WindowContent/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(WindowContent/* default */.A, options);




       /* harmony default export */ const components_WindowContent = (WindowContent/* default */.A && WindowContent/* default */.A.locals ? WindowContent/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/WindowContent/index.js
/* provided dependency */ var createElement = __webpack_require__(153)["n"];

function WindowContent_WindowContent(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return createElement("div", {
    className: "WindowContent"
  }, children);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/ViewContainer/index.css
var ViewContainer = __webpack_require__(523);
;// CONCATENATED MODULE: ./webindows/components/ViewContainer/index.css

      
      
      
      
      
      
      
      
      

var ViewContainer_options = {};

ViewContainer_options.styleTagTransform = (styleTagTransform_default());
ViewContainer_options.setAttributes = (setAttributesWithoutAttributes_default());

      ViewContainer_options.insert = insertBySelector_default().bind(null, "head");
    
ViewContainer_options.domAPI = (styleDomAPI_default());
ViewContainer_options.insertStyleElement = (insertStyleElement_default());

var ViewContainer_update = injectStylesIntoStyleTag_default()(ViewContainer/* default */.A, ViewContainer_options);




       /* harmony default export */ const components_ViewContainer = (ViewContainer/* default */.A && ViewContainer/* default */.A.locals ? ViewContainer/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/Icon/index.css
var Icon = __webpack_require__(414);
;// CONCATENATED MODULE: ./webindows/components/common/Icon/index.css

      
      
      
      
      
      
      
      
      

var Icon_options = {};

Icon_options.styleTagTransform = (styleTagTransform_default());
Icon_options.setAttributes = (setAttributesWithoutAttributes_default());

      Icon_options.insert = insertBySelector_default().bind(null, "head");
    
Icon_options.domAPI = (styleDomAPI_default());
Icon_options.insertStyleElement = (insertStyleElement_default());

var Icon_update = injectStylesIntoStyleTag_default()(Icon/* default */.A, Icon_options);




       /* harmony default export */ const common_Icon = (Icon/* default */.A && Icon/* default */.A.locals ? Icon/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/Icon/index.js
/* provided dependency */ var Icon_createElement = __webpack_require__(153)["n"];

function Icon_Icon(props) {
  return Icon_createElement("img", {
    id: props.id,
    src: props.src,
    className: "Icon" + (props.className ? " " + props.className : ""),
    style: {
      width: props.width,
      height: props.height,
      filter: props.isGrey ? "grayscale(100%)" : "none"
    },
    onClick: props.onClick
  });
}
;// CONCATENATED MODULE: ./webindows/connect/constants.js
var WBND_REQ = "http://localhost:3000";
var ROOT_PATH = WBND_REQ + "/files/get/folder";
var FILE_PATH = WBND_REQ + "/files/get/file";
var PUBLIC_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/";
var ASSETS_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/Assets/";
var ICONS_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/Assets/Icons/";
var FILES_REQ = WBND_REQ + "/files/get/files/";

;// CONCATENATED MODULE: ./webindows/components/ViewContainer/CloseBar/index.js
/* provided dependency */ var CloseBar_createElement = __webpack_require__(153)["n"];


function CloseBar(props) {
  return CloseBar_createElement("div", {
    className: "CloseBar"
  }, CloseBar_createElement("div", {
    className: "winCl-HardOutsetShadow winCl-BGColor",
    style: {
      width: "100%",
      height: "16px"
    }
  }), CloseBar_createElement(Icon_Icon, {
    className: "winCl-HardOutsetShadow winCl-BGColor",
    src: ASSETS_PATH + "/Img_Button_Close.PNG",
    onClick: props.onClick
  }));
}
;// CONCATENATED MODULE: ./webindows/components/ViewContainer/removeView.js
function removeView(id) {
  var view = document.getElementById(id);
  var viewWidth = parseInt(window.getComputedStyle(view).getPropertyValue("width"));
  var subViews = document.getElementsByClassName("View");
  var prevView;
  var resizeView;
  for (var i = 0; i < subViews.length; i++) {
    if (subViews[i].id === id) {
      prevView = subViews[i - 1];
      resizeView = document.getElementsByClassName("ViewResizeHandleLeft")[i - 1];
      break;
    }
  }
  var prevViewWidth = parseInt(window.getComputedStyle(prevView).getPropertyValue("width"));
  prevView.style.width = prevViewWidth + viewWidth + 12 + "px";
  if (resizeView) resizeView.remove();
  if (view) view.remove();
}
;// CONCATENATED MODULE: ./webindows/components/ViewContainer/View/index.js
/* provided dependency */ var View_createElement = __webpack_require__(153)["n"];


function View(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return View_createElement("div", {
    id: props.id,
    className: "winCl-HardInsetShadow View",
    style: {
      width: props.width
    },
    onContextmenu: function onContextmenu(e) {
      return e.preventDefault();
    }
  }, props.isClosable && View_createElement(CloseBar, {
    onClick: function onClick() {
      return removeView(props.id);
    }
  }), children);
}
;// CONCATENATED MODULE: ./webindows/utils/math.js
/**
 * Subtracts a value from another until limit.
 * If limit is met, then subtract from value the rest.
 * Default limit is 150
 * @param {number} value - The value to subtract.
 * @param {number} from - The value to subtract from.
 * @param {number} [limit=150] - The limit to subtract from.
 * @return {Object} An object with properties x and y representing the subtracted values.
 */
function subtractFrom(value, from) {
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 150;
  var remainingFrom = from - value;
  var subtractedValue = value;
  if (remainingFrom < limit) {
    var toSubtract = value - Math.abs(limit - from);
    remainingFrom = limit;
    subtractedValue = value - toSubtract;
  }
  return {
    x: subtractedValue,
    y: remainingFrom
  };
}

/**
 * Clamps a value between an upper and lower bound.
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The lower bound.
 * @param {number} max - The upper bound.
 * @return {number} The clamped value.
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Subtracts an equal share from each element in the array based on the total value.
 *
 * @param {number} value - The total value to split among the elements.
 * @param {Array} array - The array of values to subtract from.
 * @return {Array} The modified array after subtracting the equal share from each element.
 */
function subtractEqualShare(value, array) {
  if (array.length == 0) return array;
  var share = value / array.length;
  for (var i = array.length - 1; i >= 0; i--) {
    var newValue = array[i] - share;
    array[i] = Math.max(newValue, 150);
    value -= array[i] - newValue;
  }
  return array;
}

/**
 * Calculates if two numbers are nearly equal within a specified epsilon value.
 *
 * @param {number} num1 - The first number to compare.
 * @param {number} num2 - The second number to compare.
 * @param {number} [epsilon=1] - The acceptable difference between the numbers.
 * @return {boolean} True if the numbers are nearly equal, false otherwise.
 */
function nearlyEqual(num1, num2) {
  var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.abs(num1 - num2) < epsilon;
}

;// CONCATENATED MODULE: ./webindows/components/ViewContainer/addView.js
/* provided dependency */ var addView_createElement = __webpack_require__(153)["n"];



/**
 * Add a new view to the view container.
 *
 * @param {number} initWidth - The initial width of the new view.
 * @param {HTMLElement} content - The content to be displayed in the new view.
 * @param {boolean} isClosable - Include a button to close the view.
 */
function addView(initWidth, content) {
  var isClosable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var subWindowWrapper = document.getElementsByClassName("ViewContainer")[0];
  var subWindows = document.getElementsByClassName("View");
  var resizeHandleLeft = addView_createElement("div", {
    className: "ViewResizeHandleLeft"
  });
  var windowWidth = document.body.clientWidth;
  var desiredWidth = parseInt(initWidth) * windowWidth / 100;
  if (subWindows.length > 1) {
    var lastWindow = subWindows[subWindows.length - 1];
    var lastWindowWidth = parseInt(window.getComputedStyle(lastWindow).getPropertyValue("width"));
    if (lastWindowWidth < 175) return;
    var _subtractFrom = subtractFrom(desiredWidth, lastWindowWidth),
      x = _subtractFrom.x,
      y = _subtractFrom.y;
    desiredWidth = x;
    lastWindow.style.width = y - 4 + "px";
  }
  var id = "id_View_".concat(subWindows.length + 1);
  var newSubWindow = addView_createElement(View, {
    id: id,
    width: desiredWidth - 8 + "px",
    isClosable: isClosable
  });
  if (subWindows.length > 0) {
    subWindowWrapper.append(resizeHandleLeft);
  }
  newSubWindow.append(content);
  subWindowWrapper.append(newSubWindow);
  resizeHandleLeft.addEventListener("mousedown", function () {
    var subViews = document.getElementsByClassName("View");
    var subWindowCurrent = document.getElementById("id_View_".concat(subWindows.length - 1));
    var subWindowNext = document.getElementById("id_View_".concat(subWindows.length));
    for (var i = 0; i < subViews.length; i++) {
      if (subViews[i].id === id) {
        subWindowCurrent = subViews[i - 1];
        subWindowNext = subViews[i];
        break;
      }
    }
    var savedWidthCurrent = parseInt(window.getComputedStyle(subWindowCurrent).getPropertyValue("width"));
    var savedWidthNext = parseInt(window.getComputedStyle(subWindowNext).getPropertyValue("width"));
    var handle = function handle(e) {
      var widthDiff = e.clientX - (subWindowCurrent.offsetLeft + savedWidthCurrent);
      var newCurrentWidth = clamp(savedWidthCurrent + widthDiff, 50, savedWidthCurrent + savedWidthNext - 50);
      var newNextWidth = clamp(savedWidthNext - widthDiff, 50, savedWidthCurrent + savedWidthNext - 50);
      subWindowCurrent.style.width = newCurrentWidth + "px";
      subWindowNext.style.width = newNextWidth + "px";
    };
    document.addEventListener("mousemove", handle);
    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", handle);
    });
  });
}
;// CONCATENATED MODULE: ./webindows/components/ViewContainer/index.js
/* provided dependency */ var ViewContainer_createElement = __webpack_require__(153)["n"];



function ViewContainer_ViewContainer(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return ViewContainer_createElement("div", {
    className: "ViewContainer"
  }, children);
}

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/AppOverview/index.css
var AppOverview = __webpack_require__(363);
;// CONCATENATED MODULE: ./webindows/components/AppOverview/index.css

      
      
      
      
      
      
      
      
      

var AppOverview_options = {};

AppOverview_options.styleTagTransform = (styleTagTransform_default());
AppOverview_options.setAttributes = (setAttributesWithoutAttributes_default());

      AppOverview_options.insert = insertBySelector_default().bind(null, "head");
    
AppOverview_options.domAPI = (styleDomAPI_default());
AppOverview_options.insertStyleElement = (insertStyleElement_default());

var AppOverview_update = injectStylesIntoStyleTag_default()(AppOverview/* default */.A, AppOverview_options);




       /* harmony default export */ const components_AppOverview = (AppOverview/* default */.A && AppOverview/* default */.A.locals ? AppOverview/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/AppOverview/AppOverviewList/index.js
/* provided dependency */ var AppOverviewList_createElement = __webpack_require__(153)["n"];
function AppOverviewList(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return AppOverviewList_createElement("div", {
    className: "AppOverview__SeeAlso"
  }, AppOverviewList_createElement("p", {
    style: {
      width: "150px"
    }
  }, props.text), AppOverviewList_createElement("ul", {
    className: "AppOverview__SeeAlsoList"
  }, children));
}
;// CONCATENATED MODULE: ./webindows/components/AppOverview/AppOverviewImage/index.js
/* provided dependency */ var AppOverviewImage_createElement = __webpack_require__(153)["n"];
function AppOverviewImage(props) {
  return AppOverviewImage_createElement("img", {
    src: props.src,
    style: {
      width: "250px"
    }
  });
}

//ASSETS_PATH + "FileExplorer.png"
;// CONCATENATED MODULE: ./webindows/components/AppOverview/AppOverviewDescription/index.js
/* provided dependency */ var AppOverviewDescription_createElement = __webpack_require__(153)["n"];
function AppOverviewDescription(props) {
  var _props$width;
  return AppOverviewDescription_createElement("p", {
    style: {
      margin: "14px",
      minWidth: "150px",
      width: (_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : "100%"
    }
  }, props.text);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/Link/index.css
var common_Link = __webpack_require__(53);
;// CONCATENATED MODULE: ./webindows/components/common/Link/index.css

      
      
      
      
      
      
      
      
      

var Link_options = {};

Link_options.styleTagTransform = (styleTagTransform_default());
Link_options.setAttributes = (setAttributesWithoutAttributes_default());

      Link_options.insert = insertBySelector_default().bind(null, "head");
    
Link_options.domAPI = (styleDomAPI_default());
Link_options.insertStyleElement = (insertStyleElement_default());

var Link_update = injectStylesIntoStyleTag_default()(common_Link/* default */.A, Link_options);




       /* harmony default export */ const components_common_Link = (common_Link/* default */.A && common_Link/* default */.A.locals ? common_Link/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/Link/index.js
/* provided dependency */ var Link_createElement = __webpack_require__(153)["n"];

function Link_Link(props) {
  return Link_createElement("a", {
    id: props.id,
    className: "Link",
    href: props.href,
    onClick: props.onClick
  }, props.text);
}
;// CONCATENATED MODULE: ./webindows/components/AppOverview/AppOverviewList/AppOverviewLink/index.js
/* provided dependency */ var AppOverviewLink_createElement = __webpack_require__(153)["n"];

function AppOverviewLink(props) {
  return AppOverviewLink_createElement("li", {
    className: "AppOverview__SeeAlsoListItem",
    onClick: props.onClick
  }, AppOverviewLink_createElement(Link, {
    href: props.to,
    text: props.text,
    onClick: props.onClick
  }));
}
;// CONCATENATED MODULE: ./webindows/components/AppOverview/index.js
/* provided dependency */ var AppOverview_createElement = __webpack_require__(153)["n"];





function AppOverview_AppOverview(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return AppOverview_createElement("div", {
    className: "AppOverview"
  }, children);
}

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/InfoBox/index.css
var InfoBox = __webpack_require__(580);
;// CONCATENATED MODULE: ./webindows/components/common/InfoBox/index.css

      
      
      
      
      
      
      
      
      

var InfoBox_options = {};

InfoBox_options.styleTagTransform = (styleTagTransform_default());
InfoBox_options.setAttributes = (setAttributesWithoutAttributes_default());

      InfoBox_options.insert = insertBySelector_default().bind(null, "head");
    
InfoBox_options.domAPI = (styleDomAPI_default());
InfoBox_options.insertStyleElement = (insertStyleElement_default());

var InfoBox_update = injectStylesIntoStyleTag_default()(InfoBox/* default */.A, InfoBox_options);




       /* harmony default export */ const common_InfoBox = (InfoBox/* default */.A && InfoBox/* default */.A.locals ? InfoBox/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/InfoBox/index.js
/* provided dependency */ var InfoBox_createElement = __webpack_require__(153)["n"];

function InfoBox_InfoBox(props) {
  return InfoBox_createElement("div", {
    id: props.id,
    className: "InfoBox",
    style: {
      width: props.width
    }
  }, InfoBox_createElement("p", null, props.text));
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/Button/index.css
var Button = __webpack_require__(349);
;// CONCATENATED MODULE: ./webindows/components/common/Button/index.css

      
      
      
      
      
      
      
      
      

var Button_options = {};

Button_options.styleTagTransform = (styleTagTransform_default());
Button_options.setAttributes = (setAttributesWithoutAttributes_default());

      Button_options.insert = insertBySelector_default().bind(null, "head");
    
Button_options.domAPI = (styleDomAPI_default());
Button_options.insertStyleElement = (insertStyleElement_default());

var Button_update = injectStylesIntoStyleTag_default()(Button/* default */.A, Button_options);




       /* harmony default export */ const common_Button = (Button/* default */.A && Button/* default */.A.locals ? Button/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/Button/index.js
/* provided dependency */ var Button_createElement = __webpack_require__(153)["n"];

function Button_Button(props) {
  return Button_createElement("button", {
    id: props.id,
    className: "Button",
    disabled: props.disabled,
    onClick: props.onClick
  }, props.text);
}
;// CONCATENATED MODULE: ./src/AppViews/MainAppView.js
/* provided dependency */ var MainAppView_createElement = __webpack_require__(153)["n"];
function MainAppView() {
  return MainAppView_createElement("div", null, MainAppView_createElement("canvas", {
    id: "id_MSPAINT_Canvas",
    className: "Canvas",
    width: "720",
    height: "400"
  }));
}
;// CONCATENATED MODULE: ./src/AppViews/WebindowsAppOverview.js
/* provided dependency */ var WebindowsAppOverview_createElement = __webpack_require__(153)["n"];






function WebindowsAppOverview() {
  return WebindowsAppOverview_createElement(AppOverview_AppOverview, null, WebindowsAppOverview_createElement(AppOverviewImage, {
    src: "".concat(ASSETS_PATH, "/MSPaint.png")
  }), WebindowsAppOverview_createElement(AppOverviewDescription, {
    width: "250px",
    text: "Fake MS Paint. Should actually not be called MS Paint and just Paint."
  }), WebindowsAppOverview_createElement(InfoBox_InfoBox, {
    text: "Please, draw only appropriate images!",
    width: "250px"
  }), WebindowsAppOverview_createElement(Button_Button, {
    text: "NEW",
    onClick: function onClick() {
      addView("75%", WebindowsAppOverview_createElement(MainAppView, null));
    }
  }));
}
;// CONCATENATED MODULE: ./webindows/components/ButtonBarContainer/ButtonBar/index.js
/* provided dependency */ var ButtonBar_createElement = __webpack_require__(153)["n"];
function ButtonBar(props) {
  var _props$gap;
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return ButtonBar_createElement("div", {
    className: "ButtonBar",
    style: {
      gap: (_props$gap = props === null || props === void 0 ? void 0 : props.gap) !== null && _props$gap !== void 0 ? _props$gap : "4px"
    }
  }, ButtonBar_createElement("div", {
    className: "winCl-DividerBigVertical",
    style: "height: 22px; margin-block: 2px"
  }), children);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/ButtonBarContainer/index.css
var ButtonBarContainer = __webpack_require__(965);
;// CONCATENATED MODULE: ./webindows/components/ButtonBarContainer/index.css

      
      
      
      
      
      
      
      
      

var ButtonBarContainer_options = {};

ButtonBarContainer_options.styleTagTransform = (styleTagTransform_default());
ButtonBarContainer_options.setAttributes = (setAttributesWithoutAttributes_default());

      ButtonBarContainer_options.insert = insertBySelector_default().bind(null, "head");
    
ButtonBarContainer_options.domAPI = (styleDomAPI_default());
ButtonBarContainer_options.insertStyleElement = (insertStyleElement_default());

var ButtonBarContainer_update = injectStylesIntoStyleTag_default()(ButtonBarContainer/* default */.A, ButtonBarContainer_options);




       /* harmony default export */ const components_ButtonBarContainer = (ButtonBarContainer/* default */.A && ButtonBarContainer/* default */.A.locals ? ButtonBarContainer/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/ButtonBarContainer/index.js
/* provided dependency */ var ButtonBarContainer_createElement = __webpack_require__(153)["n"];


function ButtonBarContainer_ButtonBarContainer(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return ButtonBarContainer_createElement("div", {
    className: "winCl-HardInsetShadow"
  }, children.map(function (child) {
    return ButtonBarContainer_createElement("div", null, child);
  }));
}

;// CONCATENATED MODULE: ./src/AppViews/NavigationBar.js
/* provided dependency */ var NavigationBar_createElement = __webpack_require__(153)["n"];


function NavigationBar() {
  return NavigationBar_createElement(ButtonBarContainer_ButtonBarContainer, null, NavigationBar_createElement(ButtonBar, null, NavigationBar_createElement(Button_Button, {
    text: "File",
    disabled: false
  }), NavigationBar_createElement(Button_Button, {
    text: "Edit",
    disabled: false
  }), NavigationBar_createElement(Button_Button, {
    text: "View",
    disabled: true
  }), NavigationBar_createElement(Button_Button, {
    text: "Extra",
    disabled: true
  }), NavigationBar_createElement(Button_Button, {
    text: "?",
    disabled: true
  })), NavigationBar_createElement(ButtonBar, null, NavigationBar_createElement(Button_Button, {
    text: "Download",
    disabled: false,
    onClick: download
  }), NavigationBar_createElement(Button_Button, {
    text: "Import",
    disabled: true
  })));
}
function download() {
  var c = document.getElementById("id_MSPAINT_Canvas");
  var image = c.toDataURL("image/jpg");
  var link = document.createElement("a");
  link.download = "canvas_image.jpg";
  link.href = image;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
;// CONCATENATED MODULE: ./src/index.js
/* provided dependency */ var src_createElement = __webpack_require__(153)["n"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function init() {
  var root = document.getElementsByTagName("body")[0];
  root.append(src_createElement(WindowContent_WindowContent, null, src_createElement(NavigationBar, null), src_createElement(ViewContainer_ViewContainer, null)));
  addView("25%", src_createElement(WebindowsAppOverview, null), false);
  addView("75%", src_createElement(MainAppView, null), false);
}
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
init();
var prevMouse = {
  x: 0,
  y: 0
};
var mouse = {
  x: 0,
  y: 0
};
var c = document.getElementById("id_MSPAINT_Canvas");
var isMouseDown = false;
var drawPixel = function drawPixel(e) {
  var c = document.getElementById("id_MSPAINT_Canvas");
  var kursiv = 0;
  var x = mouse.x;
  var y = mouse.y;
  var prevX = prevMouse.x - kursiv;
  var prevY = prevMouse.y + kursiv;
  var ctx = c.getContext("2d");
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.moveTo(x, y);
  ctx.lineTo(prevX, prevY);
  ctx.stroke();
};
c.addEventListener("mousemove", function (e) {
  var mousePos = getMousePos(c, e);
  mouse.x = mousePos.x;
  mouse.y = mousePos.y;
  if (isMouseDown) drawPixel(e);
  prevMouse.x = mousePos.x;
  prevMouse.y = mousePos.y;
});
c.addEventListener("mousedown", function (e) {
  isMouseDown = true;
});
c.addEventListener("mouseup", function (e) {
  isMouseDown = false;
});
c.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  console.log(123);
  fill(mouse.x, mouse.y, "black");
});
var getMousePos = function getMousePos(canvas, e) {
  return {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop
  };
};
var fill = function fill(startX, startY, fillColor) {
  var ctx = c.getContext("2d");
  var imageData = ctx.getImageData(0, 0, c.width, c.height);
  var targetColor = getColorAtPixel(startX, startY, imageData);
  if (targetColor === fillColor) {
    return; // Avoid infinite loop if the fill color is same as target color
  }
  var pixelsToCheck = [[startX, startY]];
  while (pixelsToCheck.length) {
    var _pixelsToCheck$pop = pixelsToCheck.pop(),
      _pixelsToCheck$pop2 = _slicedToArray(_pixelsToCheck$pop, 2),
      x = _pixelsToCheck$pop2[0],
      y = _pixelsToCheck$pop2[1];
    var currentColor = getColorAtPixel(x, y, imageData);
    if (currentColor === targetColor) {
      drawPixel(x, y, fillColor);
      pixelsToCheck.push([x + 1, y]);
      pixelsToCheck.push([x - 1, y]);
      pixelsToCheck.push([x, y + 1]);
      pixelsToCheck.push([x, y - 1]);
    }
  }
};
var getColorAtPixel = function getColorAtPixel(x, y, imageData) {
  var width = imageData.width,
    data = imageData.data;
  var pixelIndex = (y * width + x) * 4;
  return "rgba(".concat(data[pixelIndex], ", ").concat(data[pixelIndex + 1], ", ").concat(data[pixelIndex + 2], ", ").concat(data[pixelIndex + 3] / 255, ")");
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBQTFMLE1BQUEsQ0FBS3lMLElBQUksQ0FBQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQyxRQUFBMUwsTUFBQSxDQUM3RXlMLElBQUksQ0FBQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUc7QUFFbEMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL2pzeC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvaW5kZXguY3NzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvaW5kZXguY3NzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24vaW5kZXguY3NzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvbi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbmZvQm94L2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmsvaW5kZXguY3NzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1dpbmRvd0NvbnRlbnQvaW5kZXguY3NzP2RmMDEiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1dpbmRvd0NvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguY3NzPzQzZTUiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LmNzcz81NjEzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL0Nsb3NlQmFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL3JlbW92ZVZpZXcuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvVmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvYWRkVmlldy5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvaW5kZXguY3NzP2E3MjEiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L0FwcE92ZXJ2aWV3TGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvQXBwT3ZlcnZpZXdJbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmsvaW5kZXguY3NzP2VkNDAiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9BcHBPdmVydmlld0xpc3QvQXBwT3ZlcnZpZXdMaW5rL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3gvaW5kZXguY3NzPzRmOGMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbmZvQm94L2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmNzcz82M2ZlIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9zcmMvQXBwVmlld3MvTWFpbkFwcFZpZXcuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3NyYy9BcHBWaWV3cy9XZWJpbmRvd3NBcHBPdmVydmlldy5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL0J1dHRvbkJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL2luZGV4LmNzcz81M2ZjIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3NyYy9BcHBWaWV3cy9OYXZpZ2F0aW9uQmFyLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggY3JlYXRlRWxlbWVudCAqL1xyXG5cclxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRhZyhwcm9wcywgLi4uY2hpbGRyZW4pO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICBPYmplY3QuZW50cmllcyhwcm9wcyB8fCB7fSkuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCJvblwiKSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xhc3NOYW1lXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwic3R5bGVcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSB2YWx1ZVtwcm9wTmFtZV07XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BOYW1lXSA9IHByb3BWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmRpc2FibGVkID0gQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBhcHBlbmRDaGlsZChlbGVtZW50LCBjaGlsZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmNvbnN0IGFwcGVuZENoaWxkID0gKHBhcmVudCwgY2hpbGQpID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkgcmV0dXJuIGNoaWxkLmZvckVhY2goKG5lc3RlZENoaWxkKSA9PiBhcHBlbmRDaGlsZChwYXJlbnQsIG5lc3RlZENoaWxkKSk7XHJcbiAgICBpZiAoIWNoaWxkKSByZXR1cm47XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQ/Lm5vZGVUeXBlID8gY2hpbGQgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGQgfTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5BcHBPdmVydmlld19fU2VlQWxzbyB7XHJcbiAgICBtYXJnaW46IDE0cHg7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3RJdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5BcHBPdmVydmlld19fU2VlQWxzbyB7XFxyXFxuICAgIG1hcmdpbjogMTRweDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3RJdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5CdXR0b25CYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0cHgpO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKSxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggMHB4IHZhcigtLXNoYWRvdy0zMDApLCAwcHggdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0zMDApO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsU0FBUztJQUNUOzs7c0dBR2tHO0FBQ3RHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5CdXR0b25CYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNHB4KTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKSxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCAwcHggdmFyKC0tc2hhZG93LTMwMCksIDBweCB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTMwMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLlZpZXdDb250YWluZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gODVweCk7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4uVmlldyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLlZpZXdSZXNpemVIYW5kbGVMZWZ0IHtcclxuICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDRweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5DbG9zZUJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDFweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFFBQVE7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVmlld0NvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVmlldyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXdSZXNpemVIYW5kbGVMZWZ0IHtcXHJcXG4gICAgY3Vyc29yOiBldy1yZXNpemU7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLkNsb3NlQmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDFweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuV2luZG93Q29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuV2luZG93Q29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWcpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDhweDtcclxufVxyXG4uQnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XHJcbn1cclxuLkJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJOzZFQUN5RTtBQUM3RTtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDJweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA4cHg7XFxyXFxufVxcclxcbi5CdXR0b246YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XFxyXFxufVxcclxcbi5CdXR0b246ZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5LTMwMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkljb24ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvbi9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuSWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkluZm9Cb3gge1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMTAwKTtcclxuICAgIGJvcmRlcjogdmFyKC0teWVsbG93LTIwMCkgMXB4IHNvbGlkO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3gvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsbUNBQW1DO0FBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5JbmZvQm94IHtcXHJcXG4gICAgbWFyZ2luOiA4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LTEwMCk7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0teWVsbG93LTIwMCkgMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5MaW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5MaW5rOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogcHVycGxlO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmsvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5MaW5rIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5MaW5rOmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiBwdXJwbGU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2luZG93Q29udGVudChwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIldpbmRvd0NvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICBzcmM9e3Byb3BzLnNyY31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcIkljb25cIiArIChwcm9wcy5jbGFzc05hbWUgPyBcIiBcIiArIHByb3BzLmNsYXNzTmFtZSA6IFwiXCIpfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb3BzLmlzR3JleSA/IFwiZ3JheXNjYWxlKDEwMCUpXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG4iLCJjb25zdCBXQk5EX1JFUSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbmNvbnN0IFJPT1RfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L2ZvbGRlclwiO1xyXG5jb25zdCBGSUxFX1BBVEggPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9maWxlXCI7XHJcbmNvbnN0IFBVQkxJQ19QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvcHVibGljXCIgKyBcIi93ZWJpbmRvd3MvcHVibGljL1wiO1xyXG5jb25zdCBBU1NFVFNfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L3B1YmxpY1wiICsgXCIvd2ViaW5kb3dzL3B1YmxpYy9Bc3NldHMvXCI7XHJcbmNvbnN0IElDT05TX1BBVEggPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9wdWJsaWNcIiArIFwiL3dlYmluZG93cy9wdWJsaWMvQXNzZXRzL0ljb25zL1wiO1xyXG5jb25zdCBGSUxFU19SRVEgPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9maWxlcy9cIjtcclxuXHJcbmV4cG9ydCB7IFBVQkxJQ19QQVRILCBBU1NFVFNfUEFUSCwgSUNPTlNfUEFUSCwgRklMRV9QQVRILCBST09UX1BBVEgsIEZJTEVTX1JFUSB9O1xyXG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uXCI7XHJcbmltcG9ydCB7IEFTU0VUU19QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3NlQmFyKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2xvc2VCYXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luQ2wtSGFyZE91dHNldFNoYWRvdyB3aW5DbC1CR0NvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjE2cHhcIiB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5DbC1IYXJkT3V0c2V0U2hhZG93IHdpbkNsLUJHQ29sb3JcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtBU1NFVFNfUEFUSCArIFwiL0ltZ19CdXR0b25fQ2xvc2UuUE5HXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVWaWV3KGlkKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgY29uc3Qgdmlld1dpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodmlldykuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuICAgIGNvbnN0IHN1YlZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICBsZXQgcHJldlZpZXc7XHJcbiAgICBsZXQgcmVzaXplVmlldztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc3ViVmlld3NbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHByZXZWaWV3ID0gc3ViVmlld3NbaSAtIDFdO1xyXG4gICAgICAgICAgICByZXNpemVWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgVmlld1Jlc2l6ZUhhbmRsZUxlZnRgKVtpIC0gMV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHByZXZWaWV3V2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwcmV2VmlldykuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuICAgIHByZXZWaWV3LnN0eWxlLndpZHRoID0gcHJldlZpZXdXaWR0aCArIHZpZXdXaWR0aCArIDEyICsgXCJweFwiO1xyXG5cclxuICAgIGlmIChyZXNpemVWaWV3KSByZXNpemVWaWV3LnJlbW92ZSgpO1xyXG4gICAgaWYgKHZpZXcpIHZpZXcucmVtb3ZlKCk7XHJcbn1cclxuIiwiaW1wb3J0IENsb3NlQmFyIGZyb20gXCIuLi9DbG9zZUJhclwiO1xyXG5pbXBvcnQgcmVtb3ZlVmlldyBmcm9tIFwiLi4vcmVtb3ZlVmlld1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlldyhwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbkNsLUhhcmRJbnNldFNoYWRvdyBWaWV3XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHByb3BzLndpZHRoIH19XHJcbiAgICAgICAgICAgIG9uQ29udGV4dG1lbnU9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuaXNDbG9zYWJsZSAmJiA8Q2xvc2VCYXIgb25DbGljaz17KCkgPT4gcmVtb3ZlVmlldyhwcm9wcy5pZCl9IC8+fVxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBTdWJ0cmFjdHMgYSB2YWx1ZSBmcm9tIGFub3RoZXIgdW50aWwgbGltaXQuXHJcbiAqIElmIGxpbWl0IGlzIG1ldCwgdGhlbiBzdWJ0cmFjdCBmcm9tIHZhbHVlIHRoZSByZXN0LlxyXG4gKiBEZWZhdWx0IGxpbWl0IGlzIDE1MFxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc3VidHJhY3QuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tIC0gVGhlIHZhbHVlIHRvIHN1YnRyYWN0IGZyb20uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGltaXQ9MTUwXSAtIFRoZSBsaW1pdCB0byBzdWJ0cmFjdCBmcm9tLlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgeCBhbmQgeSByZXByZXNlbnRpbmcgdGhlIHN1YnRyYWN0ZWQgdmFsdWVzLlxyXG4gKi9cclxuZnVuY3Rpb24gc3VidHJhY3RGcm9tKHZhbHVlLCBmcm9tLCBsaW1pdCA9IDE1MCkge1xyXG4gICAgbGV0IHJlbWFpbmluZ0Zyb20gPSBmcm9tIC0gdmFsdWU7XHJcbiAgICBsZXQgc3VidHJhY3RlZFZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHJlbWFpbmluZ0Zyb20gPCBsaW1pdCkge1xyXG4gICAgICAgIGNvbnN0IHRvU3VidHJhY3QgPSB2YWx1ZSAtIE1hdGguYWJzKGxpbWl0IC0gZnJvbSk7XHJcbiAgICAgICAgcmVtYWluaW5nRnJvbSA9IGxpbWl0O1xyXG4gICAgICAgIHN1YnRyYWN0ZWRWYWx1ZSA9IHZhbHVlIC0gdG9TdWJ0cmFjdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyB4OiBzdWJ0cmFjdGVkVmFsdWUsIHk6IHJlbWFpbmluZ0Zyb20gfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYW1wcyBhIHZhbHVlIGJldHdlZW4gYW4gdXBwZXIgYW5kIGxvd2VyIGJvdW5kLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2xhbXAuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbG93ZXIgYm91bmQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgdXBwZXIgYm91bmQuXHJcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGNsYW1wZWQgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN1YnRyYWN0cyBhbiBlcXVhbCBzaGFyZSBmcm9tIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgYmFzZWQgb24gdGhlIHRvdGFsIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdG90YWwgdmFsdWUgdG8gc3BsaXQgYW1vbmcgdGhlIGVsZW1lbnRzLlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSBvZiB2YWx1ZXMgdG8gc3VidHJhY3QgZnJvbS5cclxuICogQHJldHVybiB7QXJyYXl9IFRoZSBtb2RpZmllZCBhcnJheSBhZnRlciBzdWJ0cmFjdGluZyB0aGUgZXF1YWwgc2hhcmUgZnJvbSBlYWNoIGVsZW1lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdWJ0cmFjdEVxdWFsU2hhcmUodmFsdWUsIGFycmF5KSB7XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09IDApIHJldHVybiBhcnJheTtcclxuICAgIGNvbnN0IHNoYXJlID0gdmFsdWUgLyBhcnJheS5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGFycmF5W2ldIC0gc2hhcmU7XHJcbiAgICAgICAgYXJyYXlbaV0gPSBNYXRoLm1heChuZXdWYWx1ZSwgMTUwKTtcclxuICAgICAgICB2YWx1ZSAtPSBhcnJheVtpXSAtIG5ld1ZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBpZiB0d28gbnVtYmVycyBhcmUgbmVhcmx5IGVxdWFsIHdpdGhpbiBhIHNwZWNpZmllZCBlcHNpbG9uIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtMSAtIFRoZSBmaXJzdCBudW1iZXIgdG8gY29tcGFyZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IG51bTIgLSBUaGUgc2Vjb25kIG51bWJlciB0byBjb21wYXJlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2Vwc2lsb249MV0gLSBUaGUgYWNjZXB0YWJsZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIG51bWJlcnMuXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG51bWJlcnMgYXJlIG5lYXJseSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cclxuZnVuY3Rpb24gbmVhcmx5RXF1YWwobnVtMSwgbnVtMiwgZXBzaWxvbiA9IDEpIHtcclxuICAgIHJldHVybiBNYXRoLmFicyhudW0xIC0gbnVtMikgPCBlcHNpbG9uO1xyXG59XHJcblxyXG5leHBvcnQgeyBzdWJ0cmFjdEZyb20sIGNsYW1wLCBzdWJ0cmFjdEVxdWFsU2hhcmUsIG5lYXJseUVxdWFsIH07XHJcbiIsImltcG9ydCBWaWV3IGZyb20gXCIuL1ZpZXdcIjtcclxuaW1wb3J0IHsgc3VidHJhY3RGcm9tLCBjbGFtcCB9IGZyb20gXCIuLi8uLi91dGlscy9tYXRoXCI7XHJcblxyXG4vKipcclxuICogQWRkIGEgbmV3IHZpZXcgdG8gdGhlIHZpZXcgY29udGFpbmVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5pdFdpZHRoIC0gVGhlIGluaXRpYWwgd2lkdGggb2YgdGhlIG5ldyB2aWV3LlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50IC0gVGhlIGNvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBuZXcgdmlldy5cclxuICogQHBhcmFtIHtib29sZWFufSBpc0Nsb3NhYmxlIC0gSW5jbHVkZSBhIGJ1dHRvbiB0byBjbG9zZSB0aGUgdmlldy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFZpZXcoaW5pdFdpZHRoLCBjb250ZW50LCBpc0Nsb3NhYmxlID0gdHJ1ZSkge1xyXG4gICAgY29uc3Qgc3ViV2luZG93V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJWaWV3Q29udGFpbmVyXCIpWzBdO1xyXG4gICAgY29uc3Qgc3ViV2luZG93cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJWaWV3XCIpO1xyXG4gICAgY29uc3QgcmVzaXplSGFuZGxlTGVmdCA9IDxkaXYgY2xhc3NOYW1lPVwiVmlld1Jlc2l6ZUhhbmRsZUxlZnRcIj48L2Rpdj47XHJcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICBsZXQgZGVzaXJlZFdpZHRoID0gKHBhcnNlSW50KGluaXRXaWR0aCkgKiB3aW5kb3dXaWR0aCkgLyAxMDA7XHJcbiAgICBpZiAoc3ViV2luZG93cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdFdpbmRvdyA9IHN1YldpbmRvd3Nbc3ViV2luZG93cy5sZW5ndGggLSAxXTtcclxuICAgICAgICBjb25zdCBsYXN0V2luZG93V2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShsYXN0V2luZG93KS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpO1xyXG4gICAgICAgIGlmIChsYXN0V2luZG93V2lkdGggPCAxNzUpIHJldHVybjtcclxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHN1YnRyYWN0RnJvbShkZXNpcmVkV2lkdGgsIGxhc3RXaW5kb3dXaWR0aCk7XHJcbiAgICAgICAgZGVzaXJlZFdpZHRoID0geDtcclxuICAgICAgICBsYXN0V2luZG93LnN0eWxlLndpZHRoID0geSAtIDQgKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpZCA9IGBpZF9WaWV3XyR7c3ViV2luZG93cy5sZW5ndGggKyAxfWA7XHJcbiAgICBjb25zdCBuZXdTdWJXaW5kb3cgPSA8VmlldyBpZD17aWR9IHdpZHRoPXtkZXNpcmVkV2lkdGggLSA4ICsgXCJweFwifSBpc0Nsb3NhYmxlPXtpc0Nsb3NhYmxlfT48L1ZpZXc+O1xyXG5cclxuICAgIGlmIChzdWJXaW5kb3dzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzdWJXaW5kb3dXcmFwcGVyLmFwcGVuZChyZXNpemVIYW5kbGVMZWZ0KTtcclxuICAgIH1cclxuICAgIG5ld1N1YldpbmRvdy5hcHBlbmQoY29udGVudCk7XHJcbiAgICBzdWJXaW5kb3dXcmFwcGVyLmFwcGVuZChuZXdTdWJXaW5kb3cpO1xyXG5cclxuICAgIHJlc2l6ZUhhbmRsZUxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3ViVmlld3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld1wiKTtcclxuICAgICAgICBsZXQgc3ViV2luZG93Q3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpZF9WaWV3XyR7c3ViV2luZG93cy5sZW5ndGggLSAxfWApO1xyXG4gICAgICAgIGxldCBzdWJXaW5kb3dOZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlkX1ZpZXdfJHtzdWJXaW5kb3dzLmxlbmd0aH1gKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzdWJWaWV3c1tpXS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHN1YldpbmRvd0N1cnJlbnQgPSBzdWJWaWV3c1tpIC0gMV07XHJcbiAgICAgICAgICAgICAgICBzdWJXaW5kb3dOZXh0ID0gc3ViVmlld3NbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzYXZlZFdpZHRoQ3VycmVudCA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJXaW5kb3dDdXJyZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNhdmVkV2lkdGhOZXh0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViV2luZG93TmV4dCkuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGhEaWZmID0gZS5jbGllbnRYIC0gKHN1YldpbmRvd0N1cnJlbnQub2Zmc2V0TGVmdCArIHNhdmVkV2lkdGhDdXJyZW50KTtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q3VycmVudFdpZHRoID0gY2xhbXAoXHJcbiAgICAgICAgICAgICAgICBzYXZlZFdpZHRoQ3VycmVudCArIHdpZHRoRGlmZixcclxuICAgICAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICAgICAgc2F2ZWRXaWR0aEN1cnJlbnQgKyBzYXZlZFdpZHRoTmV4dCAtIDUwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05leHRXaWR0aCA9IGNsYW1wKFxyXG4gICAgICAgICAgICAgICAgc2F2ZWRXaWR0aE5leHQgLSB3aWR0aERpZmYsXHJcbiAgICAgICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgICAgIHNhdmVkV2lkdGhDdXJyZW50ICsgc2F2ZWRXaWR0aE5leHQgLSA1MFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzdWJXaW5kb3dDdXJyZW50LnN0eWxlLndpZHRoID0gbmV3Q3VycmVudFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICBzdWJXaW5kb3dOZXh0LnN0eWxlLndpZHRoID0gbmV3TmV4dFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBWaWV3IGZyb20gXCIuL1ZpZXdcIjtcclxuaW1wb3J0IGFkZFZpZXcgZnJvbSBcIi4vYWRkVmlld1wiO1xyXG5cclxuZnVuY3Rpb24gVmlld0NvbnRhaW5lcihwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIlZpZXdDb250YWluZXJcIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgeyBWaWV3LCBhZGRWaWV3LCBWaWV3Q29udGFpbmVyIH07XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcE92ZXJ2aWV3TGlzdChwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBPdmVydmlld19fU2VlQWxzb1wiPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiIH19Pntwcm9wcy50ZXh0fTwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdFwiPntjaGlsZHJlbn08L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0ltYWdlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGltZyBzcmM9e3Byb3BzLnNyY30gc3R5bGU9e3sgd2lkdGg6IFwiMjUwcHhcIiB9fSAvPjtcclxufVxyXG5cclxuLy9BU1NFVFNfUEFUSCArIFwiRmlsZUV4cGxvcmVyLnBuZ1wiXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcE92ZXJ2aWV3RGVzY3JpcHRpb24ocHJvcHMpIHtcclxuICAgIHJldHVybiA8cCBzdHlsZT17eyBtYXJnaW46IFwiMTRweFwiLCBtaW5XaWR0aDogXCIxNTBweFwiLCB3aWR0aDogcHJvcHMud2lkdGggPz8gXCIxMDAlXCIgfX0+e3Byb3BzLnRleHR9PC9wPjtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGluayhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YVxyXG4gICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIkxpbmtcIlxyXG4gICAgICAgICAgICBocmVmPXtwcm9wcy5ocmVmfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0xpbmsocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdEl0ZW1cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvcHMudG99IHRleHQ9e3Byb3BzLnRleHR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3TGlzdCBmcm9tIFwiLi9BcHBPdmVydmlld0xpc3RcIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3SW1hZ2UgZnJvbSBcIi4vQXBwT3ZlcnZpZXdJbWFnZVwiO1xyXG5pbXBvcnQgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiBmcm9tIFwiLi9BcHBPdmVydmlld0Rlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBBcHBPdmVydmlld0xpbmsgZnJvbSBcIi4vQXBwT3ZlcnZpZXdMaXN0L0FwcE92ZXJ2aWV3TGlua1wiO1xyXG5cclxuZnVuY3Rpb24gQXBwT3ZlcnZpZXcocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJBcHBPdmVydmlld1wiPntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFwcE92ZXJ2aWV3TGlzdCwgQXBwT3ZlcnZpZXdJbWFnZSwgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiwgQXBwT3ZlcnZpZXcsIEFwcE92ZXJ2aWV3TGluayB9O1xyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb0JveChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtwcm9wcy5pZH0gY2xhc3NOYW1lPVwiSW5mb0JveFwiIHN0eWxlPXt7IHdpZHRoOiBwcm9wcy53aWR0aCB9fT5cclxuICAgICAgICAgICAgPHA+e3Byb3BzLnRleHR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJCdXR0b25cIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkFwcFZpZXcoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJpZF9NU1BBSU5UX0NhbnZhc1wiIGNsYXNzTmFtZT1cIkNhbnZhc1wiIHdpZHRoPVwiNzIwXCIgaGVpZ2h0PVwiNDAwXCI+PC9jYW52YXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBBcHBPdmVydmlldyxcclxuICAgIEFwcE92ZXJ2aWV3TGluayxcclxuICAgIEFwcE92ZXJ2aWV3TGlzdCxcclxuICAgIEFwcE92ZXJ2aWV3RGVzY3JpcHRpb24sXHJcbiAgICBBcHBPdmVydmlld0ltYWdlLFxyXG59IGZyb20gXCJAd2ViaW5kb3dzL0FwcE92ZXJ2aWV3XCI7XHJcbmltcG9ydCB7IEFTU0VUU19QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuaW1wb3J0IEluZm9Cb3ggZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5mb0JveFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBhZGRWaWV3IH0gZnJvbSBcIkB3ZWJpbmRvd3MvVmlld3NcIjtcclxuaW1wb3J0IE1haW5BcHBWaWV3IGZyb20gXCIuL01haW5BcHBWaWV3XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWJpbmRvd3NBcHBPdmVydmlldygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcE92ZXJ2aWV3PlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdJbWFnZSBzcmM9e2Ake0FTU0VUU19QQVRIfS9NU1BhaW50LnBuZ2B9IC8+XHJcbiAgICAgICAgICAgIDxBcHBPdmVydmlld0Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1MHB4XCJcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJGYWtlIE1TIFBhaW50LiBTaG91bGQgYWN0dWFsbHkgbm90IGJlIGNhbGxlZCBNUyBQYWludCBhbmQganVzdCBQYWludC5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5mb0JveCB0ZXh0PVwiUGxlYXNlLCBkcmF3IG9ubHkgYXBwcm9wcmlhdGUgaW1hZ2VzIVwiIHdpZHRoPVwiMjUwcHhcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiTkVXXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRWaWV3KFwiNzUlXCIsIDxNYWluQXBwVmlldyAvPik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQXBwT3ZlcnZpZXc+XHJcbiAgICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkJhcihwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCdXR0b25CYXJcIiBzdHlsZT17eyBnYXA6IHByb3BzPy5nYXAgPz8gXCI0cHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1EaXZpZGVyQmlnVmVydGljYWxcIiBzdHlsZT1cImhlaWdodDogMjJweDsgbWFyZ2luLWJsb2NrOiAycHhcIj48L2Rpdj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgQnV0dG9uQmFyIGZyb20gXCIuL0J1dHRvbkJhclwiO1xyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gQnV0dG9uQmFyQ29udGFpbmVyKHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbkNsLUhhcmRJbnNldFNoYWRvd1wiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+e2NoaWxkfTwvZGl2PjtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBCdXR0b25CYXIsIEJ1dHRvbkJhckNvbnRhaW5lciB9O1xyXG4iLCJpbXBvcnQgeyBCdXR0b25CYXJDb250YWluZXIsIEJ1dHRvbkJhciB9IGZyb20gXCJAd2ViaW5kb3dzL0J1dHRvbkJhcnNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb25CYXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25CYXJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJGaWxlXCIgZGlzYWJsZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiRWRpdFwiIGRpc2FibGVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlZpZXdcIiBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkV4dHJhXCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCI/XCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFyPlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiRG93bmxvYWRcIiBkaXNhYmxlZD17ZmFsc2V9IG9uQ2xpY2s9e2Rvd25sb2FkfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiSW1wb3J0XCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFyPlxyXG4gICAgICAgIDwvQnV0dG9uQmFyQ29udGFpbmVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG93bmxvYWQoKSB7XHJcbiAgICBjb25zdCBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9NU1BBSU5UX0NhbnZhc1wiKTtcclxuICAgIGxldCBpbWFnZSA9IGMudG9EYXRhVVJMKFwiaW1hZ2UvanBnXCIpO1xyXG5cclxuICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBsaW5rLmRvd25sb2FkID0gXCJjYW52YXNfaW1hZ2UuanBnXCI7XHJcbiAgICBsaW5rLmhyZWYgPSBpbWFnZTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG59XHJcbiIsImltcG9ydCBXaW5kb3dDb250ZW50IGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudFwiO1xyXG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyLCBhZGRWaWV3IH0gZnJvbSBcIkB3ZWJpbmRvd3MvVmlld3NcIjtcclxuaW1wb3J0IFdlYmluZG93c0FwcE92ZXJ2aWV3IGZyb20gXCIuL0FwcFZpZXdzL1dlYmluZG93c0FwcE92ZXJ2aWV3XCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gXCIuL0FwcFZpZXdzL05hdmlnYXRpb25CYXJcIjtcclxuaW1wb3J0IE1haW5BcHBWaWV3IGZyb20gXCIuL0FwcFZpZXdzL01haW5BcHBWaWV3XCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcclxuXHJcbiAgICByb290LmFwcGVuZChcclxuICAgICAgICA8V2luZG93Q29udGVudD5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgLz5cclxuICAgICAgICAgICAgPFZpZXdDb250YWluZXIgLz5cclxuICAgICAgICA8L1dpbmRvd0NvbnRlbnQ+XHJcbiAgICApO1xyXG5cclxuICAgIGFkZFZpZXcoXCIyNSVcIiwgPFdlYmluZG93c0FwcE92ZXJ2aWV3IC8+LCBmYWxzZSk7XHJcbiAgICBhZGRWaWV3KFwiNzUlXCIsIDxNYWluQXBwVmlldyAvPiwgZmFsc2UpO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5pbml0KCk7XHJcblxyXG5sZXQgcHJldk1vdXNlID0geyB4OiAwLCB5OiAwIH07XHJcbmxldCBtb3VzZSA9IHsgeDogMCwgeTogMCB9O1xyXG5jb25zdCBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9NU1BBSU5UX0NhbnZhc1wiKTtcclxubGV0IGlzTW91c2VEb3duID0gZmFsc2U7XHJcblxyXG5jb25zdCBkcmF3UGl4ZWwgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfTVNQQUlOVF9DYW52YXNcIik7XHJcbiAgICBjb25zdCBrdXJzaXYgPSAwO1xyXG4gICAgY29uc3QgeCA9IG1vdXNlLng7XHJcbiAgICBjb25zdCB5ID0gbW91c2UueTtcclxuICAgIGNvbnN0IHByZXZYID0gcHJldk1vdXNlLnggLSBrdXJzaXY7XHJcbiAgICBjb25zdCBwcmV2WSA9IHByZXZNb3VzZS55ICsga3Vyc2l2O1xyXG4gICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xyXG4gICAgY3R4LmxpbmVUbyhwcmV2WCwgcHJldlkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG59O1xyXG5cclxuYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgICBjb25zdCBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGMsIGUpO1xyXG4gICAgbW91c2UueCA9IG1vdXNlUG9zLng7XHJcbiAgICBtb3VzZS55ID0gbW91c2VQb3MueTtcclxuICAgIGlmIChpc01vdXNlRG93bikgZHJhd1BpeGVsKGUpO1xyXG4gICAgcHJldk1vdXNlLnggPSBtb3VzZVBvcy54O1xyXG4gICAgcHJldk1vdXNlLnkgPSBtb3VzZVBvcy55O1xyXG59KTtcclxuXHJcbmMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgaXNNb3VzZURvd24gPSB0cnVlO1xyXG59KTtcclxuYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZSkgPT4ge1xyXG4gICAgaXNNb3VzZURvd24gPSBmYWxzZTtcclxufSk7XHJcblxyXG5jLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coMTIzKTtcclxuICAgIGZpbGwobW91c2UueCwgbW91c2UueSwgXCJibGFja1wiKTtcclxufSk7XHJcblxyXG5jb25zdCBnZXRNb3VzZVBvcyA9IChjYW52YXMsIGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogZS5jbGllbnRYIC0gY2FudmFzLm9mZnNldExlZnQsXHJcbiAgICAgICAgeTogZS5jbGllbnRZIC0gY2FudmFzLm9mZnNldFRvcCxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBmaWxsID0gKHN0YXJ0WCwgc3RhcnRZLCBmaWxsQ29sb3IpID0+IHtcclxuICAgIGNvbnN0IGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjLndpZHRoLCBjLmhlaWdodCk7XHJcbiAgICBjb25zdCB0YXJnZXRDb2xvciA9IGdldENvbG9yQXRQaXhlbChzdGFydFgsIHN0YXJ0WSwgaW1hZ2VEYXRhKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0Q29sb3IgPT09IGZpbGxDb2xvcikge1xyXG4gICAgICAgIHJldHVybjsgLy8gQXZvaWQgaW5maW5pdGUgbG9vcCBpZiB0aGUgZmlsbCBjb2xvciBpcyBzYW1lIGFzIHRhcmdldCBjb2xvclxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBpeGVsc1RvQ2hlY2sgPSBbW3N0YXJ0WCwgc3RhcnRZXV07XHJcbiAgICB3aGlsZSAocGl4ZWxzVG9DaGVjay5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBbeCwgeV0gPSBwaXhlbHNUb0NoZWNrLnBvcCgpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IGdldENvbG9yQXRQaXhlbCh4LCB5LCBpbWFnZURhdGEpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudENvbG9yID09PSB0YXJnZXRDb2xvcikge1xyXG4gICAgICAgICAgICBkcmF3UGl4ZWwoeCwgeSwgZmlsbENvbG9yKTtcclxuXHJcbiAgICAgICAgICAgIHBpeGVsc1RvQ2hlY2sucHVzaChbeCArIDEsIHldKTtcclxuICAgICAgICAgICAgcGl4ZWxzVG9DaGVjay5wdXNoKFt4IC0gMSwgeV0pO1xyXG4gICAgICAgICAgICBwaXhlbHNUb0NoZWNrLnB1c2goW3gsIHkgKyAxXSk7XHJcbiAgICAgICAgICAgIHBpeGVsc1RvQ2hlY2sucHVzaChbeCwgeSAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb2xvckF0UGl4ZWwgPSAoeCwgeSwgaW1hZ2VEYXRhKSA9PiB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBkYXRhIH0gPSBpbWFnZURhdGE7XHJcbiAgICBjb25zdCBwaXhlbEluZGV4ID0gKHkgKiB3aWR0aCArIHgpICogNDtcclxuICAgIHJldHVybiBgcmdiYSgke2RhdGFbcGl4ZWxJbmRleF19LCAke2RhdGFbcGl4ZWxJbmRleCArIDFdfSwgJHtkYXRhW3BpeGVsSW5kZXggKyAyXX0sICR7XHJcbiAgICAgICAgZGF0YVtwaXhlbEluZGV4ICsgM10gLyAyNTVcclxuICAgIH0pYDtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJwcm9wcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjaGlsZHJlbiIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwiY29uY2F0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJ2YWx1ZSIsInN0YXJ0c1dpdGgiLCJ0b0xvd2VyQ2FzZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJfdHlwZW9mIiwia2V5cyIsInByb3BOYW1lIiwicHJvcFZhbHVlIiwic3R5bGUiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ0b1N0cmluZyIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnQiLCJpc0FycmF5IiwibmVzdGVkQ2hpbGQiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwiV2luZG93Q29udGVudCIsImNsYXNzTmFtZSIsIkljb24iLCJpZCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsdGVyIiwiaXNHcmV5Iiwib25DbGljayIsIldCTkRfUkVRIiwiUk9PVF9QQVRIIiwiRklMRV9QQVRIIiwiUFVCTElDX1BBVEgiLCJBU1NFVFNfUEFUSCIsIklDT05TX1BBVEgiLCJGSUxFU19SRVEiLCJDbG9zZUJhciIsInJlbW92ZVZpZXciLCJ2aWV3IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2aWV3V2lkdGgiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3ViVmlld3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicHJldlZpZXciLCJyZXNpemVWaWV3IiwiaSIsInByZXZWaWV3V2lkdGgiLCJyZW1vdmUiLCJWaWV3Iiwib25Db250ZXh0bWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzQ2xvc2FibGUiLCJzdWJ0cmFjdEZyb20iLCJmcm9tIiwibGltaXQiLCJ1bmRlZmluZWQiLCJyZW1haW5pbmdGcm9tIiwic3VidHJhY3RlZFZhbHVlIiwidG9TdWJ0cmFjdCIsIk1hdGgiLCJhYnMiLCJ4IiwieSIsImNsYW1wIiwibWluIiwibWF4Iiwic3VidHJhY3RFcXVhbFNoYXJlIiwiYXJyYXkiLCJzaGFyZSIsIm5ld1ZhbHVlIiwibmVhcmx5RXF1YWwiLCJudW0xIiwibnVtMiIsImVwc2lsb24iLCJhZGRWaWV3IiwiaW5pdFdpZHRoIiwiY29udGVudCIsInN1YldpbmRvd1dyYXBwZXIiLCJzdWJXaW5kb3dzIiwicmVzaXplSGFuZGxlTGVmdCIsIndpbmRvd1dpZHRoIiwiYm9keSIsImNsaWVudFdpZHRoIiwiZGVzaXJlZFdpZHRoIiwibGFzdFdpbmRvdyIsImxhc3RXaW5kb3dXaWR0aCIsIl9zdWJ0cmFjdEZyb20iLCJuZXdTdWJXaW5kb3ciLCJhcHBlbmQiLCJzdWJXaW5kb3dDdXJyZW50Iiwic3ViV2luZG93TmV4dCIsInNhdmVkV2lkdGhDdXJyZW50Iiwic2F2ZWRXaWR0aE5leHQiLCJoYW5kbGUiLCJ3aWR0aERpZmYiLCJjbGllbnRYIiwib2Zmc2V0TGVmdCIsIm5ld0N1cnJlbnRXaWR0aCIsIm5ld05leHRXaWR0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJWaWV3Q29udGFpbmVyIiwiQXBwT3ZlcnZpZXdMaXN0IiwidGV4dCIsIkFwcE92ZXJ2aWV3SW1hZ2UiLCJBcHBPdmVydmlld0Rlc2NyaXB0aW9uIiwiX3Byb3BzJHdpZHRoIiwibWFyZ2luIiwibWluV2lkdGgiLCJMaW5rIiwiaHJlZiIsIkFwcE92ZXJ2aWV3TGluayIsInRvIiwiQXBwT3ZlcnZpZXciLCJJbmZvQm94IiwiQnV0dG9uIiwiTWFpbkFwcFZpZXciLCJXZWJpbmRvd3NBcHBPdmVydmlldyIsIkJ1dHRvbkJhciIsIl9wcm9wcyRnYXAiLCJnYXAiLCJCdXR0b25CYXJDb250YWluZXIiLCJtYXAiLCJOYXZpZ2F0aW9uQmFyIiwiZG93bmxvYWQiLCJjIiwiaW1hZ2UiLCJ0b0RhdGFVUkwiLCJsaW5rIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsImluaXQiLCJyb290IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwcmV2TW91c2UiLCJtb3VzZSIsImlzTW91c2VEb3duIiwiZHJhd1BpeGVsIiwia3Vyc2l2IiwicHJldlgiLCJwcmV2WSIsImN0eCIsImdldENvbnRleHQiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsIm1vdXNlUG9zIiwiZ2V0TW91c2VQb3MiLCJjb25zb2xlIiwibG9nIiwiZmlsbCIsImNhbnZhcyIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJzdGFydFgiLCJzdGFydFkiLCJmaWxsQ29sb3IiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJ0YXJnZXRDb2xvciIsImdldENvbG9yQXRQaXhlbCIsInBpeGVsc1RvQ2hlY2siLCJfcGl4ZWxzVG9DaGVjayRwb3AiLCJwb3AiLCJfcGl4ZWxzVG9DaGVjayRwb3AyIiwiY3VycmVudENvbG9yIiwicHVzaCIsImRhdGEiLCJwaXhlbEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==