require('../../machine/machine.service');
require('../../farmland/farmland.service');
require('../job.service');

angular.module('app.job.form', [
  'app.job.service',
  'app.machine.service',
  'app.farmland.service'])

  .directive('jobForm', jobForm);

function jobForm() {
  var directive = {
    controller: JobFormController,
    controllerAs: 'vm',
    templateUrl: '/job/form/jobForm.directive.html',
    restrict: 'EA'
  };
  return directive;
}

JobFormController.$inject = ['$state', '$stateParams', 'machineService', 'farmlandService', 'jobService'];

function JobFormController($state, $stateParams, machineService, farmlandService, jobService) {

  var vm = this;
  vm.$onInit = onInit;

  function onInit() {
    vm.job = jobService.getEmptyJob();
    initJobTypes();
    initMachines();
    initFarmlands();
  }

  vm.submit = function() {
    vm.job.responsible = 1;
    jobService.save(vm.job).then(function () {
      $state.go('jobList')
    })
  };

  function initJobTypes() {
    vm.jobTypes = [];
    jobService.getJobTypes().then(function (response) {
      vm.jobTypes = response
    });
  }

  function initFarmlands() {
    vm.availableFarmlands = [];
    farmlandService.get().then(function (response) {
      vm.availableFarmlands = response
    });
  }

  function initMachines () {
    vm.availableMachines = [];
    machineService.get().then(function (response) {
      vm.availableMachines = response
    });
  }


}
