require('./../farmland.service');

angular.module('app.farmland.form', ['app.farmland.service'])
  .directive('farmlandForm', farmlandForm);

function farmlandForm() {
  var directive = {
    controller: FarmlandFormController,
    controllerAs: 'vm',
    templateUrl: '/farmland/form/farmlandForm.component.html',
    restrict: 'EA'
  };
  return directive;
}

FarmlandFormController.$inject = ['$state', 'farmlandService'];

function FarmlandFormController($state, farmlandService) {
  var vm = this;
  vm.$onInit = onInit;

  function onInit() {
    vm.farmland = farmlandService.getEmptyFarm();
  }

  vm.submitFarmland = function () {
    farmlandService.save(vm.farmland).then(function (response) {
      $state.go('farmlandList')
    });
  };

  vm.cancelSubmit = function () {
    $state.go('farmlandList')
  }



}
