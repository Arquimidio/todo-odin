"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_odin"] = self["webpackChunktodo_odin"] || []).push([["main"],{

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.todo = [];\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-odin/./src/components/Project.js?");

/***/ }),

/***/ "./src/components/Storage.js":
/*!***********************************!*\
  !*** ./src/components/Storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/components/Project.js\");\n\r\n\r\nconst LIST_NAME = 'todoList';\r\n\r\nclass ProjectList {\r\n    constructor(projects = []) {\r\n        this.projects = projects;\r\n    }\r\n}\r\n\r\nclass Storage {\r\n\r\n    static findByProp(array, prop, propVal) {\r\n        return array.find(item => item[prop] === propVal);\r\n    }\r\n\r\n    static getList() {\r\n        const list = localStorage.getItem(LIST_NAME);\r\n        return JSON.parse(list);\r\n    }\r\n\r\n    static setList(list = new ProjectList()) {\r\n        localStorage.setItem(\r\n            LIST_NAME,\r\n            JSON.stringify(list)\r\n        )\r\n    }\r\n\r\n    static initialize() {\r\n        if(!this.getList()) {\r\n            this.setList();\r\n            this.setProject(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Default'))\r\n        }\r\n    }\r\n\r\n    static setProject(project) {\r\n        const { projects } = this.getList();\r\n        if(!this.findByProp(projects, 'name', project.name)) {\r\n            projects.push(project);\r\n            this.setList(new ProjectList(projects));\r\n        } else {\r\n            console.error('A project with this name already exists');\r\n        }\r\n    }\r\n\r\n    static setTask(projectName, task) {\r\n        const { projects } = this.getList();\r\n        const targetProject = this.findByProp(projects, 'name', projectName);\r\n        if(targetProject) {\r\n            targetProject.push(task);\r\n            this.setList(new ProjectList(projects));\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todo-odin/./src/components/Storage.js?");

/***/ }),

/***/ "./src/components/UserInterface.js":
/*!*****************************************!*\
  !*** ./src/components/UserInterface.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserInterface)\n/* harmony export */ });\n\r\nclass UserInterface {\r\n    static projectList;\r\n    static projects = document.getElementById('projects')\r\n\r\n    static updateProjectList(Storage) {\r\n        this.projectList = Storage.getList().projects;\r\n    }\r\n\r\n    static showProjects() {\r\n        this.projectList.forEach(project => {\r\n            const listItem = document.createElement('li');\r\n            listItem.textContent = project.name;\r\n            this.projects.append(project);\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-odin/./src/components/UserInterface.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Storage */ \"./src/components/Storage.js\");\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Project */ \"./src/components/Project.js\");\n/* harmony import */ var _components_UserInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UserInterface */ \"./src/components/UserInterface.js\");\n\r\n\r\n\r\n\r\n_components_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initialize();\r\n_components_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setProject(new _components_Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Dorime'));\r\n_components_UserInterface__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateProjectList(_components_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n_components_UserInterface__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showProjects();\n\n//# sourceURL=webpack://todo-odin/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);