require('./../machine.service');

angular.module('app.machine.form', ['app.machine.service'])
  .directive('machineForm', machineForm);

function machineForm() {
  var directive = {
    controller: MachineFormController,
    controllerAs: 'vm',
    templateUrl: '/machine/form/machineForm.directive.html',
    restrict: 'EA'
  };
  return directive;
}

MachineFormController.$inject = ['$state', '$stateParams', 'machineService'];
function MachineFormController($state, $stateParams, machineService) {
  var vm = this;
  vm.$onInit = onInit;

  function onInit() {
    vm.machine = machineService.getEmptyMachine();
    if ($stateParams.id) {
      machineService.getById($stateParams.id).then(function (response) {
        vm.machine = response
      });
    }
  }

  vm.submitMachine = function () {
    machineService.save(vm.machine).then(function (response) {
      $state.go('machineList')
    });
  };

  vm.cancelSubmit = function () {
    $state.go('machineList')
  }


}
