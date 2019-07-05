webpack = require('webpack');

module.exports = function(config, options) {
    var env = process.env.ENV = process.env.NODE_ENV = options.fileReplacements.length > 0 ? 'production' : 'development';

    console.log('------- Webpack Configuration -------');
    console.log('\'process.env.ENV\' is set to: ' + env);
    console.log('-------------------------------------');

    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(env)
            }
        })
    );

    return config;
};
