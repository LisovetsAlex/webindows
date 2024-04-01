const express = require("express");
const cors = require("cors");

function startProdServer() {
    console.log("Starting server...");
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started at: http://localhost:${PORT}`);
    });

    return app;
}

const app = startProdServer();

module.exports = app;
