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

MachineController.$inject = ['$state', '$scope'];
function MachineController($state, $scope) {
    var vm = this;
    vm.createMachine = function () {
        $state.go('machineForm')
    }
}
