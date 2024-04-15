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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUNoQyxDQUNNLENBQ0ssQ0FBQyxFQUNyQjNELGlCQUFBLENBQUNvVCwyQkFBYSxNQUFFLENBQ0wsQ0FDbkIsQ0FBQztFQUVEdkIsT0FBTyxDQUFDLEtBQUssRUFBRTdSLGlCQUFBLENBQUMwVSxvQkFBb0IsTUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO0VBQy9DN0MsT0FBTyxDQUFDLEtBQUssRUFBRTdSLGlCQUFBLENBQUNtTyxXQUFXLE1BQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztFQUV0Q0QsSUFBSSxDQUFDdkssT0FBTyxDQUFDO0FBQ2pCO0FBRUEvQyxRQUFRLENBQUNZLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxVQUFDaUQsQ0FBQyxFQUFLO0VBQzVDQSxDQUFDLENBQUM4TCxjQUFjLENBQUMsQ0FBQztFQUNsQnNCLE9BQU8sQ0FBQyxLQUFLLEVBQUU3UixpQkFBQSxDQUFDMFUsb0JBQW9CLE1BQUUsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQztBQUVGQyxJQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9qc3guanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvRm9sZGVyQ29udGFpbmVyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uSWNvbi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9EaXZpZGVyVmVydGljYWwvaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0ljb24vaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3gvaW5kZXguY3NzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0lucHV0L2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9UZXh0L2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb25uZWN0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1dpbmRvd0NvbnRlbnQvaW5kZXguY3NzP2RmMDEiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50L2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL3V0aWxzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29ubmVjdC9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0ZvbGRlckNvbnRhaW5lci9pbmRleC5jc3M/YWI5MSIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0ZvbGRlckNvbnRhaW5lci9Gb2xkZXJzTWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL0ZvbGRlckNvbnRhaW5lci9Gb2xkZXJzTWVudS9Gb2xkZXJJdGVtL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvRm9sZGVyQ29udGFpbmVyL0ZvbGRlcnNNZW51L0ZpbGVJdGVtL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvRm9sZGVyQ29udGFpbmVyL0ZvbGRlcnNNZW51L0NvbHVtbkRlc2NyaXB0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvRm9sZGVyQ29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vc3JjL0FwcFZpZXdzL0ZvbGRlcnNWaWV3LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vc3JjL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL2luZGV4LmNzcz80M2U1Iiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0ljb24vaW5kZXguY3NzPzU2MTMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvQ2xvc2VCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL3JlbW92ZVZpZXcuanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL1ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvYWRkVmlldy5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL1ZpZXdDb250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9CdXR0b25CYXJDb250YWluZXIvQnV0dG9uQmFyL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL2luZGV4LmNzcz81M2ZjIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQnV0dG9uQmFyQ29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi9pbmRleC5jc3M/NjNmZSIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uSWNvbi9pbmRleC5jc3M/ZjVjZCIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25JY29uL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL1RleHQvaW5kZXguY3NzPzgwZTQiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9EaXZpZGVyVmVydGljYWwvaW5kZXguY3NzPzAxZDkiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRGl2aWRlclZlcnRpY2FsL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0lucHV0L2luZGV4LmNzcz9jZTNjIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0lucHV0L2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvaW5kZXguY3NzP2E3MjEiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9BcHBPdmVydmlld0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9BcHBPdmVydmlld0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rL2luZGV4LmNzcz9lZDQwIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9BcHBPdmVydmlld0xpc3QvQXBwT3ZlcnZpZXdMaW5rL2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvQXBwT3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXdlYmluZG93cy1hcHAtdGVtcGxhdGUvLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5mb0JveC9pbmRleC5jc3M/NGY4YyIsIndlYnBhY2s6Ly9jcmVhdGUtd2ViaW5kb3dzLWFwcC10ZW1wbGF0ZS8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbmZvQm94L2luZGV4LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vc3JjL0FwcFZpZXdzL0ZpbGVFeHBsb3Jlck92ZXJ2aWV3LmpzIiwid2VicGFjazovL2NyZWF0ZS13ZWJpbmRvd3MtYXBwLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGNyZWF0ZUVsZW1lbnQgKi9cclxuXHJcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnLCBwcm9wcywgLi4uY2hpbGRyZW4pID0+IHtcclxuICAgIGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0YWcocHJvcHMsIC4uLmNoaWxkcmVuKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcblxyXG4gICAgT2JqZWN0LmVudHJpZXMocHJvcHMgfHwge30pLmZvckVhY2goKFtuYW1lLCB2YWx1ZV0pID0+IHtcclxuICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKFwib25cIikgJiYgbmFtZS50b0xvd2VyQ2FzZSgpIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZS50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygyKSwgdmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcImNsYXNzTmFtZVwiKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcInN0eWxlXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcFZhbHVlID0gdmFsdWVbcHJvcE5hbWVdO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wTmFtZV0gPSBwcm9wVmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcImRpc2FibGVkXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5kaXNhYmxlZCA9IEJvb2xlYW4odmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgYXBwZW5kQ2hpbGQoZWxlbWVudCwgY2hpbGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcblxyXG5jb25zdCBhcHBlbmRDaGlsZCA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHJldHVybiBjaGlsZC5mb3JFYWNoKChuZXN0ZWRDaGlsZCkgPT4gYXBwZW5kQ2hpbGQocGFyZW50LCBuZXN0ZWRDaGlsZCkpO1xyXG4gICAgaWYgKCFjaGlsZCkgcmV0dXJuO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkPy5ub2RlVHlwZSA/IGNoaWxkIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZENoaWxkIH07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuQXBwT3ZlcnZpZXdfX1NlZUFsc28ge1xyXG4gICAgbWFyZ2luOiAxNHB4O1xyXG4gICAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5BcHBPdmVydmlld19fU2VlQWxzb0xpc3Qge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uQXBwT3ZlcnZpZXdfX1NlZUFsc29MaXN0SXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9BcHBPdmVydmlldy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osUUFBUTtBQUNaOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQXBwT3ZlcnZpZXdfX1NlZUFsc28ge1xcclxcbiAgICBtYXJnaW46IDE0cHg7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQXBwT3ZlcnZpZXdfX1NlZUFsc29MaXN0IHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uQXBwT3ZlcnZpZXdfX1NlZUFsc29MaXN0SXRlbSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuQnV0dG9uQmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNHB4KTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXMpIHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldCxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTMwMCksXHJcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IDBweCB2YXIoLS1zaGFkb3ctMzAwKSwgMHB4IHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCB2YXIoLS1zaGFkb3ctMzAwKTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL0J1dHRvbkJhckNvbnRhaW5lci9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVDs7O3NHQUdrRztBQUN0R1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQnV0dG9uQmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDRweCk7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxcclxcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTMwMCksXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggMHB4IHZhcigtLXNoYWRvdy0zMDApLCAwcHggdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0zMDApO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC53aW5DbC1Gb2xkZXJzTWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbn1cclxuXHJcbi53aW5DbC1Gb2xkZXJJdGVtIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tYmxvY2s6IDJweDtcclxuICAgIHBhZGRpbmctaW5saW5lOiAycHg7XHJcbiAgICBnYXA6IDRweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XHJcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi53aW5DbC1Gb2xkZXJJdGVtOmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgdmFyKC0tc2hhZG93LTMwMCk7XHJcbn1cclxuXHJcbi53aW5DbC1Gb2xkZXJXcmFwcGVyIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53aW5DbC1Db2x1bW5EZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWcpO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWdyZXktMjAwKSBzb2xpZCAxcHg7XHJcbn1cclxuXHJcbi53aW5DbC1Db2x1bW5EZXNjcmlwdGlvbkl0ZW0ge1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zaGFkb3ctMzAwKSAxcHggc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zaGFkb3ctMzAwKSAxcHggc29saWQ7XHJcbiAgICBib3JkZXItbGVmdDogdmFyKC0tZ3JleS0yMDApIDFweCBzb2xpZDtcclxuICAgIGJvcmRlci10b3A6IHZhcigtLWdyZXktMjAwKSAxcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LTIwMCk7XHJcbiAgICBwYWRkaW5nLWlubGluZTogNHB4O1xyXG4gICAgcGFkZGluZy1ibG9jazogMXB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvRm9sZGVyQ29udGFpbmVyL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUiw0QkFBNEI7SUFDNUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTiw4QkFBOEI7SUFDOUIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0k7K0VBQzJFO0lBQzNFLHlDQUF5QztJQUN6QywwQ0FBMEM7SUFDMUMsc0NBQXNDO0lBQ3RDLHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2luQ2wtRm9sZGVyc01lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbkNsLUZvbGRlckl0ZW0ge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAycHg7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiAycHg7XFxyXFxuICAgIGdhcDogNHB4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWcpO1xcclxcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi53aW5DbC1Gb2xkZXJJdGVtOmFjdGl2ZSB7XFxyXFxuICAgIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1zaGFkb3ctMzAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbkNsLUZvbGRlcldyYXBwZXIge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi53aW5DbC1Db2x1bW5EZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWdyZXktMjAwKSBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi53aW5DbC1Db2x1bW5EZXNjcmlwdGlvbkl0ZW0ge1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMjAwKSBpbnNldDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zaGFkb3ctMzAwKSAxcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNoYWRvdy0zMDApIDFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLWdyZXktMjAwKSAxcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci10b3A6IHZhcigtLWdyZXktMjAwKSAxcHggc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktMjAwKTtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDRweDtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5WaWV3Q29udGFpbmVyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG5cclxuLlZpZXcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5WaWV3UmVzaXplSGFuZGxlTGVmdCB7XHJcbiAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcclxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uQ2xvc2VCYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAxcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9WaWV3Q29udGFpbmVyL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixRQUFRO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlZpZXdDb250YWluZXIge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4NXB4KTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5WaWV3UmVzaXplSGFuZGxlTGVmdCB7XFxyXFxuICAgIGN1cnNvcjogZXctcmVzaXplO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogNHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5DbG9zZUJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLldpbmRvd0NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvV2luZG93Q29udGVudC9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLldpbmRvd0NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5CdXR0b25JY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nLWJsb2NrOiAycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLWlubGluZTogOHB4O1xyXG59XHJcbi5CdXR0b25JY29uOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XHJcbn1cclxuLkJ1dHRvbkljb246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgY29sb3I6IHZhcigtLWdyZXktMzAwKTtcclxufVxyXG4uQnV0dG9uSWNvbl9faWNvbiB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uSWNvbi9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJOzZFQUN5RTtBQUM3RTtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5CdXR0b25JY29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDJweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA4cHg7XFxyXFxufVxcclxcbi5CdXR0b25JY29uOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXNuKSB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0LFxcclxcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0O1xcclxcbn1cXHJcXG4uQnV0dG9uSWNvbjpkaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyZXktMzAwKTtcXHJcXG59XFxyXFxuLkJ1dHRvbkljb25fX2ljb24ge1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWcpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDhweDtcclxufVxyXG4uQnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzbikgdmFyKC0tYm9yZGVyLXJhZGl1c24pIDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldCxcclxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XHJcbn1cclxuLkJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJOzZFQUN5RTtBQUM3RTtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDJweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiA4cHg7XFxyXFxufVxcclxcbi5CdXR0b246YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQ7XFxyXFxufVxcclxcbi5CdXR0b246ZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5LTMwMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkRpdmlkZXJWZXJ0aWNhbCB7XHJcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzKSAqIDIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZG93LTIwMCk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0LFxyXG4gICAgICAgIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggMHB4IHZhcigtLXNoYWRvdy0xMDApIGluc2V0O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0RpdmlkZXJWZXJ0aWNhbC9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMsbUNBQW1DO0lBQ25DOzZEQUN5RDtBQUM3RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuRGl2aWRlclZlcnRpY2FsIHtcXHJcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZG93LTIwMCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1yYWRpdXMpIDBweCAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzbikgMHB4IDBweCB2YXIoLS1zaGFkb3ctMTAwKSBpbnNldDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuSWNvbiB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5JY29uIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuSW5mb0JveCB7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy0xMDApO1xyXG4gICAgYm9yZGVyOiB2YXIoLS15ZWxsb3ctMjAwKSAxcHggc29saWQ7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSW5mb0JveC9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxtQ0FBbUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkluZm9Cb3gge1xcclxcbiAgICBtYXJnaW46IDhweDtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMTAwKTtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS15ZWxsb3ctMjAwKSAxcHggc29saWQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkxpbmsge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uTGluazphY3RpdmUge1xyXG4gICAgY29sb3I6IHB1cnBsZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbnB1dC9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkxpbmsge1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLkxpbms6YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuSW5wdXQge1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhdCk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nLWlubGluZTogNHB4O1xyXG4gICAgcGFkZGluZy1ibG9jazogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXHJcbiAgICAgICAgdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMHB4IHZhcigtLXNoYWRvdy0yMDApIGluc2V0LFxyXG4gICAgICAgIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1c24pICogMikgY2FsYyh2YXIoLS1ib3JkZXItcmFkaXVzbikgKiAyKSAwcHggdmFyKC0tZ3JleS0yMDApIGluc2V0LFxyXG4gICAgICAgIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKSBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMikgMHB4IHZhcigtLXNoYWRvdy0zMDApIGluc2V0O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0xpbmsvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUI7OztpR0FHNkY7QUFDakdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLklucHV0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmF0KTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogNHB4O1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLXJhZGl1c24pIHZhcigtLWJvcmRlci1yYWRpdXNuKSAwcHggdmFyKC0tc2hhZG93LTEwMCkgaW5zZXQsXFxyXFxuICAgICAgICB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwcHggdmFyKC0tc2hhZG93LTIwMCkgaW5zZXQsXFxyXFxuICAgICAgICBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXNuKSAqIDIpIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1c24pICogMikgMHB4IHZhcigtLWdyZXktMjAwKSBpbnNldCxcXHJcXG4gICAgICAgIGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cykgKiAyKSBjYWxjKHZhcigtLWJvcmRlci1yYWRpdXMpICogMikgMHB4IHZhcigtLXNoYWRvdy0zMDApIGluc2V0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5UZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZyk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3dlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9UZXh0L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5UZXh0IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVnKTtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImNvbnN0IFdCTkRfUkVRID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuY29uc3QgUk9PVF9QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvZm9sZGVyXCI7XHJcbmNvbnN0IEZJTEVfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L2ZpbGVcIjtcclxuY29uc3QgUFVCTElDX1BBVEggPSBXQk5EX1JFUSArIFwiL2ZpbGVzL2dldC9wdWJsaWNcIiArIFwiL3dlYmluZG93cy9wdWJsaWMvXCI7XHJcbmNvbnN0IEFTU0VUU19QQVRIID0gV0JORF9SRVEgKyBcIi9maWxlcy9nZXQvcHVibGljXCIgKyBcIi93ZWJpbmRvd3MvcHVibGljL0Fzc2V0cy9cIjtcclxuY29uc3QgSUNPTlNfUEFUSCA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L3B1YmxpY1wiICsgXCIvd2ViaW5kb3dzL3B1YmxpYy9Bc3NldHMvSWNvbnMvXCI7XHJcbmNvbnN0IEZJTEVTX1JFUSA9IFdCTkRfUkVRICsgXCIvZmlsZXMvZ2V0L2ZpbGVzL1wiO1xyXG5cclxuZXhwb3J0IHsgUFVCTElDX1BBVEgsIEFTU0VUU19QQVRILCBJQ09OU19QQVRILCBGSUxFX1BBVEgsIFJPT1RfUEFUSCwgRklMRVNfUkVRIH07XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaW5kb3dDb250ZW50KHByb3BzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiV2luZG93Q29udGVudFwiPntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuIiwiY2xhc3MgTGluZWFySGlzdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0UG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbaW5pdFBvc2l0aW9uXTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBuZXcgdmlzaXQgdG8gdGhlIGhpc3RvcnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHthbnl9IGFkZHJlc3MgLSBUaGUgbmV3IGFkZHJlc3MgdG8gYWRkIHRvIHRoZSBoaXN0b3J5LlxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgYWRkTmV3KGFkZHJlc3MpIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnkucHVzaChhZGRyZXNzKTtcclxuICAgICAgICB0aGlzLl9fY2xlYW5EdXBsaWNhdGVzKCk7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuaGlzdG9yeS5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR29lcyBiYWNrIG9uY2UgaW4gdGhlIGhpc3RvcnkgYW5kIHJldHVybnMgdGhhdCBwb2ludC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHt0eXBlfSBQb2ludCBpbiBoaXN0b3J5XHJcbiAgICAgKi9cclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmRleCA8PSAwKSByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgICAgICB0aGlzLmluZGV4LS07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdvZXMgZm9yd2FyZCBvbmNlIGluIHRoZSBoaXN0b3J5IGFuZCByZXR1cm5zIHRoYXQgcG9pbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7dHlwZX0gUG9pbnQgaW4gaGlzdG9yeVxyXG4gICAgICovXHJcbiAgICBnb0ZvcndhcmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPj0gdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDEpIHJldHVybiB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR29lcyB0byB0aGUgc3BlY2lmaWMgaW5kZXggaW4gaGlzdG9yeSBhbmQgcmV0dXJucyB0aGF0IHBvaW50LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3R5cGV9IFBvaW50IGluIGhpc3RvcnlcclxuICAgICAqL1xyXG4gICAgZ29Ub0luZGV4KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgcG9pbnQgaW4gaGlzdG9yeS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHt0eXBlfSBQb2ludCBpbiBoaXN0b3J5XHJcbiAgICAgKi9cclxuICAgIGdldEN1cnJlbnRQb2ludCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBwb3NzaWJsZSBuZXh0IGluZGV4IGluIGhpc3RvcnkuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7dHlwZX0gUG9pbnQgaW4gaGlzdG9yeVxyXG4gICAgICovXHJcbiAgICBnZXROZXh0SW5kZXgoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPj0gdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDEpIHJldHVybiB0aGlzLmluZGV4O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ICsgMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgcG9zc2libGUgcHJldmlvdXMgaW5kZXggaW4gaGlzdG9yeS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHt0eXBlfSBQb2ludCBpbiBoaXN0b3J5XHJcbiAgICAgKi9cclxuICAgIGdldFByZXZpb3VzSW5kZXgoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPD0gMCkgcmV0dXJuIHRoaXMuaW5kZXg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50IGluZGV4IGluIGhpc3RvcnkuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7dHlwZX0gUG9pbnQgaW4gaGlzdG9yeVxyXG4gICAgICovXHJcbiAgICBnZXRDdXJyZW50SW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgdGhlIHdob2xlIGhpc3RvcnkuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7dHlwZX0gUG9pbnQgaW4gaGlzdG9yeVxyXG4gICAgICovXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBfX2NsZWFuRHVwbGljYXRlcygpIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbLi4ubmV3IFNldCh0aGlzLmhpc3RvcnkpXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTGluZWFySGlzdG9yeSB9O1xyXG4iLCJpbXBvcnQgeyBST09UX1BBVEgsIEZJTEVTX1JFUSB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogR2V0IGRhdGEgYWJvdXQgdGhlIGZvbGRlciBhdCB0aGUgc3BlY2lmaWVkIGFkZHJlc3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIC0gVGhlIGFkZHJlc3Mgb2YgdGhlIGZvbGRlciB0byByZXF1ZXN0LlxyXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgSlNPTiByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Rm9sZGVyKGFkZHJlc3MpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2dlZEluVXNlclwiKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFJPT1RfUEFUSCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgICAgICAgcGF0aDogYWRkcmVzcyxcclxuICAgICAgICB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQuanNvbigpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGRhdGEgYWJvdXQgYWxsIGZpbGVzIGF0IHRoZSBzcGVjaWZpZWQgYWRkcmVzcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGFkZHJlc3MgLSBUaGUgYWRkcmVzcyBvZiB0aGUgZm9sZGVyIHRvIHJlcXVlc3QuXHJcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBKU09OIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RGaWxlcyhhZGRyZXNzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChGSUxFU19SRVEgKyBhZGRyZXNzLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlcXVlc3RGb2xkZXIsIHJlcXVlc3RGaWxlcyB9O1xyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb2xkZXJzTWVudShwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17cHJvcHMuaWR9IGNsYXNzTmFtZT1cIndpbkNsLUZvbGRlcnNNZW51XCI+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNPTlNfUEFUSCB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb2xkZXJJdGVtKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtRm9sZGVySXRlbVwiIG9uRGJsQ2xpY2s9e3Byb3BzLm9uRGJsQ2xpY2t9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e0lDT05TX1BBVEggKyBwcm9wcy5tZXRhZGF0YS5vdGhlci5pY29ufVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luQ2wtSWNvblwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNnB4XCIsIGhlaWdodDogXCIxNnB4XCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3Byb3BzLm1ldGFkYXRhLm5hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IElDT05TX1BBVEgsIEZJTEVfUEFUSCB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlSXRlbShwcm9wcykge1xyXG4gICAgaWYgKCFwcm9wcy5maWxlKSByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtRm9sZGVySXRlbVwiIG9uRGJsQ2xpY2s9e3Byb3BzLm9uRGJsQ2xpY2t9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiwgbWluV2lkdGg6IFwiMjAwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogXCI0cHhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5maWxlLndpdGhQcmV2aWV3ID8gRklMRV9QQVRIICsgcHJvcHMuZmlsZS5pY29uIDogSUNPTlNfUEFUSCArIHByb3BzLmZpbGUuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5DbC1JY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNnB4XCIsIGhlaWdodDogXCIxNnB4XCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZmlsZS5uYW1lICsgcHJvcHMuZmlsZS5leHRlbnNpb259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjUlXCIsIG1pbldpZHRoOiBcIjUwcHhcIiB9fT57cHJvcHMuZmlsZS5leHRlbnNpb259PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTUlXCIsIG1pbldpZHRoOiBcIjEwMHB4XCIgfX0+e3Byb3BzLmZpbGUub3duZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAlXCIsIG1pbldpZHRoOiBcIjE1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7KHByb3BzLmZpbGUuc2l6ZSAvIDEwMjQpLnRvRml4ZWQoMikgKyBcIiBLQlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sdW1uRGVzY3JpcHRpb24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1Db2x1bW5EZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uSXRlbVwiIHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiLCBtaW5XaWR0aDogXCIyMDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1Db2x1bW5EZXNjcmlwdGlvbkl0ZW1cIiBzdHlsZT17eyB3aWR0aDogXCI1JVwiLCBtaW5XaWR0aDogXCI1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBUeXBlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbkNsLUNvbHVtbkRlc2NyaXB0aW9uSXRlbVwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1JVwiLCBtaW5XaWR0aDogXCIxMDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgT3duZXJcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtQ29sdW1uRGVzY3JpcHRpb25JdGVtXCIgc3R5bGU9e3sgd2lkdGg6IFwiMjAlXCIsIG1pbldpZHRoOiBcIjE1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBTaXplXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgRm9sZGVyc01lbnUgZnJvbSBcIi4vRm9sZGVyc01lbnVcIjtcclxuaW1wb3J0IEZvbGRlckl0ZW0gZnJvbSBcIi4vRm9sZGVyc01lbnUvRm9sZGVySXRlbVwiO1xyXG5pbXBvcnQgRmlsZUl0ZW0gZnJvbSBcIi4vRm9sZGVyc01lbnUvRmlsZUl0ZW1cIjtcclxuaW1wb3J0IENvbHVtbkRlc2NyaXB0aW9uIGZyb20gXCIuL0ZvbGRlcnNNZW51L0NvbHVtbkRlc2NyaXB0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBGb2xkZXJDb250YWluZXIocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1Gb2xkZXJXcmFwcGVyXCI+e2NoaWxkcmVufTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IHsgRm9sZGVyQ29udGFpbmVyLCBGb2xkZXJzTWVudSwgRm9sZGVySXRlbSwgRmlsZUl0ZW0sIENvbHVtbkRlc2NyaXB0aW9uIH07XHJcbiIsImltcG9ydCB7XHJcbiAgICBGb2xkZXJzTWVudSxcclxuICAgIEZvbGRlckNvbnRhaW5lcixcclxuICAgIEZvbGRlckl0ZW0sXHJcbiAgICBGaWxlSXRlbSxcclxuICAgIENvbHVtbkRlc2NyaXB0aW9uLFxyXG59IGZyb20gXCJAd2ViaW5kb3dzL0ZvbGRlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBnb1RvLCBoaXN0b3J5IH0gZnJvbSBcIi4uL2hpc3RvcnlcIjtcclxuXHJcbmZ1bmN0aW9uIEZvbGRlcnNWaWV3KCkge1xyXG4gICAgcmV0dXJuIDxGb2xkZXJzTWVudSBpZD1cImlkX0ZpbGVFeHBsb3Jlcl9Gb2xkZXJzTWVudVwiIC8+O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVGb2xkZXJzTWVudShuZXdGb2xkZXJzLCBuZXdGaWxlcykge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfRmlsZUV4cGxvcmVyX0ZvbGRlcnNNZW51XCIpO1xyXG5cclxuICAgIHdoaWxlIChtZW51LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBtZW51LnJlbW92ZUNoaWxkKG1lbnUuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudS5hcHBlbmQoXHJcbiAgICAgICAgPEZvbGRlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENvbHVtbkRlc2NyaXB0aW9uIC8+XHJcbiAgICAgICAgICAgIHtuZXdGb2xkZXJzLmRhdGEubWFwKChjaGlsZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZvbGRlckl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YT17Y2hpbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25EYmxDbGljaz17KCkgPT4gZ29UbyhoaXN0b3J5LmdldEN1cnJlbnRQb2ludCgpICsgXCIvXCIgKyBjaGlsZC5uYW1lKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICB7bmV3RmlsZXMubWFwKChjaGlsZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZpbGVJdGVtIGZpbGU9e2NoaWxkfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L0ZvbGRlckNvbnRhaW5lcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEZvbGRlcnNWaWV3LCB1cGRhdGVGb2xkZXJzTWVudSB9O1xyXG4iLCJpbXBvcnQgeyBMaW5lYXJIaXN0b3J5IH0gZnJvbSBcIkB3ZWJpbmRvd3MvdXRpbHMvaGlzdG9yeS5qc1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0RmlsZXMsIHJlcXVlc3RGb2xkZXIgfSBmcm9tIFwiQHdlYmluZG93cy9jb25uZWN0L3JlcXVlc3RzLmpzXCI7XHJcbmltcG9ydCB7IHVwZGF0ZUZvbGRlcnNNZW51IH0gZnJvbSBcIi4vQXBwVmlld3MvRm9sZGVyc1ZpZXcuanNcIjtcclxuXHJcbmNvbnN0IGhpc3RvcnkgPSBuZXcgTGluZWFySGlzdG9yeShcIi9cIik7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnb1RvKGFkZHJlc3MpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9GaWxlRXhwbG9yZXJfQWRkcmVzc1wiKTtcclxuICAgIGNvbnN0IG5ld0ZvbGRlcnMgPSBhd2FpdCByZXF1ZXN0Rm9sZGVyKGFkZHJlc3MpO1xyXG4gICAgY29uc3QgZmlsZXMgPSBhd2FpdCByZXF1ZXN0RmlsZXMoYWRkcmVzcyk7XHJcblxyXG4gICAgaGlzdG9yeS5hZGROZXcoYWRkcmVzcyk7XHJcbiAgICBpbnB1dC52YWx1ZSA9IGFkZHJlc3M7XHJcblxyXG4gICAgdXBkYXRlRm9sZGVyc01lbnUobmV3Rm9sZGVycywgZmlsZXMpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnb1RvSGlzdG9yeShpbmRleCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkX0ZpbGVFeHBsb3Jlcl9BZGRyZXNzXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBoaXN0b3J5LmdvVG9JbmRleChpbmRleCk7XHJcbiAgICBjb25zdCBuZXdGb2xkZXJzID0gYXdhaXQgcmVxdWVzdEZvbGRlcihsb2NhdGlvbik7XHJcbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IHJlcXVlc3RGaWxlcyhsb2NhdGlvbik7XHJcblxyXG4gICAgaW5wdXQudmFsdWUgPSBsb2NhdGlvbjtcclxuXHJcbiAgICB1cGRhdGVGb2xkZXJzTWVudShuZXdGb2xkZXJzLCBmaWxlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvQmFjaygpIHtcclxuICAgIGdvVG9IaXN0b3J5KGhpc3RvcnkuZ2V0UHJldmlvdXNJbmRleCgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xyXG4gICAgZ29Ub0hpc3RvcnkoaGlzdG9yeS5nZXROZXh0SW5kZXgoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdvVG8sIGdvQmFjaywgZ29Gb3J3YXJkLCBoaXN0b3J5IH07XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtwcm9wcy5zcmN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJJY29uXCIgKyAocHJvcHMuY2xhc3NOYW1lID8gXCIgXCIgKyBwcm9wcy5jbGFzc05hbWUgOiBcIlwiKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9wcy5pc0dyZXkgPyBcImdyYXlzY2FsZSgxMDAlKVwiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IEljb24gZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvblwiO1xyXG5pbXBvcnQgeyBBU1NFVFNfUEFUSCB9IGZyb20gXCJAd2ViaW5kb3dzL2Nvbm5lY3QvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbG9zZUJhcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNsb3NlQmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpbkNsLUhhcmRPdXRzZXRTaGFkb3cgd2luQ2wtQkdDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxNnB4XCIgfX1cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2luQ2wtSGFyZE91dHNldFNoYWRvdyB3aW5DbC1CR0NvbG9yXCJcclxuICAgICAgICAgICAgICAgIHNyYz17QVNTRVRTX1BBVEggKyBcIi9JbWdfQnV0dG9uX0Nsb3NlLlBOR1wifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlVmlldyhpZCkge1xyXG4gICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGNvbnN0IHZpZXdXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHZpZXcpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKSk7XHJcbiAgICBjb25zdCBzdWJWaWV3cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJWaWV3XCIpO1xyXG4gICAgbGV0IHByZXZWaWV3O1xyXG4gICAgbGV0IHJlc2l6ZVZpZXc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN1YlZpZXdzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICBwcmV2VmlldyA9IHN1YlZpZXdzW2kgLSAxXTtcclxuICAgICAgICAgICAgcmVzaXplVmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYFZpZXdSZXNpemVIYW5kbGVMZWZ0YClbaSAtIDFdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcmV2Vmlld1dpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUocHJldlZpZXcpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKSk7XHJcbiAgICBwcmV2Vmlldy5zdHlsZS53aWR0aCA9IHByZXZWaWV3V2lkdGggKyB2aWV3V2lkdGggKyAxMiArIFwicHhcIjtcclxuXHJcbiAgICBpZiAocmVzaXplVmlldykgcmVzaXplVmlldy5yZW1vdmUoKTtcclxuICAgIGlmICh2aWV3KSB2aWV3LnJlbW92ZSgpO1xyXG59XHJcbiIsImltcG9ydCBDbG9zZUJhciBmcm9tIFwiLi4vQ2xvc2VCYXJcIjtcclxuaW1wb3J0IHJlbW92ZVZpZXcgZnJvbSBcIi4uL3JlbW92ZVZpZXdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXcocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3aW5DbC1IYXJkSW5zZXRTaGFkb3cgVmlld1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBwcm9wcy53aWR0aCB9fVxyXG4gICAgICAgICAgICBvbkNvbnRleHRtZW51PXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmlzQ2xvc2FibGUgJiYgPENsb3NlQmFyIG9uQ2xpY2s9eygpID0+IHJlbW92ZVZpZXcocHJvcHMuaWQpfSAvPn1cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCIvKipcclxuICogU3VidHJhY3RzIGEgdmFsdWUgZnJvbSBhbm90aGVyIHVudGlsIGxpbWl0LlxyXG4gKiBJZiBsaW1pdCBpcyBtZXQsIHRoZW4gc3VidHJhY3QgZnJvbSB2YWx1ZSB0aGUgcmVzdC5cclxuICogRGVmYXVsdCBsaW1pdCBpcyAxNTBcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHN1YnRyYWN0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbSAtIFRoZSB2YWx1ZSB0byBzdWJ0cmFjdCBmcm9tLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2xpbWl0PTE1MF0gLSBUaGUgbGltaXQgdG8gc3VidHJhY3QgZnJvbS5cclxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHggYW5kIHkgcmVwcmVzZW50aW5nIHRoZSBzdWJ0cmFjdGVkIHZhbHVlcy5cclxuICovXHJcbmZ1bmN0aW9uIHN1YnRyYWN0RnJvbSh2YWx1ZSwgZnJvbSwgbGltaXQgPSAxNTApIHtcclxuICAgIGxldCByZW1haW5pbmdGcm9tID0gZnJvbSAtIHZhbHVlO1xyXG4gICAgbGV0IHN1YnRyYWN0ZWRWYWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmIChyZW1haW5pbmdGcm9tIDwgbGltaXQpIHtcclxuICAgICAgICBjb25zdCB0b1N1YnRyYWN0ID0gdmFsdWUgLSBNYXRoLmFicyhsaW1pdCAtIGZyb20pO1xyXG4gICAgICAgIHJlbWFpbmluZ0Zyb20gPSBsaW1pdDtcclxuICAgICAgICBzdWJ0cmFjdGVkVmFsdWUgPSB2YWx1ZSAtIHRvU3VidHJhY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgeDogc3VidHJhY3RlZFZhbHVlLCB5OiByZW1haW5pbmdGcm9tIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFtcHMgYSB2YWx1ZSBiZXR3ZWVuIGFuIHVwcGVyIGFuZCBsb3dlciBib3VuZC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNsYW1wLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIGxvd2VyIGJvdW5kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIHVwcGVyIGJvdW5kLlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBjbGFtcGVkIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdWJ0cmFjdHMgYW4gZXF1YWwgc2hhcmUgZnJvbSBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IGJhc2VkIG9uIHRoZSB0b3RhbCB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHRvdGFsIHZhbHVlIHRvIHNwbGl0IGFtb25nIHRoZSBlbGVtZW50cy5cclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgYXJyYXkgb2YgdmFsdWVzIHRvIHN1YnRyYWN0IGZyb20uXHJcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbW9kaWZpZWQgYXJyYXkgYWZ0ZXIgc3VidHJhY3RpbmcgdGhlIGVxdWFsIHNoYXJlIGZyb20gZWFjaCBlbGVtZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gc3VidHJhY3RFcXVhbFNoYXJlKHZhbHVlLCBhcnJheSkge1xyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PSAwKSByZXR1cm4gYXJyYXk7XHJcbiAgICBjb25zdCBzaGFyZSA9IHZhbHVlIC8gYXJyYXkubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBhcnJheVtpXSAtIHNoYXJlO1xyXG4gICAgICAgIGFycmF5W2ldID0gTWF0aC5tYXgobmV3VmFsdWUsIDE1MCk7XHJcbiAgICAgICAgdmFsdWUgLT0gYXJyYXlbaV0gLSBuZXdWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgaWYgdHdvIG51bWJlcnMgYXJlIG5lYXJseSBlcXVhbCB3aXRoaW4gYSBzcGVjaWZpZWQgZXBzaWxvbiB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IG51bTEgLSBUaGUgZmlyc3QgbnVtYmVyIHRvIGNvbXBhcmUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW0yIC0gVGhlIHNlY29uZCBudW1iZXIgdG8gY29tcGFyZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtlcHNpbG9uPTFdIC0gVGhlIGFjY2VwdGFibGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBudW1iZXJzLlxyXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBudW1iZXJzIGFyZSBuZWFybHkgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXHJcbmZ1bmN0aW9uIG5lYXJseUVxdWFsKG51bTEsIG51bTIsIGVwc2lsb24gPSAxKSB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMobnVtMSAtIG51bTIpIDwgZXBzaWxvbjtcclxufVxyXG5cclxuZXhwb3J0IHsgc3VidHJhY3RGcm9tLCBjbGFtcCwgc3VidHJhY3RFcXVhbFNoYXJlLCBuZWFybHlFcXVhbCB9O1xyXG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XHJcbmltcG9ydCB7IHN1YnRyYWN0RnJvbSwgY2xhbXAgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWF0aFwiO1xyXG5cclxuLyoqXHJcbiAqIEFkZCBhIG5ldyB2aWV3IHRvIHRoZSB2aWV3IGNvbnRhaW5lci5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluaXRXaWR0aCAtIFRoZSBpbml0aWFsIHdpZHRoIG9mIHRoZSBuZXcgdmlldy5cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudCAtIFRoZSBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgbmV3IHZpZXcuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDbG9zYWJsZSAtIEluY2x1ZGUgYSBidXR0b24gdG8gY2xvc2UgdGhlIHZpZXcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRWaWV3KGluaXRXaWR0aCwgY29udGVudCwgaXNDbG9zYWJsZSA9IHRydWUpIHtcclxuICAgIGNvbnN0IHN1YldpbmRvd1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld0NvbnRhaW5lclwiKVswXTtcclxuICAgIGNvbnN0IHN1YldpbmRvd3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiVmlld1wiKTtcclxuICAgIGNvbnN0IHJlc2l6ZUhhbmRsZUxlZnQgPSA8ZGl2IGNsYXNzTmFtZT1cIlZpZXdSZXNpemVIYW5kbGVMZWZ0XCI+PC9kaXY+O1xyXG4gICAgY29uc3Qgd2luZG93V2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgbGV0IGRlc2lyZWRXaWR0aCA9IChwYXJzZUludChpbml0V2lkdGgpICogd2luZG93V2lkdGgpIC8gMTAwO1xyXG4gICAgaWYgKHN1YldpbmRvd3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IGxhc3RXaW5kb3cgPSBzdWJXaW5kb3dzW3N1YldpbmRvd3MubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgY29uc3QgbGFzdFdpbmRvd1dpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobGFzdFdpbmRvdykuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuICAgICAgICBpZiAobGFzdFdpbmRvd1dpZHRoIDwgMTc1KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBzdWJ0cmFjdEZyb20oZGVzaXJlZFdpZHRoLCBsYXN0V2luZG93V2lkdGgpO1xyXG4gICAgICAgIGRlc2lyZWRXaWR0aCA9IHg7XHJcbiAgICAgICAgbGFzdFdpbmRvdy5zdHlsZS53aWR0aCA9IHkgLSA0ICsgXCJweFwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaWQgPSBgaWRfVmlld18ke3N1YldpbmRvd3MubGVuZ3RoICsgMX1gO1xyXG4gICAgY29uc3QgbmV3U3ViV2luZG93ID0gPFZpZXcgaWQ9e2lkfSB3aWR0aD17ZGVzaXJlZFdpZHRoIC0gOCArIFwicHhcIn0gaXNDbG9zYWJsZT17aXNDbG9zYWJsZX0+PC9WaWV3PjtcclxuXHJcbiAgICBpZiAoc3ViV2luZG93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc3ViV2luZG93V3JhcHBlci5hcHBlbmQocmVzaXplSGFuZGxlTGVmdCk7XHJcbiAgICB9XHJcbiAgICBuZXdTdWJXaW5kb3cuYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgc3ViV2luZG93V3JhcHBlci5hcHBlbmQobmV3U3ViV2luZG93KTtcclxuXHJcbiAgICByZXNpemVIYW5kbGVMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN1YlZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlZpZXdcIik7XHJcbiAgICAgICAgbGV0IHN1YldpbmRvd0N1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaWRfVmlld18ke3N1YldpbmRvd3MubGVuZ3RoIC0gMX1gKTtcclxuICAgICAgICBsZXQgc3ViV2luZG93TmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpZF9WaWV3XyR7c3ViV2luZG93cy5sZW5ndGh9YCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3ViVmlld3NbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJXaW5kb3dDdXJyZW50ID0gc3ViVmlld3NbaSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgc3ViV2luZG93TmV4dCA9IHN1YlZpZXdzW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2F2ZWRXaWR0aEN1cnJlbnQgPSBwYXJzZUludChcclxuICAgICAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViV2luZG93Q3VycmVudCkuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzYXZlZFdpZHRoTmV4dCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN1YldpbmRvd05leHQpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoRGlmZiA9IGUuY2xpZW50WCAtIChzdWJXaW5kb3dDdXJyZW50Lm9mZnNldExlZnQgKyBzYXZlZFdpZHRoQ3VycmVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0N1cnJlbnRXaWR0aCA9IGNsYW1wKFxyXG4gICAgICAgICAgICAgICAgc2F2ZWRXaWR0aEN1cnJlbnQgKyB3aWR0aERpZmYsXHJcbiAgICAgICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgICAgIHNhdmVkV2lkdGhDdXJyZW50ICsgc2F2ZWRXaWR0aE5leHQgLSA1MFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOZXh0V2lkdGggPSBjbGFtcChcclxuICAgICAgICAgICAgICAgIHNhdmVkV2lkdGhOZXh0IC0gd2lkdGhEaWZmLFxyXG4gICAgICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgICAgICBzYXZlZFdpZHRoQ3VycmVudCArIHNhdmVkV2lkdGhOZXh0IC0gNTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3ViV2luZG93Q3VycmVudC5zdHlsZS53aWR0aCA9IG5ld0N1cnJlbnRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgc3ViV2luZG93TmV4dC5zdHlsZS53aWR0aCA9IG5ld05leHRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XHJcbmltcG9ydCBhZGRWaWV3IGZyb20gXCIuL2FkZFZpZXdcIjtcclxuXHJcbmZ1bmN0aW9uIFZpZXdDb250YWluZXIocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJWaWV3Q29udGFpbmVyXCI+e2NoaWxkcmVufTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IHsgVmlldywgYWRkVmlldywgVmlld0NvbnRhaW5lciB9O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25CYXIocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQnV0dG9uQmFyXCIgc3R5bGU9e3sgZ2FwOiBwcm9wcz8uZ2FwID8/IFwiNHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luQ2wtRGl2aWRlckJpZ1ZlcnRpY2FsXCIgc3R5bGU9XCJoZWlnaHQ6IDIycHg7IG1hcmdpbi1ibG9jazogMnB4XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IEJ1dHRvbkJhciBmcm9tIFwiLi9CdXR0b25CYXJcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbkJhckNvbnRhaW5lcihwcm9wcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5DbC1IYXJkSW5zZXRTaGFkb3dcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PntjaGlsZH08L2Rpdj47XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgQnV0dG9uQmFyLCBCdXR0b25CYXJDb250YWluZXIgfTtcclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJ1dHRvblwiIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uSWNvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJ1dHRvbkljb25cIiBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvbkljb25fX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZmlsdGVyOiBwcm9wcy5pc0dyZXkgPyBcImdyYXlzY2FsZSgxMDAlKVwiIDogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwid2luQ2wtVGV4dFwiPntwcm9wcy50ZXh0fTwvcD47XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpdmlkZXJWZXJ0aWNhbChwcm9wcykge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiRGl2aWRlclZlcnRpY2FsXCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5oZWlnaHQgfX0+PC9kaXY+O1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJJbnB1dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogcHJvcHMud2lkdGggfX1cclxuICAgICAgICAgICAgb25JbnB1dD17cHJvcHMub25JbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0xpc3QocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwT3ZlcnZpZXdfX1NlZUFsc29cIj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiB9fT57cHJvcHMudGV4dH08L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJBcHBPdmVydmlld19fU2VlQWxzb0xpc3RcIj57Y2hpbGRyZW59PC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwT3ZlcnZpZXdJbWFnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIDxpbWcgc3JjPXtwcm9wcy5zcmN9IHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIgfX0gLz47XHJcbn1cclxuXHJcbi8vQVNTRVRTX1BBVEggKyBcIkZpbGVFeHBsb3Jlci5wbmdcIlxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0Rlc2NyaXB0aW9uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjE0cHhcIiwgbWluV2lkdGg6IFwiMTUwcHhcIiB9fT57cHJvcHMudGV4dH08L3A+O1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIkxpbmtcIiBocmVmPXtwcm9wcy5ocmVmfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9MaW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBPdmVydmlld0xpbmsocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIkFwcE92ZXJ2aWV3X19TZWVBbHNvTGlzdEl0ZW1cIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvcHMudG99IHRleHQ9e3Byb3BzLnRleHR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3TGlzdCBmcm9tIFwiLi9BcHBPdmVydmlld0xpc3RcIjtcclxuaW1wb3J0IEFwcE92ZXJ2aWV3SW1hZ2UgZnJvbSBcIi4vQXBwT3ZlcnZpZXdJbWFnZVwiO1xyXG5pbXBvcnQgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiBmcm9tIFwiLi9BcHBPdmVydmlld0Rlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBBcHBPdmVydmlld0xpbmsgZnJvbSBcIi4vQXBwT3ZlcnZpZXdMaXN0L0FwcE92ZXJ2aWV3TGlua1wiO1xyXG5cclxuZnVuY3Rpb24gQXBwT3ZlcnZpZXcocHJvcHMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJBcHBPdmVydmlld1wiPntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFwcE92ZXJ2aWV3TGlzdCwgQXBwT3ZlcnZpZXdJbWFnZSwgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiwgQXBwT3ZlcnZpZXcsIEFwcE92ZXJ2aWV3TGluayB9O1xyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb0JveChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkluZm9Cb3hcIiBzdHlsZT17eyB3aWR0aDogcHJvcHMud2lkdGggfX0+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy50ZXh0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIEFwcE92ZXJ2aWV3LFxyXG4gICAgQXBwT3ZlcnZpZXdMaW5rLFxyXG4gICAgQXBwT3ZlcnZpZXdMaXN0LFxyXG4gICAgQXBwT3ZlcnZpZXdEZXNjcmlwdGlvbixcclxuICAgIEFwcE92ZXJ2aWV3SW1hZ2UsXHJcbn0gZnJvbSBcIkB3ZWJpbmRvd3MvQXBwT3ZlcnZpZXdcIjtcclxuaW1wb3J0IHsgQVNTRVRTX1BBVEggfSBmcm9tIFwiQHdlYmluZG93cy9jb25uZWN0L2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiLi4vLi4vd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0luZm9Cb3hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVFeHBsb3Jlck92ZXJ2aWV3KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwT3ZlcnZpZXc+XHJcbiAgICAgICAgICAgIDxBcHBPdmVydmlld0ltYWdlIHNyYz17YCR7QVNTRVRTX1BBVEh9L0ZpbGVFeHBsb3Jlci5wbmdgfSAvPlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdEZXNjcmlwdGlvbiB0ZXh0PVwiU2VsZWN0IGFuIGl0ZW0gdG8gdmlldyBpdHMgZGVzY3JpcHRpb24uXCIgLz5cclxuICAgICAgICAgICAgPEluZm9Cb3ggdGV4dD1cIk5vdCBmdWxseSBmdW5jdGlvbmFsLlwiIHdpZHRoPVwiMjUwcHhcIiAvPlxyXG4gICAgICAgICAgICA8QXBwT3ZlcnZpZXdMaXN0IHRleHQ9XCJTZWUgYWxzbzpcIj5cclxuICAgICAgICAgICAgICAgIDxBcHBPdmVydmlld0xpbmsgdGV4dD1cIlB1YmxpY1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8QXBwT3ZlcnZpZXdMaW5rIHRleHQ9XCJBc3NldHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEFwcE92ZXJ2aWV3TGluayB0ZXh0PVwiSWNvbnNcIiAvPlxyXG4gICAgICAgICAgICA8L0FwcE92ZXJ2aWV3TGlzdD5cclxuICAgICAgICA8L0FwcE92ZXJ2aWV3PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBJQ09OU19QQVRIIH0gZnJvbSBcIkB3ZWJpbmRvd3MvY29ubmVjdC9jb25zdGFudHNcIjtcclxuaW1wb3J0IFdpbmRvd0NvbnRlbnQgZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9XaW5kb3dDb250ZW50XCI7XHJcbmltcG9ydCB7IGdvVG8sIGdvQmFjaywgZ29Gb3J3YXJkIH0gZnJvbSBcIi4vaGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyLCBhZGRWaWV3IH0gZnJvbSBcIkB3ZWJpbmRvd3MvVmlld3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uQmFyQ29udGFpbmVyLCBCdXR0b25CYXIgfSBmcm9tIFwiQHdlYmluZG93cy9CdXR0b25CYXJzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBCdXR0b25JY29uIGZyb20gXCJAd2ViaW5kb3dzL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbkljb25cIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vSWNvblwiO1xyXG5pbXBvcnQgVGV4dCBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9UZXh0XCI7XHJcbmltcG9ydCBEaXZpZGVyVmVydGljYWwgZnJvbSBcIkB3ZWJpbmRvd3MvY29tcG9uZW50cy9jb21tb24vRGl2aWRlclZlcnRpY2FsXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQHdlYmluZG93cy9jb21wb25lbnRzL2NvbW1vbi9JbnB1dFwiO1xyXG5pbXBvcnQgeyBGb2xkZXJzVmlldyB9IGZyb20gXCIuL0FwcFZpZXdzL0ZvbGRlcnNWaWV3XCI7XHJcbmltcG9ydCBGaWxlRXhwbG9yZXJPdmVydmlldyBmcm9tIFwiLi9BcHBWaWV3cy9GaWxlRXhwbG9yZXJPdmVydmlld1wiO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XHJcbiAgICBsZXQgYWRkcmVzcyA9IFwiL1wiO1xyXG4gICAgcm9vdC5hcHBlbmQoXHJcbiAgICAgICAgPFdpbmRvd0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uQmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkZpbGVcIiBkaXNhYmxlZD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiRWRpdFwiIGRpc2FibGVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJWaWV3XCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiRXh0cmFcIiBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCI/XCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbkJhcj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25CYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtJQ09OU19QQVRIfS9wcm9nbWFuLmV4ZV8xNF8xNDMuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JleT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29CYWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0lDT05TX1BBVEh9L3Byb2dtYW4uZXhlXzE0XzE0NC5pY29gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiRm9yd2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb0ZvcndhcmQoKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SUNPTlNfUEFUSH0vd2ViY2hlY2suZGxsXzE0XzExNC5pY29gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyZXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXJWZXJ0aWNhbCBoZWlnaHQ9XCIyMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSWNvbiBzcmM9e2Ake0lDT05TX1BBVEh9L2hvbWUucG5nYH0gdGV4dD1cIkhvbWVcIiBpc0dyZXk9e3RydWV9IGRpc2FibGVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0lDT05TX1BBVEh9L2V4cGxvcmVyLmV4ZV8xNF8xMDEuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JleT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtJQ09OU19QQVRIfS9zaGVsbDMyLmRsbF8xNF80Lmljb2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJGb2xkZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0lDT05TX1BBVEh9L3NubXBzbmFwLmRsbF8xNF82NTA0Lmljb2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlclZlcnRpY2FsIGhlaWdodD1cIjIwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SUNPTlNfUEFUSH0vc3luY3VpLmRsbF8xNF8xMjYuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SUNPTlNfUEFUSH0vc3luY3VpLmRsbF8xNF8xMjcuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcmV5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7SUNPTlNfUEFUSH0vY29tcHN0dWkuZGxsXzE0XzY0MDAzLmljb2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JleT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uQmFyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbkJhciBnYXA9XCI0cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0PVwiQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaWRfRmlsZUV4cGxvcmVyX0FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklucHV0IGFkZHJlc3MuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtJQ09OU19QQVRIfS9wcm9nbWFuLmV4ZV8xNF8xNDQuaWNvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkdvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyZXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvVG8oYWRkcmVzcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uQmFyPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFZpZXdDb250YWluZXIgLz5cclxuICAgICAgICA8L1dpbmRvd0NvbnRlbnQ+XHJcbiAgICApO1xyXG5cclxuICAgIGFkZFZpZXcoXCIyNSVcIiwgPEZpbGVFeHBsb3Jlck92ZXJ2aWV3IC8+LCBmYWxzZSk7XHJcbiAgICBhZGRWaWV3KFwiNzUlXCIsIDxGb2xkZXJzVmlldyAvPiwgZmFsc2UpO1xyXG5cclxuICAgIGdvVG8oYWRkcmVzcyk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkVmlldyhcIjI1JVwiLCA8RmlsZUV4cGxvcmVyT3ZlcnZpZXcgLz4pO1xyXG59KTtcclxuXHJcbmluaXQoKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJwcm9wcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjaGlsZHJlbiIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwiY29uY2F0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJ2YWx1ZSIsInN0YXJ0c1dpdGgiLCJ0b0xvd2VyQ2FzZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJfdHlwZW9mIiwia2V5cyIsInByb3BOYW1lIiwicHJvcFZhbHVlIiwic3R5bGUiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ0b1N0cmluZyIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnQiLCJpc0FycmF5IiwibmVzdGVkQ2hpbGQiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwiV0JORF9SRVEiLCJST09UX1BBVEgiLCJGSUxFX1BBVEgiLCJQVUJMSUNfUEFUSCIsIkFTU0VUU19QQVRIIiwiSUNPTlNfUEFUSCIsIkZJTEVTX1JFUSIsIldpbmRvd0NvbnRlbnQiLCJjbGFzc05hbWUiLCJMaW5lYXJIaXN0b3J5IiwiaW5pdFBvc2l0aW9uIiwiX2NsYXNzQ2FsbENoZWNrIiwiaGlzdG9yeSIsImluZGV4IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiYWRkTmV3IiwiYWRkcmVzcyIsInB1c2giLCJfX2NsZWFuRHVwbGljYXRlcyIsImdvQmFjayIsImdvRm9yd2FyZCIsImdvVG9JbmRleCIsImdldEN1cnJlbnRQb2ludCIsImdldE5leHRJbmRleCIsImdldFByZXZpb3VzSW5kZXgiLCJnZXRDdXJyZW50SW5kZXgiLCJjbGVhciIsIl90b0NvbnN1bWFibGVBcnJheSIsIlNldCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiZXJyIiwidW5kZWZpbmVkIiwicmVxdWVzdEZvbGRlciIsIl94IiwiX3JlcXVlc3RGb2xkZXIiLCJfY2FsbGVlIiwidXNlciIsInJlc3VsdCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXRoIiwianNvbiIsInJlcXVlc3RGaWxlcyIsIl94MiIsIl9yZXF1ZXN0RmlsZXMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIkZvbGRlcnNNZW51IiwiaWQiLCJGb2xkZXJJdGVtIiwib25EYmxDbGljayIsInNyYyIsIm1ldGFkYXRhIiwib3RoZXIiLCJpY29uIiwid2lkdGgiLCJoZWlnaHQiLCJGaWxlSXRlbSIsImZpbGUiLCJtaW5XaWR0aCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwid2l0aFByZXZpZXciLCJleHRlbnNpb24iLCJvd25lciIsInNpemUiLCJ0b0ZpeGVkIiwiQ29sdW1uRGVzY3JpcHRpb24iLCJGb2xkZXJDb250YWluZXIiLCJnb1RvIiwiRm9sZGVyc1ZpZXciLCJ1cGRhdGVGb2xkZXJzTWVudSIsIm5ld0ZvbGRlcnMiLCJuZXdGaWxlcyIsIm1lbnUiLCJnZXRFbGVtZW50QnlJZCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImFwcGVuZCIsImRhdGEiLCJtYXAiLCJfZ29UbyIsImlucHV0IiwiZmlsZXMiLCJnb1RvSGlzdG9yeSIsIl9nb1RvSGlzdG9yeSIsImxvY2F0aW9uIiwiSWNvbiIsImZpbHRlciIsImlzR3JleSIsIm9uQ2xpY2siLCJDbG9zZUJhciIsInJlbW92ZVZpZXciLCJ2aWV3Iiwidmlld1dpZHRoIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInN1YlZpZXdzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByZXZWaWV3IiwicmVzaXplVmlldyIsInByZXZWaWV3V2lkdGgiLCJyZW1vdmUiLCJWaWV3Iiwib25Db250ZXh0bWVudSIsInByZXZlbnREZWZhdWx0IiwiaXNDbG9zYWJsZSIsInN1YnRyYWN0RnJvbSIsImZyb20iLCJsaW1pdCIsInJlbWFpbmluZ0Zyb20iLCJzdWJ0cmFjdGVkVmFsdWUiLCJ0b1N1YnRyYWN0IiwiTWF0aCIsImFicyIsIngiLCJjbGFtcCIsIm1pbiIsIm1heCIsInN1YnRyYWN0RXF1YWxTaGFyZSIsImFycmF5Iiwic2hhcmUiLCJuZXdWYWx1ZSIsIm5lYXJseUVxdWFsIiwibnVtMSIsIm51bTIiLCJlcHNpbG9uIiwiYWRkVmlldyIsImluaXRXaWR0aCIsImNvbnRlbnQiLCJzdWJXaW5kb3dXcmFwcGVyIiwic3ViV2luZG93cyIsInJlc2l6ZUhhbmRsZUxlZnQiLCJ3aW5kb3dXaWR0aCIsImNsaWVudFdpZHRoIiwiZGVzaXJlZFdpZHRoIiwibGFzdFdpbmRvdyIsImxhc3RXaW5kb3dXaWR0aCIsIl9zdWJ0cmFjdEZyb20iLCJuZXdTdWJXaW5kb3ciLCJzdWJXaW5kb3dDdXJyZW50Iiwic3ViV2luZG93TmV4dCIsInNhdmVkV2lkdGhDdXJyZW50Iiwic2F2ZWRXaWR0aE5leHQiLCJ3aWR0aERpZmYiLCJjbGllbnRYIiwib2Zmc2V0TGVmdCIsIm5ld0N1cnJlbnRXaWR0aCIsIm5ld05leHRXaWR0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJWaWV3Q29udGFpbmVyIiwiQnV0dG9uQmFyIiwiX3Byb3BzJGdhcCIsIkJ1dHRvbkJhckNvbnRhaW5lciIsIkJ1dHRvbiIsInRleHQiLCJCdXR0b25JY29uIiwiVGV4dCIsIkRpdmlkZXJWZXJ0aWNhbCIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJvbklucHV0IiwiQXBwT3ZlcnZpZXdMaXN0IiwiQXBwT3ZlcnZpZXdJbWFnZSIsIkFwcE92ZXJ2aWV3RGVzY3JpcHRpb24iLCJtYXJnaW4iLCJMaW5rIiwiaHJlZiIsIkFwcE92ZXJ2aWV3TGluayIsInRvIiwiQXBwT3ZlcnZpZXciLCJJbmZvQm94IiwiRmlsZUV4cGxvcmVyT3ZlcnZpZXciLCJpbml0Iiwicm9vdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==