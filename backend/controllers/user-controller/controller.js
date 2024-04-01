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

        try {
            const user = req.body.user;
            const file = req.files["file"][0];
            res.status(200).json({ message: "File uploaded successfully", filePath: file.path, user });
        } catch (error) {
            console.error("Error saving file:", error);
            res.status(500).json({ error: "Failed to save file" });
        }
    }
}

module.exports = UserController;
