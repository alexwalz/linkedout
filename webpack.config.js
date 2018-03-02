const webpack = require('webpack');
const path = require('path');

module.exports = {
    // set this to your entry point
    entry: "./src/js/index.js",

    // change this to your output path
    output: {
        path: path.resolve(__dirname, '/dist/js/'),
        filename: "bundle.js",
        publicPath: "/assets/"
    },

    // create a map file for debugging
    devtool: 'source-map',

    // configure the loaders
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react'],
                    compact: false
                }
            }
        ]
    },

    ///////////  uncomment this for production ////////////////
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {'NODE_ENV': JSON.stringify('production')}
        }),
        new webpack.DefinePlugin({"global.GENTLY": false})
    ],////////////////////////////////////////////////////////

    node: {
        __dirname: true,
    },
    watch: false // change this to true to keep webpack running
};

