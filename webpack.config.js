const path = require("path");

module.exports = {
    entry: "./src/js/main.js",

    resolve: {
        modules: ['node_modules'],
    },

    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "dist")
    },
};