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



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lobster');\r\n/* Popup container - can be anything you want */\r\n/* Absolute Center Spinner */\r\n.loading {\r\n  content: \"Wait A Movement..:\";\r\n\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: visible;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n/* Transparent Overlay */\r\n.loading:before {\r\n  content: \"Wait A Movement..:\";\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.3);\r\n}\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.loading:not(:required):after {\r\n  content: '';\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner 1500ms infinite linear;\r\n  animation: spinner 1500ms infinite linear;\r\n  border-radius: 0.5em;\r\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n/* Animation */\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n#sna {\r\n  visibility: hidden;\r\n  min-width: 250px;\r\n  margin-left: -125px;\r\n  background-color: green;\r\n  color: black;\r\n  text-align: center;\r\n  border-radius: 2px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  font-size: 17px;\r\n}\r\n#valid {\r\n  visibility: hidden;\r\n  min-width: 250px;\r\n  margin-left: -125px;\r\n  background-color: red;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 2px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  font-size: 17px;\r\n}\r\n#snackbar {\r\n  visibility: hidden;\r\n  min-width: 250px;\r\n  margin-left: -125px;\r\n  background-color: green;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 2px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  font-size: 17px;\r\n}\r\n#snackbars {\r\n  visibility: hidden;\r\n  min-width: 250px;\r\n  margin-left: -125px;\r\n  background-color:red;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 2px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  font-size: 17px;\r\n}\r\n#sna.show {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n#snackbar.show {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n#valid.show {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n#snackbars.show {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n@-webkit-keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n@keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n@-webkit-keyframes fadeout {\r\n  from {bottom: 30px; opacity: 1;}\r\n  to {bottom: 0; opacity: 0;}\r\n}\r\n@keyframes fadeout {\r\n  from {bottom: 30px; opacity: 1;}\r\n  to {bottom: 0; opacity: 0;}\r\n}\r\n.alert {\r\n  padding: 20px;\r\n  background-color: Green;\r\n  color: white;\r\n}\r\n#alertss{\r\n  padding: 20px;\r\n  background-color: red;\r\n  color: white;\r\n}\r\n.closebtn {\r\n  margin-left: 15px;\r\n  color: white;\r\n  font-weight: bold;\r\n  float: right;\r\n  font-size: 22px;\r\n  line-height: 20px;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n.closebtn:hover {\r\n  color: black;\r\n}\r\nbody{\r\n  background: rgb(246, 244, 241);\r\n\r\n}\r\nhr {\r\n    border: 0;\r\n    border-top: 1px solid #3f3f3f;\r\n    margin: 20px 0;\r\n}\r\n.popup {\r\nposition: relative;\r\ndisplay: inline-block;\r\ncursor: pointer;\r\n-webkit-user-select: none;\r\n-moz-user-select: none;\r\n-ms-user-select: none;\r\nuser-select: none;\r\n}\r\n#red{\r\n  color: red;\r\n\r\n}\r\n#blue{\r\n  color: blue;\r\n\r\n}\r\ncontainer {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    margin-left: 1%;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .col-sm-4 {\r\n    text-align: center;\r\n    margin: 25px 0;\r\n  }\r\n  .btn-lg {\r\n    width: 100%;\r\n    margin-bottom: 35px;\r\n  }\r\n  .button-group{\r\n    margin-left:10%;\r\n  margin-right:25%;\r\n  }\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .logo {\r\n    font-size: 150px;\r\n  }\r\n}\r\n.navbar {\r\n    margin-bottom: 0;\r\n    background-color: #f4511e;\r\n    z-index: 9999;\r\n    border: 0;\r\n    font-size: 12px !important;\r\n    line-height: 1.42857143 !important;\r\n    letter-spacing: 4px;\r\n    border-radius: 0;\r\n    font-family: Montserrat, sans-serif;\r\n  }\r\n.navbar li a, .navbar .navbar-brand {\r\n    color: #fff !important;\r\n  }\r\n.navbar-nav li a:hover, .navbar-nav li.active a {\r\n    color: #f4511e !important;\r\n    background-color: #fff !important;\r\n  }\r\n.navbar-default .navbar-toggle {\r\n    border-color: transparent;\r\n    color: #fff !important;\r\n  }\r\n/* The actual popup */\r\n.popup .popuptext {\r\nvisibility: hidden;\r\nwidth: 160px;\r\nbackground-color: #555;\r\ncolor: #fff;\r\ntext-align: center;\r\nborder-radius: 6px;\r\npadding: 8px 0;\r\nposition: absolute;\r\nz-index: 1;\r\nbottom: 125%;\r\nleft: 50%;\r\nmargin-left: -80px;\r\n}\r\n/* Popup arrow */\r\n.popup .popuptext::after {\r\ncontent: \"\";\r\nposition: absolute;\r\ntop: 100%;\r\nleft: 50%;\r\nmargin-left: -5px;\r\nborder-width: 5px;\r\nborder-style: solid;\r\nborder-color: #555 transparent transparent transparent;\r\n}\r\n/* Toggle this class - hide and show the popup */\r\n.popup .show {\r\nvisibility: visible;\r\n-webkit-animation: fadeIn 1s;\r\nanimation: fadeIn 1s;\r\n}\r\n/* Add animation (fade in the popup) */\r\n@-webkit-keyframes fadeIn {\r\nfrom {opacity: 0;}\r\nto {opacity: 1;}\r\n}\r\n@keyframes fadeIn {\r\nfrom {opacity: 0;}\r\nto {opacity:1 ;}\r\n}\r\nbody {font-family: Arial, Helvetica, sans-serif;}\r\n/* Full-width input fields */\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing:content-box;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 50%;\r\n}\r\n#dd{\r\n}\r\n#bu{\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 20%;\r\n}\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\nh1{\r\n  color:#147DB9;\r\n  font-size: 2em;\r\n\r\n}\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n/* Center the image and position the close button */\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n  position: relative;\r\n}\r\nimg.avatar {\r\n  width: 40%;\r\n  border-radius: 50%;\r\n}\r\n.container {\r\n}\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n/* The Modal (background) */\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  padding-top: 60px;\r\n}\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n  border: 1px solid #888;\r\n  width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n/* The Close Button (x) */\r\n.close {\r\n  position: absolute;\r\n  right: 25px;\r\n  top: 0;\r\n  color: #000;\r\n  font-size: 35px;\r\n  font-weight: bold;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n/* Add Zoom Animation */\r\n.animate {\r\n  -webkit-animation: animatezoom 0.6s;\r\n  animation: animatezoom 0.6s\r\n}\r\n@-webkit-keyframes animatezoom {\r\n  from {-webkit-transform: scale(0)}\r\n  to {-webkit-transform: scale(1)}\r\n}\r\n@keyframes animatezoom {\r\n  from {-webkit-transform: scale(0);transform: scale(0)}\r\n  to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n     display: block;\r\n     float: none;\r\n  }\r\n  .cancelbtn {\r\n     width: 100%;\r\n  }\r\n}\r\n.buttonload {\r\n  background-color: #4CAF50; /* Green background */\r\n  border: none; /* Remove borders */\r\n  color: white; /* White text */\r\n  padding: 12px 24px; /* Some padding */\r\n  font-size: 16px; /* Set a font-size */\r\n}\r\n/* Add a right margin to each icon */\r\n.fa {\r\n  margin-left: -12px;\r\n  margin-right: 8px;\r\n}\r\n.loader {\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite; /* Safari */\r\n  animation: spin 2s linear infinite;\r\n}\r\n.row { /* IE10 */\r\n  display: flex; /* IE10 */\r\n  flex-wrap: wrap;\r\n  margin: 0 -16px;\r\n}\r\n.col-25 { /* IE10 */\r\n  flex: 25%;\r\n}\r\n.col-50 { /* IE10 */\r\n  flex: 50%;\r\n}\r\n.col-75 { /* IE10 */\r\n  flex: 75%;\r\n}\r\n.col-25,\r\n.col-50,\r\n.col-75 {\r\n  padding: 0 16px;\r\n}\r\n.container1 {\r\n  padding: 5px 20px 15px 20px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 3px;\r\n}\r\n.container2 {\r\n  padding: 5px 20px 15px 20px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 3px;\r\n}\r\nlabel {\r\n  margin-bottom: 10px;\r\n  display: block;\r\n}\r\n/* Safari */\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n.th-sm{\r\n  font-size:1em;\r\n}\r\n.expencess-btn{\r\n  width:30%;\r\n}\r\ntable {\r\n/*  border: 1px solid #D9E4E6;\r\n*/\r\n}\r\n.responstable tr:nth-child(odd) {\r\n  background-color: #EAF3F3;\r\n}\r\n.responstable th {\r\n  display: none;\r\n  border: 1px solid #FFF;\r\n  background-color: #275261;\r\n  color: #FFF;\r\n  padding: 1em;\r\n}\r\n.responstable th:first-child {\r\n  display: table-cell;\r\n  text-align: center;\r\n}\r\n.responstable th:nth-child(2) {\r\n  display: table-cell;\r\n}\r\n.responstable th:nth-child(2) span {\r\n  display: none;\r\n}\r\n.responstable th:nth-child(2):after {\r\n  content: attr(data-th);\r\n}\r\n@media (min-width: 480px) {\r\n  .responstable th:nth-child(2) span {\r\n    display: block;\r\n  }\r\n  .responstable th:nth-child(2):after {\r\n    display: none;\r\n  }\r\n}\r\n.responstable td {\r\n  display: block;\r\n  word-wrap: break-word;\r\n  max-width: 7em;\r\n}\r\n.responstable td:first-child {\r\n  display: table-cell;\r\n  text-align: center;\r\n  border-right: 1px solid #D9E4E6;\r\n}\r\n@media (min-width: 480px) {\r\n  .responstable td {\r\n    border: 1px solid #D9E4E6;\r\n  }\r\n}\r\n.responstable th, .responstable td {\r\n  text-align: left;\r\n  margin: .5em 1em;\r\n}\r\n@media (min-width: 480px) {\r\n  .responstable th, .responstable td {\r\n    display: table-cell;\r\n    padding: 1em;\r\n  }\r\n}\r\n/*\r\ntr:nth-child(even) {background-color: #f2f2f2;}\r\ntr:nth-child(odd) {background-color: #fff;}\r\n*/\r\nth{\r\n  padding: 20px 15px;\r\n  text-align: left;\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n}\r\ntd{\r\n  padding: 5px;\r\n  text-align: left;\r\n  vertical-align:middle;\r\n  font-weight: 300;\r\n  font-size: 12px;\r\n  color: #000;\r\n  border-bottom: solid 1px rgba(255,255,255,0.1);\r\n}\r\n#modal-header{\r\n  font-family: 'Lobster', cursive;\r\n  font-size: 1.5em;\r\n\r\n}\r\n#m{\r\n  font-size: 1em;\r\n}\r\n.navbar{\r\n  height:80px;\r\n}\r\n.topnav-centered a {\r\nfloat: none;\r\nposition: absolute;\r\nleft: 19%;\r\n-webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\nfont-size: 2.5em;\r\nfont-family: 'Lobster', cursive;\r\n\r\n}\r\n#sl1{\r\n  width:100%;\r\n}\r\n/* Full-width input fields */\r\n#abc {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n}\r\n#abcde {\r\n  width: 15%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n}\r\n#abcdef {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n}\r\n#cat {\r\n  width: 15%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n}\r\n#cata {\r\n  width: 90%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n}\r\n#employee {\r\n  width: 100%;\r\n  padding: 8px 5px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n   border-radius: 5px 5px 5px 5px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n}\r\n#c {\r\n  width: 100%;\r\n  padding: 8px 5px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n   border-radius: 5px 5px 5px 5px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n}\r\n#abcd {\r\n  width: 100%;\r\n  padding: 8px 5px;\r\n  margin: 8px 0;\r\n   border-radius: 5px 5px 5px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n}\r\n/* Set a style for all buttons */\r\n#viewlog{\r\n  background-color: #669933;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 10px 10px 10px 10px;\r\n}\r\n#lo {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 20%;\r\n  border-radius: 10px 10px 10px 10px;\r\n}\r\n#fu{\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 28%;\r\n}\r\n#si {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 15%;\r\n}\r\n#s{\r\n  background-color: #ce5346;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 20%;\r\n}\r\n#lp{\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 8%;\r\n}\r\n#l{\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 25%;\r\n}\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n/* Center the image and position the close button */\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n  position: relative;\r\n}\r\nimg.avatar {\r\n  width: 40%;\r\n  border-radius: 50%;\r\n}\r\n.container {\r\n  padding: 16px;\r\n}\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n/* The Modal (background) */\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  padding-top: 60px;\r\n}\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n  border: 1px solid #888;\r\n  width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n/* The Close Button (x) */\r\n.close {\r\n  position: absolute;\r\n  right: 25px;\r\n  top: 0;\r\n  color: #000;\r\n  font-size: 35px;\r\n  font-weight: bold;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n/* Add Zoom Animation */\r\n.animate {\r\n  -webkit-animation: animatezoom 0.6s;\r\n  animation: animatezoom 0.6s\r\n}\r\n@-webkit-keyframes animatezoom {\r\n  from {-webkit-transform: scale(0)}\r\n  to {-webkit-transform: scale(1)}\r\n}\r\n@keyframes animatezoom {\r\n  from {-webkit-transform: scale(0);transform: scale(0)}\r\n  to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n     display: block;\r\n     float: none;\r\n  }\r\n  .cancelbtn {\r\n     width: 100%;\r\n  }\r\n}\r\n.text-line[_ngcontent-c0] {\r\n    background-color: transparent;\r\n    /* color: #eeeeee; */\r\n    outline: none;\r\n    outline-style: none;\r\n    border-top: none;\r\n    border-left: none;\r\n    border-right: none;\r\n    border-bottom: solid #251818 1px;\r\n    padding: 3px 10px;\r\n}\r\n.row { /* IE10 */\r\n  display: flex; /* IE10 */\r\n  flex-wrap: wrap;\r\n  margin: 0 -16px;\r\n}\r\n.col-25 { /* IE10 */\r\n  flex: 25%;\r\n}\r\n.col-50 { /* IE10 */\r\n  flex: 50%;\r\n}\r\n.col-75 { /* IE10 */\r\n  flex: 75%;\r\n}\r\n.col-25,\r\n.col-50,\r\n.col-75 {\r\n  padding: 0 16px;\r\n}\r\n.container {\r\n  padding: 5px 20px 15px 20px;\r\n  padding: 5px 20px 15px 20px;\r\nmargin-left: 2%;\r\n\r\n}\r\n.container-main{\r\n   padding: 5px 20px 15px 20px;\r\n}\r\ninput[type=number] {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  padding: 6px 20px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n}\r\ninput[type=number][_ngcontent-c0], input[type=password][_ngcontent-c0] {\r\n    width: 100%;\r\n    padding: 6px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\ninput[type=text] {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  padding: 6px 20px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n}\r\ninput[type=text][_ngcontent-c0], input[type=password][_ngcontent-c0] {\r\n    width: 100%;\r\n    padding: 6px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n#i{\r\n width: 100%;\r\n}\r\n#abcd{\r\n width: 50%;\r\n border: 1px solid #4CAF50;\r\n}\r\n#abcde{\r\n width: 50%;\r\n border: 1px solid #4CAF50;\r\n}\r\n/* Full-width input fields */\r\n#id01 {\r\n  width: 100%;\r\n}\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n  background-color: #669933;\r\n  color: #000;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n\r\n  width: 10%;\r\n  outline: none;\r\n   outline-style: none;\r\n   border-top: none;\r\n   border-left: none;\r\n   border-right: none;\r\n   border-bottom: solid #eeeeee 1px;\r\n   padding: 3px 10px;\r\n}\r\n/*\r\nbutton:hover {\r\n  opacity: 0.8;\r\n  border-bottom: solid red 1px;\r\n}*/\r\n.text-line#buttons:hover {\r\n  font-weight:bold;\r\n  color:#000000;\r\n  border-bottom: solid red 1px;\r\n}\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n/* Center the image and position the close button */\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n  position: relative;\r\n}\r\nimg.avatar {\r\n  width: 40%;\r\n  border-radius: 50%;\r\n}\r\n.container {\r\n  padding: 16px;\r\n}\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n/* The Modal (background) */\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  padding-top: 60px;\r\n}\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n  border: 1px solid #888;\r\n  width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n/* The Close Button (x) */\r\n.close {\r\n  position: absolute;\r\n  right: 25px;\r\n  top: 0;\r\n  color: #000;\r\n  font-size: 35px;\r\n  font-weight: bold;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n/* Add Zoom Animation */\r\n.animate {\r\n  -webkit-animation: animatezoom 0.6s;\r\n  animation: animatezoom 0.6s\r\n}\r\n@-webkit-keyframes animatezoom {\r\n  from {-webkit-transform: scale(0)}\r\n  to {-webkit-transform: scale(1)}\r\n}\r\n@keyframes animatezoom {\r\n  from {-webkit-transform: scale(0);transform: scale(0)}\r\n  to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n     display: block;\r\n     float: none;\r\n  }\r\n  .cancelbtn {\r\n     width: 100%;\r\n  }\r\n}\r\nbody {font-family: Arial;}\r\n/* Style the tab */\r\n.tab {\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  background-color: #f1f1f1;\r\n  width:25%;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\n  background-color: inherit;\r\n  float: left;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\n  background-color: #ddd;\r\n}\r\n/* Create an active/current tablink class */\r\n.tab button.active {\r\n  background-color: #ccc;\r\n}\r\n/* Style the tab content */\r\n.tabcontent {\r\n  display: none;\r\n  padding: 6px 12px;\r\n  border: 1px solid #ccc;\r\n  border-top: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEO0FBQzlELCtDQUErQztBQUMvQyw0QkFBNEI7QUFDNUI7RUFDRSw2QkFBNkI7O0VBRTdCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7QUFDVjtBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7QUFFQSx5REFBeUQ7QUFDekQ7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsU0FBUztBQUNYO0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpREFBaUQ7RUFJakQseUNBQXlDO0VBQ3pDLG9CQUFvQjtFQUVwQix3U0FBd1M7QUFDMVM7QUFFQSxjQUFjO0FBRWQ7RUFDRTtJQUNFLCtCQUErQjtJQUkvQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUFpQztJQUlqQyx5QkFBeUI7RUFDM0I7QUFDRjtBQWlDQTtFQUNFO0lBQ0UsK0JBQStCO0lBSS9CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQWlDO0lBSWpDLHlCQUF5QjtFQUMzQjtBQUNGO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7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O0VBQ04sV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLG1DQUFtQztFQUNuQztBQUNGO0FBRUE7RUFDRSxNQUFNLDJCQUEyQjtFQUNqQyxJQUFJLDJCQUEyQjtBQUNqQztBQUVBO0VBQ0UsTUFBTSwyQkFBa0IsQ0FBbEIsbUJBQW1CO0VBQ3pCLElBQUksMkJBQWtCLENBQWxCLG1CQUFtQjtBQUN6QjtBQUVBLG9FQUFvRTtBQUNwRTtFQUNFO0tBQ0csY0FBYztLQUNkLFdBQVc7RUFDZDtFQUNBO0tBQ0csV0FBVztFQUNkO0FBQ0Y7QUFFQSxNQUFNLGtCQUFrQixDQUFDO0FBRXpCLGtCQUFrQjtBQUNsQjtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDtBQUVBLHFDQUFxQztBQUNyQztFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxvYnN0ZXInKTtcclxuLyogUG9wdXAgY29udGFpbmVyIC0gY2FuIGJlIGFueXRoaW5nIHlvdSB3YW50ICovXHJcbi8qIEFic29sdXRlIENlbnRlciBTcGlubmVyICovXHJcbi5sb2FkaW5nIHtcclxuICBjb250ZW50OiBcIldhaXQgQSBNb3ZlbWVudC4uOlwiO1xyXG5cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xyXG4ubG9hZGluZzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiV2FpdCBBIE1vdmVtZW50Li46XCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi8qIDpub3QoOnJlcXVpcmVkKSBoaWRlcyB0aGVzZSBydWxlcyBmcm9tIElFOSBhbmQgYmVsb3cgKi9cclxuLmxvYWRpbmc6bm90KDpyZXF1aXJlZCkge1xyXG4gIC8qIGhpZGUgXCJsb2FkaW5nLi4uXCIgdGV4dCAqL1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtbW96LWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBhbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC41KSAtMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC41KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIDEuNWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjVlbSAwIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcclxufVxyXG5cclxuLyogQW5pbWF0aW9uICovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbiNzbmEge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4jdmFsaWQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4jc25hY2tiYXIge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3R0b206IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbiNzbmFja2JhcnMge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3R0b206IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbiNzbmEuc2hvdyB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG59XHJcbiNzbmFja2Jhci5zaG93IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XHJcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XHJcbn1cclxuI3ZhbGlkLnNob3cge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxufVxyXG4jc25hY2tiYXJzLnNob3cge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxyXG4gIHRvIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxuICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gIGZyb20ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XHJcbiAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxuICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufVxyXG5cclxuXHJcblxyXG5cclxuLmFsZXJ0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IEdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jYWxlcnRzc3tcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNsb3NlYnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmNsb3NlYnRuOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuYm9keXtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ2LCAyNDQsIDI0MSk7XHJcblxyXG59XHJcbmhyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2YzZjNmO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLnBvcHVwIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG51c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4jcmVke1xyXG4gIGNvbG9yOiByZWQ7XHJcblxyXG59XHJcbiNibHVle1xyXG4gIGNvbG9yOiBibHVlO1xyXG5cclxufVxyXG5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbC1zbS00IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjVweCAwO1xyXG4gIH1cclxuICAuYnRuLWxnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICB9XHJcbiAgLmJ1dHRvbi1ncm91cHtcclxuICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICBtYXJnaW4tcmlnaHQ6MjUlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XHJcbiAgfVxyXG59XHJcbi5uYXZiYXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MyAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLm5hdmJhciBsaSBhLCAubmF2YmFyIC5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhci1uYXYgbGkgYTpob3ZlciwgLm5hdmJhci1uYXYgbGkuYWN0aXZlIGEge1xyXG4gICAgY29sb3I6ICNmNDUxMWUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuLyogVGhlIGFjdHVhbCBwb3B1cCAqL1xyXG4ucG9wdXAgLnBvcHVwdGV4dCB7XHJcbnZpc2liaWxpdHk6IGhpZGRlbjtcclxud2lkdGg6IDE2MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG5jb2xvcjogI2ZmZjtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5ib3JkZXItcmFkaXVzOiA2cHg7XHJcbnBhZGRpbmc6IDhweCAwO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnotaW5kZXg6IDE7XHJcbmJvdHRvbTogMTI1JTtcclxubGVmdDogNTAlO1xyXG5tYXJnaW4tbGVmdDogLTgwcHg7XHJcbn1cclxuXHJcbi8qIFBvcHVwIGFycm93ICovXHJcbi5wb3B1cCAucG9wdXB0ZXh0OjphZnRlciB7XHJcbmNvbnRlbnQ6IFwiXCI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAxMDAlO1xyXG5sZWZ0OiA1MCU7XHJcbm1hcmdpbi1sZWZ0OiAtNXB4O1xyXG5ib3JkZXItd2lkdGg6IDVweDtcclxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuYm9yZGVyLWNvbG9yOiAjNTU1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBUb2dnbGUgdGhpcyBjbGFzcyAtIGhpZGUgYW5kIHNob3cgdGhlIHBvcHVwICovXHJcbi5wb3B1cCAuc2hvdyB7XHJcbnZpc2liaWxpdHk6IHZpc2libGU7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XHJcbmFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG59XHJcblxyXG4vKiBBZGQgYW5pbWF0aW9uIChmYWRlIGluIHRoZSBwb3B1cCkgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbmZyb20ge29wYWNpdHk6IDA7fVxyXG50byB7b3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuZnJvbSB7b3BhY2l0eTogMDt9XHJcbnRvIHtvcGFjaXR5OjEgO31cclxufVxyXG5ib2R5IHtmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjt9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNpemluZzpjb250ZW50LWJveDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbiNkZHtcclxufVxyXG4jYnV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5oMXtcclxuICBjb2xvcjojMTQ3REI5O1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG5cclxufVxyXG4vKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBDZW50ZXIgdGhlIGltYWdlIGFuZCBwb3NpdGlvbiB0aGUgY2xvc2UgYnV0dG9uICovXHJcbi5pbWdjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5pbWcuYXZhdGFyIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbn1cclxuXHJcbnNwYW4ucHN3IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIHRvcDogMDtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQWRkIFpvb20gQW5pbWF0aW9uICovXHJcbi5hbmltYXRlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZXpvb20gMC42cztcclxuICBhbmltYXRpb246IGFuaW1hdGV6b29tIDAuNnNcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV6b29tIHtcclxuICBmcm9tIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCl9XHJcbiAgdG8gey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKX1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlem9vbSB7XHJcbiAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX1cclxuICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgc3Bhbi5wc3cge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuICAuY2FuY2VsYnRuIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b25sb2FkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiBiYWNrZ3JvdW5kICovXHJcbiAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVycyAqL1xyXG4gIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgdGV4dCAqL1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgZm9udC1zaXplOiAxNnB4OyAvKiBTZXQgYSBmb250LXNpemUgKi9cclxufVxyXG5cclxuLyogQWRkIGEgcmlnaHQgbWFyZ2luIHRvIGVhY2ggaWNvbiAqL1xyXG4uZmEge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IC8qIFNhZmFyaSAqL1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7IC8qIElFMTAgKi9cclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luOiAwIC0xNnB4O1xyXG59XHJcblxyXG4uY29sLTI1IHtcclxuICAtbXMtZmxleDogMjUlOyAvKiBJRTEwICovXHJcbiAgZmxleDogMjUlO1xyXG59XHJcblxyXG4uY29sLTUwIHtcclxuICAtbXMtZmxleDogNTAlOyAvKiBJRTEwICovXHJcbiAgZmxleDogNTAlO1xyXG59XHJcblxyXG4uY29sLTc1IHtcclxuICAtbXMtZmxleDogNzUlOyAvKiBJRTEwICovXHJcbiAgZmxleDogNzUlO1xyXG59XHJcblxyXG4uY29sLTI1LFxyXG4uY29sLTUwLFxyXG4uY29sLTc1IHtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIxIHtcclxuICBwYWRkaW5nOiA1cHggMjBweCAxNXB4IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uY29udGFpbmVyMiB7XHJcbiAgcGFkZGluZzogNXB4IDIwcHggMTVweCAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcblxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbi8qIFNhZmFyaSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcbi50aC1zbXtcclxuICBmb250LXNpemU6MWVtO1xyXG59XHJcbi5leHBlbmNlc3MtYnRue1xyXG4gIHdpZHRoOjMwJTtcclxufVxyXG50YWJsZSB7XHJcbi8qICBib3JkZXI6IDFweCBzb2xpZCAjRDlFNEU2O1xyXG4qL1xyXG59XHJcbi5yZXNwb25zdGFibGUgdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQUYzRjM7XHJcbn1cclxuLnJlc3BvbnN0YWJsZSB0aCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzUyNjE7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcbi5yZXNwb25zdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5yZXNwb25zdGFibGUgdGg6bnRoLWNoaWxkKDIpIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcbi5yZXNwb25zdGFibGUgdGg6bnRoLWNoaWxkKDIpIHNwYW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnJlc3BvbnN0YWJsZSB0aDpudGgtY2hpbGQoMik6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aCk7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnJlc3BvbnN0YWJsZSB0aDpudGgtY2hpbGQoMikgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnJlc3BvbnN0YWJsZSB0aDpudGgtY2hpbGQoMik6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuLnJlc3BvbnN0YWJsZSB0ZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG1heC13aWR0aDogN2VtO1xyXG59XHJcbi5yZXNwb25zdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEOUU0RTY7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnJlc3BvbnN0YWJsZSB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDlFNEU2O1xyXG4gIH1cclxufVxyXG4ucmVzcG9uc3RhYmxlIHRoLCAucmVzcG9uc3RhYmxlIHRkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogLjVlbSAxZW07XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnJlc3BvbnN0YWJsZSB0aCwgLnJlc3BvbnN0YWJsZSB0ZCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gIH1cclxufVxyXG4vKlxyXG50cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG50cjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjt9XHJcbiovXHJcbnRoe1xyXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxudGR7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbn1cclxuXHJcbiNtb2RhbC1oZWFkZXJ7XHJcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG5cclxufVxyXG4jbXtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG4ubmF2YmFye1xyXG4gIGhlaWdodDo4MHB4O1xyXG59XHJcbi50b3BuYXYtY2VudGVyZWQgYSB7XHJcbmZsb2F0OiBub25lO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDE5JTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbmZvbnQtc2l6ZTogMi41ZW07XHJcbmZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XHJcblxyXG59XHJcbiNzbDF7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuI2FiYyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuI2FiY2RlIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbiNhYmNkZWYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbiNjYXQge1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuI2NhdGEge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuI2VtcGxveWVlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbiNjIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbiNhYmNkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuI3ZpZXdsb2d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2OTkzMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG59XHJcbiNsbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuI2Z1e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI4JTtcclxufVxyXG4jc2kge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG4jc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2U1MzQ2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuI2xwe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDglO1xyXG59XHJcbiNse1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuXHJcbi8qIEV4dHJhIHN0eWxlcyBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cclxuLmNhbmNlbGJ0biB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi8qIENlbnRlciB0aGUgaW1hZ2UgYW5kIHBvc2l0aW9uIHRoZSBjbG9zZSBidXR0b24gKi9cclxuLmltZ2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjRweCAwIDEycHggMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmltZy5hdmF0YXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5zcGFuLnBzdyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjVweDtcclxuICB0b3A6IDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xyXG4uYW5pbWF0ZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGV6b29tIDAuNnM7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlem9vbSAwLjZzXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlem9vbSB7XHJcbiAgZnJvbSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApfVxyXG4gIHRvIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSl9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXpvb20ge1xyXG4gIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCl9XHJcbiAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIHNwYW4ucHN3IHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgLmNhbmNlbGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi50ZXh0LWxpbmVbX25nY29udGVudC1jMF0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAvKiBjb2xvcjogI2VlZWVlZTsgKi9cclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgIzI1MTgxOCAxcHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxufVxyXG4ucm93IHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDsgLyogSUUxMCAqL1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDAgLTE2cHg7XHJcbn1cclxuXHJcbi5jb2wtMjUge1xyXG4gIC1tcy1mbGV4OiAyNSU7IC8qIElFMTAgKi9cclxuICBmbGV4OiAyNSU7XHJcbn1cclxuXHJcbi5jb2wtNTAge1xyXG4gIC1tcy1mbGV4OiA1MCU7IC8qIElFMTAgKi9cclxuICBmbGV4OiA1MCU7XHJcbn1cclxuXHJcbi5jb2wtNzUge1xyXG4gIC1tcy1mbGV4OiA3NSU7IC8qIElFMTAgKi9cclxuICBmbGV4OiA3NSU7XHJcbn1cclxuXHJcbi5jb2wtMjUsXHJcbi5jb2wtNTAsXHJcbi5jb2wtNzUge1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNXB4IDIwcHggMTVweCAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4IDE1cHggMjBweDtcclxubWFyZ2luLWxlZnQ6IDIlO1xyXG5cclxufVxyXG4uY29udGFpbmVyLW1haW57XHJcbiAgIHBhZGRpbmc6IDVweCAyMHB4IDE1cHggMjBweDtcclxufVxyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogNnB4IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXVtfbmdjb250ZW50LWMwXSwgaW5wdXRbdHlwZT1wYXNzd29yZF1bX25nY29udGVudC1jMF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDZweCAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdW19uZ2NvbnRlbnQtYzBdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXVtfbmdjb250ZW50LWMwXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiNpe1xyXG4gd2lkdGg6IDEwMCU7XHJcbn1cclxuI2FiY2R7XHJcbiB3aWR0aDogNTAlO1xyXG4gYm9yZGVyOiAxcHggc29saWQgIzRDQUY1MDtcclxufVxyXG4jYWJjZGV7XHJcbiB3aWR0aDogNTAlO1xyXG4gYm9yZGVyOiAxcHggc29saWQgIzRDQUY1MDtcclxufVxyXG5cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbiNpZDAxIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2OTkzMztcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB3aWR0aDogMTAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XHJcbiAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgIGJvcmRlci1ib3R0b206IHNvbGlkICNlZWVlZWUgMXB4O1xyXG4gICBwYWRkaW5nOiAzcHggMTBweDtcclxufVxyXG4vKlxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCByZWQgMXB4O1xyXG59Ki9cclxuLnRleHQtbGluZSNidXR0b25zOmhvdmVyIHtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIGNvbG9yOiMwMDAwMDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgcmVkIDFweDtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogQ2VudGVyIHRoZSBpbWFnZSBhbmQgcG9zaXRpb24gdGhlIGNsb3NlIGJ1dHRvbiAqL1xyXG4uaW1nY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW1nLmF2YXRhciB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbnNwYW4ucHN3IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IDUlIGF1dG8gMTUlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCwgMTUlIGZyb20gdGhlIGJvdHRvbSBhbmQgY2VudGVyZWQgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIHRvcDogMDtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQWRkIFpvb20gQW5pbWF0aW9uICovXHJcbi5hbmltYXRlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZXpvb20gMC42cztcclxuICBhbmltYXRpb246IGFuaW1hdGV6b29tIDAuNnNcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV6b29tIHtcclxuICBmcm9tIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCl9XHJcbiAgdG8gey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKX1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlem9vbSB7XHJcbiAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX1cclxuICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgc3Bhbi5wc3cge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuICAuY2FuY2VsYnRuIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbDt9XHJcblxyXG4vKiBTdHlsZSB0aGUgdGFiICovXHJcbi50YWIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIHdpZHRoOjI1JTtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cclxuLnRhYiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xyXG4udGFiIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cclxuLnRhYiBidXR0b24uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgdGFiIGNvbnRlbnQgKi9cclxuLnRhYmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n\n<router-outlet></router-outlet>\n<ng-flash-message></ng-flash-message>\n<!-- Navbar (sit on top) -->\n\n\n\n\n\n\n<div class=\"w3-top  navbar-inverse\">\n  <div class=\"w3-bar w3-white w3-wide w3-padding w3-card\">\n    <a href=\"#home\" class=\"w3-bar-item w3-button\"><b>Weekly</b> List</a>\n    <!-- Float links to the right. Hide them on small screens -->\n    <!--<div class=\"w3-right w3-hide-small\">\n      <a href=\"#projects\" class=\"w3-bar-item w3-button\" onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Submit Report via FTP</a>\n        <a href=\"#about\" class=\"w3-bar-item w3-button\"  onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\"  >Test Report via FTP\n</a>\n      <a href=\"#contact\" class=\"w3-bar-item w3-button\" (click)=\"filedatas()\" >Download File</a>\n    </div> -->\n  </div>\n</div>\n<br>\n\n\n<!-- Header\n<header class=\"w3-display-container w3-content w3-wide\" style=\"max-width:1500px;\" id=\"home\">\n  <img class=\"w3-image\" src=\"/w3images/architect.jpg\" alt=\"Architecture\" width=\"1500\" height=\"800\">\n  <div class=\"w3-display-middle w3-margin-top w3-center\">\n    <h1 class=\"w3-xxlarge w3-text-white\"><span class=\"w3-padding w3-black w3-opacity-min\"><b>BR</b></span> <span class=\"w3-hide-small w3-text-light-grey\">Architects</span></h1>\n  </div>\n</header>-->\n<div class=\"container\" style=\"margin-top:1%;\">\n<h1>Store Information </h1>\n<!-- The Modal -->\n<div class=\"row\" style=\"margin-left:2%;\" >\n  <div class=\"col-75\">\n    <div class=\"container\">\n      <form name=\"validform\" action=\"/action_page.php\">\n\n        <div class=\"row\">\n\n          <div class=\"col-50\">\n            <label for=\"fname\"> Store Name</label>\n            <input type=\"text\" id=\"\" name=\"firstname\" value={{na}} placeholder=\"Store name \">\n\n            <label for=\"email\">Street</label>\n            <input type=\"text\" id=\"email\" value={{address}} name=\"email\" placeholder=\"Street no\">\n            <label for=\"state\">State</label>\n            <input type=\"text\" id=\"state\"value={{state}}   name=\"state\" placeholder=\"NY\">\n\n          </div>\n\n          <div class=\"col-50\">\n            <label for=\"fname\"> Accoount No</label>\n            <input type=\"text\" id=\"fname\"  name=\"firstname\" placeholder=\"Account No \">\n            <label for=\"adr\">City</label>\n\n            <input type=\"text\" id=\"city\"  value={{city}}  name=\"city\" placeholder=\"City\">\n            <label for=\"zip\">Zip</label>\n            <input type=\"text\" id=\"zip\" value={{zip}}  name=\"zip\" placeholder=\"10001\">\n          </div>\n<div  id=\"load\" class=\"loading\">Loading&#8230;Just Wait A Movement</div>\n<div id=\"p\">\n  <p align=\"center\">Just Wait A Movement</p></div>\n        </div>\n\n      </form>\n    </div>\n  </div>\n<div class=\"col-25\">\n  </div>\n</div>\n\n\n<div  style=\"\">\n  <h1>Stores & Departments</h1>\n\n\n  <div id=\"alerts\" class=\"alert\">\n    <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span>\n    <strong>Success!</strong> Reropt transfered successfully....\n  </div>\n  <div id=\"alertss\" class=\"alert\">\n    <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span>\n    <strong>Worn!</strong> Some Thing Went Wrong..\n  </div>\n    <label></label>\n    <select (change)=\"catid($event.target.value)\" class=\"text-line\"   style=\"margin-left:6%;\">\n        <option value=\"0\"> Select Catagory</option>\n        <option *ngFor=\"let summary of categorys\" value={{summary.id}} >\n            {{summary.name}}\n        </option>\n    </select>\n</div>\n<br>\n<h1>Schedule and Report Options</h1>\n<div class=\"row\" style=\"margin-left:2%;\" >\n  <div class=\"col-75\">\n    <div class=\"container\">\n      <form action=\"/action_page.php\">\n        <label for=\"uname\"><b>Week Day to submit Report </b></label>\n        <input type=\"checkbox\" checked=\"checked\" name=\"sameadr\"> Monday\n        <hr style=\"color:#3f3f3f\">\n        <label for=\"uname\"><b>Data Range </b></label>\n        <select (change)=\"catid($event.target.value)\" class=\"text-line\"  id=\"myBtn\" >\n            <option value=\"0\"> Last Week Sun-Sat</option>\n\n        </select>        <hr style=\"color:#3f3f3f\">\n        <div class=\"row\">\n          <div class=\"col-50\">\n<h3 style=\"font-weight:bold;font-size: 1em;\"> Provide Ftp Details</h3>\n            <label for=\"uname\"><b>Server/Host</b></label>\n            <input type=\"text\" value=\"dlptest.com\" name=\"hostname\"   id=\"hostname\"   >\n\n            <label for=\"psw\"><b>UserName</b></label>\n            <input type=\"text\" value=\"dlpuser@dlptest.com\" name=\"user\"   id=\"user\" >\n            <label for=\"psw\"><b>Password</b></label>\n            <input type=\"password\" value=\"5p2tvn92R0di8FdiLCfzeeT0b\" name=\"password\" id=\"password\"   >\n          </div>\n\n          <div class=\"col-50\">\n\n          </div>\n\n        </div>\n\n      </form>\n    </div>\n  </div>\n\n</div>\n<div   id=\"sna\">No Sale Yet....</div>\n\n<div id=\"snackbar\">Report transfered Successfully...</div>\n<div class=\"snackbars\" id=\"snackbars\">Some thing went wrong..</div>\n<div id=\"valid\">Enter Account Number</div>\n\n<div id=\"button-group\">\n<button class=\"text-line button-group\"  id=\"buttons\" (click)=\"shift()\" style=\"width:auto;\">Submit Report via FTP</button> &nbsp;\n<button class=\"text-line button-group\"    id=\"buttons\"(click)=\"shift()\" style=\"width:auto;\"  >Test Report via FTP</button>&nbsp;\n\n<button  class=\"text-line button-group\"  id=\"d\" (click)=\"filedatas()\" style=\"width:auto;\"  >Download File</button> &nbsp;\n<button  class=\"text-line button-group\" (click)=\"valid()\" style=\"width:auto;\"  >View Report</button>\n\n</div>\n<div id=\"id01\" class=\"modal\">\n        <form   id=\"su\" class=\"modal-content animate\" #sata = \"ngForm\"  (ngSubmit) = \"sata.form.valid && shift()\">\n\n    <div class=\"imgcontainer\">\n      <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">&times;</span>\n\n    </div>\n\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n\n      <table  id=\"customers\"class=\"responstable\" width=\"100%\" id=\"m2\"  style=\" \">\n                  <thead class=\"black table-header white-text\" >\n\n\n\n                  <th> clientCreatedTime</th>\n\n                  <th> LineItems </th>\n                  <th>vendor</th>\n\n                  <th> Total Amount </th>\n                  <th > order id</th>\n      <th>Discount amount</th>\n      <th>No of items</th>\n\n                  </thead>\n                  <tbody>\n                <tr  width=\"70%\" *ngFor=\"let s of data\">\n\n\n\n                <td>{{s.orderClientCreatedTime}}</td>\n                <td>{{s.name}}</td>\n                <td>{{s.vendor}}</td>\n\n                <td>{{s.price}}</td>\n                <td>{{s.orderid}}</td>\n                <td>{{s.discoint}}</td>\n                <td>{{s.noofitems}}</td>\n\n\n\n\n                    </tbody>\n                </table>  </div>\n\n\n  </form>\n</div>\n</div>\n\n<div id=\"myModal\" class=\"modal\">\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <span class=\"close\">&times;</span>\n    <table  id=\"customers\"class=\"responstable\" width=\"100%\" id=\"m2\"  style=\" \">\n                <thead class=\"black table-header white-text\" >\n\n\n\n                <th> clientCreatedTime</th>\n\n                <th> LineItems </th>\n                <th>vendor</th>\n\n                <th> Total Amount </th>\n                <th > order id</th>\n    <th>Discount amount</th>\n    <th>No of items</th>\n\n                </thead>\n                <tbody>\n              <tr  width=\"70%\" *ngFor=\"let s of data\">\n\n\n\n              <td>{{s.orderClientCreatedTime}}</td>\n              <td>{{s.name}}</td>\n              <td>{{s.vendor}}</td>\n\n              <td>{{s.price}}</td>\n              <td>{{s.orderid}}</td>\n              <td>{{s.discoint}}</td>\n              <td>{{s.noofitems}}</td>\n\n\n\n\n                  </tbody>\n              </table>  </div>\n\n</div>\n"

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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






var AppComponent = /** @class */ (function () {
    function AppComponent(ngFlashMessageService, http, modalService, _FileSaverService) {
        this.ngFlashMessageService = ngFlashMessageService;
        this.http = http;
        this.modalService = modalService;
        this._FileSaverService = _FileSaverService;
        this.data = [];
        this.final = [];
        this.finalre = [];
        this.dk = [];
        this.count = 0;
        this.filedata = [];
        this.discount = 0;
        this.id = [];
        this.totalamount = 0;
        this.da = 0;
        this.fd = "";
        this.shift = function () {
            var s = document.getElementById("fname").value;
            console.log(s);
            if (s == "") {
                console.log("ss");
                var x = document.getElementById("valid");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
            }
            else {
                var hostname = document.getElementById("hostname").value;
                console.log(hostname);
                var user = document.getElementById("user").value;
                var password = document.getElementById("password").value;
                var url = 'https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/ftpconnect';
                var body = {
                    "ftphostname": hostname,
                    "user": user,
                    "password": password,
                    "data": this.ftpdata
                };
                console.log(body);
                this.http.post(url, body).subscribe(function (res) {
                    console.log(JSON.stringify(res.json()));
                    var s = JSON.stringify(res.json());
                    if (res.json() == "successfully uploaded..") {
                        var x = document.getElementById("snackbar");
                        x.className = "show";
                        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                    }
                    else if (s == "null") {
                        console.log("sderf");
                        var x = document.getElementById("snackbars");
                        x.className = "show";
                        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                    }
                });
            }
        };
        this.catid = function (id) {
            var _this = this;
            document.getElementById("load").hidden = false;
            document.getElementById("p").hidden = false;
            var count = 0;
            var todayurl = '  https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/category';
            var body = {
                "catid": id
            };
            this.http.post(todayurl, body).subscribe(function (res) {
                console.log(res.json());
                _this.category = res.json().elements;
                console.log(_this.category);
                for (var i in _this.category) {
                    console.log(_this.category[i].name);
                    _this.name = _this.category[i].name;
                    _this.id = _this.category[i].id;
                    _this.price = _this.category[i].price;
                    _this.code = _this.category[i].code;
                    _this.sku = _this.category[i].sku;
                    var d = {
                        "name": _this.name
                    };
                    console.log(d);
                    var vendor = 'https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/clovervendordetails';
                    _this.http.post(vendor, d).subscribe(function (res) {
                        console.log(res.json());
                        var kk = res.json();
                        _this.vendor = kk[0].vendors;
                        console.log(_this.vendor);
                    });
                    console.log(_this.id);
                    var firstDay = new Date();
                    _this.previousweek = new Date(firstDay.getTime() - 7 * 24 * 60 * 60 * 1000);
                    console.log(_this.previousweek * 1);
                    var ti = _this.previousweek * 1;
                    _this.time = ti.toString();
                    var ddd = {
                        "time": _this.time,
                        "item": _this.id
                    };
                    console.log(ddd);
                    var vendor = 'https://fsv6qsiyg1.execute-api.us-west-2.amazonaws.com/PROD/discountsget';
                    _this.http.post(vendor, ddd).subscribe(function (res) {
                        var dis = "";
                        console.log(res.json());
                        for (var k in res.json()) {
                            var amount;
                            var it = res.json()[k].clientCreatedTime;
                            var jk = new Date(it);
                            console.log(jk);
                            amount = res.json()[k].amount;
                            _this.totalamount += res.json()[k].itemscount;
                            _this.da += _this.price;
                            if (res.json()[k].amount == 0) {
                                dis = "N";
                                amount = "";
                            }
                            else {
                                dis = "Y";
                            }
                            var dd = new Date(jk);
                            console.log(dd);
                            var s = dd.toString();
                            console.log(s);
                            var ol = s.replace("GMT+0530 (India Standard Time)", "");
                            console.log(ol);
                            var sks = ol.split(" ");
                            console.log(sks[2]);
                            console.log(sks[3]);
                            console.log(sks[4]);
                            var time = sks[4];
                            console.log(time);
                            var day = sks[2];
                            var year = sks[3];
                            var fd = {
                                "orderClientCreatedTime": ol,
                                "name": _this.category[i].name,
                                "price": _this.category[i].price,
                                "orderid": res.json()[k].orderid,
                                "discoint": dis,
                                "noofitems": res.json()[k].itemscount,
                                "vendor": _this.vendor
                            };
                            var month = new Date(ti).getMonth() + 1;
                            // this.accountnumber=(<HTMLInputElement>document.getElementById("firstname")).value ;
                            var data = "798965|" +
                                +year + "0" + month + day + "|" +
                                +year + "0" + month + day + "|" + time + "|" +
                                res.json()[k].orderid + "|" +
                                "95682" + "|" +
                                _this.na + "|" +
                                _this.address + "|" +
                                _this.city + "|" +
                                _this.state + "|" +
                                _this.zip + "|" +
                                "cigarette" + "|" +
                                _this.vendor + "|" +
                                _this.code + "|" + _this.sku + "|" + _this.name + "|" + "|" + "|" + res.json()[k].itemscount +
                                "|" + dis + "|" + "|" +
                                amount + "|" +
                                "|" + "|" + "|" +
                                "|" + "|" + "|" + "|" + "|" +
                                _this.price + "|" +
                                "|" +
                                "|" +
                                "|" +
                                "|" + "|";
                            console.log(fd);
                            _this.data.push(fd);
                            _this.filedata.push(data);
                            _this.ftpdata = data;
                            console.log(_this.filedata);
                            if (_this.filedata.length != 0) {
                                document.getElementById("load").hidden = true;
                                document.getElementById("p").hidden = true;
                            }
                        }
                    });
                    /*
                    if(name==name)
                    {
                      count++;
                    }
                    var firstDay = new Date();
                    this.previousweek= new Date(firstDay.getTime() - 7 * 24 * 60 * 60 * 1000);
                    console.log(this.previousweek*1)
                    this.time=this.previousweek*1
                    var todayurls=' https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/ooapi'
                    var d={
                      "time":this.time
                    }
                    var ddd={
                      "name":this.name
                    }
                    console.log(d)
                    
                    var vendor='https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/clovervendordetails'
                    
                    this.http.post(vendor,ddd).subscribe(
                      (res:Response) =>{
                    
                    console.log(res.json())
                    var kk=res.json()
                    this.vendor=kk[0].vendors
                    console.log(this.vendor)
                    this.http.post(todayurls,d).subscribe(
                      (res:Response) =>{
                    this.links=res.json()
                    this.dk=res.json().elements
                    console.log(this.dk)
                    for(var i in this.dk)
                    {var dis="";
                    var dis="";
                     this.totalamount+=parseInt(this.price)
                    
                    var count=0;
                    var dd=this.dk[i].id
                    console.log(dd)
                    
                    for(var j in this.dk[i].lineItems.elements)
                    {
                    if(this.dk[i].lineItems.elements[j].item.id==this.id)
                    count++;
                    }
                    console.log(count)
                    var todayurlsss='https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/discount'
                    var d={
                      "orderid":dd
                    }
                      var dis="";
                    console.log(d)
                    this.http.post(todayurlsss,d).subscribe(
                      (res:Response) =>{
                    
                    
                    console.log(res.json())
                    
                    
                    console.log(new Date(this.dk[i].clientCreatedTime))
                    
                    this.link=res.json()
                    console.log(this.link)
                    console.log( this.link.href.split("/"))
                    var oid=this.link.href.split("/");
                    var ooid=oid[7]
                    console.log(ooid)
                    if(this.link.elements.length==0)
                    {
                      console.log("sss")
                      dis="N"
                      this.discount=0
                    }
                    
                    
                    else{
                      dis="Y"
                      var price =parseInt(this.price)
                      var amount=parseInt(this.link.elements[0].percentage)/100;
                      this.discount=price*amount
                      console.log(this.discount)
                      this.da+=this.discount
                    }
                    
                    var dd=new Date(this.dk[i].clientCreatedTime)
                    console.log(dd)
                    var s=dd.toString()
                    console.log(s)
                    var ol=s.replace("GMT+0530 (India Standard Time)","")
                    console.log(ol)
                    var sks=ol.split(" ")
                    console.log(sks[2])
                    console.log(sks[3])
                    console.log(sks[4])
                    var time=sks[4]
                    console.log(time)
                    var day=sks[2]
                    var year=sks[3]
                    var fd={
                    "orderClientCreatedTime":ol,
                    "name":this.dk[i].name,
                    "price":this.dk[i].price,
                    "orderid":this.dk[i].id,
                    "discoint":dis,
                    "noofitems":count,
                    "vendor":this.vendor
                    
                    
                    }
                    var month=new Date(this.dk[i].clientCreatedTime).getMonth()+1;
                    
                    // this.accountnumber=(<HTMLInputElement>document.getElementById("firstname")).value ;
                    
                    var data = "798965|" +
                         + year + "0"+month + day + "|" +
                         + year + "0"+month + day + "|"+time +"|"+
                         this.dk[i].id + "|" +
                    
                          "95682"+"|"+
                          this.name + "|" +
                         this.address+"|"+
                          this.city + "|" +
                          this.state + "|" +
                    
                          this.zip + "|" +"|"+
                          "cigarette"+ "|" +
                          this.vendor + "|" +
                                this.code+"|"+this.sku+"|"+this.name+"|"+"|"+"|"+count+
                                "|"+dis+"|"+"|"+
                                this.discount+"|"+
                                "|"+"|"+"|"+
                                 "|"+"|"+"|"+"|"+
                                 this.price + "|" +
                    
                         "|" +
                          "|" +
                          "|" +
                    
                        "|" + "|"
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    console.log(fd)
                    this.data.push(fd)
                    this.filedata.push(data)
                    this.ftpdata=data
                    
                    
                    console.log(this.filedata)
                    
                    if(this.filedata.length!=0)
                    {
                      (<HTMLInputElement>document.getElementById("load")).hidden = true;
                      (<HTMLInputElement>document.getElementById("p")).hidden = true;
                    
                    }
                    })
                    
                    
                    }
                    //================================================================================================================
                    /*for(var i in this.dk)
                    {
                      var dis="";
                       this.totalamount+=parseInt(this.price)
                    
                      var count=0;
                      var dd=this.dk[i].id
                      console.log(dd)
                    
                    for(var j in this.dk[i].lineItems.elements)
                    {
                      if(this.dk[i].lineItems.elements[j].item.id==this.id)
                    count++;
                    }
                    console.log(count)
                      var todayurlsss='https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/discount'
                      var d={
                        "orderid":dd
                      }
                        var dis="";
                      console.log(d)
                      this.http.post(todayurlsss,d).subscribe(
                        (res:Response) =>{
                    
                    
                      console.log(res.json())
                    
                    this.link=res.json()
                    
                    var oid=this.link.href.split("/");
                    var ooid=oid[7]
                    console.log(ooid)
                    
                    if(this.link.elements.length==0)
                     {       dis="N";
                    
                       console.log("sss")
                       this.discount=0
                       console.log(dis)
                       this.fd=dis
                     }
                    
                    
                     else{
                       console.log("ssselse")
                       dis="Y";
                       console.log(dis)
                    this.fd=dis
                    var price =parseInt(this.price)
                    var amount=parseInt(this.link.elements[0].percentage)/100;
                    this.discount=price*amount
                    console.log(this.discount)
                    this.da+=this.discount
                     for (var i in this.link.elements)
                       {
                         console.log(this.link.elements[i].lineItemRef.id)
                         if(this.link.elements[i].lineItemRef.id==this.id)
                         {
                    
                           var price =parseInt(this.price)
                           var amount=parseInt(this.link.elements[i].percentage)/100;
                           this.discount=price*amount
                           console.log(this.discount)
                           this.da+=this.discount
                         }
                       }
                    
                     }
                    
                    
                    
                    })
                    
                    console.log(this.fd)
                    this.dd=new Date(this.dk[i].clientCreatedTime)
                    console.log(this.dd)
                    var s=this.dd.toString()
                    console.log(s)
                    var ol=s.replace("GMT+0530 (India Standard Time)","")
                    console.log(ol)
                    var sks=ol.split(" ")
                    console.log(sks[2])
                    console.log(sks[3])
                    console.log(sks[4])
                    var time=sks[4]
                    console.log(time)
                    var day=sks[2]
                    var year=sks[3]
                    var fd={
                    "orderClientCreatedTime":ol,
                    "name":this.name,
                    "price":this.price,
                    "orderid":this.id,
                    "discoint":this.fd,
                    "noofitems":count,
                    "vendor":this.vendor
                    
                    
                    }
                    console.log(fd)
                    var month=new Date(this.dk[i].clientCreatedTime).getMonth()+1;
                    
                    // this.accountnumber=(<HTMLInputElement>document.getElementById("firstname")).value ;
                    
                    
                    var data = "798965|" +
                         + year + "0"+month + day + "|" +
                         + year + "0"+month + day + "|"+time +"|"+
                         this.dk[i].id + "|" +
                    
                          "95682"+"|"+
                          this.name + "|" +
                         this.address+"|"+
                          this.city + "|" +
                          this.state + "|" +
                    
                          this.zip + "|" +"|"+
                          "cigarette"+ "|" +
                          this.vendor + "|" +
                                this.code+"|"+this.sku+"|"+this.name+"|"+"|"+"|"+count+
                                "|"+this.fd+"|"+"|"+
                                this.discount+"|"+
                                "|"+"|"+"|"+
                                 "|"+"|"+"|"+"|"+
                                 this.price + "|" +
                    
                         "|" +
                          "|" +
                          "|" +
                    
                        "|" + "|"
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    console.log(fd)
                    this.data.push(fd)
                    this.filedata.push(data)
                    this.ftpdata=data
                    
                    
                    console.log(this.filedata)
                    
                    if(this.filedata.length!=0)
                    {
                      (<HTMLInputElement>document.getElementById("load")).hidden = true;
                      (<HTMLInputElement>document.getElementById("p")).hidden = true;
                    
                    }
                    
                    
                    
                    
                    
                    
                    }
                    
                    })
                    })
                    
                    
                    */
                } //forloop
            });
        };
        this.filedatas = function () {
            var s = document.getElementById("fname").value;
            console.log(s);
            if (s == "") {
                console.log("ss");
                var x = document.getElementById("valid");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
            }
            else {
                var dd = new Date();
                console.log(dd);
                var s = dd.toString();
                console.log(s);
                var ol = s.replace("GMT+0530 (India Standard Time)", "");
                console.log(ol);
                var sks = ol.split(" ");
                console.log(sks[2]);
                console.log(sks[3]);
                console.log(sks[4]);
                var time = sks[4];
                console.log(time);
                var day = sks[2];
                var year = sks[3];
                var month = new Date().getMonth() + 1;
                //(<HTMLInputElement>document.getElementById("d")).hidden = true;
                console.log(this.filedata.join('\n'));
                var link = this.filedata.join('\n');
                var count = 100;
                var p = 5.26;
                var textFileAsBlob = new Blob(["" + this.filedata.length + "|" + this.totalamount + "|" + this.da, '\n', link], { type: 'text/plain' });
                var fileNameToSaveAs = "" + this.na + "_568953_" + year + month + day + ".txt";
                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs;
                downloadLink.innerHTML = "Download File";
                if (webkitURL != null) {
                    downloadLink.href = webkitURL.createObjectURL(textFileAsBlob);
                }
                else {
                    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                    //	downloadLink.onclick = destroyClickedElement;
                    downloadLink.style.display = "none";
                    document.body.appendChild(downloadLink);
                }
                downloadLink.click();
            }
        };
        this.catalog = function () {
            var _this = this;
            var todayurl = 'https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/category';
            this.http.get(todayurl).subscribe(function (res) {
                console.log(res.json());
                _this.categorys = res.json().elements;
                console.log(_this.categorys);
            });
        };
        this.storedetailsof = function () {
            var _this = this;
            var storeurl = 'https://pb6rbw39d1.execute-api.us-west-2.amazonaws.com/V1/storedetails';
            this.http.get(storeurl).subscribe(function (res) {
                console.log(res.json());
                _this.storedetails = res.json();
                console.log(_this.storedetails);
                _this.state = _this.storedetails.body.state;
                _this.zip = _this.storedetails.body.zip;
                _this.country = _this.storedetails.body.country;
                _this.address = _this.storedetails.body.address1;
                _this.na = _this.storedetails.storename;
                _this.city = _this.storedetails.body.city;
                console.log(_this.na);
            });
        };
    }
    AppComponent.prototype.valid = function () {
        var s = document.getElementById("fname").value;
        console.log(s);
        if (s == "") {
            console.log("ss");
            var x = document.getElementById("valid");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
        }
        else {
            document.getElementById('id01').style.display = 'block';
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        document.getElementById("p").hidden = true;
        document.getElementById("alerts").hidden = true;
        document.getElementById("alertss").hidden = true;
        document.getElementById("load").hidden = true;
        var a = [1, 2, 3, 4, 5, 6];
        console.log(a.join('\n'));
        this.storedetailsof();
        this.catalog();
        var query = window.location.search.substring(1);
        console.log(query);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_4__["FileSaverService"]])
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_9__);










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_filesaver__WEBPACK_IMPORTED_MODULE_8__["FileSaverModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_9__["NgFlashMessagesModule"].forRoot()
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /home/atsuser4/Desktop/foo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map