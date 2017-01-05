angular.module('app.header', [])
    .directive('header', header);

function header() {
    var directive = {
        link: link,
        templateUrl: '/layout/header.directive.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        console.log('header loaded');

    }
}

