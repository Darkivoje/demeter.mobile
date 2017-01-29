require('./machineList.directive.js');
require('./machineForm.directive.js');

angular.module('app.machine.router', [
    'app.machine.list',
    'app.machine.form'
])

.config(configure)

//extract this controller to machine.controller.js
    .controller('MachineController', MachineController);

function MachineController() {
    var vm = this;
    vm.title = 'Some Title';
}



configure.$inject = ['$stateProvider', '$compileProvider'];

function configure($stateProvider, $compileProvider) {

    $compileProvider.preAssignBindingsEnabled(true);

    $stateProvider
        .state('machineList', {
            url: '/machineList',
            templateUrl: '/machine/machineList.html',
            controller: 'MachineController as vm'
        }).state('machineForm', {
            url: '/machineForm',
            templateUrl: '/machine/machineForm.html',
            controller: 'MachineController as vm'
        })
}