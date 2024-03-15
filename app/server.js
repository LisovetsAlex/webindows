const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.listen(3000, () => {
    console.log(`App is running on port 3000`);
});

/**
 * Sends all files from the App folder.
 */
app.get("/Apps/:filepath(*)", (req, res) => {
    const filepath = req.params.filepath;
    const filePathInAppsDir = path.join(
        __dirname,
        "./frontend/src/Apps",
        filepath
    );

    fs.access(filePathInAppsDir, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send("File not found");
        }
        res.sendFile(filePathInAppsDir);
    });
});

/**
 * Sends all files from the build folder.
 */
app.get("/:filepath(*)", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/build", req.params.filepath));
});

/**
 * Sends entry html file.
 */
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/public/index.html");
});
