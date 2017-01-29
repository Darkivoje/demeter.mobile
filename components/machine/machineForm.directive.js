angular.module('app.machine.form', [])
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

MachineFormController.$inject = ['$scope'];
function MachineFormController($scope) {
    var vm = this;

}
