module.exports = function (config)
{
    config.set({
        frameworks: ['jasmine'],
        files: ['test/main.js'],
        reporters: [
            'progress',
            'kjhtml',
            'coverage-istanbul'
        ],
        autoWatch: true,
        browsers: ['Chrome'],
        concurrency: Infinity,
        coverageIstanbulReporter: {
            reports: ['html'],
            dir: 'coverage',
            combineBrowserReports: true,
            fixWebpackSourcePaths: true,
            skipFilesWithNoCoverage: false
        }
    })
};
