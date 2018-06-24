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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_employee_context__ = __webpack_require__(1);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var EmployeeForm =
/*#__PURE__*/
function (_Component) {
  _inherits(EmployeeForm, _Component);

  function EmployeeForm(props) {
    var _this;

    _classCallCheck(this, EmployeeForm);

    _this = _possibleConstructorReturn(this, (EmployeeForm.__proto__ || Object.getPrototypeOf(EmployeeForm)).call(this, props));
    var now = new Date();
    var month = now.getUTCMonth() + 1;

    if (month < 10) {
      month = "0" + month;
    }

    var year = now.getUTCFullYear();
    _this.state = {
      firstName: "",
      lastName: "",
      annualSalary: "",
      superRate: "",
      payPeriodStartDate: "".concat(year, "-").concat(month)
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EmployeeForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event, addEmployee) {
      event.preventDefault();

      if (this.state.firstName === "" || this.state.lastName === "" || this.state.annualSalary === "" || this.state.superRate === "" || this.state.payPeriodStartDate === "") {
        console.log("Error msg: fill in all fields!");
      } else {
        addEmployee(this.state); // Reset input fields

        this.setState({
          firstName: "",
          lastName: "",
          annualSalary: "",
          superRate: "",
          payPeriodStartDate: ""
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_employee_context__["a" /* EmployeeContext */].Consumer, null, function (context) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "page employee-form"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
          className: "container",
          onSubmit: function onSubmit(event) {
            return _this2.handleSubmit(event, context.addEmployee);
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", null, "New Employee"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "form-group row"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          className: "col-sm-6 col-form-label"
        }, "First Name:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          type: "text",
          name: "firstName",
          className: "form-control",
          value: _this2.state.firstName,
          onChange: _this2.handleChange,
          placeholder: "First Name"
        }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "form-group row"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          className: "col-sm-6 col-form-label"
        }, "Last Name:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          type: "text",
          name: "lastName",
          className: "form-control",
          value: _this2.state.lastName,
          onChange: _this2.handleChange,
          placeholder: "Last Name"
        }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "form-group row"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          className: "col-sm-6 col-form-label"
        }, "Annual Salary (natural numbers):"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          type: "number",
          name: "annualSalary",
          className: "form-control",
          value: _this2.state.annualSalary,
          onChange: _this2.handleChange,
          placeholder: "e.g. 50000",
          min: "0"
        }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "form-group row"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          className: "col-sm-6 col-form-label"
        }, "Super Rate (0% - 12% inclusive):"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          type: "number",
          name: "superRate",
          className: "form-control",
          value: _this2.state.superRate,
          onChange: _this2.handleChange,
          min: "0",
          max: "12"
        }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "form-group row"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          className: "col-sm-6 col-form-label"
        }, "Pay Period Start Date (month and year):"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          type: "month",
          name: "payPeriodStartDate",
          className: "form-control",
          value: _this2.state.payPeriodStartDate,
          onChange: _this2.handleChange,
          min: "2000-01",
          max: "2020-12"
        }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "form-group row"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "col-sm-10"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          className: "btn btn-primary"
        }, "Enter")))));
      });
    }
  }]);

  return EmployeeForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EmployeeForm);

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ })
/******/ ]);