
angular.module('app.router', ['ui.router'])

.config(['$stateProvider' , '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<div><h1>HERE WORKS</h1></div>'
        })
        .state('else', {
            url: '/else',
            template: '<div><h1>HERE ELSE</h1></div>'
        })


}]);