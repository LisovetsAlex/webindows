const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("../webpack.config");
const path = require("path");
const fs = require("fs");

const app = express();
const compiler = webpack(webpackConfig);

console.log(process.env.NODE_ENV);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
    })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static("app/frontend/public"));

app.get("/Apps/:filepath(*)", (req, res) => {
    const filepath = req.params.filepath;
    const filePathInAppsDir = path.join(__dirname, "./frontend/src/Apps", filepath);

    fs.access(filePathInAppsDir, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send("File not found");
        }
        res.sendFile(filePathInAppsDir);
    });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/public/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});
