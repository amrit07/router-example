/**
 * Created by amrmishr on 2/24/18.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
    entry: {
        app: './myApp/app.js',
        style: './myApp/style.scss'

    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'myApp/public/dist')
    },

    resolve : {
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules'),
        ]
    },
    module :{
        rules :[
            {
                test: /.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader?minimize=true', 'sass-loader']),
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins : [
        new ExtractTextPlugin({
            filename: 'css/style.min.css',
            allChunks: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle:true
        })
    ],
    devtool:'inline-source-map',
};

module.exports = config;
