const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})


module.exports = env => {
   
    console.log(env,'env');
    return {

        entry: './client/index.js',
        output: {
            path: path.resolve('dist'),
            filename: 'index_bundle.js'
        },
        devServer: {
            host: env.HOST, // Your Computer Name
            port: env.PORT
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                }, {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                }
            ]
        }
    }
}