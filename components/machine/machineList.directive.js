angular.module('app.machine', [])
    .directive('machineList', machineList);

function machineList() {
    var directive = {
        link: link,
        templateUrl: '/machine/machineList.directive.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        console.log('hey directive seems to work');
        scope.test = "Works"
    }
}