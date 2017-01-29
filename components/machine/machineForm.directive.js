require('./machine.service');

angular.module('app.machine.form', ['app.machine.service'])
    .directive('machineForm', machineForm);

function machineForm() {
    var directive = {
        controller: MachineFormController,
        controllerAs: 'vm',
        templateUrl: '/machine/machineForm.directive.html',
        restrict: 'EA'
    };
    return directive;
}

MachineFormController.$inject = ['$state', '$scope', 'machineService'];
function MachineFormController($state, $scope, machineService) {
    var vm = this;
    vm.machine = {
        make: '',
        model: '',
        vin: '',
        manufactured: new Date(),
        workHours: ''
    };

    vm.submitMachine = function () {
        machineService.addMachine(vm.machine);
        $state.go('machineList')

    };

    vm.cancelSubmit = function () {
        $state.go('machineList')
    }



}
