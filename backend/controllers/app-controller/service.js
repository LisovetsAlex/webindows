const { convertToPartialAppSettings } = require("../../Utils/PartialAppConverter");
const AppsModel = require("../../models/Apps");
const UsersModel = require("../../models/Users");

class AppService {
    async getAllApps() {
        try {
            const allApps = await AppsModel.find({});
            if (allApps) return { msg: "true", apps: allApps };
            return { msg: "false", apps: null };
        } catch (err) {
            console.log(err);
            return { msg: "error", apps: null };
        }
    }

    async createApp(data) {
        try {
            if (await AppsModel.findOne({ name: data.name })) return { msg: "false", app: null };

            const newDocument = await AppsModel.create(data);
            return { msg: "true", app: newDocument };
        } catch (error) {
            console.error(error);
        }
    }

    async updateApp(id, newData) {
        try {
            const oldData = await AppsModel.findById(id);
            const obj = convertToPartialAppSettings(newData, oldData);
            const updatedApp = await AppsModel.updateOne({ _id: id }, { $set: obj });

            if (updatedApp) return { msg: "true", app: updatedApp };

            return { msg: "false", app: null };
        } catch (err) {
            console.log(err);
            return { msg: "error", app: null };
        }
    }

    async deleteApp(id) {
        try {
            const deletedApp = await AppsModel.findByIdAndDelete(id);
            if (deletedApp) return { msg: "true", app: deletedApp };

            return { msg: "false", app: null };
        } catch (err) {
            console.log(err);
            return { msg: "error", app: null };
        }
    }

    async getAllWithOwners() {
        try {
            const appsWithOwners = await AppsModel.find().populate("owner_id");
            return appsWithOwners;
        } catch (error) {
            console.error("Error fetching users with apps:", error);
            throw error;
        }
    }
}

module.exports = AppService;
