module.exports = {
    entry: "./app.js",
    "output": {
        "path": "./bundle",
        "filename": "app.bundle.js"
    },
    module: {
        "loaders": [{
            exclude: "/node_modules/",
            "loader": "babel-loader"
        }]
    }
}