const DBService = require("./service");
const Controller = require("../../decorators/Controller");
const Route = require("../../decorators/Route");

@Controller("/db")
class DBController {
    constructor(db) {
        this.service = new DBService(db);
    }

    @Route("GET", "/test")
    getData(req, res) {
        res.send("This is a test!");
    }
}

module.exports = DBController;
