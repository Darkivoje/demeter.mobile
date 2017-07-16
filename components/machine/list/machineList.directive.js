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

MachineController.$inject = ['$state', '$scope', 'machineService'];
function MachineController($state, $scope, machineService) {
    var vm = this;
    machineService.getMachines().then(function (response) {
      console.log(response);
      vm.machineList = response
    });
    
    vm.createMachine = function () {
        $state.go('machineForm')
    };
}
