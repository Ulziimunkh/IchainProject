(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./models/user.model.js":
/*!******************************!*\
  !*** ./models/user.model.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/browser.js");
var crypto = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");
var jwt = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");

var UserSchema = new mongoose.Schema({
  firstName: {
    type:String,
    required:true,
    trim:true
  },
  lastName:{
    type:String,
    required:true,
    trim:true
  },
  privateKey:{
    type:String,
    required:true,
    trim:false
  },
  publicKey:{
    type:String,
    required:true,
    trim:false
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  hash: String,
  salt: String,
  isActive:{type:Boolean, default:1},
  createdDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now }
});

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

var User = mongoose.model('User', UserSchema);

module.exports = User;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./services/blockchain.service.ts":
/*!****************************************!*\
  !*** ./services/blockchain.service.ts ***!
  \****************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockchainService = /** @class */ (function () {
    function BlockchainService() {
    }
    BlockchainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockchainService);
    return BlockchainService;
}());



/***/ }),

/***/ "./services/util.service.ts":
/*!**********************************!*\
  !*** ./services/util.service.ts ***!
  \**********************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.prototype.currentDate = function () {
        var ndate = new Date();
        return ndate;
    };
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

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

/***/ "./src/app/_directives/alert/alert.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_directives/alert/alert.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19kaXJlY3RpdmVzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_directives/alert/alert.component.html":
/*!********************************************************!*\
  !*** ./src/app/_directives/alert/alert.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\n"

/***/ }),

/***/ "./src/app/_directives/alert/alert.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_directives/alert/alert.component.ts ***!
  \******************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/_directives/alert/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.model */ "./models/user.model.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_models_user_model__WEBPACK_IMPORTED_MODULE_5__);






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.get('/user/login/' + email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var tmp;
            tmp = data;
            // login successful if there's a jwt token in the response
            console.log('login-->' + tmp);
            if (data) {
                var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]({
                    firstName: tmp.firstName,
                    lastName: tmp.lastName,
                    email: tmp.email,
                    hash: tmp.hash,
                    salt: tmp.salt
                });
                console.log('pass:' + password);
                console.log('pass valid:' + user.validPassword(password));
                if (user.validPassword(password)) {
                    console.log('login successfully');
                    _this.currentUserSubject.next(user);
                    return user;
                }
                else {
                    console.log('Email or password is wrong');
                }
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //localStorage.setItem('currentUser', JSON.stringify(user));
            }
            else {
                console.log('user not found');
            }
            return null;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService, AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/_services/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]; });







/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.selectedUser = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    UserService.prototype.getAll = function () {
        return this.http.get("/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get("/users/" + id);
    };
    UserService.prototype.register = function (user) {
        console.log('user Data ===>', user);
        return this.http.post("/user/register", user, this.noAuthHeader);
    };
    UserService.prototype.login = function (authCredentials) {
        return this.http.post('/user/auth', authCredentials, this.noAuthHeader);
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get('/user/home');
    };
    UserService.prototype.update = function (user) {
        return this.http.put("/user/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete("/user/" + id);
    };
    //Helper Methods
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    };
    UserService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Ichain';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/util.service */ "./services/util.service.ts");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/blockchain.service */ "./services/blockchain.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/transaction-list/transaction-list.component */ "./src/app/pages/transaction-list/transaction-list.component.ts");
/* harmony import */ var _pages_create_info_create_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/create-info/create-info.component */ "./src/app/pages/create-info/create-info.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/signin/signin.component */ "./src/app/pages/signin/signin.component.ts");
/* harmony import */ var _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./startpage/startpage.component */ "./src/app/startpage/startpage.component.ts");
/* harmony import */ var _pages_user_list_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/user/list/userlist/userlist.component */ "./src/app/pages/user/list/userlist/userlist.component.ts");
/* harmony import */ var _templates_navigation_temp_navigation_temp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./templates/navigation-temp/navigation-temp.component */ "./src/app/templates/navigation-temp/navigation-temp.component.ts");
/* harmony import */ var _pages_contracts_chain_info_chain_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/contracts/chain-info/chain-info.component */ "./src/app/pages/contracts/chain-info/chain-info.component.ts");
/* harmony import */ var _pages_whoweare_about_about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/whoweare/about/about/about.component */ "./src/app/pages/whoweare/about/about/about.component.ts");
/* harmony import */ var _pages_whoweare_contactus_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/whoweare/contactus/contactus/contactus.component */ "./src/app/pages/whoweare/contactus/contactus/contactus.component.ts");
/* harmony import */ var _pages_organization_organization_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/organization/organization.component */ "./src/app/pages/organization/organization.component.ts");
/* harmony import */ var _pages_organization_list_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/organization/list/organization-list/organization-list.component */ "./src/app/pages/organization/list/organization-list/organization-list.component.ts");
/* harmony import */ var _pages_doctor_register_doctor_register_doctor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/doctor/register-doctor/register-doctor.component */ "./src/app/pages/doctor/register-doctor/register-doctor.component.ts");
/* harmony import */ var _pages_doctor_list_doctor_list_doctor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/doctor/list-doctor/list-doctor.component */ "./src/app/pages/doctor/list-doctor/list-doctor.component.ts");
/* harmony import */ var _directives_alert_alert_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_directives/alert/alert.component */ "./src/app/_directives/alert/alert.component.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_services/index */ "./src/app/_services/index.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_upload_document_upload_document_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/upload-document/upload-document.component */ "./src/app/pages/upload-document/upload-document.component.ts");







// components





















//other




var appRoutes = [
    {
        path: '',
        component: _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_16__["StartpageComponent"]
    },
    {
        path: 'about',
        component: _pages_whoweare_about_about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"]
    },
    {
        path: 'contact',
        component: _pages_whoweare_contactus_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_21__["ContactusComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'data-entry',
        component: _pages_create_info_create_info_component__WEBPACK_IMPORTED_MODULE_11__["CreateInfoComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'sign-up',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"]
    },
    {
        path: 'sign-in',
        component: _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_15__["SigninComponent"]
    },
    {
        path: 'userList',
        component: _pages_user_list_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_17__["UserlistComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'organizations',
        component: _pages_organization_list_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_23__["OrganizationListComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'orgEntry',
        component: _pages_organization_organization_component__WEBPACK_IMPORTED_MODULE_22__["OrganizationComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'chainInfo',
        component: _pages_contracts_chain_info_chain_info_component__WEBPACK_IMPORTED_MODULE_19__["ChainInfoComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
        path: 'registerDoctor',
        component: _pages_doctor_register_doctor_register_doctor_component__WEBPACK_IMPORTED_MODULE_24__["RegisterDoctorComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
        path: 'doctorList',
        component: _pages_doctor_list_doctor_list_doctor_component__WEBPACK_IMPORTED_MODULE_25__["ListDoctorComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'uploadDocument',
        component: _pages_upload_document_upload_document_component__WEBPACK_IMPORTED_MODULE_31__["UploadDocumentComponent"]
    },
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileSelectDirective"],
                _pages_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_10__["TransactionListComponent"],
                _pages_create_info_create_info_component__WEBPACK_IMPORTED_MODULE_11__["CreateInfoComponent"],
                _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
                _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_15__["SigninComponent"],
                _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_16__["StartpageComponent"],
                _pages_user_list_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_17__["UserlistComponent"],
                _templates_navigation_temp_navigation_temp_component__WEBPACK_IMPORTED_MODULE_18__["NavigationTempComponent"],
                _pages_contracts_chain_info_chain_info_component__WEBPACK_IMPORTED_MODULE_19__["ChainInfoComponent"],
                _pages_whoweare_about_about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                _pages_whoweare_contactus_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_21__["ContactusComponent"],
                _pages_organization_organization_component__WEBPACK_IMPORTED_MODULE_22__["OrganizationComponent"],
                _pages_organization_list_organization_list_organization_list_component__WEBPACK_IMPORTED_MODULE_23__["OrganizationListComponent"],
                _pages_doctor_register_doctor_register_doctor_component__WEBPACK_IMPORTED_MODULE_24__["RegisterDoctorComponent"],
                _pages_doctor_list_doctor_list_doctor_component__WEBPACK_IMPORTED_MODULE_25__["ListDoctorComponent"],
                _directives_alert_alert_component__WEBPACK_IMPORTED_MODULE_26__["AlertComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
                _pages_upload_document_upload_document_component__WEBPACK_IMPORTED_MODULE_31__["UploadDocumentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_29__["AuthInterceptor"],
                    multi: true
                }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"], _services_index__WEBPACK_IMPORTED_MODULE_27__["UserService"], _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"], _services_blockchain_service__WEBPACK_IMPORTED_MODULE_8__["BlockchainService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/sign-in');
            this.userService.deleteToken();
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/sign-in');
                }
            }));
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navigation-temp></app-navigation-temp>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.userDetails = this.userService.selectedUser;
    };
    HomeComponent.prototype.logout = function () {
        this.userService.deleteToken();
        this.router.navigate(['']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/contracts/chain-info/chain-info.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/contracts/chain-info/chain-info.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-top: 20px;\n}\n\n.align-center, .center {\n    text-align: center!important;\n}\n\n.profile-user-info {\n    margin-top: 20px;\n    display: table;\n    width: 98%;\n    width: calc(100% - 24px);\n    margin: 0 auto\n}\n\n.profile-info-row {\n    display: table-row\n}\n\n.profile-info-name,\n.profile-info-value {\n    display: table-cell;\n    border-top: 1px dotted #D5E4F1\n}\n\n.profile-info-name {\n    text-align: right;\n    padding: 6px 10px 6px 4px;\n    font-weight: 400;\n    color: #667E99;\n    background-color: transparent;\n    width: 110px;\n    vertical-align: middle\n}\n\n.profile-info-value {\n    padding: 6px 4px 6px 6px\n}\n\n.profile-info-value>span+span:before {\n    display: inline;\n    content: \",\";\n    margin-left: 1px;\n    margin-right: 3px;\n    color: #666;\n    border-bottom: 1px solid #FFF\n}\n\n.profile-info-value>span+span.editable-container:before {\n    display: none\n}\n\n.profile-info-row:first-child .profile-info-name,\n.profile-info-row:first-child .profile-info-value {\n    border-top: none\n}\n\n.profile-user-info-striped {\n    border: 1px solid #DCEBF7\n}\n\n.profile-user-info-striped .profile-info-name {\n    color: #336199;\n    background-color: #EDF3F4;\n    border-top: 1px solid #F7FBFF\n}\n\n.profile-user-info-striped .profile-info-value {\n    border-top: 1px dotted #DCEBF7;\n    padding-left: 12px\n}\n\n.profile-picture {\n    border: 1px solid #CCC;\n    background-color: #FFF;\n    padding: 4px;\n    display: inline-block;\n    max-width: 100%;\n    box-sizing: border-box;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, .15)\n}\n\n.dd-empty,\n.dd-handle,\n.dd-placeholder,\n.dd2-content {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box\n}\n\n.profile-activity {\n    padding: 10px 4px;\n    border-bottom: 1px dotted #D0D8E0;\n    position: relative;\n    border-left: 1px dotted #FFF;\n    border-right: 1px dotted #FFF\n}\n\n.profile-activity:first-child {\n    border-top: 1px dotted transparent\n}\n\n.profile-activity:first-child:hover {\n    border-top-color: #D0D8E0\n}\n\n.profile-activity:hover {\n    background-color: #F4F9FD;\n    border-left: 1px dotted #D0D8E0;\n    border-right: 1px dotted #D0D8E0\n}\n\n.profile-activity img {\n    border: 2px solid #C9D6E5;\n    border-radius: 100%;\n    max-width: 40px;\n    margin-right: 10px;\n    margin-left: 0;\n    box-shadow: none\n}\n\n.profile-activity .thumbicon {\n    background-color: #74ABD7;\n    display: inline-block;\n    border-radius: 100%;\n    width: 38px;\n    height: 38px;\n    color: #FFF;\n    font-size: 18px;\n    text-align: center;\n    line-height: 38px;\n    margin-right: 10px;\n    margin-left: 0;\n    text-shadow: none!important\n}\n\n.profile-activity .time {\n    display: block;\n    margin-top: 4px;\n    color: #777\n}\n\n.profile-activity a.user {\n    font-weight: 700;\n    color: #9585BF\n}\n\n.profile-activity .tools {\n    position: absolute;\n    right: 12px;\n    bottom: 8px;\n    display: none\n}\n\n.profile-activity:hover .tools {\n    display: block\n}\n\n.user-profile .ace-thumbnails li {\n    border: 1px solid #CCC;\n    padding: 3px;\n    margin: 6px\n}\n\n.user-profile .ace-thumbnails li .tools {\n    left: 3px;\n    right: 3px\n}\n\n.user-profile .ace-thumbnails li:hover .tools {\n    bottom: 3px\n}\n\n.user-title-label:hover {\n    text-decoration: none\n}\n\n.user-title-label+.dropdown-menu {\n    margin-left: -12px\n}\n\n.profile-contact-links {\n    padding: 4px 2px 5px;\n    border: 1px solid #E0E2E5;\n    background-color: #F8FAFC\n}\n\n.btn-link:hover .ace-icon {\n    text-decoration: none!important\n}\n\n.profile-social-links>a:hover>.ace-icon,\n.profile-users .memberdiv .name a:hover .ace-icon,\n.profile-users .memberdiv .tools>a:hover {\n    text-decoration: none\n}\n\n.profile-social-links>a {\n    text-decoration: none;\n    margin: 0 1px\n}\n\n.profile-skills .progress {\n    height: 26px;\n    margin-bottom: 2px;\n    background-color: transparent\n}\n\n.profile-skills .progress .progress-bar {\n    line-height: 26px;\n    font-size: 13px;\n    font-weight: 700;\n    font-family: \"Open Sans\";\n    padding: 0 8px\n}\n\n.profile-users .user {\n    display: block;\n    position: static;\n    text-align: center;\n    width: auto\n}\n\n.profile-users .user img {\n    padding: 2px;\n    border-radius: 100%;\n    border: 1px solid #AAA;\n    max-width: none;\n    width: 64px;\n    transition: all .1s\n}\n\n.profile-users .user img:hover {\n    box-shadow: 0 0 1px 1px rgba(0, 0, 0, .33)\n}\n\n.profile-users .memberdiv {\n    background-color: #FFF;\n    width: 100px;\n    box-sizing: border-box;\n    border: none;\n    text-align: center;\n    margin: 0 8px 24px\n}\n\n.profile-users .memberdiv .body {\n    display: inline-block;\n    margin: 8px 0 0\n}\n\n.profile-users .memberdiv .popover {\n    visibility: hidden;\n    min-width: 0;\n    max-height: 0;\n    max-width: 0;\n    margin-left: 0;\n    margin-right: 0;\n    top: -5%;\n    left: auto;\n    right: auto;\n    opacity: 0;\n    display: none;\n    position: absolute;\n    transition: opacity .2s linear 0s, visibility 0s linear .2s, max-height 0s linear .2s, max-width 0s linear .2s, min-width 0s linear .2s\n}\n\n.profile-users .memberdiv .popover.right {\n    left: 100%;\n    right: auto;\n    display: block\n}\n\n.profile-users .memberdiv .popover.left {\n    left: auto;\n    right: 100%;\n    display: block\n}\n\n.profile-users .memberdiv>:first-child:hover .popover {\n    visibility: visible;\n    opacity: 1;\n    z-index: 1060;\n    max-height: 250px;\n    max-width: 250px;\n    min-width: 150px;\n    transition-delay: 0s\n}\n\n.profile-users .memberdiv .tools {\n    position: static;\n    display: block;\n    width: 100%;\n    margin-top: 2px\n}\n\n.profile-users .memberdiv .tools>a {\n    margin: 0 2px\n}\n\n.user-status {\n    display: inline-block;\n    width: 11px;\n    height: 11px;\n    background-color: #FFF;\n    border: 3px solid #AAA;\n    border-radius: 100%;\n    vertical-align: middle;\n    margin-right: 1px\n}\n\n.user-status.status-online {\n    border-color: #8AC16C\n}\n\n.user-status.status-busy {\n    border-color: #E07F69\n}\n\n.user-status.status-idle {\n    border-color: #FFB752\n}\n\n.tab-content.profile-edit-tab-content {\n    border: 1px solid #DDD;\n    padding: 8px 32px 32px;\n    box-shadow: 1px 1px 0 0 rgba(0, 0, 0, .2);\n    background-color: #FFF\n}\n\n@media only screen and (max-width:480px) {\n    .profile-info-name {\n        width: 80px\n    }\n    .profile-user-info-striped .profile-info-name {\n        float: none;\n        width: auto;\n        text-align: left;\n        padding: 6px 4px 6px 10px;\n        display: block\n    }\n    .profile-user-info-striped .profile-info-value {\n        margin-left: 10px;\n        display: block\n    }\n    .user-profile .memberdiv {\n        width: 50%;\n        margin-left: 0;\n        margin-right: 0\n    }\n}\n\n.itemdiv {\n    padding-right: 3px;\n    min-height: 66px\n}\n\n.itemdiv>.user {\n    display: inline-block;\n    width: 42px;\n    position: absolute;\n    left: 0\n}\n\n.itemdiv>.user>.img,\n.itemdiv>.user>img {\n    border-radius: 100%;\n    border: 2px solid #5293C4;\n    max-width: 40px;\n    position: relative\n}\n\n.itemdiv>.user>.img {\n    padding: 2px\n}\n\n.itemdiv>.body {\n    width: auto;\n    margin-left: 50px;\n    margin-right: 12px;\n    position: relative\n}\n\n.itemdiv>.body>.time {\n    display: block;\n    font-size: 11px;\n    font-weight: 700;\n    color: #666;\n    position: absolute;\n    right: 9px;\n    top: 0\n}\n\n.itemdiv>.body>.time .ace-icon {\n    font-size: 14px;\n    font-weight: 400\n}\n\n.itemdiv>.body>.name {\n    display: block;\n    color: #999\n}\n\n.itemdiv>.body>.name>b {\n    color: #777\n}\n\n.itemdiv>.body>.text {\n    display: block;\n    position: relative;\n    margin-top: 2px;\n    padding-bottom: 19px;\n    padding-left: 7px;\n    font-size: 13px\n}\n\n.itemdiv.dialogdiv:before,\n.itemdiv.dialogdiv>.body:before,\n.itemdiv>.body>.text:after {\n    content: \"\";\n    position: absolute\n}\n\n.itemdiv>.body>.text:after {\n    display: block;\n    height: 1px;\n    font-size: 0;\n    overflow: hidden;\n    left: 16px;\n    right: -12px;\n    margin-top: 9px;\n    border-top: 1px solid #E4ECF3\n}\n\n.itemdiv>.body>.text>.ace-icon:first-child {\n    color: #DCE3ED;\n    margin-right: 4px\n}\n\n.itemdiv:last-child>.body>.text {\n    border-bottom-width: 0\n}\n\n.itemdiv:last-child>.body>.text:after {\n    display: none\n}\n\n.itemdiv.dialogdiv {\n    padding-bottom: 14px\n}\n\n.itemdiv.dialogdiv:before {\n    display: block;\n    top: 0;\n    bottom: 0;\n    left: 19px;\n    width: 3px;\n    max-width: 3px;\n    background-color: #E1E6ED;\n    border: 1px solid #D7DBDD;\n    border-width: 0 1px\n}\n\n.itemdiv.dialogdiv:last-child {\n    padding-bottom: 0\n}\n\n.itemdiv.dialogdiv:last-child:before {\n    display: none\n}\n\n.itemdiv.dialogdiv>.user>img {\n    border-color: #C9D6E5\n}\n\n.itemdiv.dialogdiv>.body {\n    border: 1px solid #DDE4ED;\n    padding: 5px 8px 8px;\n    border-left-width: 2px;\n    margin-right: 1px\n}\n\n.itemdiv.dialogdiv>.body:before {\n    display: block;\n    left: -7px;\n    top: 11px;\n    width: 8px;\n    height: 8px;\n    border: 2px solid #DDE4ED;\n    border-width: 2px 0 0 2px;\n    background-color: #FFF;\n    box-sizing: content-box;\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg)\n}\n\n.itemdiv.dialogdiv>.body>.time {\n    position: static;\n    float: right\n}\n\n.itemdiv.dialogdiv>.body>.text {\n    padding-left: 0;\n    padding-bottom: 0\n}\n\n.itemdiv.dialogdiv>.body>.text:after {\n    display: none\n}\n\n.itemdiv.dialogdiv .tooltip-inner {\n    word-break: break-all\n}\n\n.itemdiv.memberdiv {\n    width: 175px;\n    padding: 2px;\n    margin: 3px 0;\n    float: left;\n    border-bottom: 1px solid #E8E8E8\n}\n\n@media (min-width:992px) {\n    .itemdiv.memberdiv {\n        max-width: 50%\n    }\n}\n\n@media (max-width:991px) {\n    .itemdiv.memberdiv {\n        min-width: 33.333%\n    }\n}\n\n.itemdiv.memberdiv>.user>img {\n    border-color: #DCE3ED\n}\n\n.itemdiv.memberdiv>.body>.time {\n    position: static\n}\n\n.itemdiv.memberdiv>.body>.name {\n    line-height: 18px;\n    height: 18px;\n    margin-bottom: 0\n}\n\n.itemdiv.memberdiv>.body>.name>a {\n    display: inline-block;\n    max-width: 100px;\n    max-height: 18px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    word-break: break-all\n}\n\n.itemdiv .tools {\n    position: absolute;\n    right: 5px;\n    bottom: 10px;\n    display: none\n}\n\n.item-list>li>.checkbox,\n.item-list>li>label.inline,\n.itemdiv:hover .tools {\n    display: inline-block\n}\n\n.itemdiv .tools .btn {\n    border-radius: 36px;\n    margin: 1px 0\n}\n\n.itemdiv .body .tools {\n    bottom: 4px\n}\n\n.itemdiv.commentdiv .tools {\n    right: 9px\n}\n\n.item-list {\n    margin: 0;\n    padding: 0;\n    list-style: none\n}\n\n.item-list>li {\n    padding: 9px;\n    background-color: #FFF;\n    margin-top: -1px;\n    position: relative\n}\n\n.item-list>li.selected {\n    color: #8090A0;\n    background-color: #F4F9FC\n}\n\n.item-list>li.selected .lbl,\n.item-list>li.selected label {\n    text-decoration: line-through;\n    color: #8090A0\n}\n\n.item-list>li label {\n    font-size: 13px\n}\n\n.item-list>li .percentage {\n    font-size: 11px;\n    font-weight: 700;\n    color: #777\n}\n\n.ace-thumbnails>li,\n.ace-thumbnails>li>:first-child {\n    display: block;\n    position: relative\n}\n\n.ace-thumbnails {\n    list-style: none;\n    margin: 0;\n    padding: 0\n}\n\n.ace-thumbnails>li {\n    float: left;\n    overflow: hidden;\n    margin: 2px;\n    border: 2px solid #333\n}\n\n.ace-thumbnails>li>:first-child:focus {\n    outline: 0\n}\n\n.ace-thumbnails>li .tags {\n    display: inline-block;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    overflow: visible;\n    direction: rtl;\n    padding: 0;\n    margin: 0;\n    height: auto;\n    width: auto;\n    background-color: transparent;\n    border-width: 0;\n    vertical-align: inherit\n}\n\n.ace-thumbnails>li .tags>.label-holder {\n    opacity: .92;\n    filter: alpha(opacity=92);\n    display: table;\n    margin: 1px 0 0;\n    direction: ltr;\n    text-align: left\n}\n\n.ace-thumbnails>li>.tools,\n.ace-thumbnails>li>:first-child>.text {\n    position: absolute;\n    text-align: center;\n    background-color: rgba(0, 0, 0, .55)\n}\n\n.ace-thumbnails>li .tags>.label-holder:hover {\n    opacity: 1;\n    filter: alpha(opacity=100)\n}\n\n.ace-thumbnails>li>.tools {\n    top: 0;\n    bottom: 0;\n    left: -30px;\n    width: 24px;\n    vertical-align: middle;\n    transition: all .2s ease\n}\n\n.ace-thumbnails>li>.tools.tools-right {\n    left: auto;\n    right: -30px\n}\n\n.ace-thumbnails>li>.tools.tools-bottom {\n    width: auto;\n    height: 28px;\n    left: 0;\n    right: 0;\n    top: auto;\n    bottom: -30px\n}\n\n.ace-thumbnails>li>.tools.tools-top {\n    width: auto;\n    height: 28px;\n    left: 0;\n    right: 0;\n    top: -30px;\n    bottom: auto\n}\n\n.ace-thumbnails>li:hover>.tools {\n    left: 0;\n    right: 0\n}\n\n.ace-thumbnails>li:hover>.tools.tools-bottom {\n    top: auto;\n    bottom: 0\n}\n\n.ace-thumbnails>li:hover>.tools.tools-top {\n    bottom: auto;\n    top: 0\n}\n\n.ace-thumbnails>li:hover>.tools.tools-right {\n    left: auto;\n    right: 0\n}\n\n.ace-thumbnails>li>.in.tools {\n    left: 0;\n    right: 0\n}\n\n.ace-thumbnails>li>.in.tools.tools-bottom {\n    top: auto;\n    bottom: 0\n}\n\n.ace-thumbnails>li>.in.tools.tools-top {\n    bottom: auto;\n    top: 0\n}\n\n.ace-thumbnails>li>.in.tools.tools-right {\n    left: auto;\n    right: 0\n}\n\n.ace-thumbnails>li>.tools>a,\n.ace-thumbnails>li>:first-child .inner a {\n    display: inline-block;\n    color: #FFF;\n    font-size: 18px;\n    font-weight: 400;\n    padding: 0 4px\n}\n\n.ace-thumbnails>li>.tools>a:hover,\n.ace-thumbnails>li>:first-child .inner a:hover {\n    text-decoration: none;\n    color: #C9E2EA\n}\n\n.ace-thumbnails>li .tools.tools-bottom>a,\n.ace-thumbnails>li .tools.tools-top>a {\n    display: inline-block\n}\n\n.ace-thumbnails>li>:first-child>.text {\n    right: 0;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    color: #FFF;\n    opacity: 0;\n    filter: alpha(opacity=0);\n    transition: all .2s ease\n}\n\n.dialogs,\n.itemdiv {\n    position: relative\n}\n\n.ace-thumbnails>li>:first-child>.text:before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n    margin-right: 0\n}\n\n.ace-thumbnails>li>:first-child>.text>.inner {\n    padding: 4px 0;\n    margin: 0;\n    display: inline-block;\n    vertical-align: middle;\n    max-width: 90%\n}\n\n.ace-thumbnails>li:hover>:first-child>.text {\n    opacity: 1;\n    filter: alpha(opacity=100)\n}\n\n.light-orange {\n    color: #FCAC6F!important\n}\n\n.blue {\n  color: #478FCA!important\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udHJhY3RzL2NoYWluLWluZm8vY2hhaW4taW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUdmLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBOzs7O0lBSUksOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7O0lBR0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7SUFHWDtBQUNKOztBQUVBO0lBRUk7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBR1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFHbEI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBSWhCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUV0Qix5Q0FBeUM7SUFDekM7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCO0lBQ0o7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQjtJQUNKO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsY0FBYztRQUNkO0lBQ0o7QUFDSjs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7OztJQUdJLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1YsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBR3RCLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFHakM7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1o7QUFDSjs7QUFFQTs7O0lBR0k7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkO0FBQ0o7O0FBRUE7O0lBRUksNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtBQUNKOztBQUdBOztJQUVJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7SUFDZDtBQUNKOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUd0QjtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxPQUFPO0lBQ1A7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLE9BQU87SUFDUDtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQjtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCxNQUFNO0lBQ04sV0FBVztJQUNYLFVBQVU7SUFDVix3QkFBd0I7SUFHeEI7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsU0FBUztJQUNULHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFDQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250cmFjdHMvY2hhaW4taW5mby9jaGFpbi1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hbGlnbi1jZW50ZXIsIC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlLXVzZXItaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogOTglO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcbiAgICBtYXJnaW46IDAgYXV0b1xufVxuXG4ucHJvZmlsZS1pbmZvLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93XG59XG5cbi5wcm9maWxlLWluZm8tbmFtZSxcbi5wcm9maWxlLWluZm8tdmFsdWUge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjRDVFNEYxXG59XG5cbi5wcm9maWxlLWluZm8tbmFtZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogNnB4IDEwcHggNnB4IDRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNjY3RTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG59XG5cbi5wcm9maWxlLWluZm8tdmFsdWUge1xuICAgIHBhZGRpbmc6IDZweCA0cHggNnB4IDZweFxufVxuXG4ucHJvZmlsZS1pbmZvLXZhbHVlPnNwYW4rc3BhbjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBjb250ZW50OiBcIixcIjtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGXG59XG5cbi5wcm9maWxlLWluZm8tdmFsdWU+c3BhbitzcGFuLmVkaXRhYmxlLWNvbnRhaW5lcjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnByb2ZpbGUtaW5mby1yb3c6Zmlyc3QtY2hpbGQgLnByb2ZpbGUtaW5mby1uYW1lLFxuLnByb2ZpbGUtaW5mby1yb3c6Zmlyc3QtY2hpbGQgLnByb2ZpbGUtaW5mby12YWx1ZSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZVxufVxuXG4ucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RDRUJGN1xufVxuXG4ucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCAucHJvZmlsZS1pbmZvLW5hbWUge1xuICAgIGNvbG9yOiAjMzM2MTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREYzRjQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGN0ZCRkZcbn1cblxuLnByb2ZpbGUtdXNlci1pbmZvLXN0cmlwZWQgLnByb2ZpbGUtaW5mby12YWx1ZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjRENFQkY3O1xuICAgIHBhZGRpbmctbGVmdDogMTJweFxufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjE1KVxufVxuXG4uZGQtZW1wdHksXG4uZGQtaGFuZGxlLFxuLmRkLXBsYWNlaG9sZGVyLFxuLmRkMi1jb250ZW50IHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94XG59XG5cbi5wcm9maWxlLWFjdGl2aXR5IHtcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNEMEQ4RTA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkICNGRkY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkICNGRkZcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgdHJhbnNwYXJlbnRcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6Zmlyc3QtY2hpbGQ6aG92ZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNEMEQ4RTBcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY5RkQ7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgI0QwRDhFMDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkb3R0ZWQgI0QwRDhFMFxufVxuXG4ucHJvZmlsZS1hY3Rpdml0eSBpbWcge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOUQ2RTU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmVcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHkgLnRodW1iaWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0QUJENztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMzhweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50XG59XG5cbi5wcm9maWxlLWFjdGl2aXR5IC50aW1lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgY29sb3I6ICM3Nzdcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHkgYS51c2VyIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjOTU4NUJGXG59XG5cbi5wcm9maWxlLWFjdGl2aXR5IC50b29scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGJvdHRvbTogOHB4O1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnByb2ZpbGUtYWN0aXZpdHk6aG92ZXIgLnRvb2xzIHtcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4udXNlci1wcm9maWxlIC5hY2UtdGh1bWJuYWlscyBsaSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luOiA2cHhcbn1cblxuLnVzZXItcHJvZmlsZSAuYWNlLXRodW1ibmFpbHMgbGkgLnRvb2xzIHtcbiAgICBsZWZ0OiAzcHg7XG4gICAgcmlnaHQ6IDNweFxufVxuXG4udXNlci1wcm9maWxlIC5hY2UtdGh1bWJuYWlscyBsaTpob3ZlciAudG9vbHMge1xuICAgIGJvdHRvbTogM3B4XG59XG5cbi51c2VyLXRpdGxlLWxhYmVsOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbn1cblxuLnVzZXItdGl0bGUtbGFiZWwrLmRyb3Bkb3duLW1lbnUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTJweFxufVxuXG4ucHJvZmlsZS1jb250YWN0LWxpbmtzIHtcbiAgICBwYWRkaW5nOiA0cHggMnB4IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMkU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEZBRkNcbn1cblxuLmJ0bi1saW5rOmhvdmVyIC5hY2UtaWNvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudFxufVxuXG4ucHJvZmlsZS1zb2NpYWwtbGlua3M+YTpob3Zlcj4uYWNlLWljb24sXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5uYW1lIGE6aG92ZXIgLmFjZS1pY29uLFxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAudG9vbHM+YTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG59XG5cbi5wcm9maWxlLXNvY2lhbC1saW5rcz5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiAwIDFweFxufVxuXG4ucHJvZmlsZS1za2lsbHMgLnByb2dyZXNzIHtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG59XG5cbi5wcm9maWxlLXNraWxscyAucHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgcGFkZGluZzogMCA4cHhcbn1cblxuLnByb2ZpbGUtdXNlcnMgLnVzZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiBhdXRvXG59XG5cbi5wcm9maWxlLXVzZXJzIC51c2VyIGltZyB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0FBQTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xc1xufVxuXG4ucHJvZmlsZS11c2VycyAudXNlciBpbWc6aG92ZXIge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMzMpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMzKVxufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgOHB4IDI0cHhcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAuYm9keSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogOHB4IDAgMFxufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5wb3BvdmVyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgbWF4LXdpZHRoOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB0b3A6IC01JTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBsaW5lYXIgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIC4ycywgbWF4LWhlaWdodCAwcyBsaW5lYXIgLjJzLCBtYXgtd2lkdGggMHMgbGluZWFyIC4ycywgbWluLXdpZHRoIDBzIGxpbmVhciAuMnM7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgbGluZWFyIDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAuMnMsIG1heC1oZWlnaHQgMHMgbGluZWFyIC4ycywgbWF4LXdpZHRoIDBzIGxpbmVhciAuMnMsIG1pbi13aWR0aCAwcyBsaW5lYXIgLjJzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGxpbmVhciAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjJzLCBtYXgtaGVpZ2h0IDBzIGxpbmVhciAuMnMsIG1heC13aWR0aCAwcyBsaW5lYXIgLjJzLCBtaW4td2lkdGggMHMgbGluZWFyIC4yc1xufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC5wb3BvdmVyLnJpZ2h0IHtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrXG59XG5cbi5wcm9maWxlLXVzZXJzIC5tZW1iZXJkaXYgLnBvcG92ZXIubGVmdCB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2PjpmaXJzdC1jaGlsZDpob3ZlciAucG9wb3ZlciB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDEwNjA7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwc1xufVxuXG4ucHJvZmlsZS11c2VycyAubWVtYmVyZGl2IC50b29scyB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAycHhcbn1cblxuLnByb2ZpbGUtdXNlcnMgLm1lbWJlcmRpdiAudG9vbHM+YSB7XG4gICAgbWFyZ2luOiAwIDJweFxufVxuXG4udXNlci1zdGF0dXMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTFweDtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjQUFBO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFweFxufVxuXG4udXNlci1zdGF0dXMuc3RhdHVzLW9ubGluZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjOEFDMTZDXG59XG5cbi51c2VyLXN0YXR1cy5zdGF0dXMtYnVzeSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjRTA3RjY5XG59XG5cbi51c2VyLXN0YXR1cy5zdGF0dXMtaWRsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkZCNzUyXG59XG5cbi50YWItY29udGVudC5wcm9maWxlLWVkaXQtdGFiLWNvbnRlbnQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gICAgcGFkZGluZzogOHB4IDMycHggMzJweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ4MHB4KSB7XG4gICAgLnByb2ZpbGUtaW5mby1uYW1lIHtcbiAgICAgICAgd2lkdGg6IDgwcHhcbiAgICB9XG4gICAgLnByb2ZpbGUtdXNlci1pbmZvLXN0cmlwZWQgLnByb2ZpbGUtaW5mby1uYW1lIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA2cHggNHB4IDZweCAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgIH1cbiAgICAucHJvZmlsZS11c2VyLWluZm8tc3RyaXBlZCAucHJvZmlsZS1pbmZvLXZhbHVlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgfVxuICAgIC51c2VyLXByb2ZpbGUgLm1lbWJlcmRpdiB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBcbiAgICB9XG59XG5cblxuXG4uaXRlbWRpdiB7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIG1pbi1oZWlnaHQ6IDY2cHhcbn1cblxuLml0ZW1kaXY+LnVzZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMFxufVxuXG4uaXRlbWRpdj4udXNlcj4uaW1nLFxuLml0ZW1kaXY+LnVzZXI+aW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MjkzQzQ7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uaXRlbWRpdj4udXNlcj4uaW1nIHtcbiAgICBwYWRkaW5nOiAycHhcbn1cblxuLml0ZW1kaXY+LmJvZHkge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLml0ZW1kaXY+LmJvZHk+LnRpbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOXB4O1xuICAgIHRvcDogMFxufVxuXG4uaXRlbWRpdj4uYm9keT4udGltZSAuYWNlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwXG59XG5cbi5pdGVtZGl2Pi5ib2R5Pi5uYW1lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzk5OVxufVxuXG4uaXRlbWRpdj4uYm9keT4ubmFtZT5iIHtcbiAgICBjb2xvcjogIzc3N1xufVxuXG4uaXRlbWRpdj4uYm9keT4udGV4dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTlweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBmb250LXNpemU6IDEzcHhcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2OmJlZm9yZSxcbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keTpiZWZvcmUsXG4uaXRlbWRpdj4uYm9keT4udGV4dDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbn1cblxuLml0ZW1kaXY+LmJvZHk+LnRleHQ6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGxlZnQ6IDE2cHg7XG4gICAgcmlnaHQ6IC0xMnB4O1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0U0RUNGM1xufVxuXG4uaXRlbWRpdj4uYm9keT4udGV4dD4uYWNlLWljb246Zmlyc3QtY2hpbGQge1xuICAgIGNvbG9yOiAjRENFM0VEO1xuICAgIG1hcmdpbi1yaWdodDogNHB4XG59XG5cbi5pdGVtZGl2Omxhc3QtY2hpbGQ+LmJvZHk+LnRleHQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBcbn1cblxuLml0ZW1kaXY6bGFzdC1jaGlsZD4uYm9keT4udGV4dDphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXYge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2RpdjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMTlweDtcbiAgICB3aWR0aDogM3B4O1xuICAgIG1heC13aWR0aDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUU2RUQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q3REJERDtcbiAgICBib3JkZXItd2lkdGg6IDAgMXB4XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2RpdjpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMFxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY6bGFzdC1jaGlsZDpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2Pi51c2VyPmltZyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjQzlENkU1XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RERTRFRDtcbiAgICBwYWRkaW5nOiA1cHggOHB4IDhweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMXB4XG59XG5cbi5pdGVtZGl2LmRpYWxvZ2Rpdj4uYm9keTpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxlZnQ6IC03cHg7XG4gICAgdG9wOiAxMXB4O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0RERTRFRDtcbiAgICBib3JkZXItd2lkdGg6IDJweCAwIDAgMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZylcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2Pi5ib2R5Pi50aW1lIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGZsb2F0OiByaWdodFxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY+LmJvZHk+LnRleHQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMFxufVxuXG4uaXRlbWRpdi5kaWFsb2dkaXY+LmJvZHk+LnRleHQ6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLml0ZW1kaXYuZGlhbG9nZGl2IC50b29sdGlwLWlubmVyIHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGxcbn1cblxuLml0ZW1kaXYubWVtYmVyZGl2IHtcbiAgICB3aWR0aDogMTc1cHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIG1hcmdpbjogM3B4IDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RThcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6OTkycHgpIHtcbiAgICAuaXRlbWRpdi5tZW1iZXJkaXYge1xuICAgICAgICBtYXgtd2lkdGg6IDUwJVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpIHtcbiAgICAuaXRlbWRpdi5tZW1iZXJkaXYge1xuICAgICAgICBtaW4td2lkdGg6IDMzLjMzMyVcbiAgICB9XG59XG5cbi5pdGVtZGl2Lm1lbWJlcmRpdj4udXNlcj5pbWcge1xuICAgIGJvcmRlci1jb2xvcjogI0RDRTNFRFxufVxuXG4uaXRlbWRpdi5tZW1iZXJkaXY+LmJvZHk+LnRpbWUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWNcbn1cblxuLml0ZW1kaXYubWVtYmVyZGl2Pi5ib2R5Pi5uYW1lIHtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMFxufVxuXG4uaXRlbWRpdi5tZW1iZXJkaXY+LmJvZHk+Lm5hbWU+YSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgbWF4LWhlaWdodDogMThweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbFxufVxuXG4uaXRlbWRpdiAudG9vbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi5pdGVtLWxpc3Q+bGk+LmNoZWNrYm94LFxuLml0ZW0tbGlzdD5saT5sYWJlbC5pbmxpbmUsXG4uaXRlbWRpdjpob3ZlciAudG9vbHMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4uaXRlbWRpdiAudG9vbHMgLmJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgICBtYXJnaW46IDFweCAwXG59XG5cbi5pdGVtZGl2IC5ib2R5IC50b29scyB7XG4gICAgYm90dG9tOiA0cHhcbn1cblxuLml0ZW1kaXYuY29tbWVudGRpdiAudG9vbHMge1xuICAgIHJpZ2h0OiA5cHhcbn1cblxuLml0ZW0tbGlzdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZVxufVxuXG4uaXRlbS1saXN0PmxpIHtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uaXRlbS1saXN0PmxpLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogIzgwOTBBMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGOUZDXG59XG5cbi5pdGVtLWxpc3Q+bGkuc2VsZWN0ZWQgLmxibCxcbi5pdGVtLWxpc3Q+bGkuc2VsZWN0ZWQgbGFiZWwge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiAjODA5MEEwXG59XG5cbi5pdGVtLWxpc3Q+bGkgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTNweFxufVxuXG4uaXRlbS1saXN0PmxpIC5wZXJjZW50YWdlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzc3N1xufVxuXG5cbi5hY2UtdGh1bWJuYWlscz5saSxcbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uYWNlLXRodW1ibmFpbHMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzNcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZDpmb2N1cyB7XG4gICAgb3V0bGluZTogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRhZ3Mge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGRpcmVjdGlvbjogcnRsO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXRcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpIC50YWdzPi5sYWJlbC1ob2xkZXIge1xuICAgIG9wYWNpdHk6IC45MjtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTIpO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIG1hcmdpbjogMXB4IDAgMDtcbiAgICBkaXJlY3Rpb246IGx0cjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHMsXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkPi50ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU1KVxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRhZ3M+LmxhYmVsLWhvbGRlcjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKVxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LnRvb2xzIHtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IC0zMHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZVxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LnRvb2xzLnRvb2xzLXJpZ2h0IHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAtMzBweFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LnRvb2xzLnRvb2xzLWJvdHRvbSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogLTMwcHhcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scy50b29scy10b3Age1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogLTMwcHg7XG4gICAgYm90dG9tOiBhdXRvXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saTpob3Zlcj4udG9vbHMge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpOmhvdmVyPi50b29scy50b29scy1ib3R0b20ge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpOmhvdmVyPi50b29scy50b29scy10b3Age1xuICAgIGJvdHRvbTogYXV0bztcbiAgICB0b3A6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpOmhvdmVyPi50b29scy50b29scy1yaWdodCB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+LmluLnRvb2xzIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4uaW4udG9vbHMudG9vbHMtYm90dG9tIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4uaW4udG9vbHMudG9vbHMtdG9wIHtcbiAgICBib3R0b206IGF1dG87XG4gICAgdG9wOiAwXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4uaW4udG9vbHMudG9vbHMtcmlnaHQge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDBcbn1cblxuLmFjZS10aHVtYm5haWxzPmxpPi50b29scz5hLFxuLmFjZS10aHVtYm5haWxzPmxpPjpmaXJzdC1jaGlsZCAuaW5uZXIgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmc6IDAgNHB4XG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT4udG9vbHM+YTpob3Zlcixcbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQgLmlubmVyIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI0M5RTJFQVxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGkgLnRvb2xzLnRvb2xzLWJvdHRvbT5hLFxuLmFjZS10aHVtYm5haWxzPmxpIC50b29scy50b29scy10b3A+YSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saT46Zmlyc3QtY2hpbGQ+LnRleHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlXG59XG5cbi5kaWFsb2dzLFxuLml0ZW1kaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkPi50ZXh0OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMFxufVxuXG4uYWNlLXRodW1ibmFpbHM+bGk+OmZpcnN0LWNoaWxkPi50ZXh0Pi5pbm5lciB7XG4gICAgcGFkZGluZzogNHB4IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1heC13aWR0aDogOTAlXG59XG5cbi5hY2UtdGh1bWJuYWlscz5saTpob3Zlcj46Zmlyc3QtY2hpbGQ+LnRleHQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMClcbn1cblxuLmxpZ2h0LW9yYW5nZSB7XG4gICAgY29sb3I6ICNGQ0FDNkYhaW1wb3J0YW50XG59XG4uYmx1ZSB7XG4gIGNvbG9yOiAjNDc4RkNBIWltcG9ydGFudFxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/contracts/chain-info/chain-info.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/contracts/chain-info/chain-info.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-temp></app-navigation-temp>\n<div class=\"container\">\n  <div id=\"user-profile-2\" class=\"user-profile\">\n    <div id=\"home\" class=\"tab-pane in active\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-3 center\">\n          <span class=\"profile-picture\">\n            <img class=\"editable img-responsive\" alt=\" Avatar\" id=\"avatar2\" src=\"assets/img/avatar6.png\">\n          </span>\n\n          <div class=\"space space-4\"></div>\n\n        </div><!-- /.col -->\n\n        <div class=\"col-xs-12 col-sm-9\">\n          <h4 class=\"blue\">\n            <span class=\"middle\">{{patient?.firstName}} {{patient?.lastName}}</span>\n\n          </h4>\n\n          <div class=\"profile-user-info\">\n            <div class=\"profile-info-row\">\n              <div class=\"profile-info-name\"> Account</div>\n\n              <div class=\"profile-info-value\">\n                <span>{{patient?.account}}</span>\n              </div>\n            </div>\n            <div class=\"profile-info-row\">\n              <div class=\"profile-info-name\"> Date of Birth </div>\n\n              <div class=\"profile-info-value\">\n                <span>{{patient?.dob}}</span>\n              </div>\n            </div>\n            <div class=\"profile-info-row\">\n              <div class=\"profile-info-name\"> Gender </div>\n\n              <div class=\"profile-info-value\">\n                <span>{{patient?.gender}}</span>\n              </div>\n            </div>\n\n            <div class=\"profile-info-row\">\n              <div class=\"profile-info-name\"> Email </div>\n\n              <div class=\"profile-info-value\">\n                <span>{{patient?.email}}</span>\n              </div>\n            </div>\n\n            <div class=\"profile-info-row\">\n              <div class=\"profile-info-name\"> Phone </div>\n\n              <div class=\"profile-info-value\">\n                <span>{{patient?.phoneNumber}}</span>\n              </div>\n            </div>\n\n            <div class=\"profile-info-row\">\n              <div class=\"profile-info-name\"> Address </div>\n\n              <div class=\"profile-info-value\">\n\n                <i class=\"fa fa-map-marker light-orange bigger-110\"></i>\n                <span>{{patient?.address}}</span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"hr hr-8 dotted\"></div>\n\n\n        </div><!-- /.col -->\n      </div><!-- /.row -->\n\n      <div class=\"space-20\"></div>\n\n    </div><!-- /#home -->\n    <div class=\"footer\">\n      <br>\n      <button routerLink=\"/data-entry\" class=\"btn btn-secondary\">\n        Modify Data\n        <span class=\"badge badge-light\"></span>\n      </button>\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/pages/contracts/chain-info/chain-info.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/contracts/chain-info/chain-info.component.ts ***!
  \********************************************************************/
/*! exports provided: ChainInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainInfoComponent", function() { return ChainInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entry_patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../entry/patient */ "./src/entry/patient.ts");





var ChainInfoComponent = /** @class */ (function () {
    function ChainInfoComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    ChainInfoComponent.prototype.ngOnInit = function () {
        this.getPatient();
    };
    ChainInfoComponent.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    ChainInfoComponent.prototype.hex2a = function (hexx) {
        var hex = hexx.toString(); //force conversion
        var str = '';
        for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        return str;
    };
    ChainInfoComponent.prototype.getPatient = function () {
        var _this = this;
        this.http.get('/patientInfo').subscribe(function (data) {
            console.log('data========>', data);
            _this.result = data;
            _this.patient = new _entry_patient__WEBPACK_IMPORTED_MODULE_4__["Patient"]();
            _this.patient.firstName = (data[0]);
            _this.patient.lastName = data[1];
            _this.patient.gender = data[2];
            _this.patient.email = data[3];
            _this.patient.dob = _this.formatDate(new Date(data[4]));
            _this.patient.phoneNumber = Number(data[5]._hex);
            _this.patient.address = data[6];
            _this.patient.account = data[7];
        });
    };
    ChainInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chain-info',
            template: __webpack_require__(/*! ./chain-info.component.html */ "./src/app/pages/contracts/chain-info/chain-info.component.html"),
            styles: [__webpack_require__(/*! ./chain-info.component.css */ "./src/app/pages/contracts/chain-info/chain-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChainInfoComponent);
    return ChainInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/create-info/create-info.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-info/create-info.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1pbmZvL2NyZWF0ZS1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/create-info/create-info.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/create-info/create-info.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-temp></app-navigation-temp>\n<div class=\"container\">\n    <h1 class=\"blue\">Data Entry</h1>\n    <form [formGroup]=\"patientForm\" class=\"form\" (ngSubmit)=\"onSubmit()\"   >\n      <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"form-group\">\n                <label for=\"name\">Last Name</label>\n                <input type=\"text\" formControlName = \"lastName\" placeholder=\"First name\" title=\"Enter First Name\"  class=\"form-control\" id=\"lastname\" required>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"form-group\">\n                <label for=\"name\">First Name</label>\n                <input type=\"text\" formControlName = \"firstName\" placeholder=\"Last name\" title=\"enter Last name\" class=\"form-control\" id=\"firstname\" required>\n            </div>\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <div class=\"form-group\">\n                  <label for=\"gender\">Gender</label>\n                  <select class=\"form-control\" id=\"gender\"  formControlName =\"gender\" required>\n                    <option *ngFor=\"let gen of genders\" [value]=\"gen\">{{gen}}</option>\n                  </select>\n              </div>\n          </div>\n          <div class=\"col\">\n            \n          <div class=\"form-group\">\n                <label for=\"dob\">Date of Birth</label>\n                <input type=\"date\" formControlName =\"dob\" class=\"form-control\" id=\"dob\" required>\n            </div>\n          </div>\n          <div class=\"w-100\"></div>\n          <div class=\"col\">\n          <div class=\"form-group\">\n             \n                <label for=\"email\">Email</label>\n                <input type=\"email\" formControlName = \"email\" placeholder=\"Email address\" title=\"enter email address\" class=\"form-control\" id=\"email\" required>\n             \n            </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"form-group\">\n                      <label for=\"phone\">Phone</label>\n                      <input type=\"number\" formControlName = \"phoneNumber\" placeholder=\"Phone number\" title=\"enter phone number\" class=\"form-control\" id=\"phone\" required>\n                  </div>\n            </div>\n            <div class=\"w-100\"></div>\n            <div class=\"col\">\n                <div class=\"form-group\">\n                      <label for=\"address\">Address</label>\n                      <input type=\"text\" formControlName = \"address\" placeholder=\"Address\" title=\"enter address\" class=\"form-control\" id=\"address\" required>\n                  </div>\n            </div>\n            <div class=\"w-100\"></div>\n              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n \n      </div>\n     \n \n      \n \n    </form>\n</div>"

/***/ }),

/***/ "./src/app/pages/create-info/create-info.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/create-info/create-info.component.ts ***!
  \************************************************************/
/*! exports provided: CreateInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInfoComponent", function() { return CreateInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/util.service */ "./services/util.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var CreateInfoComponent = /** @class */ (function () {
    function CreateInfoComponent(http, datepipe, router, formBuilder, utils) {
        this.http = http;
        this.datepipe = datepipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this.utils = utils;
        this.genders = ['- choose', 'Male', 'Female', 'Others'];
        this.submitted = false;
    }
    CreateInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.todaydate = this.utils.currentDate();
        this.http.get('/patientInfo').subscribe(function (data) {
            _this.patientForm = _this.formBuilder.group({
                id: [null],
                firstName: [data[0], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                lastName: [data[1], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email: [data[3], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                phoneNumber: Number(data[5]._hex),
                gender: data[2],
                dob: [_this.datepipe.transform(data[4], 'yyyy-MM-dd'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                address: data[6],
            });
        });
    };
    CreateInfoComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(JSON.stringify(this.patientForm.value));
        if (this.patientForm.valid) {
            this.http.post('/patientInfo', JSON.stringify(this.patientForm.value))
                .subscribe(function (res) {
                console.log('this form uploading---->');
                _this.router.navigate(['/chainInfo']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            alert('User form is not valid!!');
        }
    };
    CreateInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-info',
            template: __webpack_require__(/*! ./create-info.component.html */ "./src/app/pages/create-info/create-info.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
            styles: [__webpack_require__(/*! ./create-info.component.css */ "./src/app/pages/create-info/create-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], CreateInfoComponent);
    return CreateInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/doctor/list-doctor/list-doctor.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/doctor/list-doctor/list-doctor.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n  margin-top: 10px;\n}\n.header .header-add{\n  float: right;\n  margin-bottom: 10px;\n  margin-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdG9yL2xpc3QtZG9jdG9yL2xpc3QtZG9jdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdG9yL2xpc3QtZG9jdG9yL2xpc3QtZG9jdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhlYWRlciAuaGVhZGVyLWFkZHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/doctor/list-doctor/list-doctor.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/doctor/list-doctor/list-doctor.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-temp></app-navigation-temp>\n<div class=\"container\">\n  <div class=\"header\">\n    <div class=\"row\">\n          <h1 class=\"blue\">Doctor List</h1>\n      </div>\n      <div class=\"header-add\">\n        <a routerLink=\"/registerDoctor\" class=\"btn btn-success\"><i class=\"fas fa-plus\"></i></a>\n      </div>\n    </div>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>No</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Gender</th>\n        <th>Phone Number</th>\n        <th>Email Address</th>\n        <th>Specialist In</th>\n        <th>Organization</th>\n        <th>Full Address</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let doctor of doctors; let i = index\">\n        <td>{{ i + 1}}</td>\n        <td>{{ doctor.firstName }}</td>\n        <td>{{ doctor.lastName }}</td>\n        <td>{{ doctor.gender }}</td>\n        <td>{{ doctor.phoneNumber }}</td>\n        <td><div class=\"a\">\n              {{ doctor.email }}\n            </div>\n        </td>\n          <td><div class=\"a\">\n            {{ doctor.specialistId }}\n          </div>\n        </td>\n      <td><div class=\"a\">\n        {{ doctor.organization.name }}\n      </div>\n    </td>\n    <td><div class=\"a\">\n      {{ doctor.address }}\n    </div>\n  </td>\n        <td>\n          <div class=\"actions\">\n            <span><a href=\"\" class=\"btn btn-sm btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i></a></span>\n            &nbsp;\n            <span><a (click)=\"deleteDoctor(doctor._id)\"  class=\"btn btn-sm btn-outline-danger\"><i class=\"fas fa-trash-alt\"></i></a></span>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/doctor/list-doctor/list-doctor.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/doctor/list-doctor/list-doctor.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListDoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDoctorComponent", function() { return ListDoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ListDoctorComponent = /** @class */ (function () {
    function ListDoctorComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ListDoctorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/doctor').subscribe(function (data) {
            console.log('List of doctors--->', data);
            _this.doctors = data;
        });
    };
    ListDoctorComponent.prototype.deleteDoctor = function (id) {
        this.http.delete('/doctor/' + id)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
        this.router.navigate(['/doctorList'], {
            queryParams: { refresh: new Date().getTime() }
        });
    };
    ListDoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-doctor',
            template: __webpack_require__(/*! ./list-doctor.component.html */ "./src/app/pages/doctor/list-doctor/list-doctor.component.html"),
            styles: [__webpack_require__(/*! ./list-doctor.component.css */ "./src/app/pages/doctor/list-doctor/list-doctor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ListDoctorComponent);
    return ListDoctorComponent;
}());



/***/ }),

/***/ "./src/app/pages/doctor/register-doctor/register-doctor.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/doctor/register-doctor/register-doctor.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci9yZWdpc3Rlci1kb2N0b3IvcmVnaXN0ZXItZG9jdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/doctor/register-doctor/register-doctor.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/doctor/register-doctor/register-doctor.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-temp></app-navigation-temp>\n<div class=\"container\">\n    <h2 class=\"blue\">Doctor Registration</h2>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"gender\">Gender</label>\n          <select class=\"form-control\" formControlName=\"gender\" id=\"gender\" required>\n            <option value=\"M\">Male</option>\n            <option value=\"F\">Female</option>\n            <option value=\"O\">Others</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phone\">Phone Number</label>\n          <input type=\"text\" formControlName=\"phoneNumber\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\n          <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.phone.errors.required\">Phone number is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\">Email Address</label>\n          <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"specialist\">Specialist In</label>\n          <select class=\"form-control\" formControlName=\"specialistId\" id=\"specialist\" required>\n            <option *ngFor=\"let spec of specialist\" [value]=\"spec\">{{spec}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"organization\">Organization</label>\n          <select class=\"form-control\" formControlName=\"organization\" id=\"organization\" required>\n            <option *ngFor=\"let org of organizations\" [value]=\"org._id\">{{org.name}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Address\">Address</label>\n          <textarea type=\"text\" formControlName=\"address\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" ></textarea>\n          <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.address.errors.required\">Address is required</div>\n          </div>\n      </div>\n\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n            <img *ngIf=\"loading\"\n                src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/doctorList']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/doctor/register-doctor/register-doctor.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/doctor/register-doctor/register-doctor.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterDoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDoctorComponent", function() { return RegisterDoctorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RegisterDoctorComponent = /** @class */ (function () {
    function RegisterDoctorComponent(formBuilder, router, http) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.loading = false;
        this.submitted = false;
        this.organizations = {};
        this.specialist = ['Allergist', 'Anesthesiologist', 'Cardiologist', 'Chiropractor', 'Dentist', 'Dermatologist', 'Radiologist', 'Dermatologists', 'Gastroenterologists'];
    }
    RegisterDoctorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            specialistId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            organization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.http.get("/org").subscribe(function (data) {
            //this.organizations = data.json();
            _this.organizations = data;
        });
        console.log("OnInit org");
    };
    Object.defineProperty(RegisterDoctorComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterDoctorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log(JSON.stringify(this.registerForm.value));
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            alert("Doctor form is not valid!!");
            return;
        }
        this.loading = true;
        this.http.post("/doctor", this.registerForm.value).subscribe(function (res) {
            console.log("save doctor--->", res);
            _this.router.navigate(["/doctorList"]);
            _this.loading = false;
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    RegisterDoctorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register-doctor",
            template: __webpack_require__(/*! ./register-doctor.component.html */ "./src/app/pages/doctor/register-doctor/register-doctor.component.html"),
            styles: [__webpack_require__(/*! ./register-doctor.component.css */ "./src/app/pages/doctor/register-doctor/register-doctor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RegisterDoctorComponent);
    return RegisterDoctorComponent;
}());



/***/ }),

/***/ "./src/app/pages/organization/list/organization-list/organization-list.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/organization/list/organization-list/organization-list.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n  margin-top: 10px;\n}\n.header .header-add{\n  float: right;\n  margin-bottom: 10px;\n  margin-right: 5px;\n}\n.nav-text {\n  position:relative;\n  width:190px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JnYW5pemF0aW9uL2xpc3Qvb3JnYW5pemF0aW9uLWxpc3Qvb3JnYW5pemF0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1giLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmdhbml6YXRpb24vbGlzdC9vcmdhbml6YXRpb24tbGlzdC9vcmdhbml6YXRpb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5oZWFkZXIgLmhlYWRlci1hZGR7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubmF2LXRleHQge1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgd2lkdGg6MTkwcHg7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/organization/list/organization-list/organization-list.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/organization/list/organization-list/organization-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-temp></app-navigation-temp>\n<div class=\"container\">\n<div class=\"header\">\n  <div class=\"title\">\n      <i class=\"fas fa-hospital-alt fa-2x\"></i>\n      <span class=\"nav-text\">\n          <h1 class=\"blue\">Organization List</h1>\n        </span>\n\n  </div>\n  <div class=\"header-add\">\n    <a routerLink=\"/orgEntry\" class=\"btn btn-success\"><i class=\"fas fa-plus\"></i></a>\n  </div>\n</div>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>No</th>\n        <th>Org Id</th>\n        <th>Org Name</th>\n        <th>Nationality</th>\n        <th>Email</th>\n        <th>Address</th>\n        <th>Contact Number</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let org of orgs; let i = index\">\n        <td>{{ i + 1}}</td>\n        <td>{{ org.orgId }}</td>\n        <td>{{ org.name }}</td>\n        <td>{{ org.nationality }}</td>\n        <td>{{ org.email }}</td>\n        <td>{{ org.address }}</td>\n          <td>{{ org.contactNumber }}</td>\n        <td>\n          <div class=\"actions\">\n            <span><a href=\"\" class=\"btn btn-sm btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i></a></span>\n            &nbsp;\n            <span><a (click)=\"deleteOrg(org._id)\"  class=\"btn btn-sm btn-outline-danger\"><i class=\"fas fa-trash-alt\"></i></a></span>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/organization/list/organization-list/organization-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/organization/list/organization-list/organization-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OrganizationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationListComponent", function() { return OrganizationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var OrganizationListComponent = /** @class */ (function () {
    function OrganizationListComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    OrganizationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/org').subscribe(function (data) {
            console.log('List of Orgs--->', data);
            _this.orgs = data;
        });
    };
    OrganizationListComponent.prototype.deleteOrg = function (id) {
        this.http.delete('/org/' + id)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
        this.router.navigate(['/organizations'], {
            queryParams: { refresh: new Date().getTime() }
        });
    };
    OrganizationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organization-list',
            template: __webpack_require__(/*! ./organization-list.component.html */ "./src/app/pages/organization/list/organization-list/organization-list.component.html"),
            styles: [__webpack_require__(/*! ./organization-list.component.css */ "./src/app/pages/organization/list/organization-list/organization-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OrganizationListComponent);
    return OrganizationListComponent;
}());



/***/ }),

/***/ "./src/app/pages/organization/organization.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/organization/organization.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-org {\n  margin: 10px 15px;\n  padding: 8px;\n  border: 1px #ccc solid;\n  border-radius: 15px;\n  box-sizing: content-box;\n}\n.form-org {\n  padding: 20px;\n}\n.form-org input[type=\"text\"] {\n  padding: 8px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1vcmcge1xuICBtYXJnaW46IDEwcHggMTVweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDFweCAjY2NjIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbi5mb3JtLW9yZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uZm9ybS1vcmcgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/organization/organization.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/organization/organization.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-temp></app-navigation-temp>\n<div class=\"container\">\n    <div class=\"box-org\">\n            <h2 class=\"blue\">Organization Register</h2>\n            <form class=\"form-org\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                          <label for=\"orgId\">Orgization Id</label>\n                          <input type=\"text\" formControlName=\"orgId\" class=\"form-control\"\n                            disabled />\n                          </div>\n                <div class=\"form-group\">\n                    <label for=\"name\">Orgization Name</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n                    <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.name.errors.required\">Organization Name is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"nationality\">Nationality</label>\n                    <input type=\"text\" formControlName=\"nationality\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.nationality.errors }\" />\n                    <div *ngIf=\"submitted && f.nationality.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.nationality.errors.required\">Nationality Name is required</div>\n                    </div>\n                </div>\n               <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"contactNumber\">Contact Number</label>\n                  <input type=\"text\" formControlName=\"contactNumber\" class=\"form-control\"\n                      [ngClass]=\"{ 'is-invalid': submitted && f.contactNumber.errors }\" />\n                  <div *ngIf=\"submitted && f.contactNumber.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.contactNumber.errors.required\">Contact Number is required</div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"address\">Address</label>\n                <input type=\"text\" formControlName=\"address\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" />\n                <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.address.errors.required\">Address is required</div>\n                </div>\n            </div>\n          \n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n                    <img *ngIf=\"loading\"\n                        src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                    <a [routerLink]=\"['/orgList']\" class=\"btn btn-link\">Cancel</a>\n                </div>\n            </form>\n          \n    </div>\n \n</div>"

/***/ }),

/***/ "./src/app/pages/organization/organization.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/organization/organization.component.ts ***!
  \**************************************************************/
/*! exports provided: OrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function() { return OrganizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var OrganizationComponent = /** @class */ (function () {
    function OrganizationComponent(formBuilder, router, http) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.loading = false;
        this.submitted = false;
        this.orgainzation = {};
        this.nextId = '0000';
    }
    OrganizationComponent.prototype.generateOrgId = function () {
        var _this = this;
        var id = '0000';
        this.http.get('/org/count')
            .subscribe(function (res) {
            console.log('total number of Org--->', res);
            console.log('-->', parseInt(res.toString()) + 1);
            var intId = (parseInt(res.toString()) + 1);
            id = id.concat(intId.toString());
            _this.nextId = id.substring(id.length - 4, id.length);
        }, function (err) {
            console.log(err);
        });
        return id;
    };
    OrganizationComponent.prototype.ngOnInit = function () {
        this.generateOrgId();
        this.registerForm = this.formBuilder.group({
            orgId: [{ value: this.nextId, disabled: true }],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            contactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    Object.defineProperty(OrganizationComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    OrganizationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log(JSON.stringify(this.registerForm.value));
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            alert('orgainzation form is not valid!!');
            return;
        }
        this.loading = true;
        var org = this.registerForm.getRawValue();
        org.orgId = this.nextId;
        this.http.post('/org', org)
            .subscribe(function (res) {
            console.log('save--->', res);
            _this.router.navigate(['/organizations']);
            _this.loading = false;
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    OrganizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organization',
            template: __webpack_require__(/*! ./organization.component.html */ "./src/app/pages/organization/organization.component.html"),
            styles: [__webpack_require__(/*! ./organization.component.css */ "./src/app/pages/organization/organization.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OrganizationComponent);
    return OrganizationComponent;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/pages/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/pages/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/signin/signin.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signin/signin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container{\n   \n        position: absolute;\n        margin: 0 auto;\n        top: 50%;\n        left: 50%;\n        width: 300px;\n        height: 300px;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7UUFFUSxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFFBQVE7UUFDUixTQUFTO1FBQ1QsWUFBWTtRQUNaLGFBQWE7UUFDYix3Q0FBZ0M7Z0JBQWhDLGdDQUFnQzs7QUFFeEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXJ7XG4gICBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/signin/signin.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signin/signin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <i class=\"fas fa-cubes\"></i> Smart Contract\n    </a>\n    <div>\n    <button routerLink=\"/\" class=\"btn btn-outline-light\">\n        Home\n        <span class=\"badge badge-light\"></span>\n    </button>\n    &nbsp;\n      <button routerLink=\"about\" class=\"btn btn-outline-light\">\n        About\n        <span class=\"badge badge-light\"></span>\n      </button>\n      &nbsp;\n      <button routerLink=\"contact\" class=\"btn btn-outline-light\">\n        Contact us\n        <span class=\"badge badge-light\"></span>\n      </button>\n    </div>\n  </nav>\n<div class=\"container\">\n  <h1>Sign In</h1>\n    <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\"  >\n\n          <div class=\"form-group\">\n              <label for=\"userName\">Email</label>\n             <input type=\"text\" name=\"email\" #email=\"ngModel\"  class=\"form-control\"  [(ngModel)]=\"model.email\" placeholder=\"Email\" [pattern]=\"emailRegex\" required\n            [ngClass]=\"{'is-invalid' :signInForm.submitted && !email.valid }\">\n          <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\n            <label class=\"validation-message\">Invalid email address.</label>\n          </div>\n            </div>\n\n          <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" name=\"password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors?.minlength }\" [(ngModel)]=\"model.password\"  class=\"form-control\"  placeholder=\"Password\" required minlength=\"4\"\n              [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !password.valid }\">\n            <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n              <label class=\"validation-message\">Minimum 4 characters.</label>\n            </div>\n          </div>\n\n        <div class=\"w-100\"></div>\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['']\" class=\"btn btn-link\">Cancel</a>\n  </form>\n  <div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/signin/signin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signin/signin.component.ts ***!
  \**************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");




var SigninComponent = /** @class */ (function () {
    function SigninComponent(userService, authenticationService, alertService, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.model = {
            email: '',
            password: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SigninComponent.prototype.ngOnInit = function () {
        if (this.userService.isLoggedIn())
            this.router.navigateByUrl('/home');
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    SigninComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.userService.login(form.value).subscribe(function (res) {
            console.log(res);
            _this.userService.setToken(res['token']);
            _this.userService.selectedUser = res['currentUser'];
            _this.router.navigate(['/home']);
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
            _this.loading = false;
            _this.submitted = false;
            _this.model.password = '';
        });
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/pages/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/pages/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <i class=\"fas fa-cubes\"></i> Smart Contract\n    </a>\n    <div>\n    <button routerLink=\"/\" class=\"btn btn-outline-light\">\n        Home\n        <span class=\"badge badge-light\"></span>\n    </button>\n    &nbsp;\n      <button routerLink=\"about\" class=\"btn btn-outline-light\">\n        About\n        <span class=\"badge badge-light\"></span>\n      </button>\n      &nbsp;\n      <button routerLink=\"contact\" class=\"btn btn-outline-light\">\n        Contact us\n        <span class=\"badge badge-light\"></span>\n      </button>\n    </div>\n  </nav>\n<div class=\"container\">\n    <h2 class=\"blue\">Register</h2>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n            <img *ngIf=\"loading\"\n                src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");







var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, router, authenticationService, userService, alertService, http) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.http = http;
        this.loading = false;
        this.submitted = false;
        this.user = {};
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['']);
        }
    }
    SignupComponent.prototype.ngOnInit = function () {
        if (this.userService.isLoggedIn())
            this.router.navigateByUrl('/home');
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log(JSON.stringify(this.registerForm.value));
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            alert('User form is not valid!!');
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/sign-in']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction-list/transaction-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/transaction-list/transaction-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW5zYWN0aW9uLWxpc3QvdHJhbnNhY3Rpb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/transaction-list/transaction-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/transaction-list/transaction-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  transaction-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/transaction-list/transaction-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/transaction-list/transaction-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionListComponent", function() { return TransactionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TransactionListComponent = /** @class */ (function () {
    function TransactionListComponent() {
    }
    TransactionListComponent.prototype.ngOnInit = function () {
    };
    TransactionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transaction-list',
            template: __webpack_require__(/*! ./transaction-list.component.html */ "./src/app/pages/transaction-list/transaction-list.component.html"),
            styles: [__webpack_require__(/*! ./transaction-list.component.css */ "./src/app/pages/transaction-list/transaction-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TransactionListComponent);
    return TransactionListComponent;
}());



/***/ }),

/***/ "./src/app/pages/upload-document/upload-document.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/upload-document/upload-document.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwbG9hZC1kb2N1bWVudC91cGxvYWQtZG9jdW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/upload-document/upload-document.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/upload-document/upload-document.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n\n<button type=\"button\" class=\"btn btn-success btn-s\"\n  (click)=\"uploader.uploadAll()\"\n  [disabled]=\"!uploader.getNotUploadedItems().length\" >\n      Upload an Image\n</button>\n"

/***/ }),

/***/ "./src/app/pages/upload-document/upload-document.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/upload-document/upload-document.component.ts ***!
  \********************************************************************/
/*! exports provided: UploadDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDocumentComponent", function() { return UploadDocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);



var UploadURL = 'http://localhost:3000/api/upload';
var UploadDocumentComponent = /** @class */ (function () {
    function UploadDocumentComponent() {
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: UploadURL, itemAlias: 'photo' });
    }
    UploadDocumentComponent.prototype.ngOnInit = function () {
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('FileUpload:uploaded:', item, status, response);
            alert('File uploaded successfully');
        };
    };
    UploadDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-document',
            template: __webpack_require__(/*! ./upload-document.component.html */ "./src/app/pages/upload-document/upload-document.component.html"),
            styles: [__webpack_require__(/*! ./upload-document.component.css */ "./src/app/pages/upload-document/upload-document.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UploadDocumentComponent);
    return UploadDocumentComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/list/userlist/userlist.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user/list/userlist/userlist.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.a {\n    white-space: nowrap; \n    width: 100px; \n    overflow: hidden;\n    text-overflow:ellipsis;\n}\n  div.a:hover {\n    overflow: visible;\n    word-wrap: break-word;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9saXN0L3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyL2xpc3QvdXNlcmxpc3QvdXNlcmxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5hIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbiAgICB3aWR0aDogMTAwcHg7IFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbn1cbiAgZGl2LmE6aG92ZXIge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user/list/userlist/userlist.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/user/list/userlist/userlist.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-temp></app-navigation-temp>\n<div class=\"container\">\n  <h1 class=\"blue\">User List</h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>No</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Email</th>\n        <th>Private key</th>\n        <th>Public key</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users; let i = index\">\n        <td>{{ i + 1}}</td>\n        <td>{{ user.firstName }}</td>\n        <td>{{ user.lastName }}</td>\n        <td>{{ user.email }}</td>\n        <td><div class=\"a\">\n              {{ user.privateKey }}\n            </div>\n        </td>\n          <td><div class=\"a\">\n            {{ user.publicKey }}\n          </div>\n        </td>\n        <td>\n          <div class=\"actions\">\n            <span><a href=\"\" class=\"btn btn-sm btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i></a></span>\n            &nbsp;\n            <span><a (click)=\"deleteUser(user._id)\"  class=\"btn btn-sm btn-outline-danger\"><i class=\"fas fa-trash-alt\"></i></a></span>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/user/list/userlist/userlist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/user/list/userlist/userlist.component.ts ***!
  \****************************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_services */ "./src/app/_services/index.ts");





var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(http, router, route, alertService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    UserlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/user').subscribe(function (data) {
            console.log('List of users--->', data);
            _this.users = data;
        });
    };
    UserlistComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.http.delete('/user/' + id)
            .subscribe(function (res) {
            _this.alertService.success('Delete successful', true);
        }, function (err) {
            console.log(err);
        });
        this.router.navigate(['/userList'], {
            queryParams: { refresh: new Date().getTime() }
        });
    };
    UserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/pages/user/list/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/pages/user/list/userlist/userlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/app/pages/whoweare/about/about/about.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/whoweare/about/about/about.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n}\n\n.landing{\n  position: relative;\n  background:url('/assets/img/bg.jpg') no-repeat center center/cover;\n  height: 91.2vh;\n}\n\n.landing-inner{\n  color: #fff;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: auto;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.dark-overlay{\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0,0,0,0.7);\n}\n\n.x-large{\n   font-size: 4rem;\n   line-height: 1.2;\n   margin-bottom: 1rem;\n }\n\n.lead{\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2hvd2VhcmUvYWJvdXQvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrRUFBa0U7RUFDbEUsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxpQ0FBaUM7QUFDbkM7O0FBQ0M7R0FDRSxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtDQUNyQjs7QUFFQTtFQUNDLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93aG93ZWFyZS9hYm91dC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcbn1cblxuLmxhbmRpbmd7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1nL2JnLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xuICBoZWlnaHQ6IDkxLjJ2aDtcbn1cbi5sYW5kaW5nLWlubmVye1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGFyay1vdmVybGF5e1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xufVxuIC54LWxhcmdle1xuICAgZm9udC1zaXplOiA0cmVtO1xuICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gfVxuXG4gLmxlYWR7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/whoweare/about/about/about.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/whoweare/about/about/about.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <i class=\"fas fa-cubes\"></i> Smart Contract\n  </a>\n  <div>\n    <button routerLink=\"about\" class=\"btn btn-outline-light\">\n      About\n      <span class=\"badge badge-light\"></span>\n    </button>\n    &nbsp;\n    <button routerLink=\"contact\" class=\"btn btn-outline-light\">\n      Contact us\n      <span class=\"badge badge-light\"></span>\n    </button>\n  </div>\n</nav>\n<section class=\"landing\">\n  <div class=\"dark-overlay\">\n    <div class=\"landing-inner\">\n      <h1 class=\"x-large\">About Us</h1>\n      <p class=\"lead\">Electronic medical record (EMR) is a crucial form\n        of healthcare data, currently drawing a lot of attention. Sharing\n        health data is considered to be a critical approach to improve\n        the quality of healthcare service and reduce medical costs.\n        However, EMRs are fragmented across decentralized hospitals,\n        which hinders data sharing and puts patients’ privacy at risks.\n        To address these issues, we propose a blockchain based privacy-\n        preserving data sharing for EMRs, called BPDS. In BPDS, the\n        original EMRs are stored securely in the cloud and the indexes\n        are reserved in a tamper-proof consortium blockchain. By this\n        means, the risk of the medical data leakage could be greatly\n        reduced, and at the same time, the indexes in blockchain ensure\n        that the EMRs can not be modified arbitrarily. Secure data\n        sharing can be accomplished automatically according to the\n        predefined access permissions of patients through the smart\n        contracts of blockchain. Besides, the joint-design of the CP-\n        ABE-based access control mechanism and the content extraction\n        signature scheme provides strong privacy preservation in data\n        sharing. Security analysis shows that BPDS is a secure and\n        effective way to realize data sharing for EMRs.</p>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/whoweare/about/about/about.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/whoweare/about/about/about.component.ts ***!
  \***************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(router) {
        this.router = router;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/whoweare/about/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/whoweare/about/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/whoweare/contactus/contactus/contactus.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/whoweare/contactus/contactus/contactus.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n}\n\n.landing{\n  position: relative;\n  background:url('/assets/img/bg.jpg') no-repeat center center/cover;\n  height: 91.2vh;\n}\n\n.landing-inner{\n  color: #fff;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: auto;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.dark-overlay{\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0,0,0,0.7);\n}\n\n.x-large{\n   font-size: 4rem;\n   line-height: 1.2;\n   margin-bottom: 1rem;\n }\n\n.lead{\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2hvd2VhcmUvY29udGFjdHVzL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrRUFBa0U7RUFDbEUsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxpQ0FBaUM7QUFDbkM7O0FBQ0M7R0FDRSxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtDQUNyQjs7QUFFQTtFQUNDLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93aG93ZWFyZS9jb250YWN0dXMvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcbn1cblxuLmxhbmRpbmd7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1nL2JnLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xuICBoZWlnaHQ6IDkxLjJ2aDtcbn1cbi5sYW5kaW5nLWlubmVye1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGFyay1vdmVybGF5e1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xufVxuIC54LWxhcmdle1xuICAgZm9udC1zaXplOiA0cmVtO1xuICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gfVxuXG4gLmxlYWR7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/whoweare/contactus/contactus/contactus.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/whoweare/contactus/contactus/contactus.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <i class=\"fas fa-cubes\"></i> Smart Contract\n  </a>\n  <div>\n    <button routerLink=\"about\" class=\"btn btn-outline-light\">\n      About\n      <span class=\"badge badge-light\"></span>\n    </button>\n    &nbsp;\n    <button routerLink=\"contact\" class=\"btn btn-outline-light\">\n      Contact us\n      <span class=\"badge badge-light\"></span>\n    </button>\n  </div>\n</nav>\n<section class=\"landing\">\n  <div class=\"dark-overlay\">\n    <div class=\"landing-inner\">\n      <h1 class=\"x-large\">Contact Us</h1>\n      <p class=\"lead\">With the increasing popularity of cloud-based data\n        services, data owners are highly motivated to store their huge\n        amount of potentially sensitive personal data files on remote\n        servers in encrypted form. Clients later can query over the\n        encrypted database to retrieve files while protecting privacy of\n        both the queries and the database, by allowing some reasonable\n        leakage information. To this end, the notion of searchable\n        symmetric encryption (SSE) was proposed. Meanwhile, recent\n        literature has shown that most dynamic SSE solutions leaking\n        information on updated keywords are vulnerable to devastating\n        file-injection attacks. The only way to thwart these attacks is\n        to design forward-private schemes. In this paper, we investigate\n        new privacy-preserving indexing and query processing protocols\n        which meet a number of desirable properties, including the multi-\n        keyword query processing with conjunction and disjunction\n        logic queries, practically high privacy guarantees with adaptive\n        chosen keyword attack (CKA2) security and forward privacy,\n        the support of dynamic data operations, and so on.</p>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/whoweare/contactus/contactus/contactus.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/whoweare/contactus/contactus/contactus.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(router) {
        this.router = router;
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/pages/whoweare/contactus/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/pages/whoweare/contactus/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/startpage/startpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/startpage/startpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n}\n\n.landing{\n  position: relative;\n  background:url('/assets/img/bg.jpg') no-repeat center center/cover;\n  height: 91.2vh;\n}\n\n.landing-inner{\n  color: #fff;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: auto;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.dark-overlay{\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0,0,0,0.7);\n}\n\n.x-large{\n   font-size: 4rem;\n   line-height: 1.2;\n   margin-bottom: 1rem;\n }\n\n.lead{\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnRwYWdlL3N0YXJ0cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtFQUFrRTtFQUNsRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGlDQUFpQztBQUNuQzs7QUFDQztHQUNFLGVBQWU7R0FDZixnQkFBZ0I7R0FDaEIsbUJBQW1CO0NBQ3JCOztBQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0cGFnZS9zdGFydHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lciB7XG59XG5cbi5sYW5kaW5ne1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2ltZy9iZy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcbiAgaGVpZ2h0OiA5MS4ydmg7XG59XG4ubGFuZGluZy1pbm5lcntcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRhcmstb3ZlcmxheXtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcbn1cbiAueC1sYXJnZXtcbiAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuIH1cblxuIC5sZWFke1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/startpage/startpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/startpage/startpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <i class=\"fas fa-cubes\"></i> Smart Contract\n  </a>\n  <div>\n    <button routerLink=\"/about\" class=\"btn btn-outline-light\">\n      About\n      <span class=\"badge badge-light\"></span>\n    </button>\n    &nbsp;\n    <button routerLink=\"/contact\" class=\"btn btn-outline-light\">\n      Contact us\n      <span class=\"badge badge-light\"></span>\n    </button>\n  </div>\n</nav>\n<section class=\"landing\">\n  <div class=\"dark-overlay\">\n    <div class=\"landing-inner\">\n      <h1 class=\"x-large\">Healthcare on Blockchain</h1>\n      <p class=\"lead\">Protect your health data on cloud</p>\n      <div class=\"buttons\">\n        <a routerLink=\"sign-in\" class=\"btn btn-outline-light\">\n            Sign In\n            <span class=\"badge badge-light\"></span>\n        </a>\n        &nbsp;\n        <a routerLink=\"sign-up\" class=\"btn btn-outline-light\">\n            Sign Up\n            <span class=\"badge badge-light\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/startpage/startpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/startpage/startpage.component.ts ***!
  \**************************************************/
/*! exports provided: StartpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpageComponent", function() { return StartpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StartpageComponent = /** @class */ (function () {
    function StartpageComponent() {
    }
    StartpageComponent.prototype.ngOnInit = function () {
    };
    StartpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-startpage',
            template: __webpack_require__(/*! ./startpage.component.html */ "./src/app/startpage/startpage.component.html"),
            styles: [__webpack_require__(/*! ./startpage.component.css */ "./src/app/startpage/startpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StartpageComponent);
    return StartpageComponent;
}());



/***/ }),

/***/ "./src/app/templates/navigation-temp/navigation-temp.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/templates/navigation-temp/navigation-temp.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);\n@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);\n.fa-2x {\nfont-size: 2em;\n}\n.fa,.fas, .far {\nposition: relative;\ndisplay: table-cell;\nwidth: 60px;\nheight: 36px;\ntext-align: center;\nvertical-align: middle;\nfont-size:20px;\n}\n.main-menu:hover,nav.main-menu.expanded {\nwidth:250px;\noverflow:visible;\n}\n.main-menu {\nbackground:#343a40!important;\nborder-right:1px solid #e5e5e5;\nposition:absolute;\ntop:0;\nbottom:0;\nheight:100%;\nleft:0;\nwidth:60px;\noverflow:hidden;\ntransition:width .05s linear;\n-webkit-transform:translateZ(0) scale(1,1);\nz-index:1000;\n}\n.main-menu>ul {\nmargin:7px 0;\n}\n.main-menu li {\nposition:relative;\ndisplay:block;\nwidth:250px;\n}\n.main-menu li>a {\nposition:relative;\ndisplay:table;\nborder-collapse:collapse;\nborder-spacing:0;\ncolor:#999;\n font-family: arial;\nfont-size: 14px;\ntext-decoration:none;\n-webkit-transform:translateZ(0) scale(1,1);\ntransition:all .1s linear;\n\n}\n.main-menu .nav-icon {\nposition:relative;\ndisplay:table-cell;\nwidth:60px;\nheight:36px;\ntext-align:center;\nvertical-align:middle;\nfont-size:18px;\n}\n.main-menu .nav-text {\nposition:relative;\ndisplay:table-cell;\nvertical-align:middle;\nwidth:190px;\n  font-family: 'Titillium Web', sans-serif;\n}\n.main-menu>ul.logout {\nposition:absolute;\nleft:0;\nbottom:0;\n}\n.no-touch .scrollable.hover {\noverflow-y:hidden;\n}\n.no-touch .scrollable.hover:hover {\noverflow-y:auto;\noverflow:visible;\n}\na:hover,a:focus {\ntext-decoration:none;\n}\nnav {\n-webkit-user-select:none;\n-moz-user-select:none;\n-ms-user-select:none;\n-o-user-select:none;\nuser-select:none;\n}\nnav ul,nav li {\noutline:0;\nmargin:0;\npadding:0;\n}\n.main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {\ncolor:#fff;\nbackground-color:#5fa2db;\n}\n.area {\nfloat: left;\nbackground: #e2e2e2;\nwidth: 100%;\nheight: 100%;\n}\n@font-face {\n  font-family: 'Titillium Web';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL25hdmlnYXRpb24tdGVtcC9uYXZpZ2F0aW9uLXRlbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUFDOUUsc0VBQXNFO0FBQ3RFO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLFdBQVc7QUFDWCxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixjQUFjO0FBQ2Q7QUFJQTtBQUNBLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEI7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTCxRQUFRO0FBQ1IsV0FBVztBQUNYLE1BQU07QUFDTixVQUFVO0FBQ1YsZUFBZTtBQUVmLDRCQUE0QjtBQUM1QiwwQ0FBMEM7QUFDMUMsWUFBWTtBQUNaO0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsV0FBVztBQUNYO0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLHdCQUF3QjtBQUN4QixnQkFBZ0I7QUFDaEIsVUFBVTtDQUNULGtCQUFrQjtBQUNuQixlQUFlO0FBQ2Ysb0JBQW9CO0FBQ3BCLDBDQUEwQztBQUUxQyx5QkFBeUI7O0FBRXpCO0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixjQUFjO0FBQ2Q7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLFdBQVc7RUFDVCx3Q0FBd0M7QUFDMUM7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixNQUFNO0FBQ04sUUFBUTtBQUNSO0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFFQTtBQUNBLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEI7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCLHFCQUFxQjtBQUNyQixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtBQUVBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVU7QUFDVix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkIsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb01BQW9NO0FBQ3RNIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGVzL25hdmlnYXRpb24tdGVtcC9uYXZpZ2F0aW9uLXRlbXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMC4zL2Nzcy9mb250LWF3ZXNvbWUuY3NzKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UaXRpbGxpdW0rV2ViOjMwMCk7XG4uZmEtMngge1xuZm9udC1zaXplOiAyZW07XG59XG4uZmEsLmZhcywgLmZhciB7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5kaXNwbGF5OiB0YWJsZS1jZWxsO1xud2lkdGg6IDYwcHg7XG5oZWlnaHQ6IDM2cHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuZm9udC1zaXplOjIwcHg7XG59XG5cblxuXG4ubWFpbi1tZW51OmhvdmVyLG5hdi5tYWluLW1lbnUuZXhwYW5kZWQge1xud2lkdGg6MjUwcHg7XG5vdmVyZmxvdzp2aXNpYmxlO1xufVxuXG4ubWFpbi1tZW51IHtcbmJhY2tncm91bmQ6IzM0M2E0MCFpbXBvcnRhbnQ7XG5ib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNlNWU1ZTU7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbnRvcDowO1xuYm90dG9tOjA7XG5oZWlnaHQ6MTAwJTtcbmxlZnQ6MDtcbndpZHRoOjYwcHg7XG5vdmVyZmxvdzpoaWRkZW47XG4td2Via2l0LXRyYW5zaXRpb246d2lkdGggLjA1cyBsaW5lYXI7XG50cmFuc2l0aW9uOndpZHRoIC4wNXMgbGluZWFyO1xuLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZSgxLDEpO1xuei1pbmRleDoxMDAwO1xufVxuXG4ubWFpbi1tZW51PnVsIHtcbm1hcmdpbjo3cHggMDtcbn1cblxuLm1haW4tbWVudSBsaSB7XG5wb3NpdGlvbjpyZWxhdGl2ZTtcbmRpc3BsYXk6YmxvY2s7XG53aWR0aDoyNTBweDtcbn1cblxuLm1haW4tbWVudSBsaT5hIHtcbnBvc2l0aW9uOnJlbGF0aXZlO1xuZGlzcGxheTp0YWJsZTtcbmJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtcbmJvcmRlci1zcGFjaW5nOjA7XG5jb2xvcjojOTk5O1xuIGZvbnQtZmFtaWx5OiBhcmlhbDtcbmZvbnQtc2l6ZTogMTRweDtcbnRleHQtZGVjb3JhdGlvbjpub25lO1xuLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZSgxLDEpO1xuLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMXMgbGluZWFyO1xudHJhbnNpdGlvbjphbGwgLjFzIGxpbmVhcjtcblxufVxuXG4ubWFpbi1tZW51IC5uYXYtaWNvbiB7XG5wb3NpdGlvbjpyZWxhdGl2ZTtcbmRpc3BsYXk6dGFibGUtY2VsbDtcbndpZHRoOjYwcHg7XG5oZWlnaHQ6MzZweDtcbnRleHQtYWxpZ246Y2VudGVyO1xudmVydGljYWwtYWxpZ246bWlkZGxlO1xuZm9udC1zaXplOjE4cHg7XG59XG5cbi5tYWluLW1lbnUgLm5hdi10ZXh0IHtcbnBvc2l0aW9uOnJlbGF0aXZlO1xuZGlzcGxheTp0YWJsZS1jZWxsO1xudmVydGljYWwtYWxpZ246bWlkZGxlO1xud2lkdGg6MTkwcHg7XG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG59XG5cbi5tYWluLW1lbnU+dWwubG9nb3V0IHtcbnBvc2l0aW9uOmFic29sdXRlO1xubGVmdDowO1xuYm90dG9tOjA7XG59XG5cbi5uby10b3VjaCAuc2Nyb2xsYWJsZS5ob3ZlciB7XG5vdmVyZmxvdy15OmhpZGRlbjtcbn1cblxuLm5vLXRvdWNoIC5zY3JvbGxhYmxlLmhvdmVyOmhvdmVyIHtcbm92ZXJmbG93LXk6YXV0bztcbm92ZXJmbG93OnZpc2libGU7XG59XG5cbmE6aG92ZXIsYTpmb2N1cyB7XG50ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxubmF2IHtcbi13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtcbi1tb3otdXNlci1zZWxlY3Q6bm9uZTtcbi1tcy11c2VyLXNlbGVjdDpub25lO1xuLW8tdXNlci1zZWxlY3Q6bm9uZTtcbnVzZXItc2VsZWN0Om5vbmU7XG59XG5cbm5hdiB1bCxuYXYgbGkge1xub3V0bGluZTowO1xubWFyZ2luOjA7XG5wYWRkaW5nOjA7XG59XG4ubWFpbi1tZW51IGxpOmhvdmVyPmEsbmF2Lm1haW4tbWVudSBsaS5hY3RpdmU+YSwuZHJvcGRvd24tbWVudT5saT5hOmhvdmVyLC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXMsLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hLC5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YTpob3ZlciwuZHJvcGRvd24tbWVudT4uYWN0aXZlPmE6Zm9jdXMsLm5vLXRvdWNoIC5kYXNoYm9hcmQtcGFnZSBuYXYuZGFzaGJvYXJkLW1lbnUgdWwgbGk6aG92ZXIgYSwuZGFzaGJvYXJkLXBhZ2UgbmF2LmRhc2hib2FyZC1tZW51IHVsIGxpLmFjdGl2ZSBhIHtcbmNvbG9yOiNmZmY7XG5iYWNrZ3JvdW5kLWNvbG9yOiM1ZmEyZGI7XG59XG4uYXJlYSB7XG5mbG9hdDogbGVmdDtcbmJhY2tncm91bmQ6ICNlMmUyZTI7XG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogbG9jYWwoJ1RpdGlsbGl1bSBXZWJMaWdodCcpLCBsb2NhbCgnVGl0aWxsaXVtV2ViLUxpZ2h0JyksIHVybChodHRwOi8vdGhlbWVzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zdGF0aWMvZm9udHMvdGl0aWxsaXVtd2ViL3YyL2FuTVV2Y05UMEgxWU40RklJOHdwcjI0Yk5DTkVvRlRwUzJCVGpGNkZCNUUud29mZikgZm9ybWF0KCd3b2ZmJyk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/templates/navigation-temp/navigation-temp.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/templates/navigation-temp/navigation-temp.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"area\"></div><nav class=\"main-menu\">\n\n    <ul>\n        <li>\n            <a>\n                <i class=\"fas fa-cubes fa-2x\"></i>\n                <span class=\"nav-text\">\n                    Healthcare on Blockchain\n                </span>\n              </a>\n\n        </li>\n        <li >\n            <a routerLink=\"/home\">\n                <i class=\"fa fa-home fa-2x\"></i>\n                <span class=\"nav-text\">\n                    Dashboard\n                </span>\n            </a>\n\n        </li>\n        <li class=\"has-subnav\">\n            <a routerLink=\"/chainInfo\">\n                <i class=\"fas fa-address-card fa-2x\"></i>\n                <span class=\"nav-text\">\n                  Contract\n                </span>\n            </a>\n\n        </li>\n        <li class=\"has-subnav\">\n            <a routerLink=\"/organizations\">\n               <i class=\"fas fa-hospital-alt fa-2x\"></i>\n                <span class=\"nav-text\">\n                  Organization\n                </span>\n            </a>\n\n        </li>\n        <li class=\"has-subnav\">\n            <a routerLink=\"/doctorList\" >\n               <i class=\"fas fa-user-md fa-2x\"></i>\n                <span class=\"nav-text\">\n                    Doctor List\n                </span>\n            </a>\n\n        </li>\n        <li>\n            <a  routerLink=\"/userList\">\n                <i class=\"fas fa-users fa-2x\"></i>\n                <span class=\"nav-text\">\n                    User List\n                </span>\n            </a>\n        </li>\n        <li>\n            <a routerLink =\"/uploadDocument\">\n                <i class=\"fas fa-file-medical fa-2x\"></i>\n                <span class=\"nav-text\">\n                   Upload Records\n                </span>\n            </a>\n        </li>\n        <li>\n           <a href=\"#\">\n               <i class=\"fa fa-table fa-2x\"></i>\n                <span class=\"nav-text\">\n                    Tables\n                </span>\n            </a>\n        </li>\n        <li>\n           <a href=\"#\">\n                <i class=\"fa fa-map-marker fa-2x\"></i>\n                <span class=\"nav-text\">\n                    Maps\n                </span>\n            </a>\n        </li>\n        <li>\n            <a href=\"/\" >\n               <i class=\"fa fa-info fa-2x\"></i>\n                <span class=\"nav-text\">\n                    Documentation\n                </span>\n            </a>\n        </li>\n    </ul>\n\n    <ul class=\"logout\">\n        <li>\n           <a href=\"/\" (click)=\"logout()\">\n                 <i class=\"fa fa-power-off fa-2x\"></i>\n                <span class=\"nav-text\">\n                    Logout\n                </span>\n            </a>\n        </li>\n    </ul>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/templates/navigation-temp/navigation-temp.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/templates/navigation-temp/navigation-temp.component.ts ***!
  \************************************************************************/
/*! exports provided: NavigationTempComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationTempComponent", function() { return NavigationTempComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");




var NavigationTempComponent = /** @class */ (function () {
    function NavigationTempComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loggedUser = userService.selectedUser;
    }
    NavigationTempComponent.prototype.ngOnInit = function () {
    };
    NavigationTempComponent.prototype.logout = function () {
        this.userService.deleteToken();
        this.router.navigate(['']);
    };
    NavigationTempComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-temp',
            template: __webpack_require__(/*! ./navigation-temp.component.html */ "./src/app/templates/navigation-temp/navigation-temp.component.html"),
            styles: [__webpack_require__(/*! ./navigation-temp.component.css */ "./src/app/templates/navigation-temp/navigation-temp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], NavigationTempComponent);
    return NavigationTempComponent;
}());



/***/ }),

/***/ "./src/entry/patient.ts":
/*!******************************!*\
  !*** ./src/entry/patient.ts ***!
  \******************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
var Patient = /** @class */ (function () {
    function Patient() {
    }
    Patient.prototype.deserialize = function (input) {
        Object.assign(this, input);
        return this;
    };
    return Patient;
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

module.exports = __webpack_require__(/*! /media/ulziimunkh/fac72731-2c44-4979-88b2-1f1d52d09764/ulziimunkh/nodejs/blockchain/ichain/Ichain/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map