require('./machine.routes');

angular.module('app.machine.router', ['app.machine.modules'])
  .config(configure);

configure.$inject = ['$stateProvider', '$compileProvider'];

function configure($stateProvider, $compileProvider) {

  $compileProvider.preAssignBindingsEnabled(true);

  $stateProvider
    .state('machineList', {
      url: '/machineList',
      templateUrl: '/machine/list/machineList.html'
    }).state('machineForm', {
    url: '/machineForm',
    templateUrl: '/machine/form/machineForm.html',
    params: {
      id: undefined
    }
  })
}