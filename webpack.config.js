const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

/**
 * Configuration for production of frontend
 */
module.exports = {
    entry: "./frontend/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    mode: "production",
    devtool: "inline-source-map",
    stats: "errors-only",
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "frontend/public", to: "." },
                { from: "frontend/src/apps", to: "./apps" },
            ],
        }),
    ],
};
