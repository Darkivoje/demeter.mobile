require('./farmland.modules');

angular.module('app.farmland.router',['app.farmland.modules'])
  .config(configure);

configure.$inject = ['$stateProvider', '$compileProvider'];

function configure($stateProvider, $compileProvider) {

  $compileProvider.preAssignBindingsEnabled(true);

  $stateProvider
    .state('farmlandList', {
      url: '/farmlandList',
      templateUrl: '/farmland/list/farmlandList.html',
    }).state('farmlandForm', {
      url: '/farmlandForm',
      templateUrl: '/farmland/form/farmlandForm.html',
      params: {
        id: undefined
      }
    })
}