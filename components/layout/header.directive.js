require('./sidenav/sidenav.service');

angular.module('app.header', ['app.sidenav.service'])
    .directive('header', header);


function header() {
    var directive = {
        controller: HeaderController,
        controllerAs: 'vm',
        templateUrl: '/layout/header.directive.html'
    };
    return directive;
}

HeaderController.$inject = ['$scope', 'sidenavService'];
function HeaderController($scope, sidenavService) {
  $scope.toggleSidenav = function() {
    sidenavService.toggleSidenav();
  };

}
