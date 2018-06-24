webpackHotUpdate(4,{

/***/ "./pages/employees.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_employee_context__ = __webpack_require__("./components/employee_context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page__ = __webpack_require__("./components/page.js");
var _jsxFileName = "/Users/stevenchoi/MyAppAcademyProjects/next_js/pages/employees.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EmployeesTable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = function _default(props) {
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
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmployeesTable, "EmployeesTable", "/Users/stevenchoi/MyAppAcademyProjects/next_js/pages/employees.js");
  reactHotLoader.register(_default, "default", "/Users/stevenchoi/MyAppAcademyProjects/next_js/pages/employees.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/employees")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.13c92f6f36004f68e70b.hot-update.js.map