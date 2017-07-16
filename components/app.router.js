angular.module('app.router', ['ui.router'])

.config(['$stateProvider' , '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/machineList');

    $stateProvider
        .state('else', {
            url: '/else',
            template: '<div><h1>HERE ELSE</h1></div>'
        })


}])