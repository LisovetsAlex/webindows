const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js",
    },
    mode: "production",
    devtool: "inline-source-map",
    stats: "errors-only",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "public", to: "." },
                { from: "src/apps", to: "./apps" },
            ],
        }),
        new webpack.ProvidePlugin({
            createElement: [path.resolve(__dirname, "jsx.js"), "createElement"],
        }),
    ],
};
