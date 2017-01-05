require('./machine/machineList.directive.js');
require('./layout/header.directive.js');
require('./app.router.js');

angular.module('app', [

    'ngMaterial',
    'ngAnimate',
    'ngMessages',
    'templates',
    'app.router',
    'app.header',
    'app.machine'

])



.run(runBlock);


function runBlock() {
    console.log('app sterted');
}