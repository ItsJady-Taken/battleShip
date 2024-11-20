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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0;\n  padding: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nsection {\n  display: flex;\n  justify-content: flex-start;\n}\n\nheader {\n  text-align: center;\n}\n\naside {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n\n.game-section {\n  display: flex;\n  padding: 10px;\n  justify-content: space-around;\n}\n\n.gameBoard {\n  width: 400px;\n  height: 400px;\n  max-height: 500px;\n  max-width: 500px;\n  margin: 0 auto;\n  border: 1px solid black;\n}\n\n.boardCell {\n  position: relative;\n  border: 1px solid rgb(211, 209, 209);\n}\n\n#start-game {\n  background-color: rgb(4, 167, 4);\n  color: white;\n  padding: 10px;\n  border: none;\n  border-radius: 4px;\n}\n\n#start-game:hover {\n  cursor: pointer;\n  background-color: rgb(0, 128, 0);\n}\n\n#start-game:active {\n  background-color: rgb(0, 128, 0);\n  transform: scale(0.98);\n  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);\n}\n\n.disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n#reset-game {\n  background-color: rgb(212, 4, 4);\n  color: white;\n  padding: 10px;\n  border: none;\n  border-radius: 4px;\n}\n\n#reset-game:hover {\n  cursor: pointer;\n  background-color: rgb(122, 3, 3);\n}\n\n#reset-game:active {\n  background-color: rgb(128, 0, 0);\n  transform: scale(0.98);\n  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);\n}\n\n.dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: transparent;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/apps/domModules.js":
/*!********************************!*\
  !*** ./src/apps/domModules.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBoard: () => (/* binding */ createBoard),\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/apps/player.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/apps/gameBoard.js\");\n\n\n\n\n\nfunction createBoard(size) {\n    // get the size of the board\n    const boardSize = size * size;\n\n    // create the gameboard grid for player and computer \n    const gameBoard = document.querySelectorAll('.gameBoard');\n    \n    gameBoard.forEach((board) => {\n        board.style.display = 'grid';\n        board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;\n        board.style.gridTemplateRows = `repeat(${size}, 1fr)`;\n\n\n        // display the cells for the gameboard\n        for (let i = 0; i < boardSize; i++) {\n             const boardCell = document.createElement('div');\n            boardCell.classList.add('boardCell');\n\n            board.appendChild(boardCell);\n        }\n       \n    })\n  const startGameBtn = document.getElementById('start-game');\n  const resetGameBtn = document.getElementById('reset-game');\n  resetGameBtn.classList.add('disabled');\n  // Start the game when the game, when the start button is clicked\n  // document.addEventListener('keydown', (event) => {\n  //   if (event.key === 'Enter') {\n  //     startGame();\n  //     startGameBtn.classList.add('disabled');\n  //     resetGameBtn.classList.remove('disabled');\n  //   }\n  // })\n  startGameBtn.addEventListener('click', () => {\n    startGame();\n    startGameBtn.classList.add('disabled');\n    resetGameBtn.classList.remove('disabled');\n  })\n\n  // Reset the game, when the reset button is clicked\n  resetGameBtn.addEventListener('click', () => {\n    //------ WORK ON THE RESET FUNCTIONALITY ALSO CONSIDER TO START GAME WHEN PRESING KEY----//\n    // const realPlayerBoard = new RealPlayer().board;\n    // const ComputerPlayerBoard = new ComputerPlayer().board;\n    \n    // realPlayerBoard.reset();\n    // ComputerPlayerBoard.reset();\n\n\n    const gameBoard = document.querySelectorAll('.gameBoard');\n    gameBoard.forEach((board) => {\n        board.innerHTML = '';\n    })\n    createBoard(size);\n\n    startGame();\n    // gameBoard.forEach((board) => {\n    //     board.style.display = 'grid';\n    //     board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;\n    //     board.style.gridTemplateRows = `repeat(${size}, 1fr)`;\n\n    //     // display the cells for the gameboard\n    //     for (let i = 0; i < boardSize; i++) {\n    //          const boardCell = document.createElement('div');\n    //         boardCell.classList.add('boardCell');\n\n    //         board.appendChild(boardCell);\n    //     }\n       \n    // })\n\n    startGameBtn.classList.remove('disabled');\n  }) \n   \n}\n\n// start the game\nfunction startGame() {\n  const playerBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  const computerBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();  \n  \n  playerBoard.reset();\n  computerBoard.reset();\n\n  genaratingShips(playerBoard, computerBoard);\n  addShipsUi(playerBoard, computerBoard);\n\n  const compBoard = document.querySelector('.computer');\n  const realPlayerBoard = document.querySelector('.player');\n\n  // Taking turns attacking \n  let turn = 'player';\n\n  // Player turn\n  compBoard.addEventListener('click', (e) => {\n    if (turn === 'player') {\n      const cell = e.target;\n      const x = cell.dataset.x;\n      const y = cell.dataset.y;\n\n      // Check if the cell has already been targeted\n      if (cell.classList.contains('hit') || cell.classList.contains('miss')) {\n        return;\n      }\n\n      // Make the shot\n      computerBoard.receiveAttack(x, y);\n      console.log(computerBoard.board[x][y]);\n      \n      // Update the UI\n      if (computerBoard.board[x][y] === null) {\n        cell.classList.add('miss');\n        cell.innerHTML = '<span class=\"dot\" style=\"background-color: black;\"></span>';\n      } \n      if(computerBoard.board[x][y] !== null) {\n        cell.classList.add('hit');\n        cell.innerHTML = '<span class=\"dot\" style=\"background-color: red;\"></span>';\n        \n      }\n     \n      // Switch turn to computer\n      turn = 'computer';\n      // Computer makes a random shot\n      const computerX = Math.floor(Math.random() * 10);\n      const computerY = Math.floor(Math.random() * 10);\n\n      playerBoard.receiveAttack(computerX, computerY);\n\n      //Update the UI\n      const playerCell = realPlayerBoard.querySelector(`[data-x=\"${computerX}\"][data-y=\"${computerY}\"]`);\n    \n      if (playerBoard.board[computerX][computerY] === null) {\n        playerCell.classList.add('miss');\n        playerCell.innerHTML = '<span class=\"dot\" style=\"background-color: black;\"></span>';\n      } \n      if(playerBoard.board[computerX][computerY] !== null) {\n        playerCell.classList.add('hit');\n        playerCell.innerHTML = '<span class=\"dot\" style=\"background-color: red;\"></span>';\n      }\n\n      playerBoard.removeShip();\n      computerBoard.removeShip();\n\n      // Switch turn to player\n      turn = 'player';\n\n    }\n\n    // Check if the game is over\n  //   if (computerBoard.allShipsSunk()) {\n  //     const gameInfo = document.querySelector('.game-info');\n  //     gameInfo.innerHTML = 'Player wins';\n  //     console.log('player wins');\n\n  //       // Disable the the boards      \n  //       compBoard.classList.add('disabled');\n  //       realPlayerBoard.classList.add('disabled');\n\n  //       turn = 'player';\n  //   }\n  //   else if (playerBoard.allShipsSunk()) {\n  //     const gameInfo = document.querySelector('.game-info');\n  //     gameInfo.innerHTML = 'Computer wins';\n  //     console.log('comp wins');\n\n  //     //Disable the the boards\n  //     compBoard.classList.add('disabled');\n  //     realPlayerBoard.classList.add('disabled');\n\n  //     turn = 'player';\n  //   }\n\n  });\n}\n\nfunction addShipsUi(playerBoard, computerBoard) {\n  const ships = {\n    carrier: {count: 1, length: 5, color: 'purple'},\n    battleship: {count: 1, length: 4, color: 'blue'},\n    cruiser: {count: 1, length: 3, color: 'green'},\n    submarine: {count: 1, length: 3, color: 'yellow'},\n    destroyer: {count: 1, length: 2, color: 'orange'},\n  };\n\n\n  const realPlayerBoard = document.querySelector('.player'); \n  const compBoard = document.querySelector('.computer');\n\n  compBoard.innerHTML = '';\n  realPlayerBoard.innerHTML = '';\n\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const playerCell = document.createElement('div');\n      playerCell.classList.add('boardCell');\n      playerCell.dataset.x = i; // add custom data attribute for x\n      playerCell.dataset.y = j; // add custom data attribute for y\n\n      const computerCell = document.createElement('div');\n      computerCell.classList.add('boardCell');\n      computerCell.dataset.x = i; // add custom data attribute for x\n      computerCell.dataset.y = j; // add custom data attribute for y\n\n      if (playerBoard.board[i][j] !== null) {\n      \n        //get the color of the ship\n        const shipType = Object.keys(ships).find(key => ships[key].length === playerBoard.board[i][j].length);\n        const shipColor = ships[shipType].color;\n\n        const shipDiv = document.createElement('div');\n        shipDiv.dataset.x = i; \n        shipDiv.dataset.y = j;\n        \n        shipDiv.style.height = '100%'; \n        shipDiv.style.border = `1px solid ${shipColor}`;\n        shipDiv.style.boxSizing = 'border-box';\n        shipDiv.style.backgroundColor = `${shipColor}`; // Add a border around the ship\n        \n        // Append the ship div to the real player board\n        playerCell.appendChild(shipDiv);\n      }\n      realPlayerBoard.appendChild(playerCell);\n\n      if (computerBoard.board[i][j] !== null) {\n        // Create a blank div for the computer board\n        const blankDiv = document.createElement('div');\n        blankDiv.dataset.x = i; \n        blankDiv.dataset.y = j;\n        blankDiv.style.height = '100%';\n        \n        // Append the blank div to the computer board\n        computerCell.appendChild(blankDiv);\n      }\n      compBoard.appendChild(computerCell);\n    }\n  }\n\n}\n\n// function to genarate the ships object\nfunction genaratingShips(playerBoard, computerBoard) {\n  const ships = [\n    {type: 'carrier', length: 5, color: 'purple'},\n    {type: 'battleship', length: 4, color: 'blue'},\n    {type: 'cruiser', length: 3, color: 'green'},\n    {type: 'submarine', length: 3, color: 'yellow'},\n    {type: 'destroyer', length: 2, color: 'orange'},\n  ];\n\n  // Shuffle ships array for more randomness\n  ships.sort(() => Math.random() - 0.5);\n\n  // Place ships for both boards\n  [playerBoard, computerBoard].forEach((board) => {\n    ships.forEach(({ length }) => {\n        let x, y, orientation;\n\n        // Keep generating random positions until valid\n        while (true) {\n            orientation = Math.random() < 0.5 ? \"x\" : \"y\";\n            x = Math.floor(Math.random() * 10);\n            y = Math.floor(Math.random() * 10);\n\n            // Adjust random bounds based on orientation to avoid overflow\n            if (orientation === \"x\" && y + length > 10) continue;\n            if (orientation === \"y\" && x + length > 10) continue;\n\n            if (!doesShipOverlap(board, x, y, length, orientation)) {\n                break;\n            }\n        }\n       \n        // Add the ship to the board\n        if (orientation === \"x\") {\n            board.addShipX(x, y, length);\n        } else {\n            board.addShipY(x, y, length);\n        }\n    });\n  });\n\n}\n\n// Helper function to check if a ship overlaps with any existing ships on the board\nfunction doesShipOverlap(board, x, y, length, orientation) {\n\n  // return true if there is an overlap\n  if (orientation === 'x') {\n      for (let i = 0; i < length; i++) {\n        if (y + i >= 10 || board.board[x][y + i] !== null) {\n          return true;\n        \n          }\n      }\n  } \n  else {\n      for (let i = 0; i < length; i++) {\n        if (x + i >= 10 || board.board[x + i][y] !== null) {\n          return true;\n          }\n      }\n  }\n  return false; // no overlap\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/apps/domModules.js?");

/***/ }),

/***/ "./src/apps/gameBoard.js":
/*!*******************************!*\
  !*** ./src/apps/gameBoard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apps_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apps/ship.js */ \"./src/apps/ship.js\");\n\n\nclass GameBoard {\n    constructor() {\n        this.board = new Array(10).fill(null).map(() => new Array(10).fill(null));\n        this.ships = [];\n        this.hits = [];\n        this.missed = [];\n    }\n    addShipX(x, y, length) {\n        // Create a new ship instance with the given length\n        const ship = new _apps_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\n\n        // // Add the ship horizontally, to the board at a specified location\n        for (let i = 0; i < length; i++) {\n            this.board[x][y + i] = ship; \n        }\n\n        // store the ship in the ship array, for later use\n        this.ships.push(ship);\n    }\n\n    addShipY(x, y, length) {\n        // Create a new ship instance with the given length\n        const ship = new _apps_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\n\n        // // Add the ship vertically, to the board at a specified location\n        for (let i = 0; i < length; i++) {\n            this.board[x + i][y] = ship; \n        }\n\n        // store the ship in the ship array, for later use\n        this.ships.push(ship);\n    }\n\n    receiveAttack(x, y) {\n        const ship = this.board[x][y];\n        if (ship !== null) {\n            ship.hit();\n            this.hits.push({ x, y });   \n        }\n         \n        else {\n            this.missed.push({ x, y });\n        }\n        return ship;\n    }\n\n    allShipsSunk() {\n        return this.ships.every(ship => ship.isSunk());\n    }\n\n    reset() {\n        this.board = new Array(10).fill(null).map(() => new Array(10).fill(null));\n        this.ships = [];\n        this.hits = [];\n        this.missed = [];\n      \n    }\n\n    removeShip() {\n        this.ships = this.ships.filter((ship) => {\n            if (ship.isSunk()) {\n                // Remove ship from the board grid\n                for (let x = 0; x < this.board.length; x++) {\n                    for (let y = 0; y < this.board[x].length; y++) {\n                        if (this.board[x][y] === ship) {\n                            this.board[x][y] = null;\n                        }\n                    }\n                }\n                console.log(`Ship removed: Length = ${ship.length}, HitCount = ${ship.hitCount}`);\n                return false; // Filter out the ship\n            }\n            return true; // Keep the ship\n        });\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n//# sourceURL=webpack://battleship/./src/apps/gameBoard.js?");

/***/ }),

/***/ "./src/apps/player.js":
/*!****************************!*\
  !*** ./src/apps/player.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ComputerPlayer: () => (/* binding */ ComputerPlayer),\n/* harmony export */   RealPlayer: () => (/* binding */ RealPlayer)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/apps/gameBoard.js\");\n\n\nclass Player {\n    constructor(type) {\n        this.type = type;\n        this.board = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n}\n\nclass RealPlayer extends Player {\n    constructor() {\n        super('human');\n    }\n}\n\nclass ComputerPlayer extends Player {\n    constructor() {\n        super('computer');\n    }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/apps/player.js?");

/***/ }),

/***/ "./src/apps/ship.js":
/*!**************************!*\
  !*** ./src/apps/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n        this.length = length; // Size of the ship\n        this.hit_count = 0; // count of hits\n        this.sunk = false;\n    }\n    // keeps track of how many times the ship has been hit\n    hit() {\n        this.hit_count++;\n    }\n    isSunk() {\n        if (this.hit_count === this.length) {\n            this.sunk = true;\n            this.hit_count = 0;\n        }\n        return this.sunk;\n    }\n}\n\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/apps/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _apps_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps/player */ \"./src/apps/player.js\");\n/* harmony import */ var _apps_domModules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps/domModules */ \"./src/apps/domModules.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_apps_domModules__WEBPACK_IMPORTED_MODULE_2__.createBoard)(10);\n});\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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