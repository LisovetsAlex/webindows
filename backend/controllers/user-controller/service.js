const UsersModel = require("../../models/Users");
const fs = require("fs");

class UserService {
    async loginUser(username, password) {
        try {
            const user = await UsersModel.findOne({ name: username, password });
            if (!user) return { msg: "false", user: null };
            return { msg: "true", user };
        } catch (error) {
            console.error("Error finding user:", error);
            return { msg: "error", user: null };
        }
    }

    async registerUser(username, password) {
        try {
            if (await UsersModel.findOne({ name: username })) return { msg: "false", user: null };
            const newUser = await UsersModel.create({ name: username, password });
            return { msg: "true", user: newUser };
        } catch (error) {
            console.error("Error finding user:", error);
            return { msg: "error", user: null };
        }
    }

    async changeBackground(user, file) {}
}

module.exports = UserService;
