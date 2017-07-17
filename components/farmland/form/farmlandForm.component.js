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

FarmlandFormController.$inject = ['$state', '$stateParams', 'farmlandService'];

function FarmlandFormController($state, $stateParams, farmlandService) {
  var vm = this;
  vm.$onInit = onInit;
  console.log($stateParams);

  function onInit() {
    vm.farmland = farmlandService.getEmptyFarm();
    if ($stateParams.id) {
      farmlandService.getById($stateParams.id).then(function (response) {
        vm.farmland = response
      });
    }
  }

  vm.submitFarmland = function () {
    farmlandService.save(vm.farmland).then(function () {
      $state.go('farmlandList')
    });
  };

  vm.cancelSubmit = function () {
    $state.go('farmlandList')
  }


}
