require('./../farmland.service');

angular.module('app.farmland.list', ['app.farmland.service'])
  .directive('farmlandList', farmlandList);

function farmlandList() {
  var directive = {
    controller: FarmlandListController,
    controllerAs: 'vm',
    templateUrl: '/farmland/list/farmlandList.component.html',
    restrict: 'EA'
  };
  return directive;
}

FarmlandListController.$inject = ['$state', 'farmlandService'];

function FarmlandListController($state, farmlandService) {
  var vm = this;
  vm.$onInit = onInit;

  function onInit() {
    vm.farmlandList = [];
    farmlandService.get().then(function (response) {
      vm.farmlandList = response
    });
  }

  vm.edit = function (id) {
    $state.go('farmlandForm', {id: id})
  };
  
  vm.createFarmland = function () {
    $state.go('farmlandForm')
  };
}
