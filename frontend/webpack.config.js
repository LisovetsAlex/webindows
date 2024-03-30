const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "../fe-build"),
        filename: "bundle.js",
    },
    mode: "production",
    devtool: "inline-source-map",
    stats: "errors-only",
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "public", to: "." },
                { from: "src/apps", to: "./apps" },
            ],
        }),
    ],
};
