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



SidenavController.$inject = ['$mdSidenav'];
function SidenavController($scope, $mdSidenav) {
  var vm = this;

  vm.toggleRight =  function()  {
    $mdSidenav('right').toggle();
  };

}
