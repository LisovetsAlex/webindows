const Controller = require("../../decorators/Controller");
const Route = require("../../decorators/Route");
const path = require("path");

@Controller("/")
class FEController {
    constructor() {}

    @Route("GET", "/")
    getIndex(req, res) {
        res.sendFile(path.join(__dirname, "../../../fe-build/index.html"));
    }

    @Route("GET", "/:filepath(*)")
    getFiles(req, res) {
        res.sendFile(path.join(__dirname, "../../../fe-build", req.params.filepath));
    }
}

module.exports = FEController;
