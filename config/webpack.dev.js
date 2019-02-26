const helpers = require('./helpers');
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        path: helpers.root('dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    devServer: {
        port: 3002,
        historyApiFallback: true,
        disableHostCheck: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
    ]
});
