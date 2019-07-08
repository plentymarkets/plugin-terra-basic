webpack = require('webpack');

module.exports = function(config, options) {
    var env = process.env.ENV = process.env.NODE_ENV = options && options.fileReplacements.length > 0 ? 'production' : 'development';

    console.log('------- Webpack Configuration -------');
    console.log('\'process.env.ENV\' is set to: ' + env);
    console.log('-------------------------------------');

    if(config && config.plugins) {
        const definePlugin = new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(env)
            }
        });
        if (config.plugins) {
            config.plugins.push(definePlugin);
        } else {
            config.plugins = [definePlugin];
        }
    }

    return config;
};
