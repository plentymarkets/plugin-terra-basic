const webpack = require('webpack');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';


module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
};
