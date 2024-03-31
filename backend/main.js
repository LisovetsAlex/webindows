const startProdServer = require("./server/startProdServer");
const connectToDB = require("./db-connection/index");
const registerRoutes = require("./decorators/registerRoutes");
const dotenv = require("dotenv");

async function createApp() {
    dotenv.config();
    const app = startProdServer();
    const db = await connectToDB();

    registerRoutes(app, db);

    process.on("SIGTERM", () => shutdown(app));
    process.on("SIGINT", () => shutdown(app));

    return app;
}

async function shutdown(app) {
    console.log("Shutting down...");

    await app.close();
    process.exit(0);
}

createApp();
