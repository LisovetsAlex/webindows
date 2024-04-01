const UsersModel = require("../../models/Users");
const { ObjectId } = require("mongodb");

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

    async changeBackground(user, files) {
        try {
            const filePath = "Assets/" + files["file"][0].filename;
            const userJson = JSON.parse(user);

            const updatedUser = await UsersModel.findOne({ _id: userJson._id });

            if (!updatedUser) {
                return { msg: "false", user: null };
            }

            updatedUser.personal_settings.bg_img_url = filePath;
            await updatedUser.save();

            return { msg: "true", user: updatedUser };
        } catch (error) {
            console.error("Error updating background:", error);
            return { msg: "error", user: null };
        }
    }
}

module.exports = UserService;
