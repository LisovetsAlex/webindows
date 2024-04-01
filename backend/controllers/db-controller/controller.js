const UserService = require("./service");
const Controller = require("../../decorators/Controller");
const Route = require("../../decorators/Route");

@Controller("/db")
class UserController {
    constructor() {
        this.service = new UserService();
    }

    @Route("POST", "/login")
    login(req, res) {
        this.service.loginUser(req.body.username, req.body.password).then((data) => {
            res.send(data);
        });
    }

    @Route("POST", "/register")
    register(req, res) {
        this.service.registerUser(req.body.username, req.body.password).then((data) => {
            res.send(data);
        });
    }
}

module.exports = UserController;
