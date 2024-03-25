const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./app/frontend/src/index.js",
    output: {
        path: path.resolve(__dirname, "app/frontend/build"),
        filename: "bundle.js",
    },
    mode: "production",
    devtool: "inline-source-map",
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "app/frontend/public", to: "." }],
        }),
    ],
};
