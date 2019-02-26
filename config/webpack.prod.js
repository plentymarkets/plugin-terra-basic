const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const helpers = require('./helpers');
const TerserPlugin = require('terser-webpack-plugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: helpers.root('dist'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                // sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
    ]
});
