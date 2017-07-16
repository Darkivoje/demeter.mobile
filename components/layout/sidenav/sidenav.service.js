angular.module('app.sidenav.service', ['ngMaterial'])
  .factory('sidenavService', sidenavService);

sidenavService.$inject = ['$state', '$mdSidenav'];

function sidenavService($state, $mdSidenav) {
  var service = {
    toggleSidenav: toggleSidenav,
    goto: goto
  };
  return service;

  function toggleSidenav() {
    $mdSidenav('right').toggle();
  }

  function goto(state) {
    $state.go(state)
  }
}
