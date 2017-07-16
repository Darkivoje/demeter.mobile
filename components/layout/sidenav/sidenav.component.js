require('./sidenav.service.js');

angular.module('app.sidenav', ['ngMaterial', 'app.sidenav.service'])
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

SidenavController.$inject = ['$scope', 'sidenavService'];
function SidenavController($scope, sidenavService) {
  var vm = this;

  vm.goto = function(state) {
      console.log('going to ', state);
    //sidenavService.goto(state);
  };
}