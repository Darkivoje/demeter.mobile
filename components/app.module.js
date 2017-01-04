require('./machine/machineList.directive.js');

angular.module('app', ['app.machine'])



.run(runBlock);


function runBlock() {
    console.log('app sterted');
}