const UserController = require("./user-controller/controller");
const FEController = require("./fe-controller/controller");
const AppController = require("./app-controller/controller");
const FileController = require("./file-controller/controller");

const controllers = [UserController, FEController, AppController, FileController];

module.exports = controllers;
