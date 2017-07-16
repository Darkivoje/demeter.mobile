angular.module('app.sidenav.service', ['ngMaterial'])
  .factory('sidenavService', sidenavService);

sidenavService.$inject = ['$mdSidenav'];


function sidenavService($mdSidenav) {
  var service = {
    toggleSidenav: toggleSidenav,
  };
  return service;

  function toggleSidenav() {
     $mdSidenav('right').toggle();
    }
}
