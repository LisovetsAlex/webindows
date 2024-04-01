const UsersModel = require("../../models/Users");
const AppsModel = require("../../models/Apps");
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

    async getApps(user) {
        try {
            if (!user) return res.status(400).json({ error: "User object not provided in request body" });

            const apps = await AppsModel.find({ owner_id: user._id });

            return apps;
        } catch (error) {
            console.error("Error fetching user's apps:", error);
            return null;
        }
    }

    async uploadApp(user, app) {
        try {
            const newApp = {
                name: app.name,
                owner_id: user._id,
                start_url: app.html,
                settings: {
                    description: app.settings?.description ?? "Some App",
                    icon: app.settings?.icon ?? "Assets/Img_Program.PNG",
                    defaultScale: {
                        width: app.settings?.defaultScale.width ?? 350,
                        height: app.settings?.defaultScale.height ?? 200,
                    },
                },
            };

            const savedApp = await AppsModel.create(newApp);
            await UsersModel.findByIdAndUpdate(user._id, { $push: { owned_apps: savedApp._id } });

            return savedApp;
        } catch (error) {
            console.error("Error creating new app:", error);
            return null;
        }
    }
}

module.exports = UserService;
