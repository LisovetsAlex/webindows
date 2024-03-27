const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./app/src/index.js",
    output: {
        path: path.resolve(__dirname, "app/build"),
        filename: "bundle.js",
    },
    mode: "production",
    devtool: "inline-source-map",
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "app/public", to: "." },
                { from: "app/src/apps", to: "./apps" },
            ],
        }),
    ],
};
