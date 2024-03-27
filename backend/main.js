const startDevServer = require("./server/startDevServer");
const startProdServer = require("./server/startProdServer");
const connectToDB = require("./db-connection/index");
const registerRoutes = require("./decorators/registerRoutes");

async function createApp() {
    const app = process.env.NODE_ENV === "production" ? startProdServer() : startDevServer();
    const db = await connectToDB();

    registerRoutes(app, db);

    return app;
}

const app = createApp();

module.exports = app;
