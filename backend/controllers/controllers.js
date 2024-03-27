const DBController = require("./db-controller/controller");
const FEController = require("./fe-controller/controller");

const controllers = [DBController, FEController];

module.exports = controllers;
