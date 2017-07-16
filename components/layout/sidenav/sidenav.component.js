angular.module('app.sidenav', ['ngMaterial'])
  .directive('sidenav', sidenav);

function sidenav() {
  var directive = {
    controller: SidenavController(),
    controllerAs: 'vm',
    templateUrl: '/layout/sidenav/sidenav.component.html',
    restrict: 'EA'
  };
  return directive;
}

function SidenavController(sidenavService) {
  var vm = this;

}
