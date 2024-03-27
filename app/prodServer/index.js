const express = require("express");
const path = require("path");

function startProdServer() {
    const app = express();

    app.use(express.static(path.join(__dirname, "app/build")));
    app.get("/:filepath(*)", (req, res) => {
        res.sendFile(path.join(__dirname, "../build", req.params.filepath));
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server: http://localhost:${PORT}`);
    });
}

module.exports = startProdServer;
