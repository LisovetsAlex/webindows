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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
      this.__cleanDuplicates();
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
    key: "__cleanDuplicates",
    value: function __cleanDuplicates() {
      this.history = _toConsumableArray(new Set(this.history));
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
    onDblClick: props.onDblClick
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

;// CONCATENATED MODULE: ./src/AppViews/FoldersView.js
/* provided dependency */ var FoldersView_createElement = __webpack_require__(153)["n"];


function FoldersView() {
  return FoldersView_createElement(FoldersMenu, {
    id: "id_FileExplorer_FoldersMenu"
  });
}
function updateFoldersMenu(newFolders, newFiles) {
  var menu = document.getElementById("id_FileExplorer_FoldersMenu");
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
      file: child
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
    }
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
;// CONCATENATED MODULE: ./src/index.js
/* provided dependency */ var src_createElement = __webpack_require__(153)["n"];













function init() {
  var root = document.getElementsByTagName("body")[0];
  var address = "/";
  root.append(src_createElement(WindowContent_WindowContent, null, src_createElement(ButtonBarContainer_ButtonBarContainer, null, src_createElement(ButtonBar, null, src_createElement(Button_Button, {
    text: "File",
    disabled: false
  }), src_createElement(Button_Button, {
    text: "Edit",
    disabled: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxHQUFHLEVBQUVDLEtBQUssRUFBa0I7RUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFiQyxRQUFRLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7SUFBUkYsUUFBUSxDQUFBRSxJQUFBLFFBQUFKLFNBQUEsQ0FBQUksSUFBQTtFQUFBO0VBQzFDLElBQUksT0FBT1AsR0FBRyxLQUFLLFVBQVUsRUFBRSxPQUFPQSxHQUFHLENBQUFRLEtBQUEsVUFBQ1AsS0FBSyxFQUFBUSxNQUFBLENBQUtKLFFBQVEsRUFBQztFQUM3RCxJQUFNSyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ1osYUFBYSxDQUFDQyxHQUFHLENBQUM7RUFFM0NZLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDWixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ2EsT0FBTyxDQUFDLFVBQUFDLElBQUEsRUFBbUI7SUFBQSxJQUFBQyxLQUFBLEdBQUFDLGNBQUEsQ0FBQUYsSUFBQTtNQUFqQkcsSUFBSSxHQUFBRixLQUFBO01BQUVHLEtBQUssR0FBQUgsS0FBQTtJQUM3QyxJQUFJRSxJQUFJLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSUYsSUFBSSxDQUFDRyxXQUFXLENBQUMsQ0FBQyxJQUFJQyxNQUFNLEVBQUU7TUFDdkRaLE9BQU8sQ0FBQ2EsZ0JBQWdCLENBQUNMLElBQUksQ0FBQ0csV0FBVyxDQUFDLENBQUMsQ0FBQ0csU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFTCxLQUFLLENBQUM7TUFDaEU7SUFDSjtJQUNBLElBQUlELElBQUksS0FBSyxXQUFXLEVBQUU7TUFDdEJSLE9BQU8sQ0FBQ2UsWUFBWSxDQUFDLE9BQU8sRUFBRU4sS0FBSyxDQUFDO01BQ3BDO0lBQ0o7SUFDQSxJQUFJRCxJQUFJLEtBQUssT0FBTyxJQUFJUSxPQUFBLENBQU9QLEtBQUssTUFBSyxRQUFRLEVBQUU7TUFDL0NQLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDUixLQUFLLENBQUMsQ0FBQ0wsT0FBTyxDQUFDLFVBQUNjLFFBQVEsRUFBSztRQUNyQyxJQUFNQyxTQUFTLEdBQUdWLEtBQUssQ0FBQ1MsUUFBUSxDQUFDO1FBQ2pDbEIsT0FBTyxDQUFDb0IsS0FBSyxDQUFDRixRQUFRLENBQUMsR0FBR0MsU0FBUztNQUN2QyxDQUFDLENBQUM7TUFDRjtJQUNKO0lBQ0EsSUFBSVgsSUFBSSxLQUFLLFVBQVUsRUFBRTtNQUNyQlIsT0FBTyxDQUFDcUIsUUFBUSxHQUFHQyxPQUFPLENBQUNiLEtBQUssQ0FBQztNQUNqQztJQUNKO0lBQ0EsSUFBSSxDQUFDQSxLQUFLLEVBQUU7SUFDWlQsT0FBTyxDQUFDZSxZQUFZLENBQUNQLElBQUksRUFBRUMsS0FBSyxDQUFDYyxRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQ2hELENBQUMsQ0FBQztFQUVGNUIsUUFBUSxDQUFDUyxPQUFPLENBQUMsVUFBQ29CLEtBQUssRUFBSztJQUN4QkMsV0FBVyxDQUFDekIsT0FBTyxFQUFFd0IsS0FBSyxDQUFDO0VBQy9CLENBQUMsQ0FBQztFQUVGLE9BQU94QixPQUFPO0FBQ2xCLENBQUM7QUFFRCxJQUFNeUIsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLE1BQU0sRUFBRUYsS0FBSyxFQUFLO0VBQ25DLElBQUk1QixLQUFLLENBQUMrQixPQUFPLENBQUNILEtBQUssQ0FBQyxFQUFFLE9BQU9BLEtBQUssQ0FBQ3BCLE9BQU8sQ0FBQyxVQUFDd0IsV0FBVztJQUFBLE9BQUtILFdBQVcsQ0FBQ0MsTUFBTSxFQUFFRSxXQUFXLENBQUM7RUFBQSxFQUFDO0VBQ2pHLElBQUksQ0FBQ0osS0FBSyxFQUFFO0VBQ1pFLE1BQU0sQ0FBQ0QsV0FBVyxDQUFDRCxLQUFLLGFBQUxBLEtBQUssZUFBTEEsS0FBSyxDQUFFSyxRQUFRLEdBQUdMLEtBQUssR0FBR3ZCLFFBQVEsQ0FBQzZCLGNBQWMsQ0FBQ04sS0FBSyxDQUFDLENBQUM7QUFDaEYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekNEO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZHQUE2RyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsaURBQWlELHFCQUFxQixpQkFBaUIsS0FBSyxtQ0FBbUMsOEJBQThCLEtBQUssdUNBQXVDLHdCQUF3QixLQUFLLHVCQUF1QjtBQUNsYjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQnZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9IQUFvSCxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sc0NBQXNDLHNCQUFzQiw0QkFBNEIsNEJBQTRCLG9DQUFvQyxpQ0FBaUMsa0JBQWtCLHFXQUFxVyxLQUFLLHVCQUF1QjtBQUM3eEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpSEFBaUgsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLDhDQUE4QyxzQkFBc0IsK0JBQStCLGdDQUFnQyxvQ0FBb0Msb0JBQW9CLHFCQUFxQiwyQkFBMkIsMkJBQTJCLEtBQUssMkJBQTJCLDRCQUE0Qix3QkFBd0Isc0JBQXNCLDRCQUE0Qiw0QkFBNEIsb0NBQW9DLDBCQUEwQiw0QkFBNEIsaUJBQWlCLHFDQUFxQyx1Q0FBdUMsS0FBSyxrQ0FBa0MsNkNBQTZDLEtBQUssOEJBQThCLDZCQUE2QixvQkFBb0IsS0FBSyxrQ0FBa0Msc0JBQXNCLDRCQUE0Qiw0QkFBNEIsb0NBQW9DLHFDQUFxQyx5QkFBeUIsZUFBZSx1Q0FBdUMsaURBQWlELEtBQUssc0NBQXNDLDhLQUE4SyxrREFBa0QsbURBQW1ELCtDQUErQyw4Q0FBOEMsMENBQTBDLDRCQUE0QiwyQkFBMkIsS0FBSyx1QkFBdUI7QUFDM3VFO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hFdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrR0FBK0csVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLHlDQUF5Qyx1QkFBdUIsc0JBQXNCLDRCQUE0QixrQ0FBa0MseUJBQXlCLEtBQUssZUFBZSx1Q0FBdUMseUJBQXlCLHlCQUF5QixLQUFLLCtCQUErQiwwQkFBMEIsNEJBQTRCLHFCQUFxQixtQkFBbUIsS0FBSyxtQkFBbUIsc0JBQXNCLDRCQUE0Qiw0QkFBNEIsb0NBQW9DLGlCQUFpQixLQUFLLHVCQUF1QjtBQUNyN0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkN2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0dBQStHLFVBQVUsWUFBWSxXQUFXLDBDQUEwQyxzQkFBc0IsMEJBQTBCLHFCQUFxQixLQUFLLHVCQUF1QjtBQUNsUztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNadkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG1IQUFtSCxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSx1Q0FBdUMsc0JBQXNCLDRCQUE0Qiw0QkFBNEIsZ0NBQWdDLDRCQUE0QixxQ0FBcUMseUJBQXlCLHNDQUFzQyxrQkFBa0IsMkJBQTJCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEtBQUssd0JBQXdCLDhLQUE4SyxLQUFLLDBCQUEwQix3QkFBd0IsK0JBQStCLEtBQUssdUJBQXVCLG9CQUFvQixxQkFBcUIsMEJBQTBCLDZCQUE2QixLQUFLLHVCQUF1QjtBQUN2c0M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEN2QztBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0dBQStHLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLG1DQUFtQyxzQkFBc0IsNEJBQTRCLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLHFDQUFxQyx5QkFBeUIsc0NBQXNDLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsS0FBSyxvQkFBb0IsOEtBQThLLEtBQUssc0JBQXNCLHdCQUF3QiwrQkFBK0IsS0FBSyx1QkFBdUI7QUFDbmdDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlCdkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0hBQXdILFlBQVksYUFBYSxNQUFNLE9BQU8sNENBQTRDLDhDQUE4Qyw0Q0FBNEMsMklBQTJJLEtBQUssdUJBQXVCO0FBQ2xkO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2J2QztBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZHQUE2RyxVQUFVLFVBQVUsaUNBQWlDLG9CQUFvQixxQkFBcUIsS0FBSyx1QkFBdUI7QUFDOU87QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWHZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdIQUFnSCxVQUFVLFVBQVUsWUFBWSxhQUFhLG9DQUFvQyxvQkFBb0IscUJBQXFCLDRDQUE0Qyw0Q0FBNEMsS0FBSyx1QkFBdUI7QUFDclc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDYnZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw4R0FBOEcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsaUNBQWlDLG9CQUFvQixtQ0FBbUMsd0JBQXdCLEtBQUssa0JBQWtCLHNCQUFzQixLQUFLLHVCQUF1QjtBQUNwVztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNmdkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNkdBQTZHLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsT0FBTyxrQ0FBa0MsNEJBQTRCLHFDQUFxQyxrQkFBa0IsNEJBQTRCLDJCQUEyQix1Q0FBdUMsMFhBQTBYLEtBQUssdUJBQXVCO0FBQ3R6QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQnZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw2R0FBNkcsWUFBWSxhQUFhLGFBQWEsaUNBQWlDLHFDQUFxQyx5QkFBeUIsNEJBQTRCLEtBQUssdUJBQXVCO0FBQ2pUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7Ozs7Ozs7OztBQ0FBLElBQU1PLFFBQVEsR0FBRyx1QkFBdUI7QUFDeEMsSUFBTUMsU0FBUyxHQUFHRCxRQUFRLEdBQUcsbUJBQW1CO0FBQ2hELElBQU1FLFNBQVMsR0FBR0YsUUFBUSxHQUFHLGlCQUFpQjtBQUM5QyxJQUFNRyxXQUFXLEdBQUdILFFBQVEsR0FBRyxtQkFBbUIsR0FBRyxvQkFBb0I7QUFDekUsSUFBTUksV0FBVyxHQUFHSixRQUFRLEdBQUcsbUJBQW1CLEdBQUcsMkJBQTJCO0FBQ2hGLElBQU1LLFVBQVUsR0FBR0wsUUFBUSxHQUFHLG1CQUFtQixHQUFHLGlDQUFpQztBQUNyRixJQUFNTSxTQUFTLEdBQUdOLFFBQVEsR0FBRyxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xoRCxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF5RztBQUN6RztBQUNBOztBQUVBOztBQUVBLDRCQUE0Qiw2QkFBbUI7QUFDL0Msd0JBQXdCLDBDQUFhOztBQUVyQyx1QkFBdUIsK0JBQWE7QUFDcEM7QUFDQSxpQkFBaUIsdUJBQU07QUFDdkIsNkJBQTZCLDhCQUFrQjs7QUFFL0MsYUFBYSxrQ0FBRyxDQUFDLDRCQUFPOzs7O0FBSW1EO0FBQzNFLE9BQU8sK0RBQWUsNEJBQU8sSUFBSSw0QkFBTyxVQUFVLDRCQUFPLG1CQUFtQixFQUFDOzs7O0FDMUJ4RDtBQUVOLFNBQVNPLDJCQUFhQSxDQUFDL0MsS0FBSyxFQUFlO0VBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBVkMsUUFBUSxPQUFBQyxLQUFBLENBQUFKLElBQUEsT0FBQUEsSUFBQSxXQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO0lBQVJGLFFBQVEsQ0FBQUUsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7RUFBQTtFQUNwRCxPQUFPUixhQUFBO0lBQUtrRCxTQUFTLEVBQUM7RUFBZSxHQUFFNUMsUUFBYyxDQUFDO0FBQzFEOzs7Ozs7Ozs7Ozs7OztJQ0pNNkMsYUFBYTtFQUNmLFNBQUFBLGNBQVlDLFlBQVksRUFBRTtJQUFBQyxlQUFBLE9BQUFGLGFBQUE7SUFDdEIsSUFBSSxDQUFDRyxPQUFPLEdBQUcsQ0FBQ0YsWUFBWSxDQUFDO0lBQzdCLElBQUksQ0FBQ0csS0FBSyxHQUFHLENBQUM7RUFDbEI7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEksT0FBQUMsWUFBQSxDQUFBTCxhQUFBO0lBQUFNLEdBQUE7SUFBQXJDLEtBQUEsRUFNQSxTQUFBc0MsT0FBT0MsT0FBTyxFQUFFO01BQ1osSUFBSSxDQUFDTCxPQUFPLENBQUNNLElBQUksQ0FBQ0QsT0FBTyxDQUFDO01BQzFCLElBQUksQ0FBQ0UsaUJBQWlCLENBQUMsQ0FBQztNQUN4QixJQUFJLENBQUNOLEtBQUssR0FBRyxJQUFJLENBQUNELE9BQU8sQ0FBQ2pELE1BQU0sR0FBRyxDQUFDO0lBQ3hDOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBb0QsR0FBQTtJQUFBckMsS0FBQSxFQUtBLFNBQUEwQyxPQUFBLEVBQVM7TUFDTCxJQUFJLElBQUksQ0FBQ1AsS0FBSyxJQUFJLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQ0EsS0FBSztNQUN0QyxJQUFJLENBQUNBLEtBQUssRUFBRTtNQUNaLE9BQU8sSUFBSSxDQUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUM7SUFDbkM7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUpJO0lBQUFFLEdBQUE7SUFBQXJDLEtBQUEsRUFLQSxTQUFBMkMsVUFBQSxFQUFZO01BQ1IsSUFBSSxJQUFJLENBQUNSLEtBQUssSUFBSSxJQUFJLENBQUNELE9BQU8sQ0FBQ2pELE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUNrRCxLQUFLO01BQzVELElBQUksQ0FBQ0EsS0FBSyxFQUFFO01BQ1osT0FBTyxJQUFJLENBQUNELE9BQU8sQ0FBQyxJQUFJLENBQUNDLEtBQUssQ0FBQztJQUNuQzs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkk7SUFBQUUsR0FBQTtJQUFBckMsS0FBQSxFQUtBLFNBQUE0QyxVQUFVVCxLQUFLLEVBQUU7TUFDYixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztNQUNsQixPQUFPLElBQUksQ0FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO0lBQ25DOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBRSxHQUFBO0lBQUFyQyxLQUFBLEVBS0EsU0FBQTZDLGdCQUFBLEVBQWtCO01BQ2QsT0FBTyxJQUFJLENBQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUNDLEtBQUssQ0FBQztJQUNuQzs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkk7SUFBQUUsR0FBQTtJQUFBckMsS0FBQSxFQUtBLFNBQUE4QyxhQUFBLEVBQWU7TUFDWCxJQUFJLElBQUksQ0FBQ1gsS0FBSyxJQUFJLElBQUksQ0FBQ0QsT0FBTyxDQUFDakQsTUFBTSxHQUFHLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQ2tELEtBQUs7TUFDNUQsT0FBTyxJQUFJLENBQUNBLEtBQUssR0FBRyxDQUFDO0lBQ3pCOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBRSxHQUFBO0lBQUFyQyxLQUFBLEVBS0EsU0FBQStDLGlCQUFBLEVBQW1CO01BQ2YsSUFBSSxJQUFJLENBQUNaLEtBQUssSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUNBLEtBQUs7TUFDdEMsT0FBTyxJQUFJLENBQUNBLEtBQUssR0FBRyxDQUFDO0lBQ3pCOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBRSxHQUFBO0lBQUFyQyxLQUFBLEVBS0EsU0FBQWdELGdCQUFBLEVBQWtCO01BQ2QsT0FBTyxJQUFJLENBQUNiLEtBQUs7SUFDckI7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUpJO0lBQUFFLEdBQUE7SUFBQXJDLEtBQUEsRUFLQSxTQUFBaUQsTUFBQSxFQUFRO01BQ0osSUFBSSxDQUFDZixPQUFPLEdBQUcsRUFBRTtNQUNqQixJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ2xCO0VBQUM7SUFBQUUsR0FBQTtJQUFBckMsS0FBQSxFQUVELFNBQUF5QyxrQkFBQSxFQUFvQjtNQUNoQixJQUFJLENBQUNQLE9BQU8sR0FBQWdCLGtCQUFBLENBQU8sSUFBSUMsR0FBRyxDQUFDLElBQUksQ0FBQ2pCLE9BQU8sQ0FBQyxDQUFDO0lBQzdDO0VBQUM7QUFBQTs7OzsrQ0NuR0wscUpBQUFrQixtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUE5RCxNQUFBLENBQUErRCxTQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxjQUFBLEVBQUFDLENBQUEsR0FBQWxFLE1BQUEsQ0FBQW1FLGNBQUEsY0FBQU4sQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQXZELEtBQUEsS0FBQTZELENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBZixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBOUQsTUFBQSxDQUFBbUUsY0FBQSxDQUFBTixDQUFBLEVBQUFELENBQUEsSUFBQXJELEtBQUEsRUFBQXVELENBQUEsRUFBQWUsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQWxCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBZ0IsTUFBQSxtQkFBQWYsQ0FBQSxJQUFBZSxNQUFBLFlBQUFBLE9BQUFmLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBa0IsS0FBQW5CLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUksQ0FBQSxHQUFBUixDQUFBLElBQUFBLENBQUEsQ0FBQUcsU0FBQSxZQUFBa0IsU0FBQSxHQUFBckIsQ0FBQSxHQUFBcUIsU0FBQSxFQUFBWCxDQUFBLEdBQUF0RSxNQUFBLENBQUFrRixNQUFBLENBQUFkLENBQUEsQ0FBQUwsU0FBQSxHQUFBUyxDQUFBLE9BQUFXLE9BQUEsQ0FBQW5CLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUksQ0FBQSxlQUFBL0QsS0FBQSxFQUFBNkUsZ0JBQUEsQ0FBQXZCLENBQUEsRUFBQUMsQ0FBQSxFQUFBVSxDQUFBLE1BQUFGLENBQUEsYUFBQWUsU0FBQXhCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBd0IsSUFBQSxZQUFBQyxHQUFBLEVBQUExQixDQUFBLENBQUEyQixJQUFBLENBQUE1QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBeUIsSUFBQSxXQUFBQyxHQUFBLEVBQUExQixDQUFBLFFBQUFELENBQUEsQ0FBQW9CLElBQUEsR0FBQUEsSUFBQSxNQUFBUyxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBWixVQUFBLGNBQUFhLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQXBCLE1BQUEsQ0FBQW9CLENBQUEsRUFBQTFCLENBQUEscUNBQUEyQixDQUFBLEdBQUFqRyxNQUFBLENBQUFrRyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXJDLENBQUEsSUFBQUUsQ0FBQSxDQUFBd0IsSUFBQSxDQUFBVyxDQUFBLEVBQUE3QixDQUFBLE1BQUEwQixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBaEMsU0FBQSxHQUFBa0IsU0FBQSxDQUFBbEIsU0FBQSxHQUFBL0QsTUFBQSxDQUFBa0YsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBekMsQ0FBQSxnQ0FBQTNELE9BQUEsV0FBQTBELENBQUEsSUFBQWdCLE1BQUEsQ0FBQWYsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUEwQyxPQUFBLENBQUEzQyxDQUFBLEVBQUFDLENBQUEsc0JBQUEyQyxjQUFBM0MsQ0FBQSxFQUFBRCxDQUFBLGFBQUE2QyxPQUFBM0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFhLFFBQUEsQ0FBQXhCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFLLENBQUEsbUJBQUFNLENBQUEsQ0FBQWMsSUFBQSxRQUFBWixDQUFBLEdBQUFGLENBQUEsQ0FBQWUsR0FBQSxFQUFBRSxDQUFBLEdBQUFmLENBQUEsQ0FBQW5FLEtBQUEsU0FBQWtGLENBQUEsZ0JBQUEzRSxlQUFBLENBQUEyRSxDQUFBLEtBQUF6QixDQUFBLENBQUF3QixJQUFBLENBQUFDLENBQUEsZUFBQTdCLENBQUEsQ0FBQThDLE9BQUEsQ0FBQWpCLENBQUEsQ0FBQWtCLE9BQUEsRUFBQUMsSUFBQSxXQUFBL0MsQ0FBQSxJQUFBNEMsTUFBQSxTQUFBNUMsQ0FBQSxFQUFBTyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFULENBQUEsSUFBQTRDLE1BQUEsVUFBQTVDLENBQUEsRUFBQU8sQ0FBQSxFQUFBRSxDQUFBLFFBQUFWLENBQUEsQ0FBQThDLE9BQUEsQ0FBQWpCLENBQUEsRUFBQW1CLElBQUEsV0FBQS9DLENBQUEsSUFBQWEsQ0FBQSxDQUFBbkUsS0FBQSxHQUFBc0QsQ0FBQSxFQUFBTyxDQUFBLENBQUFNLENBQUEsZ0JBQUFiLENBQUEsV0FBQTRDLE1BQUEsVUFBQTVDLENBQUEsRUFBQU8sQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsQ0FBQUUsQ0FBQSxDQUFBZSxHQUFBLFNBQUF6QixDQUFBLEVBQUFJLENBQUEsb0JBQUEzRCxLQUFBLFdBQUFBLE1BQUFzRCxDQUFBLEVBQUFHLENBQUEsYUFBQTZDLDJCQUFBLGVBQUFqRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBMkMsTUFBQSxDQUFBNUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFKLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQThDLElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUF6QixpQkFBQXhCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQXVCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUosQ0FBQSxLQUFBeUIsQ0FBQSxRQUFBbUIsS0FBQSxzQ0FBQTVDLENBQUEsS0FBQTBCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQS9ELEtBQUEsRUFBQXNELENBQUEsRUFBQWtELElBQUEsZUFBQS9DLENBQUEsQ0FBQWdELE1BQUEsR0FBQTVDLENBQUEsRUFBQUosQ0FBQSxDQUFBdUIsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFSLENBQUEsQ0FBQWlELFFBQUEsTUFBQXpDLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0MsbUJBQUEsQ0FBQTFDLENBQUEsRUFBQVIsQ0FBQSxPQUFBVSxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBVixDQUFBLENBQUFnRCxNQUFBLEVBQUFoRCxDQUFBLENBQUFtRCxJQUFBLEdBQUFuRCxDQUFBLENBQUFvRCxLQUFBLEdBQUFwRCxDQUFBLENBQUF1QixHQUFBLHNCQUFBdkIsQ0FBQSxDQUFBZ0QsTUFBQSxRQUFBOUMsQ0FBQSxLQUFBdUIsQ0FBQSxRQUFBdkIsQ0FBQSxHQUFBMEIsQ0FBQSxFQUFBNUIsQ0FBQSxDQUFBdUIsR0FBQSxFQUFBdkIsQ0FBQSxDQUFBcUQsaUJBQUEsQ0FBQXJELENBQUEsQ0FBQXVCLEdBQUEsdUJBQUF2QixDQUFBLENBQUFnRCxNQUFBLElBQUFoRCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUF1QixHQUFBLEdBQUFyQixDQUFBLEdBQUF5QixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBekIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsb0JBQUFnQyxDQUFBLENBQUFWLElBQUEsUUFBQXBCLENBQUEsR0FBQUYsQ0FBQSxDQUFBK0MsSUFBQSxHQUFBbkIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBdEYsS0FBQSxFQUFBeUYsQ0FBQSxDQUFBVCxHQUFBLEVBQUF3QixJQUFBLEVBQUEvQyxDQUFBLENBQUErQyxJQUFBLGtCQUFBZixDQUFBLENBQUFWLElBQUEsS0FBQXBCLENBQUEsR0FBQTBCLENBQUEsRUFBQTVCLENBQUEsQ0FBQWdELE1BQUEsWUFBQWhELENBQUEsQ0FBQXVCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBMkIsb0JBQUF0RCxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLENBQUFrRCxNQUFBLEVBQUE5QyxDQUFBLEdBQUFOLENBQUEsQ0FBQVcsUUFBQSxDQUFBUCxDQUFBLE9BQUFFLENBQUEsS0FBQUwsQ0FBQSxTQUFBQyxDQUFBLENBQUFtRCxRQUFBLHFCQUFBakQsQ0FBQSxJQUFBSixDQUFBLENBQUFXLFFBQUEsZUFBQVQsQ0FBQSxDQUFBa0QsTUFBQSxhQUFBbEQsQ0FBQSxDQUFBeUIsR0FBQSxHQUFBMUIsQ0FBQSxFQUFBcUQsbUJBQUEsQ0FBQXRELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFrRCxNQUFBLGtCQUFBaEQsQ0FBQSxLQUFBRixDQUFBLENBQUFrRCxNQUFBLFlBQUFsRCxDQUFBLENBQUF5QixHQUFBLE9BQUFnQyxTQUFBLHVDQUFBdkQsQ0FBQSxpQkFBQTZCLENBQUEsTUFBQXpCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQW5CLENBQUEsRUFBQU4sQ0FBQSxDQUFBVyxRQUFBLEVBQUFULENBQUEsQ0FBQXlCLEdBQUEsbUJBQUFuQixDQUFBLENBQUFrQixJQUFBLFNBQUF4QixDQUFBLENBQUFrRCxNQUFBLFlBQUFsRCxDQUFBLENBQUF5QixHQUFBLEdBQUFuQixDQUFBLENBQUFtQixHQUFBLEVBQUF6QixDQUFBLENBQUFtRCxRQUFBLFNBQUFwQixDQUFBLE1BQUF2QixDQUFBLEdBQUFGLENBQUEsQ0FBQW1CLEdBQUEsU0FBQWpCLENBQUEsR0FBQUEsQ0FBQSxDQUFBeUMsSUFBQSxJQUFBakQsQ0FBQSxDQUFBRixDQUFBLENBQUE0RCxVQUFBLElBQUFsRCxDQUFBLENBQUEvRCxLQUFBLEVBQUF1RCxDQUFBLENBQUEyRCxJQUFBLEdBQUE3RCxDQUFBLENBQUE4RCxPQUFBLGVBQUE1RCxDQUFBLENBQUFrRCxNQUFBLEtBQUFsRCxDQUFBLENBQUFrRCxNQUFBLFdBQUFsRCxDQUFBLENBQUF5QixHQUFBLEdBQUExQixDQUFBLEdBQUFDLENBQUEsQ0FBQW1ELFFBQUEsU0FBQXBCLENBQUEsSUFBQXZCLENBQUEsSUFBQVIsQ0FBQSxDQUFBa0QsTUFBQSxZQUFBbEQsQ0FBQSxDQUFBeUIsR0FBQSxPQUFBZ0MsU0FBQSxzQ0FBQXpELENBQUEsQ0FBQW1ELFFBQUEsU0FBQXBCLENBQUEsY0FBQThCLGFBQUE5RCxDQUFBLFFBQUFELENBQUEsS0FBQWdFLE1BQUEsRUFBQS9ELENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFpRSxRQUFBLEdBQUFoRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBa0UsVUFBQSxHQUFBakUsQ0FBQSxLQUFBRCxDQUFBLENBQUFtRSxRQUFBLEdBQUFsRSxDQUFBLFdBQUFtRSxVQUFBLENBQUFqRixJQUFBLENBQUFhLENBQUEsY0FBQXFFLGNBQUFwRSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBcUUsVUFBQSxRQUFBdEUsQ0FBQSxDQUFBMEIsSUFBQSxvQkFBQTFCLENBQUEsQ0FBQTJCLEdBQUEsRUFBQTFCLENBQUEsQ0FBQXFFLFVBQUEsR0FBQXRFLENBQUEsYUFBQXVCLFFBQUF0QixDQUFBLFNBQUFtRSxVQUFBLE1BQUFKLE1BQUEsYUFBQS9ELENBQUEsQ0FBQTNELE9BQUEsQ0FBQXlILFlBQUEsY0FBQVEsS0FBQSxpQkFBQS9CLE9BQUF4QyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVUsQ0FBQSxPQUFBUixDQUFBLFNBQUFBLENBQUEsQ0FBQTBCLElBQUEsQ0FBQTVCLENBQUEsNEJBQUFBLENBQUEsQ0FBQTZELElBQUEsU0FBQTdELENBQUEsT0FBQXdFLEtBQUEsQ0FBQXhFLENBQUEsQ0FBQXBFLE1BQUEsU0FBQTBFLENBQUEsT0FBQUUsQ0FBQSxZQUFBcUQsS0FBQSxhQUFBdkQsQ0FBQSxHQUFBTixDQUFBLENBQUFwRSxNQUFBLE9BQUF3RSxDQUFBLENBQUF3QixJQUFBLENBQUE1QixDQUFBLEVBQUFNLENBQUEsVUFBQXVELElBQUEsQ0FBQWxILEtBQUEsR0FBQXFELENBQUEsQ0FBQU0sQ0FBQSxHQUFBdUQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsU0FBQUEsSUFBQSxDQUFBbEgsS0FBQSxHQUFBc0QsQ0FBQSxFQUFBNEQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXJELENBQUEsQ0FBQXFELElBQUEsR0FBQXJELENBQUEsZ0JBQUFtRCxTQUFBLENBQUF6RyxlQUFBLENBQUE4QyxDQUFBLGtDQUFBa0MsaUJBQUEsQ0FBQS9CLFNBQUEsR0FBQWdDLDBCQUFBLEVBQUE3QixDQUFBLENBQUFtQyxDQUFBLG1CQUFBOUYsS0FBQSxFQUFBd0YsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQVosQ0FBQSxDQUFBNkIsMEJBQUEsbUJBQUF4RixLQUFBLEVBQUF1RixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQXVDLFdBQUEsR0FBQXpELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBZCxDQUFBLENBQUEwRSxtQkFBQSxhQUFBekUsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQTBFLFdBQUEsV0FBQTNFLENBQUEsS0FBQUEsQ0FBQSxLQUFBa0MsaUJBQUEsNkJBQUFsQyxDQUFBLENBQUF5RSxXQUFBLElBQUF6RSxDQUFBLENBQUF0RCxJQUFBLE9BQUFzRCxDQUFBLENBQUE0RSxJQUFBLGFBQUEzRSxDQUFBLFdBQUE3RCxNQUFBLENBQUF5SSxjQUFBLEdBQUF6SSxNQUFBLENBQUF5SSxjQUFBLENBQUE1RSxDQUFBLEVBQUFrQywwQkFBQSxLQUFBbEMsQ0FBQSxDQUFBNkUsU0FBQSxHQUFBM0MsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWYsQ0FBQSxFQUFBYSxDQUFBLHlCQUFBYixDQUFBLENBQUFFLFNBQUEsR0FBQS9ELE1BQUEsQ0FBQWtGLE1BQUEsQ0FBQW1CLENBQUEsR0FBQXhDLENBQUEsS0FBQUQsQ0FBQSxDQUFBK0UsS0FBQSxhQUFBOUUsQ0FBQSxhQUFBOEMsT0FBQSxFQUFBOUMsQ0FBQSxPQUFBeUMscUJBQUEsQ0FBQUUsYUFBQSxDQUFBekMsU0FBQSxHQUFBYSxNQUFBLENBQUE0QixhQUFBLENBQUF6QyxTQUFBLEVBQUFTLENBQUEsaUNBQUFaLENBQUEsQ0FBQTRDLGFBQUEsR0FBQUEsYUFBQSxFQUFBNUMsQ0FBQSxDQUFBZ0YsS0FBQSxhQUFBL0UsQ0FBQSxFQUFBQyxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBeUUsT0FBQSxPQUFBdkUsQ0FBQSxPQUFBa0MsYUFBQSxDQUFBeEIsSUFBQSxDQUFBbkIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxHQUFBRSxDQUFBLFVBQUFSLENBQUEsQ0FBQTBFLG1CQUFBLENBQUF4RSxDQUFBLElBQUFRLENBQUEsR0FBQUEsQ0FBQSxDQUFBbUQsSUFBQSxHQUFBYixJQUFBLFdBQUEvQyxDQUFBLFdBQUFBLENBQUEsQ0FBQWtELElBQUEsR0FBQWxELENBQUEsQ0FBQXRELEtBQUEsR0FBQStELENBQUEsQ0FBQW1ELElBQUEsV0FBQW5CLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUF6QyxDQUFBLENBQUE3QyxJQUFBLGFBQUE4QyxDQUFBLFFBQUFELENBQUEsR0FBQTVELE1BQUEsQ0FBQTZELENBQUEsR0FBQUMsQ0FBQSxnQkFBQUUsQ0FBQSxJQUFBSixDQUFBLEVBQUFFLENBQUEsQ0FBQWYsSUFBQSxDQUFBaUIsQ0FBQSxVQUFBRixDQUFBLENBQUFnRixPQUFBLGFBQUFyQixLQUFBLFdBQUEzRCxDQUFBLENBQUF0RSxNQUFBLFNBQUFxRSxDQUFBLEdBQUFDLENBQUEsQ0FBQWlGLEdBQUEsUUFBQWxGLENBQUEsSUFBQUQsQ0FBQSxTQUFBNkQsSUFBQSxDQUFBbEgsS0FBQSxHQUFBc0QsQ0FBQSxFQUFBNEQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsV0FBQUEsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsUUFBQTdELENBQUEsQ0FBQXdDLE1BQUEsR0FBQUEsTUFBQSxFQUFBakIsT0FBQSxDQUFBcEIsU0FBQSxLQUFBd0UsV0FBQSxFQUFBcEQsT0FBQSxFQUFBZ0QsS0FBQSxXQUFBQSxNQUFBdkUsQ0FBQSxhQUFBb0YsSUFBQSxXQUFBdkIsSUFBQSxXQUFBTixJQUFBLFFBQUFDLEtBQUEsR0FBQXZELENBQUEsT0FBQWtELElBQUEsWUFBQUUsUUFBQSxjQUFBRCxNQUFBLGdCQUFBekIsR0FBQSxHQUFBMUIsQ0FBQSxPQUFBbUUsVUFBQSxDQUFBOUgsT0FBQSxDQUFBK0gsYUFBQSxJQUFBckUsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUFtRixNQUFBLE9BQUFqRixDQUFBLENBQUF3QixJQUFBLE9BQUExQixDQUFBLE1BQUFzRSxLQUFBLEVBQUF0RSxDQUFBLENBQUFvRixLQUFBLGNBQUFwRixDQUFBLElBQUFELENBQUEsTUFBQXNGLElBQUEsV0FBQUEsS0FBQSxTQUFBcEMsSUFBQSxXQUFBbEQsQ0FBQSxRQUFBbUUsVUFBQSxJQUFBRSxVQUFBLGtCQUFBckUsQ0FBQSxDQUFBeUIsSUFBQSxRQUFBekIsQ0FBQSxDQUFBMEIsR0FBQSxjQUFBNkQsSUFBQSxLQUFBL0IsaUJBQUEsV0FBQUEsa0JBQUF6RCxDQUFBLGFBQUFtRCxJQUFBLFFBQUFuRCxDQUFBLE1BQUFFLENBQUEsa0JBQUF1RixPQUFBckYsQ0FBQSxFQUFBRSxDQUFBLFdBQUFJLENBQUEsQ0FBQWdCLElBQUEsWUFBQWhCLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxDQUFBMkQsSUFBQSxHQUFBekQsQ0FBQSxFQUFBRSxDQUFBLEtBQUFKLENBQUEsQ0FBQWtELE1BQUEsV0FBQWxELENBQUEsQ0FBQXlCLEdBQUEsR0FBQTFCLENBQUEsS0FBQUssQ0FBQSxhQUFBQSxDQUFBLFFBQUE4RCxVQUFBLENBQUF4SSxNQUFBLE1BQUEwRSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBNEQsVUFBQSxDQUFBOUQsQ0FBQSxHQUFBSSxDQUFBLEdBQUFGLENBQUEsQ0FBQThELFVBQUEsaUJBQUE5RCxDQUFBLENBQUF3RCxNQUFBLFNBQUF5QixNQUFBLGFBQUFqRixDQUFBLENBQUF3RCxNQUFBLFNBQUFvQixJQUFBLFFBQUF4RSxDQUFBLEdBQUFSLENBQUEsQ0FBQXdCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBVixDQUFBLENBQUF3QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQXNFLElBQUEsR0FBQTVFLENBQUEsQ0FBQXlELFFBQUEsU0FBQXdCLE1BQUEsQ0FBQWpGLENBQUEsQ0FBQXlELFFBQUEsZ0JBQUFtQixJQUFBLEdBQUE1RSxDQUFBLENBQUEwRCxVQUFBLFNBQUF1QixNQUFBLENBQUFqRixDQUFBLENBQUEwRCxVQUFBLGNBQUF0RCxDQUFBLGFBQUF3RSxJQUFBLEdBQUE1RSxDQUFBLENBQUF5RCxRQUFBLFNBQUF3QixNQUFBLENBQUFqRixDQUFBLENBQUF5RCxRQUFBLHFCQUFBbkQsQ0FBQSxRQUFBb0MsS0FBQSxxREFBQWtDLElBQUEsR0FBQTVFLENBQUEsQ0FBQTBELFVBQUEsU0FBQXVCLE1BQUEsQ0FBQWpGLENBQUEsQ0FBQTBELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBekQsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQWtFLFVBQUEsQ0FBQXhJLE1BQUEsTUFBQXNFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSSxDQUFBLFFBQUE4RCxVQUFBLENBQUFsRSxDQUFBLE9BQUFJLENBQUEsQ0FBQTBELE1BQUEsU0FBQW9CLElBQUEsSUFBQWhGLENBQUEsQ0FBQXdCLElBQUEsQ0FBQXRCLENBQUEsd0JBQUE4RSxJQUFBLEdBQUE5RSxDQUFBLENBQUE0RCxVQUFBLFFBQUExRCxDQUFBLEdBQUFGLENBQUEsYUFBQUUsQ0FBQSxpQkFBQVAsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBTyxDQUFBLENBQUF3RCxNQUFBLElBQUFoRSxDQUFBLElBQUFBLENBQUEsSUFBQVEsQ0FBQSxDQUFBMEQsVUFBQSxLQUFBMUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBOEQsVUFBQSxjQUFBNUQsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBekIsQ0FBQSxFQUFBUyxDQUFBLENBQUFpQixHQUFBLEdBQUEzQixDQUFBLEVBQUFRLENBQUEsU0FBQTRDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXJELENBQUEsQ0FBQTBELFVBQUEsRUFBQWpDLENBQUEsU0FBQXlELFFBQUEsQ0FBQWhGLENBQUEsTUFBQWdGLFFBQUEsV0FBQUEsU0FBQXpGLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBeUIsSUFBQSxRQUFBekIsQ0FBQSxDQUFBMEIsR0FBQSxxQkFBQTFCLENBQUEsQ0FBQXlCLElBQUEsbUJBQUF6QixDQUFBLENBQUF5QixJQUFBLFFBQUFtQyxJQUFBLEdBQUE1RCxDQUFBLENBQUEwQixHQUFBLGdCQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxTQUFBOEQsSUFBQSxRQUFBN0QsR0FBQSxHQUFBMUIsQ0FBQSxDQUFBMEIsR0FBQSxPQUFBeUIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQTVELENBQUEsQ0FBQXlCLElBQUEsSUFBQTFCLENBQUEsVUFBQTZELElBQUEsR0FBQTdELENBQUEsR0FBQWlDLENBQUEsS0FBQTBELE1BQUEsV0FBQUEsT0FBQTFGLENBQUEsYUFBQUQsQ0FBQSxRQUFBb0UsVUFBQSxDQUFBeEksTUFBQSxNQUFBb0UsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQWtFLFVBQUEsQ0FBQXBFLENBQUEsT0FBQUUsQ0FBQSxDQUFBZ0UsVUFBQSxLQUFBakUsQ0FBQSxjQUFBeUYsUUFBQSxDQUFBeEYsQ0FBQSxDQUFBb0UsVUFBQSxFQUFBcEUsQ0FBQSxDQUFBaUUsUUFBQSxHQUFBRSxhQUFBLENBQUFuRSxDQUFBLEdBQUErQixDQUFBLHlCQUFBMkQsT0FBQTNGLENBQUEsYUFBQUQsQ0FBQSxRQUFBb0UsVUFBQSxDQUFBeEksTUFBQSxNQUFBb0UsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQWtFLFVBQUEsQ0FBQXBFLENBQUEsT0FBQUUsQ0FBQSxDQUFBOEQsTUFBQSxLQUFBL0QsQ0FBQSxRQUFBRyxDQUFBLEdBQUFGLENBQUEsQ0FBQW9FLFVBQUEsa0JBQUFsRSxDQUFBLENBQUFzQixJQUFBLFFBQUFwQixDQUFBLEdBQUFGLENBQUEsQ0FBQXVCLEdBQUEsRUFBQTBDLGFBQUEsQ0FBQW5FLENBQUEsWUFBQUksQ0FBQSxZQUFBNEMsS0FBQSw4QkFBQTJDLGFBQUEsV0FBQUEsY0FBQTdGLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBaUQsUUFBQSxLQUFBMUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBeEMsQ0FBQSxHQUFBNEQsVUFBQSxFQUFBMUQsQ0FBQSxFQUFBNEQsT0FBQSxFQUFBMUQsQ0FBQSxvQkFBQWdELE1BQUEsVUFBQXpCLEdBQUEsR0FBQTFCLENBQUEsR0FBQWdDLENBQUEsT0FBQWpDLENBQUE7QUFBQSxTQUFBOEYsbUJBQUFDLEdBQUEsRUFBQWpELE9BQUEsRUFBQWtELE1BQUEsRUFBQUMsS0FBQSxFQUFBQyxNQUFBLEVBQUFsSCxHQUFBLEVBQUEyQyxHQUFBLGNBQUF3RSxJQUFBLEdBQUFKLEdBQUEsQ0FBQS9HLEdBQUEsRUFBQTJDLEdBQUEsT0FBQWhGLEtBQUEsR0FBQXdKLElBQUEsQ0FBQXhKLEtBQUEsV0FBQXlKLEtBQUEsSUFBQUosTUFBQSxDQUFBSSxLQUFBLGlCQUFBRCxJQUFBLENBQUFoRCxJQUFBLElBQUFMLE9BQUEsQ0FBQW5HLEtBQUEsWUFBQXNJLE9BQUEsQ0FBQW5DLE9BQUEsQ0FBQW5HLEtBQUEsRUFBQXFHLElBQUEsQ0FBQWlELEtBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFHLGtCQUFBQyxFQUFBLDZCQUFBQyxJQUFBLFNBQUFDLElBQUEsR0FBQTdLLFNBQUEsYUFBQXNKLE9BQUEsV0FBQW5DLE9BQUEsRUFBQWtELE1BQUEsUUFBQUQsR0FBQSxHQUFBTyxFQUFBLENBQUF0SyxLQUFBLENBQUF1SyxJQUFBLEVBQUFDLElBQUEsWUFBQVAsTUFBQXRKLEtBQUEsSUFBQW1KLGtCQUFBLENBQUFDLEdBQUEsRUFBQWpELE9BQUEsRUFBQWtELE1BQUEsRUFBQUMsS0FBQSxFQUFBQyxNQUFBLFVBQUF2SixLQUFBLGNBQUF1SixPQUFBTyxHQUFBLElBQUFYLGtCQUFBLENBQUFDLEdBQUEsRUFBQWpELE9BQUEsRUFBQWtELE1BQUEsRUFBQUMsS0FBQSxFQUFBQyxNQUFBLFdBQUFPLEdBQUEsS0FBQVIsS0FBQSxDQUFBUyxTQUFBO0FBRG9FOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQSxTQU1lQyxhQUFhQSxDQUFBQyxFQUFBO0VBQUEsT0FBQUMsY0FBQSxDQUFBN0ssS0FBQSxPQUFBTCxTQUFBO0FBQUE7QUFnQjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBLFNBQUFrTCxlQUFBO0VBQUFBLGNBQUEsR0FBQVIsaUJBQUEsZUFBQXRHLG1CQUFBLEdBQUE2RSxJQUFBLENBaEJBLFNBQUFrQyxRQUE2QjVILE9BQU87SUFBQSxJQUFBNkgsSUFBQSxFQUFBQyxNQUFBO0lBQUEsT0FBQWpILG1CQUFBLEdBQUFxQixJQUFBLFVBQUE2RixTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQTlCLElBQUEsR0FBQThCLFFBQUEsQ0FBQXJELElBQUE7UUFBQTtVQUMxQmtELElBQUksR0FBR0ksWUFBWSxDQUFDQyxPQUFPLENBQUMsY0FBYyxDQUFDO1VBQUFGLFFBQUEsQ0FBQXJELElBQUE7VUFBQSxPQUM1QndELEtBQUssQ0FBQ25KLFNBQVMsRUFBRTtZQUNsQ2tGLE1BQU0sRUFBRSxNQUFNO1lBQ2RrRSxPQUFPLEVBQUU7Y0FDTCxjQUFjLEVBQUU7WUFDcEIsQ0FBQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2NBQ2pCVixJQUFJLEVBQUVBLElBQUk7Y0FDVlcsSUFBSSxFQUFFeEk7WUFDVixDQUFDO1VBQ0wsQ0FBQyxDQUFDO1FBQUE7VUFUSThILE1BQU0sR0FBQUUsUUFBQSxDQUFBM0QsSUFBQTtVQUFBLE9BQUEyRCxRQUFBLENBQUF4RCxNQUFBLFdBV0xzRCxNQUFNLENBQUNXLElBQUksQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFULFFBQUEsQ0FBQTNCLElBQUE7TUFBQTtJQUFBLEdBQUF1QixPQUFBO0VBQUEsQ0FDdkI7RUFBQSxPQUFBRCxjQUFBLENBQUE3SyxLQUFBLE9BQUFMLFNBQUE7QUFBQTtBQUFBLFNBUWNpTSxZQUFZQSxDQUFBQyxHQUFBO0VBQUEsT0FBQUMsYUFBQSxDQUFBOUwsS0FBQSxPQUFBTCxTQUFBO0FBQUE7QUFBQSxTQUFBbU0sY0FBQTtFQUFBQSxhQUFBLEdBQUF6QixpQkFBQSxlQUFBdEcsbUJBQUEsR0FBQTZFLElBQUEsQ0FBM0IsU0FBQW1ELFNBQTRCN0ksT0FBTztJQUFBLElBQUE4SCxNQUFBO0lBQUEsT0FBQWpILG1CQUFBLEdBQUFxQixJQUFBLFVBQUE0RyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTdDLElBQUEsR0FBQTZDLFNBQUEsQ0FBQXBFLElBQUE7UUFBQTtVQUFBb0UsU0FBQSxDQUFBcEUsSUFBQTtVQUFBLE9BQ1Z3RCxLQUFLLENBQUM5SSxTQUFTLEdBQUdXLE9BQU8sRUFBRTtZQUM1Q2tFLE1BQU0sRUFBRTtVQUNaLENBQUMsQ0FBQztRQUFBO1VBRkk0RCxNQUFNLEdBQUFpQixTQUFBLENBQUExRSxJQUFBO1VBQUEsT0FBQTBFLFNBQUEsQ0FBQXZFLE1BQUEsV0FJTHNELE1BQU0sQ0FBQ1csSUFBSSxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQU0sU0FBQSxDQUFBMUMsSUFBQTtNQUFBO0lBQUEsR0FBQXdDLFFBQUE7RUFBQSxDQUN2QjtFQUFBLE9BQUFELGFBQUEsQ0FBQTlMLEtBQUEsT0FBQUwsU0FBQTtBQUFBOzs7Ozs7QUNuQ0QsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBeUc7QUFDekc7QUFDQTs7QUFFQSxJQUFJLHVCQUFPOztBQUVYLHVCQUFPLHFCQUFxQiw2QkFBbUI7QUFDL0MsdUJBQU8saUJBQWlCLDBDQUFhOztBQUVyQyxNQUFNLHVCQUFPLFVBQVUsK0JBQWE7QUFDcEM7QUFDQSx1QkFBTyxVQUFVLHVCQUFNO0FBQ3ZCLHVCQUFPLHNCQUFzQiw4QkFBa0I7O0FBRS9DLElBQUksc0JBQU0sR0FBRyxrQ0FBRyxDQUFDLDhCQUFPLEVBQUUsdUJBQU87Ozs7QUFJMEM7QUFDM0UsT0FBTyxpRUFBZSw4QkFBTyxJQUFJLDhCQUFPLFVBQVUsOEJBQU8sbUJBQW1CLEVBQUM7Ozs7QUMxQjlELFNBQVN1TSxXQUFXQSxDQUFDek0sS0FBSyxFQUFlO0VBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBVkMsUUFBUSxPQUFBQyxLQUFBLENBQUFKLElBQUEsT0FBQUEsSUFBQSxXQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO0lBQVJGLFFBQVEsQ0FBQUUsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7RUFBQTtFQUNsRCxPQUNJUix5QkFBQTtJQUFLNE0sRUFBRSxFQUFFMU0sS0FBSyxDQUFDME0sRUFBRztJQUFDMUosU0FBUyxFQUFDO0VBQW1CLEdBQzNDNUMsUUFDQSxDQUFDO0FBRWQ7OztBQ04wRDtBQUUzQyxTQUFTdU0sVUFBVUEsQ0FBQzNNLEtBQUssRUFBRTtFQUN0QyxPQUNJRix3QkFBQTtJQUFLa0QsU0FBUyxFQUFDLGtCQUFrQjtJQUFDNEosVUFBVSxFQUFFNU0sS0FBSyxDQUFDNE07RUFBVyxHQUMzRDlNLHdCQUFBO0lBQ0krTSxHQUFHLEVBQUVoSyxVQUFVLEdBQUc3QyxLQUFLLENBQUM4TSxRQUFRLENBQUNDLEtBQUssQ0FBQ0MsSUFBSztJQUM1Q2hLLFNBQVMsRUFBQyxZQUFZO0lBQ3RCbkIsS0FBSyxFQUFFO01BQUVvTCxLQUFLLEVBQUUsTUFBTTtNQUFFQyxNQUFNLEVBQUU7SUFBTztFQUFFLENBQzVDLENBQUMsRUFDRGxOLEtBQUssQ0FBQzhNLFFBQVEsQ0FBQzdMLElBQ2YsQ0FBQztBQUVkOzs7QUNicUU7QUFFdEQsU0FBU2tNLFFBQVFBLENBQUNuTixLQUFLLEVBQUU7RUFDcEMsSUFBSSxDQUFDQSxLQUFLLENBQUNvTixJQUFJLEVBQUUsT0FBT3ROLHNCQUFBLFlBQVUsQ0FBQztFQUNuQyxPQUNJQSxzQkFBQTtJQUFLa0QsU0FBUyxFQUFDLGtCQUFrQjtJQUFDNEosVUFBVSxFQUFFNU0sS0FBSyxDQUFDNE07RUFBVyxHQUMzRDlNLHNCQUFBO0lBQ0krQixLQUFLLEVBQUU7TUFBRW9MLEtBQUssRUFBRSxLQUFLO01BQUVJLFFBQVEsRUFBRSxPQUFPO01BQUVDLE9BQU8sRUFBRSxNQUFNO01BQUVDLFVBQVUsRUFBRSxRQUFRO01BQUVDLEdBQUcsRUFBRTtJQUFNO0VBQUUsR0FFOUYxTixzQkFBQTtJQUNJK00sR0FBRyxFQUFFN00sS0FBSyxDQUFDb04sSUFBSSxDQUFDSyxXQUFXLEdBQUcvSyxTQUFTLEdBQUcxQyxLQUFLLENBQUNvTixJQUFJLENBQUNKLElBQUksR0FBR25LLFVBQVUsR0FBRzdDLEtBQUssQ0FBQ29OLElBQUksQ0FBQ0osSUFBSztJQUN6RmhLLFNBQVMsRUFBQyxZQUFZO0lBQ3RCbkIsS0FBSyxFQUFFO01BQUVvTCxLQUFLLEVBQUUsTUFBTTtNQUFFQyxNQUFNLEVBQUU7SUFBTztFQUFFLENBQzVDLENBQUMsRUFDRGxOLEtBQUssQ0FBQ29OLElBQUksQ0FBQ25NLElBQUksR0FBR2pCLEtBQUssQ0FBQ29OLElBQUksQ0FBQ00sU0FDN0IsQ0FBQyxFQUNONU4sc0JBQUE7SUFBSytCLEtBQUssRUFBRTtNQUFFb0wsS0FBSyxFQUFFLElBQUk7TUFBRUksUUFBUSxFQUFFO0lBQU87RUFBRSxHQUFFck4sS0FBSyxDQUFDb04sSUFBSSxDQUFDTSxTQUFlLENBQUMsRUFDM0U1TixzQkFBQTtJQUFLK0IsS0FBSyxFQUFFO01BQUVvTCxLQUFLLEVBQUUsS0FBSztNQUFFSSxRQUFRLEVBQUU7SUFBUTtFQUFFLEdBQUVyTixLQUFLLENBQUNvTixJQUFJLENBQUNPLEtBQVcsQ0FBQyxFQUN6RTdOLHNCQUFBO0lBQUsrQixLQUFLLEVBQUU7TUFBRW9MLEtBQUssRUFBRSxLQUFLO01BQUVJLFFBQVEsRUFBRTtJQUFRO0VBQUUsR0FDM0MsQ0FBQ3JOLEtBQUssQ0FBQ29OLElBQUksQ0FBQ1EsSUFBSSxHQUFHLElBQUksRUFBRUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQ3RDLENBQ0osQ0FBQztBQUVkOzs7QUN2QmUsU0FBU0MsaUJBQWlCQSxDQUFDOU4sS0FBSyxFQUFFO0VBQzdDLE9BQ0lGLCtCQUFBO0lBQUtrRCxTQUFTLEVBQUM7RUFBeUIsR0FDcENsRCwrQkFBQTtJQUFLa0QsU0FBUyxFQUFDLDZCQUE2QjtJQUFDbkIsS0FBSyxFQUFFO01BQUVvTCxLQUFLLEVBQUUsS0FBSztNQUFFSSxRQUFRLEVBQUU7SUFBUTtFQUFFLEdBQUMsTUFFcEYsQ0FBQyxFQUNOdk4sK0JBQUE7SUFBS2tELFNBQVMsRUFBQyw2QkFBNkI7SUFBQ25CLEtBQUssRUFBRTtNQUFFb0wsS0FBSyxFQUFFLElBQUk7TUFBRUksUUFBUSxFQUFFO0lBQU87RUFBRSxHQUFDLE1BRWxGLENBQUMsRUFDTnZOLCtCQUFBO0lBQUtrRCxTQUFTLEVBQUMsNkJBQTZCO0lBQUNuQixLQUFLLEVBQUU7TUFBRW9MLEtBQUssRUFBRSxLQUFLO01BQUVJLFFBQVEsRUFBRTtJQUFRO0VBQUUsR0FBQyxPQUVwRixDQUFDLEVBQ052TiwrQkFBQTtJQUFLa0QsU0FBUyxFQUFDLDZCQUE2QjtJQUFDbkIsS0FBSyxFQUFFO01BQUVvTCxLQUFLLEVBQUUsS0FBSztNQUFFSSxRQUFRLEVBQUU7SUFBUTtFQUFFLEdBQUMsTUFFcEYsQ0FDSixDQUFDO0FBRWQ7OztBQ2pCcUI7QUFDbUI7QUFDVTtBQUNKO0FBQ2tCO0FBRWhFLFNBQVNVLCtCQUFlQSxDQUFDL04sS0FBSyxFQUFlO0VBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBVkMsUUFBUSxPQUFBQyxLQUFBLENBQUFKLElBQUEsT0FBQUEsSUFBQSxXQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO0lBQVJGLFFBQVEsQ0FBQUUsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7RUFBQTtFQUN2QyxPQUFPUiw2QkFBQTtJQUFLa0QsU0FBUyxFQUFDO0VBQXFCLEdBQUU1QyxRQUFjLENBQUM7QUFDaEU7Ozs7QUNGb0M7QUFDTztBQUUzQyxTQUFTNk4sV0FBV0EsQ0FBQSxFQUFHO0VBQ25CLE9BQU9uTyx5QkFBQSxDQUFDMk0sV0FBVztJQUFDQyxFQUFFLEVBQUM7RUFBNkIsQ0FBRSxDQUFDO0FBQzNEO0FBRUEsU0FBU3dCLGlCQUFpQkEsQ0FBQ0MsVUFBVSxFQUFFQyxRQUFRLEVBQUU7RUFDN0MsSUFBTUMsSUFBSSxHQUFHM04sUUFBUSxDQUFDNE4sY0FBYyxDQUFDLDZCQUE2QixDQUFDO0VBRW5FLE9BQU9ELElBQUksQ0FBQ0UsVUFBVSxFQUFFO0lBQ3BCRixJQUFJLENBQUNHLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDRSxVQUFVLENBQUM7RUFDckM7RUFFQUYsSUFBSSxDQUFDSSxNQUFNLENBQ1AzTyx5QkFBQSxDQUFDaU8sK0JBQWUsUUFDWmpPLHlCQUFBLENBQUNnTyxpQkFBaUIsTUFBRSxDQUFDLEVBQ3BCSyxVQUFVLENBQUNPLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFVBQUMxTSxLQUFLO0lBQUEsT0FDdkJuQyx5QkFBQSxDQUFDNk0sVUFBVTtNQUNQRyxRQUFRLEVBQUU3SyxLQUFNO01BQ2hCMkssVUFBVSxFQUFFLFNBQUFBLFdBQUE7UUFBQSxPQUFNb0IsSUFBSSxDQUFDNUssZUFBTyxDQUFDVyxlQUFlLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRzlCLEtBQUssQ0FBQ2hCLElBQUksQ0FBQztNQUFBO0lBQUMsQ0FDeEUsQ0FBQztFQUFBLENBQ0wsQ0FBQyxFQUNEbU4sUUFBUSxDQUFDTyxHQUFHLENBQUMsVUFBQzFNLEtBQUs7SUFBQSxPQUNoQm5DLHlCQUFBLENBQUNxTixRQUFRO01BQUNDLElBQUksRUFBRW5MO0lBQU0sQ0FBRSxDQUFDO0VBQUEsQ0FDNUIsQ0FDWSxDQUNyQixDQUFDO0FBQ0w7Ozs7c0RDakNBLHFKQUFBcUMsMEJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBOUQsTUFBQSxDQUFBK0QsU0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsY0FBQSxFQUFBQyxDQUFBLEdBQUFsRSxNQUFBLENBQUFtRSxjQUFBLGNBQUFOLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUF2RCxLQUFBLEtBQUE2RCxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWYsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQTlELE1BQUEsQ0FBQW1FLGNBQUEsQ0FBQU4sQ0FBQSxFQUFBRCxDQUFBLElBQUFyRCxLQUFBLEVBQUF1RCxDQUFBLEVBQUFlLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFsQixDQUFBLENBQUFELENBQUEsV0FBQWdCLE1BQUEsbUJBQUFmLENBQUEsSUFBQWUsTUFBQSxZQUFBQSxPQUFBZixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQWtCLEtBQUFuQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFJLENBQUEsR0FBQVIsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLFNBQUEsWUFBQWtCLFNBQUEsR0FBQXJCLENBQUEsR0FBQXFCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBdEUsTUFBQSxDQUFBa0YsTUFBQSxDQUFBZCxDQUFBLENBQUFMLFNBQUEsR0FBQVMsQ0FBQSxPQUFBVyxPQUFBLENBQUFuQixDQUFBLGdCQUFBRSxDQUFBLENBQUFJLENBQUEsZUFBQS9ELEtBQUEsRUFBQTZFLGdCQUFBLENBQUF2QixDQUFBLEVBQUFDLENBQUEsRUFBQVUsQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUF4QixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQXdCLElBQUEsWUFBQUMsR0FBQSxFQUFBMUIsQ0FBQSxDQUFBMkIsSUFBQSxDQUFBNUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQXlCLElBQUEsV0FBQUMsR0FBQSxFQUFBMUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFvQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBakcsTUFBQSxDQUFBa0csY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUFyQyxDQUFBLElBQUFFLENBQUEsQ0FBQXdCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWhDLFNBQUEsR0FBQWtCLFNBQUEsQ0FBQWxCLFNBQUEsR0FBQS9ELE1BQUEsQ0FBQWtGLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQXpDLENBQUEsZ0NBQUEzRCxPQUFBLFdBQUEwRCxDQUFBLElBQUFnQixNQUFBLENBQUFmLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBMEMsT0FBQSxDQUFBM0MsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBMkMsY0FBQTNDLENBQUEsRUFBQUQsQ0FBQSxhQUFBNkMsT0FBQTNDLENBQUEsRUFBQUksQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUF4QixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBSyxDQUFBLG1CQUFBTSxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFuRSxLQUFBLFNBQUFrRixDQUFBLGdCQUFBM0UsY0FBQSxDQUFBMkUsQ0FBQSxLQUFBekIsQ0FBQSxDQUFBd0IsSUFBQSxDQUFBQyxDQUFBLGVBQUE3QixDQUFBLENBQUE4QyxPQUFBLENBQUFqQixDQUFBLENBQUFrQixPQUFBLEVBQUFDLElBQUEsV0FBQS9DLENBQUEsSUFBQTRDLE1BQUEsU0FBQTVDLENBQUEsRUFBQU8sQ0FBQSxFQUFBRSxDQUFBLGdCQUFBVCxDQUFBLElBQUE0QyxNQUFBLFVBQUE1QyxDQUFBLEVBQUFPLENBQUEsRUFBQUUsQ0FBQSxRQUFBVixDQUFBLENBQUE4QyxPQUFBLENBQUFqQixDQUFBLEVBQUFtQixJQUFBLFdBQUEvQyxDQUFBLElBQUFhLENBQUEsQ0FBQW5FLEtBQUEsR0FBQXNELENBQUEsRUFBQU8sQ0FBQSxDQUFBTSxDQUFBLGdCQUFBYixDQUFBLFdBQUE0QyxNQUFBLFVBQUE1QyxDQUFBLEVBQUFPLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBekIsQ0FBQSxFQUFBSSxDQUFBLG9CQUFBM0QsS0FBQSxXQUFBQSxNQUFBc0QsQ0FBQSxFQUFBRyxDQUFBLGFBQUE2QywyQkFBQSxlQUFBakQsQ0FBQSxXQUFBQSxDQUFBLEVBQUFFLENBQUEsSUFBQTJDLE1BQUEsQ0FBQTVDLENBQUEsRUFBQUcsQ0FBQSxFQUFBSixDQUFBLEVBQUFFLENBQUEsZ0JBQUFBLENBQUEsR0FBQUEsQ0FBQSxHQUFBQSxDQUFBLENBQUE4QyxJQUFBLENBQUFDLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBekIsaUJBQUF4QixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUF1QixDQUFBLG1CQUFBckIsQ0FBQSxFQUFBRSxDQUFBLFFBQUFKLENBQUEsS0FBQXlCLENBQUEsUUFBQW1CLEtBQUEsc0NBQUE1QyxDQUFBLEtBQUEwQixDQUFBLG9CQUFBeEIsQ0FBQSxRQUFBRSxDQUFBLFdBQUEvRCxLQUFBLEVBQUFzRCxDQUFBLEVBQUFrRCxJQUFBLGVBQUEvQyxDQUFBLENBQUFnRCxNQUFBLEdBQUE1QyxDQUFBLEVBQUFKLENBQUEsQ0FBQXVCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBUixDQUFBLENBQUFpRCxRQUFBLE1BQUF6QyxDQUFBLFFBQUFFLENBQUEsR0FBQXdDLG1CQUFBLENBQUExQyxDQUFBLEVBQUFSLENBQUEsT0FBQVUsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVYsQ0FBQSxDQUFBZ0QsTUFBQSxFQUFBaEQsQ0FBQSxDQUFBbUQsSUFBQSxHQUFBbkQsQ0FBQSxDQUFBb0QsS0FBQSxHQUFBcEQsQ0FBQSxDQUFBdUIsR0FBQSxzQkFBQXZCLENBQUEsQ0FBQWdELE1BQUEsUUFBQTlDLENBQUEsS0FBQXVCLENBQUEsUUFBQXZCLENBQUEsR0FBQTBCLENBQUEsRUFBQTVCLENBQUEsQ0FBQXVCLEdBQUEsRUFBQXZCLENBQUEsQ0FBQXFELGlCQUFBLENBQUFyRCxDQUFBLENBQUF1QixHQUFBLHVCQUFBdkIsQ0FBQSxDQUFBZ0QsTUFBQSxJQUFBaEQsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBdUIsR0FBQSxHQUFBckIsQ0FBQSxHQUFBeUIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQXpCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLG9CQUFBZ0MsQ0FBQSxDQUFBVixJQUFBLFFBQUFwQixDQUFBLEdBQUFGLENBQUEsQ0FBQStDLElBQUEsR0FBQW5CLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQXRGLEtBQUEsRUFBQXlGLENBQUEsQ0FBQVQsR0FBQSxFQUFBd0IsSUFBQSxFQUFBL0MsQ0FBQSxDQUFBK0MsSUFBQSxrQkFBQWYsQ0FBQSxDQUFBVixJQUFBLEtBQUFwQixDQUFBLEdBQUEwQixDQUFBLEVBQUE1QixDQUFBLENBQUFnRCxNQUFBLFlBQUFoRCxDQUFBLENBQUF1QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTJCLG9CQUFBdEQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsTUFBQSxFQUFBOUMsQ0FBQSxHQUFBTixDQUFBLENBQUFXLFFBQUEsQ0FBQVAsQ0FBQSxPQUFBRSxDQUFBLEtBQUFMLENBQUEsU0FBQUMsQ0FBQSxDQUFBbUQsUUFBQSxxQkFBQWpELENBQUEsSUFBQUosQ0FBQSxDQUFBVyxRQUFBLGVBQUFULENBQUEsQ0FBQWtELE1BQUEsYUFBQWxELENBQUEsQ0FBQXlCLEdBQUEsR0FBQTFCLENBQUEsRUFBQXFELG1CQUFBLENBQUF0RCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBa0QsTUFBQSxrQkFBQWhELENBQUEsS0FBQUYsQ0FBQSxDQUFBa0QsTUFBQSxZQUFBbEQsQ0FBQSxDQUFBeUIsR0FBQSxPQUFBZ0MsU0FBQSx1Q0FBQXZELENBQUEsaUJBQUE2QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFuQixDQUFBLEVBQUFOLENBQUEsQ0FBQVcsUUFBQSxFQUFBVCxDQUFBLENBQUF5QixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBeEIsQ0FBQSxDQUFBa0QsTUFBQSxZQUFBbEQsQ0FBQSxDQUFBeUIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBekIsQ0FBQSxDQUFBbUQsUUFBQSxTQUFBcEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQXlDLElBQUEsSUFBQWpELENBQUEsQ0FBQUYsQ0FBQSxDQUFBNEQsVUFBQSxJQUFBbEQsQ0FBQSxDQUFBL0QsS0FBQSxFQUFBdUQsQ0FBQSxDQUFBMkQsSUFBQSxHQUFBN0QsQ0FBQSxDQUFBOEQsT0FBQSxlQUFBNUQsQ0FBQSxDQUFBa0QsTUFBQSxLQUFBbEQsQ0FBQSxDQUFBa0QsTUFBQSxXQUFBbEQsQ0FBQSxDQUFBeUIsR0FBQSxHQUFBMUIsQ0FBQSxHQUFBQyxDQUFBLENBQUFtRCxRQUFBLFNBQUFwQixDQUFBLElBQUF2QixDQUFBLElBQUFSLENBQUEsQ0FBQWtELE1BQUEsWUFBQWxELENBQUEsQ0FBQXlCLEdBQUEsT0FBQWdDLFNBQUEsc0NBQUF6RCxDQUFBLENBQUFtRCxRQUFBLFNBQUFwQixDQUFBLGNBQUE4QixhQUFBOUQsQ0FBQSxRQUFBRCxDQUFBLEtBQUFnRSxNQUFBLEVBQUEvRCxDQUFBLFlBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBaUUsUUFBQSxHQUFBaEUsQ0FBQSxXQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQWtFLFVBQUEsR0FBQWpFLENBQUEsS0FBQUQsQ0FBQSxDQUFBbUUsUUFBQSxHQUFBbEUsQ0FBQSxXQUFBbUUsVUFBQSxDQUFBakYsSUFBQSxDQUFBYSxDQUFBLGNBQUFxRSxjQUFBcEUsQ0FBQSxRQUFBRCxDQUFBLEdBQUFDLENBQUEsQ0FBQXFFLFVBQUEsUUFBQXRFLENBQUEsQ0FBQTBCLElBQUEsb0JBQUExQixDQUFBLENBQUEyQixHQUFBLEVBQUExQixDQUFBLENBQUFxRSxVQUFBLEdBQUF0RSxDQUFBLGFBQUF1QixRQUFBdEIsQ0FBQSxTQUFBbUUsVUFBQSxNQUFBSixNQUFBLGFBQUEvRCxDQUFBLENBQUEzRCxPQUFBLENBQUF5SCxZQUFBLGNBQUFRLEtBQUEsaUJBQUEvQixPQUFBeEMsQ0FBQSxRQUFBQSxDQUFBLFdBQUFBLENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLENBQUFVLENBQUEsT0FBQVIsQ0FBQSxTQUFBQSxDQUFBLENBQUEwQixJQUFBLENBQUE1QixDQUFBLDRCQUFBQSxDQUFBLENBQUE2RCxJQUFBLFNBQUE3RCxDQUFBLE9BQUF3RSxLQUFBLENBQUF4RSxDQUFBLENBQUFwRSxNQUFBLFNBQUEwRSxDQUFBLE9BQUFFLENBQUEsWUFBQXFELEtBQUEsYUFBQXZELENBQUEsR0FBQU4sQ0FBQSxDQUFBcEUsTUFBQSxPQUFBd0UsQ0FBQSxDQUFBd0IsSUFBQSxDQUFBNUIsQ0FBQSxFQUFBTSxDQUFBLFVBQUF1RCxJQUFBLENBQUFsSCxLQUFBLEdBQUFxRCxDQUFBLENBQUFNLENBQUEsR0FBQXVELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQWxILEtBQUEsR0FBQXNELENBQUEsRUFBQTRELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUFyRCxDQUFBLENBQUFxRCxJQUFBLEdBQUFyRCxDQUFBLGdCQUFBbUQsU0FBQSxDQUFBekcsY0FBQSxDQUFBOEMsQ0FBQSxrQ0FBQWtDLGlCQUFBLENBQUEvQixTQUFBLEdBQUFnQywwQkFBQSxFQUFBN0IsQ0FBQSxDQUFBbUMsQ0FBQSxtQkFBQTlGLEtBQUEsRUFBQXdGLDBCQUFBLEVBQUFqQixZQUFBLFNBQUFaLENBQUEsQ0FBQTZCLDBCQUFBLG1CQUFBeEYsS0FBQSxFQUFBdUYsaUJBQUEsRUFBQWhCLFlBQUEsU0FBQWdCLGlCQUFBLENBQUF1QyxXQUFBLEdBQUF6RCxNQUFBLENBQUFtQiwwQkFBQSxFQUFBckIsQ0FBQSx3QkFBQWQsQ0FBQSxDQUFBMEUsbUJBQUEsYUFBQXpFLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUEwRSxXQUFBLFdBQUEzRSxDQUFBLEtBQUFBLENBQUEsS0FBQWtDLGlCQUFBLDZCQUFBbEMsQ0FBQSxDQUFBeUUsV0FBQSxJQUFBekUsQ0FBQSxDQUFBdEQsSUFBQSxPQUFBc0QsQ0FBQSxDQUFBNEUsSUFBQSxhQUFBM0UsQ0FBQSxXQUFBN0QsTUFBQSxDQUFBeUksY0FBQSxHQUFBekksTUFBQSxDQUFBeUksY0FBQSxDQUFBNUUsQ0FBQSxFQUFBa0MsMEJBQUEsS0FBQWxDLENBQUEsQ0FBQTZFLFNBQUEsR0FBQTNDLDBCQUFBLEVBQUFuQixNQUFBLENBQUFmLENBQUEsRUFBQWEsQ0FBQSx5QkFBQWIsQ0FBQSxDQUFBRSxTQUFBLEdBQUEvRCxNQUFBLENBQUFrRixNQUFBLENBQUFtQixDQUFBLEdBQUF4QyxDQUFBLEtBQUFELENBQUEsQ0FBQStFLEtBQUEsYUFBQTlFLENBQUEsYUFBQThDLE9BQUEsRUFBQTlDLENBQUEsT0FBQXlDLHFCQUFBLENBQUFFLGFBQUEsQ0FBQXpDLFNBQUEsR0FBQWEsTUFBQSxDQUFBNEIsYUFBQSxDQUFBekMsU0FBQSxFQUFBUyxDQUFBLGlDQUFBWixDQUFBLENBQUE0QyxhQUFBLEdBQUFBLGFBQUEsRUFBQTVDLENBQUEsQ0FBQWdGLEtBQUEsYUFBQS9FLENBQUEsRUFBQUMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQXlFLE9BQUEsT0FBQXZFLENBQUEsT0FBQWtDLGFBQUEsQ0FBQXhCLElBQUEsQ0FBQW5CLENBQUEsRUFBQUMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxVQUFBUixDQUFBLENBQUEwRSxtQkFBQSxDQUFBeEUsQ0FBQSxJQUFBUSxDQUFBLEdBQUFBLENBQUEsQ0FBQW1ELElBQUEsR0FBQWIsSUFBQSxXQUFBL0MsQ0FBQSxXQUFBQSxDQUFBLENBQUFrRCxJQUFBLEdBQUFsRCxDQUFBLENBQUF0RCxLQUFBLEdBQUErRCxDQUFBLENBQUFtRCxJQUFBLFdBQUFuQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBekMsQ0FBQSxDQUFBN0MsSUFBQSxhQUFBOEMsQ0FBQSxRQUFBRCxDQUFBLEdBQUE1RCxNQUFBLENBQUE2RCxDQUFBLEdBQUFDLENBQUEsZ0JBQUFFLENBQUEsSUFBQUosQ0FBQSxFQUFBRSxDQUFBLENBQUFmLElBQUEsQ0FBQWlCLENBQUEsVUFBQUYsQ0FBQSxDQUFBZ0YsT0FBQSxhQUFBckIsS0FBQSxXQUFBM0QsQ0FBQSxDQUFBdEUsTUFBQSxTQUFBcUUsQ0FBQSxHQUFBQyxDQUFBLENBQUFpRixHQUFBLFFBQUFsRixDQUFBLElBQUFELENBQUEsU0FBQTZELElBQUEsQ0FBQWxILEtBQUEsR0FBQXNELENBQUEsRUFBQTRELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUE3RCxDQUFBLENBQUF3QyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXBCLFNBQUEsS0FBQXdFLFdBQUEsRUFBQXBELE9BQUEsRUFBQWdELEtBQUEsV0FBQUEsTUFBQXZFLENBQUEsYUFBQW9GLElBQUEsV0FBQXZCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUF2RCxDQUFBLE9BQUFrRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQXpCLEdBQUEsR0FBQTFCLENBQUEsT0FBQW1FLFVBQUEsQ0FBQTlILE9BQUEsQ0FBQStILGFBQUEsSUFBQXJFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBbUYsTUFBQSxPQUFBakYsQ0FBQSxDQUFBd0IsSUFBQSxPQUFBMUIsQ0FBQSxNQUFBc0UsS0FBQSxFQUFBdEUsQ0FBQSxDQUFBb0YsS0FBQSxjQUFBcEYsQ0FBQSxJQUFBRCxDQUFBLE1BQUFzRixJQUFBLFdBQUFBLEtBQUEsU0FBQXBDLElBQUEsV0FBQWxELENBQUEsUUFBQW1FLFVBQUEsSUFBQUUsVUFBQSxrQkFBQXJFLENBQUEsQ0FBQXlCLElBQUEsUUFBQXpCLENBQUEsQ0FBQTBCLEdBQUEsY0FBQTZELElBQUEsS0FBQS9CLGlCQUFBLFdBQUFBLGtCQUFBekQsQ0FBQSxhQUFBbUQsSUFBQSxRQUFBbkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBdUYsT0FBQXJGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSSxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUEzQixDQUFBLEVBQUFFLENBQUEsQ0FBQTJELElBQUEsR0FBQXpELENBQUEsRUFBQUUsQ0FBQSxLQUFBSixDQUFBLENBQUFrRCxNQUFBLFdBQUFsRCxDQUFBLENBQUF5QixHQUFBLEdBQUExQixDQUFBLEtBQUFLLENBQUEsYUFBQUEsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBeEksTUFBQSxNQUFBMEUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQTRELFVBQUEsQ0FBQTlELENBQUEsR0FBQUksQ0FBQSxHQUFBRixDQUFBLENBQUE4RCxVQUFBLGlCQUFBOUQsQ0FBQSxDQUFBd0QsTUFBQSxTQUFBeUIsTUFBQSxhQUFBakYsQ0FBQSxDQUFBd0QsTUFBQSxTQUFBb0IsSUFBQSxRQUFBeEUsQ0FBQSxHQUFBUixDQUFBLENBQUF3QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVYsQ0FBQSxDQUFBd0IsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUFzRSxJQUFBLEdBQUE1RSxDQUFBLENBQUF5RCxRQUFBLFNBQUF3QixNQUFBLENBQUFqRixDQUFBLENBQUF5RCxRQUFBLGdCQUFBbUIsSUFBQSxHQUFBNUUsQ0FBQSxDQUFBMEQsVUFBQSxTQUFBdUIsTUFBQSxDQUFBakYsQ0FBQSxDQUFBMEQsVUFBQSxjQUFBdEQsQ0FBQSxhQUFBd0UsSUFBQSxHQUFBNUUsQ0FBQSxDQUFBeUQsUUFBQSxTQUFBd0IsTUFBQSxDQUFBakYsQ0FBQSxDQUFBeUQsUUFBQSxxQkFBQW5ELENBQUEsUUFBQW9DLEtBQUEscURBQUFrQyxJQUFBLEdBQUE1RSxDQUFBLENBQUEwRCxVQUFBLFNBQUF1QixNQUFBLENBQUFqRixDQUFBLENBQUEwRCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQXpELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFrRSxVQUFBLENBQUF4SSxNQUFBLE1BQUFzRSxDQUFBLFNBQUFBLENBQUEsUUFBQUksQ0FBQSxRQUFBOEQsVUFBQSxDQUFBbEUsQ0FBQSxPQUFBSSxDQUFBLENBQUEwRCxNQUFBLFNBQUFvQixJQUFBLElBQUFoRixDQUFBLENBQUF3QixJQUFBLENBQUF0QixDQUFBLHdCQUFBOEUsSUFBQSxHQUFBOUUsQ0FBQSxDQUFBNEQsVUFBQSxRQUFBMUQsQ0FBQSxHQUFBRixDQUFBLGFBQUFFLENBQUEsaUJBQUFQLENBQUEsbUJBQUFBLENBQUEsS0FBQU8sQ0FBQSxDQUFBd0QsTUFBQSxJQUFBaEUsQ0FBQSxJQUFBQSxDQUFBLElBQUFRLENBQUEsQ0FBQTBELFVBQUEsS0FBQTFELENBQUEsY0FBQUUsQ0FBQSxHQUFBRixDQUFBLEdBQUFBLENBQUEsQ0FBQThELFVBQUEsY0FBQTVELENBQUEsQ0FBQWdCLElBQUEsR0FBQXpCLENBQUEsRUFBQVMsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBM0IsQ0FBQSxFQUFBUSxDQUFBLFNBQUE0QyxNQUFBLGdCQUFBUyxJQUFBLEdBQUFyRCxDQUFBLENBQUEwRCxVQUFBLEVBQUFqQyxDQUFBLFNBQUF5RCxRQUFBLENBQUFoRixDQUFBLE1BQUFnRixRQUFBLFdBQUFBLFNBQUF6RixDQUFBLEVBQUFELENBQUEsb0JBQUFDLENBQUEsQ0FBQXlCLElBQUEsUUFBQXpCLENBQUEsQ0FBQTBCLEdBQUEscUJBQUExQixDQUFBLENBQUF5QixJQUFBLG1CQUFBekIsQ0FBQSxDQUFBeUIsSUFBQSxRQUFBbUMsSUFBQSxHQUFBNUQsQ0FBQSxDQUFBMEIsR0FBQSxnQkFBQTFCLENBQUEsQ0FBQXlCLElBQUEsU0FBQThELElBQUEsUUFBQTdELEdBQUEsR0FBQTFCLENBQUEsQ0FBQTBCLEdBQUEsT0FBQXlCLE1BQUEsa0JBQUFTLElBQUEseUJBQUE1RCxDQUFBLENBQUF5QixJQUFBLElBQUExQixDQUFBLFVBQUE2RCxJQUFBLEdBQUE3RCxDQUFBLEdBQUFpQyxDQUFBLEtBQUEwRCxNQUFBLFdBQUFBLE9BQUExRixDQUFBLGFBQUFELENBQUEsUUFBQW9FLFVBQUEsQ0FBQXhJLE1BQUEsTUFBQW9FLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFrRSxVQUFBLENBQUFwRSxDQUFBLE9BQUFFLENBQUEsQ0FBQWdFLFVBQUEsS0FBQWpFLENBQUEsY0FBQXlGLFFBQUEsQ0FBQXhGLENBQUEsQ0FBQW9FLFVBQUEsRUFBQXBFLENBQUEsQ0FBQWlFLFFBQUEsR0FBQUUsYUFBQSxDQUFBbkUsQ0FBQSxHQUFBK0IsQ0FBQSx5QkFBQTJELE9BQUEzRixDQUFBLGFBQUFELENBQUEsUUFBQW9FLFVBQUEsQ0FBQXhJLE1BQUEsTUFBQW9FLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFrRSxVQUFBLENBQUFwRSxDQUFBLE9BQUFFLENBQUEsQ0FBQThELE1BQUEsS0FBQS9ELENBQUEsUUFBQUcsQ0FBQSxHQUFBRixDQUFBLENBQUFvRSxVQUFBLGtCQUFBbEUsQ0FBQSxDQUFBc0IsSUFBQSxRQUFBcEIsQ0FBQSxHQUFBRixDQUFBLENBQUF1QixHQUFBLEVBQUEwQyxhQUFBLENBQUFuRSxDQUFBLFlBQUFJLENBQUEsWUFBQTRDLEtBQUEsOEJBQUEyQyxhQUFBLFdBQUFBLGNBQUE3RixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxnQkFBQWlELFFBQUEsS0FBQTFDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQXhDLENBQUEsR0FBQTRELFVBQUEsRUFBQTFELENBQUEsRUFBQTRELE9BQUEsRUFBQTFELENBQUEsb0JBQUFnRCxNQUFBLFVBQUF6QixHQUFBLEdBQUExQixDQUFBLEdBQUFnQyxDQUFBLE9BQUFqQyxDQUFBO0FBQUEsU0FBQThGLDBCQUFBQSxDQUFBQyxHQUFBLEVBQUFqRCxPQUFBLEVBQUFrRCxNQUFBLEVBQUFDLEtBQUEsRUFBQUMsTUFBQSxFQUFBbEgsR0FBQSxFQUFBMkMsR0FBQSxjQUFBd0UsSUFBQSxHQUFBSixHQUFBLENBQUEvRyxHQUFBLEVBQUEyQyxHQUFBLE9BQUFoRixLQUFBLEdBQUF3SixJQUFBLENBQUF4SixLQUFBLFdBQUF5SixLQUFBLElBQUFKLE1BQUEsQ0FBQUksS0FBQSxpQkFBQUQsSUFBQSxDQUFBaEQsSUFBQSxJQUFBTCxPQUFBLENBQUFuRyxLQUFBLFlBQUFzSSxPQUFBLENBQUFuQyxPQUFBLENBQUFuRyxLQUFBLEVBQUFxRyxJQUFBLENBQUFpRCxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBRyx3QkFBQUEsQ0FBQUMsRUFBQSw2QkFBQUMsSUFBQSxTQUFBQyxJQUFBLEdBQUE3SyxTQUFBLGFBQUFzSixPQUFBLFdBQUFuQyxPQUFBLEVBQUFrRCxNQUFBLFFBQUFELEdBQUEsR0FBQU8sRUFBQSxDQUFBdEssS0FBQSxDQUFBdUssSUFBQSxFQUFBQyxJQUFBLFlBQUFQLE1BQUF0SixLQUFBLElBQUFtSiwwQkFBQSxDQUFBQyxHQUFBLEVBQUFqRCxPQUFBLEVBQUFrRCxNQUFBLEVBQUFDLEtBQUEsRUFBQUMsTUFBQSxVQUFBdkosS0FBQSxjQUFBdUosT0FBQU8sR0FBQSxJQUFBWCwwQkFBQSxDQUFBQyxHQUFBLEVBQUFqRCxPQUFBLEVBQUFrRCxNQUFBLEVBQUFDLEtBQUEsRUFBQUMsTUFBQSxXQUFBTyxHQUFBLEtBQUFSLEtBQUEsQ0FBQVMsU0FBQTtBQUQ0RDtBQUNpQjtBQUNmO0FBRTlELElBQU03SCxlQUFPLEdBQUcsSUFBSUgsYUFBYSxDQUFDLEdBQUcsQ0FBQztBQUFDLFNBRXhCK0ssSUFBSUEsQ0FBQTdDLEVBQUE7RUFBQSxPQUFBeUQsS0FBQSxDQUFBck8sS0FBQSxPQUFBTCxTQUFBO0FBQUE7QUFBQSxTQUFBME8sTUFBQTtFQUFBQSxLQUFBLEdBQUFoRSx3QkFBQSxlQUFBdEcsMEJBQUEsR0FBQTZFLElBQUEsQ0FBbkIsU0FBQWtDLFFBQW9CNUgsT0FBTztJQUFBLElBQUFvTCxLQUFBLEVBQUFWLFVBQUEsRUFBQVcsS0FBQTtJQUFBLE9BQUF4SywwQkFBQSxHQUFBcUIsSUFBQSxVQUFBNkYsU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUE5QixJQUFBLEdBQUE4QixRQUFBLENBQUFyRCxJQUFBO1FBQUE7VUFDakJ5RyxLQUFLLEdBQUduTyxRQUFRLENBQUM0TixjQUFjLENBQUMseUJBQXlCLENBQUM7VUFBQTdDLFFBQUEsQ0FBQXJELElBQUE7VUFBQSxPQUN2QzhDLGFBQWEsQ0FBQ3pILE9BQU8sQ0FBQztRQUFBO1VBQXpDMEssVUFBVSxHQUFBMUMsUUFBQSxDQUFBM0QsSUFBQTtVQUFBMkQsUUFBQSxDQUFBckQsSUFBQTtVQUFBLE9BQ0krRCxZQUFZLENBQUMxSSxPQUFPLENBQUM7UUFBQTtVQUFuQ3FMLEtBQUssR0FBQXJELFFBQUEsQ0FBQTNELElBQUE7VUFFWDFFLGVBQU8sQ0FBQ0ksTUFBTSxDQUFDQyxPQUFPLENBQUM7VUFDdkJvTCxLQUFLLENBQUMzTixLQUFLLEdBQUd1QyxPQUFPO1VBRXJCeUssaUJBQWlCLENBQUNDLFVBQVUsRUFBRVcsS0FBSyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFyRCxRQUFBLENBQUEzQixJQUFBO01BQUE7SUFBQSxHQUFBdUIsT0FBQTtFQUFBLENBQ3hDO0VBQUEsT0FBQXVELEtBQUEsQ0FBQXJPLEtBQUEsT0FBQUwsU0FBQTtBQUFBO0FBQUEsU0FFYzZPLFdBQVdBLENBQUEzQyxHQUFBO0VBQUEsT0FBQTRDLFlBQUEsQ0FBQXpPLEtBQUEsT0FBQUwsU0FBQTtBQUFBO0FBQUEsU0FBQThPLGFBQUE7RUFBQUEsWUFBQSxHQUFBcEUsd0JBQUEsZUFBQXRHLDBCQUFBLEdBQUE2RSxJQUFBLENBQTFCLFNBQUFtRCxTQUEyQmpKLEtBQUs7SUFBQSxJQUFBd0wsS0FBQSxFQUFBSSxRQUFBLEVBQUFkLFVBQUEsRUFBQVcsS0FBQTtJQUFBLE9BQUF4SywwQkFBQSxHQUFBcUIsSUFBQSxVQUFBNEcsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUE3QyxJQUFBLEdBQUE2QyxTQUFBLENBQUFwRSxJQUFBO1FBQUE7VUFDdEJ5RyxLQUFLLEdBQUduTyxRQUFRLENBQUM0TixjQUFjLENBQUMseUJBQXlCLENBQUM7VUFDMURXLFFBQVEsR0FBRzdMLGVBQU8sQ0FBQ1UsU0FBUyxDQUFDVCxLQUFLLENBQUM7VUFBQW1KLFNBQUEsQ0FBQXBFLElBQUE7VUFBQSxPQUNoQjhDLGFBQWEsQ0FBQytELFFBQVEsQ0FBQztRQUFBO1VBQTFDZCxVQUFVLEdBQUEzQixTQUFBLENBQUExRSxJQUFBO1VBQUEwRSxTQUFBLENBQUFwRSxJQUFBO1VBQUEsT0FDSStELFlBQVksQ0FBQzhDLFFBQVEsQ0FBQztRQUFBO1VBQXBDSCxLQUFLLEdBQUF0QyxTQUFBLENBQUExRSxJQUFBO1VBRVgrRyxLQUFLLENBQUMzTixLQUFLLEdBQUcrTixRQUFRO1VBRXRCZixpQkFBaUIsQ0FBQ0MsVUFBVSxFQUFFVyxLQUFLLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQXRDLFNBQUEsQ0FBQTFDLElBQUE7TUFBQTtJQUFBLEdBQUF3QyxRQUFBO0VBQUEsQ0FDeEM7RUFBQSxPQUFBMEMsWUFBQSxDQUFBek8sS0FBQSxPQUFBTCxTQUFBO0FBQUE7QUFFRCxTQUFTMEQsTUFBTUEsQ0FBQSxFQUFHO0VBQ2RtTCxXQUFXLENBQUMzTCxlQUFPLENBQUNhLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUMzQztBQUVBLFNBQVNKLFNBQVNBLENBQUEsRUFBRztFQUNqQmtMLFdBQVcsQ0FBQzNMLGVBQU8sQ0FBQ1ksWUFBWSxDQUFDLENBQUMsQ0FBQztBQUN2Qzs7Ozs7O0FDakNBLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXlHO0FBQ3pHO0FBQ0E7O0FBRUEsSUFBSSxxQkFBTzs7QUFFWCxxQkFBTyxxQkFBcUIsNkJBQW1CO0FBQy9DLHFCQUFPLGlCQUFpQiwwQ0FBYTs7QUFFckMsTUFBTSxxQkFBTyxVQUFVLCtCQUFhO0FBQ3BDO0FBQ0EscUJBQU8sVUFBVSx1QkFBTTtBQUN2QixxQkFBTyxzQkFBc0IsOEJBQWtCOztBQUUvQyxJQUFJLG9CQUFNLEdBQUcsa0NBQUcsQ0FBQyw0QkFBTyxFQUFFLHFCQUFPOzs7O0FBSTBDO0FBQzNFLE9BQU8sK0RBQWUsNEJBQU8sSUFBSSw0QkFBTyxVQUFVLDRCQUFPLG1CQUFtQixFQUFDOzs7Ozs7QUN6QjdFLE1BQXdHO0FBQ3hHLE1BQThGO0FBQzlGLE1BQXFHO0FBQ3JHLE1BQXdIO0FBQ3hILE1BQWlIO0FBQ2pILE1BQWlIO0FBQ2pILE1BQTRHO0FBQzVHO0FBQ0E7O0FBRUEsSUFBSSxZQUFPOztBQUVYLFlBQU8scUJBQXFCLDZCQUFtQjtBQUMvQyxZQUFPLGlCQUFpQiwwQ0FBYTs7QUFFckMsTUFBTSxZQUFPLFVBQVUsK0JBQWE7QUFDcEM7QUFDQSxZQUFPLFVBQVUsdUJBQU07QUFDdkIsWUFBTyxzQkFBc0IsOEJBQWtCOztBQUUvQyxJQUFJLFdBQU0sR0FBRyxrQ0FBRyxDQUFDLG1CQUFPLEVBQUUsWUFBTzs7OztBQUk2QztBQUM5RSxPQUFPLGtEQUFlLG1CQUFPLElBQUksbUJBQU8sVUFBVSxtQkFBTyxtQkFBbUIsRUFBQzs7OztBQzFCeEQ7QUFFTixTQUFTa0wsU0FBSUEsQ0FBQ2xQLEtBQUssRUFBRTtFQUNoQyxPQUNJRixrQkFBQTtJQUNJK00sR0FBRyxFQUFFN00sS0FBSyxDQUFDNk0sR0FBSTtJQUNmN0osU0FBUyxFQUFFLE1BQU0sSUFBSWhELEtBQUssQ0FBQ2dELFNBQVMsR0FBRyxHQUFHLEdBQUdoRCxLQUFLLENBQUNnRCxTQUFTLEdBQUcsRUFBRSxDQUFFO0lBQ25FbkIsS0FBSyxFQUFFO01BQ0hvTCxLQUFLLEVBQUVqTixLQUFLLENBQUNpTixLQUFLO01BQ2xCQyxNQUFNLEVBQUVsTixLQUFLLENBQUNrTixNQUFNO01BQ3BCaUMsTUFBTSxFQUFFblAsS0FBSyxDQUFDb1AsTUFBTSxHQUFHLGlCQUFpQixHQUFHO0lBQy9DLENBQUU7SUFDRkMsT0FBTyxFQUFFclAsS0FBSyxDQUFDcVA7RUFBUSxDQUMxQixDQUFDO0FBRVY7OztBQ2ZxRDtBQUNNO0FBRTVDLFNBQVNDLFFBQVFBLENBQUN0UCxLQUFLLEVBQUU7RUFDcEMsT0FDSUYsc0JBQUE7SUFBS2tELFNBQVMsRUFBQztFQUFVLEdBQ3JCbEQsc0JBQUE7SUFDSWtELFNBQVMsRUFBQyxzQ0FBc0M7SUFDaERuQixLQUFLLEVBQUU7TUFBRW9MLEtBQUssRUFBRSxNQUFNO01BQUVDLE1BQU0sRUFBRTtJQUFPO0VBQUUsQ0FDdkMsQ0FBQyxFQUNQcE4sc0JBQUEsQ0FBQ29QLFNBQUk7SUFDRGxNLFNBQVMsRUFBQyxzQ0FBc0M7SUFDaEQ2SixHQUFHLEVBQUVqSyxXQUFXLEdBQUcsdUJBQXdCO0lBQzNDeU0sT0FBTyxFQUFFclAsS0FBSyxDQUFDcVA7RUFBUSxDQUMxQixDQUNBLENBQUM7QUFFZDs7QUNqQmUsU0FBU0UsVUFBVUEsQ0FBQzdDLEVBQUUsRUFBRTtFQUNuQyxJQUFNOEMsSUFBSSxHQUFHOU8sUUFBUSxDQUFDNE4sY0FBYyxDQUFDNUIsRUFBRSxDQUFDO0VBQ3hDLElBQU0rQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ3JPLE1BQU0sQ0FBQ3NPLGdCQUFnQixDQUFDSCxJQUFJLENBQUMsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDbkYsSUFBTUMsUUFBUSxHQUFHblAsUUFBUSxDQUFDb1Asc0JBQXNCLENBQUMsTUFBTSxDQUFDO0VBQ3hELElBQUlDLFFBQVE7RUFDWixJQUFJQyxVQUFVO0VBQ2QsS0FBSyxJQUFJakwsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHOEssUUFBUSxDQUFDMVAsTUFBTSxFQUFFNEUsQ0FBQyxFQUFFLEVBQUU7SUFDdEMsSUFBSThLLFFBQVEsQ0FBQzlLLENBQUMsQ0FBQyxDQUFDMkgsRUFBRSxLQUFLQSxFQUFFLEVBQUU7TUFDdkJxRCxRQUFRLEdBQUdGLFFBQVEsQ0FBQzlLLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDMUJpTCxVQUFVLEdBQUd0UCxRQUFRLENBQUNvUCxzQkFBc0IsdUJBQXVCLENBQUMsQ0FBQy9LLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDM0U7SUFDSjtFQUNKO0VBQ0EsSUFBTWtMLGFBQWEsR0FBR1AsUUFBUSxDQUFDck8sTUFBTSxDQUFDc08sZ0JBQWdCLENBQUNJLFFBQVEsQ0FBQyxDQUFDSCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUMzRkcsUUFBUSxDQUFDbE8sS0FBSyxDQUFDb0wsS0FBSyxHQUFHZ0QsYUFBYSxHQUFHUixTQUFTLEdBQUcsRUFBRSxHQUFHLElBQUk7RUFFNUQsSUFBSU8sVUFBVSxFQUFFQSxVQUFVLENBQUNFLE1BQU0sQ0FBQyxDQUFDO0VBQ25DLElBQUlWLElBQUksRUFBRUEsSUFBSSxDQUFDVSxNQUFNLENBQUMsQ0FBQztBQUMzQjs7O0FDbEJtQztBQUNJO0FBRXhCLFNBQVNDLElBQUlBLENBQUNuUSxLQUFLLEVBQWU7RUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFWQyxRQUFRLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7SUFBUkYsUUFBUSxDQUFBRSxJQUFBLFFBQUFKLFNBQUEsQ0FBQUksSUFBQTtFQUFBO0VBQzNDLE9BQ0lSLGtCQUFBO0lBQ0k0TSxFQUFFLEVBQUUxTSxLQUFLLENBQUMwTSxFQUFHO0lBQ2IxSixTQUFTLEVBQUMsNEJBQTRCO0lBQ3RDbkIsS0FBSyxFQUFFO01BQUVvTCxLQUFLLEVBQUVqTixLQUFLLENBQUNpTjtJQUFNLENBQUU7SUFDOUJtRCxhQUFhLEVBQUUsU0FBQUEsY0FBQzdMLENBQUM7TUFBQSxPQUFLQSxDQUFDLENBQUM4TCxjQUFjLENBQUMsQ0FBQztJQUFBO0VBQUMsR0FFeENyUSxLQUFLLENBQUNzUSxVQUFVLElBQUl4USxrQkFBQSxDQUFDd1AsUUFBUTtJQUFDRCxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1FLFVBQVUsQ0FBQ3ZQLEtBQUssQ0FBQzBNLEVBQUUsQ0FBQztJQUFBO0VBQUMsQ0FBRSxDQUFDLEVBQ3JFdE0sUUFDQSxDQUFDO0FBRWQ7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU21RLFlBQVlBLENBQUNyUCxLQUFLLEVBQUVzUCxJQUFJLEVBQWU7RUFBQSxJQUFiQyxLQUFLLEdBQUF2USxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBK0ssU0FBQSxHQUFBL0ssU0FBQSxNQUFHLEdBQUc7RUFDMUMsSUFBSXdRLGFBQWEsR0FBR0YsSUFBSSxHQUFHdFAsS0FBSztFQUNoQyxJQUFJeVAsZUFBZSxHQUFHelAsS0FBSztFQUUzQixJQUFJd1AsYUFBYSxHQUFHRCxLQUFLLEVBQUU7SUFDdkIsSUFBTUcsVUFBVSxHQUFHMVAsS0FBSyxHQUFHMlAsSUFBSSxDQUFDQyxHQUFHLENBQUNMLEtBQUssR0FBR0QsSUFBSSxDQUFDO0lBQ2pERSxhQUFhLEdBQUdELEtBQUs7SUFDckJFLGVBQWUsR0FBR3pQLEtBQUssR0FBRzBQLFVBQVU7RUFDeEM7RUFFQSxPQUFPO0lBQUVHLENBQUMsRUFBRUosZUFBZTtJQUFFbkssQ0FBQyxFQUFFa0s7RUFBYyxDQUFDO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTTSxLQUFLQSxDQUFDOVAsS0FBSyxFQUFFK1AsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDNUIsT0FBT0wsSUFBSSxDQUFDSSxHQUFHLENBQUNKLElBQUksQ0FBQ0ssR0FBRyxDQUFDaFEsS0FBSyxFQUFFK1AsR0FBRyxDQUFDLEVBQUVDLEdBQUcsQ0FBQztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLGtCQUFrQkEsQ0FBQ2pRLEtBQUssRUFBRWtRLEtBQUssRUFBRTtFQUN0QyxJQUFJQSxLQUFLLENBQUNqUixNQUFNLElBQUksQ0FBQyxFQUFFLE9BQU9pUixLQUFLO0VBQ25DLElBQU1DLEtBQUssR0FBR25RLEtBQUssR0FBR2tRLEtBQUssQ0FBQ2pSLE1BQU07RUFDbEMsS0FBSyxJQUFJNEUsQ0FBQyxHQUFHcU0sS0FBSyxDQUFDalIsTUFBTSxHQUFHLENBQUMsRUFBRTRFLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO0lBQ3hDLElBQU11TSxRQUFRLEdBQUdGLEtBQUssQ0FBQ3JNLENBQUMsQ0FBQyxHQUFHc00sS0FBSztJQUNqQ0QsS0FBSyxDQUFDck0sQ0FBQyxDQUFDLEdBQUc4TCxJQUFJLENBQUNLLEdBQUcsQ0FBQ0ksUUFBUSxFQUFFLEdBQUcsQ0FBQztJQUNsQ3BRLEtBQUssSUFBSWtRLEtBQUssQ0FBQ3JNLENBQUMsQ0FBQyxHQUFHdU0sUUFBUTtFQUNoQztFQUNBLE9BQU9GLEtBQUs7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNHLFdBQVdBLENBQUNDLElBQUksRUFBRUMsSUFBSSxFQUFlO0VBQUEsSUFBYkMsT0FBTyxHQUFBeFIsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQStLLFNBQUEsR0FBQS9LLFNBQUEsTUFBRyxDQUFDO0VBQ3hDLE9BQU8yUSxJQUFJLENBQUNDLEdBQUcsQ0FBQ1UsSUFBSSxHQUFHQyxJQUFJLENBQUMsR0FBR0MsT0FBTztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLHNCQUFzQkEsQ0FBQ3pRLEtBQUssRUFBRTBRLEdBQUcsRUFBRTtFQUN4QyxJQUFNelIsTUFBTSxHQUFHeVIsR0FBRyxDQUFDelIsTUFBTTtFQUN6QixJQUFJQSxNQUFNLEtBQUssQ0FBQyxFQUFFLE9BQU95UixHQUFHO0VBQzVCLElBQU1DLFVBQVUsR0FBRzNRLEtBQUssR0FBR2YsTUFBTTtFQUNqQyxJQUFNMlIsV0FBVyxHQUFHRixHQUFHLENBQUNqRCxHQUFHLENBQUMsVUFBQ29ELEdBQUc7SUFBQSxPQUFLQSxHQUFHLEdBQUdGLFVBQVU7RUFBQSxFQUFDO0VBQ3RELE9BQU9DLFdBQVc7QUFDdEI7Ozs7QUM3RTBCO0FBQ2tDOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNFLE9BQU9BLENBQUNDLFNBQVMsRUFBRUMsT0FBTyxFQUFxQjtFQUFBLElBQW5CNUIsVUFBVSxHQUFBcFEsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQStLLFNBQUEsR0FBQS9LLFNBQUEsTUFBRyxJQUFJO0VBQ2pFLElBQU1pUyxnQkFBZ0IsR0FBR3pSLFFBQVEsQ0FBQ29QLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM1RSxJQUFNc0MsVUFBVSxHQUFHMVIsUUFBUSxDQUFDb1Asc0JBQXNCLENBQUMsTUFBTSxDQUFDO0VBQzFELElBQU11QyxnQkFBZ0IsR0FBR3ZTLHFCQUFBO0lBQUtrRCxTQUFTLEVBQUM7RUFBc0IsQ0FBTSxDQUFDO0VBQ3JFLElBQU1zUCxXQUFXLEdBQUc1UixRQUFRLENBQUNvTCxJQUFJLENBQUN5RyxXQUFXO0VBQzdDLElBQUlDLFlBQVksR0FBSTlDLFFBQVEsQ0FBQ3VDLFNBQVMsQ0FBQyxHQUFHSyxXQUFXLEdBQUksR0FBRztFQUM1RCxJQUFJRixVQUFVLENBQUNqUyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ3ZCLElBQU1zUyxVQUFVLEdBQUdMLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDalMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwRCxJQUFNdVMsZUFBZSxHQUFHaEQsUUFBUSxDQUFDck8sTUFBTSxDQUFDc08sZ0JBQWdCLENBQUM4QyxVQUFVLENBQUMsQ0FBQzdDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9GLElBQUk4QyxlQUFlLEdBQUcsR0FBRyxFQUFFO0lBQzNCLElBQUFDLGFBQUEsR0FBaUJwQyxZQUFZLENBQUNpQyxZQUFZLEVBQUVFLGVBQWUsQ0FBQztNQUFwRDNCLENBQUMsR0FBQTRCLGFBQUEsQ0FBRDVCLENBQUM7TUFBRXZLLENBQUMsR0FBQW1NLGFBQUEsQ0FBRG5NLENBQUM7SUFDWmdNLFlBQVksR0FBR3pCLENBQUM7SUFDaEIwQixVQUFVLENBQUM1USxLQUFLLENBQUNvTCxLQUFLLEdBQUd6RyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUk7RUFDekM7RUFDQSxJQUFNa0csRUFBRSxjQUFBbE0sTUFBQSxDQUFjNFIsVUFBVSxDQUFDalMsTUFBTSxHQUFHLENBQUMsQ0FBRTtFQUM3QyxJQUFNeVMsWUFBWSxHQUFHOVMscUJBQUEsQ0FBQ3FRLElBQUk7SUFBQ3pELEVBQUUsRUFBRUEsRUFBRztJQUFDTyxLQUFLLEVBQUV1RixZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUs7SUFBQ2xDLFVBQVUsRUFBRUE7RUFBVyxDQUFPLENBQUM7RUFFbEcsSUFBSThCLFVBQVUsQ0FBQ2pTLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDdkJnUyxnQkFBZ0IsQ0FBQzFELE1BQU0sQ0FBQzRELGdCQUFnQixDQUFDO0VBQzdDO0VBQ0FPLFlBQVksQ0FBQ25FLE1BQU0sQ0FBQ3lELE9BQU8sQ0FBQztFQUM1QkMsZ0JBQWdCLENBQUMxRCxNQUFNLENBQUNtRSxZQUFZLENBQUM7RUFFckNQLGdCQUFnQixDQUFDL1EsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFlBQU07SUFDakQsSUFBTXVPLFFBQVEsR0FBR25QLFFBQVEsQ0FBQ29QLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztJQUN4RCxJQUFJK0MsZ0JBQWdCLEdBQUduUyxRQUFRLENBQUM0TixjQUFjLFlBQUE5TixNQUFBLENBQVk0UixVQUFVLENBQUNqUyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUM7SUFDbEYsSUFBSTJTLGFBQWEsR0FBR3BTLFFBQVEsQ0FBQzROLGNBQWMsWUFBQTlOLE1BQUEsQ0FBWTRSLFVBQVUsQ0FBQ2pTLE1BQU0sQ0FBRSxDQUFDO0lBQzNFLEtBQUssSUFBSTRFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzhLLFFBQVEsQ0FBQzFQLE1BQU0sRUFBRTRFLENBQUMsRUFBRSxFQUFFO01BQ3RDLElBQUk4SyxRQUFRLENBQUM5SyxDQUFDLENBQUMsQ0FBQzJILEVBQUUsS0FBS0EsRUFBRSxFQUFFO1FBQ3ZCbUcsZ0JBQWdCLEdBQUdoRCxRQUFRLENBQUM5SyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDK04sYUFBYSxHQUFHakQsUUFBUSxDQUFDOUssQ0FBQyxDQUFDO1FBQzNCO01BQ0o7SUFDSjtJQUNBLElBQU1nTyxpQkFBaUIsR0FBR3JELFFBQVEsQ0FDOUJyTyxNQUFNLENBQUNzTyxnQkFBZ0IsQ0FBQ2tELGdCQUFnQixDQUFDLENBQUNqRCxnQkFBZ0IsQ0FBQyxPQUFPLENBQ3RFLENBQUM7SUFDRCxJQUFNb0QsY0FBYyxHQUFHdEQsUUFBUSxDQUFDck8sTUFBTSxDQUFDc08sZ0JBQWdCLENBQUNtRCxhQUFhLENBQUMsQ0FBQ2xELGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWpHLElBQU01RixNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSXpGLENBQUMsRUFBSztNQUNsQixJQUFNME8sU0FBUyxHQUFHMU8sQ0FBQyxDQUFDMk8sT0FBTyxJQUFJTCxnQkFBZ0IsQ0FBQ00sVUFBVSxHQUFHSixpQkFBaUIsQ0FBQztNQUMvRSxJQUFNSyxlQUFlLEdBQUdwQyxLQUFLLENBQ3pCK0IsaUJBQWlCLEdBQUdFLFNBQVMsRUFDN0IsRUFBRSxFQUNGRixpQkFBaUIsR0FBR0MsY0FBYyxHQUFHLEVBQ3pDLENBQUM7TUFDRCxJQUFNSyxZQUFZLEdBQUdyQyxLQUFLLENBQ3RCZ0MsY0FBYyxHQUFHQyxTQUFTLEVBQzFCLEVBQUUsRUFDRkYsaUJBQWlCLEdBQUdDLGNBQWMsR0FBRyxFQUN6QyxDQUFDO01BQ0RILGdCQUFnQixDQUFDaFIsS0FBSyxDQUFDb0wsS0FBSyxHQUFHbUcsZUFBZSxHQUFHLElBQUk7TUFDckROLGFBQWEsQ0FBQ2pSLEtBQUssQ0FBQ29MLEtBQUssR0FBR29HLFlBQVksR0FBRyxJQUFJO0lBQ25ELENBQUM7SUFFRDNTLFFBQVEsQ0FBQ1ksZ0JBQWdCLENBQUMsV0FBVyxFQUFFMEksTUFBTSxDQUFDO0lBQzlDdEosUUFBUSxDQUFDWSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsWUFBTTtNQUN2Q1osUUFBUSxDQUFDNFMsbUJBQW1CLENBQUMsV0FBVyxFQUFFdEosTUFBTSxDQUFDO0lBQ3JELENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOOzs7Ozs7OztJQ3RFTXVKLHdCQUF3QjtFQUFBLFNBQUFBLHlCQUFBO0lBQUFwUSx1Q0FBQSxPQUFBb1Esd0JBQUE7RUFBQTtFQUFBLE9BQUFqUSxvQ0FBQSxDQUFBaVEsd0JBQUE7SUFBQWhRLEdBQUE7SUFBQXJDLEtBQUEsRUFDMUIsU0FBQXNTLGVBQWVDLFFBQVEsRUFBRTtNQUNyQnBTLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUNpRCxDQUFDLEVBQUs7UUFDdEMsSUFBSUEsQ0FBQyxDQUFDbUssSUFBSSxDQUFDZ0YsS0FBSyxJQUFJLGVBQWUsRUFBRTtVQUNqQ0QsUUFBUSxDQUFDbFAsQ0FBQyxDQUFDbUssSUFBSSxDQUFDO1FBQ3BCO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBbkwsR0FBQTtJQUFBckMsS0FBQSxFQUVELFNBQUF5UyxvQkFBb0JGLFFBQVEsRUFBRTtNQUMxQnBTLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUNpRCxDQUFDLEVBQUs7UUFDdEMsSUFBSUEsQ0FBQyxDQUFDbUssSUFBSSxDQUFDZ0YsS0FBSyxJQUFJLHFCQUFxQixFQUFFO1VBQ3ZDRCxRQUFRLENBQUNsUCxDQUFDLENBQUNtSyxJQUFJLENBQUM7UUFDcEI7TUFDSixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFuTCxHQUFBO0lBQUFyQyxLQUFBLEVBRUQsU0FBQTBTLGtCQUFrQkgsUUFBUSxFQUFFO01BQ3hCcFMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQ2lELENBQUMsRUFBSztRQUN0QyxJQUFJQSxDQUFDLENBQUNtSyxJQUFJLENBQUNnRixLQUFLLElBQUksbUJBQW1CLEVBQUU7VUFDckNELFFBQVEsQ0FBQ2xQLENBQUMsQ0FBQ21LLElBQUksQ0FBQztRQUNwQjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQW5MLEdBQUE7SUFBQXJDLEtBQUEsRUFFRCxTQUFBMlMscUJBQXFCSixRQUFRLEVBQUU7TUFDM0JwUyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDaUQsQ0FBQyxFQUFLO1FBQ3RDLElBQUlBLENBQUMsQ0FBQ21LLElBQUksQ0FBQ2dGLEtBQUssSUFBSSxzQkFBc0IsRUFBRTtVQUN4Q0QsUUFBUSxDQUFDbFAsQ0FBQyxDQUFDbUssSUFBSSxDQUFDO1FBQ3BCO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBbkwsR0FBQTtJQUFBckMsS0FBQSxFQUVELFNBQUE0UyxlQUFlTCxRQUFRLEVBQUU7TUFDckJwUyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDaUQsQ0FBQyxFQUFLO1FBQ3RDLElBQUlBLENBQUMsQ0FBQ21LLElBQUksQ0FBQ2dGLEtBQUssSUFBSSxlQUFlLEVBQUU7VUFDakNELFFBQVEsQ0FBQ2xQLENBQUMsQ0FBQ21LLElBQUksQ0FBQztRQUNwQjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQW5MLEdBQUE7SUFBQXJDLEtBQUEsRUFFRCxTQUFBNlMsdUJBQXVCTixRQUFRLEVBQUU7TUFDN0JwUyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDaUQsQ0FBQyxFQUFLO1FBQ3RDLElBQUlBLENBQUMsQ0FBQ21LLElBQUksQ0FBQ2dGLEtBQUssSUFBSSx3QkFBd0IsRUFBRTtVQUMxQ0QsUUFBUSxDQUFDbFAsQ0FBQyxDQUFDbUssSUFBSSxDQUFDO1FBQ3BCO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBbkwsR0FBQTtJQUFBckMsS0FBQSxFQUVELFNBQUE4UyxpQkFBaUJQLFFBQVEsRUFBRTtNQUN2QnBTLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUNpRCxDQUFDLEVBQUs7UUFDdEMsSUFBSUEsQ0FBQyxDQUFDbUssSUFBSSxDQUFDZ0YsS0FBSyxJQUFJLGlCQUFpQixFQUFFO1VBQ25DRCxRQUFRLENBQUNsUCxDQUFDLENBQUNtSyxJQUFJLENBQUM7UUFDcEI7TUFDSixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFuTCxHQUFBO0lBQUFyQyxLQUFBLEVBRUQsU0FBQStTLGFBQWFSLFFBQVEsRUFBRTtNQUNuQnBTLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUNpRCxDQUFDLEVBQUs7UUFDdEMsSUFBSUEsQ0FBQyxDQUFDbUssSUFBSSxDQUFDZ0YsS0FBSyxJQUFJLGFBQWEsRUFBRTtVQUMvQkQsUUFBUSxDQUFDbFAsQ0FBQyxDQUFDbUssSUFBSSxDQUFDO1FBQ3BCO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBbkwsR0FBQTtJQUFBckMsS0FBQSxFQUVELFNBQUFnVCxjQUFjVCxRQUFRLEVBQUU7TUFDcEJwUyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDaUQsQ0FBQyxFQUFLO1FBQ3RDLElBQUlBLENBQUMsQ0FBQ21LLElBQUksQ0FBQ2dGLEtBQUssSUFBSSxjQUFjLEVBQUU7VUFDaENELFFBQVEsQ0FBQ2xQLENBQUMsQ0FBQ21LLElBQUksQ0FBQztRQUNwQjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQUM7QUFBQTtBQUdMLElBQU15RixZQUFZLEdBQUcsSUFBSVosd0JBQXdCLENBQUMsQ0FBQztBQUVuRCx1RUFBZVksWUFBWTs7O0FDNUVOO0FBQ0s7QUFDTTtBQUN1QztBQUNSO0FBRS9ELFNBQVNDLDJCQUFhQSxDQUFDcFUsS0FBSyxFQUFlO0VBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBVkMsUUFBUSxPQUFBQyxLQUFBLENBQUFKLElBQUEsT0FBQUEsSUFBQSxXQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO0lBQVJGLFFBQVEsQ0FBQUUsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7RUFBQTtFQUNyQyxPQUFPUiwyQkFBQTtJQUFLa0QsU0FBUyxFQUFDO0VBQWUsR0FBRTVDLFFBQWMsQ0FBQztBQUMxRDtBQUVBLElBQUlpVSxnQkFBZ0IsR0FBRyxDQUFDO0FBQ3hCLElBQUlDLFdBQVcsR0FBRyxFQUFFO0FBRXBCSCxnQ0FBWSxDQUFDTixvQkFBb0IsQ0FBQyxVQUFDbkYsSUFBSSxFQUFLO0VBQ3hDNkYsY0FBYyxDQUFDN0YsSUFBSSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGeUYsZ0NBQVksQ0FBQ0osc0JBQXNCLENBQUMsVUFBQ3JGLElBQUksRUFBSztFQUMxQzZGLGNBQWMsQ0FBQzdGLElBQUksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRnlGLGdDQUFZLENBQUNSLG1CQUFtQixDQUFDLFVBQUNqRixJQUFJLEVBQUs7RUFDdkM2RixjQUFjLENBQUM3RixJQUFJLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRUZ5RixnQ0FBWSxDQUFDUCxpQkFBaUIsQ0FBQyxZQUFNO0VBQ2pDWSxlQUFlLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRkwsZ0NBQVksQ0FBQ1gsY0FBYyxDQUFDLFVBQUM5RSxJQUFJLEVBQUs7RUFDbEMrRixlQUFlLENBQUMvRixJQUFJLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUZ5RixnQ0FBWSxDQUFDTCxjQUFjLENBQUMsVUFBQ3BGLElBQUksRUFBSztFQUNsQytGLGVBQWUsQ0FBQy9GLElBQUksQ0FBQztFQUNyQjhGLGVBQWUsQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGTCxnQ0FBWSxDQUFDSCxnQkFBZ0IsQ0FBQyxVQUFDdEYsSUFBSSxFQUFLO0VBQ3BDK0YsZUFBZSxDQUFDL0YsSUFBSSxDQUFDO0VBQ3JCOEYsZUFBZSxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRUYsU0FBU0EsZUFBZUEsQ0FBQSxFQUFHO0VBQ3ZCSCxnQkFBZ0IsR0FBRyxDQUFDO0VBQ3BCQyxXQUFXLEdBQUcsRUFBRTtBQUNwQjtBQUVBLFNBQVNDLGNBQWNBLENBQUM3RixJQUFJLEVBQUU7RUFDMUIyRixnQkFBZ0IsR0FBRzNGLElBQUksQ0FBQ2dHLFVBQVUsQ0FBQ3pILEtBQUs7RUFDeEMsSUFBTTRDLFFBQVEsR0FBR25QLFFBQVEsQ0FBQ29QLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztFQUN4RCxLQUFLLElBQUkvSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc4SyxRQUFRLENBQUMxUCxNQUFNLEVBQUU0RSxDQUFDLEVBQUUsRUFBRTtJQUN0Q3VQLFdBQVcsQ0FBQzVRLElBQUksQ0FBQ2dNLFFBQVEsQ0FBQ3JPLE1BQU0sQ0FBQ3NPLGdCQUFnQixDQUFDRSxRQUFRLENBQUM5SyxDQUFDLENBQUMsQ0FBQyxDQUFDNkssZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUM5RjtBQUNKO0FBRUEsU0FBUzZFLGVBQWVBLENBQUMvRixJQUFJLEVBQUU7RUFDM0IsSUFBTTRELFdBQVcsR0FBRzVELElBQUksQ0FBQ2dHLFVBQVUsQ0FBQ3pILEtBQUs7RUFDekMsSUFBTTRDLFFBQVEsR0FBR25QLFFBQVEsQ0FBQ29QLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztFQUN4RCxJQUFNNkUsU0FBUyxHQUFHLEVBQUU7RUFDcEIsS0FBSyxJQUFJNVAsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHOEssUUFBUSxDQUFDMVAsTUFBTSxFQUFFNEUsQ0FBQyxFQUFFLEVBQUU7SUFDdEMsSUFBTTZQLFlBQVksR0FBR04sV0FBVyxDQUFDdlAsQ0FBQyxDQUFDO0lBQ25DLElBQU04UCxnQkFBZ0IsR0FBR0QsWUFBWSxHQUFHUCxnQkFBZ0I7SUFDeEQsSUFBTVMsUUFBUSxHQUFHeEMsV0FBVyxHQUFHdUMsZ0JBQWdCO0lBQy9DRixTQUFTLENBQUNqUixJQUFJLENBQUNvUixRQUFRLENBQUM7RUFDNUI7RUFFQSxJQUFNQyxJQUFJLEdBQUd6QyxXQUFXLEdBQUdxQyxTQUFTLENBQUNLLE1BQU0sQ0FBQyxVQUFDL1AsQ0FBQyxFQUFFZ1EsQ0FBQztJQUFBLE9BQUtoUSxDQUFDLEdBQUdnUSxDQUFDO0VBQUEsR0FBRSxDQUFDLENBQUM7RUFDL0QsSUFBTUMsY0FBYyxHQUFHdkQsc0JBQXNCLENBQUNvRCxJQUFJLEVBQUVKLFNBQVMsQ0FBQztFQUU5RCxLQUFLLElBQUk1UCxFQUFDLEdBQUcsQ0FBQyxFQUFFQSxFQUFDLEdBQUc4SyxRQUFRLENBQUMxUCxNQUFNLEVBQUU0RSxFQUFDLEVBQUUsRUFBRTtJQUN0QzhLLFFBQVEsQ0FBQzlLLEVBQUMsQ0FBQyxDQUFDbEQsS0FBSyxDQUFDb0wsS0FBSyxHQUFHaUksY0FBYyxDQUFDblEsRUFBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUk7SUFDdEQsSUFBSUEsRUFBQyxJQUFJOEssUUFBUSxDQUFDMVAsTUFBTSxHQUFHLENBQUMsRUFBRTBQLFFBQVEsQ0FBQzlLLEVBQUMsQ0FBQyxDQUFDbEQsS0FBSyxDQUFDb0wsS0FBSyxHQUFHaUksY0FBYyxDQUFDblEsRUFBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJQSxFQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSTtFQUNsRztBQUNKOzs7O0FDMUVlLFNBQVNvUSxTQUFTQSxDQUFDblYsS0FBSyxFQUFlO0VBQUEsSUFBQW9WLFVBQUE7RUFBQSxTQUFBblYsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBVkMsUUFBUSxPQUFBQyxLQUFBLENBQUFKLElBQUEsT0FBQUEsSUFBQSxXQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO0lBQVJGLFFBQVEsQ0FBQUUsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7RUFBQTtFQUNoRCxPQUNJUix1QkFBQTtJQUFLa0QsU0FBUyxFQUFDLFdBQVc7SUFBQ25CLEtBQUssRUFBRTtNQUFFMkwsR0FBRyxHQUFBNEgsVUFBQSxHQUFFcFYsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUV3TixHQUFHLGNBQUE0SCxVQUFBLGNBQUFBLFVBQUEsR0FBSTtJQUFNO0VBQUUsR0FDM0R0Vix1QkFBQTtJQUFLa0QsU0FBUyxFQUFDLDBCQUEwQjtJQUFDbkIsS0FBSyxFQUFDO0VBQWlDLENBQU0sQ0FBQyxFQUN2RnpCLFFBQ0EsQ0FBQztBQUVkOzs7OztBQ05BLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXlHO0FBQ3pHO0FBQ0E7O0FBRUEsSUFBSSwwQkFBTzs7QUFFWCwwQkFBTyxxQkFBcUIsNkJBQW1CO0FBQy9DLDBCQUFPLGlCQUFpQiwwQ0FBYTs7QUFFckMsTUFBTSwwQkFBTyxVQUFVLCtCQUFhO0FBQ3BDO0FBQ0EsMEJBQU8sVUFBVSx1QkFBTTtBQUN2QiwwQkFBTyxzQkFBc0IsOEJBQWtCOztBQUUvQyxJQUFJLHlCQUFNLEdBQUcsa0NBQUcsQ0FBQyxpQ0FBTyxFQUFFLDBCQUFPOzs7O0FBSTBDO0FBQzNFLE9BQU8sb0VBQWUsaUNBQU8sSUFBSSxpQ0FBTyxVQUFVLGlDQUFPLG1CQUFtQixFQUFDOzs7O0FDMUJ6QztBQUNmO0FBRXJCLFNBQVNpVixxQ0FBa0JBLENBQUNyVixLQUFLLEVBQWU7RUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFWQyxRQUFRLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7SUFBUkYsUUFBUSxDQUFBRSxJQUFBLFFBQUFKLFNBQUEsQ0FBQUksSUFBQTtFQUFBO0VBQzFDLE9BQ0lSLGdDQUFBO0lBQUtrRCxTQUFTLEVBQUM7RUFBdUIsR0FDakM1QyxRQUFRLENBQUN1TyxHQUFHLENBQUMsVUFBQzFNLEtBQUssRUFBSztJQUNyQixPQUFPbkMsZ0NBQUEsY0FBTW1DLEtBQVcsQ0FBQztFQUM3QixDQUFDLENBQ0EsQ0FBQztBQUVkOzs7Ozs7QUNWQSxNQUF3RztBQUN4RyxNQUE4RjtBQUM5RixNQUFxRztBQUNyRyxNQUF3SDtBQUN4SCxNQUFpSDtBQUNqSCxNQUFpSDtBQUNqSCxNQUE0RztBQUM1RztBQUNBOztBQUVBLElBQUksY0FBTzs7QUFFWCxjQUFPLHFCQUFxQiw2QkFBbUI7QUFDL0MsY0FBTyxpQkFBaUIsMENBQWE7O0FBRXJDLE1BQU0sY0FBTyxVQUFVLCtCQUFhO0FBQ3BDO0FBQ0EsY0FBTyxVQUFVLHVCQUFNO0FBQ3ZCLGNBQU8sc0JBQXNCLDhCQUFrQjs7QUFFL0MsSUFBSSxhQUFNLEdBQUcsa0NBQUcsQ0FBQyxxQkFBTyxFQUFFLGNBQU87Ozs7QUFJNkM7QUFDOUUsT0FBTyxvREFBZSxxQkFBTyxJQUFJLHFCQUFPLFVBQVUscUJBQU8sbUJBQW1CLEVBQUM7Ozs7QUMxQnhEO0FBRU4sU0FBU3FULGFBQU1BLENBQUN0VixLQUFLLEVBQUU7RUFDbEMsT0FDSUYsb0JBQUE7SUFBUWtELFNBQVMsRUFBQyxRQUFRO0lBQUNsQixRQUFRLEVBQUU5QixLQUFLLENBQUM4QixRQUFTO0lBQUN1TixPQUFPLEVBQUVyUCxLQUFLLENBQUNxUDtFQUFRLEdBQ3ZFclAsS0FBSyxDQUFDdVYsSUFDSCxDQUFDO0FBRWpCOzs7OztBQ1BBLE1BQXdHO0FBQ3hHLE1BQThGO0FBQzlGLE1BQXFHO0FBQ3JHLE1BQXdIO0FBQ3hILE1BQWlIO0FBQ2pILE1BQWlIO0FBQ2pILE1BQTRHO0FBQzVHO0FBQ0E7O0FBRUEsSUFBSSxrQkFBTzs7QUFFWCxrQkFBTyxxQkFBcUIsNkJBQW1CO0FBQy9DLGtCQUFPLGlCQUFpQiwwQ0FBYTs7QUFFckMsTUFBTSxrQkFBTyxVQUFVLCtCQUFhO0FBQ3BDO0FBQ0Esa0JBQU8sVUFBVSx1QkFBTTtBQUN2QixrQkFBTyxzQkFBc0IsOEJBQWtCOztBQUUvQyxJQUFJLGlCQUFNLEdBQUcsa0NBQUcsQ0FBQyx5QkFBTyxFQUFFLGtCQUFPOzs7O0FBSTZDO0FBQzlFLE9BQU8sd0RBQWUseUJBQU8sSUFBSSx5QkFBTyxVQUFVLHlCQUFPLG1CQUFtQixFQUFDOzs7O0FDMUJ4RDtBQUVOLFNBQVNDLHFCQUFVQSxDQUFDeFYsS0FBSyxFQUFFO0VBQ3RDLE9BQ0lGLHdCQUFBO0lBQVFrRCxTQUFTLEVBQUMsWUFBWTtJQUFDbEIsUUFBUSxFQUFFOUIsS0FBSyxDQUFDOEIsUUFBUztJQUFDdU4sT0FBTyxFQUFFclAsS0FBSyxDQUFDcVA7RUFBUSxHQUM1RXZQLHdCQUFBO0lBQ0krTSxHQUFHLEVBQUU3TSxLQUFLLENBQUM2TSxHQUFJO0lBQ2Y3SixTQUFTLEVBQUMsa0JBQWtCO0lBQzVCbkIsS0FBSyxFQUFFO01BQUVzTixNQUFNLEVBQUVuUCxLQUFLLENBQUNvUCxNQUFNLEdBQUcsaUJBQWlCLEdBQUc7SUFBTztFQUFFLENBQ2hFLENBQUMsRUFDRHBQLEtBQUssQ0FBQ3VWLElBQ0gsQ0FBQztBQUVqQjs7Ozs7QUNaQSxNQUF3RztBQUN4RyxNQUE4RjtBQUM5RixNQUFxRztBQUNyRyxNQUF3SDtBQUN4SCxNQUFpSDtBQUNqSCxNQUFpSDtBQUNqSCxNQUE0RztBQUM1RztBQUNBOztBQUVBLElBQUksWUFBTzs7QUFFWCxZQUFPLHFCQUFxQiw2QkFBbUI7QUFDL0MsWUFBTyxpQkFBaUIsMENBQWE7O0FBRXJDLE1BQU0sWUFBTyxVQUFVLCtCQUFhO0FBQ3BDO0FBQ0EsWUFBTyxVQUFVLHVCQUFNO0FBQ3ZCLFlBQU8sc0JBQXNCLDhCQUFrQjs7QUFFL0MsSUFBSSxXQUFNLEdBQUcsa0NBQUcsQ0FBQyxtQkFBTyxFQUFFLFlBQU87Ozs7QUFJNkM7QUFDOUUsT0FBTyxrREFBZSxtQkFBTyxJQUFJLG1CQUFPLFVBQVUsbUJBQU8sbUJBQW1CLEVBQUM7Ozs7QUMxQnhEO0FBRU4sU0FBU0UsU0FBSUEsQ0FBQ3pWLEtBQUssRUFBRTtFQUNoQyxPQUFPRixrQkFBQTtJQUFHa0QsU0FBUyxFQUFDO0VBQVksR0FBRWhELEtBQUssQ0FBQ3VWLElBQVEsQ0FBQztBQUNyRDs7Ozs7QUNIQSxNQUF3RztBQUN4RyxNQUE4RjtBQUM5RixNQUFxRztBQUNyRyxNQUF3SDtBQUN4SCxNQUFpSDtBQUNqSCxNQUFpSDtBQUNqSCxNQUE0RztBQUM1RztBQUNBOztBQUVBLElBQUksdUJBQU87O0FBRVgsdUJBQU8scUJBQXFCLDZCQUFtQjtBQUMvQyx1QkFBTyxpQkFBaUIsMENBQWE7O0FBRXJDLE1BQU0sdUJBQU8sVUFBVSwrQkFBYTtBQUNwQztBQUNBLHVCQUFPLFVBQVUsdUJBQU07QUFDdkIsdUJBQU8sc0JBQXNCLDhCQUFrQjs7QUFFL0MsSUFBSSxzQkFBTSxHQUFHLGtDQUFHLENBQUMsOEJBQU8sRUFBRSx1QkFBTzs7OztBQUk2QztBQUM5RSxPQUFPLDZEQUFlLDhCQUFPLElBQUksOEJBQU8sVUFBVSw4QkFBTyxtQkFBbUIsRUFBQzs7OztBQzFCeEQ7QUFFTixTQUFTRywrQkFBZUEsQ0FBQzFWLEtBQUssRUFBRTtFQUMzQyxPQUFPRiw2QkFBQTtJQUFLa0QsU0FBUyxFQUFDLGlCQUFpQjtJQUFDbkIsS0FBSyxFQUFFO01BQUVxTCxNQUFNLEVBQUVsTixLQUFLLENBQUNrTjtJQUFPO0VBQUUsQ0FBTSxDQUFDO0FBQ25GOzs7OztBQ0hBLE1BQXdHO0FBQ3hHLE1BQThGO0FBQzlGLE1BQXFHO0FBQ3JHLE1BQXdIO0FBQ3hILE1BQWlIO0FBQ2pILE1BQWlIO0FBQ2pILE1BQTRHO0FBQzVHO0FBQ0E7O0FBRUEsSUFBSSxhQUFPOztBQUVYLGFBQU8scUJBQXFCLDZCQUFtQjtBQUMvQyxhQUFPLGlCQUFpQiwwQ0FBYTs7QUFFckMsTUFBTSxhQUFPLFVBQVUsK0JBQWE7QUFDcEM7QUFDQSxhQUFPLFVBQVUsdUJBQU07QUFDdkIsYUFBTyxzQkFBc0IsOEJBQWtCOztBQUUvQyxJQUFJLFlBQU0sR0FBRyxrQ0FBRyxDQUFDLG9CQUFPLEVBQUUsYUFBTzs7OztBQUk2QztBQUM5RSxPQUFPLG1EQUFlLG9CQUFPLElBQUksb0JBQU8sVUFBVSxvQkFBTyxtQkFBbUIsRUFBQzs7OztBQzFCeEQ7QUFFTixTQUFTeUksV0FBS0EsQ0FBQzNWLEtBQUssRUFBRTtFQUNqQyxPQUNJRixtQkFBQTtJQUNJNE0sRUFBRSxFQUFFMU0sS0FBSyxDQUFDME0sRUFBRztJQUNiMUosU0FBUyxFQUFDLE9BQU87SUFDakI0UyxXQUFXLEVBQUU1VixLQUFLLENBQUM0VixXQUFZO0lBQy9CMVUsS0FBSyxFQUFFbEIsS0FBSyxDQUFDa0IsS0FBTTtJQUNuQitFLElBQUksRUFBRWpHLEtBQUssQ0FBQ2lHLElBQUs7SUFDakJwRSxLQUFLLEVBQUU7TUFBRW9MLEtBQUssRUFBRWpOLEtBQUssQ0FBQ2lOO0lBQU0sQ0FBRTtJQUM5QjRJLE9BQU8sRUFBRTdWLEtBQUssQ0FBQzZWO0VBQVEsQ0FDMUIsQ0FBQztBQUVWOzs7OztBQ2JBLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXlHO0FBQ3pHO0FBQ0E7O0FBRUEsSUFBSSxtQkFBTzs7QUFFWCxtQkFBTyxxQkFBcUIsNkJBQW1CO0FBQy9DLG1CQUFPLGlCQUFpQiwwQ0FBYTs7QUFFckMsTUFBTSxtQkFBTyxVQUFVLCtCQUFhO0FBQ3BDO0FBQ0EsbUJBQU8sVUFBVSx1QkFBTTtBQUN2QixtQkFBTyxzQkFBc0IsOEJBQWtCOztBQUUvQyxJQUFJLGtCQUFNLEdBQUcsa0NBQUcsQ0FBQywwQkFBTyxFQUFFLG1CQUFPOzs7O0FBSTBDO0FBQzNFLE9BQU8sNkRBQWUsMEJBQU8sSUFBSSwwQkFBTyxVQUFVLDBCQUFPLG1CQUFtQixFQUFDOzs7O0FDMUI5RCxTQUFTQyxlQUFlQSxDQUFDOVYsS0FBSyxFQUFlO0VBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBVkMsUUFBUSxPQUFBQyxLQUFBLENBQUFKLElBQUEsT0FBQUEsSUFBQSxXQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO0lBQVJGLFFBQVEsQ0FBQUUsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7RUFBQTtFQUN0RCxPQUNJUiw2QkFBQTtJQUFLa0QsU0FBUyxFQUFDO0VBQXNCLEdBQ2pDbEQsNkJBQUE7SUFBRytCLEtBQUssRUFBRTtNQUFFb0wsS0FBSyxFQUFFO0lBQVE7RUFBRSxHQUFFak4sS0FBSyxDQUFDdVYsSUFBUSxDQUFDLEVBQzlDelYsNkJBQUE7SUFBSWtELFNBQVMsRUFBQztFQUEwQixHQUFFNUMsUUFBYSxDQUN0RCxDQUFDO0FBRWQ7OztBQ1BlLFNBQVMyVixnQkFBZ0JBLENBQUMvVixLQUFLLEVBQUU7RUFDNUMsT0FBT0YsOEJBQUE7SUFBSytNLEdBQUcsRUFBRTdNLEtBQUssQ0FBQzZNLEdBQUk7SUFBQ2hMLEtBQUssRUFBRTtNQUFFb0wsS0FBSyxFQUFFO0lBQVE7RUFBRSxDQUFFLENBQUM7QUFDN0Q7O0FBRUE7OztBQ0plLFNBQVMrSSxzQkFBc0JBLENBQUNoVyxLQUFLLEVBQUU7RUFDbEQsT0FBT0Ysb0NBQUE7SUFBRytCLEtBQUssRUFBRTtNQUFFb1UsTUFBTSxFQUFFLE1BQU07TUFBRTVJLFFBQVEsRUFBRTtJQUFRO0VBQUUsR0FBRXJOLEtBQUssQ0FBQ3VWLElBQVEsQ0FBQztBQUM1RTs7Ozs7QUNEQSxNQUF3RztBQUN4RyxNQUE4RjtBQUM5RixNQUFxRztBQUNyRyxNQUF3SDtBQUN4SCxNQUFpSDtBQUNqSCxNQUFpSDtBQUNqSCxNQUE0RztBQUM1RztBQUNBOztBQUVBLElBQUksWUFBTzs7QUFFWCxZQUFPLHFCQUFxQiw2QkFBbUI7QUFDL0MsWUFBTyxpQkFBaUIsMENBQWE7O0FBRXJDLE1BQU0sWUFBTyxVQUFVLCtCQUFhO0FBQ3BDO0FBQ0EsWUFBTyxVQUFVLHVCQUFNO0FBQ3ZCLFlBQU8sc0JBQXNCLDhCQUFrQjs7QUFFL0MsSUFBSSxXQUFNLEdBQUcsa0NBQUcsQ0FBQyxtQkFBTyxFQUFFLFlBQU87Ozs7QUFJNkM7QUFDOUUsT0FBTyxrREFBZSxtQkFBTyxJQUFJLG1CQUFPLFVBQVUsbUJBQU8sbUJBQW1CLEVBQUM7Ozs7QUMxQnhEO0FBRU4sU0FBU1csU0FBSUEsQ0FBQ2xXLEtBQUssRUFBRTtFQUNoQyxPQUNJRixrQkFBQTtJQUFHa0QsU0FBUyxFQUFDLE1BQU07SUFBQ21ULElBQUksRUFBRW5XLEtBQUssQ0FBQ21XLElBQUs7SUFBQzlHLE9BQU8sRUFBRXJQLEtBQUssQ0FBQ3FQO0VBQVEsR0FDeERyUCxLQUFLLENBQUN1VixJQUNSLENBQUM7QUFFWjs7O0FDUnFEO0FBRXRDLFNBQVNhLGVBQWVBLENBQUNwVyxLQUFLLEVBQUU7RUFDM0MsT0FDSUYsNkJBQUE7SUFBSWtELFNBQVMsRUFBQyw4QkFBOEI7SUFBQ3FNLE9BQU8sRUFBRXJQLEtBQUssQ0FBQ3FQO0VBQVEsR0FDaEV2UCw2QkFBQSxDQUFDb1csU0FBSTtJQUFDQyxJQUFJLEVBQUVuVyxLQUFLLENBQUNxVyxFQUFHO0lBQUNkLElBQUksRUFBRXZWLEtBQUssQ0FBQ3VWLElBQUs7SUFBQ2xHLE9BQU8sRUFBRXJQLEtBQUssQ0FBQ3FQO0VBQVEsQ0FBRSxDQUNqRSxDQUFDO0FBRWI7OztBQ1JxQjtBQUMyQjtBQUNFO0FBQ1k7QUFDRTtBQUVoRSxTQUFTaUgsdUJBQVdBLENBQUN0VyxLQUFLLEVBQWU7RUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFWQyxRQUFRLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7SUFBUkYsUUFBUSxDQUFBRSxJQUFBLFFBQUFKLFNBQUEsQ0FBQUksSUFBQTtFQUFBO0VBQ25DLE9BQU9SLHlCQUFBO0lBQUtrRCxTQUFTLEVBQUM7RUFBYSxHQUFFNUMsUUFBYyxDQUFDO0FBQ3hEOzs7Ozs7QUNQQSxNQUF3RztBQUN4RyxNQUE4RjtBQUM5RixNQUFxRztBQUNyRyxNQUF3SDtBQUN4SCxNQUFpSDtBQUNqSCxNQUFpSDtBQUNqSCxNQUE0RztBQUM1RztBQUNBOztBQUVBLElBQUksZUFBTzs7QUFFWCxlQUFPLHFCQUFxQiw2QkFBbUI7QUFDL0MsZUFBTyxpQkFBaUIsMENBQWE7O0FBRXJDLE1BQU0sZUFBTyxVQUFVLCtCQUFhO0FBQ3BDO0FBQ0EsZUFBTyxVQUFVLHVCQUFNO0FBQ3ZCLGVBQU8sc0JBQXNCLDhCQUFrQjs7QUFFL0MsSUFBSSxjQUFNLEdBQUcsa0NBQUcsQ0FBQyxzQkFBTyxFQUFFLGVBQU87Ozs7QUFJNkM7QUFDOUUsT0FBTyxxREFBZSxzQkFBTyxJQUFJLHNCQUFPLFVBQVUsc0JBQU8sbUJBQW1CLEVBQUM7Ozs7QUMxQnhEO0FBRU4sU0FBU21XLGVBQU9BLENBQUN2VyxLQUFLLEVBQUU7RUFDbkMsT0FDSUYscUJBQUE7SUFBS2tELFNBQVMsRUFBQyxTQUFTO0lBQUNuQixLQUFLLEVBQUU7TUFBRW9MLEtBQUssRUFBRWpOLEtBQUssQ0FBQ2lOO0lBQU07RUFBRSxHQUNuRG5OLHFCQUFBLFlBQUlFLEtBQUssQ0FBQ3VWLElBQVEsQ0FDakIsQ0FBQztBQUVkOzs7QUNGZ0M7QUFDMkI7QUFDSztBQUVqRCxTQUFTaUIsb0JBQW9CQSxDQUFBLEVBQUc7RUFDM0MsT0FDSTFXLGtDQUFBLENBQUN3Vyx1QkFBVyxRQUNSeFcsa0NBQUEsQ0FBQ2lXLGdCQUFnQjtJQUFDbEosR0FBRyxLQUFBck0sTUFBQSxDQUFLb0MsV0FBVztFQUFvQixDQUFFLENBQUMsRUFDNUQ5QyxrQ0FBQSxDQUFDa1csc0JBQXNCO0lBQUNULElBQUksRUFBQztFQUF5QyxDQUFFLENBQUMsRUFDekV6VixrQ0FBQSxDQUFDeVcsZUFBTztJQUFDaEIsSUFBSSxFQUFDLHVCQUF1QjtJQUFDdEksS0FBSyxFQUFDO0VBQU8sQ0FBRSxDQUFDLEVBQ3REbk4sa0NBQUEsQ0FBQ2dXLGVBQWU7SUFBQ1AsSUFBSSxFQUFDO0VBQVcsR0FDN0J6VixrQ0FBQSxDQUFDc1csZUFBZTtJQUFDYixJQUFJLEVBQUM7RUFBUSxDQUFFLENBQUMsRUFDakN6VixrQ0FBQSxDQUFDc1csZUFBZTtJQUFDYixJQUFJLEVBQUM7RUFBUSxDQUFFLENBQUMsRUFDakN6VixrQ0FBQSxDQUFDc1csZUFBZTtJQUFDYixJQUFJLEVBQUM7RUFBTyxDQUFFLENBQ2xCLENBQ1IsQ0FBQztBQUV0Qjs7O0FDdkIwRDtBQUNNO0FBQ1o7QUFDTTtBQUNZO0FBQ2I7QUFDUTtBQUNaO0FBQ0E7QUFDc0I7QUFDcEI7QUFDRjtBQUNjO0FBRW5FLFNBQVNrQixJQUFJQSxDQUFBLEVBQUc7RUFDWixJQUFNQyxJQUFJLEdBQUdoVyxRQUFRLENBQUNpVyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDckQsSUFBSWxULE9BQU8sR0FBRyxHQUFHO0VBQ2pCaVQsSUFBSSxDQUFDakksTUFBTSxDQUNQM08saUJBQUEsQ0FBQ2lELDJCQUFhLFFBQ1ZqRCxpQkFBQSxDQUFDdVYscUNBQWtCLFFBQ2Z2VixpQkFBQSxDQUFDcVYsU0FBUyxRQUNOclYsaUJBQUEsQ0FBQ3dWLGFBQU07SUFBQ0MsSUFBSSxFQUFDLE1BQU07SUFBQ3pULFFBQVEsRUFBRTtFQUFNLENBQUUsQ0FBQyxFQUN2Q2hDLGlCQUFBLENBQUN3VixhQUFNO0lBQUNDLElBQUksRUFBQyxNQUFNO0lBQUN6VCxRQUFRLEVBQUU7RUFBTSxDQUFFLENBQUMsRUFDdkNoQyxpQkFBQSxDQUFDd1YsYUFBTTtJQUFDQyxJQUFJLEVBQUMsTUFBTTtJQUFDelQsUUFBUSxFQUFFO0VBQUssQ0FBRSxDQUFDLEVBQ3RDaEMsaUJBQUEsQ0FBQ3dWLGFBQU07SUFBQ0MsSUFBSSxFQUFDLE9BQU87SUFBQ3pULFFBQVEsRUFBRTtFQUFLLENBQUUsQ0FBQyxFQUN2Q2hDLGlCQUFBLENBQUN3VixhQUFNO0lBQUNDLElBQUksRUFBQyxHQUFHO0lBQUN6VCxRQUFRLEVBQUU7RUFBSyxDQUFFLENBQzNCLENBQUMsRUFDWmhDLGlCQUFBLENBQUNxVixTQUFTLFFBQ05yVixpQkFBQSxDQUFDMFYscUJBQVU7SUFDUDNJLEdBQUcsS0FBQXJNLE1BQUEsQ0FBS3FDLFVBQVUsNEJBQTBCO0lBQzVDMFMsSUFBSSxFQUFDLE1BQU07SUFDWHpULFFBQVEsRUFBRSxLQUFNO0lBQ2hCc04sTUFBTSxFQUFFLElBQUs7SUFDYkMsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNekwsTUFBTSxDQUFDLENBQUM7SUFBQTtFQUFDLENBQzNCLENBQUMsRUFDRjlELGlCQUFBLENBQUMwVixxQkFBVTtJQUNQM0ksR0FBRyxLQUFBck0sTUFBQSxDQUFLcUMsVUFBVSw0QkFBMEI7SUFDNUMwUyxJQUFJLEVBQUMsU0FBUztJQUNkelQsUUFBUSxFQUFFLEtBQU07SUFDaEJzTixNQUFNLEVBQUUsSUFBSztJQUNiQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU14TCxTQUFTLENBQUMsQ0FBQztJQUFBO0VBQUMsQ0FDOUIsQ0FBQyxFQUNGL0QsaUJBQUEsQ0FBQ29QLFNBQUk7SUFDRHJDLEdBQUcsS0FBQXJNLE1BQUEsQ0FBS3FDLFVBQVUsNkJBQTJCO0lBQzdDdU0sTUFBTSxFQUFFLElBQUs7SUFDYmxDLE1BQU0sRUFBQyxNQUFNO0lBQ2JELEtBQUssRUFBQztFQUFNLENBQ2YsQ0FBQyxFQUNGbk4saUJBQUEsQ0FBQzRWLCtCQUFlO0lBQUN4SSxNQUFNLEVBQUM7RUFBTSxDQUFFLENBQUMsRUFDakNwTixpQkFBQSxDQUFDMFYscUJBQVU7SUFBQzNJLEdBQUcsS0FBQXJNLE1BQUEsQ0FBS3FDLFVBQVUsY0FBWTtJQUFDMFMsSUFBSSxFQUFDLE1BQU07SUFBQ25HLE1BQU0sRUFBRSxJQUFLO0lBQUN0TixRQUFRLEVBQUU7RUFBTSxDQUFFLENBQUMsRUFDeEZoQyxpQkFBQSxDQUFDMFYscUJBQVU7SUFDUDNJLEdBQUcsS0FBQXJNLE1BQUEsQ0FBS3FDLFVBQVUsNkJBQTJCO0lBQzdDMFMsSUFBSSxFQUFDLFFBQVE7SUFDYm5HLE1BQU0sRUFBRSxJQUFLO0lBQ2J0TixRQUFRLEVBQUU7RUFBTSxDQUNuQixDQUFDLEVBQ0ZoQyxpQkFBQSxDQUFDMFYscUJBQVU7SUFDUDNJLEdBQUcsS0FBQXJNLE1BQUEsQ0FBS3FDLFVBQVUsMEJBQXdCO0lBQzFDMFMsSUFBSSxFQUFDLFNBQVM7SUFDZG5HLE1BQU0sRUFBRSxJQUFLO0lBQ2J0TixRQUFRLEVBQUU7RUFBTSxDQUNuQixDQUFDLEVBQ0ZoQyxpQkFBQSxDQUFDMFYscUJBQVU7SUFDUDNJLEdBQUcsS0FBQXJNLE1BQUEsQ0FBS3FDLFVBQVUsOEJBQTRCO0lBQzlDMFMsSUFBSSxFQUFDLFNBQVM7SUFDZG5HLE1BQU0sRUFBRSxJQUFLO0lBQ2J0TixRQUFRLEVBQUU7RUFBTSxDQUNuQixDQUFDLEVBQ0ZoQyxpQkFBQSxDQUFDNFYsK0JBQWU7SUFBQ3hJLE1BQU0sRUFBQztFQUFNLENBQUUsQ0FBQyxFQUNqQ3BOLGlCQUFBLENBQUNvUCxTQUFJO0lBQ0RyQyxHQUFHLEtBQUFyTSxNQUFBLENBQUtxQyxVQUFVLDJCQUF5QjtJQUMzQ3VNLE1BQU0sRUFBRSxJQUFLO0lBQ2JsQyxNQUFNLEVBQUMsTUFBTTtJQUNiRCxLQUFLLEVBQUM7RUFBTSxDQUNmLENBQUMsRUFDRm5OLGlCQUFBLENBQUNvUCxTQUFJO0lBQ0RyQyxHQUFHLEtBQUFyTSxNQUFBLENBQUtxQyxVQUFVLDJCQUF5QjtJQUMzQ3VNLE1BQU0sRUFBRSxJQUFLO0lBQ2JsQyxNQUFNLEVBQUMsTUFBTTtJQUNiRCxLQUFLLEVBQUM7RUFBTSxDQUNmLENBQUMsRUFDRm5OLGlCQUFBLENBQUNvUCxTQUFJO0lBQ0RyQyxHQUFHLEtBQUFyTSxNQUFBLENBQUtxQyxVQUFVLCtCQUE2QjtJQUMvQ3VNLE1BQU0sRUFBRSxJQUFLO0lBQ2JsQyxNQUFNLEVBQUMsTUFBTTtJQUNiRCxLQUFLLEVBQUM7RUFBTSxDQUNmLENBQ00sQ0FBQyxFQUNabk4saUJBQUEsQ0FBQ3FWLFNBQVM7SUFBQzNILEdBQUcsRUFBQztFQUFLLEdBQ2hCMU4saUJBQUEsQ0FBQzJWLFNBQUk7SUFBQ0YsSUFBSSxFQUFDO0VBQVMsQ0FBRSxDQUFDLEVBQ3ZCelYsaUJBQUEsQ0FBQzZWLFdBQUs7SUFDRmpKLEVBQUUsRUFBQyx5QkFBeUI7SUFDNUJrSixXQUFXLEVBQUMsa0JBQWtCO0lBQzlCMVUsS0FBSyxFQUFDLEdBQUc7SUFDVCtMLEtBQUssRUFBQyxNQUFNO0lBQ1o0SSxPQUFPLEVBQUUsU0FBQUEsUUFBQ3RSLENBQUMsRUFBSztNQUNaZCxPQUFPLEdBQUdjLENBQUMsQ0FBQ3FTLE1BQU0sQ0FBQzFWLEtBQUs7SUFDNUI7RUFBRSxDQUNMLENBQUMsRUFDRnBCLGlCQUFBLENBQUMwVixxQkFBVTtJQUNQM0ksR0FBRyxLQUFBck0sTUFBQSxDQUFLcUMsVUFBVSw0QkFBMEI7SUFDNUMwUyxJQUFJLEVBQUMsSUFBSTtJQUNUelQsUUFBUSxFQUFFLEtBQU07SUFDaEJzTixNQUFNLEVBQUUsSUFBSztJQUNiQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1yQixJQUFJLENBQUN2SyxPQUFPLENBQUM7SUFBQTtFQUFDLENBQ2hDLENBQ00sQ0FDSyxDQUFDLEVBQ3JCM0QsaUJBQUEsQ0FBQ3NVLDJCQUFhLE1BQUUsQ0FDTCxDQUNuQixDQUFDO0VBRURwQyxPQUFPLENBQUMsS0FBSyxFQUFFbFMsaUJBQUEsQ0FBQzBXLG9CQUFvQixNQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7RUFDL0N4RSxPQUFPLENBQUMsS0FBSyxFQUFFbFMsaUJBQUEsQ0FBQ21PLFdBQVcsTUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO0VBRXRDRCxJQUFJLENBQUN2SyxPQUFPLENBQUM7QUFDakI7QUFFQS9DLFFBQVEsQ0FBQ1ksZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFVBQUNpRCxDQUFDLEVBQUs7RUFDNUNBLENBQUMsQ0FBQzhMLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCMkIsT0FBTyxDQUFDLEtBQUssRUFBRWxTLGlCQUFBLENBQUMwVyxvQkFBb0IsTUFBRSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBRUZDLElBQUksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL2pzeC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0J1dHRvbkJhckNvbnRhaW5lci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9Gb2xkZXJDb250YWluZXIvaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25JY29uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24vaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0RpdmlkZXJWZXJ0aWNhbC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvbi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5mb0JveC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5wdXQvaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmsvaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL1RleHQvaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudC9pbmRleC5jc3M/ZGYwMSIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1dpbmRvd0NvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvdXRpbHMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb25uZWN0L3JlcXVlc3RzLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvRm9sZGVyQ29udGFpbmVyL2luZGV4LmNzcz9hYjkxIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvRm9sZGVyQ29udGFpbmVyL0ZvbGRlcnNNZW51L2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvRm9sZGVyQ29udGFpbmVyL0ZvbGRlcnNNZW51L0ZvbGRlckl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9Gb2xkZXJDb250YWluZXIvRm9sZGVyc01lbnUvRmlsZUl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9Gb2xkZXJDb250YWluZXIvRm9sZGVyc01lbnUvQ29sdW1uRGVzY3JpcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9Gb2xkZXJDb250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9zcmMvQXBwVmlld3MvRm9sZGVyc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9zcmMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguY3NzPzQzZTUiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvbi9pbmRleC5jc3M/NTYxMyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9DbG9zZUJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvcmVtb3ZlVmlldy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvVmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy91dGlscy9tYXRoLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9hZGRWaWV3LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2Nvbm5lY3QvV2ViaW5kb3dzTWVzc2FnZVJlY2VpdmVyLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvVmlld0NvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0J1dHRvbkJhckNvbnRhaW5lci9CdXR0b25CYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvaW5kZXguY3NzPzUzZmMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmNzcz82M2ZlIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25JY29uL2luZGV4LmNzcz9mNWNkIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbkljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vVGV4dC9pbmRleC5jc3M/ODBlNCIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9UZXh0L2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0RpdmlkZXJWZXJ0aWNhbC9pbmRleC5jc3M/MDFkOSIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9EaXZpZGVyVmVydGljYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5wdXQvaW5kZXguY3NzP2NlM2MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9pbmRleC5jc3M/YTcyMSIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L0FwcE92ZXJ2aWV3TGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L0FwcE92ZXJ2aWV3SW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9BcHBPdmVydmlld0Rlc2NyaXB0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmsvaW5kZXguY3NzP2VkNDAiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vTGluay9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L0FwcE92ZXJ2aWV3TGlzdC9BcHBPdmVydmlld0xpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbmZvQm94L2luZGV4LmNzcz80ZjhjIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9zcmMvQXBwVmlld3MvRmlsZUV4cGxvcmVyT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3ggY3JlYXRlRWxlbWVudCAqL1xyXG5cclxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRhZyhwcm9wcywgLi4uY2hpbGRyZW4pO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICBPYmplY3QuZW50cmllcyhwcm9wcyB8fCB7fSkuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCJvblwiKSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xhc3NOYW1lXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwic3R5bGVcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSB2YWx1ZVtwcm9wTmFtZV07XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BOYW1lXSA9IHByb3BWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiZGlzYWJsZWRcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmRpc2FibGVkID0gQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICBhcHBlbmRDaGlsZChlbGVtZW50LCBjaGlsZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmNvbnN0IGFwcGVuZENoaWxkID0gKHBhcmVudCwgY2hpbGQpID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkgcmV0dXJuIGNoaWxkLmZvckVhY2goKG5lc3RlZENoaWxkKSA9PiBhcHBlbmRDaGlsZChwYXJlbnQsIG5lc3RlZENoaWxkKSk7XHJcbiAgICBpZiAoIWNoaWxkKSByZXR1cm47XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQ/Lm5vZGVUeXBlID8gY2hpbGQgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgYXBwZW5kQ2hpbGQgfTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5BcHBPdmVydmlld19fU2VlQWxzbyB7XHJcbiAgICBtYXJnaW46IDE0cHg7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3RJdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL0FwcE92ZXJ2aWV3L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5BcHBPdmVydmlld19fU2VlQWxzbyB7XFxyXFxuICAgIG1hcmdpbjogMTRweDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3RJdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5CdXR0b25CYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0cHgpO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKSxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggMHB4IHZhcigtLXNoYWRvdy0zMDApLCAwcHggdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0zMDApO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsU0FBUztJQUNUOzs7c0dBR2tHO0FBQ3RHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5CdXR0b25CYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNHB4KTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKSxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCAwcHggdmFyKC0tc2hhZG93LTMwMCksIDBweCB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTMwMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndpbkNsLUZvbGRlcnNNZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG5cclxuLndpbkNsLUZvbGRlckl0ZW0ge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1ibG9jazogMnB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDJweDtcclxuICAgIGdhcDogNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcclxuICAgIGJvcmRlcjogMnB4IGRvdHRlZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLndpbkNsLUZvbGRlckl0ZW06YWN0aXZlIHtcclxuICAgIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1zaGFkb3ctMzAwKTtcclxufVxyXG5cclxuLndpbkNsLUZvbGRlcldyYXBwZXIge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZ3JleS0yMDApIHNvbGlkIDFweDtcclxufVxyXG5cclxuLndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uSXRlbSB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXHJcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXNoYWRvdy0zMDApIDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNoYWRvdy0zMDApIDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1ncmV5LTIwMCkgMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tZ3JleS0yMDApIDFweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktMjAwKTtcclxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJsb2NrOiAxcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9Gb2xkZXJDb250YWluZXIvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLDRCQUE0QjtJQUM1Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLDhCQUE4QjtJQUM5Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSTsrRUFDMkU7SUFDM0UseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQyxzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53aW5DbC1Gb2xkZXJzTWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luQ2wtRm9sZGVySXRlbSB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDJweDtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDJweDtcXHJcXG4gICAgZ2FwOiA0cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XFxyXFxuICAgIGJvcmRlcjogMnB4IGRvdHRlZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbkNsLUZvbGRlckl0ZW06YWN0aXZlIHtcXHJcXG4gICAgYm9yZGVyOiAycHggZG90dGVkIHZhcigtLXNoYWRvdy0zMDApO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luQ2wtRm9sZGVyV3JhcHBlciB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWcpO1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZ3JleS0yMDApIHNvbGlkIDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uSXRlbSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXNoYWRvdy0zMDApIDFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2hhZG93LTMwMCkgMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItbGVmdDogdmFyKC0tZ3JleS0yMDApIDFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tZ3JleS0yMDApIDFweCBzb2xpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS0yMDApO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogNHB4O1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAxcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLlZpZXdDb250YWluZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gODVweCk7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4uVmlldyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLlZpZXdSZXNpemVIYW5kbGVMZWZ0IHtcclxuICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDRweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5DbG9zZUJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDFweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFFBQVE7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVmlld0NvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVmlldyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXdSZXNpemVIYW5kbGVMZWZ0IHtcXHJcXG4gICAgY3Vyc29yOiBldy1yZXNpemU7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLkNsb3NlQmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDFweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuV2luZG93Q29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuV2luZG93Q29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkJ1dHRvbkljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmctYmxvY2s6IDJweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctaW5saW5lOiA4cHg7XHJcbn1cclxuLkJ1dHRvbkljb246YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldDtcclxufVxyXG4uQnV0dG9uSWNvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xyXG59XHJcbi5CdXR0b25JY29uX19pY29uIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25JY29uL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7NkVBQ3lFO0FBQzdFO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkJ1dHRvbkljb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDhweDtcXHJcXG59XFxyXFxuLkJ1dHRvbkljb246YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XFxyXFxufVxcclxcbi5CdXR0b25JY29uOmRpc2FibGVkIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xcclxcbn1cXHJcXG4uQnV0dG9uSWNvbl9faWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuQnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nLWJsb2NrOiAycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLWlubGluZTogOHB4O1xyXG59XHJcbi5CdXR0b246YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldDtcclxufVxyXG4uQnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmV5LTMwMCk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7NkVBQ3lFO0FBQzdFO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5CdXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDhweDtcXHJcXG59XFxyXFxuLkJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldDtcXHJcXG59XFxyXFxuLkJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyZXktMzAwKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuRGl2aWRlclZlcnRpY2FsIHtcclxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3ctMjAwKTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQsXHJcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQ7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRGl2aWRlclZlcnRpY2FsL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkM7NkRBQ3lEO0FBQzdEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5EaXZpZGVyVmVydGljYWwge1xcclxcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3ctMjAwKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5JY29uIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0ljb24vaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkljb24ge1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5JbmZvQm94IHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LTEwMCk7XHJcbiAgICBib3JkZXI6IHZhcigtLXllbGxvdy0yMDApIDFweCBzb2xpZDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbmZvQm94L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLG1DQUFtQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuSW5mb0JveCB7XFxyXFxuICAgIG1hcmdpbjogOHB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy0xMDApO1xcclxcbiAgICBib3JkZXI6IHZhcigtLXllbGxvdy0yMDApIDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuTGluayB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5MaW5rOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogcHVycGxlO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0lucHV0L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuTGluayB7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uTGluazphY3RpdmUge1xcclxcbiAgICBjb2xvcjogcHVycGxlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5JbnB1dCB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmF0KTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJsb2NrOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQsXHJcbiAgICAgICAgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzbikgKiAyKSBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXNuKSAqIDIpIDBweCB2YXIoLS1ncmV5LTIwMCkgaW5zZXQsXHJcbiAgICAgICAgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKSAwcHggdmFyKC0tc2hhZG93LTMwMCkgaW5zZXQ7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vTGluay9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qjs7O2lHQUc2RjtBQUNqR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuSW5wdXQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYXQpO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcXHJcXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1c24pICogMikgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzbikgKiAyKSAwcHggdmFyKC0tZ3JleS0yMDApIGluc2V0LFxcclxcbiAgICAgICAgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKSAwcHggdmFyKC0tc2hhZG93LTMwMCkgaW5zZXQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLlRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL1RleHQvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlRleHQge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWcpO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiY29uc3QgV0JORF9SRVEgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5jb25zdCBST09UX1BBVEggPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9mb2xkZXJcIjtcclxuY29uc3QgRklMRV9QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvZmlsZVwiO1xyXG5jb25zdCBQVUJMSUNfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L3B1YmxpY1wiICsgXCIvd2ViaW5kb3dzL3B1YmxpYy9cIjtcclxuY29uc3QgQVNTRVRTX1BBVEggPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9wdWJsaWNcIiArIFwiL3dlYmluZG93cy9wdWJsaWMvQXNzZXRzL1wiO1xyXG5jb25zdCBJQ09OU19QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvcHVibGljXCIgKyBcIi93ZWJpbmRvd3MvcHVibGljL0Fzc2V0cy9JY29ucy9cIjtcclxuY29uc3QgRklMRVNfUkVRID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvZmlsZXMvXCI7XHJcblxyXG5leHBvcnQgeyBQVUJMSUNfUEFUSCwgQVNTRVRTX1BBVEgsIElDT05TX1BBVEgsIEZJTEVfUEFUSCwgUk9PVF9QQVRILCBGSUxFU19SRVEgfTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpbmRvd0NvbnRlbnQocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJXaW5kb3dDb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PjtcclxufVxyXG4iLCJjbGFzcyBMaW5lYXJIaXN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXRQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtpbml0UG9zaXRpb25dO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIG5ldyB2aXNpdCB0byB0aGUgaGlzdG9yeS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gYWRkcmVzcyAtIFRoZSBuZXcgYWRkcmVzcyB0byBhZGQgdG8gdGhlIGhpc3RvcnkuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBhZGROZXcoYWRkcmVzcykge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKGFkZHJlc3MpO1xyXG4gICAgICAgIHRoaXMuX19jbGVhbkR1cGxpY2F0ZXMoKTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHb2VzIGJhY2sgb25jZSBpbiB0aGUgaGlzdG9yeSBhbmQgcmV0dXJucyB0aGF0IHBvaW50LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3R5cGV9IFBvaW50IGluIGhpc3RvcnlcclxuICAgICAqL1xyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4IDw9IDApIHJldHVybiB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMuaW5kZXgtLTtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR29lcyBmb3J3YXJkIG9uY2UgaW4gdGhlIGhpc3RvcnkgYW5kIHJldHVybnMgdGhhdCBwb2ludC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHt0eXBlfSBQb2ludCBpbiBoaXN0b3J5XHJcbiAgICAgKi9cclxuICAgIGdvRm9yd2FyZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmRleCA+PSB0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMSkgcmV0dXJuIHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHb2VzIHRvIHRoZSBzcGVjaWZpYyBpbmRleCBpbiBoaXN0b3J5IGFuZCByZXR1cm5zIHRoYXQgcG9pbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7dHlwZX0gUG9pbnQgaW4gaGlzdG9yeVxyXG4gICAgICovXHJcbiAgICBnb1RvSW5kZXgoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBwb2ludCBpbiBoaXN0b3J5LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3R5cGV9IFBvaW50IGluIGhpc3RvcnlcclxuICAgICAqL1xyXG4gICAgZ2V0Q3VycmVudFBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIHBvc3NpYmxlIG5leHQgaW5kZXggaW4gaGlzdG9yeS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHt0eXBlfSBQb2ludCBpbiBoaXN0b3J5XHJcbiAgICAgKi9cclxuICAgIGdldE5leHRJbmRleCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmRleCA+PSB0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMSkgcmV0dXJuIHRoaXMuaW5kZXg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBwb3NzaWJsZSBwcmV2aW91cyBpbmRleCBpbiBoaXN0b3J5LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3R5cGV9IFBvaW50IGluIGhpc3RvcnlcclxuICAgICAqL1xyXG4gICAgZ2V0UHJldmlvdXNJbmRleCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmRleCA8PSAwKSByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgaW5kZXggaW4gaGlzdG9yeS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHt0eXBlfSBQb2ludCBpbiBoaXN0b3J5XHJcbiAgICAgKi9cclxuICAgIGdldEN1cnJlbnRJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyB0aGUgd2hvbGUgaGlzdG9yeS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHt0eXBlfSBQb2ludCBpbiBoaXN0b3J5XHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIF9fY2xlYW5EdXBsaWNhdGVzKCkge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFsuLi5uZXcgU2V0KHRoaXMuaGlzdG9yeSldO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBMaW5lYXJIaXN0b3J5IH07XHJcbiIsImltcG9ydCB7IFJPT1RfUEFUSCwgRklMRVNfUkVRIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBHZXQgZGF0YSBhYm91dCB0aGUgZm9sZGVyIGF0IHRoZSBzcGVjaWZpZWQgYWRkcmVzcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGFkZHJlc3MgLSBUaGUgYWRkcmVzcyBvZiB0aGUgZm9sZGVyIHRvIHJlcXVlc3QuXHJcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBKU09OIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RGb2xkZXIoYWRkcmVzcykge1xyXG4gICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9nZ2VkSW5Vc2VyXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goUk9PVF9QQVRILCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICAgICAgICBwYXRoOiBhZGRyZXNzLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZGF0YSBhYm91dCBhbGwgZmlsZXMgYXQgdGhlIHNwZWNpZmllZCBhZGRyZXNzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyAtIFRoZSBhZGRyZXNzIG9mIHRoZSBmb2xkZXIgdG8gcmVxdWVzdC5cclxuICogQHJldHVybiB7UHJvbWlzZX0gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIEpTT04gcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEZpbGVzKGFkZHJlc3MpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKEZJTEVTX1JFUSArIGFkZHJlc3MsIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVxdWVzdEZvbGRlciwgcmVxdWVzdEZpbGVzIH07XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvbGRlcnNNZW51KHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtwcm9wcy5pZH0gY2xhc3NOYW1lPVwid2luQ2wtRm9sZGVyc01lbnVcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBJQ09OU19QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvbGRlckl0ZW0ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1Gb2xkZXJJdGVtXCIgb25EYmxDbGljaz17cHJvcHMub25EYmxDbGlja30+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17SUNPTlNfUEFUSCArIHByb3BzLm1ldGFkYXRhLm90aGVyLmljb259XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5DbC1JY29uXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE2cHhcIiwgaGVpZ2h0OiBcIjE2cHhcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7cHJvcHMubWV0YWRhdGEubmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNPTlNfUEFUSCwgRklMRV9QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVJdGVtKHByb3BzKSB7XHJcbiAgICBpZiAoIXByb3BzLmZpbGUpIHJldHVybiA8ZGl2PjwvZGl2PjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1Gb2xkZXJJdGVtXCIgb25EYmxDbGljaz17cHJvcHMub25EYmxDbGlja30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiLCBtaW5XaWR0aDogXCIyMDBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgZ2FwOiBcIjRweFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmZpbGUud2l0aFByZXZpZXcgPyBGSUxFX1BBVEggKyBwcm9wcy5maWxlLmljb24gOiBJQ09OU19QQVRIICsgcHJvcHMuZmlsZS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbkNsLUljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE2cHhcIiwgaGVpZ2h0OiBcIjE2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5maWxlLm5hbWUgKyBwcm9wcy5maWxlLmV4dGVuc2lvbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNSVcIiwgbWluV2lkdGg6IFwiNTBweFwiIH19Pntwcm9wcy5maWxlLmV4dGVuc2lvbn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxNSVcIiwgbWluV2lkdGg6IFwiMTAwcHhcIiB9fT57cHJvcHMuZmlsZS5vd25lcn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMCVcIiwgbWluV2lkdGg6IFwiMTUwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIHsocHJvcHMuZmlsZS5zaXplIC8gMTAyNCkudG9GaXhlZCgyKSArIFwiIEtCXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2x1bW5EZXNjcmlwdGlvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtQ29sdW1uRGVzY3JpcHRpb25JdGVtXCIgc3R5bGU9e3sgd2lkdGg6IFwiNjAlXCIsIG1pbldpZHRoOiBcIjIwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uSXRlbVwiIHN0eWxlPXt7IHdpZHRoOiBcIjUlXCIsIG1pbldpZHRoOiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIFR5cGVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtQ29sdW1uRGVzY3JpcHRpb25JdGVtXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTUlXCIsIG1pbldpZHRoOiBcIjEwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBPd25lclxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1Db2x1bW5EZXNjcmlwdGlvbkl0ZW1cIiBzdHlsZT17eyB3aWR0aDogXCIyMCVcIiwgbWluV2lkdGg6IFwiMTUwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIFNpemVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBGb2xkZXJzTWVudSBmcm9tIFwiLi9Gb2xkZXJzTWVudVwiO1xyXG5pbXBvcnQgRm9sZGVySXRlbSBmcm9tIFwiLi9Gb2xkZXJzTWVudS9Gb2xkZXJJdGVtXCI7XHJcbmltcG9ydCBGaWxlSXRlbSBmcm9tIFwiLi9Gb2xkZXJzTWVudS9GaWxlSXRlbVwiO1xyXG5pbXBvcnQgQ29sdW1uRGVzY3JpcHRpb24gZnJvbSBcIi4vRm9sZGVyc01lbnUvQ29sdW1uRGVzY3JpcHRpb25cIjtcclxuXHJcbmZ1bmN0aW9uIEZvbGRlckNvbnRhaW5lcihwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndpbkNsLUZvbGRlcldyYXBwZXJcIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgeyBGb2xkZXJDb250YWluZXIsIEZvbGRlcnNNZW51LCBGb2xkZXJJdGVtLCBGaWxlSXRlbSwgQ29sdW1uRGVzY3JpcHRpb24gfTtcclxuIiwiaW1wb3J0IHtcclxuICAgIEZvbGRlcnNNZW51LFxyXG4gICAgRm9sZGVyQ29udGFpbmVyLFxyXG4gICAgRm9sZGVySXRlbSxcclxuICAgIEZpbGVJdGVtLFxyXG4gICAgQ29sdW1uRGVzY3JpcHRpb24sXHJcbn0gZnJvbSBcIkB3ZWJpbmRvd3MvRm9sZGVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IGdvVG8sIGhpc3RvcnkgfSBmcm9tIFwiLi4vaGlzdG9yeVwiO1xyXG5cclxuZnVuY3Rpb24gRm9sZGVyc1ZpZXcoKSB7XHJcbiAgICByZXR1cm4gPEZvbGRlcnNNZW51IGlkPVwiaWRfRmlsZUV4cGxvcmVyX0ZvbGRlcnNNZW51XCIgLz47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUZvbGRlcnNNZW51KG5ld0ZvbGRlcnMsIG5ld0ZpbGVzKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9GaWxlRXhwbG9yZXJfRm9sZGVyc01lbnVcIik7XHJcblxyXG4gICAgd2hpbGUgKG1lbnUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIG1lbnUucmVtb3ZlQ2hpbGQobWVudS5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBtZW51LmFwcGVuZChcclxuICAgICAgICA8Rm9sZGVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q29sdW1uRGVzY3JpcHRpb24gLz5cclxuICAgICAgICAgICAge25ld0ZvbGRlcnMuZGF0YS5tYXAoKGNoaWxkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9sZGVySXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhPXtjaGlsZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkRibENsaWNrPXsoKSA9PiBnb1RvKGhpc3RvcnkuZ2V0Q3VycmVudFBvaW50KCkgKyBcIi9cIiArIGNoaWxkLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHtuZXdGaWxlcy5tYXAoKGNoaWxkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmlsZUl0ZW0gZmlsZT17Y2hpbGR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRm9sZGVyQ29udGFpbmVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgRm9sZGVyc1ZpZXcsIHVwZGF0ZUZvbGRlcnNNZW51IH07XHJcbiIsImltcG9ydCB7IExpbmVhckhpc3RvcnkgfSBmcm9tIFwiQHdlYmluZG93cy91dGlscy9oaXN0b3J5LmpzXCI7XHJcbmltcG9ydCB7IHJlcXVlc3RGaWxlcywgcmVxdWVzdEZvbGRlciB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvcmVxdWVzdHMuanNcIjtcclxuaW1wb3J0IHsgdXBkYXRlRm9sZGVyc01lbnUgfSBmcm9tIFwiLi9BcHBWaWV3cy9Gb2xkZXJzVmlldy5qc1wiO1xyXG5cclxuY29uc3QgaGlzdG9yeSA9IG5ldyBMaW5lYXJIaXN0b3J5KFwiL1wiKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdvVG8oYWRkcmVzcykge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkX0ZpbGVFeHBsb3Jlcl9BZGRyZXNzXCIpO1xyXG4gICAgY29uc3QgbmV3Rm9sZGVycyA9IGF3YWl0IHJlcXVlc3RGb2xkZXIoYWRkcmVzcyk7XHJcbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IHJlcXVlc3RGaWxlcyhhZGRyZXNzKTtcclxuXHJcbiAgICBoaXN0b3J5LmFkZE5ldyhhZGRyZXNzKTtcclxuICAgIGlucHV0LnZhbHVlID0gYWRkcmVzcztcclxuXHJcbiAgICB1cGRhdGVGb2xkZXJzTWVudShuZXdGb2xkZXJzLCBmaWxlcyk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdvVG9IaXN0b3J5KGluZGV4KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfRmlsZUV4cGxvcmVyX0FkZHJlc3NcIik7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGhpc3RvcnkuZ29Ub0luZGV4KGluZGV4KTtcclxuICAgIGNvbnN0IG5ld0ZvbGRlcnMgPSBhd2FpdCByZXF1ZXN0Rm9sZGVyKGxvY2F0aW9uKTtcclxuICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgcmVxdWVzdEZpbGVzKGxvY2F0aW9uKTtcclxuXHJcbiAgICBpbnB1dC52YWx1ZSA9IGxvY2F0aW9uO1xyXG5cclxuICAgIHVwZGF0ZUZvbGRlcnNNZW51KG5ld0ZvbGRlcnMsIGZpbGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ29CYWNrKCkge1xyXG4gICAgZ29Ub0hpc3RvcnkoaGlzdG9yeS5nZXRQcmV2aW91c0luZGV4KCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnb0ZvcndhcmQoKSB7XHJcbiAgICBnb1RvSGlzdG9yeShoaXN0b3J5LmdldE5leHRJbmRleCgpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ29UbywgZ29CYWNrLCBnb0ZvcndhcmQsIGhpc3RvcnkgfTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3Byb3BzLnNyY31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcIkljb25cIiArIChwcm9wcy5jbGFzc05hbWUgPyBcIiBcIiArIHByb3BzLmNsYXNzTmFtZSA6IFwiXCIpfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb3BzLmlzR3JleSA/IFwiZ3JheXNjYWxlKDEwMCUpXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uXCI7XHJcbmltcG9ydCB7IEFTU0VUU19QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3NlQmFyKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2xvc2VCYXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luQ2wtSGFyZE91dHNldFNoYWRvdyB3aW5DbC1CR0NvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjE2cHhcIiB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5DbC1IYXJkT3V0c2V0U2hhZG93IHdpbkNsLUJHQ29sb3JcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtBU1NFVFNfUEFUSCArIFwiL0ltZ19CdXR0b25fQ2xvc2UuUE5HXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVWaWV3KGlkKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgY29uc3Qgdmlld1dpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodmlldykuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuICAgIGNvbnN0IHN1YlZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICBsZXQgcHJldlZpZXc7XHJcbiAgICBsZXQgcmVzaXplVmlldztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc3ViVmlld3NbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHByZXZWaWV3ID0gc3ViVmlld3NbaSAtIDFdO1xyXG4gICAgICAgICAgICByZXNpemVWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgVmlld1Jlc2l6ZUhhbmRsZUxlZnRgKVtpIC0gMV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHByZXZWaWV3V2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwcmV2VmlldykuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuICAgIHByZXZWaWV3LnN0eWxlLndpZHRoID0gcHJldlZpZXdXaWR0aCArIHZpZXdXaWR0aCArIDEyICsgXCJweFwiO1xyXG5cclxuICAgIGlmIChyZXNpemVWaWV3KSByZXNpemVWaWV3LnJlbW92ZSgpO1xyXG4gICAgaWYgKHZpZXcpIHZpZXcucmVtb3ZlKCk7XHJcbn1cclxuIiwiaW1wb3J0IENsb3NlQmFyIGZyb20gXCIuLi9DbG9zZUJhclwiO1xyXG5pbXBvcnQgcmVtb3ZlVmlldyBmcm9tIFwiLi4vcmVtb3ZlVmlld1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlldyhwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbkNsLUhhcmRJbnNldFNoYWRvdyBWaWV3XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHByb3BzLndpZHRoIH19XHJcbiAgICAgICAgICAgIG9uQ29udGV4dG1lbnU9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuaXNDbG9zYWJsZSAmJiA8Q2xvc2VCYXIgb25DbGljaz17KCkgPT4gcmVtb3ZlVmlldyhwcm9wcy5pZCl9IC8+fVxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBTdWJ0cmFjdHMgYSB2YWx1ZSBmcm9tIGFub3RoZXIgdW50aWwgbGltaXQuXHJcbiAqIElmIGxpbWl0IGlzIG1ldCwgdGhlbiBzdWJ0cmFjdCBmcm9tIHZhbHVlIHRoZSByZXN0LlxyXG4gKiBEZWZhdWx0IGxpbWl0IGlzIDE1MFxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc3VidHJhY3QuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tIC0gVGhlIHZhbHVlIHRvIHN1YnRyYWN0IGZyb20uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGltaXQ9MTUwXSAtIFRoZSBsaW1pdCB0byBzdWJ0cmFjdCBmcm9tLlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgeCBhbmQgeSByZXByZXNlbnRpbmcgdGhlIHN1YnRyYWN0ZWQgdmFsdWVzLlxyXG4gKi9cclxuZnVuY3Rpb24gc3VidHJhY3RGcm9tKHZhbHVlLCBmcm9tLCBsaW1pdCA9IDE1MCkge1xyXG4gICAgbGV0IHJlbWFpbmluZ0Zyb20gPSBmcm9tIC0gdmFsdWU7XHJcbiAgICBsZXQgc3VidHJhY3RlZFZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHJlbWFpbmluZ0Zyb20gPCBsaW1pdCkge1xyXG4gICAgICAgIGNvbnN0IHRvU3VidHJhY3QgPSB2YWx1ZSAtIE1hdGguYWJzKGxpbWl0IC0gZnJvbSk7XHJcbiAgICAgICAgcmVtYWluaW5nRnJvbSA9IGxpbWl0O1xyXG4gICAgICAgIHN1YnRyYWN0ZWRWYWx1ZSA9IHZhbHVlIC0gdG9TdWJ0cmFjdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyB4OiBzdWJ0cmFjdGVkVmFsdWUsIHk6IHJlbWFpbmluZ0Zyb20gfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYW1wcyBhIHZhbHVlIGJldHdlZW4gYW4gdXBwZXIgYW5kIGxvd2VyIGJvdW5kLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2xhbXAuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbG93ZXIgYm91bmQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgdXBwZXIgYm91bmQuXHJcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGNsYW1wZWQgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN1YnRyYWN0cyBhbiBlcXVhbCBzaGFyZSBmcm9tIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgYmFzZWQgb24gdGhlIHRvdGFsIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdG90YWwgdmFsdWUgdG8gc3BsaXQgYW1vbmcgdGhlIGVsZW1lbnRzLlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSBvZiB2YWx1ZXMgdG8gc3VidHJhY3QgZnJvbS5cclxuICogQHJldHVybiB7QXJyYXl9IFRoZSBtb2RpZmllZCBhcnJheSBhZnRlciBzdWJ0cmFjdGluZyB0aGUgZXF1YWwgc2hhcmUgZnJvbSBlYWNoIGVsZW1lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdWJ0cmFjdEVxdWFsU2hhcmUodmFsdWUsIGFycmF5KSB7XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09IDApIHJldHVybiBhcnJheTtcclxuICAgIGNvbnN0IHNoYXJlID0gdmFsdWUgLyBhcnJheS5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGFycmF5W2ldIC0gc2hhcmU7XHJcbiAgICAgICAgYXJyYXlbaV0gPSBNYXRoLm1heChuZXdWYWx1ZSwgMTUwKTtcclxuICAgICAgICB2YWx1ZSAtPSBhcnJheVtpXSAtIG5ld1ZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBpZiB0d28gbnVtYmVycyBhcmUgbmVhcmx5IGVxdWFsIHdpdGhpbiBhIHNwZWNpZmllZCBlcHNpbG9uIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtMSAtIFRoZSBmaXJzdCBudW1iZXIgdG8gY29tcGFyZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IG51bTIgLSBUaGUgc2Vjb25kIG51bWJlciB0byBjb21wYXJlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2Vwc2lsb249MV0gLSBUaGUgYWNjZXB0YWJsZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIG51bWJlcnMuXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG51bWJlcnMgYXJlIG5lYXJseSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cclxuZnVuY3Rpb24gbmVhcmx5RXF1YWwobnVtMSwgbnVtMiwgZXBzaWxvbiA9IDEpIHtcclxuICAgIHJldHVybiBNYXRoLmFicyhudW0xIC0gbnVtMikgPCBlcHNpbG9uO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBlcXVhbCBzaGFyZSB0byBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IGJhc2VkIG9uIHRoZSB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHRvdGFsIHZhbHVlIHRvIHNwbGl0IGFtb25nIHRoZSBlbGVtZW50cy5cclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgYXJyYXkgb2YgdmFsdWVzIHRvIGFkZCB0by5cclxuICogQHJldHVybiB7QXJyYXl9IFRoZSBtb2RpZmllZCBhcnJheS5cclxuICovXHJcbmZ1bmN0aW9uIHNwcmVhZFZhbHVlQWNyb3NzQXJyYXkodmFsdWUsIGFycikge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiBhcnI7XHJcbiAgICBjb25zdCBlcXVhbFZhbHVlID0gdmFsdWUgLyBsZW5ndGg7XHJcbiAgICBjb25zdCBzcHJlYWRBcnJheSA9IGFyci5tYXAoKG51bSkgPT4gbnVtICsgZXF1YWxWYWx1ZSk7XHJcbiAgICByZXR1cm4gc3ByZWFkQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHN1YnRyYWN0RnJvbSwgY2xhbXAsIHN1YnRyYWN0RXF1YWxTaGFyZSwgbmVhcmx5RXF1YWwsIHNwcmVhZFZhbHVlQWNyb3NzQXJyYXkgfTtcclxuIiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xyXG5pbXBvcnQgeyBzdWJ0cmFjdEZyb20sIGNsYW1wIH0gZnJvbSBcIkB3ZWJpbmRvd3MvdXRpbHMvbWF0aFwiO1xyXG5cclxuLyoqXHJcbiAqIEFkZCBhIG5ldyB2aWV3IHRvIHRoZSB2aWV3IGNvbnRhaW5lci5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluaXRXaWR0aCAtIFRoZSBpbml0aWFsIHdpZHRoIG9mIHRoZSBuZXcgdmlldy5cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudCAtIFRoZSBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgbmV3IHZpZXcuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDbG9zYWJsZSAtIEluY2x1ZGUgYSBidXR0b24gdG8gY2xvc2UgdGhlIHZpZXcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRWaWV3KGluaXRXaWR0aCwgY29udGVudCwgaXNDbG9zYWJsZSA9IHRydWUpIHtcclxuICAgIGNvbnN0IHN1YldpbmRvd1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld0NvbnRhaW5lclwiKVswXTtcclxuICAgIGNvbnN0IHN1YldpbmRvd3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld1wiKTtcclxuICAgIGNvbnN0IHJlc2l6ZUhhbmRsZUxlZnQgPSA8ZGl2IGNsYXNzTmFtZT1cIlZpZXdSZXNpemVIYW5kbGVMZWZ0XCI+PC9kaXY+O1xyXG4gICAgY29uc3Qgd2luZG93V2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgbGV0IGRlc2lyZWRXaWR0aCA9IChwYXJzZUludChpbml0V2lkdGgpICogd2luZG93V2lkdGgpIC8gMTAwO1xyXG4gICAgaWYgKHN1YldpbmRvd3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IGxhc3RXaW5kb3cgPSBzdWJXaW5kb3dzW3N1YldpbmRvd3MubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgY29uc3QgbGFzdFdpbmRvd1dpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobGFzdFdpbmRvdykuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuICAgICAgICBpZiAobGFzdFdpbmRvd1dpZHRoIDwgMTc1KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBzdWJ0cmFjdEZyb20oZGVzaXJlZFdpZHRoLCBsYXN0V2luZG93V2lkdGgpO1xyXG4gICAgICAgIGRlc2lyZWRXaWR0aCA9IHg7XHJcbiAgICAgICAgbGFzdFdpbmRvdy5zdHlsZS53aWR0aCA9IHkgLSA0ICsgXCJweFwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaWQgPSBgaWRfVmlld18ke3N1YldpbmRvd3MubGVuZ3RoICsgMX1gO1xyXG4gICAgY29uc3QgbmV3U3ViV2luZG93ID0gPFZpZXcgaWQ9e2lkfSB3aWR0aD17ZGVzaXJlZFdpZHRoIC0gOCArIFwicHhcIn0gaXNDbG9zYWJsZT17aXNDbG9zYWJsZX0+PC9WaWV3PjtcclxuXHJcbiAgICBpZiAoc3ViV2luZG93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc3ViV2luZG93V3JhcHBlci5hcHBlbmQocmVzaXplSGFuZGxlTGVmdCk7XHJcbiAgICB9XHJcbiAgICBuZXdTdWJXaW5kb3cuYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgc3ViV2luZG93V3JhcHBlci5hcHBlbmQobmV3U3ViV2luZG93KTtcclxuXHJcbiAgICByZXNpemVIYW5kbGVMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN1YlZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICAgICAgbGV0IHN1YldpbmRvd0N1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaWRfVmlld18ke3N1YldpbmRvd3MubGVuZ3RoIC0gMX1gKTtcclxuICAgICAgICBsZXQgc3ViV2luZG93TmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpZF9WaWV3XyR7c3ViV2luZG93cy5sZW5ndGh9YCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3ViVmlld3NbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJXaW5kb3dDdXJyZW50ID0gc3ViVmlld3NbaSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgc3ViV2luZG93TmV4dCA9IHN1YlZpZXdzW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2F2ZWRXaWR0aEN1cnJlbnQgPSBwYXJzZUludChcclxuICAgICAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViV2luZG93Q3VycmVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzYXZlZFdpZHRoTmV4dCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1YldpbmRvd05leHQpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoRGlmZiA9IGUuY2xpZW50WCAtIChzdWJXaW5kb3dDdXJyZW50Lm9mZnNldExlZnQgKyBzYXZlZFdpZHRoQ3VycmVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0N1cnJlbnRXaWR0aCA9IGNsYW1wKFxyXG4gICAgICAgICAgICAgICAgc2F2ZWRXaWR0aEN1cnJlbnQgKyB3aWR0aERpZmYsXHJcbiAgICAgICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgICAgIHNhdmVkV2lkdGhDdXJyZW50ICsgc2F2ZWRXaWR0aE5leHQgLSA1MFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOZXh0V2lkdGggPSBjbGFtcChcclxuICAgICAgICAgICAgICAgIHNhdmVkV2lkdGhOZXh0IC0gd2lkdGhEaWZmLFxyXG4gICAgICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgICAgICBzYXZlZFdpZHRoQ3VycmVudCArIHNhdmVkV2lkdGhOZXh0IC0gNTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3ViV2luZG93Q3VycmVudC5zdHlsZS53aWR0aCA9IG5ld0N1cnJlbnRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgc3ViV2luZG93TmV4dC5zdHlsZS53aWR0aCA9IG5ld05leHRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJjbGFzcyBXZWJpbmRvd3NNZXNzYWdlUmVjZWl2ZXIge1xyXG4gICAgb25XaW5kb3dSZXNpemUoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19yZXNpemVcIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2luZG93UmVzaXplU3RhcnQoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19yZXNpemVfc3RhcnRcIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uV2luZG93UmVzaXplRW5kKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZXZlbnQgPT0gXCJ3aW5kb3dfcmVzaXplX2VuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dCZWZvcmVFeHBhbmQoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19iZWZvcmVfZXhwYW5kXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd0V4cGFuZChjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X2V4cGFuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dCZWZvcmVVbmV4cGFuZChjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X2JlZm9yZV91bmV4cGFuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dVbmV4cGFuZChjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhLmV2ZW50ID09IFwid2luZG93X3VuZXhwYW5kXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd09wZW4oY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5ldmVudCA9PSBcIndpbmRvd19vcGVuXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd0Nsb3NlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZXZlbnQgPT0gXCJ3aW5kb3dfY2xvc2VcIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB3aW5kb3dFdmVudHMgPSBuZXcgV2ViaW5kb3dzTWVzc2FnZVJlY2VpdmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dFdmVudHM7XHJcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBWaWV3IGZyb20gXCIuL1ZpZXdcIjtcclxuaW1wb3J0IGFkZFZpZXcgZnJvbSBcIi4vYWRkVmlld1wiO1xyXG5pbXBvcnQgd2luZG93RXZlbnRzIGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvV2ViaW5kb3dzTWVzc2FnZVJlY2VpdmVyXCI7XHJcbmltcG9ydCB7IHNwcmVhZFZhbHVlQWNyb3NzQXJyYXkgfSBmcm9tIFwiQHdlYmluZG93cy91dGlscy9tYXRoXCI7XHJcblxyXG5mdW5jdGlvbiBWaWV3Q29udGFpbmVyKHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiVmlld0NvbnRhaW5lclwiPntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbmxldCB3aW5kb3dXaWR0aFN0YXJ0ID0gMDtcclxubGV0IHNhdmVkV2lkdGhzID0gW107XHJcblxyXG53aW5kb3dFdmVudHMub25XaW5kb3dCZWZvcmVFeHBhbmQoKGRhdGEpID0+IHtcclxuICAgIHNhdmVWaWV3V2lkdGhzKGRhdGEpO1xyXG59KTtcclxuXHJcbndpbmRvd0V2ZW50cy5vbldpbmRvd0JlZm9yZVVuZXhwYW5kKChkYXRhKSA9PiB7XHJcbiAgICBzYXZlVmlld1dpZHRocyhkYXRhKTtcclxufSk7XHJcblxyXG53aW5kb3dFdmVudHMub25XaW5kb3dSZXNpemVTdGFydCgoZGF0YSkgPT4ge1xyXG4gICAgc2F2ZVZpZXdXaWR0aHMoZGF0YSk7XHJcbn0pO1xyXG5cclxud2luZG93RXZlbnRzLm9uV2luZG93UmVzaXplRW5kKCgpID0+IHtcclxuICAgIGNsZWFyVmlld1dpZHRocygpO1xyXG59KTtcclxuXHJcbndpbmRvd0V2ZW50cy5vbldpbmRvd1Jlc2l6ZSgoZGF0YSkgPT4ge1xyXG4gICAgYWRqdXN0Vmlld1NpemVzKGRhdGEpO1xyXG59KTtcclxuXHJcbndpbmRvd0V2ZW50cy5vbldpbmRvd0V4cGFuZCgoZGF0YSkgPT4ge1xyXG4gICAgYWRqdXN0Vmlld1NpemVzKGRhdGEpO1xyXG4gICAgY2xlYXJWaWV3V2lkdGhzKCk7XHJcbn0pO1xyXG5cclxud2luZG93RXZlbnRzLm9uV2luZG93VW5leHBhbmQoKGRhdGEpID0+IHtcclxuICAgIGFkanVzdFZpZXdTaXplcyhkYXRhKTtcclxuICAgIGNsZWFyVmlld1dpZHRocygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyVmlld1dpZHRocygpIHtcclxuICAgIHdpbmRvd1dpZHRoU3RhcnQgPSAwO1xyXG4gICAgc2F2ZWRXaWR0aHMgPSBbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVZpZXdXaWR0aHMoZGF0YSkge1xyXG4gICAgd2luZG93V2lkdGhTdGFydCA9IGRhdGEud2luZG93U2l6ZS53aWR0aDtcclxuICAgIGNvbnN0IHN1YlZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2F2ZWRXaWR0aHMucHVzaChwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJWaWV3c1tpXSkuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkanVzdFZpZXdTaXplcyhkYXRhKSB7XHJcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IGRhdGEud2luZG93U2l6ZS53aWR0aDtcclxuICAgIGNvbnN0IHN1YlZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICBjb25zdCBuZXdXaWR0aHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSBzYXZlZFdpZHRoc1tpXTtcclxuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGhQcmVjID0gY3VycmVudFdpZHRoIC8gd2luZG93V2lkdGhTdGFydDtcclxuICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHdpbmRvd1dpZHRoICogY3VycmVudFdpZHRoUHJlYztcclxuICAgICAgICBuZXdXaWR0aHMucHVzaChuZXdXaWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlmZiA9IHdpbmRvd1dpZHRoIC0gbmV3V2lkdGhzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgY29uc3QgYWRqdXN0ZWRXaWR0aHMgPSBzcHJlYWRWYWx1ZUFjcm9zc0FycmF5KGRpZmYsIG5ld1dpZHRocyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN1YlZpZXdzW2ldLnN0eWxlLndpZHRoID0gYWRqdXN0ZWRXaWR0aHNbaV0gLSA4ICsgXCJweFwiO1xyXG4gICAgICAgIGlmIChpID09IHN1YlZpZXdzLmxlbmd0aCAtIDEpIHN1YlZpZXdzW2ldLnN0eWxlLndpZHRoID0gYWRqdXN0ZWRXaWR0aHNbaV0gLSA0ICogKGkgKyAxKSArIFwicHhcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVmlldywgYWRkVmlldywgVmlld0NvbnRhaW5lciB9O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25CYXIocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQnV0dG9uQmFyXCIgc3R5bGU9e3sgZ2FwOiBwcm9wcz8uZ2FwID8/IFwiNHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtRGl2aWRlckJpZ1ZlcnRpY2FsXCIgc3R5bGU9XCJoZWlnaHQ6IDIycHg7IG1hcmdpbi1ibG9jazogMnB4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IEJ1dHRvbkJhciBmcm9tIFwiLi9CdXR0b25CYXJcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbkJhckNvbnRhaW5lcihwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1IYXJkSW5zZXRTaGFkb3dcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PntjaGlsZH08L2Rpdj47XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgQnV0dG9uQmFyLCBCdXR0b25CYXJDb250YWluZXIgfTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJ1dHRvblwiIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uSWNvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJ1dHRvbkljb25cIiBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvbkljb25fX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZmlsdGVyOiBwcm9wcy5pc0dyZXkgPyBcImdyYXlzY2FsZSgxMDAlKVwiIDogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwid2luQ2wtVGV4dFwiPntwcm9wcy50ZXh0fTwvcD47XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpdmlkZXJWZXJ0aWNhbChwcm9wcykge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiRGl2aWRlclZlcnRpY2FsXCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5oZWlnaHQgfX0+PC9kaXY+O1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJJbnB1dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogcHJvcHMud2lkdGggfX1cclxuICAgICAgICAgICAgb25JbnB1dD17cHJvcHMub25JbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0xpc3QocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwT3ZlcnZpZXdfX1NlZUFsc29cIj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiB9fT57cHJvcHMudGV4dH08L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJBcHBPdmVydmlld19fU2VlQWxzb0xpc3RcIj57Y2hpbGRyZW59PC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwT3ZlcnZpZXdJbWFnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIDxpbWcgc3JjPXtwcm9wcy5zcmN9IHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIgfX0gLz47XHJcbn1cclxuXHJcbi8vQVNTRVRTX1BBVEggKyBcIkZpbGVFeHBsb3Jlci5wbmdcIlxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0Rlc2NyaXB0aW9uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjE0cHhcIiwgbWluV2lkdGg6IFwiMTUwcHhcIiB9fT57cHJvcHMudGV4dH08L3A+O1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIkxpbmtcIiBocmVmPXtwcm9wcy5ocmVmfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0xpbmsocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdEl0ZW1cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvcHMudG99IHRleHQ9e3Byb3BzLnRleHR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3TGlzdCBmcm9tIFwiLi9BcHBPdmVydmlld0xpc3RcIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3SW1hZ2UgZnJvbSBcIi4vQXBwT3ZlcnZpZXdJbWFnZVwiO1xyXG5pbXBvcnQgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiBmcm9tIFwiLi9BcHBPdmVydmlld0Rlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBBcHBPdmVydmlld0xpbmsgZnJvbSBcIi4vQXBwT3ZlcnZpZXdMaXN0L0FwcE92ZXJ2aWV3TGlua1wiO1xyXG5cclxuZnVuY3Rpb24gQXBwT3ZlcnZpZXcocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJBcHBPdmVydmlld1wiPntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFwcE92ZXJ2aWV3TGlzdCwgQXBwT3ZlcnZpZXdJbWFnZSwgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiwgQXBwT3ZlcnZpZXcsIEFwcE92ZXJ2aWV3TGluayB9O1xyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb0JveChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkluZm9Cb3hcIiBzdHlsZT17eyB3aWR0aDogcHJvcHMud2lkdGggfX0+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy50ZXh0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIEFwcE92ZXJ2aWV3LFxyXG4gICAgQXBwT3ZlcnZpZXdMaW5rLFxyXG4gICAgQXBwT3ZlcnZpZXdMaXN0LFxyXG4gICAgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbixcclxuICAgIEFwcE92ZXJ2aWV3SW1hZ2UsXHJcbn0gZnJvbSBcIkB3ZWJpbmRvd3MvQXBwT3ZlcnZpZXdcIjtcclxuaW1wb3J0IHsgQVNTRVRTX1BBVEggfSBmcm9tIFwiQHdlYmluZG93cy9jb25uZWN0L2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiLi4vLi4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVFeHBsb3Jlck92ZXJ2aWV3KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwT3ZlcnZpZXc+XHJcbiAgICAgICAgICAgIDxBcHBPdmVydmlld0ltYWdlIHNyYz17YCR7QVNTRVRTX1BBVEh9L0ZpbGVFeHBsb3Jlci5wbmdgfSAvPlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiB0ZXh0PVwiU2VsZWN0IGFuIGl0ZW0gdG8gdmlldyBpdHMgZGVzY3JpcHRpb24uXCIgLz5cclxuICAgICAgICAgICAgPEluZm9Cb3ggdGV4dD1cIk5vdCBmdWxseSBmdW5jdGlvbmFsLlwiIHdpZHRoPVwiMjUwcHhcIiAvPlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdMaXN0IHRleHQ9XCJTZWUgYWxzbzpcIj5cclxuICAgICAgICAgICAgICAgIDxBcHBPdmVydmlld0xpbmsgdGV4dD1cIlB1YmxpY1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8QXBwT3ZlcnZpZXdMaW5rIHRleHQ9XCJBc3NldHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEFwcE92ZXJ2aWV3TGluayB0ZXh0PVwiSWNvbnNcIiAvPlxyXG4gICAgICAgICAgICA8L0FwcE92ZXJ2aWV3TGlzdD5cclxuICAgICAgICA8L0FwcE92ZXJ2aWV3PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBJQ09OU19QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuaW1wb3J0IFdpbmRvd0NvbnRlbnQgZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50XCI7XHJcbmltcG9ydCB7IGdvVG8sIGdvQmFjaywgZ29Gb3J3YXJkIH0gZnJvbSBcIi4vaGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyLCBhZGRWaWV3IH0gZnJvbSBcIkB3ZWJpbmRvd3MvVmlld3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uQmFyQ29udGFpbmVyLCBCdXR0b25CYXIgfSBmcm9tIFwiQHdlYmluZG93cy9CdXR0b25CYXJzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBCdXR0b25JY29uIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbkljb25cIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvblwiO1xyXG5pbXBvcnQgVGV4dCBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9UZXh0XCI7XHJcbmltcG9ydCBEaXZpZGVyVmVydGljYWwgZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRGl2aWRlclZlcnRpY2FsXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbnB1dFwiO1xyXG5pbXBvcnQgeyBGb2xkZXJzVmlldyB9IGZyb20gXCIuL0FwcFZpZXdzL0ZvbGRlcnNWaWV3XCI7XHJcbmltcG9ydCBGaWxlRXhwbG9yZXJPdmVydmlldyBmcm9tIFwiLi9BcHBWaWV3cy9GaWxlRXhwbG9yZXJPdmVydmlld1wiO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XHJcbiAgICBsZXQgYWRkcmVzcyA9IFwiL1wiO1xyXG4gICAgcm9vdC5hcHBlbmQoXHJcbiAgICAgICAgPFdpbmRvd0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uQmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkZpbGVcIiBkaXNhYmxlZD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiRWRpdFwiIGRpc2FibGVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJWaWV3XCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiRXh0cmFcIiBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCI/XCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbkJhcj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25CYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtJQ09OU19QQVRIfS9wcm9nbWFuLmV4ZV8xNF8xNDMuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JleT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29CYWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0lDT05TX1BBVEh9L3Byb2dtYW4uZXhlXzE0XzE0NC5pY29gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiRm9yd2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb0ZvcndhcmQoKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SUNPTlNfUEFUSH0vd2ViY2hlY2suZGxsXzE0XzExNC5pY29gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyZXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXJWZXJ0aWNhbCBoZWlnaHQ9XCIyMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSWNvbiBzcmM9e2Ake0lDT05TX1BBVEh9L2hvbWUucG5nYH0gdGV4dD1cIkhvbWVcIiBpc0dyZXk9e3RydWV9IGRpc2FibGVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0lDT05TX1BBVEh9L2V4cGxvcmVyLmV4ZV8xNF8xMDEuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JleT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtJQ09OU19QQVRIfS9zaGVsbDMyLmRsbF8xNF80Lmljb2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJGb2xkZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0lDT05TX1BBVEh9L3NubXBzbmFwLmRsbF8xNF82NTA0Lmljb2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlclZlcnRpY2FsIGhlaWdodD1cIjIwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SUNPTlNfUEFUSH0vc3luY3VpLmRsbF8xNF8xMjYuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SUNPTlNfUEFUSH0vc3luY3VpLmRsbF8xNF8xMjcuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SUNPTlNfUEFUSH0vY29tcHN0dWkuZGxsXzE0XzY0MDAzLmljb2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JleT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uQmFyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbkJhciBnYXA9XCI0cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0PVwiQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaWRfRmlsZUV4cGxvcmVyX0FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklucHV0IGFkZHJlc3MuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtJQ09OU19QQVRIfS9wcm9nbWFuLmV4ZV8xNF8xNDQuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkdvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyZXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvVG8oYWRkcmVzcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uQmFyPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFZpZXdDb250YWluZXIgLz5cclxuICAgICAgICA8L1dpbmRvd0NvbnRlbnQ+XHJcbiAgICApO1xyXG5cclxuICAgIGFkZFZpZXcoXCIyNSVcIiwgPEZpbGVFeHBsb3Jlck92ZXJ2aWV3IC8+LCBmYWxzZSk7XHJcbiAgICBhZGRWaWV3KFwiNzUlXCIsIDxGb2xkZXJzVmlldyAvPiwgZmFsc2UpO1xyXG5cclxuICAgIGdvVG8oYWRkcmVzcyk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkVmlldyhcIjI1JVwiLCA8RmlsZUV4cGxvcmVyT3ZlcnZpZXcgLz4pO1xyXG59KTtcclxuXHJcbmluaXQoKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJwcm9wcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjaGlsZHJlbiIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwiY29uY2F0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJ2YWx1ZSIsInN0YXJ0c1dpdGgiLCJ0b0xvd2VyQ2FzZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJfdHlwZW9mIiwia2V5cyIsInByb3BOYW1lIiwicHJvcFZhbHVlIiwic3R5bGUiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ0b1N0cmluZyIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnQiLCJpc0FycmF5IiwibmVzdGVkQ2hpbGQiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwiV0JORF9SRVEiLCJST09UX1BBVEgiLCJGSUxFX1BBVEgiLCJQVUJMSUNfUEFUSCIsIkFTU0VUU19QQVRIIiwiSUNPTlNfUEFUSCIsIkZJTEVTX1JFUSIsIldpbmRvd0NvbnRlbnQiLCJjbGFzc05hbWUiLCJMaW5lYXJIaXN0b3J5IiwiaW5pdFBvc2l0aW9uIiwiX2NsYXNzQ2FsbENoZWNrIiwiaGlzdG9yeSIsImluZGV4IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiYWRkTmV3IiwiYWRkcmVzcyIsInB1c2giLCJfX2NsZWFuRHVwbGljYXRlcyIsImdvQmFjayIsImdvRm9yd2FyZCIsImdvVG9JbmRleCIsImdldEN1cnJlbnRQb2ludCIsImdldE5leHRJbmRleCIsImdldFByZXZpb3VzSW5kZXgiLCJnZXRDdXJyZW50SW5kZXgiLCJjbGVhciIsIl90b0NvbnN1bWFibGVBcnJheSIsIlNldCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiZXJyIiwidW5kZWZpbmVkIiwicmVxdWVzdEZvbGRlciIsIl94IiwiX3JlcXVlc3RGb2xkZXIiLCJfY2FsbGVlIiwidXNlciIsInJlc3VsdCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXRoIiwianNvbiIsInJlcXVlc3RGaWxlcyIsIl94MiIsIl9yZXF1ZXN0RmlsZXMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIkZvbGRlcnNNZW51IiwiaWQiLCJGb2xkZXJJdGVtIiwib25EYmxDbGljayIsInNyYyIsIm1ldGFkYXRhIiwib3RoZXIiLCJpY29uIiwid2lkdGgiLCJoZWlnaHQiLCJGaWxlSXRlbSIsImZpbGUiLCJtaW5XaWR0aCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwid2l0aFByZXZpZXciLCJleHRlbnNpb24iLCJvd25lciIsInNpemUiLCJ0b0ZpeGVkIiwiQ29sdW1uRGVzY3JpcHRpb24iLCJGb2xkZXJDb250YWluZXIiLCJnb1RvIiwiRm9sZGVyc1ZpZXciLCJ1cGRhdGVGb2xkZXJzTWVudSIsIm5ld0ZvbGRlcnMiLCJuZXdGaWxlcyIsIm1lbnUiLCJnZXRFbGVtZW50QnlJZCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImFwcGVuZCIsImRhdGEiLCJtYXAiLCJfZ29UbyIsImlucHV0IiwiZmlsZXMiLCJnb1RvSGlzdG9yeSIsIl9nb1RvSGlzdG9yeSIsImxvY2F0aW9uIiwiSWNvbiIsImZpbHRlciIsImlzR3JleSIsIm9uQ2xpY2siLCJDbG9zZUJhciIsInJlbW92ZVZpZXciLCJ2aWV3Iiwidmlld1dpZHRoIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInN1YlZpZXdzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByZXZWaWV3IiwicmVzaXplVmlldyIsInByZXZWaWV3V2lkdGgiLCJyZW1vdmUiLCJWaWV3Iiwib25Db250ZXh0bWVudSIsInByZXZlbnREZWZhdWx0IiwiaXNDbG9zYWJsZSIsInN1YnRyYWN0RnJvbSIsImZyb20iLCJsaW1pdCIsInJlbWFpbmluZ0Zyb20iLCJzdWJ0cmFjdGVkVmFsdWUiLCJ0b1N1YnRyYWN0IiwiTWF0aCIsImFicyIsIngiLCJjbGFtcCIsIm1pbiIsIm1heCIsInN1YnRyYWN0RXF1YWxTaGFyZSIsImFycmF5Iiwic2hhcmUiLCJuZXdWYWx1ZSIsIm5lYXJseUVxdWFsIiwibnVtMSIsIm51bTIiLCJlcHNpbG9uIiwic3ByZWFkVmFsdWVBY3Jvc3NBcnJheSIsImFyciIsImVxdWFsVmFsdWUiLCJzcHJlYWRBcnJheSIsIm51bSIsImFkZFZpZXciLCJpbml0V2lkdGgiLCJjb250ZW50Iiwic3ViV2luZG93V3JhcHBlciIsInN1YldpbmRvd3MiLCJyZXNpemVIYW5kbGVMZWZ0Iiwid2luZG93V2lkdGgiLCJjbGllbnRXaWR0aCIsImRlc2lyZWRXaWR0aCIsImxhc3RXaW5kb3ciLCJsYXN0V2luZG93V2lkdGgiLCJfc3VidHJhY3RGcm9tIiwibmV3U3ViV2luZG93Iiwic3ViV2luZG93Q3VycmVudCIsInN1YldpbmRvd05leHQiLCJzYXZlZFdpZHRoQ3VycmVudCIsInNhdmVkV2lkdGhOZXh0Iiwid2lkdGhEaWZmIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJuZXdDdXJyZW50V2lkdGgiLCJuZXdOZXh0V2lkdGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiV2ViaW5kb3dzTWVzc2FnZVJlY2VpdmVyIiwib25XaW5kb3dSZXNpemUiLCJjYWxsYmFjayIsImV2ZW50Iiwib25XaW5kb3dSZXNpemVTdGFydCIsIm9uV2luZG93UmVzaXplRW5kIiwib25XaW5kb3dCZWZvcmVFeHBhbmQiLCJvbldpbmRvd0V4cGFuZCIsIm9uV2luZG93QmVmb3JlVW5leHBhbmQiLCJvbldpbmRvd1VuZXhwYW5kIiwib25XaW5kb3dPcGVuIiwib25XaW5kb3dDbG9zZSIsIndpbmRvd0V2ZW50cyIsIlZpZXdDb250YWluZXIiLCJ3aW5kb3dXaWR0aFN0YXJ0Iiwic2F2ZWRXaWR0aHMiLCJzYXZlVmlld1dpZHRocyIsImNsZWFyVmlld1dpZHRocyIsImFkanVzdFZpZXdTaXplcyIsIndpbmRvd1NpemUiLCJuZXdXaWR0aHMiLCJjdXJyZW50V2lkdGgiLCJjdXJyZW50V2lkdGhQcmVjIiwibmV3V2lkdGgiLCJkaWZmIiwicmVkdWNlIiwiYiIsImFkanVzdGVkV2lkdGhzIiwiQnV0dG9uQmFyIiwiX3Byb3BzJGdhcCIsIkJ1dHRvbkJhckNvbnRhaW5lciIsIkJ1dHRvbiIsInRleHQiLCJCdXR0b25JY29uIiwiVGV4dCIsIkRpdmlkZXJWZXJ0aWNhbCIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJvbklucHV0IiwiQXBwT3ZlcnZpZXdMaXN0IiwiQXBwT3ZlcnZpZXdJbWFnZSIsIkFwcE92ZXJ2aWV3RGVzY3JpcHRpb24iLCJtYXJnaW4iLCJMaW5rIiwiaHJlZiIsIkFwcE92ZXJ2aWV3TGluayIsInRvIiwiQXBwT3ZlcnZpZXciLCJJbmZvQm94IiwiRmlsZUV4cGxvcmVyT3ZlcnZpZXciLCJpbml0Iiwicm9vdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==