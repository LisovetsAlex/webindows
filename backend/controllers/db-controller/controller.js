const UserService = require("./service");
const Controller = require("../../decorators/Controller");
const Route = require("../../decorators/Route");

@Controller("/db")
class UserController {
    constructor() {
        this.service = new UserService();
    }

    @Route("POST", "/login")
    loginUser(req, res) {
        this.service.loginUser(req.body.username, req.body.password).then((result) => {
            res.send(result);
        });
    }

    @Route("POST", "/register")
    registerUser(req, res) {
        this.service.registerUser(req.body.username, req.body.password).then((result) => {
            res.send(result);
        });
    }
}

module.exports = UserController;
