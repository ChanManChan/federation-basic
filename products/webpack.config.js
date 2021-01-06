const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            // sets the name of the manifest file
            filename: 'remoteEntry.js',
            exposes: {
                // modules to be exposed to the outside world
                './ProductsIndex': './src/bootstrap'
            },
            shared: ['faker']
            // shared: {
            //     faker: {
            //         singleton: true
            //     }
            // }
        }),
        // This plugin is going to take a look at all the files coming out of 
        // webpack process and will add the appropriate script tags automatically 
        // behind the scenes to the index.html file.
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}