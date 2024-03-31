const app = require("./server/startProdServer");
const connectToDB = require("./db-connection/index");
const registerRoutes = require("./decorators/registerRoutes");
const dotenv = require("dotenv");

async function createApp() {
    dotenv.config();
    await connectToDB();

    registerRoutes(app);

    process.on("SIGTERM", () => shutdown(app));
    process.on("SIGINT", () => shutdown(app));
}

async function shutdown(app) {
    console.log("Shutting down...");

    await app.close();
    process.exit(0);
}

createApp();
