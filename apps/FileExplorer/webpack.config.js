const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./compiled"),
        filename: "index.js",
    },
    mode: "production",
    devtool: "inline-source-map",
    stats: "errors-only",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    optimization: {
        minimize: false,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/index.html", to: "." },
                { from: "src/index.css", to: "." },
            ],
        }),
        new webpack.ProvidePlugin({
            createElement: [path.resolve(__dirname, "jsx.js"), "createElement"],
        }),
    ],
    resolve: {
        alias: {
            "@webindows/components": path.resolve(__dirname, "./webindows/components"),
            "@webindows/components/common": path.resolve(__dirname, "./webindows/components/common"),
            "@webindows/ButtonBars": path.resolve(__dirname, "./webindows/components/ButtonBarContainer"),
            "@webindows/FolderContainer": path.resolve(__dirname, "./webindows/components/FolderContainer"),
            "@webindows/Views": path.resolve(__dirname, "./webindows/components/ViewContainer"),
            "@webindows/AppOverview": path.resolve(__dirname, "./webindows/components/AppOverview"),
            "@webindows/connect": path.resolve(__dirname, "./webindows/connect"),
            "@webindows/utils": path.resolve(__dirname, "./webindows/utils"),
        },
    },
};
