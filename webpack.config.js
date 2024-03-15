const path = require("path");

module.exports = {
    entry: "./app/frontend/src/index.js",
    output: {
        path: path.resolve(__dirname, "app/frontend/public"),
        filename: "bundle.js",
        publicPath: "/",
    },
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
