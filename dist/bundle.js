/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: lightslategrey;\n}\n\n#containerDiv {\n  display: block;\n  height: 98vh;\n  width: auto;\n}\n#containerDiv #pictureFrame {\n  margin: auto;\n  width: 95%;\n  height: 100%;\n}\n#containerDiv #pictureFrame p {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: absolute;\n  z-index: 3;\n  top: 30vh;\n  margin: 0px;\n  opacity: 30%;\n  font-size: 15em;\n  color: lightgoldenrodyellow;\n  transition: opacity ease-in 3s;\n  transition: transform ease-in 1s;\n}\n#containerDiv #pictureFrame p:hover {\n  cursor: pointer;\n  opacity: 85%;\n  transform: scale(1.05);\n}\n#containerDiv #pictureFrame #leftArrow {\n  left: 3vw;\n}\n#containerDiv #pictureFrame #rightArrow {\n  right: 3vw;\n}\n#containerDiv #pictureFrame #image {\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  transition: opacity 2000ms ease-out;\n}\n#containerDiv #pictureFrame .easeIn {\n  opacity: 100%;\n}\n#containerDiv #pictureFrame .easeOut {\n  opacity: 0%;\n}\n#containerDiv #pictureFrame #dots {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 3vh;\n  text-align: center;\n}\n#containerDiv #pictureFrame #dots .dot {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  margin: 0px 10px 0px 10px;\n  height: 25px;\n  width: 25px;\n  background-color: white;\n  border-radius: 50%;\n  display: inline-block;\n}\n#containerDiv #pictureFrame #dots .dot:hover {\n  cursor: pointer;\n  background-color: greenyellow;\n}\n#containerDiv #pictureFrame #dots .dotHighlight {\n  background-color: greenyellow;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAOA;EACE,gCAAA;AANF;;AASA;EACE,cAAA;EACA,YAAA;EACA,WAAA;AANF;AAOE;EACE,YAAA;EACA,UAAA;EACA,YAAA;AALJ;AAMI;EAlBF,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;EAiBI,kBAAA;EACA,UAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,2BAAA;EACA,8BAAA;EACA,gCAAA;AADN;AAEM;EACE,eAAA;EACA,YAAA;EACA,sBAAA;AAAR;AAGI;EACE,SAAA;AADN;AAGI;EACE,UAAA;AADN;AAGI;EACE,YAAA;EACA,YAAA;EACA,WAAA;EACA,mCAAA;AADN;AAGI;EACE,aAAA;AADN;AAGI;EACE,WAAA;AADN;AAGI;EACE,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,kBAAA;AADN;AAEM;EA7DJ,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;EA4DM,yBAAA;EACA,YAAA;EACA,WAAA;EACA,uBAAA;EACA,kBAAA;EACA,qBAAA;AAGR;AAFQ;EACE,eAAA;EACA,6BAAA;AAIV;AADM;EACE,6BAAA;AAGR","sourcesContent":["@mixin nonSelectable {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nbody {\n  background-color: lightslategrey;\n}\n\n#containerDiv {\n  display: block;\n  height: 98vh;\n  width: auto;\n  #pictureFrame {\n    margin: auto;\n    width: 95%;\n    height: 100%;\n    p {\n      @include nonSelectable();\n      position: absolute;\n      z-index: 3;\n      top: 30vh;\n      margin: 0px;\n      opacity: 30%;\n      font-size: 15em;\n      color: lightgoldenrodyellow;\n      transition: opacity ease-in 3s;\n      transition: transform ease-in 1s;\n      &:hover {\n        cursor: pointer;\n        opacity: 85%;\n        transform: scale(1.05);\n      }\n    }\n    #leftArrow {\n      left: 3vw;\n    }\n    #rightArrow {\n      right: 3vw;\n    }\n    #image {\n      margin: auto;\n      height: 100%;\n      width: 100%;\n      transition: opacity 2000ms ease-out;\n    }\n    .easeIn {\n      opacity: 100%;\n    }\n    .easeOut {\n      opacity: 0%;\n    }\n    #dots {\n      position: absolute;\n      margin-left: auto;\n      margin-right: auto;\n      left: 0;\n      right: 0;\n      bottom: 3vh;\n      text-align: center;\n      .dot {\n        @include nonSelectable();\n        margin: 0px 10px 0px 10px;\n        height: 25px;\n        width: 25px;\n        background-color: white;\n        border-radius: 50%;\n        display: inline-block;\n        &:hover {\n          cursor: pointer;\n          background-color: greenyellow;\n        }\n      }\n      .dotHighlight {\n        background-color: greenyellow;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/carrouselControl.js":
/*!*********************************!*\
  !*** ./src/carrouselControl.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loop": () => (/* binding */ loop),
/* harmony export */   "setLoopTo": () => (/* binding */ setLoopTo),
/* harmony export */   "carrouselControl": () => (/* binding */ carrouselControl)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _images_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/1.jpg */ "./src/images/1.jpg");
/* harmony import */ var _images_2_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/2.jpeg */ "./src/images/2.jpeg");
/* harmony import */ var _images_3_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/3.jpeg */ "./src/images/3.jpeg");
/* harmony import */ var _images_4_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/4.jpeg */ "./src/images/4.jpeg");
/* harmony import */ var _images_5_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/5.jpeg */ "./src/images/5.jpeg");
// import images







// Create Array of Images
const arrayOfImagesThatWillCycle = [_images_1_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_2_jpeg__WEBPACK_IMPORTED_MODULE_2__, _images_3_jpeg__WEBPACK_IMPORTED_MODULE_3__, _images_4_jpeg__WEBPACK_IMPORTED_MODULE_4__, _images_5_jpeg__WEBPACK_IMPORTED_MODULE_5__];

// Set displayedImage = last element of arrayOfImagesThatWillCycle
let displayedImage = arrayOfImagesThatWillCycle[4];

// Get array of Nodes of navigation circles
const arrayOfCircles = document.querySelectorAll('span');

// Identify each circle with an unique id
let circleCount = 0;
arrayOfCircles.forEach(circle => {
  circle.id = circleCount;
  circleCount++;
  // add click listener for each circle
  circle.addEventListener('click', function (event) {
    // get index of image being displayed right now
    let currentIndex = arrayOfImagesThatWillCycle.indexOf(displayedImage);

    // remove circle highlight of that image
    arrayOfCircles[currentIndex].classList.remove('dotHighlight');

    // based on the circle the user clicked, show the corresponding image
    let chosenIndex = event.target.id;
    carrouselControl.nextImageInCarrousel(chosenIndex);
  });
});

// Identify <img> element and set it's image to displayedImage
const imageToChange = document.querySelector('#image');
imageToChange.setAttribute('src', displayedImage);

var loop = true;

const setLoopTo = boolean => {
  loop = boolean;
};

const carrouselControl = (() => {
  const autoScrollLoop = async () => {
    while (loop) {
      // eslint-disable-line no-constant-condition
      nextImageInCarrousel();

      imageToChange.classList.add('easeIn');

      await (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.sleep)(6000);

      imageToChange.classList.remove('easeIn');

      imageToChange.classList.add('easeOut');

      await (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.sleep)(1000);

      imageToChange.classList.remove('easeOut');
    }
  };

  const nextImageInCarrousel = optionalGoToIndex => {
    // Find out what image is being displayed right now
    let currentIndex = arrayOfImagesThatWillCycle.indexOf(displayedImage);
    let nextIndex = currentIndex + 1;

    // If user clicked a circle, set that circle's index as the nextIndex for the image
    if (optionalGoToIndex !== undefined) {
      nextIndex = optionalGoToIndex;
    }

    // If nextIndex goes over the array length, reset displayedImage to be the first element
    if (nextIndex >= arrayOfImagesThatWillCycle.length) {
      displayedImage = arrayOfImagesThatWillCycle[0];
      arrayOfCircles[4].classList.remove('dotHighlight');
      arrayOfCircles[0].classList.add('dotHighlight');
    }
    // else, set displayedImage to be nextIndex
    else {
      displayedImage = arrayOfImagesThatWillCycle[nextIndex];
      if (nextIndex > 0) {
        arrayOfCircles[nextIndex - 1].classList.remove('dotHighlight');
      }
      arrayOfCircles[nextIndex].classList.add('dotHighlight');
    }
    imageToChange.setAttribute('src', displayedImage);
  };

  const previousImageInCarrousel = () => {
    // Find out what image is displayed right now
    let currentIndex = arrayOfImagesThatWillCycle.indexOf(displayedImage);
    let previousIndex = currentIndex - 1;

    // If previousIndex < 0, reset displayedImage to be the last element
    if (previousIndex < 0) {
      displayedImage =
        arrayOfImagesThatWillCycle[arrayOfImagesThatWillCycle.length - 1];
      arrayOfCircles[0].classList.remove('dotHighlight');
      arrayOfCircles[arrayOfCircles.length - 1].classList.add('dotHighlight');
    }
    // else, set displayedImage to be previousIndex
    else {
      displayedImage = arrayOfImagesThatWillCycle[previousIndex];
      arrayOfCircles[previousIndex + 1].classList.remove('dotHighlight');
      arrayOfCircles[previousIndex].classList.add('dotHighlight');
    }
    imageToChange.setAttribute('src', displayedImage);
  };

  return {
    setLoopTo: setLoopTo,
    autoScrollLoop: autoScrollLoop,
    nextImageInCarrousel: nextImageInCarrousel,
    previousImageInCarrousel: previousImageInCarrousel
  };
})();


/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sleep": () => (/* binding */ sleep)
/* harmony export */ });
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};


/***/ }),

/***/ "./src/images/1.jpg":
/*!**************************!*\
  !*** ./src/images/1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f0391e16906fee44ccd.jpg";

/***/ }),

/***/ "./src/images/2.jpeg":
/*!***************************!*\
  !*** ./src/images/2.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "937c218ea314258d44e0.jpeg";

/***/ }),

/***/ "./src/images/3.jpeg":
/*!***************************!*\
  !*** ./src/images/3.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00d9515dcdf22c8d46b2.jpeg";

/***/ }),

/***/ "./src/images/4.jpeg":
/*!***************************!*\
  !*** ./src/images/4.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2f42e5edadfbf77b8d4.jpeg";

/***/ }),

/***/ "./src/images/5.jpeg":
/*!***************************!*\
  !*** ./src/images/5.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6141baef1ccff12e8db0.jpeg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carrouselControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrouselControl */ "./src/carrouselControl.js");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");


// Identify Left Arrow and Add event Listener
const leftArrow = document.querySelector('#leftArrow');
leftArrow.addEventListener('click', function () {
  _carrouselControl__WEBPACK_IMPORTED_MODULE_0__.carrouselControl.previousImageInCarrousel();
});

// Identify Right Arrow and Add event Listener
const rightArrow = document.querySelector('#rightArrow');
rightArrow.addEventListener('click', function () {
  _carrouselControl__WEBPACK_IMPORTED_MODULE_0__.carrouselControl.nextImageInCarrousel();
});

_carrouselControl__WEBPACK_IMPORTED_MODULE_0__.carrouselControl.autoScrollLoop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZXNsaWRlci8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9pbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9pbWFnZXNsaWRlci8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaW1hZ2VzbGlkZXIvLi9zcmMvY2Fycm91c2VsQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9pbWFnZXNsaWRlci8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vaW1hZ2VzbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW1hZ2VzbGlkZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaW1hZ2VzbGlkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ltYWdlc2xpZGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaW1hZ2VzbGlkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbWFnZXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ltYWdlc2xpZGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ltYWdlc2xpZGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxnREFBZ0QscUNBQXFDLEdBQUcsbUJBQW1CLG1CQUFtQixpQkFBaUIsZ0JBQWdCLEdBQUcsK0JBQStCLGlCQUFpQixlQUFlLGlCQUFpQixHQUFHLGlDQUFpQyw4QkFBOEIsMkJBQTJCLDBCQUEwQixzQkFBc0IsdUJBQXVCLGVBQWUsY0FBYyxnQkFBZ0IsaUJBQWlCLG9CQUFvQixnQ0FBZ0MsbUNBQW1DLHFDQUFxQyxHQUFHLHVDQUF1QyxvQkFBb0IsaUJBQWlCLDJCQUEyQixHQUFHLDBDQUEwQyxjQUFjLEdBQUcsMkNBQTJDLGVBQWUsR0FBRyxzQ0FBc0MsaUJBQWlCLGlCQUFpQixnQkFBZ0Isd0NBQXdDLEdBQUcsdUNBQXVDLGtCQUFrQixHQUFHLHdDQUF3QyxnQkFBZ0IsR0FBRyxxQ0FBcUMsdUJBQXVCLHNCQUFzQix1QkFBdUIsWUFBWSxhQUFhLGdCQUFnQix1QkFBdUIsR0FBRywwQ0FBMEMsOEJBQThCLDJCQUEyQiwwQkFBMEIsc0JBQXNCLDhCQUE4QixpQkFBaUIsZ0JBQWdCLDRCQUE0Qix1QkFBdUIsMEJBQTBCLEdBQUcsZ0RBQWdELG9CQUFvQixrQ0FBa0MsR0FBRyxtREFBbUQsa0NBQWtDLEdBQUcsT0FBTyxrRkFBa0YsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEhNO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7O0FDZkEsbUJBQU8sQ0FBQyx3Q0FBZTtBQUMrQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3RkFBeUM7QUFDM0MsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9GQUFxQztBQUN2QyxDQUFDOztBQUVELDhFQUErQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyZXk7XFxufVxcblxcbiNjb250YWluZXJEaXYge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDk4dmg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuI2NvbnRhaW5lckRpdiAjcGljdHVyZUZyYW1lIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA5NSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNjb250YWluZXJEaXYgI3BpY3R1cmVGcmFtZSBwIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAzO1xcbiAgdG9wOiAzMHZoO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBvcGFjaXR5OiAzMCU7XFxuICBmb250LXNpemU6IDE1ZW07XFxuICBjb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4gM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbiAxcztcXG59XFxuI2NvbnRhaW5lckRpdiAjcGljdHVyZUZyYW1lIHA6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogODUlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuI2NvbnRhaW5lckRpdiAjcGljdHVyZUZyYW1lICNsZWZ0QXJyb3cge1xcbiAgbGVmdDogM3Z3O1xcbn1cXG4jY29udGFpbmVyRGl2ICNwaWN0dXJlRnJhbWUgI3JpZ2h0QXJyb3cge1xcbiAgcmlnaHQ6IDN2dztcXG59XFxuI2NvbnRhaW5lckRpdiAjcGljdHVyZUZyYW1lICNpbWFnZSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwMG1zIGVhc2Utb3V0O1xcbn1cXG4jY29udGFpbmVyRGl2ICNwaWN0dXJlRnJhbWUgLmVhc2VJbiB7XFxuICBvcGFjaXR5OiAxMDAlO1xcbn1cXG4jY29udGFpbmVyRGl2ICNwaWN0dXJlRnJhbWUgLmVhc2VPdXQge1xcbiAgb3BhY2l0eTogMCU7XFxufVxcbiNjb250YWluZXJEaXYgI3BpY3R1cmVGcmFtZSAjZG90cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogM3ZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyRGl2ICNwaWN0dXJlRnJhbWUgI2RvdHMgLmRvdCB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbiNjb250YWluZXJEaXYgI3BpY3R1cmVGcmFtZSAjZG90cyAuZG90OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG4jY29udGFpbmVyRGl2ICNwaWN0dXJlRnJhbWUgI2RvdHMgLmRvdEhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BO0VBQ0UsZ0NBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU5GO0FBT0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFMSjtBQU1JO0VBbEJGLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBaUJJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFETjtBQUVNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUFSO0FBR0k7RUFDRSxTQUFBO0FBRE47QUFHSTtFQUNFLFVBQUE7QUFETjtBQUdJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUFETjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBR0k7RUFDRSxXQUFBO0FBRE47QUFHSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRE47QUFFTTtFQTdESix5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQTRETSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBR1I7QUFGUTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQUlWO0FBRE07RUFDRSw2QkFBQTtBQUdSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBub25TZWxlY3RhYmxlIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyZXk7XFxufVxcblxcbiNjb250YWluZXJEaXYge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDk4dmg7XFxuICB3aWR0aDogYXV0bztcXG4gICNwaWN0dXJlRnJhbWUge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcCB7XFxuICAgICAgQGluY2x1ZGUgbm9uU2VsZWN0YWJsZSgpO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB6LWluZGV4OiAzO1xcbiAgICAgIHRvcDogMzB2aDtcXG4gICAgICBtYXJnaW46IDBweDtcXG4gICAgICBvcGFjaXR5OiAzMCU7XFxuICAgICAgZm9udC1zaXplOiAxNWVtO1xcbiAgICAgIGNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4gM3M7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4gMXM7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBvcGFjaXR5OiA4NSU7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAjbGVmdEFycm93IHtcXG4gICAgICBsZWZ0OiAzdnc7XFxuICAgIH1cXG4gICAgI3JpZ2h0QXJyb3cge1xcbiAgICAgIHJpZ2h0OiAzdnc7XFxuICAgIH1cXG4gICAgI2ltYWdlIHtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwMG1zIGVhc2Utb3V0O1xcbiAgICB9XFxuICAgIC5lYXNlSW4ge1xcbiAgICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIH1cXG4gICAgLmVhc2VPdXQge1xcbiAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxuICAgICNkb3RzIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgYm90dG9tOiAzdmg7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC5kb3Qge1xcbiAgICAgICAgQGluY2x1ZGUgbm9uU2VsZWN0YWJsZSgpO1xcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLmRvdEhpZ2hsaWdodCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiLy8gaW1wb3J0IGltYWdlc1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5pbXBvcnQgT25lIGZyb20gJy4vaW1hZ2VzLzEuanBnJztcbmltcG9ydCBUd28gZnJvbSAnLi9pbWFnZXMvMi5qcGVnJztcbmltcG9ydCBUaHJlZSBmcm9tICcuL2ltYWdlcy8zLmpwZWcnO1xuaW1wb3J0IEZvdXIgZnJvbSAnLi9pbWFnZXMvNC5qcGVnJztcbmltcG9ydCBGaXZlIGZyb20gJy4vaW1hZ2VzLzUuanBlZyc7XG5cbi8vIENyZWF0ZSBBcnJheSBvZiBJbWFnZXNcbmNvbnN0IGFycmF5T2ZJbWFnZXNUaGF0V2lsbEN5Y2xlID0gW09uZSwgVHdvLCBUaHJlZSwgRm91ciwgRml2ZV07XG5cbi8vIFNldCBkaXNwbGF5ZWRJbWFnZSA9IGxhc3QgZWxlbWVudCBvZiBhcnJheU9mSW1hZ2VzVGhhdFdpbGxDeWNsZVxubGV0IGRpc3BsYXllZEltYWdlID0gYXJyYXlPZkltYWdlc1RoYXRXaWxsQ3ljbGVbNF07XG5cbi8vIEdldCBhcnJheSBvZiBOb2RlcyBvZiBuYXZpZ2F0aW9uIGNpcmNsZXNcbmNvbnN0IGFycmF5T2ZDaXJjbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpO1xuXG4vLyBJZGVudGlmeSBlYWNoIGNpcmNsZSB3aXRoIGFuIHVuaXF1ZSBpZFxubGV0IGNpcmNsZUNvdW50ID0gMDtcbmFycmF5T2ZDaXJjbGVzLmZvckVhY2goY2lyY2xlID0+IHtcbiAgY2lyY2xlLmlkID0gY2lyY2xlQ291bnQ7XG4gIGNpcmNsZUNvdW50Kys7XG4gIC8vIGFkZCBjbGljayBsaXN0ZW5lciBmb3IgZWFjaCBjaXJjbGVcbiAgY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gZ2V0IGluZGV4IG9mIGltYWdlIGJlaW5nIGRpc3BsYXllZCByaWdodCBub3dcbiAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXlPZkltYWdlc1RoYXRXaWxsQ3ljbGUuaW5kZXhPZihkaXNwbGF5ZWRJbWFnZSk7XG5cbiAgICAvLyByZW1vdmUgY2lyY2xlIGhpZ2hsaWdodCBvZiB0aGF0IGltYWdlXG4gICAgYXJyYXlPZkNpcmNsZXNbY3VycmVudEluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdkb3RIaWdobGlnaHQnKTtcblxuICAgIC8vIGJhc2VkIG9uIHRoZSBjaXJjbGUgdGhlIHVzZXIgY2xpY2tlZCwgc2hvdyB0aGUgY29ycmVzcG9uZGluZyBpbWFnZVxuICAgIGxldCBjaG9zZW5JbmRleCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBjYXJyb3VzZWxDb250cm9sLm5leHRJbWFnZUluQ2Fycm91c2VsKGNob3NlbkluZGV4KTtcbiAgfSk7XG59KTtcblxuLy8gSWRlbnRpZnkgPGltZz4gZWxlbWVudCBhbmQgc2V0IGl0J3MgaW1hZ2UgdG8gZGlzcGxheWVkSW1hZ2VcbmNvbnN0IGltYWdlVG9DaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2UnKTtcbmltYWdlVG9DaGFuZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBkaXNwbGF5ZWRJbWFnZSk7XG5cbmV4cG9ydCB2YXIgbG9vcCA9IHRydWU7XG5cbmV4cG9ydCBjb25zdCBzZXRMb29wVG8gPSBib29sZWFuID0+IHtcbiAgbG9vcCA9IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgY2Fycm91c2VsQ29udHJvbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGF1dG9TY3JvbGxMb29wID0gYXN5bmMgKCkgPT4ge1xuICAgIHdoaWxlIChsb29wKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgbmV4dEltYWdlSW5DYXJyb3VzZWwoKTtcblxuICAgICAgaW1hZ2VUb0NoYW5nZS5jbGFzc0xpc3QuYWRkKCdlYXNlSW4nKTtcblxuICAgICAgYXdhaXQgc2xlZXAoNjAwMCk7XG5cbiAgICAgIGltYWdlVG9DaGFuZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZWFzZUluJyk7XG5cbiAgICAgIGltYWdlVG9DaGFuZ2UuY2xhc3NMaXN0LmFkZCgnZWFzZU91dCcpO1xuXG4gICAgICBhd2FpdCBzbGVlcCgxMDAwKTtcblxuICAgICAgaW1hZ2VUb0NoYW5nZS5jbGFzc0xpc3QucmVtb3ZlKCdlYXNlT3V0Jyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG5leHRJbWFnZUluQ2Fycm91c2VsID0gb3B0aW9uYWxHb1RvSW5kZXggPT4ge1xuICAgIC8vIEZpbmQgb3V0IHdoYXQgaW1hZ2UgaXMgYmVpbmcgZGlzcGxheWVkIHJpZ2h0IG5vd1xuICAgIGxldCBjdXJyZW50SW5kZXggPSBhcnJheU9mSW1hZ2VzVGhhdFdpbGxDeWNsZS5pbmRleE9mKGRpc3BsYXllZEltYWdlKTtcbiAgICBsZXQgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcblxuICAgIC8vIElmIHVzZXIgY2xpY2tlZCBhIGNpcmNsZSwgc2V0IHRoYXQgY2lyY2xlJ3MgaW5kZXggYXMgdGhlIG5leHRJbmRleCBmb3IgdGhlIGltYWdlXG4gICAgaWYgKG9wdGlvbmFsR29Ub0luZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5leHRJbmRleCA9IG9wdGlvbmFsR29Ub0luZGV4O1xuICAgIH1cblxuICAgIC8vIElmIG5leHRJbmRleCBnb2VzIG92ZXIgdGhlIGFycmF5IGxlbmd0aCwgcmVzZXQgZGlzcGxheWVkSW1hZ2UgdG8gYmUgdGhlIGZpcnN0IGVsZW1lbnRcbiAgICBpZiAobmV4dEluZGV4ID49IGFycmF5T2ZJbWFnZXNUaGF0V2lsbEN5Y2xlLmxlbmd0aCkge1xuICAgICAgZGlzcGxheWVkSW1hZ2UgPSBhcnJheU9mSW1hZ2VzVGhhdFdpbGxDeWNsZVswXTtcbiAgICAgIGFycmF5T2ZDaXJjbGVzWzRdLmNsYXNzTGlzdC5yZW1vdmUoJ2RvdEhpZ2hsaWdodCcpO1xuICAgICAgYXJyYXlPZkNpcmNsZXNbMF0uY2xhc3NMaXN0LmFkZCgnZG90SGlnaGxpZ2h0Jyk7XG4gICAgfVxuICAgIC8vIGVsc2UsIHNldCBkaXNwbGF5ZWRJbWFnZSB0byBiZSBuZXh0SW5kZXhcbiAgICBlbHNlIHtcbiAgICAgIGRpc3BsYXllZEltYWdlID0gYXJyYXlPZkltYWdlc1RoYXRXaWxsQ3ljbGVbbmV4dEluZGV4XTtcbiAgICAgIGlmIChuZXh0SW5kZXggPiAwKSB7XG4gICAgICAgIGFycmF5T2ZDaXJjbGVzW25leHRJbmRleCAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ2RvdEhpZ2hsaWdodCcpO1xuICAgICAgfVxuICAgICAgYXJyYXlPZkNpcmNsZXNbbmV4dEluZGV4XS5jbGFzc0xpc3QuYWRkKCdkb3RIaWdobGlnaHQnKTtcbiAgICB9XG4gICAgaW1hZ2VUb0NoYW5nZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRpc3BsYXllZEltYWdlKTtcbiAgfTtcblxuICBjb25zdCBwcmV2aW91c0ltYWdlSW5DYXJyb3VzZWwgPSAoKSA9PiB7XG4gICAgLy8gRmluZCBvdXQgd2hhdCBpbWFnZSBpcyBkaXNwbGF5ZWQgcmlnaHQgbm93XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5T2ZJbWFnZXNUaGF0V2lsbEN5Y2xlLmluZGV4T2YoZGlzcGxheWVkSW1hZ2UpO1xuICAgIGxldCBwcmV2aW91c0luZGV4ID0gY3VycmVudEluZGV4IC0gMTtcblxuICAgIC8vIElmIHByZXZpb3VzSW5kZXggPCAwLCByZXNldCBkaXNwbGF5ZWRJbWFnZSB0byBiZSB0aGUgbGFzdCBlbGVtZW50XG4gICAgaWYgKHByZXZpb3VzSW5kZXggPCAwKSB7XG4gICAgICBkaXNwbGF5ZWRJbWFnZSA9XG4gICAgICAgIGFycmF5T2ZJbWFnZXNUaGF0V2lsbEN5Y2xlW2FycmF5T2ZJbWFnZXNUaGF0V2lsbEN5Y2xlLmxlbmd0aCAtIDFdO1xuICAgICAgYXJyYXlPZkNpcmNsZXNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZG90SGlnaGxpZ2h0Jyk7XG4gICAgICBhcnJheU9mQ2lyY2xlc1thcnJheU9mQ2lyY2xlcy5sZW5ndGggLSAxXS5jbGFzc0xpc3QuYWRkKCdkb3RIaWdobGlnaHQnKTtcbiAgICB9XG4gICAgLy8gZWxzZSwgc2V0IGRpc3BsYXllZEltYWdlIHRvIGJlIHByZXZpb3VzSW5kZXhcbiAgICBlbHNlIHtcbiAgICAgIGRpc3BsYXllZEltYWdlID0gYXJyYXlPZkltYWdlc1RoYXRXaWxsQ3ljbGVbcHJldmlvdXNJbmRleF07XG4gICAgICBhcnJheU9mQ2lyY2xlc1twcmV2aW91c0luZGV4ICsgMV0uY2xhc3NMaXN0LnJlbW92ZSgnZG90SGlnaGxpZ2h0Jyk7XG4gICAgICBhcnJheU9mQ2lyY2xlc1twcmV2aW91c0luZGV4XS5jbGFzc0xpc3QuYWRkKCdkb3RIaWdobGlnaHQnKTtcbiAgICB9XG4gICAgaW1hZ2VUb0NoYW5nZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRpc3BsYXllZEltYWdlKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldExvb3BUbzogc2V0TG9vcFRvLFxuICAgIGF1dG9TY3JvbGxMb29wOiBhdXRvU2Nyb2xsTG9vcCxcbiAgICBuZXh0SW1hZ2VJbkNhcnJvdXNlbDogbmV4dEltYWdlSW5DYXJyb3VzZWwsXG4gICAgcHJldmlvdXNJbWFnZUluQ2Fycm91c2VsOiBwcmV2aW91c0ltYWdlSW5DYXJyb3VzZWxcbiAgfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3Qgc2xlZXAgPSBtcyA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsInJlcXVpcmUoJy4vc3R5bGVzLnNjc3MnKTtcbmltcG9ydCB7IGNhcnJvdXNlbENvbnRyb2wgfSBmcm9tICcuL2NhcnJvdXNlbENvbnRyb2wnO1xuXG4vLyBJZGVudGlmeSBMZWZ0IEFycm93IGFuZCBBZGQgZXZlbnQgTGlzdGVuZXJcbmNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0QXJyb3cnKTtcbmxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgY2Fycm91c2VsQ29udHJvbC5wcmV2aW91c0ltYWdlSW5DYXJyb3VzZWwoKTtcbn0pO1xuXG4vLyBJZGVudGlmeSBSaWdodCBBcnJvdyBhbmQgQWRkIGV2ZW50IExpc3RlbmVyXG5jb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0QXJyb3cnKTtcbnJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNhcnJvdXNlbENvbnRyb2wubmV4dEltYWdlSW5DYXJyb3VzZWwoKTtcbn0pO1xuXG5jYXJyb3VzZWxDb250cm9sLmF1dG9TY3JvbGxMb29wKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9