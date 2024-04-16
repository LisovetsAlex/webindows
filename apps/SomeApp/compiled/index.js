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
___CSS_LOADER_EXPORT___.push([module.id, `.Input {
    color: var(--black);
    font-family: var(--font-fat);
    border: 0;
    padding-inline: 4px;
    padding-block: 2px;
    background-color: var(--white);
    box-shadow: var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-100) inset,
        var(--border-radius) var(--border-radius) 0px var(--shadow-200) inset,
        calc(var(--border-radiusn) * 2) calc(var(--border-radiusn) * 2) 0px var(--grey-200) inset,
        calc(var(--border-radius) * 2) calc(var(--border-radius) * 2) 0px var(--shadow-300) inset;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/Link/index.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4BAA4B;IAC5B,SAAS;IACT,mBAAmB;IACnB,kBAAkB;IAClB,8BAA8B;IAC9B;;;iGAG6F;AACjG","sourcesContent":[".Input {\r\n    color: var(--black);\r\n    font-family: var(--font-fat);\r\n    border: 0;\r\n    padding-inline: 4px;\r\n    padding-block: 2px;\r\n    background-color: var(--white);\r\n    box-shadow: var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-100) inset,\r\n        var(--border-radius) var(--border-radius) 0px var(--shadow-200) inset,\r\n        calc(var(--border-radiusn) * 2) calc(var(--border-radiusn) * 2) 0px var(--grey-200) inset,\r\n        calc(var(--border-radius) * 2) calc(var(--border-radius) * 2) 0px var(--shadow-300) inset;\r\n}\r\n"],"sourceRoot":""}]);
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

/**
 * Adds an equal share to each element in the array based on the value.
 *
 * @param {number} value - The total value to split among the elements.
 * @param {Array} array - The array of values to add to.
 * @return {Array} The modified array.
 */
function spreadValueAcrossArray(value, arr) {
  var length = arr.length;
  if (length === 0) return arr;
  var equalValue = value / length;
  var spreadArray = arr.map(function (num) {
    return num + equalValue;
  });
  return spreadArray;
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
;// CONCATENATED MODULE: ./webindows/connect/WebindowsMessageReceiver.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var WebindowsMessageReceiver = /*#__PURE__*/function () {
  function WebindowsMessageReceiver() {
    _classCallCheck(this, WebindowsMessageReceiver);
  }
  return _createClass(WebindowsMessageReceiver, [{
    key: "onWindowResize",
    value: function onWindowResize(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_resize") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowResizeStart",
    value: function onWindowResizeStart(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_resize_start") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowResizeEnd",
    value: function onWindowResizeEnd(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_resize_end") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowBeforeExpand",
    value: function onWindowBeforeExpand(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_before_expand") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowExpand",
    value: function onWindowExpand(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_expand") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowBeforeUnexpand",
    value: function onWindowBeforeUnexpand(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_before_unexpand") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowUnexpand",
    value: function onWindowUnexpand(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_unexpand") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowOpen",
    value: function onWindowOpen(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_open") {
          callback(e.data);
        }
      });
    }
  }, {
    key: "onWindowClose",
    value: function onWindowClose(callback) {
      window.addEventListener("message", function (e) {
        if (e.data.event == "window_close") {
          callback(e.data);
        }
      });
    }
  }]);
}();
var windowEvents = new WebindowsMessageReceiver();
/* harmony default export */ const connect_WebindowsMessageReceiver = (windowEvents);
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
var windowWidthStart = 0;
var savedWidths = [];
connect_WebindowsMessageReceiver.onWindowBeforeExpand(function (data) {
  saveViewWidths(data);
});
connect_WebindowsMessageReceiver.onWindowBeforeUnexpand(function (data) {
  saveViewWidths(data);
});
connect_WebindowsMessageReceiver.onWindowResizeStart(function (data) {
  saveViewWidths(data);
});
connect_WebindowsMessageReceiver.onWindowResizeEnd(function () {
  clearViewWidths();
});
connect_WebindowsMessageReceiver.onWindowResize(function (data) {
  adjustViewSizes(data);
});
connect_WebindowsMessageReceiver.onWindowExpand(function (data) {
  adjustViewSizes(data);
  clearViewWidths();
});
connect_WebindowsMessageReceiver.onWindowUnexpand(function (data) {
  adjustViewSizes(data);
  clearViewWidths();
});
function clearViewWidths() {
  windowWidthStart = 0;
  savedWidths = [];
}
function saveViewWidths(data) {
  windowWidthStart = data.windowSize.width;
  var subViews = document.getElementsByClassName("View");
  for (var i = 0; i < subViews.length; i++) {
    savedWidths.push(parseInt(window.getComputedStyle(subViews[i]).getPropertyValue("width")));
  }
}
function adjustViewSizes(data) {
  var windowWidth = data.windowSize.width;
  var subViews = document.getElementsByClassName("View");
  var newWidths = [];
  for (var i = 0; i < subViews.length; i++) {
    var currentWidth = savedWidths[i];
    var currentWidthPrec = currentWidth / windowWidthStart;
    var newWidth = windowWidth * currentWidthPrec;
    newWidths.push(newWidth);
  }
  var diff = windowWidth - newWidths.reduce(function (a, b) {
    return a + b;
  }, 0);
  var adjustedWidths = spreadValueAcrossArray(diff, newWidths);
  for (var _i = 0; _i < subViews.length; _i++) {
    subViews[_i].style.width = adjustedWidths[_i] - 8 + "px";
    if (_i == subViews.length - 1) subViews[_i].style.width = adjustedWidths[_i] - 4 * (_i + 1) + "px";
  }
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
  return AppOverviewDescription_createElement("p", {
    style: {
      margin: "14px",
      minWidth: "150px"
    }
  }, props.text);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/Link/index.css
var Link = __webpack_require__(53);
;// CONCATENATED MODULE: ./webindows/components/common/Link/index.css

      
      
      
      
      
      
      
      
      

var Link_options = {};

Link_options.styleTagTransform = (styleTagTransform_default());
Link_options.setAttributes = (setAttributesWithoutAttributes_default());

      Link_options.insert = insertBySelector_default().bind(null, "head");
    
Link_options.domAPI = (styleDomAPI_default());
Link_options.insertStyleElement = (insertStyleElement_default());

var Link_update = injectStylesIntoStyleTag_default()(Link/* default */.A, Link_options);




       /* harmony default export */ const common_Link = (Link/* default */.A && Link/* default */.A.locals ? Link/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/Link/index.js
/* provided dependency */ var Link_createElement = __webpack_require__(153)["n"];

function Link_Link(props) {
  return Link_createElement("a", {
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
  }, AppOverviewLink_createElement(Link_Link, {
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
    className: "InfoBox",
    style: {
      width: props.width
    },
    id: props.id
  }, InfoBox_createElement("p", null, props.text));
}
;// CONCATENATED MODULE: ./src/AppViews/WebindowsAppOverview.js
/* provided dependency */ var WebindowsAppOverview_createElement = __webpack_require__(153)["n"];



function WebindowsAppOverview() {
  return WebindowsAppOverview_createElement(AppOverview_AppOverview, null, WebindowsAppOverview_createElement(AppOverviewImage, {
    src: "".concat(ASSETS_PATH, "/WebindowsApp.png")
  }), WebindowsAppOverview_createElement(AppOverviewDescription, {
    text: "This is a template for a Webindows app."
  }), WebindowsAppOverview_createElement(InfoBox_InfoBox, {
    text: "Click with RMB to create extra views!",
    width: "250px"
  }), WebindowsAppOverview_createElement(AppOverviewList, {
    text: "You can do:"
  }, WebindowsAppOverview_createElement(AppOverviewLink, {
    text: "this"
  }), WebindowsAppOverview_createElement(AppOverviewLink, {
    text: "that"
  }), WebindowsAppOverview_createElement(AppOverviewLink, {
    text: "everything"
  })));
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
    className: "Button",
    disabled: props.disabled,
    onClick: props.onClick
  }, props.text);
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
  })));
}
;// CONCATENATED MODULE: ./src/AppViews/MainAppView.js
/* provided dependency */ var MainAppView_createElement = __webpack_require__(153)["n"];


function MainAppView() {
  var count = 0;
  return MainAppView_createElement("div", null, MainAppView_createElement("h1", null, "Main App View"), MainAppView_createElement("p", null, "This is the main app view!"), MainAppView_createElement(InfoBox_InfoBox, {
    id: "count",
    text: count,
    width: "100px"
  }), MainAppView_createElement(Button_Button, {
    text: "Count up!",
    onClick: function onClick() {
      document.getElementById("count").innerHTML = ++count;
    }
  }), MainAppView_createElement(Button_Button, {
    text: "Count down!",
    onClick: function onClick() {
      document.getElementById("count").innerHTML = --count;
    }
  }));
}
;// CONCATENATED MODULE: ./src/AppViews/AnotherView.js
/* provided dependency */ var AnotherView_createElement = __webpack_require__(153)["n"];

function AnotherView_MainAppView() {
  return AnotherView_createElement("div", null, AnotherView_createElement("h1", null, "This is a temporary view!"), AnotherView_createElement("p", null, "You can close it."), AnotherView_createElement("img", {
    src: ASSETS_PATH + "/200w.gif",
    style: {
      width: "250px",
      display: "block",
      margin: "auto"
    }
  }));
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
  addView("25%", src_createElement(AnotherView_MainAppView, null));
});
init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQUE7SUFDSThDLEdBQUcsRUFBRVUsV0FBVyxHQUFHLFdBQVk7SUFDL0J6QixLQUFLLEVBQUU7TUFBRWdCLEtBQUssRUFBRSxPQUFPO01BQUU4SSxPQUFPLEVBQUUsT0FBTztNQUFFbEIsTUFBTSxFQUFFO0lBQU87RUFBRSxDQUMvRCxDQUNBLENBQUM7QUFFZDs7O0FDYmdFO0FBQ047QUFDUztBQUNkO0FBQ0o7QUFDQTtBQUVqRCxTQUFTb0IsSUFBSUEsQ0FBQSxFQUFHO0VBQ1osSUFBTUMsSUFBSSxHQUFHcEwsUUFBUSxDQUFDcUwsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRXJERCxJQUFJLENBQUN2RSxNQUFNLENBQ1B6SCxpQkFBQSxDQUFDMEMsMkJBQWEsUUFDVjFDLGlCQUFBLENBQUN5TCxhQUFhLE1BQUUsQ0FBQyxFQUNqQnpMLGlCQUFBLENBQUNzSiwyQkFBYSxNQUFFLENBQ0wsQ0FDbkIsQ0FBQztFQUVEM0MsT0FBTyxDQUFDLEtBQUssRUFBRTNHLGlCQUFBLENBQUNtTCxvQkFBb0IsTUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO0VBQy9DeEUsT0FBTyxDQUFDLEtBQUssRUFBRTNHLGlCQUFBLENBQUMwTCxXQUFXLE1BQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztBQUMxQztBQUVBOUssUUFBUSxDQUFDWSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsVUFBQ29ELENBQUMsRUFBSztFQUM1Q0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUNsQjhCLE9BQU8sQ0FBQyxLQUFLLEVBQUUzRyxpQkFBQSxDQUFDOEwsdUJBQVcsTUFBRSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUZDLElBQUksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vanN4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0J1dHRvbkJhckNvbnRhaW5lci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguY3NzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3gvaW5kZXguY3NzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vTGluay9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudC9pbmRleC5jc3M/ZGYwMSIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9pbmRleC5jc3M/NDNlNSIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0ljb24vaW5kZXguY3NzPzU2MTMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvQ2xvc2VCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvcmVtb3ZlVmlldy5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9WaWV3L2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9hZGRWaWV3LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29ubmVjdC9XZWJpbmRvd3NNZXNzYWdlUmVjZWl2ZXIuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L2luZGV4LmNzcz9hNzIxIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9BcHBPdmVydmlld0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L0FwcE92ZXJ2aWV3SW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L0FwcE92ZXJ2aWV3RGVzY3JpcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rL2luZGV4LmNzcz9lZDQwIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vTGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvQXBwT3ZlcnZpZXdMaXN0L0FwcE92ZXJ2aWV3TGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbmZvQm94L2luZGV4LmNzcz80ZjhjIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5mb0JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vc3JjL0FwcFZpZXdzL1dlYmluZG93c0FwcE92ZXJ2aWV3LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvQnV0dG9uQmFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvaW5kZXguY3NzPzUzZmMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0J1dHRvbkJhckNvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi9pbmRleC5jc3M/NjNmZSIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vc3JjL0FwcFZpZXdzL05hdmlnYXRpb25CYXIuanMiLCJ3ZWJwYWNrOi8vd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3NyYy9BcHBWaWV3cy9NYWluQXBwVmlldy5qcyIsIndlYnBhY2s6Ly93ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vc3JjL0FwcFZpZXdzL0Fub3RoZXJWaWV3LmpzIiwid2VicGFjazovL3dlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggY3JlYXRlRWxlbWVudCAqL1xyXG5cclxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRhZyhwcm9wcywgLi4uY2hpbGRyZW4pO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICBPYmplY3QuZW50cmllcyhwcm9wcyB8fCB7fSkuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCJvblwiKSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xhc3NOYW1lXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwic3R5bGVcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSB2YWx1ZVtwcm9wTmFtZV07XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BOYW1lXSA9IHByb3BWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmRpc2FibGVkID0gQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBhcHBlbmRDaGlsZChlbGVtZW50LCBjaGlsZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmNvbnN0IGFwcGVuZENoaWxkID0gKHBhcmVudCwgY2hpbGQpID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkgcmV0dXJuIGNoaWxkLmZvckVhY2goKG5lc3RlZENoaWxkKSA9PiBhcHBlbmRDaGlsZChwYXJlbnQsIG5lc3RlZENoaWxkKSk7XHJcbiAgICBpZiAoIWNoaWxkKSByZXR1cm47XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQ/Lm5vZGVUeXBlID8gY2hpbGQgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGQgfTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5BcHBPdmVydmlld19fU2VlQWxzbyB7XHJcbiAgICBtYXJnaW46IDE0cHg7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3RJdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5BcHBPdmVydmlld19fU2VlQWxzbyB7XFxyXFxuICAgIG1hcmdpbjogMTRweDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3RJdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5CdXR0b25CYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0cHgpO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKSxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggMHB4IHZhcigtLXNoYWRvdy0zMDApLCAwcHggdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0zMDApO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsU0FBUztJQUNUOzs7c0dBR2tHO0FBQ3RHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5CdXR0b25CYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNHB4KTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKSxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCAwcHggdmFyKC0tc2hhZG93LTMwMCksIDBweCB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTMwMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLlZpZXdDb250YWluZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gODVweCk7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4uVmlldyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLlZpZXdSZXNpemVIYW5kbGVMZWZ0IHtcclxuICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDRweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5DbG9zZUJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDFweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFFBQVE7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVmlld0NvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVmlldyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXdSZXNpemVIYW5kbGVMZWZ0IHtcXHJcXG4gICAgY3Vyc29yOiBldy1yZXNpemU7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLkNsb3NlQmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDFweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuV2luZG93Q29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuV2luZG93Q29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWcpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDhweDtcclxufVxyXG4uQnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XHJcbn1cclxuLkJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJOzZFQUN5RTtBQUM3RTtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDJweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA4cHg7XFxyXFxufVxcclxcbi5CdXR0b246YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XFxyXFxufVxcclxcbi5CdXR0b246ZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5LTMwMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkljb24ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvbi9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuSWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkluZm9Cb3gge1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMTAwKTtcclxuICAgIGJvcmRlcjogdmFyKC0teWVsbG93LTIwMCkgMXB4IHNvbGlkO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3gvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsbUNBQW1DO0FBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5JbmZvQm94IHtcXHJcXG4gICAgbWFyZ2luOiA4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LTEwMCk7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0teWVsbG93LTIwMCkgMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5JbnB1dCB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmF0KTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJsb2NrOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQsXHJcbiAgICAgICAgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzbikgKiAyKSBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXNuKSAqIDIpIDBweCB2YXIoLS1ncmV5LTIwMCkgaW5zZXQsXHJcbiAgICAgICAgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKSAwcHggdmFyKC0tc2hhZG93LTMwMCkgaW5zZXQ7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vTGluay9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qjs7O2lHQUc2RjtBQUNqR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuSW5wdXQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYXQpO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1c24pICogMikgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzbikgKiAyKSAwcHggdmFyKC0tZ3JleS0yMDApIGluc2V0LFxcclxcbiAgICAgICAgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKSAwcHggdmFyKC0tc2hhZG93LTMwMCkgaW5zZXQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2luZG93Q29udGVudChwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIldpbmRvd0NvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICBzcmM9e3Byb3BzLnNyY31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcIkljb25cIiArIChwcm9wcy5jbGFzc05hbWUgPyBcIiBcIiArIHByb3BzLmNsYXNzTmFtZSA6IFwiXCIpfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb3BzLmlzR3JleSA/IFwiZ3JheXNjYWxlKDEwMCUpXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG4iLCJjb25zdCBXQk5EX1JFUSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbmNvbnN0IFJPT1RfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L2ZvbGRlclwiO1xyXG5jb25zdCBGSUxFX1BBVEggPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9maWxlXCI7XHJcbmNvbnN0IFBVQkxJQ19QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvcHVibGljXCIgKyBcIi93ZWJpbmRvd3MvcHVibGljL1wiO1xyXG5jb25zdCBBU1NFVFNfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L3B1YmxpY1wiICsgXCIvd2ViaW5kb3dzL3B1YmxpYy9Bc3NldHMvXCI7XHJcbmNvbnN0IElDT05TX1BBVEggPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9wdWJsaWNcIiArIFwiL3dlYmluZG93cy9wdWJsaWMvQXNzZXRzL0ljb25zL1wiO1xyXG5jb25zdCBGSUxFU19SRVEgPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9maWxlcy9cIjtcclxuXHJcbmV4cG9ydCB7IFBVQkxJQ19QQVRILCBBU1NFVFNfUEFUSCwgSUNPTlNfUEFUSCwgRklMRV9QQVRILCBST09UX1BBVEgsIEZJTEVTX1JFUSB9O1xyXG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uXCI7XHJcbmltcG9ydCB7IEFTU0VUU19QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3NlQmFyKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2xvc2VCYXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luQ2wtSGFyZE91dHNldFNoYWRvdyB3aW5DbC1CR0NvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjE2cHhcIiB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5DbC1IYXJkT3V0c2V0U2hhZG93IHdpbkNsLUJHQ29sb3JcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtBU1NFVFNfUEFUSCArIFwiL0ltZ19CdXR0b25fQ2xvc2UuUE5HXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVWaWV3KGlkKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgY29uc3Qgdmlld1dpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodmlldykuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuICAgIGNvbnN0IHN1YlZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICBsZXQgcHJldlZpZXc7XHJcbiAgICBsZXQgcmVzaXplVmlldztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc3ViVmlld3NbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHByZXZWaWV3ID0gc3ViVmlld3NbaSAtIDFdO1xyXG4gICAgICAgICAgICByZXNpemVWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgVmlld1Jlc2l6ZUhhbmRsZUxlZnRgKVtpIC0gMV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHByZXZWaWV3V2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwcmV2VmlldykuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuICAgIHByZXZWaWV3LnN0eWxlLndpZHRoID0gcHJldlZpZXdXaWR0aCArIHZpZXdXaWR0aCArIDEyICsgXCJweFwiO1xyXG5cclxuICAgIGlmIChyZXNpemVWaWV3KSByZXNpemVWaWV3LnJlbW92ZSgpO1xyXG4gICAgaWYgKHZpZXcpIHZpZXcucmVtb3ZlKCk7XHJcbn1cclxuIiwiaW1wb3J0IENsb3NlQmFyIGZyb20gXCIuLi9DbG9zZUJhclwiO1xyXG5pbXBvcnQgcmVtb3ZlVmlldyBmcm9tIFwiLi4vcmVtb3ZlVmlld1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlldyhwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbkNsLUhhcmRJbnNldFNoYWRvdyBWaWV3XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHByb3BzLndpZHRoIH19XHJcbiAgICAgICAgICAgIG9uQ29udGV4dG1lbnU9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuaXNDbG9zYWJsZSAmJiA8Q2xvc2VCYXIgb25DbGljaz17KCkgPT4gcmVtb3ZlVmlldyhwcm9wcy5pZCl9IC8+fVxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBTdWJ0cmFjdHMgYSB2YWx1ZSBmcm9tIGFub3RoZXIgdW50aWwgbGltaXQuXHJcbiAqIElmIGxpbWl0IGlzIG1ldCwgdGhlbiBzdWJ0cmFjdCBmcm9tIHZhbHVlIHRoZSByZXN0LlxyXG4gKiBEZWZhdWx0IGxpbWl0IGlzIDE1MFxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc3VidHJhY3QuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tIC0gVGhlIHZhbHVlIHRvIHN1YnRyYWN0IGZyb20uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGltaXQ9MTUwXSAtIFRoZSBsaW1pdCB0byBzdWJ0cmFjdCBmcm9tLlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgeCBhbmQgeSByZXByZXNlbnRpbmcgdGhlIHN1YnRyYWN0ZWQgdmFsdWVzLlxyXG4gKi9cclxuZnVuY3Rpb24gc3VidHJhY3RGcm9tKHZhbHVlLCBmcm9tLCBsaW1pdCA9IDE1MCkge1xyXG4gICAgbGV0IHJlbWFpbmluZ0Zyb20gPSBmcm9tIC0gdmFsdWU7XHJcbiAgICBsZXQgc3VidHJhY3RlZFZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHJlbWFpbmluZ0Zyb20gPCBsaW1pdCkge1xyXG4gICAgICAgIGNvbnN0IHRvU3VidHJhY3QgPSB2YWx1ZSAtIE1hdGguYWJzKGxpbWl0IC0gZnJvbSk7XHJcbiAgICAgICAgcmVtYWluaW5nRnJvbSA9IGxpbWl0O1xyXG4gICAgICAgIHN1YnRyYWN0ZWRWYWx1ZSA9IHZhbHVlIC0gdG9TdWJ0cmFjdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyB4OiBzdWJ0cmFjdGVkVmFsdWUsIHk6IHJlbWFpbmluZ0Zyb20gfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYW1wcyBhIHZhbHVlIGJldHdlZW4gYW4gdXBwZXIgYW5kIGxvd2VyIGJvdW5kLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2xhbXAuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbG93ZXIgYm91bmQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgdXBwZXIgYm91bmQuXHJcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGNsYW1wZWQgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN1YnRyYWN0cyBhbiBlcXVhbCBzaGFyZSBmcm9tIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgYmFzZWQgb24gdGhlIHRvdGFsIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdG90YWwgdmFsdWUgdG8gc3BsaXQgYW1vbmcgdGhlIGVsZW1lbnRzLlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSBvZiB2YWx1ZXMgdG8gc3VidHJhY3QgZnJvbS5cclxuICogQHJldHVybiB7QXJyYXl9IFRoZSBtb2RpZmllZCBhcnJheSBhZnRlciBzdWJ0cmFjdGluZyB0aGUgZXF1YWwgc2hhcmUgZnJvbSBlYWNoIGVsZW1lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdWJ0cmFjdEVxdWFsU2hhcmUodmFsdWUsIGFycmF5KSB7XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09IDApIHJldHVybiBhcnJheTtcclxuICAgIGNvbnN0IHNoYXJlID0gdmFsdWUgLyBhcnJheS5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGFycmF5W2ldIC0gc2hhcmU7XHJcbiAgICAgICAgYXJyYXlbaV0gPSBNYXRoLm1heChuZXdWYWx1ZSwgMTUwKTtcclxuICAgICAgICB2YWx1ZSAtPSBhcnJheVtpXSAtIG5ld1ZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBpZiB0d28gbnVtYmVycyBhcmUgbmVhcmx5IGVxdWFsIHdpdGhpbiBhIHNwZWNpZmllZCBlcHNpbG9uIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtMSAtIFRoZSBmaXJzdCBudW1iZXIgdG8gY29tcGFyZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IG51bTIgLSBUaGUgc2Vjb25kIG51bWJlciB0byBjb21wYXJlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2Vwc2lsb249MV0gLSBUaGUgYWNjZXB0YWJsZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIG51bWJlcnMuXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG51bWJlcnMgYXJlIG5lYXJseSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cclxuZnVuY3Rpb24gbmVhcmx5RXF1YWwobnVtMSwgbnVtMiwgZXBzaWxvbiA9IDEpIHtcclxuICAgIHJldHVybiBNYXRoLmFicyhudW0xIC0gbnVtMikgPCBlcHNpbG9uO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBlcXVhbCBzaGFyZSB0byBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IGJhc2VkIG9uIHRoZSB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHRvdGFsIHZhbHVlIHRvIHNwbGl0IGFtb25nIHRoZSBlbGVtZW50cy5cclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgYXJyYXkgb2YgdmFsdWVzIHRvIGFkZCB0by5cclxuICogQHJldHVybiB7QXJyYXl9IFRoZSBtb2RpZmllZCBhcnJheS5cclxuICovXHJcbmZ1bmN0aW9uIHNwcmVhZFZhbHVlQWNyb3NzQXJyYXkodmFsdWUsIGFycikge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiBhcnI7XHJcbiAgICBjb25zdCBlcXVhbFZhbHVlID0gdmFsdWUgLyBsZW5ndGg7XHJcbiAgICBjb25zdCBzcHJlYWRBcnJheSA9IGFyci5tYXAoKG51bSkgPT4gbnVtICsgZXF1YWxWYWx1ZSk7XHJcbiAgICByZXR1cm4gc3ByZWFkQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHN1YnRyYWN0RnJvbSwgY2xhbXAsIHN1YnRyYWN0RXF1YWxTaGFyZSwgbmVhcmx5RXF1YWwsIHNwcmVhZFZhbHVlQWNyb3NzQXJyYXkgfTtcclxuIiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xyXG5pbXBvcnQgeyBzdWJ0cmFjdEZyb20sIGNsYW1wIH0gZnJvbSBcIkB3ZWJpbmRvd3MvdXRpbHMvbWF0aFwiO1xyXG5cclxuLyoqXHJcbiAqIEFkZCBhIG5ldyB2aWV3IHRvIHRoZSB2aWV3IGNvbnRhaW5lci5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluaXRXaWR0aCAtIFRoZSBpbml0aWFsIHdpZHRoIG9mIHRoZSBuZXcgdmlldy5cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudCAtIFRoZSBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgbmV3IHZpZXcuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDbG9zYWJsZSAtIEluY2x1ZGUgYSBidXR0b24gdG8gY2xvc2UgdGhlIHZpZXcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRWaWV3KGluaXRXaWR0aCwgY29udGVudCwgaXNDbG9zYWJsZSA9IHRydWUpIHtcclxuICAgIGNvbnN0IHN1YldpbmRvd1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld0NvbnRhaW5lclwiKVswXTtcclxuICAgIGNvbnN0IHN1YldpbmRvd3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld1wiKTtcclxuICAgIGNvbnN0IHJlc2l6ZUhhbmRsZUxlZnQgPSA8ZGl2IGNsYXNzTmFtZT1cIlZpZXdSZXNpemVIYW5kbGVMZWZ0XCI+PC9kaXY+O1xyXG4gICAgY29uc3Qgd2luZG93V2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgbGV0IGRlc2lyZWRXaWR0aCA9IChwYXJzZUludChpbml0V2lkdGgpICogd2luZG93V2lkdGgpIC8gMTAwO1xyXG4gICAgaWYgKHN1YldpbmRvd3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IGxhc3RXaW5kb3cgPSBzdWJXaW5kb3dzW3N1YldpbmRvd3MubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgY29uc3QgbGFzdFdpbmRvd1dpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobGFzdFdpbmRvdykuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuICAgICAgICBpZiAobGFzdFdpbmRvd1dpZHRoIDwgMTc1KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBzdWJ0cmFjdEZyb20oZGVzaXJlZFdpZHRoLCBsYXN0V2luZG93V2lkdGgpO1xyXG4gICAgICAgIGRlc2lyZWRXaWR0aCA9IHg7XHJcbiAgICAgICAgbGFzdFdpbmRvdy5zdHlsZS53aWR0aCA9IHkgLSA0ICsgXCJweFwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaWQgPSBgaWRfVmlld18ke3N1YldpbmRvd3MubGVuZ3RoICsgMX1gO1xyXG4gICAgY29uc3QgbmV3U3ViV2luZG93ID0gPFZpZXcgaWQ9e2lkfSB3aWR0aD17ZGVzaXJlZFdpZHRoIC0gOCArIFwicHhcIn0gaXNDbG9zYWJsZT17aXNDbG9zYWJsZX0+PC9WaWV3PjtcclxuXHJcbiAgICBpZiAoc3ViV2luZG93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc3ViV2luZG93V3JhcHBlci5hcHBlbmQocmVzaXplSGFuZGxlTGVmdCk7XHJcbiAgICB9XHJcbiAgICBuZXdTdWJXaW5kb3cuYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgc3ViV2luZG93V3JhcHBlci5hcHBlbmQobmV3U3ViV2luZG93KTtcclxuXHJcbiAgICByZXNpemVIYW5kbGVMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN1YlZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICAgICAgbGV0IHN1YldpbmRvd0N1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaWRfVmlld18ke3N1YldpbmRvd3MubGVuZ3RoIC0gMX1gKTtcclxuICAgICAgICBsZXQgc3ViV2luZG93TmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpZF9WaWV3XyR7c3ViV2luZG93cy5sZW5ndGh9YCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3ViVmlld3NbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJXaW5kb3dDdXJyZW50ID0gc3ViVmlld3NbaSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgc3ViV2luZG93TmV4dCA9IHN1YlZpZXdzW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2F2ZWRXaWR0aEN1cnJlbnQgPSBwYXJzZUludChcclxuICAgICAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViV2luZG93Q3VycmVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzYXZlZFdpZHRoTmV4dCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1YldpbmRvd05leHQpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoRGlmZiA9IGUuY2xpZW50WCAtIChzdWJXaW5kb3dDdXJyZW50Lm9mZnNldExlZnQgKyBzYXZlZFdpZHRoQ3VycmVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0N1cnJlbnRXaWR0aCA9IGNsYW1wKFxyXG4gICAgICAgICAgICAgICAgc2F2ZWRXaWR0aEN1cnJlbnQgKyB3aWR0aERpZmYsXHJcbiAgICAgICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgICAgIHNhdmVkV2lkdGhDdXJyZW50ICsgc2F2ZWRXaWR0aE5leHQgLSA1MFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOZXh0V2lkdGggPSBjbGFtcChcclxuICAgICAgICAgICAgICAgIHNhdmVkV2lkdGhOZXh0IC0gd2lkdGhEaWZmLFxyXG4gICAgICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgICAgICBzYXZlZFdpZHRoQ3VycmVudCArIHNhdmVkV2lkdGhOZXh0IC0gNTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3ViV2luZG93Q3VycmVudC5zdHlsZS53aWR0aCA9IG5ld0N1cnJlbnRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgc3ViV2luZG93TmV4dC5zdHlsZS53aWR0aCA9IG5ld05leHRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJjbGFzcyBXZWJpbmRvd3NNZXNzYWdlUmVjZWl2ZXIge1xyXG4gICAgb25XaW5kb3dSZXNpemUoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19yZXNpemVcIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2luZG93UmVzaXplU3RhcnQoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19yZXNpemVfc3RhcnRcIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2luZG93UmVzaXplRW5kKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZXZlbnQgPT0gXCJ3aW5kb3dfcmVzaXplX2VuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dCZWZvcmVFeHBhbmQoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19iZWZvcmVfZXhwYW5kXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd0V4cGFuZChjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X2V4cGFuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dCZWZvcmVVbmV4cGFuZChjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X2JlZm9yZV91bmV4cGFuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dVbmV4cGFuZChjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X3VuZXhwYW5kXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd09wZW4oY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19vcGVuXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd0Nsb3NlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZXZlbnQgPT0gXCJ3aW5kb3dfY2xvc2VcIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB3aW5kb3dFdmVudHMgPSBuZXcgV2ViaW5kb3dzTWVzc2FnZVJlY2VpdmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dFdmVudHM7XHJcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBWaWV3IGZyb20gXCIuL1ZpZXdcIjtcclxuaW1wb3J0IGFkZFZpZXcgZnJvbSBcIi4vYWRkVmlld1wiO1xyXG5pbXBvcnQgd2luZG93RXZlbnRzIGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvV2ViaW5kb3dzTWVzc2FnZVJlY2VpdmVyXCI7XHJcbmltcG9ydCB7IHNwcmVhZFZhbHVlQWNyb3NzQXJyYXkgfSBmcm9tIFwiQHdlYmluZG93cy91dGlscy9tYXRoXCI7XHJcblxyXG5mdW5jdGlvbiBWaWV3Q29udGFpbmVyKHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiVmlld0NvbnRhaW5lclwiPntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbmxldCB3aW5kb3dXaWR0aFN0YXJ0ID0gMDtcclxubGV0IHNhdmVkV2lkdGhzID0gW107XHJcblxyXG53aW5kb3dFdmVudHMub25XaW5kb3dCZWZvcmVFeHBhbmQoKGRhdGEpID0+IHtcclxuICAgIHNhdmVWaWV3V2lkdGhzKGRhdGEpO1xyXG59KTtcclxuXHJcbndpbmRvd0V2ZW50cy5vbldpbmRvd0JlZm9yZVVuZXhwYW5kKChkYXRhKSA9PiB7XHJcbiAgICBzYXZlVmlld1dpZHRocyhkYXRhKTtcclxufSk7XHJcblxyXG53aW5kb3dFdmVudHMub25XaW5kb3dSZXNpemVTdGFydCgoZGF0YSkgPT4ge1xyXG4gICAgc2F2ZVZpZXdXaWR0aHMoZGF0YSk7XHJcbn0pO1xyXG5cclxud2luZG93RXZlbnRzLm9uV2luZG93UmVzaXplRW5kKCgpID0+IHtcclxuICAgIGNsZWFyVmlld1dpZHRocygpO1xyXG59KTtcclxuXHJcbndpbmRvd0V2ZW50cy5vbldpbmRvd1Jlc2l6ZSgoZGF0YSkgPT4ge1xyXG4gICAgYWRqdXN0Vmlld1NpemVzKGRhdGEpO1xyXG59KTtcclxuXHJcbndpbmRvd0V2ZW50cy5vbldpbmRvd0V4cGFuZCgoZGF0YSkgPT4ge1xyXG4gICAgYWRqdXN0Vmlld1NpemVzKGRhdGEpO1xyXG4gICAgY2xlYXJWaWV3V2lkdGhzKCk7XHJcbn0pO1xyXG5cclxud2luZG93RXZlbnRzLm9uV2luZG93VW5leHBhbmQoKGRhdGEpID0+IHtcclxuICAgIGFkanVzdFZpZXdTaXplcyhkYXRhKTtcclxuICAgIGNsZWFyVmlld1dpZHRocygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyVmlld1dpZHRocygpIHtcclxuICAgIHdpbmRvd1dpZHRoU3RhcnQgPSAwO1xyXG4gICAgc2F2ZWRXaWR0aHMgPSBbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVZpZXdXaWR0aHMoZGF0YSkge1xyXG4gICAgd2luZG93V2lkdGhTdGFydCA9IGRhdGEud2luZG93U2l6ZS53aWR0aDtcclxuICAgIGNvbnN0IHN1YlZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2F2ZWRXaWR0aHMucHVzaChwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJWaWV3c1tpXSkuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkanVzdFZpZXdTaXplcyhkYXRhKSB7XHJcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IGRhdGEud2luZG93U2l6ZS53aWR0aDtcclxuICAgIGNvbnN0IHN1YlZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICBjb25zdCBuZXdXaWR0aHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSBzYXZlZFdpZHRoc1tpXTtcclxuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGhQcmVjID0gY3VycmVudFdpZHRoIC8gd2luZG93V2lkdGhTdGFydDtcclxuICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHdpbmRvd1dpZHRoICogY3VycmVudFdpZHRoUHJlYztcclxuICAgICAgICBuZXdXaWR0aHMucHVzaChuZXdXaWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlmZiA9IHdpbmRvd1dpZHRoIC0gbmV3V2lkdGhzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgY29uc3QgYWRqdXN0ZWRXaWR0aHMgPSBzcHJlYWRWYWx1ZUFjcm9zc0FycmF5KGRpZmYsIG5ld1dpZHRocyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN1YlZpZXdzW2ldLnN0eWxlLndpZHRoID0gYWRqdXN0ZWRXaWR0aHNbaV0gLSA4ICsgXCJweFwiO1xyXG4gICAgICAgIGlmIChpID09IHN1YlZpZXdzLmxlbmd0aCAtIDEpIHN1YlZpZXdzW2ldLnN0eWxlLndpZHRoID0gYWRqdXN0ZWRXaWR0aHNbaV0gLSA0ICogKGkgKyAxKSArIFwicHhcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVmlldywgYWRkVmlldywgVmlld0NvbnRhaW5lciB9O1xyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0xpc3QocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwT3ZlcnZpZXdfX1NlZUFsc29cIj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiB9fT57cHJvcHMudGV4dH08L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJBcHBPdmVydmlld19fU2VlQWxzb0xpc3RcIj57Y2hpbGRyZW59PC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwT3ZlcnZpZXdJbWFnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIDxpbWcgc3JjPXtwcm9wcy5zcmN9IHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIgfX0gLz47XHJcbn1cclxuXHJcbi8vQVNTRVRTX1BBVEggKyBcIkZpbGVFeHBsb3Jlci5wbmdcIlxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0Rlc2NyaXB0aW9uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjE0cHhcIiwgbWluV2lkdGg6IFwiMTUwcHhcIiB9fT57cHJvcHMudGV4dH08L3A+O1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIkxpbmtcIiBocmVmPXtwcm9wcy5ocmVmfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0xpbmsocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdEl0ZW1cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvcHMudG99IHRleHQ9e3Byb3BzLnRleHR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3TGlzdCBmcm9tIFwiLi9BcHBPdmVydmlld0xpc3RcIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3SW1hZ2UgZnJvbSBcIi4vQXBwT3ZlcnZpZXdJbWFnZVwiO1xyXG5pbXBvcnQgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiBmcm9tIFwiLi9BcHBPdmVydmlld0Rlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBBcHBPdmVydmlld0xpbmsgZnJvbSBcIi4vQXBwT3ZlcnZpZXdMaXN0L0FwcE92ZXJ2aWV3TGlua1wiO1xyXG5cclxuZnVuY3Rpb24gQXBwT3ZlcnZpZXcocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJBcHBPdmVydmlld1wiPntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFwcE92ZXJ2aWV3TGlzdCwgQXBwT3ZlcnZpZXdJbWFnZSwgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiwgQXBwT3ZlcnZpZXcsIEFwcE92ZXJ2aWV3TGluayB9O1xyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb0JveChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkluZm9Cb3hcIiBzdHlsZT17eyB3aWR0aDogcHJvcHMud2lkdGggfX0gaWQ9e3Byb3BzLmlkfT5cclxuICAgICAgICAgICAgPHA+e3Byb3BzLnRleHR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQXBwT3ZlcnZpZXcsXHJcbiAgICBBcHBPdmVydmlld0xpbmssXHJcbiAgICBBcHBPdmVydmlld0xpc3QsXHJcbiAgICBBcHBPdmVydmlld0Rlc2NyaXB0aW9uLFxyXG4gICAgQXBwT3ZlcnZpZXdJbWFnZSxcclxufSBmcm9tIFwiQHdlYmluZG93cy9BcHBPdmVydmlld1wiO1xyXG5pbXBvcnQgeyBBU1NFVFNfUEFUSCB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBJbmZvQm94IGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYmluZG93c0FwcE92ZXJ2aWV3KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwT3ZlcnZpZXc+XHJcbiAgICAgICAgICAgIDxBcHBPdmVydmlld0ltYWdlIHNyYz17YCR7QVNTRVRTX1BBVEh9L1dlYmluZG93c0FwcC5wbmdgfSAvPlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiB0ZXh0PVwiVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBhIFdlYmluZG93cyBhcHAuXCIgLz5cclxuICAgICAgICAgICAgPEluZm9Cb3hcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJDbGljayB3aXRoIFJNQiB0byBjcmVhdGUgZXh0cmEgdmlld3MhXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjUwcHhcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdMaXN0IHRleHQ9XCJZb3UgY2FuIGRvOlwiPlxyXG4gICAgICAgICAgICAgICAgPEFwcE92ZXJ2aWV3TGluayB0ZXh0PVwidGhpc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8QXBwT3ZlcnZpZXdMaW5rIHRleHQ9XCJ0aGF0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxBcHBPdmVydmlld0xpbmsgdGV4dD1cImV2ZXJ5dGhpbmdcIiAvPlxyXG4gICAgICAgICAgICA8L0FwcE92ZXJ2aWV3TGlzdD5cclxuICAgICAgICA8L0FwcE92ZXJ2aWV3PlxyXG4gICAgKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25CYXIocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQnV0dG9uQmFyXCIgc3R5bGU9e3sgZ2FwOiBwcm9wcz8uZ2FwID8/IFwiNHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtRGl2aWRlckJpZ1ZlcnRpY2FsXCIgc3R5bGU9XCJoZWlnaHQ6IDIycHg7IG1hcmdpbi1ibG9jazogMnB4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IEJ1dHRvbkJhciBmcm9tIFwiLi9CdXR0b25CYXJcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbkJhckNvbnRhaW5lcihwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1IYXJkSW5zZXRTaGFkb3dcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PntjaGlsZH08L2Rpdj47XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgQnV0dG9uQmFyLCBCdXR0b25CYXJDb250YWluZXIgfTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJ1dHRvblwiIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCdXR0b25CYXJDb250YWluZXIsIEJ1dHRvbkJhciB9IGZyb20gXCJAd2ViaW5kb3dzL0J1dHRvbkJhcnNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb25CYXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25CYXJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJGaWxlXCIgZGlzYWJsZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiRWRpdFwiIGRpc2FibGVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlZpZXdcIiBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkV4dHJhXCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCI/XCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFyPlxyXG4gICAgICAgIDwvQnV0dG9uQmFyQ29udGFpbmVyPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbmZvQm94XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluQXBwVmlldygpIHtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+TWFpbiBBcHAgVmlldzwvaDE+XHJcbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIG1haW4gYXBwIHZpZXchPC9wPlxyXG4gICAgICAgICAgICA8SW5mb0JveCBpZD1cImNvdW50XCIgdGV4dD17Y291bnR9IHdpZHRoPVwiMTAwcHhcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiQ291bnQgdXAhXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50XCIpLmlubmVySFRNTCA9ICsrY291bnQ7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiQ291bnQgZG93biFcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRcIikuaW5uZXJIVE1MID0gLS1jb3VudDtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IEFTU0VUU19QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5BcHBWaWV3KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+VGhpcyBpcyBhIHRlbXBvcmFyeSB2aWV3ITwvaDE+XHJcbiAgICAgICAgICAgIDxwPllvdSBjYW4gY2xvc2UgaXQuPC9wPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e0FTU0VUU19QQVRIICsgXCIvMjAwdy5naWZcIn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIsIGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcImF1dG9cIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgV2luZG93Q29udGVudCBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL1dpbmRvd0NvbnRlbnRcIjtcclxuaW1wb3J0IHsgVmlld0NvbnRhaW5lciwgYWRkVmlldyB9IGZyb20gXCJAd2ViaW5kb3dzL1ZpZXdzXCI7XHJcbmltcG9ydCBXZWJpbmRvd3NBcHBPdmVydmlldyBmcm9tIFwiLi9BcHBWaWV3cy9XZWJpbmRvd3NBcHBPdmVydmlld1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tIFwiLi9BcHBWaWV3cy9OYXZpZ2F0aW9uQmFyXCI7XHJcbmltcG9ydCBNYWluQXBwVmlldyBmcm9tIFwiLi9BcHBWaWV3cy9NYWluQXBwVmlld1wiO1xyXG5pbXBvcnQgQW5vdGhlclZpZXcgZnJvbSBcIi4vQXBwVmlld3MvQW5vdGhlclZpZXdcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xyXG5cclxuICAgIHJvb3QuYXBwZW5kKFxyXG4gICAgICAgIDxXaW5kb3dDb250ZW50PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJhciAvPlxyXG4gICAgICAgICAgICA8Vmlld0NvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvV2luZG93Q29udGVudD5cclxuICAgICk7XHJcblxyXG4gICAgYWRkVmlldyhcIjI1JVwiLCA8V2ViaW5kb3dzQXBwT3ZlcnZpZXcgLz4sIGZhbHNlKTtcclxuICAgIGFkZFZpZXcoXCI3NSVcIiwgPE1haW5BcHBWaWV3IC8+LCBmYWxzZSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkVmlldyhcIjI1JVwiLCA8QW5vdGhlclZpZXcgLz4pO1xyXG59KTtcclxuXHJcbmluaXQoKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJwcm9wcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjaGlsZHJlbiIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwiY29uY2F0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJ2YWx1ZSIsInN0YXJ0c1dpdGgiLCJ0b0xvd2VyQ2FzZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJfdHlwZW9mIiwia2V5cyIsInByb3BOYW1lIiwicHJvcFZhbHVlIiwic3R5bGUiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ0b1N0cmluZyIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnQiLCJpc0FycmF5IiwibmVzdGVkQ2hpbGQiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwiV2luZG93Q29udGVudCIsImNsYXNzTmFtZSIsIkljb24iLCJpZCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsdGVyIiwiaXNHcmV5Iiwib25DbGljayIsIldCTkRfUkVRIiwiUk9PVF9QQVRIIiwiRklMRV9QQVRIIiwiUFVCTElDX1BBVEgiLCJBU1NFVFNfUEFUSCIsIklDT05TX1BBVEgiLCJGSUxFU19SRVEiLCJDbG9zZUJhciIsInJlbW92ZVZpZXciLCJ2aWV3IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2aWV3V2lkdGgiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3ViVmlld3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicHJldlZpZXciLCJyZXNpemVWaWV3IiwiaSIsInByZXZWaWV3V2lkdGgiLCJyZW1vdmUiLCJWaWV3Iiwib25Db250ZXh0bWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzQ2xvc2FibGUiLCJzdWJ0cmFjdEZyb20iLCJmcm9tIiwibGltaXQiLCJ1bmRlZmluZWQiLCJyZW1haW5pbmdGcm9tIiwic3VidHJhY3RlZFZhbHVlIiwidG9TdWJ0cmFjdCIsIk1hdGgiLCJhYnMiLCJ4IiwieSIsImNsYW1wIiwibWluIiwibWF4Iiwic3VidHJhY3RFcXVhbFNoYXJlIiwiYXJyYXkiLCJzaGFyZSIsIm5ld1ZhbHVlIiwibmVhcmx5RXF1YWwiLCJudW0xIiwibnVtMiIsImVwc2lsb24iLCJzcHJlYWRWYWx1ZUFjcm9zc0FycmF5IiwiYXJyIiwiZXF1YWxWYWx1ZSIsInNwcmVhZEFycmF5IiwibWFwIiwibnVtIiwiYWRkVmlldyIsImluaXRXaWR0aCIsImNvbnRlbnQiLCJzdWJXaW5kb3dXcmFwcGVyIiwic3ViV2luZG93cyIsInJlc2l6ZUhhbmRsZUxlZnQiLCJ3aW5kb3dXaWR0aCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImRlc2lyZWRXaWR0aCIsImxhc3RXaW5kb3ciLCJsYXN0V2luZG93V2lkdGgiLCJfc3VidHJhY3RGcm9tIiwibmV3U3ViV2luZG93IiwiYXBwZW5kIiwic3ViV2luZG93Q3VycmVudCIsInN1YldpbmRvd05leHQiLCJzYXZlZFdpZHRoQ3VycmVudCIsInNhdmVkV2lkdGhOZXh0IiwiaGFuZGxlIiwid2lkdGhEaWZmIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJuZXdDdXJyZW50V2lkdGgiLCJuZXdOZXh0V2lkdGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiV2ViaW5kb3dzTWVzc2FnZVJlY2VpdmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5Iiwib25XaW5kb3dSZXNpemUiLCJjYWxsYmFjayIsImRhdGEiLCJldmVudCIsIm9uV2luZG93UmVzaXplU3RhcnQiLCJvbldpbmRvd1Jlc2l6ZUVuZCIsIm9uV2luZG93QmVmb3JlRXhwYW5kIiwib25XaW5kb3dFeHBhbmQiLCJvbldpbmRvd0JlZm9yZVVuZXhwYW5kIiwib25XaW5kb3dVbmV4cGFuZCIsIm9uV2luZG93T3BlbiIsIm9uV2luZG93Q2xvc2UiLCJ3aW5kb3dFdmVudHMiLCJWaWV3Q29udGFpbmVyIiwid2luZG93V2lkdGhTdGFydCIsInNhdmVkV2lkdGhzIiwic2F2ZVZpZXdXaWR0aHMiLCJjbGVhclZpZXdXaWR0aHMiLCJhZGp1c3RWaWV3U2l6ZXMiLCJ3aW5kb3dTaXplIiwicHVzaCIsIm5ld1dpZHRocyIsImN1cnJlbnRXaWR0aCIsImN1cnJlbnRXaWR0aFByZWMiLCJuZXdXaWR0aCIsImRpZmYiLCJyZWR1Y2UiLCJhIiwiYiIsImFkanVzdGVkV2lkdGhzIiwiQXBwT3ZlcnZpZXdMaXN0IiwidGV4dCIsIkFwcE92ZXJ2aWV3SW1hZ2UiLCJBcHBPdmVydmlld0Rlc2NyaXB0aW9uIiwibWFyZ2luIiwibWluV2lkdGgiLCJMaW5rIiwiaHJlZiIsIkFwcE92ZXJ2aWV3TGluayIsInRvIiwiQXBwT3ZlcnZpZXciLCJJbmZvQm94IiwiV2ViaW5kb3dzQXBwT3ZlcnZpZXciLCJCdXR0b25CYXIiLCJfcHJvcHMkZ2FwIiwiZ2FwIiwiQnV0dG9uQmFyQ29udGFpbmVyIiwiQnV0dG9uIiwiTmF2aWdhdGlvbkJhciIsIk1haW5BcHBWaWV3IiwiY291bnQiLCJpbm5lckhUTUwiLCJkaXNwbGF5IiwiQW5vdGhlclZpZXciLCJpbml0Iiwicm9vdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==