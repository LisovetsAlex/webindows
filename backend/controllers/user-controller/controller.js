const UserService = require("./service");
const Controller = require("../../decorators/Controller");
const Route = require("../../decorators/Route");

@Controller("/user")
class UserController {
    constructor() {
        this.service = new UserService();
    }

    @Route("POST", "/login")
    async loginUser(req, res) {
        const result = await this.service.loginUser(req.body.username, req.body.password);
        if (result.msg === "true") return res.send(result.user);

        const newUser = await this.service.registerUser(req.body.username, req.body.password);
        res.send(newUser);
    }
}

module.exports = UserController;
