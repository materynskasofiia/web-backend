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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tours_tours_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tours/tours.component */ "./src/app/tours/tours.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");







var routes = [
    { path: 'articles', component: _tours_tours_component__WEBPACK_IMPORTED_MODULE_3__["ToursComponent"] },
    { path: 'chooseTour', component: _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"Wrapper\">\n  <app-header *ngIf=\"href!='/login'\"></app-header>\n    <!-- <app-form></app-form> -->\n    <!-- <app-tours></app-tours> -->\n    <router-outlet></router-outlet>\n    <app-footer *ngIf=\"href!='/login'\"></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(location, router) {
        var _this = this;
        this.title = 'angular-project';
        router.events.subscribe(function (val) {
            if (location.path() != "") {
                _this.href = location.path();
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.href = location.path();//this.router.url;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _tours_tours_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tours/tours.component */ "./src/app/tours/tours.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _article_grid_article_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article-grid/article-grid.component */ "./src/app/article-grid/article-grid.component.ts");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _disabled_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./disabled.directive */ "./src/app/disabled.directive.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _tours_tours_component__WEBPACK_IMPORTED_MODULE_8__["ToursComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"],
                _article_grid_article_grid_component__WEBPACK_IMPORTED_MODULE_11__["ArticleGridComponent"],
                _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_12__["ArticleListComponent"],
                _disabled_directive__WEBPACK_IMPORTED_MODULE_13__["DisabledDirective"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-grid/article-grid.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article-grid/article-grid.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"typeOfGrid\">\n  <div class=\"article\" id=\"article1\">\n    <p><span>Lorem ipsum dolor</span><br> sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula.</p>\n    </div>\n  <div class=\"article\" id=\"article2\">\n      <p><span>Lorem ipsum dolor</span><br> sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula. </p>\n    </div>\n  <div class=\"article\" id=\"article3\">\n      <p><span>Lorem ipsum dolor</span><br> sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula. </p>\n    </div>\n  <div class=\"article\" id=\"article4\">\n      <p><span>Lorem ipsum dolor</span><br> sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula. </p>\n    </div>\n  <div class=\"article\" id=\"article5\">\n      <p><span>Lorem ipsum dolor</span><br> sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula. </p>\n    </div>\n  <div class=\"article\" id=\"article6\">\n      <p><span>Lorem ipsum dolor</span><br> sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula.</p>\n    </div>\n  <div class=\"article\" id=\"article7\">\n      <p><span>Lorem ipsum dolor</span><br> sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula. Sed porttitor sodales suscipit. Proin dictum vel risus sit amet iaculis. Nunc id venenatis mauris. Aenean accumsan hendrerit imperdiet. Nullam ac orci gravida, mollis ex sit amet, volutpat libero. Integer ac accumsan ante.</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/article-grid/article-grid.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/article-grid/article-grid.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nheader .logo {\n    grid-column: 1/3; }\nheader .navigation {\n    grid-column: 5/13; }\n.centerContent1 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\n.centerContent1 .form {\n    grid-column: 4/10; }\n.centerContent23 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(2, 400px); }\n.centerContent23 #article1 {\n    grid-column: 1/4; }\n.centerContent23 #article2 {\n    grid-column: 4/7; }\n.centerContent23 #article3 {\n    grid-column: 7/10; }\n.centerContent23 #article4 {\n    grid-column: 10/13; }\n.centerContent23 #article5 {\n    grid-column: 1/5; }\n.centerContent23 #article6 {\n    grid-column: 5/8; }\n.centerContent23 #article7 {\n    grid-column: 8/13; }\n.centerContent22 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent22 #article1, .centerContent22 #article4 {\n    grid-column: 1/5; }\n.centerContent22 #article2, .centerContent22 #article5 {\n    grid-column: 5/9; }\n.centerContent22 #article3, .centerContent22 #article6 {\n    grid-column: 9/13; }\n.centerContent22 #article7 {\n    grid-column: 1/13; }\n.centerContent21 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent21 #article1 {\n    grid-column: 1/4; }\n.centerContent21 #article2 {\n    grid-column: 4/9; }\n.centerContent21 #article3 {\n    grid-column: 9/13; }\n.centerContent21 #article4 {\n    grid-column: 1/6; }\n.centerContent21 #article5 {\n    grid-column: 6/10; }\n.centerContent21 #article6 {\n    grid-column: 10/13; }\n.centerContent21 #article7 {\n    grid-column: 1/13; }\nfooter {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nfooter .socialMedia {\n    grid-column: 2/6; }\nfooter .contacts {\n    grid-column: 7/10; }\nfooter .information {\n    grid-column: 10/12; }\n* {\n  padding: 0;\n  margin: 0; }\na {\n  text-decoration: none;\n  color: black; }\nul {\n  list-style: none; }\nbody {\n  background-color: white;\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n.centerContent21, .centerContent22, .centerContent23 {\n  margin: 20px;\n  padding: 20px; }\n.centerContent21 .article, .centerContent22 .article, .centerContent23 .article {\n    margin: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-content: center; }\n.centerContent21 .article:hover p, .centerContent22 .article:hover p, .centerContent23 .article:hover p {\n      opacity: 0.7; }\n.centerContent21 .article p, .centerContent22 .article p, .centerContent23 .article p {\n      background-color: white;\n      opacity: 0.0;\n      padding: 15px;\n      text-align: center; }\n.centerContent21 .article p span, .centerContent22 .article p span, .centerContent23 .article p span {\n        font-size: 1.5em;\n        line-height: 1.9em;\n        margin-bottom: 10%; }\n.centerContent21 #article1, .centerContent22 #article1, .centerContent23 #article1 {\n    background-image: url('aron-visuals-1186369-unsplash2.jpg');\n    background-position: center; }\n.centerContent21 #article2, .centerContent22 #article2, .centerContent23 #article2 {\n    background-image: url('mariano-colombotto-1366332-unsplash3.jpg');\n    background-position: center; }\n.centerContent21 #article3, .centerContent22 #article3, .centerContent23 #article3 {\n    background-image: url('ben-blennerhassett-300784-unsplash2.jpg');\n    background-position: center; }\n.centerContent21 #article4, .centerContent22 #article4, .centerContent23 #article4 {\n    background-image: url('simon-migaj-1140153-unsplash2.jpg');\n    background-position: center; }\n.centerContent21 #article5, .centerContent22 #article5, .centerContent23 #article5 {\n    background-image: url('michal-janek-1106585-unsplash3.jpg');\n    background-position: center; }\n.centerContent21 #article6, .centerContent22 #article6, .centerContent23 #article6 {\n    background-image: url('angel-origgi-1198705-unsplash1.jpg');\n    background-position: center; }\n.centerContent21 #article7, .centerContent22 #article7, .centerContent23 #article7 {\n    background-image: url('tim-marshall-1254041-unsplash2.jpg');\n    background-position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS1ncmlkL0Q6XFwzeWVhclxcV2ViUHJcXGFuZ3VsYXItcHJvamVjdC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9hcnRpY2xlLWdyaWQvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcc2Nzc1xcbGF5b3V0XFxfZ3JpZC5zY3NzIiwic3JjL2FwcC9hcnRpY2xlLWdyaWQvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcc2Nzc1xcaGVscGVyc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9hcnRpY2xlLWdyaWQvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcc2Nzc1xcaGVscGVyc1xcX3Zhci5zY3NzIiwic3JjL2FwcC9hcnRpY2xlLWdyaWQvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcYXBwXFxhcnRpY2xlLWdyaWRcXGFydGljbGUtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VDZUksYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQsRUFBQTtBRGpCckQ7SUFHUSxnQkFBZ0IsRUFBQTtBQUh4QjtJQU1RLGlCQUFpQixFQUFBO0FDK0JyQjtFQXRCQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRCxFQUFBO0FBb0JqRDtJQUdRLGlCQUFpQixFQUFBO0FBMER6QjtFQW5GQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRDtFQW1GN0Msb0NBQW9DLEVBQUE7QUFGeEM7SUFJUSxnQkFBZ0IsRUFBQTtBQUp4QjtJQU9RLGdCQUFnQixFQUFBO0FBUHhCO0lBVVEsaUJBQWlCLEVBQUE7QUFWekI7SUFhUSxrQkFBa0IsRUFBQTtBQWIxQjtJQWdCUSxnQkFBZ0IsRUFBQTtBQWhCeEI7SUFtQlEsZ0JBQWdCLEVBQUE7QUFuQnhCO0lBc0JRLGlCQUFpQixFQUFBO0FBeEN6QjtFQWpFQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRDtFQWlFN0Msb0NBQW9DLEVBQUE7QUFGeEM7SUFJUSxnQkFBZ0IsRUFBQTtBQUp4QjtJQU9RLGdCQUFnQixFQUFBO0FBUHhCO0lBVVEsaUJBQWlCLEVBQUE7QUFWekI7SUFhUSxpQkFBaUIsRUFBQTtBQXhDekI7RUF0Q0EsYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQ7RUFzQzdDLG9DQUFvQyxFQUFBO0FBRnhDO0lBSVEsZ0JBQWdCLEVBQUE7QUFKeEI7SUFPUSxnQkFBZ0IsRUFBQTtBQVB4QjtJQVVRLGlCQUFpQixFQUFBO0FBVnpCO0lBYVEsZ0JBQWdCLEVBQUE7QUFieEI7SUFnQlEsaUJBQWlCLEVBQUE7QUFoQnpCO0lBbUJRLGtCQUFrQixFQUFBO0FBbkIxQjtJQXNCUSxpQkFBaUIsRUFBQTtBRDlEN0I7RUNFSSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRCxFQUFBO0FESnJEO0lBR1EsZ0JBQWdCLEVBQUE7QUFIeEI7SUFNUSxpQkFBaUIsRUFBQTtBQU56QjtJQVNRLGtCQUNKLEVBQUE7QURqQko7RUFDSSxVQUFTO0VBQ1QsU0FBUSxFQUFBO0FBRVo7RUFDSSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBO0FBRWhCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSx1QkdqQmtDO0VIa0JsQyxxREFBcUQsRUFBQTtBSWxCekQ7RUZTSSxZRVIyQjtFRlMzQixhRVRpQyxFQUFBO0FBRHJDO0lBR1EsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQixFQUFBO0FBUDdCO01BU1ksWUFBWSxFQUFBO0FBVHhCO01BWVksdUJEWjBCO01DYTFCLFlBQVk7TUFDWixhQUFhO01BQ2Isa0JBQWtCLEVBQUE7QUFmOUI7UUFpQmdCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsa0JBQWtCLEVBQUE7QUFuQmxDO0lGNEhJLDJEQUE0RTtJQUM1RSwyQkFBMkIsRUFBQTtBRTdIL0I7SUY0SEksaUVBQTRFO0lBQzVFLDJCQUEyQixFQUFBO0FFN0gvQjtJRjRISSxnRUFBNEU7SUFDNUUsMkJBQTJCLEVBQUE7QUU3SC9CO0lGNEhJLDBEQUE0RTtJQUM1RSwyQkFBMkIsRUFBQTtBRTdIL0I7SUY0SEksMkRBQTRFO0lBQzVFLDJCQUEyQixFQUFBO0FFN0gvQjtJRjRISSwyREFBNEU7SUFDNUUsMkJBQTJCLEVBQUE7QUU3SC9CO0lGNEhJLDJEQUE0RTtJQUM1RSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtZ3JpZC9hcnRpY2xlLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwic2Nzcy9oZWxwZXJzL3ZhclwiO1xuQGltcG9ydCBcInNjc3MvaGVscGVycy9taXhpbnNcIjtcbkBpbXBvcnQgXCJzY3NzL2hlbHBlcnMvZXh0ZW5kc1wiO1xuQGltcG9ydCBcInNjc3MvbGF5b3V0L2dyaWRcIjtcblxuKntcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG59XG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG51bHsgXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cbiIsImhlYWRlcntcclxuICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRpb257XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDUvMTM7IFxyXG4gICAgfVxyXG59XHJcbkBpbmNsdWRlIGdyaWRDaG9vc2VUb3VyMTtcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMztcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMjtcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMTtcclxuZm9vdGVye1xyXG4gICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgIC5zb2NpYWxNZWRpYXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMi82O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3Rze1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiA3LzEwO1xyXG4gICAgfVxyXG4gICAgLmluZm9ybWF0aW9ue1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxMC8xMlxyXG4gICAgfVxyXG59IiwiQG1peGluIGZvb3RlckZvbnQoKXtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5AbWl4aW4gZm9vdGVySG92ZXIge1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvcjogJGJvcmRlci1jb2xvciwgJGFtb3VudDogNDApXHJcbiAgICB9XHJcbn1cclxuQG1peGluIG1hcmdpblBhZGRpbmcoJG1hcmdpbiwgJHBhZGRpbmcpIHtcclxuICAgIG1hcmdpbjogJG1hcmdpbjtcclxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG59XHJcbkBtaXhpbiBncmlkRGlzcGxheSgkY29sdW1ucywgJHBlcmNlbnQpIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkY29sdW1ucywgJHBlcmNlbnQpO1xyXG4gICAgZ3JpZC1nYXA6ICgxMDAlLSRjb2x1bW5zKiRwZXJjZW50KS8oJGNvbHVtbnMgLSAxKTtcclxufVxyXG5AbWl4aW4gZ3JpZENob29zZVRvdXIyIHtcclxuICAgIC5jZW50ZXJDb250ZW50MXtcclxuICAgICAgICAuZm9ybXtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICAgICAgLmNvdW50cnksIC5oZWFkZXJPZkZvcm17XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMy8xMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLnRvcEZvcm17XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMS83O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3R0b21uRm9ybXtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA3LzEzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQ2hvb3NlVG91cjEge1xyXG4gICAgLmNlbnRlckNvbnRlbnQxe1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgLmZvcm17XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0LzEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZENob29zZVRvdXIzIHtcclxuICAgIC5jZW50ZXJDb250ZW50MXtcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIC5mb3Jte1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZEFydGljbGVzMXtcclxuICAgIC5jZW50ZXJDb250ZW50MjF7XHJcbiAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA0MDBweCk7XHJcbiAgICAgICAgI2FydGljbGUxe1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS80O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTJ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0Lzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlM3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDkvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlNHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU1e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNi8xMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU2e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTAvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlN3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQXJ0aWNsZXMye1xyXG4gICAgLmNlbnRlckNvbnRlbnQyMntcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDQwMHB4KTtcclxuICAgICAgICAjYXJ0aWNsZTEsICNhcnRpY2xlNHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUyLCAjYXJ0aWNsZTV7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1Lzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlMywgI2FydGljbGU2e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogOS8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU3e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGdyaWRBcnRpY2xlczN7XHJcbiAgICAuY2VudGVyQ29udGVudDIze1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDAwcHgpO1xyXG4gICAgICAgICNhcnRpY2xlMXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUye1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNC83O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTN7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA3LzEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTR7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxMC8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU1e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTZ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1Lzg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlN3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDgvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBiYWNrZ3JvdW5kKCRmaWxlKSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zcmMvaW1nLyN7JGZpbGV9LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIkQ6LzN5ZWFyL1dlYlByL2FuZ3VsYXItcHJvamVjdC9zcmMvaW1nLyN7JGZpbGV9LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufSIsIiRib3JkZXItY29sb3I6ICM2RjlBQjE7XHJcbiRmb290ZXItY29sb3I6IGxpZ2h0ZW4oJGJvcmRlci1jb2xvciwgNDIpO1xyXG4kYmFzZS1jb2xvcjogbGlnaHRlbigkZm9vdGVyLWNvbG9yLCA1KTtcclxuJGhlYWRlci1jb2xvcjogJGZvb3Rlci1jb2xvcjtcclxuJGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiRpbWFnZUxpc3Q6IChcImFyb24tdmlzdWFscy0xMTg2MzY5LXVuc3BsYXNoMlwiLCBcIm1hcmlhbm8tY29sb21ib3R0by0xMzY2MzMyLXVuc3BsYXNoM1wiLFxyXG5cImJlbi1ibGVubmVyaGFzc2V0dC0zMDA3ODQtdW5zcGxhc2gyXCIsXCJzaW1vbi1taWdhai0xMTQwMTUzLXVuc3BsYXNoMlwiLCBcclxuXCJtaWNoYWwtamFuZWstMTEwNjU4NS11bnNwbGFzaDNcIiwgXCJhbmdlbC1vcmlnZ2ktMTE5ODcwNS11bnNwbGFzaDFcIiwgXCJ0aW0tbWFyc2hhbGwtMTI1NDA0MS11bnNwbGFzaDNcIik7IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4uY2VudGVyQ29udGVudDIxLC5jZW50ZXJDb250ZW50MjIsIC5jZW50ZXJDb250ZW50MjN7XHJcbiAgICBAaW5jbHVkZSBtYXJnaW5QYWRkaW5nKDIwcHgsIDIwcHgpO1xyXG4gICAgLmFydGljbGV7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgJjpob3ZlciBwe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS45ZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjYXJ0aWNsZTF7XHJcbiAgICAgICAgQGluY2x1ZGUgYmFja2dyb3VuZChcImFyb24tdmlzdWFscy0xMTg2MzY5LXVuc3BsYXNoMlwiKTtcclxuICAgIH1cclxuICAgICNhcnRpY2xlMntcclxuICAgICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kKFwibWFyaWFuby1jb2xvbWJvdHRvLTEzNjYzMzItdW5zcGxhc2gzXCIpO1xyXG4gICAgfVxyXG4gICAgI2FydGljbGUze1xyXG4gICAgICAgIEBpbmNsdWRlIGJhY2tncm91bmQoXCJiZW4tYmxlbm5lcmhhc3NldHQtMzAwNzg0LXVuc3BsYXNoMlwiKTtcclxuICAgIH1cclxuICAgICNhcnRpY2xlNHtcclxuICAgICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kKFwic2ltb24tbWlnYWotMTE0MDE1My11bnNwbGFzaDJcIik7XHJcbiAgICB9XHJcbiAgICAjYXJ0aWNsZTV7XHJcbiAgICAgICAgQGluY2x1ZGUgYmFja2dyb3VuZChcIm1pY2hhbC1qYW5lay0xMTA2NTg1LXVuc3BsYXNoM1wiKTtcclxuICAgIH1cclxuICAgICNhcnRpY2xlNntcclxuICAgICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kKFwiYW5nZWwtb3JpZ2dpLTExOTg3MDUtdW5zcGxhc2gxXCIpO1xyXG4gICAgfVxyXG4gICAgI2FydGljbGU3e1xyXG4gICAgICAgIEBpbmNsdWRlIGJhY2tncm91bmQoXCJ0aW0tbWFyc2hhbGwtMTI1NDA0MS11bnNwbGFzaDJcIik7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/article-grid/article-grid.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-grid/article-grid.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleGridComponent", function() { return ArticleGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticleGridComponent = /** @class */ (function () {
    function ArticleGridComponent() {
    }
    ArticleGridComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ArticleGridComponent.prototype, "typeOfGrid", void 0);
    ArticleGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-grid',
            template: __webpack_require__(/*! ./article-grid.component.html */ "./src/app/article-grid/article-grid.component.html"),
            styles: [__webpack_require__(/*! ./article-grid.component.scss */ "./src/app/article-grid/article-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleGridComponent);
    return ArticleGridComponent;
}());



/***/ }),

/***/ "./src/app/article-list/article-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article-list/article-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centerContent3\">\n  <div *ngFor='let article of articles' class=\"articleWrapper\">\n      <p class=\"backgroundImage\" [id]=\"article.image\"></p>\n      <div class=\"articleList\" >\n          <span>{{article.title}}</span><br><p>{{article.text}} </p>\n        </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/article-list/article-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/article-list/article-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nheader .logo {\n    grid-column: 1/3; }\nheader .navigation {\n    grid-column: 5/13; }\n.centerContent1 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\n.centerContent1 .form {\n    grid-column: 4/10; }\n.centerContent23 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(2, 400px); }\n.centerContent23 #article1 {\n    grid-column: 1/4; }\n.centerContent23 #article2 {\n    grid-column: 4/7; }\n.centerContent23 #article3 {\n    grid-column: 7/10; }\n.centerContent23 #article4 {\n    grid-column: 10/13; }\n.centerContent23 #article5 {\n    grid-column: 1/5; }\n.centerContent23 #article6 {\n    grid-column: 5/8; }\n.centerContent23 #article7 {\n    grid-column: 8/13; }\n.centerContent22 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent22 #article1, .centerContent22 #article4 {\n    grid-column: 1/5; }\n.centerContent22 #article2, .centerContent22 #article5 {\n    grid-column: 5/9; }\n.centerContent22 #article3, .centerContent22 #article6 {\n    grid-column: 9/13; }\n.centerContent22 #article7 {\n    grid-column: 1/13; }\n.centerContent21 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent21 #article1 {\n    grid-column: 1/4; }\n.centerContent21 #article2 {\n    grid-column: 4/9; }\n.centerContent21 #article3 {\n    grid-column: 9/13; }\n.centerContent21 #article4 {\n    grid-column: 1/6; }\n.centerContent21 #article5 {\n    grid-column: 6/10; }\n.centerContent21 #article6 {\n    grid-column: 10/13; }\n.centerContent21 #article7 {\n    grid-column: 1/13; }\nfooter {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nfooter .socialMedia {\n    grid-column: 2/6; }\nfooter .contacts {\n    grid-column: 7/10; }\nfooter .information {\n    grid-column: 10/12; }\n* {\n  padding: 0;\n  margin: 0; }\na {\n  text-decoration: none;\n  color: black; }\nul {\n  list-style: none; }\nbody {\n  background-color: white;\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n.centerContent3 .articleWrapper {\n  margin: 5% 10%;\n  display: flex;\n  justify-content: center; }\n.centerContent3 .articleWrapper .backgroundImage {\n    width: 25%;\n    height: 300px; }\n.centerContent3 .articleWrapper #aron-visuals-1186369-unsplash2 {\n    background-image: url('aron-visuals-1186369-unsplash2.jpg');\n    background-position: center;\n    margin: 10px; }\n.centerContent3 .articleWrapper #mariano-colombotto-1366332-unsplash3 {\n    background-image: url('mariano-colombotto-1366332-unsplash3.jpg');\n    background-position: center;\n    margin: 10px; }\n.centerContent3 .articleWrapper #ben-blennerhassett-300784-unsplash2 {\n    background-image: url('ben-blennerhassett-300784-unsplash2.jpg');\n    background-position: center;\n    margin: 10px; }\n.centerContent3 .articleWrapper #simon-migaj-1140153-unsplash2 {\n    background-image: url('simon-migaj-1140153-unsplash2.jpg');\n    background-position: center;\n    margin: 10px; }\n.centerContent3 .articleWrapper #michal-janek-1106585-unsplash3 {\n    background-image: url('michal-janek-1106585-unsplash3.jpg');\n    background-position: center;\n    margin: 10px; }\n.centerContent3 .articleWrapper #angel-origgi-1198705-unsplash1 {\n    background-image: url('angel-origgi-1198705-unsplash1.jpg');\n    background-position: center;\n    margin: 10px; }\n.centerContent3 .articleWrapper #tim-marshall-1254041-unsplash3 {\n    background-image: url('tim-marshall-1254041-unsplash3.jpg');\n    background-position: center;\n    margin: 10px; }\n.centerContent3 .articleWrapper .articleList {\n    margin-left: 5%;\n    width: 55%;\n    align-self: center; }\n.centerContent3 .articleWrapper .articleList span {\n      font-size: 1.5em;\n      display: flex;\n      justify-content: center; }\n.centerContent3 .articleWrapper .articleList p {\n      display: block;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS1saXN0L0Q6XFwzeWVhclxcV2ViUHJcXGFuZ3VsYXItcHJvamVjdC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9hcnRpY2xlLWxpc3QvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcc2Nzc1xcbGF5b3V0XFxfZ3JpZC5zY3NzIiwic3JjL2FwcC9hcnRpY2xlLWxpc3QvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcc2Nzc1xcaGVscGVyc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9hcnRpY2xlLWxpc3QvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcc2Nzc1xcaGVscGVyc1xcX3Zhci5zY3NzIiwic3JjL2FwcC9hcnRpY2xlLWxpc3QvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcYXBwXFxhcnRpY2xlLWxpc3RcXGFydGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBO0VDZUksYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQsRUFBQTtBRGpCckQ7SUFHUSxnQkFBZ0IsRUFBQTtBQUh4QjtJQU1RLGlCQUFpQixFQUFBO0FDK0JyQjtFQXRCQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRCxFQUFBO0FBb0JqRDtJQUdRLGlCQUFpQixFQUFBO0FBMER6QjtFQW5GQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRDtFQW1GN0Msb0NBQW9DLEVBQUE7QUFGeEM7SUFJUSxnQkFBZ0IsRUFBQTtBQUp4QjtJQU9RLGdCQUFnQixFQUFBO0FBUHhCO0lBVVEsaUJBQWlCLEVBQUE7QUFWekI7SUFhUSxrQkFBa0IsRUFBQTtBQWIxQjtJQWdCUSxnQkFBZ0IsRUFBQTtBQWhCeEI7SUFtQlEsZ0JBQWdCLEVBQUE7QUFuQnhCO0lBc0JRLGlCQUFpQixFQUFBO0FBeEN6QjtFQWpFQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRDtFQWlFN0Msb0NBQW9DLEVBQUE7QUFGeEM7SUFJUSxnQkFBZ0IsRUFBQTtBQUp4QjtJQU9RLGdCQUFnQixFQUFBO0FBUHhCO0lBVVEsaUJBQWlCLEVBQUE7QUFWekI7SUFhUSxpQkFBaUIsRUFBQTtBQXhDekI7RUF0Q0EsYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQ7RUFzQzdDLG9DQUFvQyxFQUFBO0FBRnhDO0lBSVEsZ0JBQWdCLEVBQUE7QUFKeEI7SUFPUSxnQkFBZ0IsRUFBQTtBQVB4QjtJQVVRLGlCQUFpQixFQUFBO0FBVnpCO0lBYVEsZ0JBQWdCLEVBQUE7QUFieEI7SUFnQlEsaUJBQWlCLEVBQUE7QUFoQnpCO0lBbUJRLGtCQUFrQixFQUFBO0FBbkIxQjtJQXNCUSxpQkFBaUIsRUFBQTtBRDlEN0I7RUNFSSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRCxFQUFBO0FESnJEO0lBR1EsZ0JBQWdCLEVBQUE7QUFIeEI7SUFNUSxpQkFBaUIsRUFBQTtBQU56QjtJQVNRLGtCQUNKLEVBQUE7QURqQko7RUFDSSxVQUFTO0VBQ1QsU0FBUSxFQUFBO0FBRVo7RUFDSSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBO0FBRWhCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSx1QkdqQmtDO0VIa0JsQyxxREFBcUQsRUFBQTtBSWxCekQ7RUFFUSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QixFQUFBO0FBSi9CO0lBTVksVUFBVTtJQUNWLGFBQWEsRUFBQTtBQVB6QjtJRjRISSwyREFBNEU7SUFDNUUsMkJBQTJCO0lFakhmLFlBQVksRUFBQTtBQVo1QjtJRjRISSxpRUFBNEU7SUFDNUUsMkJBQTJCO0lFakhmLFlBQVksRUFBQTtBQVo1QjtJRjRISSxnRUFBNEU7SUFDNUUsMkJBQTJCO0lFakhmLFlBQVksRUFBQTtBQVo1QjtJRjRISSwwREFBNEU7SUFDNUUsMkJBQTJCO0lFakhmLFlBQVksRUFBQTtBQVo1QjtJRjRISSwyREFBNEU7SUFDNUUsMkJBQTJCO0lFakhmLFlBQVksRUFBQTtBQVo1QjtJRjRISSwyREFBNEU7SUFDNUUsMkJBQTJCO0lFakhmLFlBQVksRUFBQTtBQVo1QjtJRjRISSwyREFBNEU7SUFDNUUsMkJBQTJCO0lFakhmLFlBQVksRUFBQTtBQVo1QjtJQWdCWSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQixFQUFBO0FBbEI5QjtNQW9CZ0IsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYix1QkFBdUIsRUFBQTtBQXRCdkM7TUF5QmdCLGNBQWM7TUFDZCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwic2Nzcy9oZWxwZXJzL3ZhclwiO1xuQGltcG9ydCBcInNjc3MvaGVscGVycy9taXhpbnNcIjtcbkBpbXBvcnQgXCJzY3NzL2hlbHBlcnMvZXh0ZW5kc1wiO1xuQGltcG9ydCBcInNjc3MvbGF5b3V0L2dyaWRcIjtcblxuKntcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG59XG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG51bHsgXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cbiIsImhlYWRlcntcclxuICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRpb257XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDUvMTM7IFxyXG4gICAgfVxyXG59XHJcbkBpbmNsdWRlIGdyaWRDaG9vc2VUb3VyMTtcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMztcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMjtcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMTtcclxuZm9vdGVye1xyXG4gICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgIC5zb2NpYWxNZWRpYXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMi82O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3Rze1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiA3LzEwO1xyXG4gICAgfVxyXG4gICAgLmluZm9ybWF0aW9ue1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxMC8xMlxyXG4gICAgfVxyXG59IiwiQG1peGluIGZvb3RlckZvbnQoKXtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5AbWl4aW4gZm9vdGVySG92ZXIge1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvcjogJGJvcmRlci1jb2xvciwgJGFtb3VudDogNDApXHJcbiAgICB9XHJcbn1cclxuQG1peGluIG1hcmdpblBhZGRpbmcoJG1hcmdpbiwgJHBhZGRpbmcpIHtcclxuICAgIG1hcmdpbjogJG1hcmdpbjtcclxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG59XHJcbkBtaXhpbiBncmlkRGlzcGxheSgkY29sdW1ucywgJHBlcmNlbnQpIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkY29sdW1ucywgJHBlcmNlbnQpO1xyXG4gICAgZ3JpZC1nYXA6ICgxMDAlLSRjb2x1bW5zKiRwZXJjZW50KS8oJGNvbHVtbnMgLSAxKTtcclxufVxyXG5AbWl4aW4gZ3JpZENob29zZVRvdXIyIHtcclxuICAgIC5jZW50ZXJDb250ZW50MXtcclxuICAgICAgICAuZm9ybXtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICAgICAgLmNvdW50cnksIC5oZWFkZXJPZkZvcm17XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMy8xMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLnRvcEZvcm17XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMS83O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3R0b21uRm9ybXtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA3LzEzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQ2hvb3NlVG91cjEge1xyXG4gICAgLmNlbnRlckNvbnRlbnQxe1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgLmZvcm17XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0LzEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZENob29zZVRvdXIzIHtcclxuICAgIC5jZW50ZXJDb250ZW50MXtcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIC5mb3Jte1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZEFydGljbGVzMXtcclxuICAgIC5jZW50ZXJDb250ZW50MjF7XHJcbiAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA0MDBweCk7XHJcbiAgICAgICAgI2FydGljbGUxe1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS80O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTJ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0Lzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlM3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDkvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlNHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU1e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNi8xMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU2e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTAvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlN3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQXJ0aWNsZXMye1xyXG4gICAgLmNlbnRlckNvbnRlbnQyMntcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDQwMHB4KTtcclxuICAgICAgICAjYXJ0aWNsZTEsICNhcnRpY2xlNHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUyLCAjYXJ0aWNsZTV7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1Lzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlMywgI2FydGljbGU2e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogOS8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU3e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGdyaWRBcnRpY2xlczN7XHJcbiAgICAuY2VudGVyQ29udGVudDIze1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDAwcHgpO1xyXG4gICAgICAgICNhcnRpY2xlMXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUye1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNC83O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTN7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA3LzEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTR7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxMC8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU1e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTZ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1Lzg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlN3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDgvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBiYWNrZ3JvdW5kKCRmaWxlKSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zcmMvaW1nLyN7JGZpbGV9LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIkQ6LzN5ZWFyL1dlYlByL2FuZ3VsYXItcHJvamVjdC9zcmMvaW1nLyN7JGZpbGV9LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufSIsIiRib3JkZXItY29sb3I6ICM2RjlBQjE7XHJcbiRmb290ZXItY29sb3I6IGxpZ2h0ZW4oJGJvcmRlci1jb2xvciwgNDIpO1xyXG4kYmFzZS1jb2xvcjogbGlnaHRlbigkZm9vdGVyLWNvbG9yLCA1KTtcclxuJGhlYWRlci1jb2xvcjogJGZvb3Rlci1jb2xvcjtcclxuJGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiRpbWFnZUxpc3Q6IChcImFyb24tdmlzdWFscy0xMTg2MzY5LXVuc3BsYXNoMlwiLCBcIm1hcmlhbm8tY29sb21ib3R0by0xMzY2MzMyLXVuc3BsYXNoM1wiLFxyXG5cImJlbi1ibGVubmVyaGFzc2V0dC0zMDA3ODQtdW5zcGxhc2gyXCIsXCJzaW1vbi1taWdhai0xMTQwMTUzLXVuc3BsYXNoMlwiLCBcclxuXCJtaWNoYWwtamFuZWstMTEwNjU4NS11bnNwbGFzaDNcIiwgXCJhbmdlbC1vcmlnZ2ktMTE5ODcwNS11bnNwbGFzaDFcIiwgXCJ0aW0tbWFyc2hhbGwtMTI1NDA0MS11bnNwbGFzaDNcIik7IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4uY2VudGVyQ29udGVudDN7XHJcbiAgICAuYXJ0aWNsZVdyYXBwZXJ7XHJcbiAgICAgICAgbWFyZ2luOiA1JSAxMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAuYmFja2dyb3VuZEltYWdle1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAZWFjaCAkaXRlbSBpbiAkaW1hZ2VMaXN0e1xyXG4gICAgICAgICAgICAjI3skaXRlbX17XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kKCRpdGVtKTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJ0aWNsZUxpc3R7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTsgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/article-list/article-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-list/article-list.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-articles */ "./src/app/article-list/mock-articles.ts");



var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent() {
        this.articles = _mock_articles__WEBPACK_IMPORTED_MODULE_2__["Articles"];
    }
    ArticleListComponent.prototype.ngOnInit = function () {
    };
    ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-list',
            template: __webpack_require__(/*! ./article-list.component.html */ "./src/app/article-list/article-list.component.html"),
            styles: [__webpack_require__(/*! ./article-list.component.scss */ "./src/app/article-list/article-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleListComponent);
    return ArticleListComponent;
}());



/***/ }),

/***/ "./src/app/article-list/mock-articles.ts":
/*!***********************************************!*\
  !*** ./src/app/article-list/mock-articles.ts ***!
  \***********************************************/
/*! exports provided: Articles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Articles", function() { return Articles; });
var Articles = [{ title: "Lorem ipsum dolor", image: "aron-visuals-1186369-unsplash2", text: "sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula." },
    { title: "Lorem ipsum dolor", image: "mariano-colombotto-1366332-unsplash3", text: "sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula." },
    { title: "Lorem ipsum dolor", image: "ben-blennerhassett-300784-unsplash2", text: "sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula." },
    { title: "Lorem ipsum dolor", image: "simon-migaj-1140153-unsplash2", text: "sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula." },
    { title: "Lorem ipsum dolor", image: "michal-janek-1106585-unsplash3", text: "sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula." },
    { title: "Lorem ipsum dolor", image: "angel-origgi-1198705-unsplash1", text: "sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula." },
    { title: "Lorem ipsum dolor", image: "tim-marshall-1254041-unsplash3", text: "sit amet, consectetur adipiscing elit. Ut condimentum lacinia ipsum, ac blandit justo sodales sed. Duis molestie fringilla blandit. Pellentesque mattis, odio in rhoncus rutrum, dui lectus tincidunt risus, et congue quam justo quis ligula. Sed porttitor sodales suscipit. Proin dictum vel risus sit amet iaculis. Nunc id venenatis mauris. Aenean accumsan hendrerit imperdiet. Nullam ac orci gravida, mollis ex sit amet, volutpat libero. Integer ac accumsan ante." },
];


/***/ }),

/***/ "./src/app/disabled.directive.ts":
/*!***************************************!*\
  !*** ./src/app/disabled.directive.ts ***!
  \***************************************/
/*! exports provided: DisabledDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledDirective", function() { return DisabledDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisabledDirective = /** @class */ (function () {
    function DisabledDirective(elementRef) {
        this.elementRef = elementRef;
        this.elementRef.nativeElement.style.fontWeight = "bold";
    }
    DisabledDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[Disabled]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DisabledDirective);
    return DisabledDirective;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <footer>\n    <div class=\"socialMedia\">\n      <p class=\"joinUs\">Join us</p>\n      <div class=\"socialIcons\">\n        <a id=\"facebook\" routerLink=\"\"><img src=\"https://img.icons8.com/material-rounded/54/000000/facebook-f.png\"></a>\n        <a id=\"instagram\" routerLink=\"\"><img src=\"https://img.icons8.com/metro/52/000000/instagram-new.png\"></a>\n        <a id=\"linkedin\" routerLink=\"\"><img src=\"https://img.icons8.com/metro/52/000000/linkedin.png\"></a>\n        <a id=\"twitter\" routerLink=\"\"><img src=\"https://img.icons8.com/metro/52/000000/twitter.png\"></a>\n      </div>\n    </div>\n    <div class=\"contacts\">\n      <p class=\"contactUs\">Contact us</p>\n      <p class=\"contactUs\">ourmail@gmail.com</p>\n      <p class=\"contactUs\">(123)-45-67-89-00</p>\n    </div>\n    <div class=\"information\">\n      <p><a routerLink=\"\">About us</a></p>\n      <p><a routerLink=\"\">FAQ</a></p>\n      <p><a routerLink=\"\">Terms & Conditions</a></p>\n      <p><a routerLink=\"\">Privacy policy</a></p>\n    </div>\n  </footer> "

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nfooter .socialMedia .socialIcons {\n  display: flex;\n  justify-content: space-around; }\nheader {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nheader .logo {\n    grid-column: 1/3; }\nheader .navigation {\n    grid-column: 5/13; }\n.centerContent1 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\n.centerContent1 .form {\n    grid-column: 4/10; }\n.centerContent23 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(2, 400px); }\n.centerContent23 #article1 {\n    grid-column: 1/4; }\n.centerContent23 #article2 {\n    grid-column: 4/7; }\n.centerContent23 #article3 {\n    grid-column: 7/10; }\n.centerContent23 #article4 {\n    grid-column: 10/13; }\n.centerContent23 #article5 {\n    grid-column: 1/5; }\n.centerContent23 #article6 {\n    grid-column: 5/8; }\n.centerContent23 #article7 {\n    grid-column: 8/13; }\n.centerContent22 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent22 #article1, .centerContent22 #article4 {\n    grid-column: 1/5; }\n.centerContent22 #article2, .centerContent22 #article5 {\n    grid-column: 5/9; }\n.centerContent22 #article3, .centerContent22 #article6 {\n    grid-column: 9/13; }\n.centerContent22 #article7 {\n    grid-column: 1/13; }\n.centerContent21 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent21 #article1 {\n    grid-column: 1/4; }\n.centerContent21 #article2 {\n    grid-column: 4/9; }\n.centerContent21 #article3 {\n    grid-column: 9/13; }\n.centerContent21 #article4 {\n    grid-column: 1/6; }\n.centerContent21 #article5 {\n    grid-column: 6/10; }\n.centerContent21 #article6 {\n    grid-column: 10/13; }\n.centerContent21 #article7 {\n    grid-column: 1/13; }\nfooter {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nfooter .socialMedia {\n    grid-column: 2/6; }\nfooter .contacts {\n    grid-column: 7/10; }\nfooter .information {\n    grid-column: 10/12; }\n* {\n  padding: 0;\n  margin: 0; }\na {\n  text-decoration: none;\n  color: black; }\nul {\n  list-style: none; }\nbody {\n  background-color: white;\n  font-family: Georgia, 'Times New Roman', Times, serif; }\nfooter {\n  align-items: center;\n  background-color: #fafbfc;\n  padding: 18px 12px 25px 12px; }\nfooter .socialMedia {\n    display: inline-block; }\nfooter .socialMedia .joinUs {\n      margin: 10px;\n      color: #6F9AB1;\n      font-size: 1.2em;\n      text-align: center;\n      font-size: 1.5em; }\nfooter .socialMedia .socialIcons a {\n      margin: 2px;\n      opacity: 0.3; }\nfooter .socialMedia .socialIcons a:hover {\n        opacity: 0.6; }\nfooter .contacts .contactUs {\n    margin: 10px;\n    color: #6F9AB1;\n    font-size: 1.2em; }\nfooter .information p {\n    margin: 10px;\n    color: #6F9AB1;\n    font-size: 1.2em; }\nfooter .information p a {\n      color: #6F9AB1; }\nfooter .information p a:hover {\n        color: #1e2e36; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFwzeWVhclxcV2ViUHJcXGFuZ3VsYXItcHJvamVjdC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9mb290ZXIvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL0Q6XFwzeWVhclxcV2ViUHJcXGFuZ3VsYXItcHJvamVjdC9zcmNcXHNjc3NcXGhlbHBlcnNcXF9leHRlbmRzLnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxsYXlvdXRcXF9ncmlkLnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxoZWxwZXJzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxoZWxwZXJzXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNDQTtFQ0FRLGFBQWE7RUFDYiw2QkFBNkIsRUFBQTtBQ0ZyQztFQ2VJLGFBQWE7RUFDYixxQ0FBaUQ7RUFDakQscUJBQWlELEVBQUE7QURqQnJEO0lBR1EsZ0JBQWdCLEVBQUE7QUFIeEI7SUFNUSxpQkFBaUIsRUFBQTtBQytCckI7RUF0QkEsYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQsRUFBQTtBQW9CakQ7SUFHUSxpQkFBaUIsRUFBQTtBQTBEekI7RUFuRkEsYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQ7RUFtRjdDLG9DQUFvQyxFQUFBO0FBRnhDO0lBSVEsZ0JBQWdCLEVBQUE7QUFKeEI7SUFPUSxnQkFBZ0IsRUFBQTtBQVB4QjtJQVVRLGlCQUFpQixFQUFBO0FBVnpCO0lBYVEsa0JBQWtCLEVBQUE7QUFiMUI7SUFnQlEsZ0JBQWdCLEVBQUE7QUFoQnhCO0lBbUJRLGdCQUFnQixFQUFBO0FBbkJ4QjtJQXNCUSxpQkFBaUIsRUFBQTtBQXhDekI7RUFqRUEsYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQ7RUFpRTdDLG9DQUFvQyxFQUFBO0FBRnhDO0lBSVEsZ0JBQWdCLEVBQUE7QUFKeEI7SUFPUSxnQkFBZ0IsRUFBQTtBQVB4QjtJQVVRLGlCQUFpQixFQUFBO0FBVnpCO0lBYVEsaUJBQWlCLEVBQUE7QUF4Q3pCO0VBdENBLGFBQWE7RUFDYixxQ0FBaUQ7RUFDakQscUJBQWlEO0VBc0M3QyxvQ0FBb0MsRUFBQTtBQUZ4QztJQUlRLGdCQUFnQixFQUFBO0FBSnhCO0lBT1EsZ0JBQWdCLEVBQUE7QUFQeEI7SUFVUSxpQkFBaUIsRUFBQTtBQVZ6QjtJQWFRLGdCQUFnQixFQUFBO0FBYnhCO0lBZ0JRLGlCQUFpQixFQUFBO0FBaEJ6QjtJQW1CUSxrQkFBa0IsRUFBQTtBQW5CMUI7SUFzQlEsaUJBQWlCLEVBQUE7QUQ5RDdCO0VDRUksYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQsRUFBQTtBREpyRDtJQUdRLGdCQUFnQixFQUFBO0FBSHhCO0lBTVEsaUJBQWlCLEVBQUE7QUFOekI7SUFTUSxrQkFDSixFQUFBO0FIakJKO0VBQ0ksVUFBUztFQUNULFNBQVEsRUFBQTtBQUVaO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTtBQUVoQjtFQUNJLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksdUJLakJrQztFTGtCbEMscURBQXFELEVBQUE7QUdQekQ7RUZYSSxtQkFBbUI7RUFDbkIseUJJRnFDO0VKR3JDLDRCQUE0QixFQUFBO0FFU2hDO0lGUFEscUJBQXFCLEVBQUE7QUFMN0I7TUdBSSxZQUFZO01BQ1osY0NGa0I7TURHbEIsZ0JBQWdCO01ITVIsa0JBQWtCO01BQ2xCLGdCQUFnQixFQUFBO0FBVDVCO01BY2dCLFdBQVc7TUFDWCxZQUFZLEVBQUE7QUFmNUI7UUFpQm9CLFlBQVksRUFBQTtBQWpCaEM7SUdBSSxZQUFZO0lBQ1osY0NGa0I7SURHbEIsZ0JBQWdCLEVBQUE7QUhGcEI7SUdBSSxZQUFZO0lBQ1osY0NGa0I7SURHbEIsZ0JBQWdCLEVBQUE7QUhGcEI7TUFnQ2dCLGNJakNNLEVBQUE7QUpDdEI7UUdNUSxjQUFpRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgXCJzY3NzL2hlbHBlcnMvdmFyXCI7XG5AaW1wb3J0IFwic2Nzcy9oZWxwZXJzL21peGluc1wiO1xuQGltcG9ydCBcInNjc3MvaGVscGVycy9leHRlbmRzXCI7XG5AaW1wb3J0IFwic2Nzcy9sYXlvdXQvZ3JpZFwiO1xuXG4qe1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbn1cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbnVseyBcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbmZvb3RlcntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9vdGVyLWNvbG9yO1xyXG4gICAgcGFkZGluZzogMThweCAxMnB4IDI1cHggMTJweDtcclxuICAgIC5zb2NpYWxNZWRpYXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgLmpvaW5Vc3tcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9vdGVyRm9udCgpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb2NpYWxJY29uc3tcclxuICAgICAgICAgICAgQGV4dGVuZCAlZmxleENsYXNzOyBcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFjdHN7XHJcbiAgICAgICAgLmNvbnRhY3RVc3tcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9vdGVyRm9udCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmZvcm1hdGlvbntcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb290ZXJGb250KCk7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmb290ZXJIb3ZlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJWZsZXhDbGFzc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbiVjZW50ZXJlZENsYXNze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ldGl0bGV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkYm9yZGVyLWNvbG9yLCAyMCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDcuNWVtO1xyXG4gICAgICAgICAgICB9XHJcbn0iLCJoZWFkZXJ7XHJcbiAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgIH1cclxuICAgIC5uYXZpZ2F0aW9ue1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiA1LzEzOyBcclxuICAgIH1cclxufVxyXG5AaW5jbHVkZSBncmlkQ2hvb3NlVG91cjE7XHJcbkBpbmNsdWRlIGdyaWRBcnRpY2xlczM7XHJcbkBpbmNsdWRlIGdyaWRBcnRpY2xlczI7XHJcbkBpbmNsdWRlIGdyaWRBcnRpY2xlczE7XHJcbmZvb3RlcntcclxuICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAuc29jaWFsTWVkaWF7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvNjtcclxuICAgIH1cclxuICAgIC5jb250YWN0c3tcclxuICAgICAgICBncmlkLWNvbHVtbjogNy8xMDtcclxuICAgIH1cclxuICAgIC5pbmZvcm1hdGlvbntcclxuICAgICAgICBncmlkLWNvbHVtbjogMTAvMTJcclxuICAgIH1cclxufSIsIkBtaXhpbiBmb290ZXJGb250KCl7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBjb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuQG1peGluIGZvb3RlckhvdmVyIHtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IGRhcmtlbigkY29sb3I6ICRib3JkZXItY29sb3IsICRhbW91bnQ6IDQwKVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBtYXJnaW5QYWRkaW5nKCRtYXJnaW4sICRwYWRkaW5nKSB7XHJcbiAgICBtYXJnaW46ICRtYXJnaW47XHJcbiAgICBwYWRkaW5nOiAkcGFkZGluZztcclxufVxyXG5AbWl4aW4gZ3JpZERpc3BsYXkoJGNvbHVtbnMsICRwZXJjZW50KSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJGNvbHVtbnMsICRwZXJjZW50KTtcclxuICAgIGdyaWQtZ2FwOiAoMTAwJS0kY29sdW1ucyokcGVyY2VudCkvKCRjb2x1bW5zIC0gMSk7XHJcbn1cclxuQG1peGluIGdyaWRDaG9vc2VUb3VyMiB7XHJcbiAgICAuY2VudGVyQ29udGVudDF7XHJcbiAgICAgICAgLmZvcm17XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgICAgIC5jb3VudHJ5LCAuaGVhZGVyT2ZGb3Jte1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDMvMTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC50b3BGb3Jte1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm90dG9tbkZvcm17XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogNy8xMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZENob29zZVRvdXIxIHtcclxuICAgIC5jZW50ZXJDb250ZW50MXtcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIC5mb3Jte1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNC8xMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGdyaWRDaG9vc2VUb3VyMyB7XHJcbiAgICAuY2VudGVyQ29udGVudDF7XHJcbiAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICAuZm9ybXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGdyaWRBcnRpY2xlczF7XHJcbiAgICAuY2VudGVyQ29udGVudDIxe1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNDAwcHgpO1xyXG4gICAgICAgICNhcnRpY2xlMXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUye1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNC85O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTN7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA5LzEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTR7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlNXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDYvMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlNntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEwLzEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTd7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzEzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZEFydGljbGVzMntcclxuICAgIC5jZW50ZXJDb250ZW50MjJ7XHJcbiAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA0MDBweCk7XHJcbiAgICAgICAgI2FydGljbGUxLCAjYXJ0aWNsZTR7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlMiwgI2FydGljbGU1e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNS85O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTMsICNhcnRpY2xlNntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDkvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlN3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQXJ0aWNsZXMze1xyXG4gICAgLmNlbnRlckNvbnRlbnQyM3tcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDQwMHB4KTtcclxuICAgICAgICAjYXJ0aWNsZTF7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlMntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQvNztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUze1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNy8xMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU0e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTAvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlNXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU2e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNS84O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTd7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA4LzEzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gYmFja2dyb3VuZCgkZmlsZSkge1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vc3JjL2ltZy8jeyRmaWxlfS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJEOi8zeWVhci9XZWJQci9hbmd1bGFyLXByb2plY3Qvc3JjL2ltZy8jeyRmaWxlfS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn0iLCIkYm9yZGVyLWNvbG9yOiAjNkY5QUIxO1xyXG4kZm9vdGVyLWNvbG9yOiBsaWdodGVuKCRib3JkZXItY29sb3IsIDQyKTtcclxuJGJhc2UtY29sb3I6IGxpZ2h0ZW4oJGZvb3Rlci1jb2xvciwgNSk7XHJcbiRoZWFkZXItY29sb3I6ICRmb290ZXItY29sb3I7XHJcbiRib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4kaW1hZ2VMaXN0OiAoXCJhcm9uLXZpc3VhbHMtMTE4NjM2OS11bnNwbGFzaDJcIiwgXCJtYXJpYW5vLWNvbG9tYm90dG8tMTM2NjMzMi11bnNwbGFzaDNcIixcclxuXCJiZW4tYmxlbm5lcmhhc3NldHQtMzAwNzg0LXVuc3BsYXNoMlwiLFwic2ltb24tbWlnYWotMTE0MDE1My11bnNwbGFzaDJcIiwgXHJcblwibWljaGFsLWphbmVrLTExMDY1ODUtdW5zcGxhc2gzXCIsIFwiYW5nZWwtb3JpZ2dpLTExOTg3MDUtdW5zcGxhc2gxXCIsIFwidGltLW1hcnNoYWxsLTEyNTQwNDEtdW5zcGxhc2gzXCIpOyJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centerContent1\">\n  <div class=\"form\">\n    <p class=\"headerOfForm\">Select necessary information to choose a tour for you</p>\n    <div class=\"country\">\n      <select name=\"Country\">\n        <option value=\"Asia\" selected>Asia</option>\n        <option value=\"Europe\">Europe</option>\n        <option value=\"Africa\">Africa</option>\n        <option value=\"America\">America</option>\n      </select>\n    </div>\n    <form class=\"topForm\">\n      <p>Dates</p>\n      <span>From:</span> <input type=\"date\" name=\"bday\">\n      to: <input type=\"date\" name=\"bday\">\n      <p>Type of tour</p>\n        <input type=\"radio\" name=\"type\" value=\"Group\" checked><span> Group</span><br>\n        <input type=\"radio\" name=\"type\" value=\"Personal\"><span> Personal</span><br>\n        <input type=\"radio\" name=\"type\" value=\"Family\"><span> Family</span><br>\n        <p>What would you prefere</p>\n        <input type=\"checkbox\" name=\"realm\" value=\"Sightseeing\" checked><span> Sightseeing</span><br>\n        <input type=\"checkbox\" name=\"realm\" value=\"Shopping\"><span> Shopping</span><br>\n        <input type=\"checkbox\" name=\"realm\" value=\"Food\"><span> Food</span><br>\n        <input type=\"checkbox\" name=\"realm\" value=\"Outdoor\"><span> Outdoor</span><br>\n    </form>\n    <form class=\"bottomnForm\">\n        <p>Duration </p><span>from </span><input type=\"number\"><span> to </span><input type=\"number\"><br>\n        <p>Price </p><span>from </span><input type=\"number\"><span> to </span><input type=\"number\"><br>\n        <p>Rating</p><span>from </span><input type=\"number\"><span> to </span><input type=\"number\"><br>\n        <div  class=\"bottom\">\n            <!--input type=\"submit\" value=\"Search\"-->\n            <a href=\"\"><p>Search</p></a>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.scss":
/*!******************************************!*\
  !*** ./src/app/form/form.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nheader .logo {\n    grid-column: 1/3; }\nheader .navigation {\n    grid-column: 5/13; }\n.centerContent1 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\n.centerContent1 .form {\n    grid-column: 4/10; }\n.centerContent23 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(2, 400px); }\n.centerContent23 #article1 {\n    grid-column: 1/4; }\n.centerContent23 #article2 {\n    grid-column: 4/7; }\n.centerContent23 #article3 {\n    grid-column: 7/10; }\n.centerContent23 #article4 {\n    grid-column: 10/13; }\n.centerContent23 #article5 {\n    grid-column: 1/5; }\n.centerContent23 #article6 {\n    grid-column: 5/8; }\n.centerContent23 #article7 {\n    grid-column: 8/13; }\n.centerContent22 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent22 #article1, .centerContent22 #article4 {\n    grid-column: 1/5; }\n.centerContent22 #article2, .centerContent22 #article5 {\n    grid-column: 5/9; }\n.centerContent22 #article3, .centerContent22 #article6 {\n    grid-column: 9/13; }\n.centerContent22 #article7 {\n    grid-column: 1/13; }\n.centerContent21 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent21 #article1 {\n    grid-column: 1/4; }\n.centerContent21 #article2 {\n    grid-column: 4/9; }\n.centerContent21 #article3 {\n    grid-column: 9/13; }\n.centerContent21 #article4 {\n    grid-column: 1/6; }\n.centerContent21 #article5 {\n    grid-column: 6/10; }\n.centerContent21 #article6 {\n    grid-column: 10/13; }\n.centerContent21 #article7 {\n    grid-column: 1/13; }\nfooter {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nfooter .socialMedia {\n    grid-column: 2/6; }\nfooter .contacts {\n    grid-column: 7/10; }\nfooter .information {\n    grid-column: 10/12; }\n* {\n  padding: 0;\n  margin: 0; }\na {\n  text-decoration: none;\n  color: black; }\nul {\n  list-style: none; }\nbody {\n  background-color: white;\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n.centerContent1 {\n  background-image: url('simon-migaj-1140153-unsplash1.jpg');\n  background-position: center;\n  display: flex;\n  justify-content: space-around; }\n.centerContent1 .form {\n    background-color: white;\n    opacity: 0.9;\n    margin: 20px;\n    padding: 20px; }\n.centerContent1 .form p {\n      border-bottom: 2px solid #6F9AB1;\n      padding-bottom: 5px;\n      font-size: 1.5em;\n      text-align: center; }\n.centerContent1 .form .headerOfForm {\n      font-style: italic; }\n.centerContent1 .form .country, .centerContent1 .form form {\n      margin: 10px; }\n.centerContent1 .form .country p, .centerContent1 .form form p {\n        color: black; }\n.centerContent1 .form .country, .centerContent1 .form .bottom {\n      display: flex;\n      justify-content: center; }\n.centerContent1 .form .bottom p {\n      padding: 10px 25px;\n      font-size: 1.2em;\n      background-color: #80a6ba; }\n.centerContent1 .form .bottom p:hover {\n        background-color: #b1c8d5; }\n.centerContent1 .form input, .centerContent1 .form select {\n      margin: 20px;\n      padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvZm9ybS9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxsYXlvdXRcXF9ncmlkLnNjc3MiLCJzcmMvYXBwL2Zvcm0vRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcc2Nzc1xcaGVscGVyc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9mb3JtL0Q6XFwzeWVhclxcV2ViUHJcXGFuZ3VsYXItcHJvamVjdC9zcmNcXHNjc3NcXGhlbHBlcnNcXF92YXIuc2NzcyIsInNyYy9hcHAvZm9ybS9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxhcHBcXGZvcm1cXGZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtFQ2VJLGFBQWE7RUFDYixxQ0FBaUQ7RUFDakQscUJBQWlELEVBQUE7QURqQnJEO0lBR1EsZ0JBQWdCLEVBQUE7QUFIeEI7SUFNUSxpQkFBaUIsRUFBQTtBQytCckI7RUF0QkEsYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQsRUFBQTtBQW9CakQ7SUFHUSxpQkFBaUIsRUFBQTtBQTBEekI7RUFuRkEsYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQ7RUFtRjdDLG9DQUFvQyxFQUFBO0FBRnhDO0lBSVEsZ0JBQWdCLEVBQUE7QUFKeEI7SUFPUSxnQkFBZ0IsRUFBQTtBQVB4QjtJQVVRLGlCQUFpQixFQUFBO0FBVnpCO0lBYVEsa0JBQWtCLEVBQUE7QUFiMUI7SUFnQlEsZ0JBQWdCLEVBQUE7QUFoQnhCO0lBbUJRLGdCQUFnQixFQUFBO0FBbkJ4QjtJQXNCUSxpQkFBaUIsRUFBQTtBQXhDekI7RUFqRUEsYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQ7RUFpRTdDLG9DQUFvQyxFQUFBO0FBRnhDO0lBSVEsZ0JBQWdCLEVBQUE7QUFKeEI7SUFPUSxnQkFBZ0IsRUFBQTtBQVB4QjtJQVVRLGlCQUFpQixFQUFBO0FBVnpCO0lBYVEsaUJBQWlCLEVBQUE7QUF4Q3pCO0VBdENBLGFBQWE7RUFDYixxQ0FBaUQ7RUFDakQscUJBQWlEO0VBc0M3QyxvQ0FBb0MsRUFBQTtBQUZ4QztJQUlRLGdCQUFnQixFQUFBO0FBSnhCO0lBT1EsZ0JBQWdCLEVBQUE7QUFQeEI7SUFVUSxpQkFBaUIsRUFBQTtBQVZ6QjtJQWFRLGdCQUFnQixFQUFBO0FBYnhCO0lBZ0JRLGlCQUFpQixFQUFBO0FBaEJ6QjtJQW1CUSxrQkFBa0IsRUFBQTtBQW5CMUI7SUFzQlEsaUJBQWlCLEVBQUE7QUQ5RDdCO0VDRUksYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQsRUFBQTtBREpyRDtJQUdRLGdCQUFnQixFQUFBO0FBSHhCO0lBTVEsaUJBQWlCLEVBQUE7QUFOekI7SUFTUSxrQkFDSixFQUFBO0FEakJKO0VBQ0ksVUFBUztFQUNULFNBQVEsRUFBQTtBQUVaO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTtBQUVoQjtFQUNJLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksdUJHakJrQztFSGtCbEMscURBQXFELEVBQUE7QUluQnpEO0VGNkhJLDBEQUE0RTtFQUM1RSwyQkFBMkI7RUU1SDNCLGFBQWE7RUFDYiw2QkFBNkIsRUFBQTtBQUhqQztJQUtRLHVCREo4QjtJQ0s5QixZQUFZO0lGSWhCLFlFSCtCO0lGSS9CLGFFSnFDLEVBQUE7QUFQekM7TUFVVyxnQ0RYVztNQ1lYLG1CQUFtQjtNQUNsQixnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUE7QUFiOUI7TUFnQlksa0JBQWtCLEVBQUE7QUFoQjlCO01Bc0JZLFlBQVksRUFBQTtBQXRCeEI7UUFvQmdCLFlBQVksRUFBQTtBQXBCNUI7TUF5QlksYUFBYTtNQUNiLHVCQUF1QixFQUFBO0FBMUJuQztNQThCZ0Isa0JBQW1CO01BQ25CLGdCQUFnQjtNQUNoQix5QkFBMkMsRUFBQTtBQWhDM0Q7UUFrQ29CLHlCQUE0QyxFQUFBO0FBbENoRTtNRlVJLFlFNkJtQztNRjVCbkMsYUU0QnlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwic2Nzcy9oZWxwZXJzL3ZhclwiO1xuQGltcG9ydCBcInNjc3MvaGVscGVycy9taXhpbnNcIjtcbkBpbXBvcnQgXCJzY3NzL2hlbHBlcnMvZXh0ZW5kc1wiO1xuQGltcG9ydCBcInNjc3MvbGF5b3V0L2dyaWRcIjtcblxuKntcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG59XG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG51bHsgXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cbiIsImhlYWRlcntcclxuICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRpb257XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDUvMTM7IFxyXG4gICAgfVxyXG59XHJcbkBpbmNsdWRlIGdyaWRDaG9vc2VUb3VyMTtcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMztcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMjtcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMTtcclxuZm9vdGVye1xyXG4gICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgIC5zb2NpYWxNZWRpYXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMi82O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3Rze1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiA3LzEwO1xyXG4gICAgfVxyXG4gICAgLmluZm9ybWF0aW9ue1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxMC8xMlxyXG4gICAgfVxyXG59IiwiQG1peGluIGZvb3RlckZvbnQoKXtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5AbWl4aW4gZm9vdGVySG92ZXIge1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvcjogJGJvcmRlci1jb2xvciwgJGFtb3VudDogNDApXHJcbiAgICB9XHJcbn1cclxuQG1peGluIG1hcmdpblBhZGRpbmcoJG1hcmdpbiwgJHBhZGRpbmcpIHtcclxuICAgIG1hcmdpbjogJG1hcmdpbjtcclxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG59XHJcbkBtaXhpbiBncmlkRGlzcGxheSgkY29sdW1ucywgJHBlcmNlbnQpIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkY29sdW1ucywgJHBlcmNlbnQpO1xyXG4gICAgZ3JpZC1nYXA6ICgxMDAlLSRjb2x1bW5zKiRwZXJjZW50KS8oJGNvbHVtbnMgLSAxKTtcclxufVxyXG5AbWl4aW4gZ3JpZENob29zZVRvdXIyIHtcclxuICAgIC5jZW50ZXJDb250ZW50MXtcclxuICAgICAgICAuZm9ybXtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICAgICAgLmNvdW50cnksIC5oZWFkZXJPZkZvcm17XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMy8xMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLnRvcEZvcm17XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMS83O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3R0b21uRm9ybXtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA3LzEzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQ2hvb3NlVG91cjEge1xyXG4gICAgLmNlbnRlckNvbnRlbnQxe1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgLmZvcm17XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0LzEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZENob29zZVRvdXIzIHtcclxuICAgIC5jZW50ZXJDb250ZW50MXtcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIC5mb3Jte1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZEFydGljbGVzMXtcclxuICAgIC5jZW50ZXJDb250ZW50MjF7XHJcbiAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA0MDBweCk7XHJcbiAgICAgICAgI2FydGljbGUxe1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS80O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTJ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0Lzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlM3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDkvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlNHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU1e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNi8xMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU2e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTAvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlN3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQXJ0aWNsZXMye1xyXG4gICAgLmNlbnRlckNvbnRlbnQyMntcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDQwMHB4KTtcclxuICAgICAgICAjYXJ0aWNsZTEsICNhcnRpY2xlNHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUyLCAjYXJ0aWNsZTV7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1Lzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlMywgI2FydGljbGU2e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogOS8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU3e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGdyaWRBcnRpY2xlczN7XHJcbiAgICAuY2VudGVyQ29udGVudDIze1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDAwcHgpO1xyXG4gICAgICAgICNhcnRpY2xlMXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUye1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNC83O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTN7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA3LzEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTR7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxMC8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU1e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTZ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1Lzg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlN3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDgvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBiYWNrZ3JvdW5kKCRmaWxlKSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zcmMvaW1nLyN7JGZpbGV9LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIkQ6LzN5ZWFyL1dlYlByL2FuZ3VsYXItcHJvamVjdC9zcmMvaW1nLyN7JGZpbGV9LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufSIsIiRib3JkZXItY29sb3I6ICM2RjlBQjE7XHJcbiRmb290ZXItY29sb3I6IGxpZ2h0ZW4oJGJvcmRlci1jb2xvciwgNDIpO1xyXG4kYmFzZS1jb2xvcjogbGlnaHRlbigkZm9vdGVyLWNvbG9yLCA1KTtcclxuJGhlYWRlci1jb2xvcjogJGZvb3Rlci1jb2xvcjtcclxuJGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiRpbWFnZUxpc3Q6IChcImFyb24tdmlzdWFscy0xMTg2MzY5LXVuc3BsYXNoMlwiLCBcIm1hcmlhbm8tY29sb21ib3R0by0xMzY2MzMyLXVuc3BsYXNoM1wiLFxyXG5cImJlbi1ibGVubmVyaGFzc2V0dC0zMDA3ODQtdW5zcGxhc2gyXCIsXCJzaW1vbi1taWdhai0xMTQwMTUzLXVuc3BsYXNoMlwiLCBcclxuXCJtaWNoYWwtamFuZWstMTEwNjU4NS11bnNwbGFzaDNcIiwgXCJhbmdlbC1vcmlnZ2ktMTE5ODcwNS11bnNwbGFzaDFcIiwgXCJ0aW0tbWFyc2hhbGwtMTI1NDA0MS11bnNwbGFzaDNcIik7IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbi5jZW50ZXJDb250ZW50MXtcclxuICAgIEBpbmNsdWRlIGJhY2tncm91bmQoXCJzaW1vbi1taWdhai0xMTQwMTUzLXVuc3BsYXNoMVwiKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIC5mb3Jte1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICBAaW5jbHVkZSBtYXJnaW5QYWRkaW5nKDIwcHgsIDIwcHgpO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgLy8gY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcjtcclxuICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtOyAgXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlck9mRm9ybXtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY291bnRyeSwgZm9ybXtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb3VudHJ5LCAuYm90dG9te1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvdHRvbXtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweCA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYm9yZGVyLWNvbG9yLCA1KTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYm9yZGVyLWNvbG9yLCAyMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQsIHNlbGVjdHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWFyZ2luUGFkZGluZygyMHB4LCAxMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <header>\n      <div class=\"logo\"><a routerLink=\"\">tournée<!--img src=\"img/logo.png\"--></a></div>\n      <div class=\"navigation\">\n        <nav>\n          <ul class=\"menu\" style=\"list-style-type:none\">\n            <li class=\"point\" id=\"point1\" ><a routerLink=\"\">Home</a></li>\n            <li class=\"point\" id=\"point2\" ><a routerLink=\"/chooseTour\">Choose tour</a></li>\n            <li class=\"point\" id=\"point3\" ><a routerLink=\"/articles\">Articles</a></li>\n            <li class=\"point\" id=\"point4\" ><a routerLink=\"\">About us</a></li>\n          </ul>\n        </nav>\n      </div>\n    </header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nnav .menu {\n  display: flex;\n  justify-content: space-around; }\nheader {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nheader .logo {\n    grid-column: 1/3; }\nheader .navigation {\n    grid-column: 5/13; }\n.centerContent1 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\n.centerContent1 .form {\n    grid-column: 4/10; }\n.centerContent23 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(2, 400px); }\n.centerContent23 #article1 {\n    grid-column: 1/4; }\n.centerContent23 #article2 {\n    grid-column: 4/7; }\n.centerContent23 #article3 {\n    grid-column: 7/10; }\n.centerContent23 #article4 {\n    grid-column: 10/13; }\n.centerContent23 #article5 {\n    grid-column: 1/5; }\n.centerContent23 #article6 {\n    grid-column: 5/8; }\n.centerContent23 #article7 {\n    grid-column: 8/13; }\n.centerContent22 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent22 #article1, .centerContent22 #article4 {\n    grid-column: 1/5; }\n.centerContent22 #article2, .centerContent22 #article5 {\n    grid-column: 5/9; }\n.centerContent22 #article3, .centerContent22 #article6 {\n    grid-column: 9/13; }\n.centerContent22 #article7 {\n    grid-column: 1/13; }\n.centerContent21 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent21 #article1 {\n    grid-column: 1/4; }\n.centerContent21 #article2 {\n    grid-column: 4/9; }\n.centerContent21 #article3 {\n    grid-column: 9/13; }\n.centerContent21 #article4 {\n    grid-column: 1/6; }\n.centerContent21 #article5 {\n    grid-column: 6/10; }\n.centerContent21 #article6 {\n    grid-column: 10/13; }\n.centerContent21 #article7 {\n    grid-column: 1/13; }\nfooter {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nfooter .socialMedia {\n    grid-column: 2/6; }\nfooter .contacts {\n    grid-column: 7/10; }\nfooter .information {\n    grid-column: 10/12; }\n* {\n  padding: 0;\n  margin: 0; }\na {\n  text-decoration: none;\n  color: black; }\nul {\n  list-style: none; }\nbody {\n  background-color: white;\n  font-family: Georgia, 'Times New Roman', Times, serif; }\nheader {\n  padding: 10px;\n  background-color: #fafbfc; }\nheader .point {\n    display: inline-block; }\n.logo {\n  margin: 10px;\n  padding: 10px; }\n.logo a {\n    border: 2px solid #6F9AB1;\n    padding: 10px;\n    font-size: 1.9em; }\nnav {\n  height: 100%; }\nnav .menu {\n    height: 100%;\n    align-items: center; }\nnav .menu .point {\n      padding: 10px;\n      font-size: 1.1em; }\nnav .menu .point:hover {\n        border-bottom: 2px solid #6F9AB1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFwzeWVhclxcV2ViUHJcXGFuZ3VsYXItcHJvamVjdC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9oZWFkZXIvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL0Q6XFwzeWVhclxcV2ViUHJcXGFuZ3VsYXItcHJvamVjdC9zcmNcXHNjc3NcXGhlbHBlcnNcXF9leHRlbmRzLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxsYXlvdXRcXF9ncmlkLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxoZWxwZXJzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxoZWxwZXJzXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNtQkM7RUNsQk8sYUFBYTtFQUNiLDZCQUE2QixFQUFBO0FDRnJDO0VDZUksYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQsRUFBQTtBRGpCckQ7SUFHUSxnQkFBZ0IsRUFBQTtBQUh4QjtJQU1RLGlCQUFpQixFQUFBO0FDK0JyQjtFQXRCQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRCxFQUFBO0FBb0JqRDtJQUdRLGlCQUFpQixFQUFBO0FBMER6QjtFQW5GQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRDtFQW1GN0Msb0NBQW9DLEVBQUE7QUFGeEM7SUFJUSxnQkFBZ0IsRUFBQTtBQUp4QjtJQU9RLGdCQUFnQixFQUFBO0FBUHhCO0lBVVEsaUJBQWlCLEVBQUE7QUFWekI7SUFhUSxrQkFBa0IsRUFBQTtBQWIxQjtJQWdCUSxnQkFBZ0IsRUFBQTtBQWhCeEI7SUFtQlEsZ0JBQWdCLEVBQUE7QUFuQnhCO0lBc0JRLGlCQUFpQixFQUFBO0FBeEN6QjtFQWpFQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRDtFQWlFN0Msb0NBQW9DLEVBQUE7QUFGeEM7SUFJUSxnQkFBZ0IsRUFBQTtBQUp4QjtJQU9RLGdCQUFnQixFQUFBO0FBUHhCO0lBVVEsaUJBQWlCLEVBQUE7QUFWekI7SUFhUSxpQkFBaUIsRUFBQTtBQXhDekI7RUF0Q0EsYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQ7RUFzQzdDLG9DQUFvQyxFQUFBO0FBRnhDO0lBSVEsZ0JBQWdCLEVBQUE7QUFKeEI7SUFPUSxnQkFBZ0IsRUFBQTtBQVB4QjtJQVVRLGlCQUFpQixFQUFBO0FBVnpCO0lBYVEsZ0JBQWdCLEVBQUE7QUFieEI7SUFnQlEsaUJBQWlCLEVBQUE7QUFoQnpCO0lBbUJRLGtCQUFrQixFQUFBO0FBbkIxQjtJQXNCUSxpQkFBaUIsRUFBQTtBRDlEN0I7RUNFSSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRCxFQUFBO0FESnJEO0lBR1EsZ0JBQWdCLEVBQUE7QUFIeEI7SUFNUSxpQkFBaUIsRUFBQTtBQU56QjtJQVNRLGtCQUNKLEVBQUE7QUhqQko7RUFDSSxVQUFTO0VBQ1QsU0FBUSxFQUFBO0FBRVo7RUFDSSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBO0FBRWhCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSx1QktqQmtDO0VMa0JsQyxxREFBcUQsRUFBQTtBR3BCekQ7RUZHSyxhQUFhO0VBQ2IseUJJSG9DLEVBQUE7QUpBekM7SUFLUyxxQkFBcUIsRUFBQTtBQUk3QjtFR0NHLFlIQTRCO0VHQzVCLGFIRGtDLEVBQUE7QUFEckM7SUFHUSx5QkliYTtJSmNiLGFBQWE7SUFDYixnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLFlBQVksRUFBQTtBQURoQjtJQUdRLFlBQVk7SUFFWixtQkFBbUIsRUFBQTtBQUwzQjtNQU9ZLGFBQWE7TUFDYixnQkFBZ0IsRUFBQTtBQVI1QjtRQVVnQixnQ0k3QkssRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwic2Nzcy9oZWxwZXJzL3ZhclwiO1xuQGltcG9ydCBcInNjc3MvaGVscGVycy9taXhpbnNcIjtcbkBpbXBvcnQgXCJzY3NzL2hlbHBlcnMvZXh0ZW5kc1wiO1xuQGltcG9ydCBcInNjc3MvbGF5b3V0L2dyaWRcIjtcblxuKntcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG59XG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG51bHsgXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5oZWFkZXIge1xyXG4gICAgLy8gcG9zaXRpb246IHN0aWNreTtcclxuICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItY29sb3I7XHJcbiAgICAgLnBvaW50e1xyXG4gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgfVxyXG4gfVxyXG4gXHJcbiAubG9nb3tcclxuICAgICBAaW5jbHVkZSBtYXJnaW5QYWRkaW5nKDEwcHgsIDEwcHgpO1xyXG4gICAgIGF7XHJcbiAgICAgICAgIGJvcmRlciA6ICRib3JkZXI7XHJcbiAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMS45ZW07XHJcbiAgICAgfVxyXG4gfVxyXG4gXHJcbiBuYXZ7XHJcbiAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIC5tZW51e1xyXG4gICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgIEBleHRlbmQgJWZsZXhDbGFzcztcclxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgLnBvaW50e1xyXG4gICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXI7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIH1cclxuICIsIiVmbGV4Q2xhc3N7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4lY2VudGVyZWRDbGFzc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuJXRpdGxle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGJvcmRlci1jb2xvciwgMjApO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3LjVlbTtcclxuICAgICAgICAgICAgfVxyXG59IiwiaGVhZGVye1xyXG4gICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICB9XHJcbiAgICAubmF2aWdhdGlvbntcclxuICAgICAgICBncmlkLWNvbHVtbjogNS8xMzsgXHJcbiAgICB9XHJcbn1cclxuQGluY2x1ZGUgZ3JpZENob29zZVRvdXIxO1xyXG5AaW5jbHVkZSBncmlkQXJ0aWNsZXMzO1xyXG5AaW5jbHVkZSBncmlkQXJ0aWNsZXMyO1xyXG5AaW5jbHVkZSBncmlkQXJ0aWNsZXMxO1xyXG5mb290ZXJ7XHJcbiAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgLnNvY2lhbE1lZGlhe1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzY7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdHN7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDcvMTA7XHJcbiAgICB9XHJcbiAgICAuaW5mb3JtYXRpb257XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEwLzEyXHJcbiAgICB9XHJcbn0iLCJAbWl4aW4gZm9vdGVyRm9udCgpe1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcbkBtaXhpbiBmb290ZXJIb3ZlciB7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yOiAkYm9yZGVyLWNvbG9yLCAkYW1vdW50OiA0MClcclxuICAgIH1cclxufVxyXG5AbWl4aW4gbWFyZ2luUGFkZGluZygkbWFyZ2luLCAkcGFkZGluZykge1xyXG4gICAgbWFyZ2luOiAkbWFyZ2luO1xyXG4gICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbn1cclxuQG1peGluIGdyaWREaXNwbGF5KCRjb2x1bW5zLCAkcGVyY2VudCkge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCRjb2x1bW5zLCAkcGVyY2VudCk7XHJcbiAgICBncmlkLWdhcDogKDEwMCUtJGNvbHVtbnMqJHBlcmNlbnQpLygkY29sdW1ucyAtIDEpO1xyXG59XHJcbkBtaXhpbiBncmlkQ2hvb3NlVG91cjIge1xyXG4gICAgLmNlbnRlckNvbnRlbnQxe1xyXG4gICAgICAgIC5mb3Jte1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgICAgICAuY291bnRyeSwgLmhlYWRlck9mRm9ybXtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzExO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAudG9wRm9ybXtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJvdHRvbW5Gb3Jte1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDcvMTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGdyaWRDaG9vc2VUb3VyMSB7XHJcbiAgICAuY2VudGVyQ29udGVudDF7XHJcbiAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICAuZm9ybXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQvMTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQ2hvb3NlVG91cjMge1xyXG4gICAgLmNlbnRlckNvbnRlbnQxe1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgLmZvcm17XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQXJ0aWNsZXMxe1xyXG4gICAgLmNlbnRlckNvbnRlbnQyMXtcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDQwMHB4KTtcclxuICAgICAgICAjYXJ0aWNsZTF7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlMntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQvOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUze1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogOS8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU0e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS82O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTV7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA2LzEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTZ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxMC8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU3e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGdyaWRBcnRpY2xlczJ7XHJcbiAgICAuY2VudGVyQ29udGVudDIye1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNDAwcHgpO1xyXG4gICAgICAgICNhcnRpY2xlMSwgI2FydGljbGU0e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTIsICNhcnRpY2xlNXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDUvOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUzLCAjYXJ0aWNsZTZ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA5LzEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTd7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzEzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZEFydGljbGVzM3tcclxuICAgIC5jZW50ZXJDb250ZW50MjN7XHJcbiAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA0MDBweCk7XHJcbiAgICAgICAgI2FydGljbGUxe1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS80O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTJ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0Lzc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlM3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDcvMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlNHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEwLzEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTV7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlNntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDUvODtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU3e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogOC8xMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGJhY2tncm91bmQoJGZpbGUpIHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3NyYy9pbWcvI3skZmlsZX0uanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiRDovM3llYXIvV2ViUHIvYW5ndWxhci1wcm9qZWN0L3NyYy9pbWcvI3skZmlsZX0uanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59IiwiJGJvcmRlci1jb2xvcjogIzZGOUFCMTtcclxuJGZvb3Rlci1jb2xvcjogbGlnaHRlbigkYm9yZGVyLWNvbG9yLCA0Mik7XHJcbiRiYXNlLWNvbG9yOiBsaWdodGVuKCRmb290ZXItY29sb3IsIDUpO1xyXG4kaGVhZGVyLWNvbG9yOiAkZm9vdGVyLWNvbG9yO1xyXG4kYm9yZGVyOiAycHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuJGltYWdlTGlzdDogKFwiYXJvbi12aXN1YWxzLTExODYzNjktdW5zcGxhc2gyXCIsIFwibWFyaWFuby1jb2xvbWJvdHRvLTEzNjYzMzItdW5zcGxhc2gzXCIsXHJcblwiYmVuLWJsZW5uZXJoYXNzZXR0LTMwMDc4NC11bnNwbGFzaDJcIixcInNpbW9uLW1pZ2FqLTExNDAxNTMtdW5zcGxhc2gyXCIsIFxyXG5cIm1pY2hhbC1qYW5lay0xMTA2NTg1LXVuc3BsYXNoM1wiLCBcImFuZ2VsLW9yaWdnaS0xMTk4NzA1LXVuc3BsYXNoMVwiLCBcInRpbS1tYXJzaGFsbC0xMjU0MDQxLXVuc3BsYXNoM1wiKTsiXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inputField\">\n  <form>\n    <p class=\"field\">Login</p>\n    <input class=\"field\" type=\"text\"><br>\n    <p class=\"field\">Password</p>\n    <input class=\"field\" type=\"password\"><br>\n    <input class=\"field\" type=\"submit\" value=\"Log In\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputField {\n  display: flex;\n  justify-content: center; }\n  .inputField .field {\n    margin: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7RUFGM0I7SUFJUSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dEZpZWxke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmZpZWxke1xyXG4gICAgICAgIG1hcmdpbjogNSU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"slogan\">\n    <p>{{slogan}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main-page/main-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.main, .main .slogan {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.main .slogan {\n  width: 100%;\n  height: 50%;\n  background-color: rgba(255, 255, 255, 0.6); }\n.main .slogan p {\n    text-align: center;\n    color: #416579;\n    font-size: 7.5em; }\nheader {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nheader .logo {\n    grid-column: 1/3; }\nheader .navigation {\n    grid-column: 5/13; }\n.centerContent1 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\n.centerContent1 .form {\n    grid-column: 4/10; }\n.centerContent23 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(2, 400px); }\n.centerContent23 #article1 {\n    grid-column: 1/4; }\n.centerContent23 #article2 {\n    grid-column: 4/7; }\n.centerContent23 #article3 {\n    grid-column: 7/10; }\n.centerContent23 #article4 {\n    grid-column: 10/13; }\n.centerContent23 #article5 {\n    grid-column: 1/5; }\n.centerContent23 #article6 {\n    grid-column: 5/8; }\n.centerContent23 #article7 {\n    grid-column: 8/13; }\n.centerContent22 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent22 #article1, .centerContent22 #article4 {\n    grid-column: 1/5; }\n.centerContent22 #article2, .centerContent22 #article5 {\n    grid-column: 5/9; }\n.centerContent22 #article3, .centerContent22 #article6 {\n    grid-column: 9/13; }\n.centerContent22 #article7 {\n    grid-column: 1/13; }\n.centerContent21 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent21 #article1 {\n    grid-column: 1/4; }\n.centerContent21 #article2 {\n    grid-column: 4/9; }\n.centerContent21 #article3 {\n    grid-column: 9/13; }\n.centerContent21 #article4 {\n    grid-column: 1/6; }\n.centerContent21 #article5 {\n    grid-column: 6/10; }\n.centerContent21 #article6 {\n    grid-column: 10/13; }\n.centerContent21 #article7 {\n    grid-column: 1/13; }\nfooter {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nfooter .socialMedia {\n    grid-column: 2/6; }\nfooter .contacts {\n    grid-column: 7/10; }\nfooter .information {\n    grid-column: 10/12; }\n* {\n  padding: 0;\n  margin: 0; }\na {\n  text-decoration: none;\n  color: black; }\nul {\n  list-style: none; }\nbody {\n  background-color: white;\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n.main {\n  width: 100%;\n  height: 800px;\n  background-image: url('kellen-riggin-1529865-unsplash.jpg');\n  background-position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL0Q6XFwzeWVhclxcV2ViUHJcXGFuZ3VsYXItcHJvamVjdC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9tYWluLXBhZ2UvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcYXBwXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi1wYWdlL0Q6XFwzeWVhclxcV2ViUHJcXGFuZ3VsYXItcHJvamVjdC9zcmNcXHNjc3NcXGhlbHBlcnNcXF9leHRlbmRzLnNjc3MiLCJzcmMvYXBwL21haW4tcGFnZS9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxsYXlvdXRcXF9ncmlkLnNjc3MiLCJzcmMvYXBwL21haW4tcGFnZS9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxoZWxwZXJzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21haW4tcGFnZS9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxoZWxwZXJzXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNDQTtFQ0lRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7QUROL0I7RUNTUSxXQUFXO0VBQ1gsV0FBVztFQUNYLDBDQUF1QyxFQUFBO0FEWC9DO0lDYWdCLGtCQUFrQjtJQUNsQixjQUFnQztJQUNoQyxnQkFBZ0IsRUFBQTtBQ2hCaEM7RUNlSSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRCxFQUFBO0FEakJyRDtJQUdRLGdCQUFnQixFQUFBO0FBSHhCO0lBTVEsaUJBQWlCLEVBQUE7QUMrQnJCO0VBdEJBLGFBQWE7RUFDYixxQ0FBaUQ7RUFDakQscUJBQWlELEVBQUE7QUFvQmpEO0lBR1EsaUJBQWlCLEVBQUE7QUEwRHpCO0VBbkZBLGFBQWE7RUFDYixxQ0FBaUQ7RUFDakQscUJBQWlEO0VBbUY3QyxvQ0FBb0MsRUFBQTtBQUZ4QztJQUlRLGdCQUFnQixFQUFBO0FBSnhCO0lBT1EsZ0JBQWdCLEVBQUE7QUFQeEI7SUFVUSxpQkFBaUIsRUFBQTtBQVZ6QjtJQWFRLGtCQUFrQixFQUFBO0FBYjFCO0lBZ0JRLGdCQUFnQixFQUFBO0FBaEJ4QjtJQW1CUSxnQkFBZ0IsRUFBQTtBQW5CeEI7SUFzQlEsaUJBQWlCLEVBQUE7QUF4Q3pCO0VBakVBLGFBQWE7RUFDYixxQ0FBaUQ7RUFDakQscUJBQWlEO0VBaUU3QyxvQ0FBb0MsRUFBQTtBQUZ4QztJQUlRLGdCQUFnQixFQUFBO0FBSnhCO0lBT1EsZ0JBQWdCLEVBQUE7QUFQeEI7SUFVUSxpQkFBaUIsRUFBQTtBQVZ6QjtJQWFRLGlCQUFpQixFQUFBO0FBeEN6QjtFQXRDQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRDtFQXNDN0Msb0NBQW9DLEVBQUE7QUFGeEM7SUFJUSxnQkFBZ0IsRUFBQTtBQUp4QjtJQU9RLGdCQUFnQixFQUFBO0FBUHhCO0lBVVEsaUJBQWlCLEVBQUE7QUFWekI7SUFhUSxnQkFBZ0IsRUFBQTtBQWJ4QjtJQWdCUSxpQkFBaUIsRUFBQTtBQWhCekI7SUFtQlEsa0JBQWtCLEVBQUE7QUFuQjFCO0lBc0JRLGlCQUFpQixFQUFBO0FEOUQ3QjtFQ0VJLGFBQWE7RUFDYixxQ0FBaUQ7RUFDakQscUJBQWlELEVBQUE7QURKckQ7SUFHUSxnQkFBZ0IsRUFBQTtBQUh4QjtJQU1RLGlCQUFpQixFQUFBO0FBTnpCO0lBU1Esa0JBQ0osRUFBQTtBSGpCSjtFQUNJLFVBQVM7RUFDVCxTQUFRLEVBQUE7QUFFWjtFQUNJLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7QUFFaEI7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLHVCS2pCa0M7RUxrQmxDLHFEQUFxRCxFQUFBO0FDbkJ6RDtFQUNJLFdBQVc7RUFDWCxhQUFhO0VHMkhiLDJEQUE0RTtFQUM1RSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwic2Nzcy9oZWxwZXJzL3ZhclwiO1xuQGltcG9ydCBcInNjc3MvaGVscGVycy9taXhpbnNcIjtcbkBpbXBvcnQgXCJzY3NzL2hlbHBlcnMvZXh0ZW5kc1wiO1xuQGltcG9ydCBcInNjc3MvbGF5b3V0L2dyaWRcIjtcblxuKntcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG59XG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG51bHsgXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4ubWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kKFwia2VsbGVuLXJpZ2dpbi0xNTI5ODY1LXVuc3BsYXNoXCIpO1xyXG4gICAgQGV4dGVuZCAlY2VudGVyZWRDbGFzcztcclxuICAgIC5zbG9nYW57XHJcbiAgICAgICAgQGV4dGVuZCAldGl0bGU7XHJcbiAgICAgICAgQGV4dGVuZCAlY2VudGVyZWRDbGFzcztcclxuICAgIH1cclxufSIsIiVmbGV4Q2xhc3N7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4lY2VudGVyZWRDbGFzc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuJXRpdGxle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGJvcmRlci1jb2xvciwgMjApO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3LjVlbTtcclxuICAgICAgICAgICAgfVxyXG59IiwiaGVhZGVye1xyXG4gICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICB9XHJcbiAgICAubmF2aWdhdGlvbntcclxuICAgICAgICBncmlkLWNvbHVtbjogNS8xMzsgXHJcbiAgICB9XHJcbn1cclxuQGluY2x1ZGUgZ3JpZENob29zZVRvdXIxO1xyXG5AaW5jbHVkZSBncmlkQXJ0aWNsZXMzO1xyXG5AaW5jbHVkZSBncmlkQXJ0aWNsZXMyO1xyXG5AaW5jbHVkZSBncmlkQXJ0aWNsZXMxO1xyXG5mb290ZXJ7XHJcbiAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgLnNvY2lhbE1lZGlhe1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzY7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdHN7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDcvMTA7XHJcbiAgICB9XHJcbiAgICAuaW5mb3JtYXRpb257XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEwLzEyXHJcbiAgICB9XHJcbn0iLCJAbWl4aW4gZm9vdGVyRm9udCgpe1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcbkBtaXhpbiBmb290ZXJIb3ZlciB7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yOiAkYm9yZGVyLWNvbG9yLCAkYW1vdW50OiA0MClcclxuICAgIH1cclxufVxyXG5AbWl4aW4gbWFyZ2luUGFkZGluZygkbWFyZ2luLCAkcGFkZGluZykge1xyXG4gICAgbWFyZ2luOiAkbWFyZ2luO1xyXG4gICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbn1cclxuQG1peGluIGdyaWREaXNwbGF5KCRjb2x1bW5zLCAkcGVyY2VudCkge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCRjb2x1bW5zLCAkcGVyY2VudCk7XHJcbiAgICBncmlkLWdhcDogKDEwMCUtJGNvbHVtbnMqJHBlcmNlbnQpLygkY29sdW1ucyAtIDEpO1xyXG59XHJcbkBtaXhpbiBncmlkQ2hvb3NlVG91cjIge1xyXG4gICAgLmNlbnRlckNvbnRlbnQxe1xyXG4gICAgICAgIC5mb3Jte1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgICAgICAuY291bnRyeSwgLmhlYWRlck9mRm9ybXtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzExO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAudG9wRm9ybXtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJvdHRvbW5Gb3Jte1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDcvMTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGdyaWRDaG9vc2VUb3VyMSB7XHJcbiAgICAuY2VudGVyQ29udGVudDF7XHJcbiAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICAuZm9ybXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQvMTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQ2hvb3NlVG91cjMge1xyXG4gICAgLmNlbnRlckNvbnRlbnQxe1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgLmZvcm17XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQXJ0aWNsZXMxe1xyXG4gICAgLmNlbnRlckNvbnRlbnQyMXtcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDQwMHB4KTtcclxuICAgICAgICAjYXJ0aWNsZTF7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlMntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQvOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUze1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogOS8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU0e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS82O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTV7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA2LzEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTZ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxMC8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU3e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGdyaWRBcnRpY2xlczJ7XHJcbiAgICAuY2VudGVyQ29udGVudDIye1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNDAwcHgpO1xyXG4gICAgICAgICNhcnRpY2xlMSwgI2FydGljbGU0e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTIsICNhcnRpY2xlNXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDUvOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUzLCAjYXJ0aWNsZTZ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA5LzEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTd7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzEzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZEFydGljbGVzM3tcclxuICAgIC5jZW50ZXJDb250ZW50MjN7XHJcbiAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA0MDBweCk7XHJcbiAgICAgICAgI2FydGljbGUxe1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS80O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTJ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0Lzc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlM3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDcvMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlNHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEwLzEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTV7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlNntcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDUvODtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU3e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogOC8xMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGJhY2tncm91bmQoJGZpbGUpIHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3NyYy9pbWcvI3skZmlsZX0uanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiRDovM3llYXIvV2ViUHIvYW5ndWxhci1wcm9qZWN0L3NyYy9pbWcvI3skZmlsZX0uanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59IiwiJGJvcmRlci1jb2xvcjogIzZGOUFCMTtcclxuJGZvb3Rlci1jb2xvcjogbGlnaHRlbigkYm9yZGVyLWNvbG9yLCA0Mik7XHJcbiRiYXNlLWNvbG9yOiBsaWdodGVuKCRmb290ZXItY29sb3IsIDUpO1xyXG4kaGVhZGVyLWNvbG9yOiAkZm9vdGVyLWNvbG9yO1xyXG4kYm9yZGVyOiAycHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuJGltYWdlTGlzdDogKFwiYXJvbi12aXN1YWxzLTExODYzNjktdW5zcGxhc2gyXCIsIFwibWFyaWFuby1jb2xvbWJvdHRvLTEzNjYzMzItdW5zcGxhc2gzXCIsXHJcblwiYmVuLWJsZW5uZXJoYXNzZXR0LTMwMDc4NC11bnNwbGFzaDJcIixcInNpbW9uLW1pZ2FqLTExNDAxNTMtdW5zcGxhc2gyXCIsIFxyXG5cIm1pY2hhbC1qYW5lay0xMTA2NTg1LXVuc3BsYXNoM1wiLCBcImFuZ2VsLW9yaWdnaS0xMTk4NzA1LXVuc3BsYXNoMVwiLCBcInRpbS1tYXJzaGFsbC0xMjU0MDQxLXVuc3BsYXNoM1wiKTsiXX0= */"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
        this.slogan = "Collect emotions";
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/main-page/main-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/tours/tours.component.html":
/*!********************************************!*\
  !*** ./src/app/tours/tours.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"titleWrapper\">\n    <div class=\"title\">\n      <p>{{title}}</p>\n    </div>\n  </div>\n  <div class=\"display\">\n    <p (click)=\"disable()\">Disable</p>\n    <p *ngFor=\"let tab of tabs\" [ngClass]=\"{changeDisabled: isDisabled(tab)}\" \n    [class.selected]=\"display==tab\" \n    (click)=\"setDisplay(tab)\">{{tab}}<span (click)=\"close(tab)\">  x</span></p>\n  </div>\n  <app-article-grid [typeOfGrid]=\"type\" *ngIf=\"display=='Plates'\"></app-article-grid>\n  <app-article-list *ngIf=\"display=='List'\"></app-article-list>"

/***/ }),

/***/ "./src/app/tours/tours.component.scss":
/*!********************************************!*\
  !*** ./src/app/tours/tours.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.titleWrapper, .titleWrapper .title, .display {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.titleWrapper .title {\n  width: 100%;\n  height: 50%;\n  background-color: rgba(255, 255, 255, 0.6); }\n.titleWrapper .title p {\n    text-align: center;\n    color: #416579;\n    font-size: 7.5em; }\nheader {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nheader .logo {\n    grid-column: 1/3; }\nheader .navigation {\n    grid-column: 5/13; }\n.centerContent1 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\n.centerContent1 .form {\n    grid-column: 4/10; }\n.centerContent23 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(2, 400px); }\n.centerContent23 #article1 {\n    grid-column: 1/4; }\n.centerContent23 #article2 {\n    grid-column: 4/7; }\n.centerContent23 #article3 {\n    grid-column: 7/10; }\n.centerContent23 #article4 {\n    grid-column: 10/13; }\n.centerContent23 #article5 {\n    grid-column: 1/5; }\n.centerContent23 #article6 {\n    grid-column: 5/8; }\n.centerContent23 #article7 {\n    grid-column: 8/13; }\n.centerContent22 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent22 #article1, .centerContent22 #article4 {\n    grid-column: 1/5; }\n.centerContent22 #article2, .centerContent22 #article5 {\n    grid-column: 5/9; }\n.centerContent22 #article3, .centerContent22 #article6 {\n    grid-column: 9/13; }\n.centerContent22 #article7 {\n    grid-column: 1/13; }\n.centerContent21 {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%;\n  grid-template-rows: repeat(3, 400px); }\n.centerContent21 #article1 {\n    grid-column: 1/4; }\n.centerContent21 #article2 {\n    grid-column: 4/9; }\n.centerContent21 #article3 {\n    grid-column: 9/13; }\n.centerContent21 #article4 {\n    grid-column: 1/6; }\n.centerContent21 #article5 {\n    grid-column: 6/10; }\n.centerContent21 #article6 {\n    grid-column: 10/13; }\n.centerContent21 #article7 {\n    grid-column: 1/13; }\nfooter {\n  display: grid;\n  grid-template-columns: repeat(12, 7%);\n  grid-gap: 1.45454545%; }\nfooter .socialMedia {\n    grid-column: 2/6; }\nfooter .contacts {\n    grid-column: 7/10; }\nfooter .information {\n    grid-column: 10/12; }\n* {\n  padding: 0;\n  margin: 0; }\na {\n  text-decoration: none;\n  color: black; }\nul {\n  list-style: none; }\nbody {\n  background-color: white;\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n.titleWrapper {\n  background-image: url('pavel-brodsky-1526876-unsplash.jpg');\n  background-position: center;\n  width: 100%;\n  height: 600px; }\n.display {\n  width: 30%;\n  margin: 10px 35%; }\n.display p {\n    z-index: 1;\n    display: block;\n    padding: 5px;\n    background-color: white;\n    text-align: center; }\n.display p:hover {\n    z-index: 1;\n    background-color: #90b1c3;\n    cursor: pointer; }\n.display p span {\n    padding-left: 3px;\n    font-size: 0.7em;\n    vertical-align: top; }\n.display .selected {\n    z-index: 1;\n    background-color: #6F9AB1; }\n.display .selected:hover {\n      background-color: #90b1c3;\n      cursor: pointer; }\n.display .changeDisabled {\n    color: #777;\n    z-index: 8;\n    background-color: #bbb; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG91cnMvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3RvdXJzL0Q6XFwzeWVhclxcV2ViUHJcXGFuZ3VsYXItcHJvamVjdC9zcmNcXGFwcFxcdG91cnNcXHRvdXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b3Vycy9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxoZWxwZXJzXFxfZXh0ZW5kcy5zY3NzIiwic3JjL2FwcC90b3Vycy9EOlxcM3llYXJcXFdlYlByXFxhbmd1bGFyLXByb2plY3Qvc3JjXFxzY3NzXFxsYXlvdXRcXF9ncmlkLnNjc3MiLCJzcmMvYXBwL3RvdXJzL0Q6XFwzeWVhclxcV2ViUHJcXGFuZ3VsYXItcHJvamVjdC9zcmNcXHNjc3NcXGhlbHBlcnNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvdG91cnMvRDpcXDN5ZWFyXFxXZWJQclxcYW5ndWxhci1wcm9qZWN0L3NyY1xcc2Nzc1xcaGVscGVyc1xcX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQ0E7RUNJUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0FETi9CO0VDU1EsV0FBVztFQUNYLFdBQVc7RUFDWCwwQ0FBdUMsRUFBQTtBRFgvQztJQ2FnQixrQkFBa0I7SUFDbEIsY0FBZ0M7SUFDaEMsZ0JBQWdCLEVBQUE7QUNoQmhDO0VDZUksYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQsRUFBQTtBRGpCckQ7SUFHUSxnQkFBZ0IsRUFBQTtBQUh4QjtJQU1RLGlCQUFpQixFQUFBO0FDK0JyQjtFQXRCQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRCxFQUFBO0FBb0JqRDtJQUdRLGlCQUFpQixFQUFBO0FBMER6QjtFQW5GQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRDtFQW1GN0Msb0NBQW9DLEVBQUE7QUFGeEM7SUFJUSxnQkFBZ0IsRUFBQTtBQUp4QjtJQU9RLGdCQUFnQixFQUFBO0FBUHhCO0lBVVEsaUJBQWlCLEVBQUE7QUFWekI7SUFhUSxrQkFBa0IsRUFBQTtBQWIxQjtJQWdCUSxnQkFBZ0IsRUFBQTtBQWhCeEI7SUFtQlEsZ0JBQWdCLEVBQUE7QUFuQnhCO0lBc0JRLGlCQUFpQixFQUFBO0FBeEN6QjtFQWpFQSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRDtFQWlFN0Msb0NBQW9DLEVBQUE7QUFGeEM7SUFJUSxnQkFBZ0IsRUFBQTtBQUp4QjtJQU9RLGdCQUFnQixFQUFBO0FBUHhCO0lBVVEsaUJBQWlCLEVBQUE7QUFWekI7SUFhUSxpQkFBaUIsRUFBQTtBQXhDekI7RUF0Q0EsYUFBYTtFQUNiLHFDQUFpRDtFQUNqRCxxQkFBaUQ7RUFzQzdDLG9DQUFvQyxFQUFBO0FBRnhDO0lBSVEsZ0JBQWdCLEVBQUE7QUFKeEI7SUFPUSxnQkFBZ0IsRUFBQTtBQVB4QjtJQVVRLGlCQUFpQixFQUFBO0FBVnpCO0lBYVEsZ0JBQWdCLEVBQUE7QUFieEI7SUFnQlEsaUJBQWlCLEVBQUE7QUFoQnpCO0lBbUJRLGtCQUFrQixFQUFBO0FBbkIxQjtJQXNCUSxpQkFBaUIsRUFBQTtBRDlEN0I7RUNFSSxhQUFhO0VBQ2IscUNBQWlEO0VBQ2pELHFCQUFpRCxFQUFBO0FESnJEO0lBR1EsZ0JBQWdCLEVBQUE7QUFIeEI7SUFNUSxpQkFBaUIsRUFBQTtBQU56QjtJQVNRLGtCQUNKLEVBQUE7QUhqQko7RUFDSSxVQUFTO0VBQ1QsU0FBUSxFQUFBO0FBRVo7RUFDSSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBO0FBRWhCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSx1QktqQmtDO0VMa0JsQyxxREFBcUQsRUFBQTtBQ25CekQ7RUc2SEksMkRBQTRFO0VBQzVFLDJCQUEyQjtFSDVIM0IsV0FBVztFQUNYLGFBQWEsRUFBQTtBQU9qQjtFQUNJLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTtBQUZwQjtJQUtRLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLHVCSWpCOEI7SUprQjlCLGtCQUFrQixFQUFBO0FBVDFCO0lBYVksVUFBVTtJQUNkLHlCQUE0QztJQUM1QyxlQUFlLEVBQUE7QUFmdkI7SUFrQlksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtBQXBCL0I7SUF5QlEsVUFBVTtJQUtWLHlCSXpDYyxFQUFBO0FKV3RCO01BMkJZLHlCQUE0QztNQUM1QyxlQUFlLEVBQUE7QUE1QjNCO0lBbUNTLFdBQVc7SUFDWixVQUFVO0lBQ1Ysc0JBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90b3Vycy90b3Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgXCJzY3NzL2hlbHBlcnMvdmFyXCI7XG5AaW1wb3J0IFwic2Nzcy9oZWxwZXJzL21peGluc1wiO1xuQGltcG9ydCBcInNjc3MvaGVscGVycy9leHRlbmRzXCI7XG5AaW1wb3J0IFwic2Nzcy9sYXlvdXQvZ3JpZFwiO1xuXG4qe1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbn1cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbnVseyBcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcbi50aXRsZVdyYXBwZXJ7XHJcbiAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kKFwicGF2ZWwtYnJvZHNreS0xNTI2ODc2LXVuc3BsYXNoXCIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgQGV4dGVuZCAlY2VudGVyZWRDbGFzcztcclxuICAgIC50aXRsZXtcclxuICAgICBAZXh0ZW5kICV0aXRsZTsgXHJcbiAgICAgQGV4dGVuZCAlY2VudGVyZWRDbGFzczsgIFxyXG4gICAgfVxyXG59XHJcbi5kaXNwbGF5e1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMTBweCAzNSU7XHJcbiAgICBAZXh0ZW5kICVjZW50ZXJlZENsYXNzO1xyXG4gICAgcHtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYm9yZGVyLWNvbG9yLCAxMCk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWxlY3RlZHtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJvcmRlci1jb2xvciwgMTApO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICB9XHJcblxyXG5cclxuLmNoYW5nZURpc2FibGVkIHtcclxuICAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgei1pbmRleDogODtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2JiYjtcclxuICAgIH1cclxufVxyXG4iLCIlZmxleENsYXNze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuJWNlbnRlcmVkQ2xhc3N7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiV0aXRsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2VuKCRib3JkZXItY29sb3IsIDIwKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNy41ZW07XHJcbiAgICAgICAgICAgIH1cclxufSIsImhlYWRlcntcclxuICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRpb257XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDUvMTM7IFxyXG4gICAgfVxyXG59XHJcbkBpbmNsdWRlIGdyaWRDaG9vc2VUb3VyMTtcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMztcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMjtcclxuQGluY2x1ZGUgZ3JpZEFydGljbGVzMTtcclxuZm9vdGVye1xyXG4gICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgIC5zb2NpYWxNZWRpYXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMi82O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3Rze1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiA3LzEwO1xyXG4gICAgfVxyXG4gICAgLmluZm9ybWF0aW9ue1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxMC8xMlxyXG4gICAgfVxyXG59IiwiQG1peGluIGZvb3RlckZvbnQoKXtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5AbWl4aW4gZm9vdGVySG92ZXIge1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvcjogJGJvcmRlci1jb2xvciwgJGFtb3VudDogNDApXHJcbiAgICB9XHJcbn1cclxuQG1peGluIG1hcmdpblBhZGRpbmcoJG1hcmdpbiwgJHBhZGRpbmcpIHtcclxuICAgIG1hcmdpbjogJG1hcmdpbjtcclxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG59XHJcbkBtaXhpbiBncmlkRGlzcGxheSgkY29sdW1ucywgJHBlcmNlbnQpIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkY29sdW1ucywgJHBlcmNlbnQpO1xyXG4gICAgZ3JpZC1nYXA6ICgxMDAlLSRjb2x1bW5zKiRwZXJjZW50KS8oJGNvbHVtbnMgLSAxKTtcclxufVxyXG5AbWl4aW4gZ3JpZENob29zZVRvdXIyIHtcclxuICAgIC5jZW50ZXJDb250ZW50MXtcclxuICAgICAgICAuZm9ybXtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICAgICAgLmNvdW50cnksIC5oZWFkZXJPZkZvcm17XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMy8xMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLnRvcEZvcm17XHJcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMS83O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3R0b21uRm9ybXtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA3LzEzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQ2hvb3NlVG91cjEge1xyXG4gICAgLmNlbnRlckNvbnRlbnQxe1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgLmZvcm17XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0LzEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZENob29zZVRvdXIzIHtcclxuICAgIC5jZW50ZXJDb250ZW50MXtcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIC5mb3Jte1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWl4aW4gZ3JpZEFydGljbGVzMXtcclxuICAgIC5jZW50ZXJDb250ZW50MjF7XHJcbiAgICAgICAgQGluY2x1ZGUgZ3JpZERpc3BsYXkoMTIsIDclKTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA0MDBweCk7XHJcbiAgICAgICAgI2FydGljbGUxe1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS80O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTJ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0Lzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlM3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDkvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlNHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU1e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNi8xMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU2e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTAvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlN3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBncmlkQXJ0aWNsZXMye1xyXG4gICAgLmNlbnRlckNvbnRlbnQyMntcclxuICAgICAgICBAaW5jbHVkZSBncmlkRGlzcGxheSgxMiwgNyUpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDQwMHB4KTtcclxuICAgICAgICAjYXJ0aWNsZTEsICNhcnRpY2xlNHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUyLCAjYXJ0aWNsZTV7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1Lzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlMywgI2FydGljbGU2e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogOS8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU3e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1peGluIGdyaWRBcnRpY2xlczN7XHJcbiAgICAuY2VudGVyQ29udGVudDIze1xyXG4gICAgICAgIEBpbmNsdWRlIGdyaWREaXNwbGF5KDEyLCA3JSk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDAwcHgpO1xyXG4gICAgICAgICNhcnRpY2xlMXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGUye1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNC83O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTN7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA3LzEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTR7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxMC8xMztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2FydGljbGU1e1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYXJ0aWNsZTZ7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1Lzg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNhcnRpY2xlN3tcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDgvMTM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtaXhpbiBiYWNrZ3JvdW5kKCRmaWxlKSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zcmMvaW1nLyN7JGZpbGV9LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIkQ6LzN5ZWFyL1dlYlByL2FuZ3VsYXItcHJvamVjdC9zcmMvaW1nLyN7JGZpbGV9LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufSIsIiRib3JkZXItY29sb3I6ICM2RjlBQjE7XHJcbiRmb290ZXItY29sb3I6IGxpZ2h0ZW4oJGJvcmRlci1jb2xvciwgNDIpO1xyXG4kYmFzZS1jb2xvcjogbGlnaHRlbigkZm9vdGVyLWNvbG9yLCA1KTtcclxuJGhlYWRlci1jb2xvcjogJGZvb3Rlci1jb2xvcjtcclxuJGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiRpbWFnZUxpc3Q6IChcImFyb24tdmlzdWFscy0xMTg2MzY5LXVuc3BsYXNoMlwiLCBcIm1hcmlhbm8tY29sb21ib3R0by0xMzY2MzMyLXVuc3BsYXNoM1wiLFxyXG5cImJlbi1ibGVubmVyaGFzc2V0dC0zMDA3ODQtdW5zcGxhc2gyXCIsXCJzaW1vbi1taWdhai0xMTQwMTUzLXVuc3BsYXNoMlwiLCBcclxuXCJtaWNoYWwtamFuZWstMTEwNjU4NS11bnNwbGFzaDNcIiwgXCJhbmdlbC1vcmlnZ2ktMTE5ODcwNS11bnNwbGFzaDFcIiwgXCJ0aW0tbWFyc2hhbGwtMTI1NDA0MS11bnNwbGFzaDNcIik7Il19 */"

/***/ }),

/***/ "./src/app/tours/tours.component.ts":
/*!******************************************!*\
  !*** ./src/app/tours/tours.component.ts ***!
  \******************************************/
/*! exports provided: ToursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursComponent", function() { return ToursComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToursComponent = /** @class */ (function () {
    function ToursComponent() {
        this.disabled = [false, false];
        this.tabs = ['List', 'Plates'];
        this.display = "Plates";
        this.title = "Articles";
        this.type = "centerContent21";
    }
    ToursComponent.prototype.ngOnInit = function () {
    };
    ToursComponent.prototype.setDisplay = function (name) {
        if (!this.disabled[this.tabs.indexOf(name)]) {
            this.display = name;
        }
    };
    ToursComponent.prototype.close = function (tab) {
        if (window.confirm('You are going to delete it')) {
            this.tabs.splice(this.tabs.indexOf(tab), 1);
            this.disabled.splice(this.tabs.indexOf(tab), 1);
            this.display = this.tabs[0];
        }
    };
    ToursComponent.prototype.disable = function () {
        this.disabled[this.tabs.indexOf(this.display)] = !this.disabled[this.tabs.indexOf(this.display)];
    };
    ToursComponent.prototype.isDisabled = function (tab) {
        return this.disabled[this.tabs.indexOf(tab)];
    };
    ToursComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tours',
            template: __webpack_require__(/*! ./tours.component.html */ "./src/app/tours/tours.component.html"),
            styles: [__webpack_require__(/*! ./tours.component.scss */ "./src/app/tours/tours.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToursComponent);
    return ToursComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\3year\WebPr\angular-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map