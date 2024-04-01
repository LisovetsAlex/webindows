const Controller = require("../../decorators/Controller");
const Route = require("../../decorators/Route");
const AppService = require("./service");

@Controller("/apps")
class AppController {
    constructor() {
        this.service = new AppService();
    }

    @Route("GET", "/all")
    async getAll(req, res) {
        this.service.getAllApps().then((data) => {
            res.send(data);
        });
    }

    @Route("POST", "/create")
    async create(req, res) {
        this.service.createApp(req.body.data).then((data) => {
            res.send(data);
        });
    }

    @Route("PUT", "/update")
    async update(req, res) {
        this.service.updateSettings(req.body.id, req.body.data).then((data) => {
            res.send(data);
        });
    }

    @Route("DELETE", "/delete")
    async delete(req, res) {
        this.service.deleteApp(req.body.id).then((data) => {
            res.send(data);
        });
    }
}

module.exports = AppController;
