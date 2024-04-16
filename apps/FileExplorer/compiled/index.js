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

/***/ 578:
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
___CSS_LOADER_EXPORT___.push([module.id, `.winCl-FoldersMenu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: scroll;
}

.winCl-FolderItem {
    pointer-events: all;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-block: 2px;
    padding-inline: 2px;
    gap: 4px;
    font-family: var(--font-reg);
    border: 2px dotted transparent;
}

.winCl-FolderItem:active {
    border: 2px dotted var(--shadow-300);
}

.winCl-FolderWrapper {
    pointer-events: none;
    width: 100%;
}

.winCl-ColumnDescription {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-family: var(--font-reg);
    position: sticky;
    top: 0;
    background-color: var(--white);
    border-bottom: var(--grey-200) solid 1px;
}

.winCl-ColumnDescriptionItem {
    box-shadow: var(--border-radius) var(--border-radius) 0px var(--shadow-100) inset,
        var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-200) inset;
    border-right: var(--shadow-300) 1px solid;
    border-bottom: var(--shadow-300) 1px solid;
    border-left: var(--grey-200) 1px solid;
    border-top: var(--grey-200) 1px solid;
    background-color: var(--grey-200);
    padding-inline: 4px;
    padding-block: 1px;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/FolderContainer/index.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,iBAAiB;IACjB,mBAAmB;IACnB,QAAQ;IACR,4BAA4B;IAC5B,8BAA8B;AAClC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,4BAA4B;IAC5B,gBAAgB;IAChB,MAAM;IACN,8BAA8B;IAC9B,wCAAwC;AAC5C;;AAEA;IACI;+EAC2E;IAC3E,yCAAyC;IACzC,0CAA0C;IAC1C,sCAAsC;IACtC,qCAAqC;IACrC,iCAAiC;IACjC,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":[".winCl-FoldersMenu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow-y: scroll;\r\n    overflow-x: scroll;\r\n}\r\n\r\n.winCl-FolderItem {\r\n    pointer-events: all;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    margin-block: 2px;\r\n    padding-inline: 2px;\r\n    gap: 4px;\r\n    font-family: var(--font-reg);\r\n    border: 2px dotted transparent;\r\n}\r\n\r\n.winCl-FolderItem:active {\r\n    border: 2px dotted var(--shadow-300);\r\n}\r\n\r\n.winCl-FolderWrapper {\r\n    pointer-events: none;\r\n    width: 100%;\r\n}\r\n\r\n.winCl-ColumnDescription {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    font-family: var(--font-reg);\r\n    position: sticky;\r\n    top: 0;\r\n    background-color: var(--white);\r\n    border-bottom: var(--grey-200) solid 1px;\r\n}\r\n\r\n.winCl-ColumnDescriptionItem {\r\n    box-shadow: var(--border-radius) var(--border-radius) 0px var(--shadow-100) inset,\r\n        var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-200) inset;\r\n    border-right: var(--shadow-300) 1px solid;\r\n    border-bottom: var(--shadow-300) 1px solid;\r\n    border-left: var(--grey-200) 1px solid;\r\n    border-top: var(--grey-200) 1px solid;\r\n    background-color: var(--grey-200);\r\n    padding-inline: 4px;\r\n    padding-block: 1px;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ 378:
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
___CSS_LOADER_EXPORT___.push([module.id, `.ButtonIcon {
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
.ButtonIcon:active {
    box-shadow: var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-100) inset,
        var(--border-radius) var(--border-radius) 0px var(--shadow-200) inset;
}
.ButtonIcon:disabled {
    cursor: default;
    color: var(--grey-300);
}
.ButtonIcon__icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    pointer-events: none;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/ButtonIcon/index.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,gBAAgB;IAChB,6BAA6B;IAC7B,SAAS;IACT,kBAAkB;IAClB,SAAS;IACT,eAAe;IACf,mBAAmB;AACvB;AACA;IACI;6EACyE;AAC7E;AACA;IACI,eAAe;IACf,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;AACxB","sourcesContent":[".ButtonIcon {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: var(--black);\r\n    font-family: var(--font-reg);\r\n    font-size: small;\r\n    background-color: transparent;\r\n    border: 0;\r\n    padding-block: 2px;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    padding-inline: 8px;\r\n}\r\n.ButtonIcon:active {\r\n    box-shadow: var(--border-radiusn) var(--border-radiusn) 0px var(--shadow-100) inset,\r\n        var(--border-radius) var(--border-radius) 0px var(--shadow-200) inset;\r\n}\r\n.ButtonIcon:disabled {\r\n    cursor: default;\r\n    color: var(--grey-300);\r\n}\r\n.ButtonIcon__icon {\r\n    width: 16px;\r\n    height: 16px;\r\n    margin-right: 4px;\r\n    pointer-events: none;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ 58:
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
___CSS_LOADER_EXPORT___.push([module.id, `.DividerVertical {
    width: calc(var(--border-radius) * 2);
    background-color: var(--shadow-200);
    box-shadow: var(--border-radius) 0px 0px var(--shadow-200) inset,
        var(--border-radiusn) 0px 0px var(--shadow-100) inset;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/DividerVertical/index.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,mCAAmC;IACnC;6DACyD;AAC7D","sourcesContent":[".DividerVertical {\r\n    width: calc(var(--border-radius) * 2);\r\n    background-color: var(--shadow-200);\r\n    box-shadow: var(--border-radius) 0px 0px var(--shadow-200) inset,\r\n        var(--border-radiusn) 0px 0px var(--shadow-100) inset;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 166:
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
___CSS_LOADER_EXPORT___.push([module.id, `.Dropdown {
    position: absolute;
    width: 150px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.DropdownItem {
    pointer-events: all;
    cursor: pointer;
    color: var(--black);
    padding-left: 4px;
    width: calc(100% - 5.5px);
    margin-block: 1px;
    text-align: start;
}

.DropdownItem:hover {
    background-color: var(--blue-200);
    color: var(--white);
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/Dropdown/index.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;AACvB","sourcesContent":[".Dropdown {\r\n    position: absolute;\r\n    width: 150px;\r\n    z-index: 1000;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.DropdownItem {\r\n    pointer-events: all;\r\n    cursor: pointer;\r\n    color: var(--black);\r\n    padding-left: 4px;\r\n    width: calc(100% - 5.5px);\r\n    margin-block: 1px;\r\n    text-align: start;\r\n}\r\n\r\n.DropdownItem:hover {\r\n    background-color: var(--blue-200);\r\n    color: var(--white);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ 851:
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
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
.Link:active {
    color: purple;
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/Input/index.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,aAAa;AACjB","sourcesContent":[".Link {\r\n    color: blue;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n.Link:active {\r\n    color: purple;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ 64:
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
___CSS_LOADER_EXPORT___.push([module.id, `.Text {
    font-family: var(--font-reg);
    font-size: small;
    color: var(--black);
}
`, "",{"version":3,"sources":["webpack://./webindows/components/common/Text/index.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,gBAAgB;IAChB,mBAAmB;AACvB","sourcesContent":[".Text {\r\n    font-family: var(--font-reg);\r\n    font-size: small;\r\n    color: var(--black);\r\n}\r\n"],"sourceRoot":""}]);
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

;// CONCATENATED MODULE: ./webindows/connect/constants.js
var WBND_REQ = "http://localhost:3000";
var ROOT_PATH = WBND_REQ + "/files/get/folder";
var FILE_PATH = WBND_REQ + "/files/get/file";
var PUBLIC_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/";
var ASSETS_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/Assets/";
var ICONS_PATH = WBND_REQ + "/files/get/public" + "/webindows/public/Assets/Icons/";
var FILES_REQ = WBND_REQ + "/files/get/files/";

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
;// CONCATENATED MODULE: ./webindows/utils/history.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LinearHistory = /*#__PURE__*/function () {
  function LinearHistory(initPosition) {
    _classCallCheck(this, LinearHistory);
    this.history = [initPosition];
    this.index = 0;
  }

  /**
   * Adds a new visit to the history.
   *
   * @param {any} address - The new address to add to the history.
   * @return {void}
   */
  return _createClass(LinearHistory, [{
    key: "addNew",
    value: function addNew(address) {
      this.history.push(address);
      this.removeAdjacentDuplicates();
      this.index = this.history.length - 1;
    }

    /**
     * Goes back once in the history and returns that point.
     *
     * @return {type} Point in history
     */
  }, {
    key: "goBack",
    value: function goBack() {
      if (this.index <= 0) return this.index;
      this.index--;
      return this.history[this.index];
    }

    /**
     * Goes forward once in the history and returns that point.
     *
     * @return {type} Point in history
     */
  }, {
    key: "goForward",
    value: function goForward() {
      if (this.index >= this.history.length - 1) return this.index;
      this.index++;
      return this.history[this.index];
    }

    /**
     * Goes to the specific index in history and returns that point.
     *
     * @return {type} Point in history
     */
  }, {
    key: "goToIndex",
    value: function goToIndex(index) {
      this.index = index;
      return this.history[this.index];
    }

    /**
     * Return the current point in history.
     *
     * @return {type} Point in history
     */
  }, {
    key: "getCurrentPoint",
    value: function getCurrentPoint() {
      return this.history[this.index];
    }

    /**
     * Return the possible next index in history.
     *
     * @return {type} Point in history
     */
  }, {
    key: "getNextIndex",
    value: function getNextIndex() {
      if (this.index >= this.history.length - 1) return this.index;
      return this.index + 1;
    }

    /**
     * Return the possible previous index in history.
     *
     * @return {type} Point in history
     */
  }, {
    key: "getPreviousIndex",
    value: function getPreviousIndex() {
      if (this.index <= 0) return this.index;
      return this.index - 1;
    }

    /**
     * Return the current index in history.
     *
     * @return {type} Point in history
     */
  }, {
    key: "getCurrentIndex",
    value: function getCurrentIndex() {
      return this.index;
    }

    /**
     * Clears the whole history.
     *
     * @return {type} Point in history
     */
  }, {
    key: "clear",
    value: function clear() {
      this.history = [];
      this.index = 0;
    }
  }, {
    key: "removeAdjacentDuplicates",
    value: function removeAdjacentDuplicates() {
      var _this = this;
      this.history = this.history.filter(function (item, index) {
        return index === 0 || item !== _this.history[index - 1];
      });
    }
  }]);
}();

;// CONCATENATED MODULE: ./webindows/connect/requests.js
function requests_typeof(o) { "@babel/helpers - typeof"; return requests_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, requests_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == requests_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(requests_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/**
 * Get data about the folder at the specified address.
 *
 * @param {String} address - The address of the folder to request.
 * @return {Promise} A Promise that resolves to the JSON response from the server.
 */
function requestFolder(_x) {
  return _requestFolder.apply(this, arguments);
}
/**
 * Get data about all files at the specified address.
 *
 * @param {String} address - The address of the folder to request.
 * @return {Promise} A Promise that resolves to the JSON response from the server.
 */
function _requestFolder() {
  _requestFolder = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(address) {
    var user, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          user = localStorage.getItem("loggedInUser");
          _context.next = 3;
          return fetch(ROOT_PATH, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              user: user,
              path: address
            })
          });
        case 3:
          result = _context.sent;
          return _context.abrupt("return", result.json());
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _requestFolder.apply(this, arguments);
}
function requestFiles(_x2) {
  return _requestFiles.apply(this, arguments);
}
function _requestFiles() {
  _requestFiles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(address) {
    var result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch(FILES_REQ + address, {
            method: "GET"
          });
        case 2:
          result = _context2.sent;
          return _context2.abrupt("return", result.json());
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _requestFiles.apply(this, arguments);
}

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/FolderContainer/index.css
var FolderContainer = __webpack_require__(578);
;// CONCATENATED MODULE: ./webindows/components/FolderContainer/index.css

      
      
      
      
      
      
      
      
      

var FolderContainer_options = {};

FolderContainer_options.styleTagTransform = (styleTagTransform_default());
FolderContainer_options.setAttributes = (setAttributesWithoutAttributes_default());

      FolderContainer_options.insert = insertBySelector_default().bind(null, "head");
    
FolderContainer_options.domAPI = (styleDomAPI_default());
FolderContainer_options.insertStyleElement = (insertStyleElement_default());

var FolderContainer_update = injectStylesIntoStyleTag_default()(FolderContainer/* default */.A, FolderContainer_options);




       /* harmony default export */ const components_FolderContainer = (FolderContainer/* default */.A && FolderContainer/* default */.A.locals ? FolderContainer/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/FolderContainer/FoldersMenu/index.js
/* provided dependency */ var FoldersMenu_createElement = __webpack_require__(153)["n"];
function FoldersMenu(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return FoldersMenu_createElement("div", {
    id: props.id,
    className: "winCl-FoldersMenu"
  }, children);
}
;// CONCATENATED MODULE: ./webindows/components/FolderContainer/FoldersMenu/FolderItem/index.js
/* provided dependency */ var FolderItem_createElement = __webpack_require__(153)["n"];

function FolderItem(props) {
  return FolderItem_createElement("div", {
    className: "winCl-FolderItem",
    onDblClick: props.onDblClick
  }, FolderItem_createElement("img", {
    src: ICONS_PATH + props.metadata.other.icon,
    className: "winCl-Icon",
    style: {
      width: "16px",
      height: "16px"
    }
  }), props.metadata.name);
}
;// CONCATENATED MODULE: ./webindows/components/FolderContainer/FoldersMenu/FileItem/index.js
/* provided dependency */ var FileItem_createElement = __webpack_require__(153)["n"];

function FileItem(props) {
  if (!props.file) return FileItem_createElement("div", null);
  return FileItem_createElement("div", {
    className: "winCl-FolderItem",
    onDblClick: props.onDblClick,
    onClick: props.onClick
  }, FileItem_createElement("div", {
    style: {
      width: "60%",
      minWidth: "200px",
      display: "flex",
      alignItems: "center",
      gap: "4px"
    }
  }, FileItem_createElement("img", {
    src: props.file.withPreview ? FILE_PATH + props.file.icon : ICONS_PATH + props.file.icon,
    className: "winCl-Icon",
    style: {
      width: "16px",
      height: "16px"
    }
  }), props.file.name + props.file.extension), FileItem_createElement("div", {
    style: {
      width: "5%",
      minWidth: "50px"
    }
  }, props.file.extension), FileItem_createElement("div", {
    style: {
      width: "15%",
      minWidth: "100px"
    }
  }, props.file.owner), FileItem_createElement("div", {
    style: {
      width: "20%",
      minWidth: "150px"
    }
  }, (props.file.size / 1024).toFixed(2) + " KB"));
}
;// CONCATENATED MODULE: ./webindows/components/FolderContainer/FoldersMenu/ColumnDescription/index.js
/* provided dependency */ var ColumnDescription_createElement = __webpack_require__(153)["n"];
function ColumnDescription(props) {
  return ColumnDescription_createElement("div", {
    className: "winCl-ColumnDescription"
  }, ColumnDescription_createElement("div", {
    className: "winCl-ColumnDescriptionItem",
    style: {
      width: "60%",
      minWidth: "200px"
    }
  }, "Name"), ColumnDescription_createElement("div", {
    className: "winCl-ColumnDescriptionItem",
    style: {
      width: "5%",
      minWidth: "50px"
    }
  }, "Type"), ColumnDescription_createElement("div", {
    className: "winCl-ColumnDescriptionItem",
    style: {
      width: "15%",
      minWidth: "100px"
    }
  }, "Owner"), ColumnDescription_createElement("div", {
    className: "winCl-ColumnDescriptionItem",
    style: {
      width: "20%",
      minWidth: "150px"
    }
  }, "Size"));
}
;// CONCATENATED MODULE: ./webindows/components/FolderContainer/index.js
/* provided dependency */ var FolderContainer_createElement = __webpack_require__(153)["n"];





function FolderContainer_FolderContainer(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  return FolderContainer_createElement("div", {
    className: "winCl-FolderWrapper"
  }, children);
}

;// CONCATENATED MODULE: ./webindows/connect/webindowsEvents.js
/* 
function addFrameEvent(event) {
    const callbackString = event.callback.toString();
    const deps = {
        ...event.dependencies,
    };

    for (const [key, value] of Object.entries(event.dependencies)) {
        if (value instanceof HTMLCollection) {
            deps[key] = [];
            for (const element of value) {
                if (element.id) {
                    deps[key].push({
                        id: element.id,
                        _isHTML: true,
                    });
                }
            }
        }
        if (value instanceof HTMLElement) {
            deps[key] = {
                id: value.id,
                _isHTML: true,
            };
        }
    }

    window.parent.postMessage(
        {
            request: "AddFrameEvent",
            event: {
                name: event.name,
                event: event.event,
                dependencies: deps,
                callback: callbackString,
            },
        },
        "*"
    );
} */

function changeBackground(bgPath) {
  window.parent.postMessage({
    request: "ChangeBackground",
    background: bgPath
  }, "*");
}

;// CONCATENATED MODULE: ./src/AppViews/FoldersView.js
/* provided dependency */ var FoldersView_createElement = __webpack_require__(153)["n"];



function FoldersView() {
  return FoldersView_createElement(FoldersMenu, {
    id: "id_FileExplorer_FoldersMenu"
  });
}
function updateFoldersMenu(newFolders, newFiles) {
  var menu = document.getElementById("id_FileExplorer_FoldersMenu");
  var address = history_history.getCurrentPoint();
  while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
  }
  menu.append(FoldersView_createElement(FolderContainer_FolderContainer, null, FoldersView_createElement(ColumnDescription, null), newFolders.data.map(function (child) {
    return FoldersView_createElement(FolderItem, {
      metadata: child,
      onDblClick: function onDblClick() {
        return goTo(history_history.getCurrentPoint() + "/" + child.name);
      }
    });
  }), newFiles.map(function (child) {
    return FoldersView_createElement(FileItem, {
      file: child,
      onDblClick: function onDblClick() {
        return changeBackground(address + "/" + child.name + child.extension);
      }
    });
  })));
}

;// CONCATENATED MODULE: ./src/history.js
function history_typeof(o) { "@babel/helpers - typeof"; return history_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, history_typeof(o); }
function history_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ history_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == history_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(history_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function history_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function history_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { history_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { history_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var history_history = new LinearHistory("/");
function goTo(_x) {
  return _goTo.apply(this, arguments);
}
function _goTo() {
  _goTo = history_asyncToGenerator( /*#__PURE__*/history_regeneratorRuntime().mark(function _callee(address) {
    var input, newFolders, files;
    return history_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          input = document.getElementById("id_FileExplorer_Address");
          _context.next = 3;
          return requestFolder(address);
        case 3:
          newFolders = _context.sent;
          _context.next = 6;
          return requestFiles(address);
        case 6:
          files = _context.sent;
          history_history.addNew(address);
          input.value = address;
          updateFoldersMenu(newFolders, files);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _goTo.apply(this, arguments);
}
function goToHistory(_x2) {
  return _goToHistory.apply(this, arguments);
}
function _goToHistory() {
  _goToHistory = history_asyncToGenerator( /*#__PURE__*/history_regeneratorRuntime().mark(function _callee2(index) {
    var input, location, newFolders, files;
    return history_regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          input = document.getElementById("id_FileExplorer_Address");
          location = history_history.goToIndex(index);
          _context2.next = 4;
          return requestFolder(location);
        case 4:
          newFolders = _context2.sent;
          _context2.next = 7;
          return requestFiles(location);
        case 7:
          files = _context2.sent;
          input.value = location;
          updateFoldersMenu(newFolders, files);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _goToHistory.apply(this, arguments);
}
function goBack() {
  goToHistory(history_history.getPreviousIndex());
}
function goForward() {
  goToHistory(history_history.getNextIndex());
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
function WebindowsMessageReceiver_typeof(o) { "@babel/helpers - typeof"; return WebindowsMessageReceiver_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, WebindowsMessageReceiver_typeof(o); }
function WebindowsMessageReceiver_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function WebindowsMessageReceiver_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, WebindowsMessageReceiver_toPropertyKey(descriptor.key), descriptor); } }
function WebindowsMessageReceiver_createClass(Constructor, protoProps, staticProps) { if (protoProps) WebindowsMessageReceiver_defineProperties(Constructor.prototype, protoProps); if (staticProps) WebindowsMessageReceiver_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function WebindowsMessageReceiver_toPropertyKey(t) { var i = WebindowsMessageReceiver_toPrimitive(t, "string"); return "symbol" == WebindowsMessageReceiver_typeof(i) ? i : i + ""; }
function WebindowsMessageReceiver_toPrimitive(t, r) { if ("object" != WebindowsMessageReceiver_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != WebindowsMessageReceiver_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var WebindowsMessageReceiver = /*#__PURE__*/function () {
  function WebindowsMessageReceiver() {
    WebindowsMessageReceiver_classCallCheck(this, WebindowsMessageReceiver);
  }
  return WebindowsMessageReceiver_createClass(WebindowsMessageReceiver, [{
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
    id: props.id,
    className: "Button",
    disabled: props.disabled,
    onClick: props.onClick
  }, props.text);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/ButtonIcon/index.css
var ButtonIcon = __webpack_require__(378);
;// CONCATENATED MODULE: ./webindows/components/common/ButtonIcon/index.css

      
      
      
      
      
      
      
      
      

var ButtonIcon_options = {};

ButtonIcon_options.styleTagTransform = (styleTagTransform_default());
ButtonIcon_options.setAttributes = (setAttributesWithoutAttributes_default());

      ButtonIcon_options.insert = insertBySelector_default().bind(null, "head");
    
ButtonIcon_options.domAPI = (styleDomAPI_default());
ButtonIcon_options.insertStyleElement = (insertStyleElement_default());

var ButtonIcon_update = injectStylesIntoStyleTag_default()(ButtonIcon/* default */.A, ButtonIcon_options);




       /* harmony default export */ const common_ButtonIcon = (ButtonIcon/* default */.A && ButtonIcon/* default */.A.locals ? ButtonIcon/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/ButtonIcon/index.js
/* provided dependency */ var ButtonIcon_createElement = __webpack_require__(153)["n"];

function ButtonIcon_ButtonIcon(props) {
  return ButtonIcon_createElement("button", {
    className: "ButtonIcon",
    disabled: props.disabled,
    onClick: props.onClick
  }, ButtonIcon_createElement("img", {
    src: props.src,
    className: "ButtonIcon__icon",
    style: {
      filter: props.isGrey ? "grayscale(100%)" : "none"
    }
  }), props.text);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/Text/index.css
var Text = __webpack_require__(64);
;// CONCATENATED MODULE: ./webindows/components/common/Text/index.css

      
      
      
      
      
      
      
      
      

var Text_options = {};

Text_options.styleTagTransform = (styleTagTransform_default());
Text_options.setAttributes = (setAttributesWithoutAttributes_default());

      Text_options.insert = insertBySelector_default().bind(null, "head");
    
Text_options.domAPI = (styleDomAPI_default());
Text_options.insertStyleElement = (insertStyleElement_default());

var Text_update = injectStylesIntoStyleTag_default()(Text/* default */.A, Text_options);




       /* harmony default export */ const common_Text = (Text/* default */.A && Text/* default */.A.locals ? Text/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/Text/index.js
/* provided dependency */ var Text_createElement = __webpack_require__(153)["n"];

function Text_Text(props) {
  return Text_createElement("p", {
    className: "winCl-Text"
  }, props.text);
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/DividerVertical/index.css
var DividerVertical = __webpack_require__(58);
;// CONCATENATED MODULE: ./webindows/components/common/DividerVertical/index.css

      
      
      
      
      
      
      
      
      

var DividerVertical_options = {};

DividerVertical_options.styleTagTransform = (styleTagTransform_default());
DividerVertical_options.setAttributes = (setAttributesWithoutAttributes_default());

      DividerVertical_options.insert = insertBySelector_default().bind(null, "head");
    
DividerVertical_options.domAPI = (styleDomAPI_default());
DividerVertical_options.insertStyleElement = (insertStyleElement_default());

var DividerVertical_update = injectStylesIntoStyleTag_default()(DividerVertical/* default */.A, DividerVertical_options);




       /* harmony default export */ const common_DividerVertical = (DividerVertical/* default */.A && DividerVertical/* default */.A.locals ? DividerVertical/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/DividerVertical/index.js
/* provided dependency */ var DividerVertical_createElement = __webpack_require__(153)["n"];

function DividerVertical_DividerVertical(props) {
  return DividerVertical_createElement("div", {
    className: "DividerVertical",
    style: {
      height: props.height
    }
  });
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/Input/index.css
var Input = __webpack_require__(851);
;// CONCATENATED MODULE: ./webindows/components/common/Input/index.css

      
      
      
      
      
      
      
      
      

var Input_options = {};

Input_options.styleTagTransform = (styleTagTransform_default());
Input_options.setAttributes = (setAttributesWithoutAttributes_default());

      Input_options.insert = insertBySelector_default().bind(null, "head");
    
Input_options.domAPI = (styleDomAPI_default());
Input_options.insertStyleElement = (insertStyleElement_default());

var Input_update = injectStylesIntoStyleTag_default()(Input/* default */.A, Input_options);




       /* harmony default export */ const common_Input = (Input/* default */.A && Input/* default */.A.locals ? Input/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/Input/index.js
/* provided dependency */ var Input_createElement = __webpack_require__(153)["n"];

function Input_Input(props) {
  return Input_createElement("input", {
    id: props.id,
    className: "Input",
    placeholder: props.placeholder,
    value: props.value,
    type: props.type,
    style: {
      width: props.width
    },
    onInput: props.onInput
  });
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
;// CONCATENATED MODULE: ./src/AppViews/FileExplorerOverview.js
/* provided dependency */ var FileExplorerOverview_createElement = __webpack_require__(153)["n"];



function FileExplorerOverview() {
  return FileExplorerOverview_createElement(AppOverview_AppOverview, null, FileExplorerOverview_createElement(AppOverviewImage, {
    src: "".concat(ASSETS_PATH, "/FileExplorer.png")
  }), FileExplorerOverview_createElement(AppOverviewDescription, {
    text: "Select an item to view its description."
  }), FileExplorerOverview_createElement(InfoBox_InfoBox, {
    text: "Not fully functional.",
    width: "250px"
  }), FileExplorerOverview_createElement(AppOverviewList, {
    text: "See also:"
  }, FileExplorerOverview_createElement(AppOverviewLink, {
    text: "Public"
  }), FileExplorerOverview_createElement(AppOverviewLink, {
    text: "Assets"
  }), FileExplorerOverview_createElement(AppOverviewLink, {
    text: "Icons"
  })));
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./webindows/components/common/Dropdown/index.css
var Dropdown = __webpack_require__(166);
;// CONCATENATED MODULE: ./webindows/components/common/Dropdown/index.css

      
      
      
      
      
      
      
      
      

var Dropdown_options = {};

Dropdown_options.styleTagTransform = (styleTagTransform_default());
Dropdown_options.setAttributes = (setAttributesWithoutAttributes_default());

      Dropdown_options.insert = insertBySelector_default().bind(null, "head");
    
Dropdown_options.domAPI = (styleDomAPI_default());
Dropdown_options.insertStyleElement = (insertStyleElement_default());

var Dropdown_update = injectStylesIntoStyleTag_default()(Dropdown/* default */.A, Dropdown_options);




       /* harmony default export */ const common_Dropdown = (Dropdown/* default */.A && Dropdown/* default */.A.locals ? Dropdown/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./webindows/components/common/Dropdown/index.js
/* provided dependency */ var Dropdown_createElement = __webpack_require__(153)["n"];

function createDropdown(anchorId, id, content) {
  var anchorElem = document.getElementById(anchorId);
  document.addEventListener("mouseup", function (e) {
    if (e.target.classList.contains("DropdownItem")) return;
    if (!document.getElementsByClassName("Dropdown")[0]) return;
    document.getElementsByClassName("Dropdown")[0].parentElement.disabled = false;
    document.getElementsByClassName("Dropdown")[0].parentElement.style.pointerEvents = "auto";
    document.getElementsByClassName("Dropdown")[0].parentElement.style.border = "0";
    document.getElementsByClassName("Dropdown")[0].remove();
  });
  var elem = Dropdown_createElement("div", {
    id: id,
    className: "Dropdown winCl-BGColor winCl-HardOutsetShadow"
  }, content);
  var anchorHeight = parseInt(window.getComputedStyle(anchorElem).getPropertyValue("height"));
  elem.style.top = anchorElem.offsetTop + anchorHeight + "px";
  elem.style.left = anchorElem.offsetLeft + "px";
  anchorElem.append(elem);
  anchorElem.disabled = true;
  anchorElem.style.color = "var(--black)";
  anchorElem.style.border = "2px dotted var(--black)";
  anchorElem.style.pointerEvents = "none";
}
;// CONCATENATED MODULE: ./webindows/components/common/Dropdown/DropdownItem/index.js
/* provided dependency */ var DropdownItem_createElement = __webpack_require__(153)["n"];
function DropdownItem(props) {
  return DropdownItem_createElement("div", {
    className: "DropdownItem",
    onClick: function onClick(e) {
      props.onClick(e);
      document.getElementsByClassName("Dropdown")[0].parentElement.disabled = false;
      document.getElementsByClassName("Dropdown")[0].parentElement.style.pointerEvents = "auto";
      document.getElementsByClassName("Dropdown")[0].parentElement.style.border = "0";
      document.getElementsByClassName("Dropdown")[0].remove();
    }
  }, props.text);
}
;// CONCATENATED MODULE: ./src/index.js
/* provided dependency */ var src_createElement = __webpack_require__(153)["n"];















function init() {
  var root = document.getElementsByTagName("body")[0];
  var address = "/";
  root.append(src_createElement(WindowContent_WindowContent, null, src_createElement(ButtonBarContainer_ButtonBarContainer, null, src_createElement(ButtonBar, null, src_createElement(Button_Button, {
    id: "FileExplorer_FileBtn",
    text: "File",
    disabled: false,
    onClick: function onClick() {
      createDropdown("FileExplorer_FileBtn", "FileExplorer_FileDD", [src_createElement(DropdownItem, {
        text: "New File",
        onClick: function onClick() {
          console.log("New File");
        }
      }), src_createElement(DropdownItem, {
        text: "New File",
        onClick: function onClick() {
          console.log("New File");
        }
      }), src_createElement(DropdownItem, {
        text: "New File",
        onClick: function onClick() {
          console.log("New File");
        }
      }), src_createElement(DropdownItem, {
        text: "New File",
        onClick: function onClick() {
          console.log("New File");
        }
      })]);
    }
  }), src_createElement(Button_Button, {
    id: "FileExplorer_EditBtn",
    text: "Edit",
    disabled: false,
    onClick: function onClick() {
      createDropdown("FileExplorer_EditBtn", "FileExplorer_EditDD", [src_createElement(DropdownItem, {
        text: "New File",
        onClick: function onClick() {
          console.log("New File");
        }
      }), src_createElement(DropdownItem, {
        text: "New File",
        onClick: function onClick() {
          console.log("New File");
        }
      }), src_createElement(DropdownItem, {
        text: "New File",
        onClick: function onClick() {
          console.log("New File");
        }
      }), src_createElement(DropdownItem, {
        text: "New File",
        onClick: function onClick() {
          console.log("New File");
        }
      })]);
    }
  }), src_createElement(Button_Button, {
    text: "View",
    disabled: true
  }), src_createElement(Button_Button, {
    text: "Extra",
    disabled: true
  }), src_createElement(Button_Button, {
    text: "?",
    disabled: true
  })), src_createElement(ButtonBar, null, src_createElement(ButtonIcon_ButtonIcon, {
    src: "".concat(ICONS_PATH, "/progman.exe_14_143.ico"),
    text: "Back",
    disabled: false,
    isGrey: true,
    onClick: function onClick() {
      return goBack();
    }
  }), src_createElement(ButtonIcon_ButtonIcon, {
    src: "".concat(ICONS_PATH, "/progman.exe_14_144.ico"),
    text: "Forward",
    disabled: false,
    isGrey: true,
    onClick: function onClick() {
      return goForward();
    }
  }), src_createElement(Icon_Icon, {
    src: "".concat(ICONS_PATH, "/webcheck.dll_14_114.ico"),
    isGrey: true,
    height: "16px",
    width: "16px"
  }), src_createElement(DividerVertical_DividerVertical, {
    height: "20px"
  }), src_createElement(ButtonIcon_ButtonIcon, {
    src: "".concat(ICONS_PATH, "/home.png"),
    text: "Home",
    isGrey: true,
    disabled: false
  }), src_createElement(ButtonIcon_ButtonIcon, {
    src: "".concat(ICONS_PATH, "/explorer.exe_14_101.ico"),
    text: "Search",
    isGrey: true,
    disabled: false
  }), src_createElement(ButtonIcon_ButtonIcon, {
    src: "".concat(ICONS_PATH, "/shell32.dll_14_4.ico"),
    text: "Folders",
    isGrey: true,
    disabled: false
  }), src_createElement(ButtonIcon_ButtonIcon, {
    src: "".concat(ICONS_PATH, "/snmpsnap.dll_14_6504.ico"),
    text: "History",
    isGrey: true,
    disabled: false
  }), src_createElement(DividerVertical_DividerVertical, {
    height: "20px"
  }), src_createElement(Icon_Icon, {
    src: "".concat(ICONS_PATH, "/syncui.dll_14_126.ico"),
    isGrey: true,
    height: "16px",
    width: "16px"
  }), src_createElement(Icon_Icon, {
    src: "".concat(ICONS_PATH, "/syncui.dll_14_127.ico"),
    isGrey: true,
    height: "16px",
    width: "16px"
  }), src_createElement(Icon_Icon, {
    src: "".concat(ICONS_PATH, "/compstui.dll_14_64003.ico"),
    isGrey: true,
    height: "16px",
    width: "16px"
  })), src_createElement(ButtonBar, {
    gap: "4px"
  }, src_createElement(Text_Text, {
    text: "Address"
  }), src_createElement(Input_Input, {
    id: "id_FileExplorer_Address",
    placeholder: "Input address...",
    value: "/",
    width: "100%",
    onInput: function onInput(e) {
      address = e.target.value;
    }
  }), src_createElement(ButtonIcon_ButtonIcon, {
    src: "".concat(ICONS_PATH, "/progman.exe_14_144.ico"),
    text: "Go",
    disabled: false,
    isGrey: true,
    onClick: function onClick() {
      return goTo(address);
    }
  }))), src_createElement(ViewContainer_ViewContainer, null)));
  addView("25%", src_createElement(FileExplorerOverview, null), false);
  addView("75%", src_createElement(FoldersView, null), false);
  goTo(address);
}
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  addView("25%", src_createElement(FileExplorerOverview, null));
});
init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQixNQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7RUFDL0N4RSxPQUFPLENBQUMsS0FBSyxFQUFFdlMsaUJBQUEsQ0FBQzBPLFdBQVcsTUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO0VBRXRDRCxJQUFJLENBQUM5SyxPQUFPLENBQUM7QUFDakI7QUFFQS9DLFFBQVEsQ0FBQ1ksZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFVBQUNrRCxDQUFDLEVBQUs7RUFDNUNBLENBQUMsQ0FBQ2tNLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCMkIsT0FBTyxDQUFDLEtBQUssRUFBRXZTLGlCQUFBLENBQUMrVyxvQkFBb0IsTUFBRSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBRUZpQixJQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9qc3guanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvRm9sZGVyQ29udGFpbmVyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uSWNvbi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9EaXZpZGVyVmVydGljYWwvaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0Ryb3Bkb3duL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbmZvQm94L2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbnB1dC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vTGluay9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vVGV4dC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmNzcz9kZjAxIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy91dGlscy9oaXN0b3J5LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2Nvbm5lY3QvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9Gb2xkZXJDb250YWluZXIvaW5kZXguY3NzP2FiOTEiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9Gb2xkZXJDb250YWluZXIvRm9sZGVyc01lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9Gb2xkZXJDb250YWluZXIvRm9sZGVyc01lbnUvRm9sZGVySXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0ZvbGRlckNvbnRhaW5lci9Gb2xkZXJzTWVudS9GaWxlSXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0ZvbGRlckNvbnRhaW5lci9Gb2xkZXJzTWVudS9Db2x1bW5EZXNjcmlwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0ZvbGRlckNvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb25uZWN0L3dlYmluZG93c0V2ZW50cy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3NyYy9BcHBWaWV3cy9Gb2xkZXJzVmlldy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9pbmRleC5jc3M/NDNlNSIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LmNzcz81NjEzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL0Nsb3NlQmFyL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9yZW1vdmVWaWV3LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9WaWV3L2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL2FkZFZpZXcuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29ubmVjdC9XZWJpbmRvd3NNZXNzYWdlUmVjZWl2ZXIuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL0J1dHRvbkJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0J1dHRvbkJhckNvbnRhaW5lci9pbmRleC5jc3M/NTNmYyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0J1dHRvbkJhckNvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24vaW5kZXguY3NzPzYzZmUiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbkljb24vaW5kZXguY3NzP2Y1Y2QiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uSWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9UZXh0L2luZGV4LmNzcz84MGU0Iiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL1RleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRGl2aWRlclZlcnRpY2FsL2luZGV4LmNzcz8wMWQ5Iiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0RpdmlkZXJWZXJ0aWNhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbnB1dC9pbmRleC5jc3M/Y2UzYyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L2luZGV4LmNzcz9hNzIxIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvQXBwT3ZlcnZpZXdMaXN0L2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvQXBwT3ZlcnZpZXdJbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L0FwcE92ZXJ2aWV3RGVzY3JpcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vTGluay9pbmRleC5jc3M/ZWQ0MCIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvQXBwT3ZlcnZpZXdMaXN0L0FwcE92ZXJ2aWV3TGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3gvaW5kZXguY3NzPzRmOGMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5mb0JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3NyYy9BcHBWaWV3cy9GaWxlRXhwbG9yZXJPdmVydmlldy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9Ecm9wZG93bi9pbmRleC5jc3M/OTA1OCIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9Ecm9wZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9Ecm9wZG93bi9Ecm9wZG93bkl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggY3JlYXRlRWxlbWVudCAqL1xyXG5cclxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRhZyhwcm9wcywgLi4uY2hpbGRyZW4pO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICBPYmplY3QuZW50cmllcyhwcm9wcyB8fCB7fSkuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCJvblwiKSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xhc3NOYW1lXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwic3R5bGVcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSB2YWx1ZVtwcm9wTmFtZV07XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BOYW1lXSA9IHByb3BWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmRpc2FibGVkID0gQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBhcHBlbmRDaGlsZChlbGVtZW50LCBjaGlsZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmNvbnN0IGFwcGVuZENoaWxkID0gKHBhcmVudCwgY2hpbGQpID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkgcmV0dXJuIGNoaWxkLmZvckVhY2goKG5lc3RlZENoaWxkKSA9PiBhcHBlbmRDaGlsZChwYXJlbnQsIG5lc3RlZENoaWxkKSk7XHJcbiAgICBpZiAoIWNoaWxkKSByZXR1cm47XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQ/Lm5vZGVUeXBlID8gY2hpbGQgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGQgfTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5BcHBPdmVydmlld19fU2VlQWxzbyB7XHJcbiAgICBtYXJnaW46IDE0cHg7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3RJdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5BcHBPdmVydmlld19fU2VlQWxzbyB7XFxyXFxuICAgIG1hcmdpbjogMTRweDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3RJdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5CdXR0b25CYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0cHgpO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKSxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggMHB4IHZhcigtLXNoYWRvdy0zMDApLCAwcHggdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0zMDApO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsU0FBUztJQUNUOzs7c0dBR2tHO0FBQ3RHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5CdXR0b25CYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNHB4KTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKSxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCAwcHggdmFyKC0tc2hhZG93LTMwMCksIDBweCB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTMwMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndpbkNsLUZvbGRlcnNNZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG5cclxuLndpbkNsLUZvbGRlckl0ZW0ge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1ibG9jazogMnB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDJweDtcclxuICAgIGdhcDogNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcclxuICAgIGJvcmRlcjogMnB4IGRvdHRlZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLndpbkNsLUZvbGRlckl0ZW06YWN0aXZlIHtcclxuICAgIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1zaGFkb3ctMzAwKTtcclxufVxyXG5cclxuLndpbkNsLUZvbGRlcldyYXBwZXIge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZ3JleS0yMDApIHNvbGlkIDFweDtcclxufVxyXG5cclxuLndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uSXRlbSB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXHJcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXNoYWRvdy0zMDApIDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNoYWRvdy0zMDApIDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ncmV5LTIwMCkgMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tZ3JleS0yMDApIDFweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktMjAwKTtcclxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJsb2NrOiAxcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9Gb2xkZXJDb250YWluZXIvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLDRCQUE0QjtJQUM1Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLDhCQUE4QjtJQUM5Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSTsrRUFDMkU7SUFDM0UseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQyxzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53aW5DbC1Gb2xkZXJzTWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luQ2wtRm9sZGVySXRlbSB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDJweDtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDJweDtcXHJcXG4gICAgZ2FwOiA0cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XFxyXFxuICAgIGJvcmRlcjogMnB4IGRvdHRlZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbkNsLUZvbGRlckl0ZW06YWN0aXZlIHtcXHJcXG4gICAgYm9yZGVyOiAycHggZG90dGVkIHZhcigtLXNoYWRvdy0zMDApO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luQ2wtRm9sZGVyV3JhcHBlciB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWcpO1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZ3JleS0yMDApIHNvbGlkIDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uSXRlbSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXNoYWRvdy0zMDApIDFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2hhZG93LTMwMCkgMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItbGVmdDogdmFyKC0tZ3JleS0yMDApIDFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tZ3JleS0yMDApIDFweCBzb2xpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS0yMDApO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogNHB4O1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAxcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLlZpZXdDb250YWluZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gODVweCk7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4uVmlldyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLlZpZXdSZXNpemVIYW5kbGVMZWZ0IHtcclxuICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDRweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5DbG9zZUJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDFweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFFBQVE7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVmlld0NvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVmlldyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXdSZXNpemVIYW5kbGVMZWZ0IHtcXHJcXG4gICAgY3Vyc29yOiBldy1yZXNpemU7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLkNsb3NlQmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDFweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuV2luZG93Q29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuV2luZG93Q29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkJ1dHRvbkljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmctYmxvY2s6IDJweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctaW5saW5lOiA4cHg7XHJcbn1cclxuLkJ1dHRvbkljb246YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldDtcclxufVxyXG4uQnV0dG9uSWNvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xyXG59XHJcbi5CdXR0b25JY29uX19pY29uIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25JY29uL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7NkVBQ3lFO0FBQzdFO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkJ1dHRvbkljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDhweDtcXHJcXG59XFxyXFxuLkJ1dHRvbkljb246YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XFxyXFxufVxcclxcbi5CdXR0b25JY29uOmRpc2FibGVkIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xcclxcbn1cXHJcXG4uQnV0dG9uSWNvbl9faWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuQnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nLWJsb2NrOiAycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLWlubGluZTogOHB4O1xyXG59XHJcbi5CdXR0b246YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldDtcclxufVxyXG4uQnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmV5LTMwMCk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7NkVBQ3lFO0FBQzdFO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5CdXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDhweDtcXHJcXG59XFxyXFxuLkJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldDtcXHJcXG59XFxyXFxuLkJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyZXktMzAwKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuRGl2aWRlclZlcnRpY2FsIHtcclxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3ctMjAwKTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQsXHJcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQ7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRGl2aWRlclZlcnRpY2FsL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkM7NkRBQ3lEO0FBQzdEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5EaXZpZGVyVmVydGljYWwge1xcclxcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3ctMjAwKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5Ecm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uRHJvcGRvd25JdGVtIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNS41cHgpO1xyXG4gICAgbWFyZ2luLWJsb2NrOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuLkRyb3Bkb3duSXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLTIwMCk7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0Ryb3Bkb3duL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkRyb3Bkb3duIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLkRyb3Bkb3duSXRlbSB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1LjVweCk7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLkRyb3Bkb3duSXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtMjAwKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuSWNvbiB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5JY29uIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuSW5mb0JveCB7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy0xMDApO1xyXG4gICAgYm9yZGVyOiB2YXIoLS15ZWxsb3ctMjAwKSAxcHggc29saWQ7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5mb0JveC9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxtQ0FBbUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkluZm9Cb3gge1xcclxcbiAgICBtYXJnaW46IDhweDtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMTAwKTtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS15ZWxsb3ctMjAwKSAxcHggc29saWQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkxpbmsge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uTGluazphY3RpdmUge1xyXG4gICAgY29sb3I6IHB1cnBsZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbnB1dC9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkxpbmsge1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLkxpbms6YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuSW5wdXQge1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhdCk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nLWlubGluZTogNHB4O1xyXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXHJcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0LFxyXG4gICAgICAgIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1c24pICogMikgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzbikgKiAyKSAwcHggdmFyKC0tZ3JleS0yMDApIGluc2V0LFxyXG4gICAgICAgIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKSBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMikgMHB4IHZhcigtLXNoYWRvdy0zMDApIGluc2V0O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmsvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUI7OztpR0FHNkY7QUFDakdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLklucHV0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmF0KTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogNHB4O1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQsXFxyXFxuICAgICAgICBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXNuKSAqIDIpIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1c24pICogMikgMHB4IHZhcigtLWdyZXktMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKSBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMikgMHB4IHZhcigtLXNoYWRvdy0zMDApIGluc2V0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5UZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9UZXh0L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5UZXh0IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImNvbnN0IFdCTkRfUkVRID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuY29uc3QgUk9PVF9QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvZm9sZGVyXCI7XHJcbmNvbnN0IEZJTEVfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L2ZpbGVcIjtcclxuY29uc3QgUFVCTElDX1BBVEggPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9wdWJsaWNcIiArIFwiL3dlYmluZG93cy9wdWJsaWMvXCI7XHJcbmNvbnN0IEFTU0VUU19QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvcHVibGljXCIgKyBcIi93ZWJpbmRvd3MvcHVibGljL0Fzc2V0cy9cIjtcclxuY29uc3QgSUNPTlNfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L3B1YmxpY1wiICsgXCIvd2ViaW5kb3dzL3B1YmxpYy9Bc3NldHMvSWNvbnMvXCI7XHJcbmNvbnN0IEZJTEVTX1JFUSA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L2ZpbGVzL1wiO1xyXG5cclxuZXhwb3J0IHsgUFVCTElDX1BBVEgsIEFTU0VUU19QQVRILCBJQ09OU19QQVRILCBGSUxFX1BBVEgsIFJPT1RfUEFUSCwgRklMRVNfUkVRIH07XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaW5kb3dDb250ZW50KHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiV2luZG93Q29udGVudFwiPntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuIiwiY2xhc3MgTGluZWFySGlzdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0UG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbaW5pdFBvc2l0aW9uXTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBuZXcgdmlzaXQgdG8gdGhlIGhpc3RvcnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHthbnl9IGFkZHJlc3MgLSBUaGUgbmV3IGFkZHJlc3MgdG8gYWRkIHRvIHRoZSBoaXN0b3J5LlxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgYWRkTmV3KGFkZHJlc3MpIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnkucHVzaChhZGRyZXNzKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUFkamFjZW50RHVwbGljYXRlcygpO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdvZXMgYmFjayBvbmNlIGluIHRoZSBoaXN0b3J5IGFuZCByZXR1cm5zIHRoYXQgcG9pbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7dHlwZX0gUG9pbnQgaW4gaGlzdG9yeVxyXG4gICAgICovXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPD0gMCkgcmV0dXJuIHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5pbmRleC0tO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHb2VzIGZvcndhcmQgb25jZSBpbiB0aGUgaGlzdG9yeSBhbmQgcmV0dXJucyB0aGF0IHBvaW50LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3R5cGV9IFBvaW50IGluIGhpc3RvcnlcclxuICAgICAqL1xyXG4gICAgZ29Gb3J3YXJkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMuaGlzdG9yeS5sZW5ndGggLSAxKSByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdvZXMgdG8gdGhlIHNwZWNpZmljIGluZGV4IGluIGhpc3RvcnkgYW5kIHJldHVybnMgdGhhdCBwb2ludC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHt0eXBlfSBQb2ludCBpbiBoaXN0b3J5XHJcbiAgICAgKi9cclxuICAgIGdvVG9JbmRleChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvaW50IGluIGhpc3RvcnkuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7dHlwZX0gUG9pbnQgaW4gaGlzdG9yeVxyXG4gICAgICovXHJcbiAgICBnZXRDdXJyZW50UG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgcG9zc2libGUgbmV4dCBpbmRleCBpbiBoaXN0b3J5LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3R5cGV9IFBvaW50IGluIGhpc3RvcnlcclxuICAgICAqL1xyXG4gICAgZ2V0TmV4dEluZGV4KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMuaGlzdG9yeS5sZW5ndGggLSAxKSByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHBvc3NpYmxlIHByZXZpb3VzIGluZGV4IGluIGhpc3RvcnkuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7dHlwZX0gUG9pbnQgaW4gaGlzdG9yeVxyXG4gICAgICovXHJcbiAgICBnZXRQcmV2aW91c0luZGV4KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4IDw9IDApIHJldHVybiB0aGlzLmluZGV4O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4IC0gMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBpbmRleCBpbiBoaXN0b3J5LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3R5cGV9IFBvaW50IGluIGhpc3RvcnlcclxuICAgICAqL1xyXG4gICAgZ2V0Q3VycmVudEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXJzIHRoZSB3aG9sZSBoaXN0b3J5LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3R5cGV9IFBvaW50IGluIGhpc3RvcnlcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWRqYWNlbnREdXBsaWNhdGVzKCkge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IHRoaXMuaGlzdG9yeS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA9PT0gMCB8fCBpdGVtICE9PSB0aGlzLmhpc3RvcnlbaW5kZXggLSAxXTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTGluZWFySGlzdG9yeSB9O1xyXG4iLCJpbXBvcnQgeyBST09UX1BBVEgsIEZJTEVTX1JFUSB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogR2V0IGRhdGEgYWJvdXQgdGhlIGZvbGRlciBhdCB0aGUgc3BlY2lmaWVkIGFkZHJlc3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIC0gVGhlIGFkZHJlc3Mgb2YgdGhlIGZvbGRlciB0byByZXF1ZXN0LlxyXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgSlNPTiByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Rm9sZGVyKGFkZHJlc3MpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2dlZEluVXNlclwiKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFJPT1RfUEFUSCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgICAgICAgcGF0aDogYWRkcmVzcyxcclxuICAgICAgICB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuanNvbigpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGRhdGEgYWJvdXQgYWxsIGZpbGVzIGF0IHRoZSBzcGVjaWZpZWQgYWRkcmVzcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGFkZHJlc3MgLSBUaGUgYWRkcmVzcyBvZiB0aGUgZm9sZGVyIHRvIHJlcXVlc3QuXHJcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBKU09OIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RGaWxlcyhhZGRyZXNzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChGSUxFU19SRVEgKyBhZGRyZXNzLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlcXVlc3RGb2xkZXIsIHJlcXVlc3RGaWxlcyB9O1xyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb2xkZXJzTWVudShwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17cHJvcHMuaWR9IGNsYXNzTmFtZT1cIndpbkNsLUZvbGRlcnNNZW51XCI+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNPTlNfUEFUSCB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb2xkZXJJdGVtKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtRm9sZGVySXRlbVwiIG9uRGJsQ2xpY2s9e3Byb3BzLm9uRGJsQ2xpY2t9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e0lDT05TX1BBVEggKyBwcm9wcy5tZXRhZGF0YS5vdGhlci5pY29ufVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luQ2wtSWNvblwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNnB4XCIsIGhlaWdodDogXCIxNnB4XCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3Byb3BzLm1ldGFkYXRhLm5hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IElDT05TX1BBVEgsIEZJTEVfUEFUSCB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlSXRlbShwcm9wcykge1xyXG4gICAgaWYgKCFwcm9wcy5maWxlKSByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtRm9sZGVySXRlbVwiIG9uRGJsQ2xpY2s9e3Byb3BzLm9uRGJsQ2xpY2t9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiwgbWluV2lkdGg6IFwiMjAwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogXCI0cHhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5maWxlLndpdGhQcmV2aWV3ID8gRklMRV9QQVRIICsgcHJvcHMuZmlsZS5pY29uIDogSUNPTlNfUEFUSCArIHByb3BzLmZpbGUuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5DbC1JY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNnB4XCIsIGhlaWdodDogXCIxNnB4XCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZmlsZS5uYW1lICsgcHJvcHMuZmlsZS5leHRlbnNpb259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjUlXCIsIG1pbldpZHRoOiBcIjUwcHhcIiB9fT57cHJvcHMuZmlsZS5leHRlbnNpb259PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTUlXCIsIG1pbldpZHRoOiBcIjEwMHB4XCIgfX0+e3Byb3BzLmZpbGUub3duZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAlXCIsIG1pbldpZHRoOiBcIjE1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7KHByb3BzLmZpbGUuc2l6ZSAvIDEwMjQpLnRvRml4ZWQoMikgKyBcIiBLQlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sdW1uRGVzY3JpcHRpb24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1Db2x1bW5EZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uSXRlbVwiIHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiLCBtaW5XaWR0aDogXCIyMDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1Db2x1bW5EZXNjcmlwdGlvbkl0ZW1cIiBzdHlsZT17eyB3aWR0aDogXCI1JVwiLCBtaW5XaWR0aDogXCI1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBUeXBlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uSXRlbVwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1JVwiLCBtaW5XaWR0aDogXCIxMDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgT3duZXJcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtQ29sdW1uRGVzY3JpcHRpb25JdGVtXCIgc3R5bGU9e3sgd2lkdGg6IFwiMjAlXCIsIG1pbldpZHRoOiBcIjE1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBTaXplXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgRm9sZGVyc01lbnUgZnJvbSBcIi4vRm9sZGVyc01lbnVcIjtcclxuaW1wb3J0IEZvbGRlckl0ZW0gZnJvbSBcIi4vRm9sZGVyc01lbnUvRm9sZGVySXRlbVwiO1xyXG5pbXBvcnQgRmlsZUl0ZW0gZnJvbSBcIi4vRm9sZGVyc01lbnUvRmlsZUl0ZW1cIjtcclxuaW1wb3J0IENvbHVtbkRlc2NyaXB0aW9uIGZyb20gXCIuL0ZvbGRlcnNNZW51L0NvbHVtbkRlc2NyaXB0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBGb2xkZXJDb250YWluZXIocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1Gb2xkZXJXcmFwcGVyXCI+e2NoaWxkcmVufTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IHsgRm9sZGVyQ29udGFpbmVyLCBGb2xkZXJzTWVudSwgRm9sZGVySXRlbSwgRmlsZUl0ZW0sIENvbHVtbkRlc2NyaXB0aW9uIH07XHJcbiIsIi8qIFxyXG5mdW5jdGlvbiBhZGRGcmFtZUV2ZW50KGV2ZW50KSB7XHJcbiAgICBjb25zdCBjYWxsYmFja1N0cmluZyA9IGV2ZW50LmNhbGxiYWNrLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBkZXBzID0ge1xyXG4gICAgICAgIC4uLmV2ZW50LmRlcGVuZGVuY2llcyxcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXZlbnQuZGVwZW5kZW5jaWVzKSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGRlcHNba2V5XSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwc1trZXldLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2lzSFRNTDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICBkZXBzW2tleV0gPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogdmFsdWUuaWQsXHJcbiAgICAgICAgICAgICAgICBfaXNIVE1MOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWVzdDogXCJBZGRGcmFtZUV2ZW50XCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBldmVudC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LmV2ZW50LFxyXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBkZXBzLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrU3RyaW5nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIqXCJcclxuICAgICk7XHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmQoYmdQYXRoKSB7XHJcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWVzdDogXCJDaGFuZ2VCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJnUGF0aCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiKlwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBjaGFuZ2VCYWNrZ3JvdW5kIH07XHJcbiIsImltcG9ydCB7XHJcbiAgICBGb2xkZXJzTWVudSxcclxuICAgIEZvbGRlckNvbnRhaW5lcixcclxuICAgIEZvbGRlckl0ZW0sXHJcbiAgICBGaWxlSXRlbSxcclxuICAgIENvbHVtbkRlc2NyaXB0aW9uLFxyXG59IGZyb20gXCJAd2ViaW5kb3dzL0ZvbGRlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBnb1RvLCBoaXN0b3J5IH0gZnJvbSBcIi4uL2hpc3RvcnlcIjtcclxuaW1wb3J0IHsgY2hhbmdlQmFja2dyb3VuZCB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3Qvd2ViaW5kb3dzRXZlbnRzXCI7XHJcblxyXG5mdW5jdGlvbiBGb2xkZXJzVmlldygpIHtcclxuICAgIHJldHVybiA8Rm9sZGVyc01lbnUgaWQ9XCJpZF9GaWxlRXhwbG9yZXJfRm9sZGVyc01lbnVcIiAvPjtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRm9sZGVyc01lbnUobmV3Rm9sZGVycywgbmV3RmlsZXMpIHtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkX0ZpbGVFeHBsb3Jlcl9Gb2xkZXJzTWVudVwiKTtcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBoaXN0b3J5LmdldEN1cnJlbnRQb2ludCgpO1xyXG5cclxuICAgIHdoaWxlIChtZW51LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBtZW51LnJlbW92ZUNoaWxkKG1lbnUuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudS5hcHBlbmQoXHJcbiAgICAgICAgPEZvbGRlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENvbHVtbkRlc2NyaXB0aW9uIC8+XHJcbiAgICAgICAgICAgIHtuZXdGb2xkZXJzLmRhdGEubWFwKChjaGlsZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZvbGRlckl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YT17Y2hpbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25EYmxDbGljaz17KCkgPT4gZ29UbyhoaXN0b3J5LmdldEN1cnJlbnRQb2ludCgpICsgXCIvXCIgKyBjaGlsZC5uYW1lKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICB7bmV3RmlsZXMubWFwKChjaGlsZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZpbGVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZT17Y2hpbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25EYmxDbGljaz17KCkgPT4gY2hhbmdlQmFja2dyb3VuZChhZGRyZXNzICsgXCIvXCIgKyBjaGlsZC5uYW1lICsgY2hpbGQuZXh0ZW5zaW9uKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRm9sZGVyQ29udGFpbmVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgRm9sZGVyc1ZpZXcsIHVwZGF0ZUZvbGRlcnNNZW51IH07XHJcbiIsImltcG9ydCB7IExpbmVhckhpc3RvcnkgfSBmcm9tIFwiQHdlYmluZG93cy91dGlscy9oaXN0b3J5LmpzXCI7XHJcbmltcG9ydCB7IHJlcXVlc3RGaWxlcywgcmVxdWVzdEZvbGRlciB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvcmVxdWVzdHMuanNcIjtcclxuaW1wb3J0IHsgdXBkYXRlRm9sZGVyc01lbnUgfSBmcm9tIFwiLi9BcHBWaWV3cy9Gb2xkZXJzVmlldy5qc1wiO1xyXG5cclxuY29uc3QgaGlzdG9yeSA9IG5ldyBMaW5lYXJIaXN0b3J5KFwiL1wiKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdvVG8oYWRkcmVzcykge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkX0ZpbGVFeHBsb3Jlcl9BZGRyZXNzXCIpO1xyXG4gICAgY29uc3QgbmV3Rm9sZGVycyA9IGF3YWl0IHJlcXVlc3RGb2xkZXIoYWRkcmVzcyk7XHJcbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IHJlcXVlc3RGaWxlcyhhZGRyZXNzKTtcclxuXHJcbiAgICBoaXN0b3J5LmFkZE5ldyhhZGRyZXNzKTtcclxuICAgIGlucHV0LnZhbHVlID0gYWRkcmVzcztcclxuXHJcbiAgICB1cGRhdGVGb2xkZXJzTWVudShuZXdGb2xkZXJzLCBmaWxlcyk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdvVG9IaXN0b3J5KGluZGV4KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfRmlsZUV4cGxvcmVyX0FkZHJlc3NcIik7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGhpc3RvcnkuZ29Ub0luZGV4KGluZGV4KTtcclxuICAgIGNvbnN0IG5ld0ZvbGRlcnMgPSBhd2FpdCByZXF1ZXN0Rm9sZGVyKGxvY2F0aW9uKTtcclxuICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgcmVxdWVzdEZpbGVzKGxvY2F0aW9uKTtcclxuXHJcbiAgICBpbnB1dC52YWx1ZSA9IGxvY2F0aW9uO1xyXG5cclxuICAgIHVwZGF0ZUZvbGRlcnNNZW51KG5ld0ZvbGRlcnMsIGZpbGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ29CYWNrKCkge1xyXG4gICAgZ29Ub0hpc3RvcnkoaGlzdG9yeS5nZXRQcmV2aW91c0luZGV4KCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnb0ZvcndhcmQoKSB7XHJcbiAgICBnb1RvSGlzdG9yeShoaXN0b3J5LmdldE5leHRJbmRleCgpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ29UbywgZ29CYWNrLCBnb0ZvcndhcmQsIGhpc3RvcnkgfTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgIHNyYz17cHJvcHMuc3JjfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiSWNvblwiICsgKHByb3BzLmNsYXNzTmFtZSA/IFwiIFwiICsgcHJvcHMuY2xhc3NOYW1lIDogXCJcIil9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvcHMuaXNHcmV5ID8gXCJncmF5c2NhbGUoMTAwJSlcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBJY29uIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0ljb25cIjtcclxuaW1wb3J0IHsgQVNTRVRTX1BBVEggfSBmcm9tIFwiQHdlYmluZG93cy9jb25uZWN0L2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvc2VCYXIocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDbG9zZUJhclwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5DbC1IYXJkT3V0c2V0U2hhZG93IHdpbkNsLUJHQ29sb3JcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTZweFwiIH19XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbkNsLUhhcmRPdXRzZXRTaGFkb3cgd2luQ2wtQkdDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e0FTU0VUU19QQVRIICsgXCIvSW1nX0J1dHRvbl9DbG9zZS5QTkdcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZVZpZXcoaWQpIHtcclxuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBjb25zdCB2aWV3V2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh2aWV3KS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpO1xyXG4gICAgY29uc3Qgc3ViVmlld3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld1wiKTtcclxuICAgIGxldCBwcmV2VmlldztcclxuICAgIGxldCByZXNpemVWaWV3O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdWJWaWV3c1tpXS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcHJldlZpZXcgPSBzdWJWaWV3c1tpIC0gMV07XHJcbiAgICAgICAgICAgIHJlc2l6ZVZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBWaWV3UmVzaXplSGFuZGxlTGVmdGApW2kgLSAxXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcHJldlZpZXdXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHByZXZWaWV3KS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpO1xyXG4gICAgcHJldlZpZXcuc3R5bGUud2lkdGggPSBwcmV2Vmlld1dpZHRoICsgdmlld1dpZHRoICsgMTIgKyBcInB4XCI7XHJcblxyXG4gICAgaWYgKHJlc2l6ZVZpZXcpIHJlc2l6ZVZpZXcucmVtb3ZlKCk7XHJcbiAgICBpZiAodmlldykgdmlldy5yZW1vdmUoKTtcclxufVxyXG4iLCJpbXBvcnQgQ2xvc2VCYXIgZnJvbSBcIi4uL0Nsb3NlQmFyXCI7XHJcbmltcG9ydCByZW1vdmVWaWV3IGZyb20gXCIuLi9yZW1vdmVWaWV3XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3KHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luQ2wtSGFyZEluc2V0U2hhZG93IFZpZXdcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogcHJvcHMud2lkdGggfX1cclxuICAgICAgICAgICAgb25Db250ZXh0bWVudT17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5pc0Nsb3NhYmxlICYmIDxDbG9zZUJhciBvbkNsaWNrPXsoKSA9PiByZW1vdmVWaWV3KHByb3BzLmlkKX0gLz59XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFN1YnRyYWN0cyBhIHZhbHVlIGZyb20gYW5vdGhlciB1bnRpbCBsaW1pdC5cclxuICogSWYgbGltaXQgaXMgbWV0LCB0aGVuIHN1YnRyYWN0IGZyb20gdmFsdWUgdGhlIHJlc3QuXHJcbiAqIERlZmF1bHQgbGltaXQgaXMgMTUwXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBzdWJ0cmFjdC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGZyb20gLSBUaGUgdmFsdWUgdG8gc3VidHJhY3QgZnJvbS5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtsaW1pdD0xNTBdIC0gVGhlIGxpbWl0IHRvIHN1YnRyYWN0IGZyb20uXHJcbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyB4IGFuZCB5IHJlcHJlc2VudGluZyB0aGUgc3VidHJhY3RlZCB2YWx1ZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdWJ0cmFjdEZyb20odmFsdWUsIGZyb20sIGxpbWl0ID0gMTUwKSB7XHJcbiAgICBsZXQgcmVtYWluaW5nRnJvbSA9IGZyb20gLSB2YWx1ZTtcclxuICAgIGxldCBzdWJ0cmFjdGVkVmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAocmVtYWluaW5nRnJvbSA8IGxpbWl0KSB7XHJcbiAgICAgICAgY29uc3QgdG9TdWJ0cmFjdCA9IHZhbHVlIC0gTWF0aC5hYnMobGltaXQgLSBmcm9tKTtcclxuICAgICAgICByZW1haW5pbmdGcm9tID0gbGltaXQ7XHJcbiAgICAgICAgc3VidHJhY3RlZFZhbHVlID0gdmFsdWUgLSB0b1N1YnRyYWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHg6IHN1YnRyYWN0ZWRWYWx1ZSwgeTogcmVtYWluaW5nRnJvbSB9O1xyXG59XHJcblxyXG4vKipcclxuICogQ2xhbXBzIGEgdmFsdWUgYmV0d2VlbiBhbiB1cHBlciBhbmQgbG93ZXIgYm91bmQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjbGFtcC5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBsb3dlciBib3VuZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSB1cHBlciBib3VuZC5cclxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgY2xhbXBlZCB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xyXG59XHJcblxyXG4vKipcclxuICogU3VidHJhY3RzIGFuIGVxdWFsIHNoYXJlIGZyb20gZWFjaCBlbGVtZW50IGluIHRoZSBhcnJheSBiYXNlZCBvbiB0aGUgdG90YWwgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB0b3RhbCB2YWx1ZSB0byBzcGxpdCBhbW9uZyB0aGUgZWxlbWVudHMuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IG9mIHZhbHVlcyB0byBzdWJ0cmFjdCBmcm9tLlxyXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG1vZGlmaWVkIGFycmF5IGFmdGVyIHN1YnRyYWN0aW5nIHRoZSBlcXVhbCBzaGFyZSBmcm9tIGVhY2ggZWxlbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIHN1YnRyYWN0RXF1YWxTaGFyZSh2YWx1ZSwgYXJyYXkpIHtcclxuICAgIGlmIChhcnJheS5sZW5ndGggPT0gMCkgcmV0dXJuIGFycmF5O1xyXG4gICAgY29uc3Qgc2hhcmUgPSB2YWx1ZSAvIGFycmF5Lmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJyYXlbaV0gLSBzaGFyZTtcclxuICAgICAgICBhcnJheVtpXSA9IE1hdGgubWF4KG5ld1ZhbHVlLCAxNTApO1xyXG4gICAgICAgIHZhbHVlIC09IGFycmF5W2ldIC0gbmV3VmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGlmIHR3byBudW1iZXJzIGFyZSBuZWFybHkgZXF1YWwgd2l0aGluIGEgc3BlY2lmaWVkIGVwc2lsb24gdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW0xIC0gVGhlIGZpcnN0IG51bWJlciB0byBjb21wYXJlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtMiAtIFRoZSBzZWNvbmQgbnVtYmVyIHRvIGNvbXBhcmUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZXBzaWxvbj0xXSAtIFRoZSBhY2NlcHRhYmxlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbnVtYmVycy5cclxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgbnVtYmVycyBhcmUgbmVhcmx5IGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBuZWFybHlFcXVhbChudW0xLCBudW0yLCBlcHNpbG9uID0gMSkge1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKG51bTEgLSBudW0yKSA8IGVwc2lsb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGVxdWFsIHNoYXJlIHRvIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgYmFzZWQgb24gdGhlIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdG90YWwgdmFsdWUgdG8gc3BsaXQgYW1vbmcgdGhlIGVsZW1lbnRzLlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSBvZiB2YWx1ZXMgdG8gYWRkIHRvLlxyXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG1vZGlmaWVkIGFycmF5LlxyXG4gKi9cclxuZnVuY3Rpb24gc3ByZWFkVmFsdWVBY3Jvc3NBcnJheSh2YWx1ZSwgYXJyKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBhcnIubGVuZ3RoO1xyXG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuIGFycjtcclxuICAgIGNvbnN0IGVxdWFsVmFsdWUgPSB2YWx1ZSAvIGxlbmd0aDtcclxuICAgIGNvbnN0IHNwcmVhZEFycmF5ID0gYXJyLm1hcCgobnVtKSA9PiBudW0gKyBlcXVhbFZhbHVlKTtcclxuICAgIHJldHVybiBzcHJlYWRBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IHsgc3VidHJhY3RGcm9tLCBjbGFtcCwgc3VidHJhY3RFcXVhbFNoYXJlLCBuZWFybHlFcXVhbCwgc3ByZWFkVmFsdWVBY3Jvc3NBcnJheSB9O1xyXG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XHJcbmltcG9ydCB7IHN1YnRyYWN0RnJvbSwgY2xhbXAgfSBmcm9tIFwiQHdlYmluZG93cy91dGlscy9tYXRoXCI7XHJcblxyXG4vKipcclxuICogQWRkIGEgbmV3IHZpZXcgdG8gdGhlIHZpZXcgY29udGFpbmVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5pdFdpZHRoIC0gVGhlIGluaXRpYWwgd2lkdGggb2YgdGhlIG5ldyB2aWV3LlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50IC0gVGhlIGNvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBuZXcgdmlldy5cclxuICogQHBhcmFtIHtib29sZWFufSBpc0Nsb3NhYmxlIC0gSW5jbHVkZSBhIGJ1dHRvbiB0byBjbG9zZSB0aGUgdmlldy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFZpZXcoaW5pdFdpZHRoLCBjb250ZW50LCBpc0Nsb3NhYmxlID0gdHJ1ZSkge1xyXG4gICAgY29uc3Qgc3ViV2luZG93V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJWaWV3Q29udGFpbmVyXCIpWzBdO1xyXG4gICAgY29uc3Qgc3ViV2luZG93cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJWaWV3XCIpO1xyXG4gICAgY29uc3QgcmVzaXplSGFuZGxlTGVmdCA9IDxkaXYgY2xhc3NOYW1lPVwiVmlld1Jlc2l6ZUhhbmRsZUxlZnRcIj48L2Rpdj47XHJcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICBsZXQgZGVzaXJlZFdpZHRoID0gKHBhcnNlSW50KGluaXRXaWR0aCkgKiB3aW5kb3dXaWR0aCkgLyAxMDA7XHJcbiAgICBpZiAoc3ViV2luZG93cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdFdpbmRvdyA9IHN1YldpbmRvd3Nbc3ViV2luZG93cy5sZW5ndGggLSAxXTtcclxuICAgICAgICBjb25zdCBsYXN0V2luZG93V2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShsYXN0V2luZG93KS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpO1xyXG4gICAgICAgIGlmIChsYXN0V2luZG93V2lkdGggPCAxNzUpIHJldHVybjtcclxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHN1YnRyYWN0RnJvbShkZXNpcmVkV2lkdGgsIGxhc3RXaW5kb3dXaWR0aCk7XHJcbiAgICAgICAgZGVzaXJlZFdpZHRoID0geDtcclxuICAgICAgICBsYXN0V2luZG93LnN0eWxlLndpZHRoID0geSAtIDQgKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpZCA9IGBpZF9WaWV3XyR7c3ViV2luZG93cy5sZW5ndGggKyAxfWA7XHJcbiAgICBjb25zdCBuZXdTdWJXaW5kb3cgPSA8VmlldyBpZD17aWR9IHdpZHRoPXtkZXNpcmVkV2lkdGggLSA4ICsgXCJweFwifSBpc0Nsb3NhYmxlPXtpc0Nsb3NhYmxlfT48L1ZpZXc+O1xyXG5cclxuICAgIGlmIChzdWJXaW5kb3dzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzdWJXaW5kb3dXcmFwcGVyLmFwcGVuZChyZXNpemVIYW5kbGVMZWZ0KTtcclxuICAgIH1cclxuICAgIG5ld1N1YldpbmRvdy5hcHBlbmQoY29udGVudCk7XHJcbiAgICBzdWJXaW5kb3dXcmFwcGVyLmFwcGVuZChuZXdTdWJXaW5kb3cpO1xyXG5cclxuICAgIHJlc2l6ZUhhbmRsZUxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3ViVmlld3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld1wiKTtcclxuICAgICAgICBsZXQgc3ViV2luZG93Q3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpZF9WaWV3XyR7c3ViV2luZG93cy5sZW5ndGggLSAxfWApO1xyXG4gICAgICAgIGxldCBzdWJXaW5kb3dOZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlkX1ZpZXdfJHtzdWJXaW5kb3dzLmxlbmd0aH1gKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzdWJWaWV3c1tpXS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHN1YldpbmRvd0N1cnJlbnQgPSBzdWJWaWV3c1tpIC0gMV07XHJcbiAgICAgICAgICAgICAgICBzdWJXaW5kb3dOZXh0ID0gc3ViVmlld3NbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzYXZlZFdpZHRoQ3VycmVudCA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJXaW5kb3dDdXJyZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNhdmVkV2lkdGhOZXh0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViV2luZG93TmV4dCkuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGhEaWZmID0gZS5jbGllbnRYIC0gKHN1YldpbmRvd0N1cnJlbnQub2Zmc2V0TGVmdCArIHNhdmVkV2lkdGhDdXJyZW50KTtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q3VycmVudFdpZHRoID0gY2xhbXAoXHJcbiAgICAgICAgICAgICAgICBzYXZlZFdpZHRoQ3VycmVudCArIHdpZHRoRGlmZixcclxuICAgICAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICAgICAgc2F2ZWRXaWR0aEN1cnJlbnQgKyBzYXZlZFdpZHRoTmV4dCAtIDUwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05leHRXaWR0aCA9IGNsYW1wKFxyXG4gICAgICAgICAgICAgICAgc2F2ZWRXaWR0aE5leHQgLSB3aWR0aERpZmYsXHJcbiAgICAgICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgICAgIHNhdmVkV2lkdGhDdXJyZW50ICsgc2F2ZWRXaWR0aE5leHQgLSA1MFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzdWJXaW5kb3dDdXJyZW50LnN0eWxlLndpZHRoID0gbmV3Q3VycmVudFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICBzdWJXaW5kb3dOZXh0LnN0eWxlLndpZHRoID0gbmV3TmV4dFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsImNsYXNzIFdlYmluZG93c01lc3NhZ2VSZWNlaXZlciB7XHJcbiAgICBvbldpbmRvd1Jlc2l6ZShjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X3Jlc2l6ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dSZXNpemVTdGFydChjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X3Jlc2l6ZV9zdGFydFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dSZXNpemVFbmQoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19yZXNpemVfZW5kXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd0JlZm9yZUV4cGFuZChjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X2JlZm9yZV9leHBhbmRcIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2luZG93RXhwYW5kKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZXZlbnQgPT0gXCJ3aW5kb3dfZXhwYW5kXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd0JlZm9yZVVuZXhwYW5kKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZXZlbnQgPT0gXCJ3aW5kb3dfYmVmb3JlX3VuZXhwYW5kXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd1VuZXhwYW5kKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZXZlbnQgPT0gXCJ3aW5kb3dfdW5leHBhbmRcIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2luZG93T3BlbihjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X29wZW5cIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2luZG93Q2xvc2UoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19jbG9zZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHdpbmRvd0V2ZW50cyA9IG5ldyBXZWJpbmRvd3NNZXNzYWdlUmVjZWl2ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpbmRvd0V2ZW50cztcclxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xyXG5pbXBvcnQgYWRkVmlldyBmcm9tIFwiLi9hZGRWaWV3XCI7XHJcbmltcG9ydCB3aW5kb3dFdmVudHMgZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9XZWJpbmRvd3NNZXNzYWdlUmVjZWl2ZXJcIjtcclxuaW1wb3J0IHsgc3ByZWFkVmFsdWVBY3Jvc3NBcnJheSB9IGZyb20gXCJAd2ViaW5kb3dzL3V0aWxzL21hdGhcIjtcclxuXHJcbmZ1bmN0aW9uIFZpZXdDb250YWluZXIocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJWaWV3Q29udGFpbmVyXCI+e2NoaWxkcmVufTwvZGl2PjtcclxufVxyXG5cclxubGV0IHdpbmRvd1dpZHRoU3RhcnQgPSAwO1xyXG5sZXQgc2F2ZWRXaWR0aHMgPSBbXTtcclxuXHJcbndpbmRvd0V2ZW50cy5vbldpbmRvd0JlZm9yZUV4cGFuZCgoZGF0YSkgPT4ge1xyXG4gICAgc2F2ZVZpZXdXaWR0aHMoZGF0YSk7XHJcbn0pO1xyXG5cclxud2luZG93RXZlbnRzLm9uV2luZG93QmVmb3JlVW5leHBhbmQoKGRhdGEpID0+IHtcclxuICAgIHNhdmVWaWV3V2lkdGhzKGRhdGEpO1xyXG59KTtcclxuXHJcbndpbmRvd0V2ZW50cy5vbldpbmRvd1Jlc2l6ZVN0YXJ0KChkYXRhKSA9PiB7XHJcbiAgICBzYXZlVmlld1dpZHRocyhkYXRhKTtcclxufSk7XHJcblxyXG53aW5kb3dFdmVudHMub25XaW5kb3dSZXNpemVFbmQoKCkgPT4ge1xyXG4gICAgY2xlYXJWaWV3V2lkdGhzKCk7XHJcbn0pO1xyXG5cclxud2luZG93RXZlbnRzLm9uV2luZG93UmVzaXplKChkYXRhKSA9PiB7XHJcbiAgICBhZGp1c3RWaWV3U2l6ZXMoZGF0YSk7XHJcbn0pO1xyXG5cclxud2luZG93RXZlbnRzLm9uV2luZG93RXhwYW5kKChkYXRhKSA9PiB7XHJcbiAgICBhZGp1c3RWaWV3U2l6ZXMoZGF0YSk7XHJcbiAgICBjbGVhclZpZXdXaWR0aHMoKTtcclxufSk7XHJcblxyXG53aW5kb3dFdmVudHMub25XaW5kb3dVbmV4cGFuZCgoZGF0YSkgPT4ge1xyXG4gICAgYWRqdXN0Vmlld1NpemVzKGRhdGEpO1xyXG4gICAgY2xlYXJWaWV3V2lkdGhzKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2xlYXJWaWV3V2lkdGhzKCkge1xyXG4gICAgd2luZG93V2lkdGhTdGFydCA9IDA7XHJcbiAgICBzYXZlZFdpZHRocyA9IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlVmlld1dpZHRocyhkYXRhKSB7XHJcbiAgICB3aW5kb3dXaWR0aFN0YXJ0ID0gZGF0YS53aW5kb3dTaXplLndpZHRoO1xyXG4gICAgY29uc3Qgc3ViVmlld3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld1wiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzYXZlZFdpZHRocy5wdXNoKHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1YlZpZXdzW2ldKS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRqdXN0Vmlld1NpemVzKGRhdGEpIHtcclxuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gZGF0YS53aW5kb3dTaXplLndpZHRoO1xyXG4gICAgY29uc3Qgc3ViVmlld3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld1wiKTtcclxuICAgIGNvbnN0IG5ld1dpZHRocyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IHNhdmVkV2lkdGhzW2ldO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aFByZWMgPSBjdXJyZW50V2lkdGggLyB3aW5kb3dXaWR0aFN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IG5ld1dpZHRoID0gd2luZG93V2lkdGggKiBjdXJyZW50V2lkdGhQcmVjO1xyXG4gICAgICAgIG5ld1dpZHRocy5wdXNoKG5ld1dpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaWZmID0gd2luZG93V2lkdGggLSBuZXdXaWR0aHMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICBjb25zdCBhZGp1c3RlZFdpZHRocyA9IHNwcmVhZFZhbHVlQWNyb3NzQXJyYXkoZGlmZiwgbmV3V2lkdGhzKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3ViVmlld3NbaV0uc3R5bGUud2lkdGggPSBhZGp1c3RlZFdpZHRoc1tpXSAtIDggKyBcInB4XCI7XHJcbiAgICAgICAgaWYgKGkgPT0gc3ViVmlld3MubGVuZ3RoIC0gMSkgc3ViVmlld3NbaV0uc3R5bGUud2lkdGggPSBhZGp1c3RlZFdpZHRoc1tpXSAtIDQgKiAoaSArIDEpICsgXCJweFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBWaWV3LCBhZGRWaWV3LCBWaWV3Q29udGFpbmVyIH07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkJhcihwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCdXR0b25CYXJcIiBzdHlsZT17eyBnYXA6IHByb3BzPy5nYXAgPz8gXCI0cHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1EaXZpZGVyQmlnVmVydGljYWxcIiBzdHlsZT1cImhlaWdodDogMjJweDsgbWFyZ2luLWJsb2NrOiAycHhcIj48L2Rpdj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgQnV0dG9uQmFyIGZyb20gXCIuL0J1dHRvbkJhclwiO1xyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gQnV0dG9uQmFyQ29udGFpbmVyKHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbkNsLUhhcmRJbnNldFNoYWRvd1wiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+e2NoaWxkfTwvZGl2PjtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBCdXR0b25CYXIsIEJ1dHRvbkJhckNvbnRhaW5lciB9O1xyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gaWQ9e3Byb3BzLmlkfSBjbGFzc05hbWU9XCJCdXR0b25cIiBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkljb24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJCdXR0b25JY29uXCIgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5zcmN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJCdXR0b25JY29uX19pY29uXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZpbHRlcjogcHJvcHMuaXNHcmV5ID8gXCJncmF5c2NhbGUoMTAwJSlcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dChwcm9wcykge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cIndpbkNsLVRleHRcIj57cHJvcHMudGV4dH08L3A+O1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXZpZGVyVmVydGljYWwocHJvcHMpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIkRpdmlkZXJWZXJ0aWNhbFwiIHN0eWxlPXt7IGhlaWdodDogcHJvcHMuaGVpZ2h0IH19PjwvZGl2PjtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPXtwcm9wcy5pZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiSW5wdXRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHByb3BzLndpZHRoIH19XHJcbiAgICAgICAgICAgIG9uSW5wdXQ9e3Byb3BzLm9uSW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwT3ZlcnZpZXdMaXN0KHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcE92ZXJ2aWV3X19TZWVBbHNvXCI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIgfX0+e3Byb3BzLnRleHR9PC9wPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiQXBwT3ZlcnZpZXdfX1NlZUFsc29MaXN0XCI+e2NoaWxkcmVufTwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcE92ZXJ2aWV3SW1hZ2UocHJvcHMpIHtcclxuICAgIHJldHVybiA8aW1nIHNyYz17cHJvcHMuc3JjfSBzdHlsZT17eyB3aWR0aDogXCIyNTBweFwiIH19IC8+O1xyXG59XHJcblxyXG4vL0FTU0VUU19QQVRIICsgXCJGaWxlRXhwbG9yZXIucG5nXCJcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIxNHB4XCIsIG1pbldpZHRoOiBcIjE1MHB4XCIgfX0+e3Byb3BzLnRleHR9PC9wPjtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGluayhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJMaW5rXCIgaHJlZj17cHJvcHMuaHJlZn0gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgIDwvYT5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vTGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwT3ZlcnZpZXdMaW5rKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJBcHBPdmVydmlld19fU2VlQWxzb0xpc3RJdGVtXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLnRvfSB0ZXh0PXtwcm9wcy50ZXh0fSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBBcHBPdmVydmlld0xpc3QgZnJvbSBcIi4vQXBwT3ZlcnZpZXdMaXN0XCI7XHJcbmltcG9ydCBBcHBPdmVydmlld0ltYWdlIGZyb20gXCIuL0FwcE92ZXJ2aWV3SW1hZ2VcIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3RGVzY3JpcHRpb24gZnJvbSBcIi4vQXBwT3ZlcnZpZXdEZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgQXBwT3ZlcnZpZXdMaW5rIGZyb20gXCIuL0FwcE92ZXJ2aWV3TGlzdC9BcHBPdmVydmlld0xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIEFwcE92ZXJ2aWV3KHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiQXBwT3ZlcnZpZXdcIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgeyBBcHBPdmVydmlld0xpc3QsIEFwcE92ZXJ2aWV3SW1hZ2UsIEFwcE92ZXJ2aWV3RGVzY3JpcHRpb24sIEFwcE92ZXJ2aWV3LCBBcHBPdmVydmlld0xpbmsgfTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9Cb3gocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbmZvQm94XCIgc3R5bGU9e3sgd2lkdGg6IHByb3BzLndpZHRoIH19IGlkPXtwcm9wcy5pZH0+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy50ZXh0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIEFwcE92ZXJ2aWV3LFxyXG4gICAgQXBwT3ZlcnZpZXdMaW5rLFxyXG4gICAgQXBwT3ZlcnZpZXdMaXN0LFxyXG4gICAgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbixcclxuICAgIEFwcE92ZXJ2aWV3SW1hZ2UsXHJcbn0gZnJvbSBcIkB3ZWJpbmRvd3MvQXBwT3ZlcnZpZXdcIjtcclxuaW1wb3J0IHsgQVNTRVRTX1BBVEggfSBmcm9tIFwiQHdlYmluZG93cy9jb25uZWN0L2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiLi4vLi4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVFeHBsb3Jlck92ZXJ2aWV3KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwT3ZlcnZpZXc+XHJcbiAgICAgICAgICAgIDxBcHBPdmVydmlld0ltYWdlIHNyYz17YCR7QVNTRVRTX1BBVEh9L0ZpbGVFeHBsb3Jlci5wbmdgfSAvPlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiB0ZXh0PVwiU2VsZWN0IGFuIGl0ZW0gdG8gdmlldyBpdHMgZGVzY3JpcHRpb24uXCIgLz5cclxuICAgICAgICAgICAgPEluZm9Cb3ggdGV4dD1cIk5vdCBmdWxseSBmdW5jdGlvbmFsLlwiIHdpZHRoPVwiMjUwcHhcIiAvPlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdMaXN0IHRleHQ9XCJTZWUgYWxzbzpcIj5cclxuICAgICAgICAgICAgICAgIDxBcHBPdmVydmlld0xpbmsgdGV4dD1cIlB1YmxpY1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8QXBwT3ZlcnZpZXdMaW5rIHRleHQ9XCJBc3NldHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEFwcE92ZXJ2aWV3TGluayB0ZXh0PVwiSWNvbnNcIiAvPlxyXG4gICAgICAgICAgICA8L0FwcE92ZXJ2aWV3TGlzdD5cclxuICAgICAgICA8L0FwcE92ZXJ2aWV3PlxyXG4gICAgKTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24oYW5jaG9ySWQsIGlkLCBjb250ZW50KSB7XHJcbiAgICBjb25zdCBhbmNob3JFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYW5jaG9ySWQpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIkRyb3Bkb3duSXRlbVwiKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkRyb3Bkb3duXCIpWzBdKSByZXR1cm47XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkRyb3Bkb3duXCIpWzBdLnBhcmVudEVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiRHJvcGRvd25cIilbMF0ucGFyZW50RWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkRyb3Bkb3duXCIpWzBdLnBhcmVudEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCIwXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkRyb3Bkb3duXCIpWzBdLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZWxlbSA9IChcclxuICAgICAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPVwiRHJvcGRvd24gd2luQ2wtQkdDb2xvciB3aW5DbC1IYXJkT3V0c2V0U2hhZG93XCI+XHJcbiAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhbmNob3JIZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhbmNob3JFbGVtKS5nZXRQcm9wZXJ0eVZhbHVlKFwiaGVpZ2h0XCIpKTtcclxuICAgIGVsZW0uc3R5bGUudG9wID0gYW5jaG9yRWxlbS5vZmZzZXRUb3AgKyBhbmNob3JIZWlnaHQgKyBcInB4XCI7XHJcbiAgICBlbGVtLnN0eWxlLmxlZnQgPSBhbmNob3JFbGVtLm9mZnNldExlZnQgKyBcInB4XCI7XHJcblxyXG4gICAgYW5jaG9yRWxlbS5hcHBlbmQoZWxlbSk7XHJcbiAgICBhbmNob3JFbGVtLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGFuY2hvckVsZW0uc3R5bGUuY29sb3IgPSBcInZhcigtLWJsYWNrKVwiO1xyXG4gICAgYW5jaG9yRWxlbS5zdHlsZS5ib3JkZXIgPSBcIjJweCBkb3R0ZWQgdmFyKC0tYmxhY2spXCI7XHJcbiAgICBhbmNob3JFbGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bkl0ZW0ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJEcm9wZG93bkl0ZW1cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25DbGljayhlKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJEcm9wZG93blwiKVswXS5wYXJlbnRFbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiRHJvcGRvd25cIilbMF0ucGFyZW50RWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiRHJvcGRvd25cIilbMF0ucGFyZW50RWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJEcm9wZG93blwiKVswXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBJQ09OU19QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuaW1wb3J0IFdpbmRvd0NvbnRlbnQgZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50XCI7XHJcbmltcG9ydCB7IGdvVG8sIGdvQmFjaywgZ29Gb3J3YXJkIH0gZnJvbSBcIi4vaGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyLCBhZGRWaWV3IH0gZnJvbSBcIkB3ZWJpbmRvd3MvVmlld3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uQmFyQ29udGFpbmVyLCBCdXR0b25CYXIgfSBmcm9tIFwiQHdlYmluZG93cy9CdXR0b25CYXJzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBCdXR0b25JY29uIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbkljb25cIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvblwiO1xyXG5pbXBvcnQgVGV4dCBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9UZXh0XCI7XHJcbmltcG9ydCBEaXZpZGVyVmVydGljYWwgZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRGl2aWRlclZlcnRpY2FsXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbnB1dFwiO1xyXG5pbXBvcnQgeyBGb2xkZXJzVmlldyB9IGZyb20gXCIuL0FwcFZpZXdzL0ZvbGRlcnNWaWV3XCI7XHJcbmltcG9ydCBGaWxlRXhwbG9yZXJPdmVydmlldyBmcm9tIFwiLi9BcHBWaWV3cy9GaWxlRXhwbG9yZXJPdmVydmlld1wiO1xyXG5pbXBvcnQgY3JlYXRlRHJvcGRvd24gZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRHJvcGRvd25cIjtcclxuaW1wb3J0IERyb3Bkb3duSXRlbSBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9Ecm9wZG93bi9Ecm9wZG93bkl0ZW1cIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xyXG4gICAgbGV0IGFkZHJlc3MgPSBcIi9cIjtcclxuICAgIHJvb3QuYXBwZW5kKFxyXG4gICAgICAgIDxXaW5kb3dDb250ZW50PlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbkJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRmlsZUV4cGxvcmVyX0ZpbGVCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiRmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRHJvcGRvd24oXCJGaWxlRXhwbG9yZXJfRmlsZUJ0blwiLCBcIkZpbGVFeHBsb3Jlcl9GaWxlRERcIiwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIk5ldyBGaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgRmlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJOZXcgRmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IEZpbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiTmV3IEZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBGaWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIk5ldyBGaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgRmlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkZpbGVFeHBsb3Jlcl9FZGl0QnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZURyb3Bkb3duKFwiRmlsZUV4cGxvcmVyX0VkaXRCdG5cIiwgXCJGaWxlRXhwbG9yZXJfRWRpdEREXCIsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJOZXcgRmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IEZpbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiTmV3IEZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBGaWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIk5ldyBGaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgRmlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJOZXcgRmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IEZpbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlZpZXdcIiBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJFeHRyYVwiIGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIj9cIiBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uQmFyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbkJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0lDT05TX1BBVEh9L3Byb2dtYW4uZXhlXzE0XzE0My5pY29gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQmFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb0JhY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25JY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SUNPTlNfUEFUSH0vcHJvZ21hbi5leGVfMTRfMTQ0Lmljb2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJGb3J3YXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyZXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvRm9yd2FyZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtJQ09OU19QQVRIfS93ZWJjaGVjay5kbGxfMTRfMTE0Lmljb2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JleT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlclZlcnRpY2FsIGhlaWdodD1cIjIwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25JY29uIHNyYz17YCR7SUNPTlNfUEFUSH0vaG9tZS5wbmdgfSB0ZXh0PVwiSG9tZVwiIGlzR3JleT17dHJ1ZX0gZGlzYWJsZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25JY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SUNPTlNfUEFUSH0vZXhwbG9yZXIuZXhlXzE0XzEwMS5pY29gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0lDT05TX1BBVEh9L3NoZWxsMzIuZGxsXzE0XzQuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkZvbGRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyZXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25JY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SUNPTlNfUEFUSH0vc25tcHNuYXAuZGxsXzE0XzY1MDQuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkhpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyZXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyVmVydGljYWwgaGVpZ2h0PVwiMjBweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtJQ09OU19QQVRIfS9zeW5jdWkuZGxsXzE0XzEyNi5pY29gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyZXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtJQ09OU19QQVRIfS9zeW5jdWkuZGxsXzE0XzEyNy5pY29gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyZXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtJQ09OU19QQVRIfS9jb21wc3R1aS5kbGxfMTRfNjQwMDMuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b25CYXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uQmFyIGdhcD1cIjRweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHRleHQ9XCJBZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpZF9GaWxlRXhwbG9yZXJfQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5wdXQgYWRkcmVzcy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0lDT05TX1BBVEh9L3Byb2dtYW4uZXhlXzE0XzE0NC5pY29gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiR29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JleT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29UbyhhZGRyZXNzKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b25CYXI+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Vmlld0NvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvV2luZG93Q29udGVudD5cclxuICAgICk7XHJcblxyXG4gICAgYWRkVmlldyhcIjI1JVwiLCA8RmlsZUV4cGxvcmVyT3ZlcnZpZXcgLz4sIGZhbHNlKTtcclxuICAgIGFkZFZpZXcoXCI3NSVcIiwgPEZvbGRlcnNWaWV3IC8+LCBmYWxzZSk7XHJcblxyXG4gICAgZ29UbyhhZGRyZXNzKTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhZGRWaWV3KFwiMjUlXCIsIDxGaWxlRXhwbG9yZXJPdmVydmlldyAvPik7XHJcbn0pO1xyXG5cclxuaW5pdCgpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsInRhZyIsInByb3BzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNoaWxkcmVuIiwiQXJyYXkiLCJfa2V5IiwiYXBwbHkiLCJjb25jYXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsIl9yZWYiLCJfcmVmMiIsIl9zbGljZWRUb0FycmF5IiwibmFtZSIsInZhbHVlIiwic3RhcnRzV2l0aCIsInRvTG93ZXJDYXNlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1YnN0cmluZyIsInNldEF0dHJpYnV0ZSIsIl90eXBlb2YiLCJrZXlzIiwicHJvcE5hbWUiLCJwcm9wVmFsdWUiLCJzdHlsZSIsImRpc2FibGVkIiwiQm9vbGVhbiIsInRvU3RyaW5nIiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsInBhcmVudCIsImlzQXJyYXkiLCJuZXN0ZWRDaGlsZCIsIm5vZGVUeXBlIiwiY3JlYXRlVGV4dE5vZGUiLCJXQk5EX1JFUSIsIlJPT1RfUEFUSCIsIkZJTEVfUEFUSCIsIlBVQkxJQ19QQVRIIiwiQVNTRVRTX1BBVEgiLCJJQ09OU19QQVRIIiwiRklMRVNfUkVRIiwiV2luZG93Q29udGVudCIsImNsYXNzTmFtZSIsIkxpbmVhckhpc3RvcnkiLCJpbml0UG9zaXRpb24iLCJfY2xhc3NDYWxsQ2hlY2siLCJoaXN0b3J5IiwiaW5kZXgiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJhZGROZXciLCJhZGRyZXNzIiwicHVzaCIsInJlbW92ZUFkamFjZW50RHVwbGljYXRlcyIsImdvQmFjayIsImdvRm9yd2FyZCIsImdvVG9JbmRleCIsImdldEN1cnJlbnRQb2ludCIsImdldE5leHRJbmRleCIsImdldFByZXZpb3VzSW5kZXgiLCJnZXRDdXJyZW50SW5kZXgiLCJjbGVhciIsIl90aGlzIiwiZmlsdGVyIiwiaXRlbSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiZXJyIiwidW5kZWZpbmVkIiwicmVxdWVzdEZvbGRlciIsIl94IiwiX3JlcXVlc3RGb2xkZXIiLCJfY2FsbGVlIiwidXNlciIsInJlc3VsdCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXRoIiwianNvbiIsInJlcXVlc3RGaWxlcyIsIl94MiIsIl9yZXF1ZXN0RmlsZXMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIkZvbGRlcnNNZW51IiwiaWQiLCJGb2xkZXJJdGVtIiwib25EYmxDbGljayIsInNyYyIsIm1ldGFkYXRhIiwib3RoZXIiLCJpY29uIiwid2lkdGgiLCJoZWlnaHQiLCJGaWxlSXRlbSIsImZpbGUiLCJvbkNsaWNrIiwibWluV2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImdhcCIsIndpdGhQcmV2aWV3IiwiZXh0ZW5zaW9uIiwib3duZXIiLCJzaXplIiwidG9GaXhlZCIsIkNvbHVtbkRlc2NyaXB0aW9uIiwiRm9sZGVyQ29udGFpbmVyIiwiY2hhbmdlQmFja2dyb3VuZCIsImJnUGF0aCIsInBvc3RNZXNzYWdlIiwicmVxdWVzdCIsImJhY2tncm91bmQiLCJnb1RvIiwiRm9sZGVyc1ZpZXciLCJ1cGRhdGVGb2xkZXJzTWVudSIsIm5ld0ZvbGRlcnMiLCJuZXdGaWxlcyIsIm1lbnUiLCJnZXRFbGVtZW50QnlJZCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImFwcGVuZCIsImRhdGEiLCJtYXAiLCJfZ29UbyIsImlucHV0IiwiZmlsZXMiLCJnb1RvSGlzdG9yeSIsIl9nb1RvSGlzdG9yeSIsImxvY2F0aW9uIiwiSWNvbiIsImlzR3JleSIsIkNsb3NlQmFyIiwicmVtb3ZlVmlldyIsInZpZXciLCJ2aWV3V2lkdGgiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3ViVmlld3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicHJldlZpZXciLCJyZXNpemVWaWV3IiwicHJldlZpZXdXaWR0aCIsInJlbW92ZSIsIlZpZXciLCJvbkNvbnRleHRtZW51IiwicHJldmVudERlZmF1bHQiLCJpc0Nsb3NhYmxlIiwic3VidHJhY3RGcm9tIiwiZnJvbSIsImxpbWl0IiwicmVtYWluaW5nRnJvbSIsInN1YnRyYWN0ZWRWYWx1ZSIsInRvU3VidHJhY3QiLCJNYXRoIiwiYWJzIiwieCIsImNsYW1wIiwibWluIiwibWF4Iiwic3VidHJhY3RFcXVhbFNoYXJlIiwiYXJyYXkiLCJzaGFyZSIsIm5ld1ZhbHVlIiwibmVhcmx5RXF1YWwiLCJudW0xIiwibnVtMiIsImVwc2lsb24iLCJzcHJlYWRWYWx1ZUFjcm9zc0FycmF5IiwiYXJyIiwiZXF1YWxWYWx1ZSIsInNwcmVhZEFycmF5IiwibnVtIiwiYWRkVmlldyIsImluaXRXaWR0aCIsImNvbnRlbnQiLCJzdWJXaW5kb3dXcmFwcGVyIiwic3ViV2luZG93cyIsInJlc2l6ZUhhbmRsZUxlZnQiLCJ3aW5kb3dXaWR0aCIsImNsaWVudFdpZHRoIiwiZGVzaXJlZFdpZHRoIiwibGFzdFdpbmRvdyIsImxhc3RXaW5kb3dXaWR0aCIsIl9zdWJ0cmFjdEZyb20iLCJuZXdTdWJXaW5kb3ciLCJzdWJXaW5kb3dDdXJyZW50Iiwic3ViV2luZG93TmV4dCIsInNhdmVkV2lkdGhDdXJyZW50Iiwic2F2ZWRXaWR0aE5leHQiLCJ3aWR0aERpZmYiLCJjbGllbnRYIiwib2Zmc2V0TGVmdCIsIm5ld0N1cnJlbnRXaWR0aCIsIm5ld05leHRXaWR0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJXZWJpbmRvd3NNZXNzYWdlUmVjZWl2ZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImNhbGxiYWNrIiwiZXZlbnQiLCJvbldpbmRvd1Jlc2l6ZVN0YXJ0Iiwib25XaW5kb3dSZXNpemVFbmQiLCJvbldpbmRvd0JlZm9yZUV4cGFuZCIsIm9uV2luZG93RXhwYW5kIiwib25XaW5kb3dCZWZvcmVVbmV4cGFuZCIsIm9uV2luZG93VW5leHBhbmQiLCJvbldpbmRvd09wZW4iLCJvbldpbmRvd0Nsb3NlIiwid2luZG93RXZlbnRzIiwiVmlld0NvbnRhaW5lciIsIndpbmRvd1dpZHRoU3RhcnQiLCJzYXZlZFdpZHRocyIsInNhdmVWaWV3V2lkdGhzIiwiY2xlYXJWaWV3V2lkdGhzIiwiYWRqdXN0Vmlld1NpemVzIiwid2luZG93U2l6ZSIsIm5ld1dpZHRocyIsImN1cnJlbnRXaWR0aCIsImN1cnJlbnRXaWR0aFByZWMiLCJuZXdXaWR0aCIsImRpZmYiLCJyZWR1Y2UiLCJiIiwiYWRqdXN0ZWRXaWR0aHMiLCJCdXR0b25CYXIiLCJfcHJvcHMkZ2FwIiwiQnV0dG9uQmFyQ29udGFpbmVyIiwiQnV0dG9uIiwidGV4dCIsIkJ1dHRvbkljb24iLCJUZXh0IiwiRGl2aWRlclZlcnRpY2FsIiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uSW5wdXQiLCJBcHBPdmVydmlld0xpc3QiLCJBcHBPdmVydmlld0ltYWdlIiwiQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiIsIm1hcmdpbiIsIkxpbmsiLCJocmVmIiwiQXBwT3ZlcnZpZXdMaW5rIiwidG8iLCJBcHBPdmVydmlldyIsIkluZm9Cb3giLCJGaWxlRXhwbG9yZXJPdmVydmlldyIsImNyZWF0ZURyb3Bkb3duIiwiYW5jaG9ySWQiLCJhbmNob3JFbGVtIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwicG9pbnRlckV2ZW50cyIsImJvcmRlciIsImVsZW0iLCJhbmNob3JIZWlnaHQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0IiwiY29sb3IiLCJEcm9wZG93bkl0ZW0iLCJpbml0Iiwicm9vdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=