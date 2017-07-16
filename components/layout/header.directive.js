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

HeaderController.$inject = ['sidenavService'];
function HeaderController(sidenavService) {
  var vm = this;
  vm.toggleSidenav = function() {
    sidenavService.toggleSidenav();
  };

}
