const app = require("./server/startProdServer");
const connectToDB = require("./db-connection/index");
const registerRoutes = require("./decorators/registerRoutes");
require("dotenv").config({ path: "../.dev.env" });

async function createApp() {
    const db = await connectToDB();

    registerRoutes(app);

    return app;
}

createApp();

module.exports = app;
