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
        res.send(newUser.user);
    }

    @Route("POST", "/bg")
    async changeBG(req, res) {
        const { user, file } = req.body;
        console.log(req.body);
        if (!user || !file) {
            return res.status(400).json({ error: "User and file information are required." });
        }

        try {
            const result = await this.service.changeBackground(JSON.parse(user), file);
            res.json({ message: "Background changed successfully." });
        } catch (error) {
            console.error("Error changing background:", error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

module.exports = UserController;
