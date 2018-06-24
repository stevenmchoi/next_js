module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export employees */
/* unused harmony export employeeRows */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_employee_data__ = __webpack_require__(2);



var employees = [{
  employeeName: "Andrew Smith",
  payPeriod: "01 March - 31 March",
  grossIncome: 5004,
  incomeTax: 922,
  netIncome: 4082,
  superAmount: 450
}, {
  employeeName: "Claire Wong",
  payPeriod: "01 March - 31 March",
  grossIncome: 10000,
  incomeTax: 2669,
  netIncome: 7331,
  superAmount: 1000
}];

function addEmployee(newEmployee) {
  var newEmployeeData = Object(__WEBPACK_IMPORTED_MODULE_1__util_employee_data__["a" /* default */])(newEmployee);
  employees.push(newEmployeeData);
}

var employeeRows = function employeeRows() {
  return employees.map(function (_ref) {
    var employeeName = _ref.employeeName,
        payPeriod = _ref.payPeriod,
        grossIncome = _ref.grossIncome,
        incomeTax = _ref.incomeTax,
        netIncome = _ref.netIncome,
        superAmount = _ref.superAmount;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
      key: employeeName
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
      scope: "row"
    }, employeeName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, payPeriod), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, grossIncome), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, incomeTax), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, netIncome), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", null, superAmount));
  });
};
var EmployeeContext = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createContext"])({
  employees: employees,
  addEmployee: addEmployee,
  employeeRows: employeeRows
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./util/income_tax.js
/* harmony default export */ var income_tax = (function (annualSalary) {
  var incomeTax = 0;

  if (18200 < annualSalary && annualSalary <= 37000) {
    incomeTax = Math.round(.19 * (annualSalary - 18200) / 12);
  } else if (37000 < annualSalary && annualSalary <= 87000) {
    incomeTax = Math.round((3572 + .325 * (annualSalary - 37000)) / 12);
  } else if (87000 < annualSalary && annualSalary <= 180000) {
    incomeTax = Math.round((19822 + .37 * (annualSalary - 87000)) / 12);
  } else if (180000 < annualSalary) {
    incomeTax = Math.round((54232 + .45 * (annualSalary - 180000)) / 12);
  }

  return incomeTax;
});
// CONCATENATED MODULE: ./util/pay_period.js
/* harmony default export */ var pay_period = (function (payPeriodStartDate) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dateList = payPeriodStartDate.split('-');
  var year = dateList[0];
  var monthNum = parseInt(dateList[1]);
  var month = months[monthNum - 1];
  var endDate = new Date(year, monthNum, 0).getDate();
  var payPeriod = "01 ".concat(month, " - ").concat(endDate, " ").concat(month);
  return payPeriod;
});
// CONCATENATED MODULE: ./util/employee_data.js


/* harmony default export */ var employee_data = __webpack_exports__["a"] = (function (newEmployee) {
  var employeeName = "".concat(newEmployee.firstName, " ").concat(newEmployee.lastName);
  var payPeriod = pay_period(newEmployee.payPeriodStartDate);
  var grossIncome = Math.floor(parseInt(newEmployee.annualSalary) / 12);
  var incomeTax = income_tax(newEmployee.annualSalary);
  var netIncome = grossIncome - incomeTax;
  var superAmount = Math.floor(grossIncome * newEmployee.superRate * .01);
  return {
    employeeName: employeeName,
    payPeriod: payPeriod,
    grossIncome: grossIncome,
    incomeTax: incomeTax,
    netIncome: netIncome,
    superAmount: superAmount
  };
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(7);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/menu.js



/* harmony default export */ var menu = (function (_ref) {
  var href = _ref.href,
      label = _ref.label;
  return external__react__default.a.createElement("span", {
    className: "jsx-3103296810"
  }, external__react__default.a.createElement(link__default.a, {
    href: href
  }, external__react__default.a.createElement("a", {
    className: "jsx-3103296810"
  }, label)), external__react__default.a.createElement(style__default.a, {
    styleId: "3103296810",
    css: [".jsx-3103296810{padding:6px 4px;}", "a.jsx-3103296810{color:#fff;-webkit-text-decoration:none;text-decoration:none;font-size:16px;}"]
  }));
});
// EXTERNAL MODULE: ./util/employee_data.js + 2 modules
var employee_data = __webpack_require__(2);

// CONCATENATED MODULE: ./components/page.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return page__default; });



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var page__default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("html", {
        lang: "en"
      }, external__react__default.a.createElement("head", null, external__react__default.a.createElement("meta", {
        charSet: "utf-8"
      }), external__react__default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        integrity: "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB",
        crossOrigin: "anonymous"
      }), external__react__default.a.createElement("title", null, "Employee Paystubs")), external__react__default.a.createElement("body", null, external__react__default.a.createElement("main", {
        className: "jsx-3719217024"
      }, external__react__default.a.createElement("nav", {
        className: "jsx-3719217024"
      }, external__react__default.a.createElement(menu, {
        href: '/',
        label: 'New Employee'
      }), external__react__default.a.createElement(menu, {
        key: "employees",
        href: '/employees',
        label: 'Employees'
      })), this.props.children, external__react__default.a.createElement(style__default.a, {
        styleId: "3719217024",
        css: ["body{font-family:Helvetica,sans-serif;}", "nav{text-align:left;background-color:#000;color:#fff;padding:12px;position:fixed;z-index:1000;top:0;left:0;right:0;}", "a{color:#0e0e0e;-webkit-text-decoration:none;text-decoration:none;}", ".page{width:100%;color:#333;margin-top:45px;}", ".employee-form{width:600px;margin:60px 15px;padding:15px 15px;box-shadow:0 0 2px gray;border-radius:10px;box-sizing:border-box;}"]
      })), external__react__default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossOrigin: "anonymous"
      }), external__react__default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        integrity: "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
        crossOrigin: "anonymous"
      }), external__react__default.a.createElement("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js",
        integrity: "sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T",
        crossOrigin: "anonymous"
      })));
    }
  }]);

  return _default;
}(external__react_["Component"]);



/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_employee_context__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page__ = __webpack_require__(4);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var EmployeesTable =
/*#__PURE__*/
function (_Component) {
  _inherits(EmployeesTable, _Component);

  function EmployeesTable() {
    _classCallCheck(this, EmployeesTable);

    return _possibleConstructorReturn(this, (EmployeesTable.__proto__ || Object.getPrototypeOf(EmployeesTable)).apply(this, arguments));
  }

  _createClass(EmployeesTable, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
        className: "table table-striped"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
        className: "thead-dark"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        key: "header-row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col"
      }, "Employee Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col"
      }, "Pay Period"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col"
      }, "Gross Income"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col"
      }, "Income Tax"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col"
      }, "Net Income"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col"
      }, "Super Amount"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", null, this.props.employeeRows)));
    }
  }]);

  return EmployeesTable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_page__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_employee_context__["a" /* EmployeeContext */].Consumer, null, function (_ref) {
    var employeeRows = _ref.employeeRows;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EmployeesTable, {
      employeeRows: employeeRows()
    });
  }));
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);