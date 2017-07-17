require('./../machine.service');

angular.module('app.machine.list', [])
  .directive('machineList', machineList);

function machineList() {
  var directive = {
    controller: MachineController,
    controllerAs: 'vm',
    templateUrl: '/machine/list/machineList.directive.html',
    restrict: 'EA'
  };
  return directive;
}

MachineController.$inject = ['$state', 'machineService'];
function MachineController($state, machineService) {
  var vm = this;
  vm.$onInit = onInit;

  function onInit() {
    vm.machineList = [];
    machineService.get().then(function (response) {
      vm.machineList = response
    });
  }

  vm.createMachine = function () {
    $state.go('machineForm')
  };

  vm.edit = function (id) {
    $state.go('machineForm', {id: id})
  };
}
