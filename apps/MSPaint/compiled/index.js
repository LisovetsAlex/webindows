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
    className: "Canvas"
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
  var offset = 8;
  var kursiv = 0;
  var x = mouse.x - offset;
  var y = mouse.y - offset;
  var prevX = prevMouse.x - offset - kursiv;
  var prevY = prevMouse.y - offset + kursiv;
  console.log("now: ", x, y);
  console.log("prev: ", prevX, prevY);
  var ctx = c.getContext("2d");
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.moveTo(x, y);
  ctx.lineTo(prevX, prevY);
  ctx.stroke();
};
var getMousePos = function getMousePos(canvas, e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop
  };
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0VBQ3BCeUUsS0FBSyxDQUFDeEUsQ0FBQyxHQUFHOEYsUUFBUSxDQUFDOUYsQ0FBQztFQUNwQixJQUFJeUUsV0FBVyxFQUFFQyxTQUFTLENBQUN2RixDQUFDLENBQUM7RUFDN0JvRixTQUFTLENBQUN4RSxDQUFDLEdBQUcrRixRQUFRLENBQUMvRixDQUFDO0VBQ3hCd0UsU0FBUyxDQUFDdkUsQ0FBQyxHQUFHOEYsUUFBUSxDQUFDOUYsQ0FBQztBQUM1QixDQUFDLENBQUM7QUFFRjhELENBQUMsQ0FBQy9ILGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFDb0QsQ0FBQyxFQUFLO0VBQ25Dc0YsV0FBVyxHQUFHLElBQUk7QUFDdEIsQ0FBQyxDQUFDO0FBQ0ZYLENBQUMsQ0FBQy9ILGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDb0QsQ0FBQyxFQUFLO0VBQ2pDc0YsV0FBVyxHQUFHLEtBQUs7QUFDdkIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vanN4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0J1dHRvbkJhckNvbnRhaW5lci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguY3NzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3gvaW5kZXguY3NzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vTGluay9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudC9pbmRleC5jc3M/ZGYwMSIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9pbmRleC5jc3M/NDNlNSIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0ljb24vaW5kZXguY3NzPzU2MTMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvQ2xvc2VCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvcmVtb3ZlVmlldy5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9WaWV3L2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9hZGRWaWV3LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9pbmRleC5jc3M/YTcyMSIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvQXBwT3ZlcnZpZXdMaXN0L2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9BcHBPdmVydmlld0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9BcHBPdmVydmlld0Rlc2NyaXB0aW9uL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vTGluay9pbmRleC5jc3M/ZWQ0MCIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L0FwcE92ZXJ2aWV3TGlzdC9BcHBPdmVydmlld0xpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5mb0JveC9pbmRleC5jc3M/NGY4YyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24vaW5kZXguY3NzPzYzZmUiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3NyYy9BcHBWaWV3cy9NYWluQXBwVmlldy5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vc3JjL0FwcFZpZXdzL1dlYmluZG93c0FwcE92ZXJ2aWV3LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvQnV0dG9uQmFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvaW5kZXguY3NzPzUzZmMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0J1dHRvbkJhckNvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vc3JjL0FwcFZpZXdzL05hdmlnYXRpb25CYXIuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBjcmVhdGVFbGVtZW50ICovXHJcblxyXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgcHJvcHMsIC4uLmNoaWxkcmVuKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHRhZyA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdGFnKHByb3BzLCAuLi5jaGlsZHJlbik7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICAgIE9iamVjdC5lbnRyaWVzKHByb3BzIHx8IHt9KS5mb3JFYWNoKChbbmFtZSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aChcIm9uXCIpICYmIG5hbWUudG9Mb3dlckNhc2UoKSBpbiB3aW5kb3cpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMiksIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJjbGFzc05hbWVcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJzdHlsZVwiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgocHJvcE5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IHZhbHVlW3Byb3BOYW1lXTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcE5hbWVdID0gcHJvcFZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJkaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZGlzYWJsZWQgPSBCb29sZWFuKHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgIGFwcGVuZENoaWxkKGVsZW1lbnQsIGNoaWxkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuY29uc3QgYXBwZW5kQ2hpbGQgPSAocGFyZW50LCBjaGlsZCkgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSByZXR1cm4gY2hpbGQuZm9yRWFjaCgobmVzdGVkQ2hpbGQpID0+IGFwcGVuZENoaWxkKHBhcmVudCwgbmVzdGVkQ2hpbGQpKTtcclxuICAgIGlmICghY2hpbGQpIHJldHVybjtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZD8ubm9kZVR5cGUgPyBjaGlsZCA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRDaGlsZCB9O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkFwcE92ZXJ2aWV3X19TZWVBbHNvIHtcclxuICAgIG1hcmdpbjogMTRweDtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcblxyXG4uQXBwT3ZlcnZpZXdfX1NlZUFsc29MaXN0IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdEl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFwcE92ZXJ2aWV3X19TZWVBbHNvIHtcXHJcXG4gICAgbWFyZ2luOiAxNHB4O1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdEl0ZW0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkJ1dHRvbkJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDRweCk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXHJcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQsXHJcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0zMDApLFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCAwcHggdmFyKC0tc2hhZG93LTMwMCksIDBweCB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTMwMCk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1Q7OztzR0FHa0c7QUFDdEdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkJ1dHRvbkJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0cHgpO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0LFxcclxcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0zMDApLFxcclxcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IDBweCB2YXIoLS1zaGFkb3ctMzAwKSwgMHB4IHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuVmlld0NvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4NXB4KTtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5WaWV3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4uVmlld1Jlc2l6ZUhhbmRsZUxlZnQge1xyXG4gICAgY3Vyc29yOiBldy1yZXNpemU7XHJcbiAgICBwYWRkaW5nLWlubGluZTogNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLkNsb3NlQmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGdhcDogMXB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsUUFBUTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5WaWV3Q29udGFpbmVyIHtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gODVweCk7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5WaWV3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uVmlld1Jlc2l6ZUhhbmRsZUxlZnQge1xcclxcbiAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDRweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uQ2xvc2VCYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5XaW5kb3dDb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL1dpbmRvd0NvbnRlbnQvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5XaW5kb3dDb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuQnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nLWJsb2NrOiAycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLWlubGluZTogOHB4O1xyXG59XHJcbi5CdXR0b246YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldDtcclxufVxyXG4uQnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmV5LTMwMCk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7NkVBQ3lFO0FBQzdFO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5CdXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDhweDtcXHJcXG59XFxyXFxuLkJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldDtcXHJcXG59XFxyXFxuLkJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyZXktMzAwKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuSWNvbiB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5JY29uIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuSW5mb0JveCB7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy0xMDApO1xyXG4gICAgYm9yZGVyOiB2YXIoLS15ZWxsb3ctMjAwKSAxcHggc29saWQ7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5mb0JveC9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxtQ0FBbUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkluZm9Cb3gge1xcclxcbiAgICBtYXJnaW46IDhweDtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMTAwKTtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS15ZWxsb3ctMjAwKSAxcHggc29saWQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLkxpbms6YWN0aXZlIHtcclxuICAgIGNvbG9yOiBwdXJwbGU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vTGluay9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkxpbmsge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLkxpbms6YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaW5kb3dDb250ZW50KHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiV2luZG93Q29udGVudFwiPntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgIHNyYz17cHJvcHMuc3JjfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiSWNvblwiICsgKHByb3BzLmNsYXNzTmFtZSA/IFwiIFwiICsgcHJvcHMuY2xhc3NOYW1lIDogXCJcIil9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvcHMuaXNHcmV5ID8gXCJncmF5c2NhbGUoMTAwJSlcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59XHJcbiIsImNvbnN0IFdCTkRfUkVRID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuY29uc3QgUk9PVF9QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvZm9sZGVyXCI7XHJcbmNvbnN0IEZJTEVfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L2ZpbGVcIjtcclxuY29uc3QgUFVCTElDX1BBVEggPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9wdWJsaWNcIiArIFwiL3dlYmluZG93cy9wdWJsaWMvXCI7XHJcbmNvbnN0IEFTU0VUU19QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvcHVibGljXCIgKyBcIi93ZWJpbmRvd3MvcHVibGljL0Fzc2V0cy9cIjtcclxuY29uc3QgSUNPTlNfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L3B1YmxpY1wiICsgXCIvd2ViaW5kb3dzL3B1YmxpYy9Bc3NldHMvSWNvbnMvXCI7XHJcbmNvbnN0IEZJTEVTX1JFUSA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L2ZpbGVzL1wiO1xyXG5cclxuZXhwb3J0IHsgUFVCTElDX1BBVEgsIEFTU0VUU19QQVRILCBJQ09OU19QQVRILCBGSUxFX1BBVEgsIFJPT1RfUEFUSCwgRklMRVNfUkVRIH07XHJcbiIsImltcG9ydCBJY29uIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0ljb25cIjtcclxuaW1wb3J0IHsgQVNTRVRTX1BBVEggfSBmcm9tIFwiQHdlYmluZG93cy9jb25uZWN0L2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvc2VCYXIocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDbG9zZUJhclwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5DbC1IYXJkT3V0c2V0U2hhZG93IHdpbkNsLUJHQ29sb3JcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTZweFwiIH19XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbkNsLUhhcmRPdXRzZXRTaGFkb3cgd2luQ2wtQkdDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e0FTU0VUU19QQVRIICsgXCIvSW1nX0J1dHRvbl9DbG9zZS5QTkdcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZVZpZXcoaWQpIHtcclxuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBjb25zdCB2aWV3V2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh2aWV3KS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpO1xyXG4gICAgY29uc3Qgc3ViVmlld3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld1wiKTtcclxuICAgIGxldCBwcmV2VmlldztcclxuICAgIGxldCByZXNpemVWaWV3O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdWJWaWV3c1tpXS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcHJldlZpZXcgPSBzdWJWaWV3c1tpIC0gMV07XHJcbiAgICAgICAgICAgIHJlc2l6ZVZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBWaWV3UmVzaXplSGFuZGxlTGVmdGApW2kgLSAxXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcHJldlZpZXdXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHByZXZWaWV3KS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpO1xyXG4gICAgcHJldlZpZXcuc3R5bGUud2lkdGggPSBwcmV2Vmlld1dpZHRoICsgdmlld1dpZHRoICsgMTIgKyBcInB4XCI7XHJcblxyXG4gICAgaWYgKHJlc2l6ZVZpZXcpIHJlc2l6ZVZpZXcucmVtb3ZlKCk7XHJcbiAgICBpZiAodmlldykgdmlldy5yZW1vdmUoKTtcclxufVxyXG4iLCJpbXBvcnQgQ2xvc2VCYXIgZnJvbSBcIi4uL0Nsb3NlQmFyXCI7XHJcbmltcG9ydCByZW1vdmVWaWV3IGZyb20gXCIuLi9yZW1vdmVWaWV3XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3KHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luQ2wtSGFyZEluc2V0U2hhZG93IFZpZXdcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogcHJvcHMud2lkdGggfX1cclxuICAgICAgICAgICAgb25Db250ZXh0bWVudT17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pc0Nsb3NhYmxlICYmIDxDbG9zZUJhciBvbkNsaWNrPXsoKSA9PiByZW1vdmVWaWV3KHByb3BzLmlkKX0gLz59XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFN1YnRyYWN0cyBhIHZhbHVlIGZyb20gYW5vdGhlciB1bnRpbCBsaW1pdC5cclxuICogSWYgbGltaXQgaXMgbWV0LCB0aGVuIHN1YnRyYWN0IGZyb20gdmFsdWUgdGhlIHJlc3QuXHJcbiAqIERlZmF1bHQgbGltaXQgaXMgMTUwXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzdWJ0cmFjdC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGZyb20gLSBUaGUgdmFsdWUgdG8gc3VidHJhY3QgZnJvbS5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtsaW1pdD0xNTBdIC0gVGhlIGxpbWl0IHRvIHN1YnRyYWN0IGZyb20uXHJcbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyB4IGFuZCB5IHJlcHJlc2VudGluZyB0aGUgc3VidHJhY3RlZCB2YWx1ZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdWJ0cmFjdEZyb20odmFsdWUsIGZyb20sIGxpbWl0ID0gMTUwKSB7XHJcbiAgICBsZXQgcmVtYWluaW5nRnJvbSA9IGZyb20gLSB2YWx1ZTtcclxuICAgIGxldCBzdWJ0cmFjdGVkVmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAocmVtYWluaW5nRnJvbSA8IGxpbWl0KSB7XHJcbiAgICAgICAgY29uc3QgdG9TdWJ0cmFjdCA9IHZhbHVlIC0gTWF0aC5hYnMobGltaXQgLSBmcm9tKTtcclxuICAgICAgICByZW1haW5pbmdGcm9tID0gbGltaXQ7XHJcbiAgICAgICAgc3VidHJhY3RlZFZhbHVlID0gdmFsdWUgLSB0b1N1YnRyYWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHg6IHN1YnRyYWN0ZWRWYWx1ZSwgeTogcmVtYWluaW5nRnJvbSB9O1xyXG59XHJcblxyXG4vKipcclxuICogQ2xhbXBzIGEgdmFsdWUgYmV0d2VlbiBhbiB1cHBlciBhbmQgbG93ZXIgYm91bmQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjbGFtcC5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBsb3dlciBib3VuZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSB1cHBlciBib3VuZC5cclxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgY2xhbXBlZCB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xyXG59XHJcblxyXG4vKipcclxuICogU3VidHJhY3RzIGFuIGVxdWFsIHNoYXJlIGZyb20gZWFjaCBlbGVtZW50IGluIHRoZSBhcnJheSBiYXNlZCBvbiB0aGUgdG90YWwgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB0b3RhbCB2YWx1ZSB0byBzcGxpdCBhbW9uZyB0aGUgZWxlbWVudHMuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IG9mIHZhbHVlcyB0byBzdWJ0cmFjdCBmcm9tLlxyXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG1vZGlmaWVkIGFycmF5IGFmdGVyIHN1YnRyYWN0aW5nIHRoZSBlcXVhbCBzaGFyZSBmcm9tIGVhY2ggZWxlbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIHN1YnRyYWN0RXF1YWxTaGFyZSh2YWx1ZSwgYXJyYXkpIHtcclxuICAgIGlmIChhcnJheS5sZW5ndGggPT0gMCkgcmV0dXJuIGFycmF5O1xyXG4gICAgY29uc3Qgc2hhcmUgPSB2YWx1ZSAvIGFycmF5Lmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJyYXlbaV0gLSBzaGFyZTtcclxuICAgICAgICBhcnJheVtpXSA9IE1hdGgubWF4KG5ld1ZhbHVlLCAxNTApO1xyXG4gICAgICAgIHZhbHVlIC09IGFycmF5W2ldIC0gbmV3VmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGlmIHR3byBudW1iZXJzIGFyZSBuZWFybHkgZXF1YWwgd2l0aGluIGEgc3BlY2lmaWVkIGVwc2lsb24gdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW0xIC0gVGhlIGZpcnN0IG51bWJlciB0byBjb21wYXJlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtMiAtIFRoZSBzZWNvbmQgbnVtYmVyIHRvIGNvbXBhcmUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZXBzaWxvbj0xXSAtIFRoZSBhY2NlcHRhYmxlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbnVtYmVycy5cclxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgbnVtYmVycyBhcmUgbmVhcmx5IGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBuZWFybHlFcXVhbChudW0xLCBudW0yLCBlcHNpbG9uID0gMSkge1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKG51bTEgLSBudW0yKSA8IGVwc2lsb247XHJcbn1cclxuXHJcbmV4cG9ydCB7IHN1YnRyYWN0RnJvbSwgY2xhbXAsIHN1YnRyYWN0RXF1YWxTaGFyZSwgbmVhcmx5RXF1YWwgfTtcclxuIiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xyXG5pbXBvcnQgeyBzdWJ0cmFjdEZyb20sIGNsYW1wIH0gZnJvbSBcIi4uLy4uL3V0aWxzL21hdGhcIjtcclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBuZXcgdmlldyB0byB0aGUgdmlldyBjb250YWluZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbml0V2lkdGggLSBUaGUgaW5pdGlhbCB3aWR0aCBvZiB0aGUgbmV3IHZpZXcuXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnQgLSBUaGUgY29udGVudCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIG5ldyB2aWV3LlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ2xvc2FibGUgLSBJbmNsdWRlIGEgYnV0dG9uIHRvIGNsb3NlIHRoZSB2aWV3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVmlldyhpbml0V2lkdGgsIGNvbnRlbnQsIGlzQ2xvc2FibGUgPSB0cnVlKSB7XHJcbiAgICBjb25zdCBzdWJXaW5kb3dXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdDb250YWluZXJcIilbMF07XHJcbiAgICBjb25zdCBzdWJXaW5kb3dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICBjb25zdCByZXNpemVIYW5kbGVMZWZ0ID0gPGRpdiBjbGFzc05hbWU9XCJWaWV3UmVzaXplSGFuZGxlTGVmdFwiPjwvZGl2PjtcclxuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgIGxldCBkZXNpcmVkV2lkdGggPSAocGFyc2VJbnQoaW5pdFdpZHRoKSAqIHdpbmRvd1dpZHRoKSAvIDEwMDtcclxuICAgIGlmIChzdWJXaW5kb3dzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zdCBsYXN0V2luZG93ID0gc3ViV2luZG93c1tzdWJXaW5kb3dzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGNvbnN0IGxhc3RXaW5kb3dXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGxhc3RXaW5kb3cpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKSk7XHJcbiAgICAgICAgaWYgKGxhc3RXaW5kb3dXaWR0aCA8IDE3NSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gc3VidHJhY3RGcm9tKGRlc2lyZWRXaWR0aCwgbGFzdFdpbmRvd1dpZHRoKTtcclxuICAgICAgICBkZXNpcmVkV2lkdGggPSB4O1xyXG4gICAgICAgIGxhc3RXaW5kb3cuc3R5bGUud2lkdGggPSB5IC0gNCArIFwicHhcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IGlkID0gYGlkX1ZpZXdfJHtzdWJXaW5kb3dzLmxlbmd0aCArIDF9YDtcclxuICAgIGNvbnN0IG5ld1N1YldpbmRvdyA9IDxWaWV3IGlkPXtpZH0gd2lkdGg9e2Rlc2lyZWRXaWR0aCAtIDggKyBcInB4XCJ9IGlzQ2xvc2FibGU9e2lzQ2xvc2FibGV9PjwvVmlldz47XHJcblxyXG4gICAgaWYgKHN1YldpbmRvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHN1YldpbmRvd1dyYXBwZXIuYXBwZW5kKHJlc2l6ZUhhbmRsZUxlZnQpO1xyXG4gICAgfVxyXG4gICAgbmV3U3ViV2luZG93LmFwcGVuZChjb250ZW50KTtcclxuICAgIHN1YldpbmRvd1dyYXBwZXIuYXBwZW5kKG5ld1N1YldpbmRvdyk7XHJcblxyXG4gICAgcmVzaXplSGFuZGxlTGVmdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzdWJWaWV3cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJWaWV3XCIpO1xyXG4gICAgICAgIGxldCBzdWJXaW5kb3dDdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlkX1ZpZXdfJHtzdWJXaW5kb3dzLmxlbmd0aCAtIDF9YCk7XHJcbiAgICAgICAgbGV0IHN1YldpbmRvd05leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaWRfVmlld18ke3N1YldpbmRvd3MubGVuZ3RofWApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHN1YlZpZXdzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgc3ViV2luZG93Q3VycmVudCA9IHN1YlZpZXdzW2kgLSAxXTtcclxuICAgICAgICAgICAgICAgIHN1YldpbmRvd05leHQgPSBzdWJWaWV3c1tpXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNhdmVkV2lkdGhDdXJyZW50ID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1YldpbmRvd0N1cnJlbnQpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWRXaWR0aE5leHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJXaW5kb3dOZXh0KS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aERpZmYgPSBlLmNsaWVudFggLSAoc3ViV2luZG93Q3VycmVudC5vZmZzZXRMZWZ0ICsgc2F2ZWRXaWR0aEN1cnJlbnQpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdDdXJyZW50V2lkdGggPSBjbGFtcChcclxuICAgICAgICAgICAgICAgIHNhdmVkV2lkdGhDdXJyZW50ICsgd2lkdGhEaWZmLFxyXG4gICAgICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgICAgICBzYXZlZFdpZHRoQ3VycmVudCArIHNhdmVkV2lkdGhOZXh0IC0gNTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3TmV4dFdpZHRoID0gY2xhbXAoXHJcbiAgICAgICAgICAgICAgICBzYXZlZFdpZHRoTmV4dCAtIHdpZHRoRGlmZixcclxuICAgICAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICAgICAgc2F2ZWRXaWR0aEN1cnJlbnQgKyBzYXZlZFdpZHRoTmV4dCAtIDUwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN1YldpbmRvd0N1cnJlbnQuc3R5bGUud2lkdGggPSBuZXdDdXJyZW50V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHN1YldpbmRvd05leHQuc3R5bGUud2lkdGggPSBuZXdOZXh0V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xyXG5pbXBvcnQgYWRkVmlldyBmcm9tIFwiLi9hZGRWaWV3XCI7XHJcblxyXG5mdW5jdGlvbiBWaWV3Q29udGFpbmVyKHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiVmlld0NvbnRhaW5lclwiPntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCB7IFZpZXcsIGFkZFZpZXcsIFZpZXdDb250YWluZXIgfTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwT3ZlcnZpZXdMaXN0KHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcE92ZXJ2aWV3X19TZWVBbHNvXCI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIgfX0+e3Byb3BzLnRleHR9PC9wPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiQXBwT3ZlcnZpZXdfX1NlZUFsc29MaXN0XCI+e2NoaWxkcmVufTwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcE92ZXJ2aWV3SW1hZ2UocHJvcHMpIHtcclxuICAgIHJldHVybiA8aW1nIHNyYz17cHJvcHMuc3JjfSBzdHlsZT17eyB3aWR0aDogXCIyNTBweFwiIH19IC8+O1xyXG59XHJcblxyXG4vL0FTU0VUU19QQVRIICsgXCJGaWxlRXhwbG9yZXIucG5nXCJcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIxNHB4XCIsIG1pbldpZHRoOiBcIjE1MHB4XCIsIHdpZHRoOiBwcm9wcy53aWR0aCA/PyBcIjEwMCVcIiB9fT57cHJvcHMudGV4dH08L3A+O1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiTGlua1wiXHJcbiAgICAgICAgICAgIGhyZWY9e3Byb3BzLmhyZWZ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgICAgICA8L2E+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcE92ZXJ2aWV3TGluayhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiQXBwT3ZlcnZpZXdfX1NlZUFsc29MaXN0SXRlbVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy50b30gdGV4dD17cHJvcHMudGV4dH0gb25DbGljaz17cHJvcHMub25DbGlja30gLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgQXBwT3ZlcnZpZXdMaXN0IGZyb20gXCIuL0FwcE92ZXJ2aWV3TGlzdFwiO1xyXG5pbXBvcnQgQXBwT3ZlcnZpZXdJbWFnZSBmcm9tIFwiLi9BcHBPdmVydmlld0ltYWdlXCI7XHJcbmltcG9ydCBBcHBPdmVydmlld0Rlc2NyaXB0aW9uIGZyb20gXCIuL0FwcE92ZXJ2aWV3RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3TGluayBmcm9tIFwiLi9BcHBPdmVydmlld0xpc3QvQXBwT3ZlcnZpZXdMaW5rXCI7XHJcblxyXG5mdW5jdGlvbiBBcHBPdmVydmlldyhwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIkFwcE92ZXJ2aWV3XCI+e2NoaWxkcmVufTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IHsgQXBwT3ZlcnZpZXdMaXN0LCBBcHBPdmVydmlld0ltYWdlLCBBcHBPdmVydmlld0Rlc2NyaXB0aW9uLCBBcHBPdmVydmlldywgQXBwT3ZlcnZpZXdMaW5rIH07XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvQm94KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3Byb3BzLmlkfSBjbGFzc05hbWU9XCJJbmZvQm94XCIgc3R5bGU9e3sgd2lkdGg6IHByb3BzLndpZHRoIH19PlxyXG4gICAgICAgICAgICA8cD57cHJvcHMudGV4dH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvblwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluQXBwVmlldygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cImlkX01TUEFJTlRfQ2FudmFzXCIgY2xhc3NOYW1lPVwiQ2FudmFzXCI+PC9jYW52YXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBBcHBPdmVydmlldyxcclxuICAgIEFwcE92ZXJ2aWV3TGluayxcclxuICAgIEFwcE92ZXJ2aWV3TGlzdCxcclxuICAgIEFwcE92ZXJ2aWV3RGVzY3JpcHRpb24sXHJcbiAgICBBcHBPdmVydmlld0ltYWdlLFxyXG59IGZyb20gXCJAd2ViaW5kb3dzL0FwcE92ZXJ2aWV3XCI7XHJcbmltcG9ydCB7IEFTU0VUU19QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuaW1wb3J0IEluZm9Cb3ggZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5mb0JveFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBhZGRWaWV3IH0gZnJvbSBcIkB3ZWJpbmRvd3MvVmlld3NcIjtcclxuaW1wb3J0IE1haW5BcHBWaWV3IGZyb20gXCIuL01haW5BcHBWaWV3XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWJpbmRvd3NBcHBPdmVydmlldygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcE92ZXJ2aWV3PlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdJbWFnZSBzcmM9e2Ake0FTU0VUU19QQVRIfS9NU1BhaW50LnBuZ2B9IC8+XHJcbiAgICAgICAgICAgIDxBcHBPdmVydmlld0Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1MHB4XCJcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJGYWtlIE1TIFBhaW50LiBTaG91bGQgYWN0dWFsbHkgbm90IGJlIGNhbGxlZCBNUyBQYWludCBhbmQganVzdCBQYWludC5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5mb0JveCB0ZXh0PVwiUGxlYXNlLCBkcmF3IG9ubHkgYXBwcm9wcmlhdGUgaW1hZ2VzIVwiIHdpZHRoPVwiMjUwcHhcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiTkVXXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRWaWV3KFwiNzUlXCIsIDxNYWluQXBwVmlldyAvPik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQXBwT3ZlcnZpZXc+XHJcbiAgICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkJhcihwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCdXR0b25CYXJcIiBzdHlsZT17eyBnYXA6IHByb3BzPy5nYXAgPz8gXCI0cHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1EaXZpZGVyQmlnVmVydGljYWxcIiBzdHlsZT1cImhlaWdodDogMjJweDsgbWFyZ2luLWJsb2NrOiAycHhcIj48L2Rpdj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgQnV0dG9uQmFyIGZyb20gXCIuL0J1dHRvbkJhclwiO1xyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gQnV0dG9uQmFyQ29udGFpbmVyKHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbkNsLUhhcmRJbnNldFNoYWRvd1wiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+e2NoaWxkfTwvZGl2PjtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBCdXR0b25CYXIsIEJ1dHRvbkJhckNvbnRhaW5lciB9O1xyXG4iLCJpbXBvcnQgeyBCdXR0b25CYXJDb250YWluZXIsIEJ1dHRvbkJhciB9IGZyb20gXCJAd2ViaW5kb3dzL0J1dHRvbkJhcnNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb25CYXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25CYXJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJGaWxlXCIgZGlzYWJsZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiRWRpdFwiIGRpc2FibGVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlZpZXdcIiBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkV4dHJhXCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCI/XCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFyPlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiRG93bmxvYWRcIiBkaXNhYmxlZD17ZmFsc2V9IG9uQ2xpY2s9e2Rvd25sb2FkfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiSW1wb3J0XCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFyPlxyXG4gICAgICAgIDwvQnV0dG9uQmFyQ29udGFpbmVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG93bmxvYWQoKSB7XHJcbiAgICBjb25zdCBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9NU1BBSU5UX0NhbnZhc1wiKTtcclxuICAgIGxldCBpbWFnZSA9IGMudG9EYXRhVVJMKFwiaW1hZ2UvanBnXCIpO1xyXG5cclxuICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBsaW5rLmRvd25sb2FkID0gXCJjYW52YXNfaW1hZ2UuanBnXCI7XHJcbiAgICBsaW5rLmhyZWYgPSBpbWFnZTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG59XHJcbiIsImltcG9ydCBXaW5kb3dDb250ZW50IGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudFwiO1xyXG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyLCBhZGRWaWV3IH0gZnJvbSBcIkB3ZWJpbmRvd3MvVmlld3NcIjtcclxuaW1wb3J0IFdlYmluZG93c0FwcE92ZXJ2aWV3IGZyb20gXCIuL0FwcFZpZXdzL1dlYmluZG93c0FwcE92ZXJ2aWV3XCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gXCIuL0FwcFZpZXdzL05hdmlnYXRpb25CYXJcIjtcclxuaW1wb3J0IE1haW5BcHBWaWV3IGZyb20gXCIuL0FwcFZpZXdzL01haW5BcHBWaWV3XCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcclxuXHJcbiAgICByb290LmFwcGVuZChcclxuICAgICAgICA8V2luZG93Q29udGVudD5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgLz5cclxuICAgICAgICAgICAgPFZpZXdDb250YWluZXIgLz5cclxuICAgICAgICA8L1dpbmRvd0NvbnRlbnQ+XHJcbiAgICApO1xyXG5cclxuICAgIGFkZFZpZXcoXCIyNSVcIiwgPFdlYmluZG93c0FwcE92ZXJ2aWV3IC8+LCBmYWxzZSk7XHJcbiAgICBhZGRWaWV3KFwiNzUlXCIsIDxNYWluQXBwVmlldyAvPiwgZmFsc2UpO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5pbml0KCk7XHJcblxyXG5sZXQgcHJldk1vdXNlID0geyB4OiAwLCB5OiAwIH07XHJcbmxldCBtb3VzZSA9IHsgeDogMCwgeTogMCB9O1xyXG5jb25zdCBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9NU1BBSU5UX0NhbnZhc1wiKTtcclxubGV0IGlzTW91c2VEb3duID0gZmFsc2U7XHJcblxyXG5jb25zdCBkcmF3UGl4ZWwgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfTVNQQUlOVF9DYW52YXNcIik7XHJcbiAgICBjb25zdCBvZmZzZXQgPSA4O1xyXG4gICAgY29uc3Qga3Vyc2l2ID0gMDtcclxuICAgIGNvbnN0IHggPSBtb3VzZS54IC0gb2Zmc2V0O1xyXG4gICAgY29uc3QgeSA9IG1vdXNlLnkgLSBvZmZzZXQ7XHJcbiAgICBjb25zdCBwcmV2WCA9IHByZXZNb3VzZS54IC0gb2Zmc2V0IC0ga3Vyc2l2O1xyXG4gICAgY29uc3QgcHJldlkgPSBwcmV2TW91c2UueSAtIG9mZnNldCArIGt1cnNpdjtcclxuICAgIGNvbnNvbGUubG9nKFwibm93OiBcIiwgeCwgeSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInByZXY6IFwiLCBwcmV2WCwgcHJldlkpO1xyXG4gICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xyXG4gICAgY3R4LmxpbmVUbyhwcmV2WCwgcHJldlkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TW91c2VQb3MgPSAoY2FudmFzLCBlKSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBlLmNsaWVudFggLSBjYW52YXMub2Zmc2V0TGVmdCxcclxuICAgICAgICB5OiBlLmNsaWVudFkgLSBjYW52YXMub2Zmc2V0VG9wLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgbW91c2VQb3MgPSBnZXRNb3VzZVBvcyhjLCBlKTtcclxuICAgIG1vdXNlLnggPSBtb3VzZVBvcy54O1xyXG4gICAgbW91c2UueSA9IG1vdXNlUG9zLnk7XHJcbiAgICBpZiAoaXNNb3VzZURvd24pIGRyYXdQaXhlbChlKTtcclxuICAgIHByZXZNb3VzZS54ID0gbW91c2VQb3MueDtcclxuICAgIHByZXZNb3VzZS55ID0gbW91c2VQb3MueTtcclxufSk7XHJcblxyXG5jLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgIGlzTW91c2VEb3duID0gdHJ1ZTtcclxufSk7XHJcbmMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcclxuICAgIGlzTW91c2VEb3duID0gZmFsc2U7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsInRhZyIsInByb3BzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNoaWxkcmVuIiwiQXJyYXkiLCJfa2V5IiwiYXBwbHkiLCJjb25jYXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsIl9yZWYiLCJfcmVmMiIsIl9zbGljZWRUb0FycmF5IiwibmFtZSIsInZhbHVlIiwic3RhcnRzV2l0aCIsInRvTG93ZXJDYXNlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1YnN0cmluZyIsInNldEF0dHJpYnV0ZSIsIl90eXBlb2YiLCJrZXlzIiwicHJvcE5hbWUiLCJwcm9wVmFsdWUiLCJzdHlsZSIsImRpc2FibGVkIiwiQm9vbGVhbiIsInRvU3RyaW5nIiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsInBhcmVudCIsImlzQXJyYXkiLCJuZXN0ZWRDaGlsZCIsIm5vZGVUeXBlIiwiY3JlYXRlVGV4dE5vZGUiLCJXaW5kb3dDb250ZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImlkIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJmaWx0ZXIiLCJpc0dyZXkiLCJvbkNsaWNrIiwiV0JORF9SRVEiLCJST09UX1BBVEgiLCJGSUxFX1BBVEgiLCJQVUJMSUNfUEFUSCIsIkFTU0VUU19QQVRIIiwiSUNPTlNfUEFUSCIsIkZJTEVTX1JFUSIsIkNsb3NlQmFyIiwicmVtb3ZlVmlldyIsInZpZXciLCJnZXRFbGVtZW50QnlJZCIsInZpZXdXaWR0aCIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJzdWJWaWV3cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcmV2VmlldyIsInJlc2l6ZVZpZXciLCJpIiwicHJldlZpZXdXaWR0aCIsInJlbW92ZSIsIlZpZXciLCJvbkNvbnRleHRtZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNDbG9zYWJsZSIsInN1YnRyYWN0RnJvbSIsImZyb20iLCJsaW1pdCIsInVuZGVmaW5lZCIsInJlbWFpbmluZ0Zyb20iLCJzdWJ0cmFjdGVkVmFsdWUiLCJ0b1N1YnRyYWN0IiwiTWF0aCIsImFicyIsIngiLCJ5IiwiY2xhbXAiLCJtaW4iLCJtYXgiLCJzdWJ0cmFjdEVxdWFsU2hhcmUiLCJhcnJheSIsInNoYXJlIiwibmV3VmFsdWUiLCJuZWFybHlFcXVhbCIsIm51bTEiLCJudW0yIiwiZXBzaWxvbiIsImFkZFZpZXciLCJpbml0V2lkdGgiLCJjb250ZW50Iiwic3ViV2luZG93V3JhcHBlciIsInN1YldpbmRvd3MiLCJyZXNpemVIYW5kbGVMZWZ0Iiwid2luZG93V2lkdGgiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJkZXNpcmVkV2lkdGgiLCJsYXN0V2luZG93IiwibGFzdFdpbmRvd1dpZHRoIiwiX3N1YnRyYWN0RnJvbSIsIm5ld1N1YldpbmRvdyIsImFwcGVuZCIsInN1YldpbmRvd0N1cnJlbnQiLCJzdWJXaW5kb3dOZXh0Iiwic2F2ZWRXaWR0aEN1cnJlbnQiLCJzYXZlZFdpZHRoTmV4dCIsImhhbmRsZSIsIndpZHRoRGlmZiIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwibmV3Q3VycmVudFdpZHRoIiwibmV3TmV4dFdpZHRoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlZpZXdDb250YWluZXIiLCJBcHBPdmVydmlld0xpc3QiLCJ0ZXh0IiwiQXBwT3ZlcnZpZXdJbWFnZSIsIkFwcE92ZXJ2aWV3RGVzY3JpcHRpb24iLCJfcHJvcHMkd2lkdGgiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIkxpbmsiLCJocmVmIiwiQXBwT3ZlcnZpZXdMaW5rIiwidG8iLCJBcHBPdmVydmlldyIsIkluZm9Cb3giLCJCdXR0b24iLCJNYWluQXBwVmlldyIsIldlYmluZG93c0FwcE92ZXJ2aWV3IiwiQnV0dG9uQmFyIiwiX3Byb3BzJGdhcCIsImdhcCIsIkJ1dHRvbkJhckNvbnRhaW5lciIsIm1hcCIsIk5hdmlnYXRpb25CYXIiLCJkb3dubG9hZCIsImMiLCJpbWFnZSIsInRvRGF0YVVSTCIsImxpbmsiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiaW5pdCIsInJvb3QiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInByZXZNb3VzZSIsIm1vdXNlIiwiaXNNb3VzZURvd24iLCJkcmF3UGl4ZWwiLCJvZmZzZXQiLCJrdXJzaXYiLCJwcmV2WCIsInByZXZZIiwiY29uc29sZSIsImxvZyIsImN0eCIsImdldENvbnRleHQiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImdldE1vdXNlUG9zIiwiY2FudmFzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJtb3VzZVBvcyJdLCJzb3VyY2VSb290IjoiIn0=