/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/carstore/car.js":
/*!****************************************!*\
  !*** ./src/components/carstore/car.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Car; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Car = function Car(id, mark, model, typ, safety) {\n  _classCallCheck(this, Car);\n\n  this.id = id;\n  this.mark = mark;\n  this.model = model;\n  this.typ = typ;\n  this.safety = safety;\n};\n\n\n\n//# sourceURL=webpack:///./src/components/carstore/car.js?");

/***/ }),

/***/ "./src/components/carstore/car_options.js":
/*!************************************************!*\
  !*** ./src/components/carstore/car_options.js ***!
  \************************************************/
/*! exports provided: car_mark, car_model, carArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"car_mark\", function() { return car_mark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"car_model\", function() { return car_model; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"carArr\", function() { return carArr; });\nvar car_mark = {\n  1: {\n    id: 1,\n    name: 'Bmw'\n  },\n  2: {\n    id: 2,\n    name: 'Volksvagen'\n  },\n  3: {\n    id: 3,\n    name: 'Audi'\n  }\n};\nvar car_model = {\n  1: ['X3', 'X4', 'X5', 'X6'],\n  2: ['Golf1', 'Golf2', 'Golf3', 'Golf4'],\n  3: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6']\n};\nvar carArr = [];\n\n//# sourceURL=webpack:///./src/components/carstore/car_options.js?");

/***/ }),

/***/ "./src/components/carstore/controllers/controller-delete-entry.js":
/*!************************************************************************!*\
  !*** ./src/components/carstore/controllers/controller-delete-entry.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\n/* harmony import */ var _car_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../car_options */ \"./src/components/carstore/car_options.js\");\n\n/**\n * Default init function\n */\n\nfunction init() {\n  var deleteEntry = document.querySelector(\"#carlist\").querySelectorAll('.car span.remove');\n  reindexinCar();\n  addListener(deleteEntry);\n}\n/**\n * Add click listener\n * @param array\n */\n\nfunction addListener(array) {\n  array.forEach(function (element) {\n    element.addEventListener('click', function (event) {\n      var liClick = element.closest('li');\n      var car = liClick.querySelector('.car');\n      var listIndex = car.getAttribute('index'); //Open modal window for confirmation\n\n      openModal(liClick, listIndex);\n      /*console.log(`Delete index: ${listIndex}`)\n       let deleteAction = deleteEntry(listIndex)\n      if(deleteAction) {\n          liClick.remove()\n          reindexinCar()\n      }else console.log('Cant delete car at index '+listIndex)*/\n    });\n  });\n}\n\nfunction reindexinCar() {\n  var indexset = 0;\n  var cars = document.querySelectorAll('#carlist li .car');\n  cars.forEach(function (element) {\n    element.setAttribute('index', indexset);\n    indexset++;\n  });\n}\n/**\n * Delete entry\n * @param index\n */\n\n\nfunction deleteEntry(index) {\n  var carlength = _car_options__WEBPACK_IMPORTED_MODULE_0__[\"carArr\"].length;\n\n  if (_car_options__WEBPACK_IMPORTED_MODULE_0__[\"carArr\"][index]) {\n    _car_options__WEBPACK_IMPORTED_MODULE_0__[\"carArr\"].splice(index, 1);\n    return true;\n  } else return false;\n}\n/**\n * Open modal and set eventlistener\n * @param carName\n */\n\n\nfunction openModal(li, index) {\n  var carName = li.querySelector('.mark').textContent;\n  var modal = document.getElementById('modal');\n  var closeIcon = modal.querySelector('span.close');\n  var confirm = modal.querySelector('button.confirm');\n  var cancel = modal.querySelector('button.cancel');\n  modal.style.display = 'block';\n  modal.querySelector('p.text').textContent = \"Do you really like to delete \".concat(carName, \"?\"); //On close button\n\n  closeIcon.addEventListener('click', function (event) {\n    modal.style.display = 'none';\n  });\n  cancel.addEventListener('click', function (event) {\n    modal.style.display = 'none';\n  });\n  confirm.addEventListener('click', function (event) {\n    var deleteAction = deleteEntry(index);\n\n    if (deleteAction) {\n      li.remove();\n      reindexinCar();\n      modal.style.display = 'none';\n    }\n  }, {\n    once: true\n  });\n}\n\n//# sourceURL=webpack:///./src/components/carstore/controllers/controller-delete-entry.js?");

/***/ }),

/***/ "./src/components/carstore/controllers/controller-fill-select-fields.js":
/*!******************************************************************************!*\
  !*** ./src/components/carstore/controllers/controller-fill-select-fields.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\n/* harmony import */ var _car_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../car_options */ \"./src/components/carstore/car_options.js\");\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n //Init function\n\nfunction init() {\n  fill_mark_select();\n} //Fill mark select\n\nfunction fill_mark_select() {\n  var form = document.querySelector('form');\n\n  if (form.id == 'addCar') {\n    var mark_select = form.querySelector('#mark');\n    onClick(mark_select);\n\n    for (var key in _car_options__WEBPACK_IMPORTED_MODULE_0__[\"car_mark\"]) {\n      var option = document.createElement('option');\n      option.value = _car_options__WEBPACK_IMPORTED_MODULE_0__[\"car_mark\"][key]['id'];\n      option.text = _car_options__WEBPACK_IMPORTED_MODULE_0__[\"car_mark\"][key]['name'];\n      mark_select.appendChild(option);\n    }\n  }\n} //Change function\n\n\nfunction onClick(mark_select) {\n  mark_select.addEventListener('change', function (event) {\n    var choice = mark_select.value;\n    fill_model_select(choice);\n  });\n} //Fill model select\n\n\nfunction fill_model_select(id_mark) {\n  var form = document.querySelector('form');\n  var model_select = form.querySelector('#model'); //Removing useless childs\n\n  removeOptions(model_select);\n  _car_options__WEBPACK_IMPORTED_MODULE_0__[\"car_model\"][id_mark].forEach(function (element, index) {\n    var option = document.createElement('option');\n    option.value = index;\n    option.text = element;\n    model_select.appendChild(option);\n  });\n} //Removing options from select\n\n\nfunction removeOptions(model_select) {\n  var removingChilds = model_select.querySelectorAll('option');\n\n  var _iterator = _createForOfIteratorHelper(removingChilds),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var option = _step.value;\n      var value = option.value;\n\n      if (value != 'null') {\n        model_select.removeChild(option);\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack:///./src/components/carstore/controllers/controller-fill-select-fields.js?");

/***/ }),

/***/ "./src/components/carstore/controllers/controller-form-submitting.js":
/*!***************************************************************************!*\
  !*** ./src/components/carstore/controllers/controller-form-submitting.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../car */ \"./src/components/carstore/car.js\");\n/* harmony import */ var _car_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../car_options */ \"./src/components/carstore/car_options.js\");\n/* harmony import */ var _controller_print_cars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller-print-cars */ \"./src/components/carstore/controllers/controller-print-cars.js\");\n/* harmony import */ var _controller_delete_entry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller-delete-entry */ \"./src/components/carstore/controllers/controller-delete-entry.js\");\n\n\n\n\n/**\n * Default init function\n */\n\nfunction init() {\n  var form = document.getElementById('addCar');\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    event.stopPropagation();\n    var formElements = form.elements;\n    form_validation(formElements);\n  });\n}\n/**\n * Converting array to object\n * @param datas\n */\n\nfunction convertingToObject(datas) {\n  var safety = [datas[3], datas[4], datas[5]];\n  var newCar = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, datas[0], datas[1], datas[2], safety);\n  _car_options__WEBPACK_IMPORTED_MODULE_1__[\"carArr\"].push(newCar);\n  Object(_controller_print_cars__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_controller_delete_entry__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n/**\n * Form validations\n * @param formElements\n */\n\n\nfunction form_validation(formElements) {\n  var mark = formElements['mark'].value;\n  var model = formElements['model'].value;\n  var typ = formElements['typ'].value;\n  var turbo = formElements['turbo'].checked;\n  var abs = formElements['abs'].checked;\n  var esp = formElements['esp'].checked;\n\n  if (mark == 'null' || model == 'null') {\n    setWarnings();\n\n    if (mark == 'null') {\n      formElements['mark'].parentElement.style.border = 'solid 1px red';\n    }\n\n    if (model == 'null') formElements['model'].parentElement.style.border = 'solid 1px red';\n  } else {\n    var submitedForm = [mark, model, typ, turbo, abs, esp];\n    convertingToObject(submitedForm);\n  }\n}\n/**\n * Set warnings if all fields are not filled properly\n */\n\n\nfunction setWarnings() {\n  var warnings = document.getElementById('warnings');\n  warnings.textContent = 'Please fill out all mandatory fields!';\n  warnings.setAttribute('style', 'color: red; font-weight: bold;');\n}\n\n//# sourceURL=webpack:///./src/components/carstore/controllers/controller-form-submitting.js?");

/***/ }),

/***/ "./src/components/carstore/controllers/controller-print-cars.js":
/*!**********************************************************************!*\
  !*** ./src/components/carstore/controllers/controller-print-cars.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\n/* harmony import */ var _car_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../car_options */ \"./src/components/carstore/car_options.js\");\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n/**\n * Default inti function\n */\n\nfunction init() {\n  var carlenght = _car_options__WEBPACK_IMPORTED_MODULE_0__[\"carArr\"].length;\n\n  if (carlenght > 0) {\n    generatedList();\n    fillList();\n    updateTitle(carlenght);\n  }\n}\n/**\n * generated list of cars\n */\n\nfunction generatedList() {\n  var fieldset = document.getElementsByTagName('fieldset')[0];\n  var list = '';\n\n  if (!fieldset.querySelector('#carlist')) {\n    list = document.createElement('ul');\n    list.id = 'carlist';\n  } else {\n    list = document.getElementById('carlist');\n    list.innerText = '';\n  }\n\n  fieldset.appendChild(list);\n}\n/**\n * Fill list\n */\n\n\nfunction fillList() {\n  var carlist = document.getElementById('carlist');\n  var index = 0;\n\n  var _iterator = _createForOfIteratorHelper(_car_options__WEBPACK_IMPORTED_MODULE_0__[\"carArr\"]),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var car = _step.value;\n      var list = document.createElement('li');\n      var mark = car['mark'];\n      var model = car['model'];\n      var typ = car['typ'];\n      var turbo = car['safety'][0];\n      var abs = car['safety'][1];\n      var esp = car['safety'][2];\n      list.innerHTML = \"<div class=\\\"car\\\" index=\\\"\".concat(index, \"\\\">\\n                            <div class=\\\"left\\\">\\n                                <p class=\\\"mark\\\">\").concat(_car_options__WEBPACK_IMPORTED_MODULE_0__[\"car_mark\"][mark]['name'], \" - \").concat(_car_options__WEBPACK_IMPORTED_MODULE_0__[\"car_model\"][mark][model], \"</p>\\n                                <p class=\\\"typ\\\">\").concat(typ, \"</p>\\n                                <ul>\\n                                    <li \").concat(turbo ? 'class=\"oop\"' : '', \">Turbo: \").concat(turbo ? 'Yes' : 'No', \"</li>\\n                                    <li \").concat(abs ? 'class=\"oop\"' : '', \">ABS: \").concat(abs ? 'Yes' : 'No', \"</li>\\n                                    <li \").concat(esp ? 'class=\"oop\"' : '', \">ESP: \").concat(esp ? 'Yes' : 'No', \"</li>\\n                                </ul>\\n                            </div>\\n                            <div class=\\\"right\\\">\\n                                <span class=\\\"remove\\\" id=\\\"\").concat(index, \"\\\">X</span>\\n                            </div>\\n                            </div>\");\n      carlist.appendChild(list);\n      index++;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n/**\n * Update car title\n * @param carlength\n */\n\n\nfunction updateTitle(carlength) {\n  var title = document.querySelector('fieldset').querySelector('h2');\n  var lengthText = carlength == 1 ? \"List of one car\" : \"List of \" + carlength + \" cars\";\n  title.textContent = lengthText;\n}\n\n//# sourceURL=webpack:///./src/components/carstore/controllers/controller-print-cars.js?");

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carstore_controllers_controller_fill_select_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carstore/controllers/controller-fill-select-fields */ \"./src/components/carstore/controllers/controller-fill-select-fields.js\");\n/* harmony import */ var _carstore_controllers_controller_form_submitting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carstore/controllers/controller-form-submitting */ \"./src/components/carstore/controllers/controller-form-submitting.js\");\n/* harmony import */ var _carstore_controllers_controller_print_cars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carstore/controllers/controller-print-cars */ \"./src/components/carstore/controllers/controller-print-cars.js\");\n/**\n * Main JS file\n */\n\n\n //fill all selects\n\nObject(_carstore_controllers_controller_fill_select_fields__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_carstore_controllers_controller_form_submitting__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_carstore_controllers_controller_print_cars__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./src/components/main.js?");

/***/ })

/******/ });