/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --c0: #2b3a55;\n  --c1: #ce7777;\n  --c2: #e8c4c4;\n  --c3: #f2e5e5;\n\n  padding: 0;\n  margin: 0;\n\n  --vPad: 94px;\n  --hPad: 95px;\n  --main-gap: 1rem;\n  --content-gap: 3.4rem;\n  --social-media-gap: 20px;\n  --project-width: 450px;\n  scroll-behavior: smooth;\n}\na {\n  color: var(--c3);\n  text-decoration: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  padding: 0;\n  margin: 0;\n  background-color: var(--c0);\n  color: var(--c3);\n  display: flex;\n  justify-content: center;\n}\n.main {\n  display: flex;\n  gap: var(--main-gap);\n  padding: 0 var(--hPad);\n  margin: 0;\n  border: none;\n}\nheader {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: sticky;\n  top: 0;\n  max-height: 100vh;\n  box-sizing: border-box;\n  padding: var(--vPad) 0;\n}\nheader ul.social-media {\n  display: flex;\n  gap: var(--social-media-gap);\n}\nheader svg {\n  fill: var(--c2);\n  height: 32px;\n  width: 32px;\n}\nheader h2 {\n  color: var(--c2);\n}\nheader h5 {\n  margin-top: 20px;\n  width: 50ch;\n}\nheader p {\n  width: 50ch;\n  margin-top: 16px;\n  margin-bottom: 0px;\n  font-weight: 300;\n  font-size: 14px;\n}\nheader nav {\n  margin-top: 60px;\n  font-weight: 300;\n  font-size: 0.9rem;\n  line-height: 2;\n}\nheader nav a {\n  display: flex;\n  align-items: center;\n}\n.nav-prefix {\n  display: inline-block;\n  width: 2rem;\n  background-color: var(--c3);\n  height: 0.9px;\n  margin-right: 0.8rem;\n}\n.active-a span {\n  font-weight: bold;\n  color: var(--c1);\n}\n.active-a .nav-prefix {\n  background-color: var(--c1);\n  width: 3.4rem;\n  height: 2px;\n}\n\n.content {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: var(--vPad) 0;\n}\n.content * {\n  margin: 0;\n}\n\n.project {\n  width: var(--project-width);\n  aspect-ratio: 16/9;\n  position: relative;\n  overflow: hidden;\n  border-radius: 6px;\n}\n.project img {\n  border-radius: 6px;\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n}\n\n.project .description {\n  background: linear-gradient(0deg, var(--c1) 80%, transparent);\n  display: flex;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  justify-content: flex-end;\n  flex-direction: column;\n  padding-left: var(--main-gap);\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transform: translateY(+100%);\n  transition: transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1), opacity 0.9s;\n}\n\n.project .description::after {\n  content: \"\";\n  opacity: 0;\n  position: absolute;\n  bottom: 0px;\n  width: 50%;\n  height: 1px;\n  background: linear-gradient(transparent, var(--c3), transparent);\n  animation: 2s coolBorder infinite alternate-reverse;\n}\n@keyframes coolBorder {\n  0% {\n    opacity: 0;\n    left: 0%;\n  }\n  50% {\n    opacity: 1;\n    left: 25%;\n  }\n  100% {\n    opacity: 0;\n    left: 100%;\n  }\n}\n.project .description h4 {\n  color: var(--c0);\n  display: flex;\n}\n.project .description h4 svg {\n  fill: var(--c0);\n  height: 16px;\n  width: 16px;\n  align-self: flex-end;\n  padding-left: 4px;\n  transition: transform 0.8s linear;\n}\n.project .description h4:hover svg {\n  transform: translate(3px, -3px) scale(1.1);\n}\n.project:hover .description {\n  transform: translateY(0);\n  opacity: 1;\n}\n.project p {\n  margin: 0 0 1rem 0;\n}\n.project .technologies {\n  margin: 0;\n  padding: 0 0 1rem 0;\n  display: flex;\n  gap: 1rem;\n  overflow-x: auto;\n}\n.project .technologies span {\n  border: none;\n  outline: none;\n  background-color: var(--c2);\n  color: var(--c0);\n  border-radius: 6px;\n  padding: 3px 10px;\n}\n.project h4 {\n  margin: 0 0 1.1rem 0;\n}\n.content section {\n  width: 50ch;\n  margin-top: var(--content-gap);\n}\n.content section .title {\n  align-self: flex-start;\n  margin-bottom: 2rem;\n}\nsection#about {\n  line-height: 1.7rem;\n  margin-top: 0;\n  display: flex;\n  flex-direction: column;\n}\nsection#projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nsection#projects .project {\n  margin-bottom: 3rem;\n}\nsection#contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 1.6rem;\n}\n\n#email {\n  outline: none;\n  color: var(--c2);\n  border: 2px solid var(--c2);\n  font-size: 1.1rem;\n  padding: 0.7em 1.7rem;\n  border-radius: 6px;\n}\n#email:hover {\n  transform: translate(-4px, -4px);\n  box-shadow: 4px 4px 0px var(--c2);\n}\n\n#email:active {\n  transform: translate(2px, 2px);\n  box-shadow: 2px 2px 0px var(--c2);\n}\n\n@media (max-width: 1070px) {\n  :root {\n    --hPad: 30px;\n  }\n}\n@media (max-width: 940px) {\n  :root {\n    --hPad: 2rem;\n    --project-width: 45ch;\n  }\n  header {\n    width: 45%;\n  }\n  .content {\n    width: 55%;\n  }\n  .content section {\n    width: 45ch;\n  }\n}\n@media (max-width: 870px) {\n  .main {\n    flex-direction: column;\n    padding: 0;\n  }\n  header,\n  .content {\n    width: 100%;\n    position: static;\n  }\n  header {\n    padding: var(--vPad) var(--hPad) 0 var(--hPad);\n    padding-bottom: 0px;\n  }\n  body {\n    display: block;\n  }\n  .content section {\n    width: 85%;\n  }\n  :root {\n    --project-width: 80%;\n  }\n  .project .description {\n    background: linear-gradient(0deg, var(--c1) 70%, transparent);\n    font-size: clamp(8px, 2.2vw, 1rem);\n  }\n  .project .description a {\n    font-size: 0.9rem;\n  }\n}\n\n@media (max-width: 480px) {\n  :root {\n    --project-width: 210px;\n    --hPad: 12px;\n    --vPad: 3rem;\n  }\n  .project {\n    aspect-ratio: 9/16;\n  }\n  .project .technologies {\n    flex-wrap: wrap;\n    gap: 0.4rem;\n  }\n  .main header * {\n    width: auto;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://homepage/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://homepage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://homepage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://homepage/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _src_images_weather_app_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/weather-app.jpg */ \"./src/images/weather-app.jpg\");\n/* harmony import */ var _src_images_weather_app_ph_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/weather-app-ph.jpg */ \"./src/images/weather-app-ph.jpg\");\n/* harmony import */ var _src_images_todo_app_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/todo-app.jpg */ \"./src/images/todo-app.jpg\");\n/* harmony import */ var _src_images_todo_app_ph_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/images/todo-app-ph.jpg */ \"./src/images/todo-app-ph.jpg\");\n/* harmony import */ var _src_images_battleship_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/images/battleship.jpg */ \"./src/images/battleship.jpg\");\n/* harmony import */ var _src_images_battleship_ph_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/images/battleship-ph.jpg */ \"./src/images/battleship-ph.jpg\");\n/* harmony import */ var _src_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/images/restaurant.jpg */ \"./src/images/restaurant.jpg\");\n/* harmony import */ var _src_images_restaurant_ph_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/images/restaurant-ph.jpg */ \"./src/images/restaurant-ph.jpg\");\n\n\n\n\n\n\n\n\n\n\nconst sections = document.querySelectorAll(\".content section\");\nconst about = document.querySelector(\"a[href='#about']\");\nconst projects = document.querySelector(\"a[href='#projects']\");\nconst contact = document.querySelector(\"a[href='#contact']\");\n\nconst weather_app_image = document.querySelector(\n  '.project[name=\"weather-app\"] img'\n);\nconst todo_app_image = document.querySelector('.project[name=\"todo\"] img');\nconst battleship_app_image = document.querySelector(\n  '.project[name=\"battleship\"] img'\n);\nconst restaurant_page_app_image = document.querySelector(\n  '.project[name=\"restaurant-page\"] img'\n);\n\nlet freshUl = document.createElement(\"ul\");\nfreshUl.innerHTML = `\n<li class=\"about-li\"></li>\n<li class=\"projects-li\"></li>\n<li class=\"contact-li\"></li>\n`;\nconst navLinks = [about, projects, contact];\n\nfunction highlightActiveLink() {\n  const scrollPosition = window.scrollY + 50;\n  const atBottom =\n    window.innerHeight + scrollPosition >= document.body.offsetHeight;\n  sections.forEach((section, index) => {\n    const sectionTop = section.offsetTop;\n    const sectionHeight = section.clientHeight;\n\n    if (\n      (scrollPosition >= sectionTop &&\n        scrollPosition < sectionTop + sectionHeight) ||\n      (atBottom && index == sections.length - 1)\n    ) {\n      navLinks.forEach((link) => link.classList.remove(\"active-a\"));\n      navLinks[index].classList.add(\"active-a\");\n    }\n  });\n}\n\nfunction displayAtBreakPoint() {\n  if (window.innerWidth <= 870) {\n    document.querySelector(\"header nav ul\").remove();\n    document.querySelector(\"section#about .title\").appendChild(about);\n    document.querySelector(\"section#projects .title\").appendChild(projects);\n    document.querySelector(\"section#contact .title\").appendChild(contact);\n  } else {\n    document.querySelector(\"header nav\").append(freshUl);\n    document.querySelector(\"li.about-li\").append(about);\n    document.querySelector(\"li.projects-li\").append(projects);\n    document.querySelector(\"li.contact-li\").append(contact);\n  }\n  if (window.innerWidth <= 480) {\n    todo_app_image.src = _src_images_todo_app_ph_jpg__WEBPACK_IMPORTED_MODULE_4__;\n    weather_app_image.src = _src_images_weather_app_ph_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    battleship_app_image.src = _src_images_battleship_ph_jpg__WEBPACK_IMPORTED_MODULE_6__;\n    restaurant_page_app_image.src = _src_images_restaurant_ph_jpg__WEBPACK_IMPORTED_MODULE_8__;\n  } else {\n    todo_app_image.src = _src_images_todo_app_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    weather_app_image.src = _src_images_weather_app_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    battleship_app_image.src = _src_images_battleship_jpg__WEBPACK_IMPORTED_MODULE_5__;\n    restaurant_page_app_image.src = _src_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_7__;\n  }\n}\ndisplayAtBreakPoint();\nwindow.addEventListener(\"scroll\", highlightActiveLink);\nwindow.addEventListener(\"resize\", displayAtBreakPoint);\nconsole.log(\"Assalam Alaikom\");\n\n\n//# sourceURL=webpack://homepage/./src/index.js?");

/***/ }),

/***/ "./src/images/battleship-ph.jpg":
/*!**************************************!*\
  !*** ./src/images/battleship-ph.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"09521f96a10b36a2812e.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/battleship-ph.jpg?");

/***/ }),

/***/ "./src/images/battleship.jpg":
/*!***********************************!*\
  !*** ./src/images/battleship.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b127916a24cd5a0d31db.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/battleship.jpg?");

/***/ }),

/***/ "./src/images/restaurant-ph.jpg":
/*!**************************************!*\
  !*** ./src/images/restaurant-ph.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51fe80f4d12f788b97d8.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/restaurant-ph.jpg?");

/***/ }),

/***/ "./src/images/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/images/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8eb9a59571ac4545ba0b.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/restaurant.jpg?");

/***/ }),

/***/ "./src/images/todo-app-ph.jpg":
/*!************************************!*\
  !*** ./src/images/todo-app-ph.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"abd168a0278652ccd1a1.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/todo-app-ph.jpg?");

/***/ }),

/***/ "./src/images/todo-app.jpg":
/*!*********************************!*\
  !*** ./src/images/todo-app.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07f49cccb02d1f7c07a1.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/todo-app.jpg?");

/***/ }),

/***/ "./src/images/weather-app-ph.jpg":
/*!***************************************!*\
  !*** ./src/images/weather-app-ph.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2e549f35cc78a1cf0c2.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/weather-app-ph.jpg?");

/***/ }),

/***/ "./src/images/weather-app.jpg":
/*!************************************!*\
  !*** ./src/images/weather-app.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1c725e8051d179b9177.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/weather-app.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;