require('./farmland.modules');

angular.module('app.farmland.router',['app.farmland.modules'])
  .config(configure)
.controller('FarmlandController', FarmlandController);



configure.$inject = ['$stateProvider', '$compileProvider']

function FarmlandController() {
  var farmlandVm = this;
  farmlandVm.title = 'Farmland';
}

function configure($stateProvider, $compileProvider) {

  $compileProvider.preAssignBindingsEnabled(true);

  $stateProvider
    .state('farmlandList', {
      url: '/farmlandList',
      templateUrl: '/farmland/list/farmlandList.html',
      controller: 'FarmlandController as farmlandVm'
    })
}