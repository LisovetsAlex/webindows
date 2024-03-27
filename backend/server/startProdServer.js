const express = require("express");

function startProdServer() {
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Production server started at: http://localhost:${PORT}`);
    });

    return app;
}

module.exports = startProdServer;
