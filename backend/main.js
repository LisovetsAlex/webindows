const startDevServer = require("./server/startDevServer");
const startProdServer = require("./server/startProdServer");
const connectToDB = require("./db-connection/index");
const registerRoutes = require("./decorators/registerRoutes");
const dotenv = require("dotenv");
const { AppModel } = require("./Models/app.model");
const { SettingsModel } = require("./Models/settings.model");

async function createApp() {
    dotenv.config();
    const app = process.env.NODE_ENV === "production" ? startProdServer() : startDevServer();
    const db = await connectToDB();

    createCollections(db, [AppModel, SettingsModel]);

    registerRoutes(app, db);

    return app;
}

function createCollections(db, collections) {
    console.log("creating collections...");

    collections.forEach((collection) => {
        if (!db.models[collection.modelName]) {
            db.model(collection.modelName, collection.schema);
        }
    });

    console.log("collections created!");
}

const app = createApp();

module.exports = app;
