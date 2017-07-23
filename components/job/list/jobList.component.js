require('./../job.service');

angular.module('app.job.list', ['app.job.service'])
  .directive('jobList', jobList);

function jobList() {
  var directive = {
    controller: JobListController,
    controllerAs: 'vm',
    templateUrl: '/job/list/jobList.component.html',
    restrict: 'EA'
  };
  return directive;
}

JobListController.$inject = ['$state', 'jobService'];

function JobListController($state, jobService) {
  var vm = this;
  vm.$onInit = onInit;
  
  function onInit() {
    vm.jobList = [];
    jobService.get().then(function (response) {
      vm.jobList = response
    })
  }

  vm.createJob = function () {
    $state.go('jobForm')
  };

}
