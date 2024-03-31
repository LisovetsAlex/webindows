const { default: mongoose } = require("mongoose");
const { default: AppModel } = require("../../Models/app.model");

class DBService {
    constructor(db) {
        this.db = db;
    }

    insert(data) {
        this.db.collection("app").insertOne(data);
    }
}

module.exports = DBService;
