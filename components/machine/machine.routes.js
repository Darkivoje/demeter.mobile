angular.module('app.machine.router', [])

.config(configure)
.controller('SomeController', SomeController);

 function SomeController() {
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
            controller: 'SomeController as vm'
        })
}