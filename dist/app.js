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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hello.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hello.ts":
/*!******************!*\
  !*** ./hello.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar name = 'Heather Till';\nvar career = 'Soon to be Junior Developer. Past elementary teacher. Full time student - there is too much in this world to ever be done learning.';\nvar aboutMe = 'I am a jack-of-all-trades. I am too curious, impatient, and cheap to pay some to do something I can do myself. Because of this I have learned how to find the information I need to solve most any problem that comes into my life. I have been married almost 21 years and have 3 children and 1 very spoiled black lab. They are 20, 17, and 13. I studied art all through high school and most of college. Because of this love of art and creating, I always have some creative project in the making.\\n\\n';\nvar interests = '\\n* Knitting\\n* Sewing\\n* Photo editing\\n* Graphic design\\n* Travel\\n\\n';\nvar skills = '\\n* Painting\\n* Baking and cooking\\n* Appliance repair\\n* Furniture making and reupholstery\\n* Irrigation\\n* General problem solving\\n* Costume and stage design\\n* Programming\\n\\n';\nvar companyName = [\n    'Clear Lake YMCA, Clear Lake City, TX',\n    'Garfield Elementary, Houston,TX',\n    'Birmingham Early Learning Center, Birmingham, AL'\n];\nvar jobTitle = [\n    'Lifeguard',\n    '3rd grade teacher',\n    'Preschool Teacher'\n];\nvar description = [\n    'I lifeguarded and taught swim lessons at a number of area pools for 3 years.',\n    'I was the Gifted and Talented teacher for the 3rd grade for 2 years.',\n    'I taught the 3K class at the center for 1 year.'\n];\nvar skill1 = {\n    skill: 'Painting',\n    cool: 1\n};\nvar skill2 = {\n    skill: 'Baking and cooking',\n    cool: 0\n};\nvar skill3 = {\n    skill: 'Appliance repair',\n    cool: 0\n};\nvar skill4 = {\n    skill: 'Furniture making and reupholstery',\n    cool: 0\n};\nvar skill5 = {\n    skill: 'Irrigation',\n    cool: 0\n};\nvar skill6 = {\n    skill: 'General problem solving',\n    cool: 1\n};\nvar skill7 = {\n    skill: 'Costume and stage design',\n    cool: 1\n};\nvar skill8 = {\n    skill: 'Programming',\n    cool: 1\n};\nfunction displaySkill(skill, cool) {\n    if (cool === 1) {\n        console.log('* BAM: ' + skill);\n    }\n    else if (cool == 0) {\n        console.log('* ' + skill);\n    }\n}\nvar skillArray = [\n    skill1,\n    skill2,\n    skill3,\n    skill4,\n    skill5,\n    skill6,\n    skill7,\n    skill8\n];\nfor (var i = 0; i < skillArray.length; i++) {\n    displaySkill(skillArray[i].skill, skillArray[i].cool);\n}\nconsole.log('Name: ', name.toUpperCase());\nconsole.log('Career: ', career);\nconsole.log('About Me: ', aboutMe);\nconsole.log('Interests: ', interests);\nconsole.log('Skills: ', skills);\nfunction displayPosition(companyName, jobTitle, description) {\n    console.log('My Previous Experience:\\n* ' +\n        jobTitle +\n        ' at ' +\n        companyName +\n        ' - ' +\n        description);\n}\ndisplayPosition(companyName[0], jobTitle[0], description[0]);\ndisplayPosition(companyName[1], jobTitle[1], description[1]);\ndisplayPosition(companyName[2], jobTitle[2], description[2]);\n\n\n//# sourceURL=webpack:///./hello.ts?");

/***/ })

/******/ });