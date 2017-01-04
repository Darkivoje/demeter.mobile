angular.module('app.machine', [])
    .directive('machineListDirective', machineListDirective);

function machineListDirective() {
    var directive = {
        link: link,
        templateUrl: '/machine/machineList.directive.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        console.log('hey directive works');
        scope.test = "Works"
    }
}