require('./form/jobForm.directive.js');

angular.module('app.job.router', [
    'app.job.form'
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
}