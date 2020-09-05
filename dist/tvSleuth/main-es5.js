function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-init/app-init.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/app-init/app-init.module.ts ***!
    \*********************************************/

  /*! exports provided: initApp, AppInitModule */

  /***/
  function srcAppAppInitAppInitModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initApp", function () {
      return initApp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInitModule", function () {
      return AppInitModule;
    });
    /* harmony import */


    var _services_app_init_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @services/app-init.service */
    "./src/app/services/app-init.service.ts");

    function initApp(appInitService) {
      return function () {
        return appInitService.load();
      };
    }

    var AppInitModule = function AppInitModule() {
      _classCallCheck(this, AppInitModule);
    };
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.sass.shim.ngstyle */
    "./src/app/app.component.sass.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components_dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component.ngfactory */
    "./src/app/components/dashboard/dashboard.component.ngfactory.js");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_background_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/background.service */
    "./src/app/services/background.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], null, null, null, _components_dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DashboardComponent_0"], _components_dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DashboardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);

        _ck(_v, 3, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], [_services_background_service__WEBPACK_IMPORTED_MODULE_7__["BackgroundService"]], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.sass.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.sass.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentSassShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });

    var AppComponent = function AppComponent( // for the chrome background script
    backgroundService) {
      _classCallCheck(this, AppComponent);

      this.backgroundService = backgroundService;
      this.title = 'tvSleuth';
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/dialog/typings/index.ngfactory */
    "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */
    "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
    /* harmony import */


    var _components_show_search_show_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/show-search/show-search.component.ngfactory */
    "./src/app/components/show-search/show-search.component.ngfactory.js");
    /* harmony import */


    var _components_snackbars_error_snackbar_error_snackbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/snackbars/error-snackbar/error-snackbar.component.ngfactory */
    "./src/app/components/snackbars/error-snackbar/error-snackbar.component.ngfactory.js");
    /* harmony import */


    var _components_snackbars_warn_snackbar_warn_snackbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/snackbars/warn-snackbar/warn-snackbar.component.ngfactory */
    "./src/app/components/snackbars/warn-snackbar/warn-snackbar.component.ngfactory.js");
    /* harmony import */


    var _components_snackbars_success_snackbar_success_snackbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/snackbars/success-snackbar/success-snackbar.component.ngfactory */
    "./src/app/components/snackbars/success-snackbar/success-snackbar.component.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_masonry_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng-masonry-grid */
    "./node_modules/ng-masonry-grid/ng-masonry-grid.umd.js");
    /* harmony import */


    var ng_masonry_grid__WEBPACK_IMPORTED_MODULE_20___default =
    /*#__PURE__*/
    __webpack_require__.n(ng_masonry_grid__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _services_env_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/env.service */
    "./src/app/services/env.service.ts");
    /* harmony import */


    var _services_env_service_provider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./services/env.service.provider */
    "./src/app/services/env.service.provider.ts");
    /* harmony import */


    var _services_app_init_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./services/app-init.service */
    "./src/app/services/app-init.service.ts");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./services/persistence/follow.service */
    "./src/app/services/persistence/follow.service.ts");
    /* harmony import */


    var _app_init_app_init_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./app-init/app-init.module */
    "./src/app/app-init/app-init.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "./node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/cdk/accordion */
    "./node_modules/@angular/cdk/esm2015/accordion.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SimpleSnackBarNgFactory"], _components_show_search_show_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ShowSearchComponentNgFactory"], _components_snackbars_error_snackbar_error_snackbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ErrorSnackbarComponentNgFactory"], _components_snackbars_warn_snackbar_warn_snackbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["WarnSnackbarComponentNgFactory"], _components_snackbars_success_snackbar_success_snackbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["SuccessSnackbarComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0, p1_1) {
        return [p0_0, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["removeStyles"](p1_0, p1_1)];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_18__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_masonry_grid__WEBPACK_IMPORTED_MODULE_20__["NgMasonryGridService"], ng_masonry_grid__WEBPACK_IMPORTED_MODULE_20__["NgMasonryGridService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _services_env_service__WEBPACK_IMPORTED_MODULE_26__["EnvService"], _services_env_service_provider__WEBPACK_IMPORTED_MODULE_27__["EnvServiceFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _services_app_init_service__WEBPACK_IMPORTED_MODULE_28__["AppInitService"], _services_app_init_service__WEBPACK_IMPORTED_MODULE_28__["AppInitService"], [_services_log_service__WEBPACK_IMPORTED_MODULE_29__["LogService"], _services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_30__["FollowService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_i"](p1_0), _app_init_app_init_module__WEBPACK_IMPORTED_MODULE_31__["initApp"](p2_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _services_app_init_service__WEBPACK_IMPORTED_MODULE_28__["AppInitService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () {
        return [[]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_init_app_init_module__WEBPACK_IMPORTED_MODULE_31__["AppInitModule"], _app_init_app_init_module__WEBPACK_IMPORTED_MODULE_31__["AppInitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_33__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_33__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_34__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_34__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_35__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_35__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_36__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_36__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_16__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_masonry_grid__WEBPACK_IMPORTED_MODULE_20__["NgMasonryGridModule"], ng_masonry_grid__WEBPACK_IMPORTED_MODULE_20__["NgMasonryGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_37__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_37__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_39__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_41__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_41__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_43__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_44__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_46__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_46__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_47__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_47__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_48__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_48__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_49__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_49__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_50__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_51__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_51__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_52__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_52__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_53__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_53__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_54__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_54__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ngfactory.js":
  /*!***********************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ngfactory.js ***!
    \***********************************************************************/

  /*! exports provided: RenderType_DashboardComponent, View_DashboardComponent_0, View_DashboardComponent_Host_0, DashboardComponentNgFactory */

  /***/
  function srcAppComponentsDashboardDashboardComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_DashboardComponent", function () {
      return RenderType_DashboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_0", function () {
      return View_DashboardComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_Host_0", function () {
      return View_DashboardComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponentNgFactory", function () {
      return DashboardComponentNgFactory;
    });
    /* harmony import */


    var _dashboard_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dashboard.component.sass.shim.ngstyle */
    "./src/app/components/dashboard/dashboard.component.sass.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */
    "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */
    "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _shows_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../shows/shows.component.ngfactory */
    "./src/app/components/shows/shows.component.ngfactory.js");
    /* harmony import */


    var _shows_shows_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../shows/shows.component */
    "./src/app/components/shows/shows.component.ts");
    /* harmony import */


    var _services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../services/persistence/follow.service */
    "./src/app/services/persistence/follow.service.ts");
    /* harmony import */


    var _services_api_tvmaze_show_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../services/api/tvmaze-show-api.service */
    "./src/app/services/api/tvmaze-show-api.service.ts");
    /* harmony import */


    var _services_api_tvmaze_episode_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../services/api/tvmaze-episode-api.service */
    "./src/app/services/api/tvmaze-episode-api.service.ts");
    /* harmony import */


    var _services_follow_changed_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../services/follow-changed.service */
    "./src/app/services/follow-changed.service.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_DashboardComponent = [_dashboard_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_DashboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_DashboardComponent,
      data: {}
    });

    function View_DashboardComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], {
        color: [0, "color"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _toolbarRows: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 1, 10, "mat-toolbar-row", [["class", "mat-toolbar-row"], ["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, [[1, 4]], 0, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["TV Sleuth"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "button", [["aria-label", "Add Show"], ["mat-mini-fab", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.add() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "app-shows", [], null, null, null, _shows_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_ShowsComponent_0"], _shows_shows_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_ShowsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 245760, null, 0, _shows_shows_component__WEBPACK_IMPORTED_MODULE_15__["ShowsComponent"], [_services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_16__["FollowService"], _services_api_tvmaze_show_api_service__WEBPACK_IMPORTED_MODULE_17__["TvmazeShowApiService"], _services_api_tvmaze_episode_api_service__WEBPACK_IMPORTED_MODULE_18__["TvmazeEpisodeApiService"], _services_follow_changed_service__WEBPACK_IMPORTED_MODULE_19__["FollowChangedService"]], null, null)], function (_ck, _v) {
        var currVal_2 = "primary";

        _ck(_v, 1, 0, currVal_2);

        var currVal_3 = "row";

        _ck(_v, 4, 0, currVal_3);

        var currVal_4 = "space-between center";

        _ck(_v, 5, 0, currVal_4);

        _ck(_v, 12, 0);

        _ck(_v, 15, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length > 0;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length === 0;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).disabled || null;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._animationMode === "NoopAnimations";

        _ck(_v, 9, 0, currVal_5, currVal_6);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).inline;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "warn";

        _ck(_v, 11, 0, currVal_7, currVal_8);
      });
    }

    function View_DashboardComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialog"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var DashboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dashboard", _dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"], View_DashboardComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/dashboard/dashboard.component.sass.shim.ngstyle.js":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.sass.shim.ngstyle.js ***!
    \*******************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsDashboardDashboardComponentSassShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: white;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9Bbmd1bGFyL3R2U2xldXRoL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0FDQUo7O0FERUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uXG4gIG1hdC1pY29uXG4gICAgZmlsbDogd2hpdGVcblxubWF0LXRvb2xiYXJcbiAgcG9zaXRpb246IGZpeGVkXG4gIHotaW5kZXg6IDIiLCJidXR0b24gbWF0LWljb24ge1xuICBmaWxsOiB3aGl0ZTtcbn1cblxubWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _show_search_show_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../show-search/show-search.component */
    "./src/app/components/show-search/show-search.component.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(_dialog) {
        _classCallCheck(this, DashboardComponent);

        this._dialog = _dialog;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          var dialogRef = this._dialog.open(_show_search_show_search_component__WEBPACK_IMPORTED_MODULE_1__["ShowSearchComponent"], {
            width: "300px"
          });
        }
      }]);

      return DashboardComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/episode/episode.component.ngfactory.js":
  /*!*******************************************************************!*\
    !*** ./src/app/components/episode/episode.component.ngfactory.js ***!
    \*******************************************************************/

  /*! exports provided: RenderType_EpisodeComponent, View_EpisodeComponent_0, View_EpisodeComponent_Host_0, EpisodeComponentNgFactory */

  /***/
  function srcAppComponentsEpisodeEpisodeComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_EpisodeComponent", function () {
      return RenderType_EpisodeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_EpisodeComponent_0", function () {
      return View_EpisodeComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_EpisodeComponent_Host_0", function () {
      return View_EpisodeComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeComponentNgFactory", function () {
      return EpisodeComponentNgFactory;
    });
    /* harmony import */


    var _episode_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./episode.component.sass.shim.ngstyle */
    "./src/app/components/episode/episode.component.sass.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _episode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./episode.component */
    "./src/app/components/episode/episode.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_EpisodeComponent = [_episode_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_EpisodeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_EpisodeComponent,
      data: {}
    });

    function View_EpisodeComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "mat-h4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Last episode was"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 2)], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _co.episode.airdate, "E dd LLLL yyyy"));

        _ck(_v, 3, 0, currVal_0);
      });
    }

    function View_EpisodeComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "mat-h4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["New episode is in ", " days on"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 2)], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.episode.daysToGo;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _co.episode.airdate, "E dd LLLL yyyy"));

        _ck(_v, 3, 0, currVal_1);
      });
    }

    function View_EpisodeComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "image"], ["fxFlex", "33"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) {
        var currVal_0 = "33";

        _ck(_v, 1, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.episode.image.medium;

        _ck(_v, 2, 0, currVal_1);
      });
    }

    function View_EpisodeComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [["class", "episode"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        previous: 0,
        next: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]]], {
        ngClass: [0, "ngClass"],
        klass: [1, "klass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, {
        previous: 0,
        next: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 9, "div", [["class", "top"], ["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EpisodeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EpisodeComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "div", [["class", "mat-h1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" S", "E", " - ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 5, "div", [["class", "content"], ["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "div", [["class", "summary"], ["fxFlex", ""]], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EpisodeComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "episode";

        var currVal_1 = _ck(_v, 3, 0, !_co.next, _co.next);

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_2 = _ck(_v, 5, 0, !_co.next, _co.next);

        var currVal_3 = "episode";

        _ck(_v, 4, 0, currVal_2, currVal_3);

        var currVal_4 = "column";

        _ck(_v, 7, 0, currVal_4);

        var currVal_5 = !_co.next;

        _ck(_v, 9, 0, currVal_5);

        var currVal_6 = _co.next;

        _ck(_v, 11, 0, currVal_6);

        var currVal_10 = "row";

        _ck(_v, 17, 0, currVal_10);

        var currVal_12 = "";

        _ck(_v, 19, 0, currVal_12);

        var currVal_13 = _co.episode.image && _co.episode.image.medium;

        _ck(_v, 21, 0, currVal_13);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _co.episode.season, "2.0"));

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 1, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _co.episode.number, "2.0"));

        var currVal_9 = _co.episode.name;

        _ck(_v, 13, 0, currVal_7, currVal_8, currVal_9);

        var currVal_11 = _co.episode.summary;

        _ck(_v, 18, 0, currVal_11);
      });
    }

    function View_EpisodeComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EpisodeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.episode;

        _ck(_v, 3, 0, currVal_0);
      }, null);
    }

    function View_EpisodeComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-episode", [], null, null, null, View_EpisodeComponent_0, RenderType_EpisodeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _episode_component__WEBPACK_IMPORTED_MODULE_6__["EpisodeComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var EpisodeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-episode", _episode_component__WEBPACK_IMPORTED_MODULE_6__["EpisodeComponent"], View_EpisodeComponent_Host_0, {
      episode: "episode",
      next: "next"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/components/episode/episode.component.sass.shim.ngstyle.js":
  /*!***************************************************************************!*\
    !*** ./src/app/components/episode/episode.component.sass.shim.ngstyle.js ***!
    \***************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsEpisodeEpisodeComponentSassShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".episode[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.episode.previous[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  color: #3f50b6;\n}\n.episode.next[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  color: #ff4080;\n}\n.episode[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .mat-h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.episode[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .mat-h4[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n.episode[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .mat-h1[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.episode[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  text-align: justify;\n  padding-right: 16px;\n}\n.episode[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9Bbmd1bGFyL3R2U2xldXRoL3NyYy9hcHAvY29tcG9uZW50cy9lcGlzb2RlL2VwaXNvZGUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXBpc29kZS9lcGlzb2RlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0k7RUFDRSxjQUFBO0FDQ047QURDSTtFQUNFLGNBQUE7QUNDTjtBRENJO0VBQ0UsU0FBQTtBQ0NOO0FEQU07RUFDRSxnQkFBQTtBQ0VSO0FEREk7RUFDRSxlQUFBO0FDR047QURESTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNHTjtBRERNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VwaXNvZGUvZXBpc29kZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcGlzb2RlXG4gIHBhZGRpbmctdG9wOiA4cHhcbiAgcGFkZGluZy1ib3R0b206IDhweFxuICAmLnByZXZpb3VzXG4gICAgLnRvcFxuICAgICAgY29sb3I6ICMzZjUwYjZcbiAgJi5uZXh0XG4gICAgLnRvcFxuICAgICAgY29sb3I6ICNmZjQwODBcbiAgLnRvcFxuICAgIC5tYXQtaDRcbiAgICAgIG1hcmdpbjogMFxuICAgICAgYlxuICAgICAgICBmb250LXdlaWdodDogMTAwXG4gICAgLm1hdC1oMVxuICAgICAgZm9udC1zaXplOiAxOHB4XG4gIC5jb250ZW50XG4gICAgLnN1bW1hcnlcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnlcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHhcbiAgICAuaW1hZ2VcbiAgICAgIGltZ1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHgiLCIuZXBpc29kZSB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uZXBpc29kZS5wcmV2aW91cyAudG9wIHtcbiAgY29sb3I6ICMzZjUwYjY7XG59XG4uZXBpc29kZS5uZXh0IC50b3Age1xuICBjb2xvcjogI2ZmNDA4MDtcbn1cbi5lcGlzb2RlIC50b3AgLm1hdC1oNCB7XG4gIG1hcmdpbjogMDtcbn1cbi5lcGlzb2RlIC50b3AgLm1hdC1oNCBiIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5lcGlzb2RlIC50b3AgLm1hdC1oMSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5lcGlzb2RlIC5jb250ZW50IC5zdW1tYXJ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbi5lcGlzb2RlIC5jb250ZW50IC5pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/components/episode/episode.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/episode/episode.component.ts ***!
    \*********************************************************/

  /*! exports provided: EpisodeComponent */

  /***/
  function srcAppComponentsEpisodeEpisodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeComponent", function () {
      return EpisodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EpisodeComponent =
    /*#__PURE__*/
    function () {
      function EpisodeComponent() {
        _classCallCheck(this, EpisodeComponent);

        this.next = false;
      }

      _createClass(EpisodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EpisodeComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/show-details/show-details.component.ngfactory.js":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/show-details/show-details.component.ngfactory.js ***!
    \*****************************************************************************/

  /*! exports provided: RenderType_ShowDetailsComponent, View_ShowDetailsComponent_0, View_ShowDetailsComponent_Host_0, ShowDetailsComponentNgFactory */

  /***/
  function srcAppComponentsShowDetailsShowDetailsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ShowDetailsComponent", function () {
      return RenderType_ShowDetailsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ShowDetailsComponent_0", function () {
      return View_ShowDetailsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ShowDetailsComponent_Host_0", function () {
      return View_ShowDetailsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowDetailsComponentNgFactory", function () {
      return ShowDetailsComponentNgFactory;
    });
    /* harmony import */


    var _show_details_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./show-details.component.sass.shim.ngstyle */
    "./src/app/components/show-details/show-details.component.sass.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_divider_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/divider/typings/index.ngfactory */
    "./node_modules/@angular/material/divider/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _episode_episode_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../episode/episode.component.ngfactory */
    "./src/app/components/episode/episode.component.ngfactory.js");
    /* harmony import */


    var _episode_episode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../episode/episode.component */
    "./src/app/components/episode/episode.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/card/typings/index.ngfactory */
    "./node_modules/@angular/material/card/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */
    "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../pipes/truncate.pipe */
    "./src/app/pipes/truncate.pipe.ts");
    /* harmony import */


    var _pipes_striphtml_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../pipes/striphtml.pipe */
    "./src/app/pipes/striphtml.pipe.ts");
    /* harmony import */


    var _show_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./show-details.component */
    "./src/app/components/show-details/show-details.component.ts");
    /* harmony import */


    var _services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../services/persistence/follow.service */
    "./src/app/services/persistence/follow.service.ts");
    /* harmony import */


    var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../services/snackbar.service */
    "./src/app/services/snackbar.service.ts");
    /* harmony import */


    var _services_follow_changed_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../../services/follow-changed.service */
    "./src/app/services/follow-changed.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ShowDetailsComponent = [_show_details_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ShowDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ShowDetailsComponent,
      data: {}
    });

    function View_ShowDetailsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, _node_modules_angular_material_divider_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatDivider_0"], _node_modules_angular_material_divider_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatDivider"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], [], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical ? "vertical" : "horizontal";

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical;

        var currVal_2 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inset;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_ShowDetailsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, _node_modules_angular_material_divider_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatDivider_0"], _node_modules_angular_material_divider_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatDivider"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-episode", [], null, null, null, _episode_episode_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_EpisodeComponent_0"], _episode_episode_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_EpisodeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _episode_episode_component__WEBPACK_IMPORTED_MODULE_5__["EpisodeComponent"], [], {
        episode: [0, "episode"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "app-episode", [], null, null, null, _episode_episode_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_EpisodeComponent_0"], _episode_episode_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_EpisodeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 0, _episode_episode_component__WEBPACK_IMPORTED_MODULE_5__["EpisodeComponent"], [], {
        episode: [0, "episode"],
        next: [1, "next"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_4 = _co.show.previousEpisode;

        _ck(_v, 4, 0, currVal_4);

        var currVal_5 = _co.show.nextEpisode;

        _ck(_v, 6, 0, currVal_5);

        var currVal_6 = _co.show.nextEpisode;
        var currVal_7 = true;

        _ck(_v, 8, 0, currVal_6, currVal_7);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).vertical ? "vertical" : "horizontal";

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).vertical;

        var currVal_2 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).vertical;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).inset;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_ShowDetailsComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["color", "primary"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.follow() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["FOLLOW"]))], function (_ck, _v) {
        var currVal_2 = "primary";

        _ck(_v, 1, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_ShowDetailsComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["color", "primary"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.unfollow() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["UNFOLLOW"]))], function (_ck, _v) {
        var currVal_2 = "primary";

        _ck(_v, 1, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_ShowDetailsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "mat-card-actions", [["class", "mat-card-actions"], ["fxLayout", "row"], ["fxLayoutAlign", "end center"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = "row";

        _ck(_v, 1, 0, currVal_1);

        var currVal_2 = "end center";

        _ck(_v, 2, 0, currVal_2);

        var currVal_3 = !_co.show.following;

        _ck(_v, 5, 0, currVal_3);

        var currVal_4 = _co.show.following;

        _ck(_v, 7, 0, currVal_4);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).align === "end";

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ShowDetailsComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "mat-card-actions", [["class", "mat-card-actions"], ["fxLayout", "row"], ["fxLayoutAlign", "end center"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "button", [["color", "primary"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.unfollow() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["UNFOLLOW"]))], function (_ck, _v) {
        var currVal_1 = "row";

        _ck(_v, 1, 0, currVal_1);

        var currVal_2 = "end center";

        _ck(_v, 2, 0, currVal_2);

        var currVal_5 = "primary";

        _ck(_v, 5, 0, currVal_5);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).align === "end";

        _ck(_v, 0, 0, currVal_0);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled || null;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationMode === "NoopAnimations";

        _ck(_v, 4, 0, currVal_3, currVal_4);
      });
    }

    function View_ShowDetailsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 33, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 20, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 4, "div", [["class", "mat-card-avatar"], ["mat-card-avatar", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵNgStyleImpl"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultStyleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵNgStyleImpl"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardAvatar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 1, 10, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 6, "div", [["class", "rating"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["inline", "true"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], {
        inline: [0, "inline"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["grade"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, [" ", " / 10 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 6, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "div", [["class", "show-summary"]], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](26, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](27, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ShowDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ShowDetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.show.avatar;

        _ck(_v, 6, 0, currVal_1);

        var currVal_2 = _co.show.avatar;

        _ck(_v, 7, 0, currVal_2);

        var currVal_4 = "row";

        _ck(_v, 14, 0, currVal_4);

        var currVal_5 = "start center";

        _ck(_v, 15, 0, currVal_5);

        var currVal_8 = "true";

        _ck(_v, 17, 0, currVal_8);

        var currVal_12 = !_co.manageable && (_co.show.previousEpisode || _co.show.nextEpisode);

        _ck(_v, 29, 0, currVal_12);

        var currVal_13 = _co.manageable;

        _ck(_v, 31, 0, currVal_13);

        var currVal_14 = !_co.manageable;

        _ck(_v, 33, 0, currVal_14);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0);

        var currVal_3 = _co.show.name;

        _ck(_v, 12, 0, currVal_3);

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).inline;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).color !== "warn";

        _ck(_v, 16, 0, currVal_6, currVal_7);

        var currVal_9 = _co.show.rating.average;

        _ck(_v, 19, 0, currVal_9);

        var currVal_10 = _co.show.type;

        _ck(_v, 22, 0, currVal_10);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 25, 0, _ck(_v, 27, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 25, 0, _ck(_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _co.show.summary)), 350));

        _ck(_v, 25, 0, currVal_11);
      });
    }

    function View_ShowDetailsComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "show-summary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "button", [["color", "primary"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.toggleSummary() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["More"]))], function (_ck, _v) {
        var currVal_3 = "primary";

        _ck(_v, 5, 0, currVal_3);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _co.show.summary)), 150));

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled || null;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationMode === "NoopAnimations";

        _ck(_v, 4, 0, currVal_1, currVal_2);
      });
    }

    function View_ShowDetailsComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "show-summary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "button", [["color", "primary"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.toggleSummary() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Less"]))], function (_ck, _v) {
        var currVal_3 = "primary";

        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _co.show.summary));

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled || null;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations";

        _ck(_v, 3, 0, currVal_1, currVal_2);
      });
    }

    function View_ShowDetailsComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, _node_modules_angular_material_divider_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatDivider_0"], _node_modules_angular_material_divider_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatDivider"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], [], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical ? "vertical" : "horizontal";

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical;

        var currVal_2 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inset;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_ShowDetailsComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, _node_modules_angular_material_divider_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatDivider_0"], _node_modules_angular_material_divider_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatDivider"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-episode", [], null, null, null, _episode_episode_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_EpisodeComponent_0"], _episode_episode_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_EpisodeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _episode_episode_component__WEBPACK_IMPORTED_MODULE_5__["EpisodeComponent"], [], {
        episode: [0, "episode"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "app-episode", [], null, null, null, _episode_episode_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_EpisodeComponent_0"], _episode_episode_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_EpisodeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 0, _episode_episode_component__WEBPACK_IMPORTED_MODULE_5__["EpisodeComponent"], [], {
        episode: [0, "episode"],
        next: [1, "next"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_4 = _co.show.previousEpisode;

        _ck(_v, 4, 0, currVal_4);

        var currVal_5 = _co.show.nextEpisode;

        _ck(_v, 6, 0, currVal_5);

        var currVal_6 = _co.show.nextEpisode;
        var currVal_7 = true;

        _ck(_v, 8, 0, currVal_6, currVal_7);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).vertical ? "vertical" : "horizontal";

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).vertical;

        var currVal_2 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).vertical;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).inset;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_ShowDetailsComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["color", "primary"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.follow() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["FOLLOW"]))], function (_ck, _v) {
        var currVal_2 = "primary";

        _ck(_v, 1, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_ShowDetailsComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["color", "primary"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.unfollow() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["UNFOLLOW"]))], function (_ck, _v) {
        var currVal_2 = "primary";

        _ck(_v, 1, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_ShowDetailsComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "row";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "end center";

        _ck(_v, 2, 0, currVal_1);

        var currVal_2 = !_co.show.following;

        _ck(_v, 4, 0, currVal_2);

        var currVal_3 = _co.show.following;

        _ck(_v, 6, 0, currVal_3);
      }, null);
    }

    function View_ShowDetailsComponent_16(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "button", [["color", "primary"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.unfollow() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["UNFOLLOW"]))], function (_ck, _v) {
        var currVal_0 = "row";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "end center";

        _ck(_v, 2, 0, currVal_1);

        var currVal_4 = "primary";

        _ck(_v, 4, 0, currVal_4);
      }, function (_ck, _v) {
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled || null;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations";

        _ck(_v, 3, 0, currVal_2, currVal_3);
      });
    }

    function View_ShowDetailsComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [["class", "rating"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["inline", "true"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], {
        inline: [0, "inline"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["grade"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " / 10 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = "true";

        _ck(_v, 6, 0, currVal_3);

        var currVal_6 = !_co.fullSummary;

        _ck(_v, 12, 0, currVal_6);

        var currVal_7 = _co.fullSummary;

        _ck(_v, 14, 0, currVal_7);

        var currVal_8 = !_co.manageable && (_co.show.previousEpisode || _co.show.nextEpisode);

        _ck(_v, 16, 0, currVal_8);

        var currVal_9 = _co.manageable;

        _ck(_v, 18, 0, currVal_9);

        var currVal_10 = !_co.manageable;

        _ck(_v, 20, 0, currVal_10);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.show.name;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).inline;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "warn";

        _ck(_v, 5, 0, currVal_1, currVal_2);

        var currVal_4 = _co.show.rating.average;

        _ck(_v, 8, 0, currVal_4);

        var currVal_5 = _co.show.type;

        _ck(_v, 10, 0, currVal_5);
      });
    }

    function View_ShowDetailsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_19__["TruncatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_striphtml_pipe__WEBPACK_IMPORTED_MODULE_20__["StriphtmlPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowDetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.style == "card";

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _co.style == "panel";

        _ck(_v, 5, 0, currVal_1);
      }, null);
    }

    function View_ShowDetailsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-show-details", [], null, null, null, View_ShowDetailsComponent_0, RenderType_ShowDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _show_details_component__WEBPACK_IMPORTED_MODULE_21__["ShowDetailsComponent"], [_services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_22__["FollowService"], _services_snackbar_service__WEBPACK_IMPORTED_MODULE_23__["SnackbarService"], _services_follow_changed_service__WEBPACK_IMPORTED_MODULE_24__["FollowChangedService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ShowDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-show-details", _show_details_component__WEBPACK_IMPORTED_MODULE_21__["ShowDetailsComponent"], View_ShowDetailsComponent_Host_0, {
      show: "show",
      manageable: "manageable",
      style: "style"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/components/show-details/show-details.component.sass.shim.ngstyle.js":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/show-details/show-details.component.sass.shim.ngstyle.js ***!
    \*************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsShowDetailsShowDetailsComponentSassShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["mat-card[_ngcontent-%COMP%] {\n  margin: 8px;\n  max-width: 400px;\n}\n\n.type[_ngcontent-%COMP%] {\n  font-size: 10pt;\n  color: grey;\n}\n\n.rating[_ngcontent-%COMP%] {\n  font-size: 8pt;\n}\n\n.show-summary[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9Bbmd1bGFyL3R2U2xldXRoL3NyYy9hcHAvY29tcG9uZW50cy9zaG93LWRldGFpbHMvc2hvdy1kZXRhaWxzLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nob3ctZGV0YWlscy9zaG93LWRldGFpbHMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEREE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3ctZGV0YWlscy9zaG93LWRldGFpbHMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZFxuICBtYXJnaW46IDhweFxuICBtYXgtd2lkdGg6IDQwMHB4XG5cbi50eXBlXG4gIGZvbnQtc2l6ZTogMTBwdFxuICBjb2xvcjogZ3JleVxuXG4ucmF0aW5nXG4gIGZvbnQtc2l6ZTogOHB0XG4gIFxuLnNob3ctc3VtbWFyeVxuICBwYWRkaW5nLWJvdHRvbTogMTZweFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICAiLCJtYXQtY2FyZCB7XG4gIG1hcmdpbjogOHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4udHlwZSB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5yYXRpbmcge1xuICBmb250LXNpemU6IDhwdDtcbn1cblxuLnNob3ctc3VtbWFyeSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/components/show-details/show-details.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/show-details/show-details.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ShowDetailsComponent */

  /***/
  function srcAppComponentsShowDetailsShowDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowDetailsComponent", function () {
      return ShowDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShowDetailsComponent =
    /*#__PURE__*/
    function () {
      function ShowDetailsComponent(_followService, _snackbarService, _followChangedService) {
        _classCallCheck(this, ShowDetailsComponent);

        this._followService = _followService;
        this._snackbarService = _snackbarService;
        this._followChangedService = _followChangedService;
        this.manageable = false;
        this.style = "card";
        this.fullSummary = false;
      }

      _createClass(ShowDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "follow",
        value: function follow() {
          var _this = this;

          this._followService.follow(this.show.id).then(function (result) {
            _this.show.following = true;

            _this._snackbarService.showSuccess("Following ".concat(_this.show.name));

            _this._followChangedService.changed();
          });
        }
      }, {
        key: "unfollow",
        value: function unfollow() {
          var _this2 = this;

          this._followService.unfollow(this.show.id).then(function (result) {
            _this2.show.following = false;

            _this2._snackbarService.showSuccess("Unfollowing ".concat(_this2.show.name));

            _this2._followChangedService.changed();
          });
        }
      }, {
        key: "toggleSummary",
        value: function toggleSummary() {
          this.fullSummary = !this.fullSummary;
        }
      }]);

      return ShowDetailsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/show-search/show-search.component.ngfactory.js":
  /*!***************************************************************************!*\
    !*** ./src/app/components/show-search/show-search.component.ngfactory.js ***!
    \***************************************************************************/

  /*! exports provided: RenderType_ShowSearchComponent, View_ShowSearchComponent_0, View_ShowSearchComponent_Host_0, ShowSearchComponentNgFactory */

  /***/
  function srcAppComponentsShowSearchShowSearchComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ShowSearchComponent", function () {
      return RenderType_ShowSearchComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ShowSearchComponent_0", function () {
      return View_ShowSearchComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ShowSearchComponent_Host_0", function () {
      return View_ShowSearchComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowSearchComponentNgFactory", function () {
      return ShowSearchComponentNgFactory;
    });
    /* harmony import */


    var _show_search_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./show-search.component.sass.shim.ngstyle */
    "./src/app/components/show-search/show-search.component.sass.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _show_details_show_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../show-details/show-details.component.ngfactory */
    "./src/app/components/show-details/show-details.component.ngfactory.js");
    /* harmony import */


    var _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../show-details/show-details.component */
    "./src/app/components/show-details/show-details.component.ts");
    /* harmony import */


    var _services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/persistence/follow.service */
    "./src/app/services/persistence/follow.service.ts");
    /* harmony import */


    var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/snackbar.service */
    "./src/app/services/snackbar.service.ts");
    /* harmony import */


    var _services_follow_changed_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/follow-changed.service */
    "./src/app/services/follow-changed.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/form-field/typings/index.ngfactory */
    "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _show_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./show-search.component */
    "./src/app/components/show-search/show-search.component.ts");
    /* harmony import */


    var _services_api_tvmaze_show_api_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../../services/api/tvmaze-show-api.service */
    "./src/app/services/api/tvmaze-show-api.service.ts");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../services/log.service */
    "./src/app/services/log.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ShowSearchComponent = [_show_search_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ShowSearchComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ShowSearchComponent,
      data: {}
    });

    function View_ShowSearchComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-show-details", [], null, null, null, _show_details_show_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ShowDetailsComponent_0"], _show_details_show_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ShowDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_3__["ShowDetailsComponent"], [_services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_4__["FollowService"], _services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"], _services_follow_changed_service__WEBPACK_IMPORTED_MODULE_6__["FollowChangedService"]], {
        show: [0, "show"],
        manageable: [1, "manageable"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.show;
        var currVal_1 = true;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_ShowSearchComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["fxLayout", "row wrap"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowSearchComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "row wrap";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.shows;

        _ck(_v, 3, 0, currVal_1);
      }, null);
    }

    function View_ShowSearchComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "h1", [["class", "mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Add a show!\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 27, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 23, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 18, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _controlNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {
        _controlStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        _labelChildNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, {
        _labelChildStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        _placeholderChild: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        _errorChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        _hintChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        _prefixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        _suffixChildren: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Search Show"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("blur" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._focusChanged(false) !== false;
          ad = pd_4 && ad;
        }

        if ("focus" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._focusChanged(true) !== false;
          ad = pd_5 && ad;
        }

        if ("input" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._onInput() !== false;
          ad = pd_6 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_q"]]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_19__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"],
        type: [1, "type"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowSearchComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 7, "div", [["class", "mat-dialog-actions"], ["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 3, "button", [["color", "primary"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).dialogResult) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Done"]))], function (_ck, _v) {
        var _co = _v.component;

        _ck(_v, 1, 0);

        var currVal_46 = _co.searchFormControl;

        _ck(_v, 24, 0, currVal_46);

        var currVal_47 = "Search Show";
        var currVal_48 = "text";

        _ck(_v, 27, 0, currVal_47, currVal_48);

        var currVal_49 = _co.shows.length > 0;

        _ck(_v, 30, 0, currVal_49);

        var currVal_50 = "row";

        _ck(_v, 32, 0, currVal_50);

        var currVal_51 = "end center";

        _ck(_v, 33, 0, currVal_51);

        var currVal_56 = "primary";

        _ck(_v, 36, 0, currVal_56);

        _ck(_v, 37, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending;

        _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).appearance == "standard";
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).appearance == "fill";
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).appearance == "outline";
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).appearance == "legacy";

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._control.errorState;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._canLabelFloat;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._shouldLabelFloat();

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._hasFloatingLabel();

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._hideControlPlaceholder();

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._control.disabled;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._control.autofilled;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._control.focused;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).color == "accent";
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).color == "warn";

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._shouldForward("untouched");

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._shouldForward("touched");

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._shouldForward("pristine");

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._shouldForward("dirty");

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._shouldForward("valid");

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._shouldForward("invalid");

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._shouldForward("pending");

        var currVal_29 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._animationsEnabled;

        _ck(_v, 10, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29]);

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassUntouched;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassTouched;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPristine;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassDirty;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassValid;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassInvalid;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPending;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._isServer;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).id;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).placeholder;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).required;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._isNativeSelect || null;
        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._ariaDescribedby || null;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).errorState;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).required.toString();

        _ck(_v, 21, 1, [currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45]);

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).disabled || null;
        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._animationMode === "NoopAnimations";
        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ariaLabel || null;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).type;

        _ck(_v, 35, 0, currVal_52, currVal_53, currVal_54, currVal_55);
      });
    }

    function View_ShowSearchComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-show-search", [], null, null, null, View_ShowSearchComponent_0, RenderType_ShowSearchComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _show_search_component__WEBPACK_IMPORTED_MODULE_23__["ShowSearchComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], _services_api_tvmaze_show_api_service__WEBPACK_IMPORTED_MODULE_24__["TvmazeShowApiService"], _services_log_service__WEBPACK_IMPORTED_MODULE_25__["LogService"], _services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_4__["FollowService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ShowSearchComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-show-search", _show_search_component__WEBPACK_IMPORTED_MODULE_23__["ShowSearchComponent"], View_ShowSearchComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/show-search/show-search.component.sass.shim.ngstyle.js":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/show-search/show-search.component.sass.shim.ngstyle.js ***!
    \***********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsShowSearchShowSearchComponentSassShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9Bbmd1bGFyL3R2U2xldXRoL3NyYy9hcHAvY29tcG9uZW50cy9zaG93LXNlYXJjaC9zaG93LXNlYXJjaC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaG93LXNlYXJjaC9zaG93LXNlYXJjaC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvdy1zZWFyY2gvc2hvdy1zZWFyY2guY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZFxuICB3aWR0aDogMTAwJSIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/components/show-search/show-search.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/show-search/show-search.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ShowSearchComponent */

  /***/
  function srcAppComponentsShowSearchShowSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowSearchComponent", function () {
      return ShowSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ShowSearchComponent =
    /*#__PURE__*/
    function () {
      function ShowSearchComponent(_dialog, _showApi, _logService, _followService) {
        _classCallCheck(this, ShowSearchComponent);

        this._dialog = _dialog;
        this._showApi = _showApi;
        this._logService = _logService;
        this._followService = _followService;
        this.searchFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.shows = new Array();
      }

      _createClass(ShowSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._querySub = this.searchFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe(function (query) {
            return _this3._search(query);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._querySub.unsubscribe();

          if (this._searchSub) {
            this._searchSub.unsubscribe();
          }
        }
      }, {
        key: "_search",
        value: function _search(query) {
          var _this4 = this;

          this._searchSub = this._showApi.search(query).subscribe(function (data) {
            _this4.shows = data;

            _this4.shows.forEach(function (result) {
              result.show.following = _this4._followService.following(result.show.id);
            });
          });
        }
      }]);

      return ShowSearchComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/shows/shows.component.ngfactory.js":
  /*!***************************************************************!*\
    !*** ./src/app/components/shows/shows.component.ngfactory.js ***!
    \***************************************************************/

  /*! exports provided: RenderType_ShowsComponent, View_ShowsComponent_0, View_ShowsComponent_Host_0, ShowsComponentNgFactory */

  /***/
  function srcAppComponentsShowsShowsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ShowsComponent", function () {
      return RenderType_ShowsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ShowsComponent_0", function () {
      return View_ShowsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ShowsComponent_Host_0", function () {
      return View_ShowsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowsComponentNgFactory", function () {
      return ShowsComponentNgFactory;
    });
    /* harmony import */


    var _shows_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shows.component.sass.shim.ngstyle */
    "./src/app/components/shows/shows.component.sass.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/progress-spinner/typings/index.ngfactory */
    "./node_modules/@angular/material/progress-spinner/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _node_modules_angular_material_expansion_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/expansion/typings/index.ngfactory */
    "./node_modules/@angular/material/expansion/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _show_details_show_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../show-details/show-details.component.ngfactory */
    "./src/app/components/show-details/show-details.component.ngfactory.js");
    /* harmony import */


    var _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../show-details/show-details.component */
    "./src/app/components/show-details/show-details.component.ts");
    /* harmony import */


    var _services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../services/persistence/follow.service */
    "./src/app/services/persistence/follow.service.ts");
    /* harmony import */


    var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../services/snackbar.service */
    "./src/app/services/snackbar.service.ts");
    /* harmony import */


    var _services_follow_changed_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../services/follow-changed.service */
    "./src/app/services/follow-changed.service.ts");
    /* harmony import */


    var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */
    "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _shows_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./shows.component */
    "./src/app/components/shows/shows.component.ts");
    /* harmony import */


    var _services_api_tvmaze_show_api_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../../services/api/tvmaze-show-api.service */
    "./src/app/services/api/tvmaze-show-api.service.ts");
    /* harmony import */


    var _services_api_tvmaze_episode_api_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../services/api/tvmaze-episode-api.service */
    "./src/app/services/api/tvmaze-episode-api.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ShowsComponent = [_shows_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ShowsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ShowsComponent,
      data: {}
    });

    function View_ShowsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["id", "spinner"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "mat-progress-spinner", [["class", "mat-progress-spinner"], ["color", "accent"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"], [1, "aria-valuemin", 0], [1, "aria-valuemax", 0], [1, "aria-valuenow", 0], [1, "mode", 0]], null, null, _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatProgressSpinner_0"], _node_modules_angular_material_progress_spinner_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatProgressSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], {
        color: [0, "color"],
        mode: [1, "mode"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "row";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "center center";

        _ck(_v, 2, 0, currVal_1);

        var currVal_9 = "accent";
        var currVal_10 = "indeterminate";

        _ck(_v, 4, 0, currVal_9, currVal_10);
      }, function (_ck, _v) {
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._noopAnimations;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).diameter;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).diameter;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).mode === "determinate" ? 0 : null;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).mode === "determinate" ? 100 : null;
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).mode === "determinate" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).value : null;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).mode;

        _ck(_v, 3, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
      });
    }

    function View_ShowsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "mat-badge"], ["matBadgeColor", "accent"], ["matBadgeSize", "small"]], [[2, "mat-badge-overlap", null], [2, "mat-badge-above", null], [2, "mat-badge-below", null], [2, "mat-badge-before", null], [2, "mat-badge-after", null], [2, "mat-badge-small", null], [2, "mat-badge-medium", null], [2, "mat-badge-large", null], [2, "mat-badge-hidden", null], [2, "mat-badge-disabled", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadge"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["AriaDescriber"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"],
        content: [1, "content"],
        size: [2, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) {
        var currVal_10 = "accent";

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.nextEpisode.daysToGo, "");

        var currVal_12 = "small";

        _ck(_v, 1, 0, currVal_10, currVal_11, currVal_12);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).overlap;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isAbove();

        var currVal_2 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isAbove();
        var currVal_3 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isAfter();

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isAfter();

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).size === "small";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).size === "medium";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).size === "large";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hidden || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._hasContent;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_13 = _v.parent.context.$implicit.name;

        _ck(_v, 2, 0, currVal_13);
      });
    }

    function View_ShowsComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.name;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_ShowsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 21, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], null, null, _node_modules_angular_material_expansion_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatExpansionPanel_0"], _node_modules_angular_material_expansion_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatExpansionPanel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1753088, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], [[3, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MAT_ACCORDION"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_13__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MAT_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 15, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [2, "mat-expansion-toggle-indicator-after", null], [2, "mat-expansion-toggle-indicator-before", null], [40, "@.disabled", 0], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"], ["component", "@expansionHeight.start"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._keydown($event) !== false;
          ad = pd_1 && ad;
        }

        if ("component:@expansionHeight.start" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationStarted() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_expansion_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatExpansionPanelHeader_0"], _node_modules_angular_material_expansion_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatExpansionPanelHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 180224, [[1, 4]], 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"], [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](6, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 9, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "div", [["class", "avatar"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵNgStyleImpl"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultStyleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵNgStyleImpl"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"]], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
        ngStyle: [0, "ngStyle"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 1, 1, "mat-panel-description", [["class", "mat-expansion-panel-header-description"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelDescription"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 1, 1, "app-show-details", [], null, null, null, _show_details_show_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ShowDetailsComponent_0"], _show_details_show_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ShowDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_17__["ShowDetailsComponent"], [_services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_18__["FollowService"], _services_snackbar_service__WEBPACK_IMPORTED_MODULE_19__["SnackbarService"], _services_follow_changed_service__WEBPACK_IMPORTED_MODULE_20__["FollowChangedService"]], {
        show: [0, "show"],
        style: [1, "style"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var currVal_13 = _v.context.$implicit.avatar;

        _ck(_v, 12, 0, currVal_13);

        var currVal_14 = _v.context.$implicit.avatar;

        _ck(_v, 13, 0, currVal_14);

        var currVal_15 = _v.context.$implicit.nextEpisode;

        _ck(_v, 15, 0, currVal_15);

        var currVal_16 = !_v.context.$implicit.nextEpisode;

        _ck(_v, 17, 0, currVal_16);

        var currVal_17 = _v.context.$implicit;
        var currVal_18 = "panel";

        _ck(_v, 21, 0, currVal_17, currVal_18);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).expanded;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._hasSpacing();

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).panel._headerId;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled ? 0 - 1 : 0;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._getPanelId();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._isExpanded();

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).panel.disabled;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._isExpanded();

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._getTogglePosition() === "after";
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._getTogglePosition() === "before";

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationsDisabled;

        var currVal_12 = _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._getExpandedState(), _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).expandedHeight));

        _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12);
      });
    }

    function View_ShowsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "mat-accordion", [["class", "mat-accordion"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MAT_ACCORDION"], null, [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1720320, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _headers: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.shows;

        _ck(_v, 6, 0, currVal_0);
      }, null);
    }

    function View_ShowsComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "p", [["class", "mat-h4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nothing to see yet. Maybe add some? "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["call_made"]))], function (_ck, _v) {
        var currVal_0 = "row";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "end center";

        _ck(_v, 2, 0, currVal_1);

        _ck(_v, 6, 0);
      }, function (_ck, _v) {
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "warn";

        _ck(_v, 5, 0, currVal_2, currVal_3);
      });
    }

    function View_ShowsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["id", "shows"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShowsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.busy;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = !_co.busy && _co.shows.length > 0;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = !_co.busy && _co.shows.length == 0;

        _ck(_v, 6, 0, currVal_2);
      }, null);
    }

    function View_ShowsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-shows", [], null, null, null, View_ShowsComponent_0, RenderType_ShowsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _shows_component__WEBPACK_IMPORTED_MODULE_23__["ShowsComponent"], [_services_persistence_follow_service__WEBPACK_IMPORTED_MODULE_18__["FollowService"], _services_api_tvmaze_show_api_service__WEBPACK_IMPORTED_MODULE_24__["TvmazeShowApiService"], _services_api_tvmaze_episode_api_service__WEBPACK_IMPORTED_MODULE_25__["TvmazeEpisodeApiService"], _services_follow_changed_service__WEBPACK_IMPORTED_MODULE_20__["FollowChangedService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ShowsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-shows", _shows_component__WEBPACK_IMPORTED_MODULE_23__["ShowsComponent"], View_ShowsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/shows/shows.component.sass.shim.ngstyle.js":
  /*!***********************************************************************!*\
    !*** ./src/app/components/shows/shows.component.sass.shim.ngstyle.js ***!
    \***********************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsShowsShowsComponentSassShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["#shows[_ngcontent-%COMP%] {\n  padding-top: 58px;\n}\n\n#spinner[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 500px;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 16px;\n  padding-right: 48px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 40px;\n  padding-right: 8px;\n  margin-right: 16px;\n  border-radius: 20px;\n}\n\n.title[_ngcontent-%COMP%], .mat-badge[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: -8px;\n}\n\n.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -3px;\n  right: -16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9Bbmd1bGFyL3R2U2xldXRoL3NyYy9hcHAvY29tcG9uZW50cy9zaG93cy9zaG93cy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaG93cy9zaG93cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0dGOztBREZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ01GOztBREpBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDT0Y7O0FETEU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG93cy9zaG93cy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaG93c1xuICBwYWRkaW5nLXRvcDogNThweFxuI3NwaW5uZXJcbiAgd2lkdGg6IDQ1MHB4XG4gIGhlaWdodDogNTAwcHhcbnBcbiAgcGFkZGluZzogMTZweFxuICBwYWRkaW5nLXJpZ2h0OiA0OHB4XG5cbi5hdmF0YXJcbiAgd2lkdGg6IDMycHhcbiAgaGVpZ2h0OiA0MHB4XG4gIHBhZGRpbmctcmlnaHQ6IDhweFxuICBtYXJnaW4tcmlnaHQ6IDE2cHhcbiAgYm9yZGVyLXJhZGl1czogMjBweFxuICBcbi50aXRsZSwgLm1hdC1iYWRnZVxuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgYm90dG9tOiAtOHB4XG4ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hYm92ZVxuICAubWF0LWJhZGdlLWNvbnRlbnRcbiAgICB0b3A6IC0zcHhcbiAgICByaWdodDogLTE2cHgiLCIjc2hvd3Mge1xuICBwYWRkaW5nLXRvcDogNThweDtcbn1cblxuI3NwaW5uZXIge1xuICB3aWR0aDogNDUwcHg7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbnAge1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi50aXRsZSwgLm1hdC1iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtOHB4O1xufVxuXG4ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB0b3A6IC0zcHg7XG4gIHJpZ2h0OiAtMTZweDtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/components/shows/shows.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/shows/shows.component.ts ***!
    \*****************************************************/

  /*! exports provided: ShowsComponent */

  /***/
  function srcAppComponentsShowsShowsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowsComponent", function () {
      return ShowsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShowsComponent =
    /*#__PURE__*/
    function () {
      function ShowsComponent(_followService, _tvmazeShowApiService, _tvmazeEpisodeApiService, _followChangedService) {
        _classCallCheck(this, ShowsComponent);

        this._followService = _followService;
        this._tvmazeShowApiService = _tvmazeShowApiService;
        this._tvmazeEpisodeApiService = _tvmazeEpisodeApiService;
        this._followChangedService = _followChangedService;
        this._subs = [];
        this._finishedSubs = 0;
        this.shows = [];
        this.busy = false;
      }

      _createClass(ShowsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.busy = true;
          this._finishedSubs = 0;

          this._loadShows();

          this._followSub = this._followChangedService.changed$.subscribe(function () {
            _this5._loadShows();
          });
        }
      }, {
        key: "_loadShows",
        value: function _loadShows() {
          var _this6 = this;

          if (this._followService.showIds.length == 0) {
            this.busy = false;
          }

          this.shows = [];

          this._followService.showIds.forEach(function (showId) {
            var sub = _this6._tvmazeShowApiService.getById(showId).subscribe(function (show) {
              _this6._finished();

              _this6._loadEpisode(show, "previousEpisode");

              _this6._loadEpisode(show, "nextEpisode");

              _this6.shows.push(show);

              _this6._sortShows();
            });

            _this6._subs.push(sub);
          });
        }
      }, {
        key: "_loadEpisode",
        value: function _loadEpisode(show, field) {
          var _this7 = this;

          if (show[field] && show[field]["id"]) {
            var sub = this._tvmazeEpisodeApiService.getById(show[field]["id"]).subscribe(function (episode) {
              _this7._finished();

              show[field] = episode;
            });

            this._subs.push(sub);
          }
        }
      }, {
        key: "_finished",
        value: function _finished() {
          this._finishedSubs += 1;
          this.busy = this._subs.length != this._finishedSubs;
        }
      }, {
        key: "_sortShows",
        value: function _sortShows() {
          this.shows = this.shows.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._subs.forEach(function (sub) {
            return sub.unsubscribe();
          });

          this._followSub.unsubscribe();
        }
      }]);

      return ShowsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/snackbars/error-snackbar/error-snackbar.component.ngfactory.js":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/snackbars/error-snackbar/error-snackbar.component.ngfactory.js ***!
    \*******************************************************************************************/

  /*! exports provided: RenderType_ErrorSnackbarComponent, View_ErrorSnackbarComponent_0, View_ErrorSnackbarComponent_Host_0, ErrorSnackbarComponentNgFactory */

  /***/
  function srcAppComponentsSnackbarsErrorSnackbarErrorSnackbarComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ErrorSnackbarComponent", function () {
      return RenderType_ErrorSnackbarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ErrorSnackbarComponent_0", function () {
      return View_ErrorSnackbarComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ErrorSnackbarComponent_Host_0", function () {
      return View_ErrorSnackbarComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorSnackbarComponentNgFactory", function () {
      return ErrorSnackbarComponentNgFactory;
    });
    /* harmony import */


    var _error_snackbar_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./error-snackbar.component.sass.shim.ngstyle */
    "./src/app/components/snackbars/error-snackbar/error-snackbar.component.sass.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */
    "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _error_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./error-snackbar.component */
    "./src/app/components/snackbars/error-snackbar/error-snackbar.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ErrorSnackbarComponent = [_error_snackbar_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ErrorSnackbarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ErrorSnackbarComponent,
      data: {}
    });

    function View_ErrorSnackbarComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "error-snackbar"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["error"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = "row";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "start center";

        _ck(_v, 2, 0, currVal_1);

        _ck(_v, 4, 0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "warn";

        _ck(_v, 3, 0, currVal_2, currVal_3);

        var currVal_4 = _co.data;

        _ck(_v, 7, 0, currVal_4);
      });
    }

    function View_ErrorSnackbarComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-error-snackbar", [], null, null, null, View_ErrorSnackbarComponent_0, RenderType_ErrorSnackbarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _error_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["ErrorSnackbarComponent"], [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MAT_SNACK_BAR_DATA"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ErrorSnackbarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-error-snackbar", _error_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["ErrorSnackbarComponent"], View_ErrorSnackbarComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/snackbars/error-snackbar/error-snackbar.component.sass.shim.ngstyle.js":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/snackbars/error-snackbar/error-snackbar.component.sass.shim.ngstyle.js ***!
    \***************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsSnackbarsErrorSnackbarErrorSnackbarComponentSassShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["mat-icon[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9Bbmd1bGFyL3R2U2xldXRoL3NyYy9hcHAvY29tcG9uZW50cy9zbmFja2JhcnMvZXJyb3Itc25hY2tiYXIvZXJyb3Itc25hY2tiYXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc25hY2tiYXJzL2Vycm9yLXNuYWNrYmFyL2Vycm9yLXNuYWNrYmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc25hY2tiYXJzL2Vycm9yLXNuYWNrYmFyL2Vycm9yLXNuYWNrYmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb25cbiAgcGFkZGluZy1yaWdodDogOHB4IiwibWF0LWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/components/snackbars/error-snackbar/error-snackbar.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/snackbars/error-snackbar/error-snackbar.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ErrorSnackbarComponent */

  /***/
  function srcAppComponentsSnackbarsErrorSnackbarErrorSnackbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorSnackbarComponent", function () {
      return ErrorSnackbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorSnackbarComponent =
    /*#__PURE__*/
    function () {
      function ErrorSnackbarComponent(data) {
        _classCallCheck(this, ErrorSnackbarComponent);

        this.data = data;
      }

      _createClass(ErrorSnackbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorSnackbarComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/snackbars/success-snackbar/success-snackbar.component.ngfactory.js":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/snackbars/success-snackbar/success-snackbar.component.ngfactory.js ***!
    \***********************************************************************************************/

  /*! exports provided: RenderType_SuccessSnackbarComponent, View_SuccessSnackbarComponent_0, View_SuccessSnackbarComponent_Host_0, SuccessSnackbarComponentNgFactory */

  /***/
  function srcAppComponentsSnackbarsSuccessSnackbarSuccessSnackbarComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_SuccessSnackbarComponent", function () {
      return RenderType_SuccessSnackbarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SuccessSnackbarComponent_0", function () {
      return View_SuccessSnackbarComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SuccessSnackbarComponent_Host_0", function () {
      return View_SuccessSnackbarComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessSnackbarComponentNgFactory", function () {
      return SuccessSnackbarComponentNgFactory;
    });
    /* harmony import */


    var _success_snackbar_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./success-snackbar.component.sass.shim.ngstyle */
    "./src/app/components/snackbars/success-snackbar/success-snackbar.component.sass.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */
    "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _success_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./success-snackbar.component */
    "./src/app/components/snackbars/success-snackbar/success-snackbar.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_SuccessSnackbarComponent = [_success_snackbar_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_SuccessSnackbarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_SuccessSnackbarComponent,
      data: {}
    });

    function View_SuccessSnackbarComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "success-snackbar"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["check_circle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = "row";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "start center";

        _ck(_v, 2, 0, currVal_1);

        _ck(_v, 4, 0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "warn";

        _ck(_v, 3, 0, currVal_2, currVal_3);

        var currVal_4 = _co.data;

        _ck(_v, 7, 0, currVal_4);
      });
    }

    function View_SuccessSnackbarComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-success-snackbar", [], null, null, null, View_SuccessSnackbarComponent_0, RenderType_SuccessSnackbarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _success_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SuccessSnackbarComponent"], [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MAT_SNACK_BAR_DATA"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var SuccessSnackbarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-success-snackbar", _success_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SuccessSnackbarComponent"], View_SuccessSnackbarComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/snackbars/success-snackbar/success-snackbar.component.sass.shim.ngstyle.js":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/components/snackbars/success-snackbar/success-snackbar.component.sass.shim.ngstyle.js ***!
    \*******************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsSnackbarsSuccessSnackbarSuccessSnackbarComponentSassShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["mat-icon[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9Bbmd1bGFyL3R2U2xldXRoL3NyYy9hcHAvY29tcG9uZW50cy9zbmFja2JhcnMvc3VjY2Vzcy1zbmFja2Jhci9zdWNjZXNzLXNuYWNrYmFyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3NuYWNrYmFycy9zdWNjZXNzLXNuYWNrYmFyL3N1Y2Nlc3Mtc25hY2tiYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbmFja2JhcnMvc3VjY2Vzcy1zbmFja2Jhci9zdWNjZXNzLXNuYWNrYmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb25cbiAgcGFkZGluZy1yaWdodDogOHB4IiwibWF0LWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/components/snackbars/success-snackbar/success-snackbar.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/snackbars/success-snackbar/success-snackbar.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: SuccessSnackbarComponent */

  /***/
  function srcAppComponentsSnackbarsSuccessSnackbarSuccessSnackbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessSnackbarComponent", function () {
      return SuccessSnackbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuccessSnackbarComponent =
    /*#__PURE__*/
    function () {
      function SuccessSnackbarComponent(data) {
        _classCallCheck(this, SuccessSnackbarComponent);

        this.data = data;
      }

      _createClass(SuccessSnackbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuccessSnackbarComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/snackbars/warn-snackbar/warn-snackbar.component.ngfactory.js":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/snackbars/warn-snackbar/warn-snackbar.component.ngfactory.js ***!
    \*****************************************************************************************/

  /*! exports provided: RenderType_WarnSnackbarComponent, View_WarnSnackbarComponent_0, View_WarnSnackbarComponent_Host_0, WarnSnackbarComponentNgFactory */

  /***/
  function srcAppComponentsSnackbarsWarnSnackbarWarnSnackbarComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_WarnSnackbarComponent", function () {
      return RenderType_WarnSnackbarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_WarnSnackbarComponent_0", function () {
      return View_WarnSnackbarComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_WarnSnackbarComponent_Host_0", function () {
      return View_WarnSnackbarComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarnSnackbarComponentNgFactory", function () {
      return WarnSnackbarComponentNgFactory;
    });
    /* harmony import */


    var _warn_snackbar_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./warn-snackbar.component.sass.shim.ngstyle */
    "./src/app/components/snackbars/warn-snackbar/warn-snackbar.component.sass.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */
    "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _warn_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./warn-snackbar.component */
    "./src/app/components/snackbars/warn-snackbar/warn-snackbar.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_WarnSnackbarComponent = [_warn_snackbar_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_WarnSnackbarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_WarnSnackbarComponent,
      data: {}
    });

    function View_WarnSnackbarComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "warning-snackbar"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["error"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = "row";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "start center";

        _ck(_v, 2, 0, currVal_1);

        _ck(_v, 4, 0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "warn";

        _ck(_v, 3, 0, currVal_2, currVal_3);

        var currVal_4 = _co.data;

        _ck(_v, 7, 0, currVal_4);
      });
    }

    function View_WarnSnackbarComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-warn-snackbar", [], null, null, null, View_WarnSnackbarComponent_0, RenderType_WarnSnackbarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _warn_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["WarnSnackbarComponent"], [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MAT_SNACK_BAR_DATA"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var WarnSnackbarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-warn-snackbar", _warn_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["WarnSnackbarComponent"], View_WarnSnackbarComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/snackbars/warn-snackbar/warn-snackbar.component.sass.shim.ngstyle.js":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/snackbars/warn-snackbar/warn-snackbar.component.sass.shim.ngstyle.js ***!
    \*************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsSnackbarsWarnSnackbarWarnSnackbarComponentSassShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["mat-icon[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1JlYWwgQ29kZS9wZXJzb25hbC9Bbmd1bGFyL3R2U2xldXRoL3NyYy9hcHAvY29tcG9uZW50cy9zbmFja2JhcnMvd2Fybi1zbmFja2Jhci93YXJuLXNuYWNrYmFyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3NuYWNrYmFycy93YXJuLXNuYWNrYmFyL3dhcm4tc25hY2tiYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbmFja2JhcnMvd2Fybi1zbmFja2Jhci93YXJuLXNuYWNrYmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb25cbiAgcGFkZGluZy1yaWdodDogOHB4IiwibWF0LWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/components/snackbars/warn-snackbar/warn-snackbar.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/snackbars/warn-snackbar/warn-snackbar.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: WarnSnackbarComponent */

  /***/
  function srcAppComponentsSnackbarsWarnSnackbarWarnSnackbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarnSnackbarComponent", function () {
      return WarnSnackbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WarnSnackbarComponent =
    /*#__PURE__*/
    function () {
      function WarnSnackbarComponent(data) {
        _classCallCheck(this, WarnSnackbarComponent);

        this.data = data;
      }

      _createClass(WarnSnackbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WarnSnackbarComponent;
    }();
    /***/

  },

  /***/
  "./src/app/models/country.ts":
  /*!***********************************!*\
    !*** ./src/app/models/country.ts ***!
    \***********************************/

  /*! exports provided: Country */

  /***/
  function srcAppModelsCountryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Country", function () {
      return Country;
    });

    var Country = function Country() {
      _classCallCheck(this, Country);
    };
    /***/

  },

  /***/
  "./src/app/models/episode.ts":
  /*!***********************************!*\
    !*** ./src/app/models/episode.ts ***!
    \***********************************/

  /*! exports provided: Episode */

  /***/
  function srcAppModelsEpisodeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Episode", function () {
      return Episode;
    });
    /* harmony import */


    var _models_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @models/image */
    "./src/app/models/image.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);

    var Episode =
    /*#__PURE__*/
    function () {
      function Episode() {
        _classCallCheck(this, Episode);
      }

      _createClass(Episode, [{
        key: "image",
        set: function set(record) {
          this._image = Object.assign(new _models_image__WEBPACK_IMPORTED_MODULE_0__["Image"](), record);
        },
        get: function get() {
          return this._image;
        }
      }, {
        key: "airdate",
        set: function set(date) {
          this._airdate = date;
          var diff = dayjs__WEBPACK_IMPORTED_MODULE_1__(date).valueOf() - dayjs__WEBPACK_IMPORTED_MODULE_1__(new Date()).startOf('day').valueOf();
          diff = diff / (24 * 60 * 60 * 1000);
          this.daysToGo = Math.floor(diff);
        },
        get: function get() {
          return this._airdate;
        }
      }]);

      return Episode;
    }();
    /***/

  },

  /***/
  "./src/app/models/externals.ts":
  /*!*************************************!*\
    !*** ./src/app/models/externals.ts ***!
    \*************************************/

  /*! exports provided: Externals */

  /***/
  function srcAppModelsExternalsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Externals", function () {
      return Externals;
    });

    var Externals = function Externals() {
      _classCallCheck(this, Externals);
    };
    /***/

  },

  /***/
  "./src/app/models/image.ts":
  /*!*********************************!*\
    !*** ./src/app/models/image.ts ***!
    \*********************************/

  /*! exports provided: Image */

  /***/
  function srcAppModelsImageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Image", function () {
      return Image;
    });

    var Image = function Image() {
      _classCallCheck(this, Image);
    };
    /***/

  },

  /***/
  "./src/app/models/network.ts":
  /*!***********************************!*\
    !*** ./src/app/models/network.ts ***!
    \***********************************/

  /*! exports provided: Network */

  /***/
  function srcAppModelsNetworkTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return Network;
    });
    /* harmony import */


    var _models_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @models/country */
    "./src/app/models/country.ts");

    var Network =
    /*#__PURE__*/
    function () {
      function Network() {
        _classCallCheck(this, Network);
      }

      _createClass(Network, [{
        key: "country",
        set: function set(record) {
          this._country = Object.assign(new _models_country__WEBPACK_IMPORTED_MODULE_0__["Country"](), record);
        },
        get: function get() {
          return this._country;
        }
      }]);

      return Network;
    }();
    /***/

  },

  /***/
  "./src/app/models/rating.ts":
  /*!**********************************!*\
    !*** ./src/app/models/rating.ts ***!
    \**********************************/

  /*! exports provided: Rating */

  /***/
  function srcAppModelsRatingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rating", function () {
      return Rating;
    });

    var Rating = function Rating() {
      _classCallCheck(this, Rating);
    };
    /***/

  },

  /***/
  "./src/app/models/search-show-result.ts":
  /*!**********************************************!*\
    !*** ./src/app/models/search-show-result.ts ***!
    \**********************************************/

  /*! exports provided: SearchShowResult */

  /***/
  function srcAppModelsSearchShowResultTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchShowResult", function () {
      return SearchShowResult;
    });
    /* harmony import */


    var _models_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @models/show */
    "./src/app/models/show.ts");

    var SearchShowResult =
    /*#__PURE__*/
    function () {
      function SearchShowResult() {
        _classCallCheck(this, SearchShowResult);
      }

      _createClass(SearchShowResult, [{
        key: "show",
        set: function set(record) {
          this._show = Object.assign(new _models_show__WEBPACK_IMPORTED_MODULE_0__["Show"](), record);
        },
        get: function get() {
          return this._show;
        }
      }]);

      return SearchShowResult;
    }();
    /***/

  },

  /***/
  "./src/app/models/show.ts":
  /*!********************************!*\
    !*** ./src/app/models/show.ts ***!
    \********************************/

  /*! exports provided: Show */

  /***/
  function srcAppModelsShowTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Show", function () {
      return Show;
    });
    /* harmony import */


    var _models_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @models/rating */
    "./src/app/models/rating.ts");
    /* harmony import */


    var _models_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @models/network */
    "./src/app/models/network.ts");
    /* harmony import */


    var _models_externals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @models/externals */
    "./src/app/models/externals.ts");
    /* harmony import */


    var _models_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @models/image */
    "./src/app/models/image.ts");
    /* harmony import */


    var _models_episode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @models/episode */
    "./src/app/models/episode.ts");

    var Show =
    /*#__PURE__*/
    function () {
      function Show() {
        _classCallCheck(this, Show);

        this.following = false;
      }

      _createClass(Show, [{
        key: "_episodeId",
        value: function _episodeId(episode) {
          var matches = episode.match(/episodes\/(\d+)/);
          return parseInt(matches[1]);
        }
      }, {
        key: "rating",
        set: function set(record) {
          this._rating = Object.assign(new _models_rating__WEBPACK_IMPORTED_MODULE_0__["Rating"](), record);
        },
        get: function get() {
          return this._rating;
        }
      }, {
        key: "network",
        set: function set(record) {
          this._network = Object.assign(new _models_network__WEBPACK_IMPORTED_MODULE_1__["Network"](), record);
        },
        get: function get() {
          return this._network;
        }
      }, {
        key: "externals",
        set: function set(record) {
          this._externals = Object.assign(new _models_externals__WEBPACK_IMPORTED_MODULE_2__["Externals"](), record);
        },
        get: function get() {
          return this._externals;
        }
      }, {
        key: "image",
        set: function set(record) {
          this._image = Object.assign(new _models_image__WEBPACK_IMPORTED_MODULE_3__["Image"](), record);
        },
        get: function get() {
          return this._image;
        }
      }, {
        key: "_links",
        set: function set(record) {
          if (record.previousepisode) {
            this.previousEpisode = Object.assign(new _models_episode__WEBPACK_IMPORTED_MODULE_4__["Episode"](), {
              id: this._episodeId(record.previousepisode.href)
            });
          }

          if (record.nextepisode) {
            this.nextEpisode = Object.assign(new _models_episode__WEBPACK_IMPORTED_MODULE_4__["Episode"](), {
              id: this._episodeId(record.nextepisode.href)
            });
          }
        }
      }, {
        key: "avatar",
        get: function get() {
          return {
            "background-image": "url('".concat(this.image.medium, "')"),
            "background-size": "cover"
          };
        }
      }]);

      return Show;
    }();
    /***/

  },

  /***/
  "./src/app/pipes/striphtml.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/striphtml.pipe.ts ***!
    \*****************************************/

  /*! exports provided: StriphtmlPipe */

  /***/
  function srcAppPipesStriphtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StriphtmlPipe", function () {
      return StriphtmlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StriphtmlPipe =
    /*#__PURE__*/
    function () {
      function StriphtmlPipe() {
        _classCallCheck(this, StriphtmlPipe);
      }

      _createClass(StriphtmlPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value == null) return value;
          return value.replace(/<.*?>/g, ''); // replace tags
        }
      }]);

      return StriphtmlPipe;
    }();
    /***/

  },

  /***/
  "./src/app/pipes/truncate.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/truncate.pipe.ts ***!
    \****************************************/

  /*! exports provided: TruncatePipe */

  /***/
  function srcAppPipesTruncatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
      return TruncatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TruncatePipe =
    /*#__PURE__*/
    function () {
      function TruncatePipe() {
        _classCallCheck(this, TruncatePipe);
      }

      _createClass(TruncatePipe, [{
        key: "transform",
        value: function transform(value) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

          if (!value || value.length < limit) {
            return value;
          }

          return value.substring(0, limit) + " ...";
        }
      }]);

      return TruncatePipe;
    }();
    /***/

  },

  /***/
  "./src/app/services/api/tvmaze-api.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/api/tvmaze-api.service.ts ***!
    \****************************************************/

  /*! exports provided: TvmazeApiService */

  /***/
  function srcAppServicesApiTvmazeApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TvmazeApiService", function () {
      return TvmazeApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TvmazeApiService =
    /*#__PURE__*/
    function () {
      function TvmazeApiService(_logService, _httpClient) {
        _classCallCheck(this, TvmazeApiService);

        this._logService = _logService;
        this._httpClient = _httpClient;
        this._baseUrl = "http://api.tvmaze.com/";
      }

      _createClass(TvmazeApiService, [{
        key: "_buildUrl",
        value: function _buildUrl(path) {
          return "".concat(this._baseUrl).concat(path);
        }
      }]);

      return TvmazeApiService;
    }();

    TvmazeApiService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function TvmazeApiService_Factory() {
        return new TvmazeApiService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      },
      token: TvmazeApiService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/api/tvmaze-episode-api.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/api/tvmaze-episode-api.service.ts ***!
    \************************************************************/

  /*! exports provided: TvmazeEpisodeApiService */

  /***/
  function srcAppServicesApiTvmazeEpisodeApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TvmazeEpisodeApiService", function () {
      return TvmazeEpisodeApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_api_tvmaze_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services/api/tvmaze-api.service */
    "./src/app/services/api/tvmaze-api.service.ts");
    /* harmony import */


    var _models_episode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @models/episode */
    "./src/app/models/episode.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TvmazeEpisodeApiService =
    /*#__PURE__*/
    function (_services_api_tvmaze_) {
      _inherits(TvmazeEpisodeApiService, _services_api_tvmaze_);

      function TvmazeEpisodeApiService() {
        _classCallCheck(this, TvmazeEpisodeApiService);

        return _possibleConstructorReturn(this, _getPrototypeOf(TvmazeEpisodeApiService).apply(this, arguments));
      }

      _createClass(TvmazeEpisodeApiService, [{
        key: "getById",
        value: function getById(id) {
          var _this8 = this;

          this._logService.log("TvmazeEpisodeApiService - getById '".concat(id, "'"));

          return this._httpClient.get(this._buildUrl("episodes/".concat(id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            _this8._logService.log("TvmazeEpisodeApiService - getById data");

            _this8._logService.log(data);

            return Object.assign(new _models_episode__WEBPACK_IMPORTED_MODULE_3__["Episode"](), data);
          }));
        }
      }, {
        key: "asyncGetById",
        value: function asyncGetById(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this._logService.log("TvmazeEpisodeApiService - getById '".concat(id, "'"));

                    _context.next = 3;
                    return this._httpClient.get(this._buildUrl("episodes/".concat(id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                      _this9._logService.log("TvmazeEpisodeApiService - getById data");

                      _this9._logService.log(data);

                      return Object.assign(new _models_episode__WEBPACK_IMPORTED_MODULE_3__["Episode"](), data);
                    })).toPromise();

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return TvmazeEpisodeApiService;
    }(_services_api_tvmaze_api_service__WEBPACK_IMPORTED_MODULE_2__["TvmazeApiService"]);

    TvmazeEpisodeApiService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      factory: function TvmazeEpisodeApiService_Factory() {
        return new TvmazeEpisodeApiService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
      },
      token: TvmazeEpisodeApiService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/api/tvmaze-show-api.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/api/tvmaze-show-api.service.ts ***!
    \*********************************************************/

  /*! exports provided: TvmazeShowApiService */

  /***/
  function srcAppServicesApiTvmazeShowApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TvmazeShowApiService", function () {
      return TvmazeShowApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_api_tvmaze_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @services/api/tvmaze-api.service */
    "./src/app/services/api/tvmaze-api.service.ts");
    /* harmony import */


    var _models_search_show_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @models/search-show-result */
    "./src/app/models/search-show-result.ts");
    /* harmony import */


    var _models_show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @models/show */
    "./src/app/models/show.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TvmazeShowApiService =
    /*#__PURE__*/
    function (_services_api_tvmaze_2) {
      _inherits(TvmazeShowApiService, _services_api_tvmaze_2);

      function TvmazeShowApiService() {
        _classCallCheck(this, TvmazeShowApiService);

        return _possibleConstructorReturn(this, _getPrototypeOf(TvmazeShowApiService).apply(this, arguments));
      }

      _createClass(TvmazeShowApiService, [{
        key: "search",
        value: function search(query) {
          var _this10 = this;

          this._logService.log("TvmazeShowApiService - searching for '".concat(query, "'"));

          return this._httpClient.get(this._buildUrl("search/shows?q=".concat(query))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (records) {
            _this10._logService.log("TvmazeShowApiService - found ".concat(records.length, " records"));

            _this10._logService.log(records);

            return records.map(function (record) {
              return Object.assign(new _models_search_show_result__WEBPACK_IMPORTED_MODULE_3__["SearchShowResult"](), record);
            });
          }));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var _this11 = this;

          this._logService.log("TvmazeShowApiService - getById '".concat(id, "'"));

          return this._httpClient.get(this._buildUrl("shows/".concat(id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            _this11._logService.log("TvmazeShowApiService - getById data");

            _this11._logService.log(data);

            return Object.assign(new _models_show__WEBPACK_IMPORTED_MODULE_4__["Show"](), data);
          }));
        }
      }, {
        key: "asyncGetById",
        value: function asyncGetById(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this._logService.log("TvmazeShowApiService - getById '".concat(id, "'"));

                    _context2.next = 3;
                    return this._httpClient.get(this._buildUrl("shows/".concat(id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                      _this12._logService.log("TvmazeShowApiService - getById data");

                      _this12._logService.log(data);

                      return Object.assign(new _models_show__WEBPACK_IMPORTED_MODULE_4__["Show"](), data);
                    })).toPromise();

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return TvmazeShowApiService;
    }(_services_api_tvmaze_api_service__WEBPACK_IMPORTED_MODULE_2__["TvmazeApiService"]);

    TvmazeShowApiService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      factory: function TvmazeShowApiService_Factory() {
        return new TvmazeShowApiService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]));
      },
      token: TvmazeShowApiService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/app-init.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/app-init.service.ts ***!
    \**********************************************/

  /*! exports provided: AppInitService */

  /***/
  function srcAppServicesAppInitServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInitService", function () {
      return AppInitService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _persistence_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./persistence/follow.service */
    "./src/app/services/persistence/follow.service.ts");

    var AppInitService =
    /*#__PURE__*/
    function () {
      function AppInitService(_logService, _followService) {
        _classCallCheck(this, AppInitService);

        this._logService = _logService;
        this._followService = _followService;
      }

      _createClass(AppInitService, [{
        key: "load",
        value: function load() {
          var _this13 = this;

          this._logService.log("AppInitService -- loading settings");

          return new Promise(function (resolve, reject) {
            _this13._followService.load().then(function (res) {
              _this13._logService.log("AppInitService -- shows loaded");

              _this13._logService.log(_this13._followService);

              resolve(true);
            }, function (error) {
              _this13._logService.error(error);

              reject(false);
            });
          });
        }
      }]);

      return AppInitService;
    }();

    AppInitService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function AppInitService_Factory() {
        return new AppInitService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_persistence_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"]));
      },
      token: AppInitService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/background.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/background.service.ts ***!
    \************************************************/

  /*! exports provided: BackgroundService */

  /***/
  function srcAppServicesBackgroundServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundService", function () {
      return BackgroundService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _persistence_follow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./persistence/follow.service */
    "./src/app/services/persistence/follow.service.ts");
    /* harmony import */


    var _api_tvmaze_show_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api/tvmaze-show-api.service */
    "./src/app/services/api/tvmaze-show-api.service.ts");
    /* harmony import */


    var _api_tvmaze_episode_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./api/tvmaze-episode-api.service */
    "./src/app/services/api/tvmaze-episode-api.service.ts");

    var BackgroundService =
    /*#__PURE__*/
    function () {
      function BackgroundService(_followService, _tvmazeShowApiService, _tvmazeEpisodeApiService) {
        _classCallCheck(this, BackgroundService);

        this._followService = _followService;
        this._tvmazeShowApiService = _tvmazeShowApiService;
        this._tvmazeEpisodeApiService = _tvmazeEpisodeApiService;
        this._shows = [];
        this._airingEpisodes = [];
      }

      _createClass(BackgroundService, [{
        key: "load",
        value: function load() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var title;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this._loadShows();

                  case 2:
                    this._showsAiringEpisodes();

                    title = this._airingEpisodes.map(function (hash) {
                      return "".concat(hash.name, " airs ").concat(hash.when);
                    }).join(", ");
                    return _context3.abrupt("return", {
                      total: this._airingEpisodes.length,
                      title: title
                    });

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "_loadShows",
        value: function _loadShows() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this14 = this;

            var _loop, i;

            return regeneratorRuntime.wrap(function _callee4$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this._shows = []; // forEach is async, so we use good ol' fashioned for loop

                    _loop =
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _loop(i) {
                      var showId, show;
                      return regeneratorRuntime.wrap(function _loop$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              showId = _this14._followService.showIds[i];
                              show = void 0;
                              _context4.next = 4;
                              return _this14._loadShow(showId).then(function (_show) {
                                show = _show;

                                _this14._shows.push(show);
                              });

                            case 4:
                              _context4.next = 6;
                              return _this14._loadEpisode(show, "nextEpisode").then(function () {});

                            case 6:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _loop);
                    });
                    i = 0;

                  case 3:
                    if (!(i < this._followService.showIds.length)) {
                      _context5.next = 8;
                      break;
                    }

                    return _context5.delegateYield(_loop(i), "t0", 5);

                  case 5:
                    ++i;
                    _context5.next = 3;
                    break;

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "_loadShow",
        value: function _loadShow(showId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var show;
            return regeneratorRuntime.wrap(function _callee5$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this._tvmazeShowApiService.asyncGetById(showId).then(function (_show) {
                      show = _show;
                    });

                  case 2:
                    return _context6.abrupt("return", show);

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "_loadEpisode",
        value: function _loadEpisode(show, field) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!(show[field] && show[field]["id"])) {
                      _context7.next = 3;
                      break;
                    }

                    _context7.next = 3;
                    return this._tvmazeEpisodeApiService.asyncGetById(show[field]["id"]).then(function (_episode) {
                      show[field] = _episode;
                    });

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "_showsAiringEpisodes",
        value: function _showsAiringEpisodes() {
          var _this15 = this;

          this._airingEpisodes = [];

          this._shows.forEach(function (show) {
            if (show.nextEpisode) {
              _this15._airingEpisodes.push({
                name: show.name,
                when: _this15._daysToHuman(show.nextEpisode.daysToGo)
              });
            }
          });
        }
      }, {
        key: "_daysToHuman",
        value: function _daysToHuman(daysToGo) {
          switch (daysToGo) {
            case 0:
              {
                return "today";
                break;
              }

            case 1:
              {
                return "tomorrow";
                break;
              }

            case 2:
              {
                return "day after tomorrow";
                break;
              }

            default:
              {
                return "in ".concat(daysToGo, " days");
                break;
              }
          }
        }
      }]);

      return BackgroundService;
    }();

    BackgroundService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function BackgroundService_Factory() {
        return new BackgroundService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_persistence_follow_service__WEBPACK_IMPORTED_MODULE_2__["FollowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_tvmaze_show_api_service__WEBPACK_IMPORTED_MODULE_3__["TvmazeShowApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_tvmaze_episode_api_service__WEBPACK_IMPORTED_MODULE_4__["TvmazeEpisodeApiService"]));
      },
      token: BackgroundService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/env.service.provider.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/env.service.provider.ts ***!
    \**************************************************/

  /*! exports provided: EnvServiceFactory, EnvServiceProvider */

  /***/
  function srcAppServicesEnvServiceProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvServiceFactory", function () {
      return EnvServiceFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvServiceProvider", function () {
      return EnvServiceProvider;
    });
    /* harmony import */


    var _services_env_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @services/env.service */
    "./src/app/services/env.service.ts");

    var EnvServiceFactory = function EnvServiceFactory() {
      // Create env
      var env = new _services_env_service__WEBPACK_IMPORTED_MODULE_0__["EnvService"](); // Read environment variables from browser window

      var browserWindow = window || {};
      var browserWindowEnv = browserWindow["__env"] || {}; // Assign environment variables from browser window to env
      // In the current implementation, properties from env.js overwrite defaults from the EnvService.
      // If needed, a deep merge can be performed here to merge properties instead of overwriting them.

      for (var key in browserWindowEnv) {
        if (browserWindowEnv.hasOwnProperty(key)) {
          env[key] = window["__env"][key];
        }
      }

      return env;
    };

    var EnvServiceProvider = {
      provide: _services_env_service__WEBPACK_IMPORTED_MODULE_0__["EnvService"],
      useFactory: EnvServiceFactory,
      deps: []
    };
    /***/
  },

  /***/
  "./src/app/services/env.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/env.service.ts ***!
    \*****************************************/

  /*! exports provided: EnvService */

  /***/
  function srcAppServicesEnvServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvService", function () {
      return EnvService;
    });

    var EnvService = function EnvService() {
      _classCallCheck(this, EnvService);

      // The values that are defined here are the default values that can
      // be overridden by env.js
      this.debug = true;
    };
    /***/

  },

  /***/
  "./src/app/services/follow-changed.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/follow-changed.service.ts ***!
    \****************************************************/

  /*! exports provided: FollowChangedService */

  /***/
  function srcAppServicesFollowChangedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowChangedService", function () {
      return FollowChangedService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FollowChangedService =
    /*#__PURE__*/
    function () {
      function FollowChangedService() {
        _classCallCheck(this, FollowChangedService);

        this._changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.changed$ = this._changed.asObservable();
      }

      _createClass(FollowChangedService, [{
        key: "changed",
        value: function changed() {
          this._changed.next();
        }
      }]);

      return FollowChangedService;
    }();

    FollowChangedService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function FollowChangedService_Factory() {
        return new FollowChangedService();
      },
      token: FollowChangedService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/log.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/log.service.ts ***!
    \*****************************************/

  /*! exports provided: LogService */

  /***/
  function srcAppServicesLogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogService", function () {
      return LogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _env_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./env.service */
    "./src/app/services/env.service.ts");

    var LogService =
    /*#__PURE__*/
    function () {
      function LogService(_envService) {
        _classCallCheck(this, LogService);

        this._envService = _envService;
      }

      _createClass(LogService, [{
        key: "log",
        value: function log(message) {
          if (this._envService.debug) {
            console.log(message);
          }
        }
      }, {
        key: "error",
        value: function error(message) {
          console.error(message);
        }
      }]);

      return LogService;
    }();

    LogService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function LogService_Factory() {
        return new LogService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_env_service__WEBPACK_IMPORTED_MODULE_1__["EnvService"]));
      },
      token: LogService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/persistence/follow.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/persistence/follow.service.ts ***!
    \********************************************************/

  /*! exports provided: FollowService */

  /***/
  function srcAppServicesPersistenceFollowServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowService", function () {
      return FollowService;
    });
    /* harmony import */


    var _services_persistence_persistence_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @services/persistence/persistence.service */
    "./src/app/services/persistence/persistence.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../snackbar.service */
    "./src/app/services/snackbar.service.ts");

    var FollowService =
    /*#__PURE__*/
    function (_services_persistence) {
      _inherits(FollowService, _services_persistence);

      function FollowService() {
        var _this16;

        _classCallCheck(this, FollowService);

        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(FollowService).apply(this, arguments));
        _this16.showIds = [];
        return _this16;
      }

      _createClass(FollowService, [{
        key: "save",
        value: function save() {
          this._logService.log("FollowService -- saving");

          return this.saveData(this.toJSON());
        }
      }, {
        key: "load",
        value: function load() {
          var _this17 = this;

          this._logService.log("FollowService -- loading");

          return new Promise(function (resolve, reject) {
            _this17.loadData().then(function (data) {
              if (data) {
                _this17.showIds = data.showIds;
              } else {
                _this17.showIds = [];
              }

              resolve(true);
            }, function (error) {
              _this17.showIds = [];
              resolve(false);
            });
          });
        }
      }, {
        key: "following",
        value: function following(id) {
          return this.showIds.includes(id);
        }
      }, {
        key: "follow",
        value: function follow(id) {
          this._logService.log("FollowService -- follow ".concat(id));

          if (!this.showIds.includes(id)) {
            this.showIds.push(id);
          }

          this._logService.log(this.showIds);

          return this.save();
        }
      }, {
        key: "unfollow",
        value: function unfollow(id) {
          this._logService.log("FollowService -- unfollow ".concat(id));

          if (this.showIds.includes(id)) {
            this.showIds.splice(this.showIds.indexOf(id), 1);
          }

          this._logService.log(this.showIds);

          return this.save();
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return JSON.stringify({
            showIds: this.showIds
          });
        }
      }]);

      return FollowService;
    }(_services_persistence_persistence_service__WEBPACK_IMPORTED_MODULE_0__["PersistenceService"]);

    FollowService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function FollowService_Factory() {
        return new FollowService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"]));
      },
      token: FollowService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/persistence/persistence.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/persistence/persistence.service.ts ***!
    \*************************************************************/

  /*! exports provided: PersistenceService */

  /***/
  function srcAppServicesPersistencePersistenceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersistenceService", function () {
      return PersistenceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../snackbar.service */
    "./src/app/services/snackbar.service.ts");

    var PersistenceService =
    /*#__PURE__*/
    function () {
      function PersistenceService(_logService, _snackbarService) {
        _classCallCheck(this, PersistenceService);

        this._logService = _logService;
        this._snackbarService = _snackbarService;
        this._storeKey = "tvSleuth";
      }

      _createClass(PersistenceService, [{
        key: "saveData",
        value: function saveData(data) {
          var _this18 = this;

          this._logService.log("PersistenceService -- saving");

          return new Promise(function (resolve, reject) {
            try {
              localStorage.setItem(_this18._storeKey, data);

              _this18._logService.log("PersistenceService -- saved");

              _this18._snackbarService.showSuccess("Saved!");

              resolve(true);
            } catch (_) {
              _this18._logService.error("PersistenceService -- something went wrong");

              _this18._snackbarService.showError("Bah, something went wrong :(");

              resolve(false);
            }
          });
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this19 = this;

          this._logService.log("PersistenceService -- loading");

          return new Promise(function (resolve, reject) {
            var storageData = localStorage.getItem(_this19._storeKey);

            _this19._logService.log("PersistenceService -- from storage:");

            _this19._logService.log(storageData);

            if (storageData != null) {
              _this19._logService.log("PersistenceService -- loaded");

              resolve(JSON.parse(storageData));
            } else {
              _this19._logService.error("PersistenceService -- something went wrong");

              resolve(null);
            }
          });
        }
      }]);

      return PersistenceService;
    }();

    PersistenceService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function PersistenceService_Factory() {
        return new PersistenceService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"]));
      },
      token: PersistenceService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/snackbar.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/snackbar.service.ts ***!
    \**********************************************/

  /*! exports provided: SnackbarService */

  /***/
  function srcAppServicesSnackbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackbarService", function () {
      return SnackbarService;
    });
    /* harmony import */


    var _components_snackbars_error_snackbar_error_snackbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @components/snackbars/error-snackbar/error-snackbar.component */
    "./src/app/components/snackbars/error-snackbar/error-snackbar.component.ts");
    /* harmony import */


    var _components_snackbars_warn_snackbar_warn_snackbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @components/snackbars/warn-snackbar/warn-snackbar.component */
    "./src/app/components/snackbars/warn-snackbar/warn-snackbar.component.ts");
    /* harmony import */


    var _components_snackbars_success_snackbar_success_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @components/snackbars/success-snackbar/success-snackbar.component */
    "./src/app/components/snackbars/success-snackbar/success-snackbar.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var SnackbarService =
    /*#__PURE__*/
    function () {
      function SnackbarService(_matSnackBar) {
        _classCallCheck(this, SnackbarService);

        this._matSnackBar = _matSnackBar;
        this.DELAY = 3;
      }

      _createClass(SnackbarService, [{
        key: "showError",
        value: function showError(message) {
          this._show("error", message);
        }
      }, {
        key: "showWarning",
        value: function showWarning(message) {
          this._show("warning", message);
        }
      }, {
        key: "showSuccess",
        value: function showSuccess(message) {
          this._show("success", message);
        }
      }, {
        key: "_show",
        value: function _show(type, message) {
          var component;
          var panelClass;

          switch (type) {
            case "error":
              component = _components_snackbars_error_snackbar_error_snackbar_component__WEBPACK_IMPORTED_MODULE_0__["ErrorSnackbarComponent"];
              panelClass = 'error-snackbar';
              break;

            case "warning":
              component = _components_snackbars_warn_snackbar_warn_snackbar_component__WEBPACK_IMPORTED_MODULE_1__["WarnSnackbarComponent"];
              panelClass = 'warning-snackbar';
              break;

            case "success":
              component = _components_snackbars_success_snackbar_success_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["SuccessSnackbarComponent"];
              panelClass = 'success-snackbar';
              break;
          }

          this._matSnackBar.openFromComponent(component, {
            data: message,
            duration: this.DELAY * 1000,
            panelClass: [panelClass]
          });
        }
      }]);

      return SnackbarService;
    }();

    SnackbarService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      factory: function SnackbarService_Factory() {
        return new SnackbarService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      },
      token: SnackbarService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Volumes/Real Code/personal/Angular/tvSleuth/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map