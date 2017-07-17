require('./sidenav.service.js');

angular.module('app.sidenav', ['ngMaterial', 'app.sidenav.service'])
  .directive('sidenav', sidenav);

function sidenav() {
  var directive = {
    controllerAs: 'vm',
    controller: SidenavController,
    templateUrl: '/layout/sidenav/sidenav.component.html',
    restrict: 'EA'
  };
  return directive;
}

SidenavController.$inject = ['$scope', 'sidenavService'];

function SidenavController($scope, sidenavService) {

  $scope.goTo = function(state) {
    sidenavService.goto(state);
    sidenavService.toggleSidenav();
  };

  $scope.toggleSidenav = function() {
    sidenavService.toggleSidenav();
  };

}