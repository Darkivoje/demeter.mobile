module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            '*.mock.js',
            'dist/templates.js',
            '*.spec.js'
        ],
        browsers: ['Chrome'],
        autowWatch: true,
        preprocessors: {
            '*.html': 'ng-html2js'
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: '',
            moduleName: 'templates'
        }
    });
};