require('./machine.service');

angular.module('app.machine.list', [])
    .directive('machineList', machineList);

function machineList() {
    var directive = {
        controller: MachineController,
        controllerAs: 'vm',
        templateUrl: '/machine/machineList.directive.html',
        restrict: 'EA'
    };
    return directive;
}

MachineController.$inject = ['$state', '$scope', 'machineService'];
function MachineController($state, $scope, machineService) {
    var vm = this;
    vm.machineList = machineService.getMachines();
    
    vm.createMachine = function () {
        $state.go('machineForm')
    };
}
