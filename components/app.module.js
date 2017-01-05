require('./machine/machineList.directive.js');

angular.module('app', ['app.machine', 'templates'])



.run(runBlock);


function runBlock() {
    console.log('app sterted');
}