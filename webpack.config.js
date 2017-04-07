'use strict';
var path = require('path'),
    webpack = require('webpack'),
    webpack_root = [path.join(__dirname, 'lib')],
    webpackConfig = null;

console.log('Building:..');

webpackConfig = {
    devtool:'#source-map',
    entry: {
        mathsteps: [
            './index'
        ]
    },
    resolve: {
        root: webpack_root
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: './'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=10240&name=[hash].[ext]'
            }
        ]
    }
};
module.exports = webpackConfig;
