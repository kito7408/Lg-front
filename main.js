(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/prediction/prediction.component.ts");
/* harmony import */ var _beacon_beacon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./beacon/beacon.component */ "./src/app/beacon/beacon.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__["InicioComponent"] },
    { path: 'products', component: _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"] },
    { path: 'users', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'categories', component: _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"] },
    { path: 'predictions', component: _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_5__["PredictionComponent"] },
    { path: 'beacons', component: _beacon_beacon_component__WEBPACK_IMPORTED_MODULE_6__["BeaconComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a class=\"btn btn-info\" routerLink=\"/inicio\">Login</a>\n  <!--<a class=\"btn btn-info\" routerLink=\"/users\">Users</a>-->\n  <a class=\"btn btn-info\" routerLink=\"/products\">Products</a>\n  <a class=\"btn btn-info\" routerLink=\"/categories\">Categories</a>\n  <!--<a class=\"btn btn-info\" routerLink=\"/predictions\">Predictions</a>-->\n  <a class=\"btn btn-info\" routerLink=\"/beacons\">Beacons</a>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.service */ "./src/app/category.service.ts");
/* harmony import */ var _beacon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beacon.service */ "./src/app/beacon.service.ts");
/* harmony import */ var _prediction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prediction.service */ "./src/app/prediction.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/prediction/prediction.component.ts");
/* harmony import */ var _beacon_beacon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./beacon/beacon.component */ "./src/app/beacon/beacon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







 // <-- NgModel lives here









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_13__["CategoryComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_14__["InicioComponent"],
                _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_15__["PredictionComponent"],
                _beacon_beacon_component__WEBPACK_IMPORTED_MODULE_16__["BeaconComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"], _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _beacon_service__WEBPACK_IMPORTED_MODULE_3__["BeaconService"], _prediction_service__WEBPACK_IMPORTED_MODULE_4__["PredictionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/beacon.service.ts":
/*!***********************************!*\
  !*** ./src/app/beacon.service.ts ***!
  \***********************************/
/*! exports provided: BeaconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconService", function() { return BeaconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeaconService = /** @class */ (function () {
    function BeaconService(http) {
        this.http = http;
        this.url = 'http://35.231.37.9/api/beacons/';
    }
    BeaconService.prototype.getAll = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': sessionStorage.getItem("token"),
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.get(this.url, httpOptions);
    };
    BeaconService.prototype.getById = function (uuid) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': sessionStorage.getItem("token"),
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var newUrl = this.url + uuid;
        return this.http.get(newUrl, httpOptions);
    };
    BeaconService.prototype.save = function (beacon) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': sessionStorage.getItem("token"),
                'Content-Type': 'application/json'
            })
        };
        var newUrl = this.url + 'create';
        return this.http.post(newUrl, beacon, httpOptions);
    };
    BeaconService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeaconService);
    return BeaconService;
}());



/***/ }),

/***/ "./src/app/beacon.ts":
/*!***************************!*\
  !*** ./src/app/beacon.ts ***!
  \***************************/
/*! exports provided: Beacon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beacon", function() { return Beacon; });
var Beacon = /** @class */ (function () {
    function Beacon() {
    }
    return Beacon;
}());



/***/ }),

/***/ "./src/app/beacon/beacon.component.css":
/*!*********************************************!*\
  !*** ./src/app/beacon/beacon.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/beacon/beacon.component.html":
/*!**********************************************!*\
  !*** ./src/app/beacon/beacon.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conteiner\">\n    <h2>Add Beacon</h2>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div>\n          <label>UUID:\n            <input #uuid />\n          </label>\n        </div>\n        <div>\n          <label>Major:\n            <input #major />\n          </label>\n        </div>\n        <div>\n          <label>Minor:\n            <input #minor />\n          </label>\n        </div>\n        <div>\n          <label>Activo:\n            <select  #activo>\n              <option value=\"1\">true</option>\n              <option value=\"0\">false</option>\n            </select>\n          </label>\n        </div>\n  \n        <button class=\"btn btn-primary\" \n        (click)=\"save(uuid.value,major.value,minor.value,activo.value);\n        uuid.value='';major.value='';minor.value='';\">\n          Add\n        </button>\n      </div>\n  \n      <div class=\"col card\" *ngIf=\"select\">\n        <h2>Beacon Info</h2>\n        <ul>\n          <li><strong>Id:</strong> {{beacon.id}}</li>\n          <li><strong>UUID:</strong> {{beacon.UUID}}</li>\n          <li><strong>Major:</strong> {{beacon.major}}</li>\n          <li><strong>Minor:</strong> {{beacon.minor}}</li>\n          <li><strong>Activo:</strong> {{beacon.state}}</li>\n        </ul>\n      </div>\n    </div>\n  \n    <h2>Beacon List</h2>\n  \n    <table class=\"table\" *ngIf=\"beacons\">\n      <tr>\n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">UUID</th>\n        <th scope=\"col\">Major</th>\n        <th scope=\"col\">Minor</th>\n        <th scope=\"col\">Activo</th>\n      </tr>\n      <tr *ngFor=\"let beacon of beacons.data\" (click)=\"selectedItem(beacon.UUID)\">\n        <td scope=\"row\">{{beacon.id}}</td>\n        <td>{{beacon.UUID}}</td>\n        <td>{{beacon.major}}</td>\n        <td>{{beacon.minor}}</td>\n        <td>{{beacon.state}}</td>\n      </tr>\n    </table>\n  </div>"

/***/ }),

/***/ "./src/app/beacon/beacon.component.ts":
/*!********************************************!*\
  !*** ./src/app/beacon/beacon.component.ts ***!
  \********************************************/
/*! exports provided: BeaconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconComponent", function() { return BeaconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beacon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beacon */ "./src/app/beacon.ts");
/* harmony import */ var _beacon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beacon.service */ "./src/app/beacon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeaconComponent = /** @class */ (function () {
    function BeaconComponent(service) {
        this.service = service;
    }
    BeaconComponent.prototype.ngOnInit = function () {
        this.select = false;
        this.beacon = null;
        this.newBeacon = new _beacon__WEBPACK_IMPORTED_MODULE_1__["Beacon"];
        this.getAll();
    };
    BeaconComponent.prototype.getAll = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (data) { return _this.beacons = data; });
    };
    BeaconComponent.prototype.selectedItem = function (uuid) {
        var _this = this;
        this.service.getById(uuid)
            .subscribe(function (data) {
            console.log(data);
            _this.beacon = data;
            _this.select = true;
        });
    };
    BeaconComponent.prototype.save = function (uuid, major, minor, state) {
        var _this = this;
        this.newBeacon.UUID = uuid;
        this.newBeacon.major = major;
        this.newBeacon.minor = minor;
        this.newBeacon.state = state;
        this.service.save(this.newBeacon)
            .subscribe(function (data) { return _this.getAll(); });
    };
    BeaconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beacon',
            template: __webpack_require__(/*! ./beacon.component.html */ "./src/app/beacon/beacon.component.html"),
            styles: [__webpack_require__(/*! ./beacon.component.css */ "./src/app/beacon/beacon.component.css")]
        }),
        __metadata("design:paramtypes", [_beacon_service__WEBPACK_IMPORTED_MODULE_2__["BeaconService"]])
    ], BeaconComponent);
    return BeaconComponent;
}());



/***/ }),

/***/ "./src/app/category.service.ts":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.url = 'http://35.231.37.9/api/categories';
    }
    CategoryService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    CategoryService.prototype.getById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': sessionStorage.getItem("token"),
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var newUrl = this.url + '/' + id;
        return this.http.get(newUrl, httpOptions);
    };
    CategoryService.prototype.save = function (category) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': sessionStorage.getItem("token"),
                'Content-Type': 'application/json'
            })
        };
        var newUrl = this.url + '/create';
        return this.http.post(newUrl, category, httpOptions);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/category.ts":
/*!*****************************!*\
  !*** ./src/app/category.ts ***!
  \*****************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conteiner\">\n    <h2>Add Category</h2>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div>\n          <label>Name:\n            <input #name />\n          </label>\n        </div>\n        <div>\n          <label>Description:\n            <input #description />\n          </label>\n        </div>\n  \n        <button class=\"btn btn-primary\" \n        (click)=\"save(name.value,description.value);\n        name.value='';description.value='';\">\n          Add\n        </button>\n      </div>\n  \n      <div class=\"col card\" *ngIf=\"select\">\n        <h2>Category Info</h2>\n        <ul>\n          <li><strong>Id:</strong> {{category.id}}</li>\n          <li><strong>Name:</strong> {{category.name}}</li>\n          <li><strong>Description:</strong> {{category.description}}</li>\n        </ul>\n      </div>\n    </div>\n  \n    <h2>Categories List</h2>\n  \n    <table class=\"table\" *ngIf=\"categories\">\n      <tr>\n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Description</th>\n      </tr>\n      <tr *ngFor=\"let category of categories.data\" (click)=\"selectedItem(category.id)\">\n        <td scope=\"row\">{{category.id}}</td>\n        <td>{{category.name}}</td>\n        <td>{{category.description}}</td>\n      </tr>\n    </table>\n  </div>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category */ "./src/app/category.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(service) {
        this.service = service;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.select = false;
        this.category = null;
        this.newCategory = new _category__WEBPACK_IMPORTED_MODULE_1__["Category"];
        this.getAll();
    };
    CategoryComponent.prototype.getAll = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (data) { return _this.categories = data; });
    };
    CategoryComponent.prototype.selectedItem = function (id) {
        var _this = this;
        this.service.getById(id)
            .subscribe(function (data) {
            _this.category = data;
            _this.select = true;
        });
    };
    CategoryComponent.prototype.save = function (name, description) {
        var _this = this;
        this.newCategory.name = name;
        this.newCategory.description = description;
        this.service.save(this.newCategory)
            .subscribe(function (data) { return _this.getAll(); });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <div *ngIf=\"!userString\">\n    <h1>Login</h1>\n    <div>\n      <label>Email:\n        <input #email />\n      </label>\n    </div>\n    <div>\n      <label>Password:\n        <input type=\"password\" #password />\n      </label>\n    </div>\n    <div>\n      <button class=\"btn btn-success\" \n      (click)=\"login(email.value,password.value);\n      email.value='';password.value='';\">\n        Login\n      </button>\n    </div>\n  </div>\n  <div *ngIf=\"userString\">\n    <h1>User:</h1>\n    <h2>{{ userString }}</h2>\n    <button class=\"btn btn-danger\"\n    (click)=\"logout();\">\n      Logout\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InicioComponent = /** @class */ (function () {
    function InicioComponent(service) {
        this.service = service;
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.userString = sessionStorage.getItem("user");
    };
    InicioComponent.prototype.login = function (email, password) {
        var _this = this;
        this.service.login(email, password)
            .subscribe(function (data) {
            _this.aux = data;
            _this.token = _this.aux.data.token;
            _this.user = _this.aux.data.user;
            _this.tokenString = _this.token.token_type + ' ' + _this.token.access_token;
            sessionStorage.setItem("token", _this.tokenString);
            sessionStorage.setItem("user", _this.user.name + ' ' + _this.user.last_name);
            _this.userString = sessionStorage.getItem("user");
            sessionStorage.setItem("user_id", _this.user.id.toString());
        });
    };
    InicioComponent.prototype.logout = function () {
        var _this = this;
        this.service.logout()
            .subscribe(function (data) {
            _this.userString = null;
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user_id");
        });
    };
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/prediction.service.ts":
/*!***************************************!*\
  !*** ./src/app/prediction.service.ts ***!
  \***************************************/
/*! exports provided: PredictionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionService", function() { return PredictionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PredictionService = /** @class */ (function () {
    function PredictionService(http) {
        this.http = http;
        this.url = 'http://35.231.37.9/api/predictions/';
    }
    PredictionService.prototype.getByUserId = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': sessionStorage.getItem("token"),
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var user_id = parseInt(sessionStorage.getItem("user_id"));
        var newUrl = this.url + user_id;
        return this.http.get(newUrl, httpOptions);
    };
    PredictionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PredictionService);
    return PredictionService;
}());



/***/ }),

/***/ "./src/app/prediction.ts":
/*!*******************************!*\
  !*** ./src/app/prediction.ts ***!
  \*******************************/
/*! exports provided: Prediction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prediction", function() { return Prediction; });
var Prediction = /** @class */ (function () {
    function Prediction() {
    }
    return Prediction;
}());



/***/ }),

/***/ "./src/app/prediction/prediction.component.css":
/*!*****************************************************!*\
  !*** ./src/app/prediction/prediction.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prediction/prediction.component.html":
/*!******************************************************!*\
  !*** ./src/app/prediction/prediction.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conteiner\">\n    <h2>Add Prediction</h2>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div>\n          <label>User:\n            <input #user />\n          </label>\n        </div>\n        <div>\n          <label>Beacon:\n            <input #beacon />\n          </label>\n        </div>\n        <div>\n          <label>Product:\n            <select  #product  *ngIf=\"products\">\n              <option *ngFor=\"let product of products.data\" value=\"{{product.id}}\">{{product.name}}</option>\n            </select>\n          </label>\n        </div>\n  \n        <!--<button class=\"btn btn-primary\" \n        (click)=\"save(user.value,beacon.value,product.value);\n        user.value='';beacon.value='';\">\n          Add\n        </button>-->\n      </div>\n  \n      <div class=\"col card\" *ngIf=\"select\">\n        <h2>Prediction Info</h2>\n        <ul>\n          <li><strong>Id:</strong> {{prediction.id}}</li>\n          <li><strong>User:</strong> {{prediction.user_id}}</li>\n          <li><strong>Beacon:</strong> {{prediction.beacon_id}}</li>\n          <li><strong>Product:</strong> {{prediction.product.name_id}}</li>\n        </ul>\n      </div>\n    </div>\n  \n    <h2>Prediction List</h2>\n  \n    <table class=\"table\">\n      <tr>\n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">User</th>\n        <th scope=\"col\">Beacon</th>\n        <th scope=\"col\">Product</th>\n      </tr>\n      <tr *ngIf=\"prediction\" (click)=\"selectedItem(prediction.id)\"> <!--*ngFor=\"let prediction of predictions\"-->\n        <td scope=\"row\">{{prediction.id}}</td>\n        <td>{{prediction.user_id}}</td>\n        <td>{{prediction.beacon_id}}</td>\n        <td>{{prediction.product_id}}</td>\n      </tr>\n    </table>\n  </div>"

/***/ }),

/***/ "./src/app/prediction/prediction.component.ts":
/*!****************************************************!*\
  !*** ./src/app/prediction/prediction.component.ts ***!
  \****************************************************/
/*! exports provided: PredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionComponent", function() { return PredictionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prediction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prediction */ "./src/app/prediction.ts");
/* harmony import */ var _prediction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prediction.service */ "./src/app/prediction.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PredictionComponent = /** @class */ (function () {
    function PredictionComponent(service, productService) {
        this.service = service;
        this.productService = productService;
    }
    PredictionComponent.prototype.ngOnInit = function () {
        this.select = false;
        this.newPrediction = new _prediction__WEBPACK_IMPORTED_MODULE_1__["Prediction"];
        this.getAll();
        this.getAllProducts();
    };
    PredictionComponent.prototype.getAll = function () {
        var _this = this;
        this.service.getByUserId()
            .subscribe(function (data) {
            _this.prediction = data;
        });
    };
    PredictionComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.productService.getAll()
            .subscribe(function (data) {
            _this.products = data;
        });
    };
    /*selectedItem(id: number): void {
      this.service.getById(id)
      .subscribe(data => {
        this.prediction=data;
        this.select=true;
      });
    }*/
    PredictionComponent.prototype.save = function (user, product, beacon) {
        this.newPrediction.user_id = parseInt(user);
        this.newPrediction.product_id = parseInt(product);
        this.newPrediction.beacon_id = parseInt(beacon);
        console.log("New Prediction:", this.newPrediction);
    };
    PredictionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prediction',
            template: __webpack_require__(/*! ./prediction.component.html */ "./src/app/prediction/prediction.component.html"),
            styles: [__webpack_require__(/*! ./prediction.component.css */ "./src/app/prediction/prediction.component.css")]
        }),
        __metadata("design:paramtypes", [_prediction_service__WEBPACK_IMPORTED_MODULE_2__["PredictionService"], _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], PredictionComponent);
    return PredictionComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.url = 'http://35.231.37.9/api/products';
    }
    ProductService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    ProductService.prototype.getById = function (id) {
        var newUrl = this.url + '/' + id;
        return this.http.get(newUrl);
    };
    ProductService.prototype.save = function (product) {
        var newUrl = this.url + '/create';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': sessionStorage.getItem("token"),
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(newUrl, product, httpOptions);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product.ts":
/*!****************************!*\
  !*** ./src/app/product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conteiner\">\n  <h2>Add Product</h2>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div>\n        <label>Name:\n          <input #name />\n        </label>\n      </div>\n      <div>\n        <label>Description:\n          <input #description />\n        </label>\n      </div>\n      <div>\n        <label>Size:\n          <input #size />\n        </label>\n      </div>\n      <div>\n        <label>Color:\n          <input type=\"color\" #color />\n        </label>\n      </div>\n      <div>\n        <label>Category:\n          <select  #category>\n            <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.name}}</option>\n          </select>\n        </label>\n      </div>\n\n      <button class=\"btn btn-primary\" \n      (click)=\"save(name.value,description.value,size.value,color.value,category.value);\n      name.value='';description.value='';size.value='';\">\n        Add\n      </button>\n    </div>\n\n    <div class=\"col card\" *ngIf=\"select\">\n      <h2>Product Info</h2>\n      <ul>\n        <li><strong>Name:</strong> {{product.name}}</li>\n        <li><strong>Description:</strong> {{product.description}}</li>\n        <li><strong>Size:</strong> {{product.size}}</li>\n        <li><strong>Color:</strong> {{product.color}}</li>\n        <li><strong>Category:</strong> {{product.category_id}}</li>\n        <li>\n          <strong>Images:</strong>\n          <ul>\n            <li *ngFor=\"let image of product.images\">\n              {{image.name}}\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <h2>Product List</h2>\n\n  <table class=\"table\" *ngIf=\"products\">\n    <tr>\n      <th scope=\"col\">Id</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Size</th>\n    </tr>\n    <tr *ngFor=\"let product of products.data\" (click)=\"selectedItem(product.id)\">\n      <td scope=\"row\">{{product.id}}</td>\n      <td>{{product.name}}</td>\n      <td>{{product.size}}</td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(service, categoryService) {
        this.service = service;
        this.categoryService = categoryService;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getAllCategories();
        this.select = false;
        this.product = null;
        this.newProduct = new _product__WEBPACK_IMPORTED_MODULE_1__["Product"];
        this.getAll();
    };
    ProductComponent.prototype.save = function (name, description, size, color, category) {
        var _this = this;
        this.newProduct.name = name;
        this.newProduct.description = description;
        this.newProduct.color = color;
        this.newProduct.category_id = parseInt(category);
        this.newProduct.size = size;
        this.service.save(this.newProduct)
            .subscribe(function (data) {
            _this.getAll();
        });
    };
    ProductComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.categoryService.getAll()
            .subscribe(function (data) {
            _this.aux = data;
            _this.categories = _this.aux.data;
        });
    };
    ProductComponent.prototype.getAll = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (data) { return _this.products = data; });
    };
    ProductComponent.prototype.selectedItem = function (id) {
        var _this = this;
        this.service.getById(id)
            .subscribe(function (data) {
            _this.product = data;
            _this.select = true;
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = '';
        this.logUrl = 'http://35.231.37.9/api/auth/login';
        this.logoutUrl = 'http://35.231.37.9/api/auth/logout';
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    UserService.prototype.save = function (user) {
        return this.http.post(this.url, user);
    };
    UserService.prototype.getById = function (id) {
        var newUrl = this.url + '/' + id;
        return this.http.get(newUrl);
    };
    UserService.prototype.login = function (email, password) {
        return this.http.post(this.logUrl, { email: email, password: password });
    };
    UserService.prototype.logout = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': sessionStorage.getItem("token"),
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.get(this.logoutUrl, httpOptions);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conteiner\">\n    <h2>Add User</h2>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div>\n          <label>Name:\n            <input #name />\n          </label>\n        </div>\n        <div>\n          <label>Last Name:\n            <input #lastName />\n          </label>\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"save(name.value,lastName.value); name.value=''; lastName.value='';\">\n          Add\n        </button>\n      </div>\n  \n      <div class=\"col card\" *ngIf=\"select\">\n        <h2>User Info</h2>\n        <ul>\n          <li><strong>Name:</strong> {{user.name}}</li>\n          <li><strong>Last Name:</strong> {{user.description}}</li>\n        </ul>\n      </div>\n    </div>\n  \n    <h2>Users List</h2>\n  \n    <table class=\"table\" *ngIf=\"users\">\n      <tr>\n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Last Name</th>\n      </tr>\n      <tr *ngFor=\"let user of users.data\" (click)=\"selectedItem(user.id)\">\n        <td scope=\"row\">{{user.id}}</td>\n        <td>{{user.name}}</td>\n        <td>{{user.last_name}}</td>\n      </tr>\n    </table>\n  </div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(service) {
        this.service = service;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.select = false;
        this.user = null;
        this.newUser = new _user__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.getAll();
    };
    UserComponent.prototype.getAll = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (data) { return _this.users = data; });
    };
    UserComponent.prototype.selectedItem = function (id) {
        var _this = this;
        this.service.getById(id)
            .subscribe(function (data) {
            _this.user = data;
            _this.select = true;
        });
    };
    UserComponent.prototype.save = function (name, last_name) {
        this.newUser.name = name;
        this.newUser.last_name = last_name;
        console.log("Nuevo Usuario:", this.newUser);
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Cristopher\Desktop\TDP\Proyecto\Frontend\LG-Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map