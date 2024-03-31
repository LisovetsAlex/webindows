const Controller = require("../../decorators/Controller");
const Route = require("../../decorators/Route");
const AppService = require("./app.service");

@Controller("/db/apps")
class AppController {
    constructor(db) {
        this.service = new AppService(db);
    }

    @Route("GET", "/all")
    async getAll(req, res) {
        AppService.getAllApps().then((data) => {
            res.send(data);
        });
    }

    @Route("POST", "/create")
    async create(req, res) {
        AppService.createApp(req.body.name, req.body.data).then((data) => {
            res.send(data);
        });
    }

    @Route("PUT", "/update")
    async update(req, res) {
        AppService.updateSettings(req.body.id, req.body.data).then((data) => {
            res.send(data);
        });
    }

    @Route("DELETE", "/delete")
    async delete(req, res) {
        AppService.deleteApp(req.body.id).then((data) => {
            res.send(data);
        });
    }
}

module.exports = AppController;
