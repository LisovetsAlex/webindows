const startProdServer = require("./server/startProdServer");
const connectToDB = require("./db-connection/index");
const registerRoutes = require("./decorators/registerRoutes");
const dotenv = require("dotenv");

async function createApp() {
    dotenv.config();
    const app = startProdServer();
    const db = await connectToDB();

    registerRoutes(app, db);

    return app;
}

const app = createApp();

module.exports = app;
