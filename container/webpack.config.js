const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            // not used, added for clarity. Only needed for remotes
            name: 'container',
            // remotes <- lists projects that the container can search to get additional code
            remotes: {
                // LHS: products <- load the file at the listed URL if anything in container has an import like: import abc from 'products'
                // RHS: products <- related to the 'name' property in the products webpack config file
                products: 'products@http://localhost:8081/remoteEntry.js',
                cart: 'cart@http://localhost:8082/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}