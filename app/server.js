const startDevServer = require("./devServer");
const startProdServer = require("./prodServer");

function main() {
    if (process.env.NODE_ENV === "production") {
        startProdServer();
    }

    if (process.env.NODE_ENV === "development") {
        startDevServer();
    }
}

main();
