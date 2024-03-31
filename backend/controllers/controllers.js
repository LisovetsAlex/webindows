const UserController = require("./db-controller/controller");
const FEController = require("./fe-controller/controller");

const controllers = [UserController, FEController];

module.exports = controllers;
