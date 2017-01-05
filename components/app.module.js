require('./machine/machineList.directive.js');
require('./layout/header.directive.js');


angular.module('app', [
    'ngMaterial',
    'ngAnimate',
    'ngMessages',
    'templates',
    'app.machine',
    'app.header'

])



.run(runBlock);


function runBlock() {
    console.log('app sterted');
}