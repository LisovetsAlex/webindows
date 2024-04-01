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
        const { user } = req.body;
        const files = req.files;

        if (!files || !files["file"]) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        await this.service.changeBackground(user, files);

        res.status(200).json({ msg: "true" });
    }

    @Route("POST", "/apps")
    async getApps(req, res) {
        const user = req.body.user;
        if (!user) return res.status(400).json({ error: "User object not provided in request body" });
        const apps = await this.service.getApps(user);
        res.status(200).json({ msg: "true", apps });
    }

    @Route("POST", "/upload")
    async uploadApp(req, res) {
        const user = req.body.user;
        const app = req.body.app;

        const result = await this.service.uploadApp(user, app);
        if (result) return res.status(200).json({ msg: "true" });
    }
}

module.exports = UserController;
