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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../DevEcoStudioProjects/smart_watch/entry/src/main/js/default/i18n/weather_api.json":
/*!*******************************************************************************************************!*\
  !*** C:/Users/dagay/DevEcoStudioProjects/smart_watch/entry/src/main/js/default/i18n/weather_api.json ***!
  \*******************************************************************************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"latitude\":\"28.4595\",\"longitude\":\"77.0266\",\"api_key\":\"cb88a8818e8fe0af7612a1b624556ce4\"},{}]");

/***/ }),

/***/ "../../../../../../../DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.hml?entry":
/*!*************************************************************************************************************!*\
  !*** C:/Users/dagay/DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Downloads/temp/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../Downloads/temp/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../../DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Downloads/temp/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../Downloads/temp/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../../DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Downloads/temp/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../../../../../Downloads/temp/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=C:/Users/dagay/Downloads/temp/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/dagay/Downloads/temp/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../Downloads/temp/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\dagay\\Downloads\\temp\\SDK-offline-2.2.0.3-winodws\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\dagay\\Downloads\\temp\\SDK-offline-2.2.0.3-winodws\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.css":
/*!************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:/Users/dagay/DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".body": {
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".container": {
    "width": "400px",
    "height": "400px",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "backgroundImage": "common/images/watch_bg.png",
    "backgroundSize": "contain",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center"
  },
  ".header": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "60px",
    "height": "400px",
    "top": "40px",
    "left": "70px",
    "fitOriginalSize": "true",
    "backgroundSize": "10px",
    "position": "absolute"
  },
  ".fit": {
    "height": "208.5px",
    "width": "12.25px",
    "top": "40px",
    "right": "90px",
    "backgroundSize": "12px",
    "position": "absolute",
    "backgroundImage": "common/images/cardio_fitness_level.png",
    "backgroundRepeat": "no-repeat"
  },
  ".fitrange": {
    "height": "10px",
    "width": "10px",
    "top": "50px",
    "right": "92px",
    "backgroundSize": "7px",
    "position": "absolute",
    "backgroundImage": "common/images/cardio_fitness_level_range.png",
    "backgroundRepeat": "no-repeat"
  },
  ".blue": {
    "height": "56px",
    "width": "176px",
    "top": "67px",
    "left": "123px",
    "position": "absolute",
    "backgroundSize": "15px",
    "backgroundImage": "common/images/Heart_rate_blue.png",
    "backgroundRepeat": "no-repeat"
  },
  ".green": {
    "top": "50px",
    "left": "127px",
    "position": "absolute",
    "backgroundSize": "12px",
    "backgroundImage": "common/images/Heart_rate_green.png",
    "backgroundRepeat": "no-repeat"
  },
  ".yellow": {
    "top": "30px",
    "left": "125px",
    "position": "absolute",
    "backgroundSize": "13px",
    "backgroundImage": "common/images/Heart_rate_yellow.png",
    "backgroundRepeat": "no-repeat"
  },
  ".red": {
    "top": "10px",
    "left": "120px",
    "position": "absolute",
    "backgroundSize": "15px",
    "backgroundImage": "common/images/Heart_rate_red.png",
    "backgroundRepeat": "no-repeat"
  },
  ".grey": {
    "top": "90px",
    "left": "116px",
    "position": "absolute",
    "backgroundSize": "17px",
    "backgroundImage": "common/images/Heart_rate_grey.png",
    "backgroundRepeat": "no-repeat"
  },
  ".bdox": {
    "height": "269px",
    "width": "177.7px",
    "bottom": "17px",
    "right": "20px",
    "position": "absolute",
    "backgroundSize": "45px",
    "backgroundImage": "common/images/Blood_oxygen_range.png",
    "backgroundRepeat": "no-repeat"
  },
  ".bloodbg": {
    "height": "269px",
    "width": "177.7px",
    "bottom": "20px",
    "right": "20px",
    "position": "absolute",
    "backgroundSize": "55px",
    "backgroundImage": "common/images/Blood_oxygen_range_bg.png",
    "backgroundRepeat": "no-repeat"
  },
  ".slp1": {
    "height": "206.5px",
    "width": "144px",
    "bottom": "40px",
    "left": "85px",
    "position": "absolute",
    "backgroundSize": "20px",
    "backgroundImage": "common/images/sleep_range_level1.png",
    "backgroundRepeat": "no-repeat"
  },
  ".slp2": {
    "height": "206.5px",
    "width": "144px",
    "bottom": "45px",
    "left": "75px",
    "position": "absolute",
    "backgroundSize": "22px",
    "backgroundImage": "common/images/sleep_range_level2.png",
    "backgroundRepeat": "no-repeat"
  },
  ".slp3": {
    "height": "206.5px",
    "width": "144px",
    "bottom": "50px",
    "left": "60px",
    "position": "absolute",
    "backgroundSize": "24px",
    "backgroundImage": "common/images/sleep_range_level3.png",
    "backgroundRepeat": "no-repeat"
  },
  ".slp4": {
    "height": "206.5px",
    "width": "144px",
    "bottom": "53px",
    "left": "45px",
    "position": "absolute",
    "backgroundSize": "22px",
    "backgroundImage": "common/images/sleep_range_level4.png",
    "backgroundRepeat": "no-repeat"
  },
  ".calr": {
    "height": "417.6px",
    "width": "73.25px",
    "top": "140px",
    "left": "62px",
    "position": "absolute",
    "backgroundSize": "50px",
    "backgroundImage": "common/images/calories-burned_range.png",
    "backgroundRepeat": "no-repeat"
  },
  ".calbg": {
    "height": "417.6px",
    "width": "73.25px",
    "top": "130px",
    "left": "62px",
    "position": "absolute",
    "backgroundSize": "60px",
    "backgroundImage": "common/images/calories_burned_bg.png",
    "backgroundRepeat": "no-repeat"
  },
  ".stepr": {
    "height": "417.6px",
    "width": "73.25px",
    "top": "140px",
    "right": "17px",
    "position": "absolute",
    "backgroundSize": "50px",
    "backgroundImage": "common/images/step_counter_range.png",
    "backgroundRepeat": "no-repeat"
  },
  ".stepbg": {
    "height": "417.6px",
    "width": "73.25px",
    "top": "135px",
    "right": "20px",
    "position": "absolute",
    "backgroundSize": "50px",
    "backgroundImage": "common/images/step_counter_bg.png",
    "backgroundRepeat": "no-repeat"
  },
  ".temp": {
    "height": "417.6px",
    "width": "73.25px",
    "top": "10px",
    "left": "20px",
    "position": "absolute",
    "backgroundSize": "30px",
    "backgroundImage": "common/images/sun & rain.png",
    "backgroundRepeat": "no-repeat"
  },
  ".cal": {
    "fontSize": "12px",
    "right": "15px",
    "focusFontSize": "10px",
    "transform": "{\"rotate\":\"80deg\"}",
    "transformOrigin": "10% 10%"
  },
  ".textarea": {
    "placeholderColor": "#808080"
  },
  ".weather_description": {
    "fontSize": "6.5px",
    "fontFamily": "poppins-regular",
    "colour": "white",
    "width": "23px",
    "height": "10px",
    "top": "25.5px",
    "left": "-70px",
    "textOverflow": "ellipsis"
  },
  ".date": {
    "position": "absolute",
    "fontSize": "12px",
    "fontFamily": "poppins-regular",
    "colour": "white",
    "width": "70px",
    "height": "14px",
    "top": "110px",
    "right": "75px",
    "textOverflow": "ellipsis"
  },
  ".time": {
    "position": "absolute",
    "fontSize": "30px",
    "fontFamily": "poppins-regular",
    "colour": "white",
    "width": "100px",
    "height": "30px",
    "top": "130px",
    "right": "50px",
    "textOverflow": "ellipsis"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.hml":
/*!***************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:/Users/dagay/DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.hml ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:16",
    "className": "body"
  },
  "type": "div",
  "classList": [
    "body"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:17",
        "className": "container"
      },
      "type": "div",
      "classList": [
        "container"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:18",
            "className": "header"
          },
          "type": "div",
          "classList": [
            "header"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:19",
                "className": "blue"
              },
              "type": "image",
              "classList": [
                "blue"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:20",
                "className": "fit"
              },
              "type": "image",
              "classList": [
                "fit"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:21",
                "className": "fitrange"
              },
              "type": "image",
              "classList": [
                "fitrange"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:22",
                "className": "green"
              },
              "type": "image",
              "classList": [
                "green"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:23",
                "className": "yellow"
              },
              "type": "image",
              "classList": [
                "yellow"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:24",
                "className": "red"
              },
              "type": "image",
              "classList": [
                "red"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:25",
                "className": "grey"
              },
              "type": "image",
              "classList": [
                "grey"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:27",
                "className": "bloodbg"
              },
              "type": "image",
              "classList": [
                "bloodbg"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:28",
                "className": "bdox"
              },
              "type": "image",
              "classList": [
                "bdox"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:30",
                "className": "slp1"
              },
              "type": "image",
              "classList": [
                "slp1"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:31",
                "className": "slp2"
              },
              "type": "image",
              "classList": [
                "slp2"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:32",
                "className": "slp3"
              },
              "type": "image",
              "classList": [
                "slp3"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:33",
                "className": "slp4"
              },
              "type": "image",
              "classList": [
                "slp4"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:35",
                "className": "calbg"
              },
              "type": "image",
              "classList": [
                "calbg"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:36",
                "className": "calr"
              },
              "type": "image",
              "classList": [
                "calr"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:38",
                "className": "stepbg"
              },
              "type": "image",
              "classList": [
                "stepbg"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:39",
                "className": "stepr"
              },
              "type": "image",
              "classList": [
                "stepr"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:41",
                "className": "temp"
              },
              "type": "image",
              "classList": [
                "temp"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:45",
            "className": "weather_description"
          },
          "type": "div",
          "classList": [
            "weather_description"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:46",
                "value": function () {return this.weather_description}
              },
              "type": "text"
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:48",
            "className": "date"
          },
          "type": "div",
          "classList": [
            "date"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:49",
                "value": function () {return (this.date_d) + decodeURI('%20') + (this.date_m) + decodeURI('%20') + (this.date_w)}
              },
              "type": "text"
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:51",
            "className": "time"
          },
          "type": "div",
          "classList": [
            "time"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:52",
                "value": "12:00"
              },
              "type": "text"
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\dagay\\Downloads\\temp\\SDK-offline-2.2.0.3-winodws\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\dagay\\Downloads\\temp\\SDK-offline-2.2.0.3-winodws\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=C:/Users/dagay/Downloads/temp/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/dagay/Downloads/temp/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:/Users/dagay/DevEcoStudioProjects/smart_watch/entry/src/main/js/default/pages/index/index.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _system = _interopRequireDefault(requireModule("@system.fetch"));

var _weather_api = _interopRequireDefault(__webpack_require__(/*! ../../i18n/weather_api.json */ "../../../../../../../DevEcoStudioProjects/smart_watch/entry/src/main/js/default/i18n/weather_api.json"));

var _default = {
  fetchDate: function fetchDate() {
    var date = new Date();
    this.date_d = String(date.getDate());
    this.date_m = String(date.getMonth() + 1);
    var dayOfWeek = date.getDay();
    var month = date.getMonth();
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.date_w = days[dayOfWeek];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.date_m = months[month];
  },
  fetchWeather: function fetchWeather() {
    var _this = this;

    var dataw = JSON.stringify(_weather_api["default"]);
    var weather_api_input = JSON.parse(dataw);
    var data;

    _system["default"].fetch({
      url: "https://api.openweathermap.org/data/2.5/weather?lat=" + weather_api_input[0].latitude + "&lon=" + weather_api_input[0].longitude + "&appid=" + weather_api_input[0].api_key,
      responseType: "json",
      method: 'GET',
      success: function success(resp) {
        data = JSON.stringify(resp);
        console.info('Weather data fetch success. Resp: ' + data);
      },
      fail: function fail(data, code) {
        console.log("fail data: " + JSON.stringify(data) + " fail code: " + code);
      },
      complete: function complete() {
        (0, _newArrowCheck2["default"])(this, _this);
        var main = data.weather[0].main;
        this.weather = main;
        this.weather_description = main;
      }.bind(this)
    });
  },
  onInit: function onInit() {
    this.fetchWeather();
    this.fetchDate();
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/newArrowCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/newArrowCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map