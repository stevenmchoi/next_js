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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/employee_context.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export employees */
/* unused harmony export employeeRows */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_employee_data__ = __webpack_require__("./util/employee_data.js");
var _jsxFileName = "/Users/stevenchoi/MyAppAcademyProjects/next_js/components/employee_context.js";



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
      key: employeeName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, employeeName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, payPeriod), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, grossIncome), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, incomeTax), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, netIncome), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, superAmount));
  });
};
var EmployeeContext = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createContext"])({
  employees: employees,
  addEmployee: addEmployee,
  employeeRows: employeeRows
});

/***/ }),

/***/ "./components/menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/stevenchoi/MyAppAcademyProjects/next_js/components/menu.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var href = _ref.href,
      label = _ref.label;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-3103296810"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3103296810"
  }, label)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3103296810",
    css: ".jsx-3103296810{padding:6px 4px;}a.jsx-3103296810{color:#fff;-webkit-text-decoration:none;text-decoration:none;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNYyxBQUdxQixBQUlMLFdBQ1UsS0FKdEIsNkNBS2dCLGVBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHMvbWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RldmVuY2hvaS9NeUFwcEFjYWRlbXlQcm9qZWN0cy9uZXh0X2pzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgKCB7IGhyZWYsIGxhYmVsIH0gKSA9PiAoXG5cdDxzcGFuPlxuXHRcdDxMaW5rIGhyZWY9e2hyZWZ9PjxhPntsYWJlbH08L2E+PC9MaW5rPlxuXG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0e1xuXHRcdFx0XHRwYWRkaW5nOiA2cHggNHB4O1xuXHRcdFx0fTtcblxuXHRcdFx0YSB7XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdH07XG5cdFx0YH08L3N0eWxlPlxuXHQ8L3NwYW4+XG4pO1xuIl19 */\n/*@ sourceURL=components/menu.js */"
  }));
});

/***/ }),

/***/ "./components/page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__("./components/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_employee_data__ = __webpack_require__("./util/employee_data.js");
var _jsxFileName = "/Users/stevenchoi/MyAppAcademyProjects/next_js/components/page.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _default =
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("html", {
        lang: "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("head", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        integrity: "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Employee Paystubs")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-3719217024"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-3719217024"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* default */], {
        href: '/',
        label: 'New Employee',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* default */], {
        key: "employees",
        href: '/employees',
        label: 'Employees',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), this.props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3719217024",
        css: "body{font-family:Helvetica,sans-serif;}nav{text-align:left;background-color:#000;color:#fff;padding:12px;position:fixed;z-index:1000;top:0;left:0;right:0;}a{color:#0e0e0e;-webkit-text-decoration:none;text-decoration:none;}.page{width:100%;color:#333;margin-top:45px;}.employee-form{width:600px;margin:60px 15px;padding:15px 15px;box-shadow:0 0 2px gray;border-radius:10px;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QnlCLEFBRzJDLEFBSWxCLEFBWUYsQUFLSCxBQU1DLFdBTEQsQ0FNTSxFQVhJLEVBWkMsTUFrQk4sT0FNRSxJQTVCbkIsS0FLWSxBQWtCWixTQU15QixFQXZCWCxhQUNFLEVBVWhCLE9BYW9CLE1BdEJOLGFBQ1AsQUFzQmdCLE1BckJmLE9BQ0MsUUFDVCxDQW9CQSIsImZpbGUiOiJjb21wb25lbnRzL3BhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXZlbmNob2kvTXlBcHBBY2FkZW15UHJvamVjdHMvbmV4dF9qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNhbGNOZXdFbXBsb3llZURhdGEgZnJvbSBcIi4uL3V0aWwvZW1wbG95ZWVfZGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHRcdDxoZWFkPlxuXHRcdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIgLz5cblx0XHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMS4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1Xc2toYVNHRmdIWVdEY2J3TjcwL2RmWUJqNDdqejlxYnNNSWQvaVJOM2V3R2hYUUZaQ1NmdGQxTFpDZm1oa3RCXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuXG5cdFx0XHRcdFx0PHRpdGxlPkVtcGxveWVlIFBheXN0dWJzPC90aXRsZT5cblx0XHRcdFx0PC9oZWFkPlxuXHRcdFx0XHQ8Ym9keT5cblx0XHRcdFx0XHQ8bWFpbj5cblx0XHRcdFx0XHRcdDxuYXY+XG5cdFx0XHRcdFx0XHRcdDxNZW51IGhyZWY9eycvJ30gbGFiZWw9eydOZXcgRW1wbG95ZWUnfSAvPlxuXHRcdFx0XHRcdFx0XHQ8TWVudSBrZXk9J2VtcGxveWVlcycgaHJlZj17Jy9lbXBsb3llZXMnfSBsYWJlbD17J0VtcGxveWVlcyd9IC8+XG5cdFx0XHRcdFx0XHQ8L25hdj5cblxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cblx0XHRcdFx0XHRcdDxzdHlsZSBnbG9iYWwganN4PntgXG5cdFx0XHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0bmF2IHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTJweDtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHRcdFx0ei1pbmRleDogMTAwMDtcblx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzBlMGUwZTtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0LnBhZ2Uge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDQ1cHg7XG5cdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0LmVtcGxveWVlLWZvcm0ge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA2MDBweDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDYwcHggMTVweDtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4IDE1cHg7XG5cdFx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAwIDJweCBncmF5O1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0XHQ8L21haW4+XG5cblx0XHRcdFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjMuMS5zbGltLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1xOGkvWCs5NjVEek8wclQ3YWJLNDFKU3RRSUFxVmdSVnpwYnpvNXNtWEtwNFlmUnZIKzhhYnRURTFQaTZqaXpvXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cblx0XHRcdFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE0LjMvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtWk1QN3JWbzNtSXlrVisyKzlKM1VKNDZqQmswV0xhVUFkbjY4OWFDd29xYkJKaVNuakFLL2w4V3ZDV1BJUG00OVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG5cdFx0XHRcdFx0PHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjEuMS9qcy9ib290c3RyYXAubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LXNtSFlLZExBRHdrWE9uMUVtTjFxay9IZm5VY2JWUlp5WW1aNHFwUGVhNnNqQi9wVEowZXV5UXAwTWs4Y2srNVRcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuXHRcdFx0XHQ8L2JvZHk+XG5cdFx0XHQ8L2h0bWwgPlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/page.js */"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        integrity: "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js",
        integrity: "sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./pages/employees.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_employee_context__ = __webpack_require__("./components/employee_context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page__ = __webpack_require__("./components/page.js");
var _jsxFileName = "/Users/stevenchoi/MyAppAcademyProjects/next_js/pages/employees.js";


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
        className: "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
        className: "table table-striped",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
        className: "thead-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        key: "header-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Employee Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "Pay Period"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Gross Income"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "Income Tax"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "Net Income"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Super Amount"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, this.props.employeeRows)));
    }
  }]);

  return EmployeesTable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_page__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_employee_context__["a" /* EmployeeContext */].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, function (_ref) {
    var employeeRows = _ref.employeeRows;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EmployeesTable, {
      employeeRows: employeeRows(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    });
  }));
});

/***/ }),

/***/ "./util/employee_data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__income_tax__ = __webpack_require__("./util/income_tax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pay_period__ = __webpack_require__("./util/pay_period.js");


/* harmony default export */ __webpack_exports__["a"] = (function (newEmployee) {
  var employeeName = "".concat(newEmployee.firstName, " ").concat(newEmployee.lastName);
  var payPeriod = Object(__WEBPACK_IMPORTED_MODULE_1__pay_period__["a" /* default */])(newEmployee.payPeriodStartDate);
  var grossIncome = Math.floor(parseInt(newEmployee.annualSalary) / 12);
  var incomeTax = Object(__WEBPACK_IMPORTED_MODULE_0__income_tax__["a" /* default */])(newEmployee.annualSalary);
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

/***/ "./util/income_tax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (annualSalary) {
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

/***/ }),

/***/ "./util/pay_period.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (payPeriodStartDate) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dateList = payPeriodStartDate.split('-');
  var year = dateList[0];
  var monthNum = parseInt(dateList[1]);
  var month = months[monthNum - 1];
  var endDate = new Date(year, monthNum, 0).getDate();
  var payPeriod = "01 ".concat(month, " - ").concat(endDate, " ").concat(month);
  return payPeriod;
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/employees.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=employees.js.map