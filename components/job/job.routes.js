require('./form/jobForm.directive.js');
require('./list/jobList.component.js');

angular.module('app.job.router', [
    'app.job.form',
    'app.job.list'
])
    .config(configure)

.controller('JobController', JobController);

function JobController() {
    var jobVm = this;
    jobVm.title = 'Job Form';
}

configure.$inject = ['$stateProvider', '$compileProvider'];

function configure($stateProvider, $compileProvider) {

    $compileProvider.preAssignBindingsEnabled(true);

    $stateProvider
        .state('jobForm', {
            url: '/jobForm',
            templateUrl: '/job/form/jobForm.html',
            controller: 'JobController as jobVm'
        })
      .state('jobList', {
            url: '/jobList',
            templateUrl: '/job/list/jobList.html',
            controller: 'JobController as jobVm'
        })
}