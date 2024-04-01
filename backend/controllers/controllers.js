const UserController = require("./db-controller/controller");
const FEController = require("./fe-controller/controller");
const AppController = require("./app-controller/controller");

const controllers = [UserController, FEController, AppController];

module.exports = controllers;
