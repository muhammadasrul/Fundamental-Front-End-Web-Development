const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./assets/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },            
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(ttf|jpg|woff2|woff|eot|svg)$/,
                use: "file-loader"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./assets/index.html",
            filename: "index.html"
        }),
    ]
}