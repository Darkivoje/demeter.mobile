angular.module('app.job.list', [])
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

JobListController.$inject = [];

function JobListController() {
  var vm = this;
  vm.$onInit = onInit;
  function onInit() {
  }


}
