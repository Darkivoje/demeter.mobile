angular.module('app.header', ['ngMaterial'])
    .directive('header', header);


function header() {
    var directive = {
        controller: HeaderController,
        controllerAs: 'vm',
        templateUrl: '/layout/header.directive.html'
    };
    return directive;
}

HeaderController.$inject = ['$scope', '$mdSidenav'];
function HeaderController($scope, $mdSidenav) {
  var vm = this;

  vm.toggleRight =  function()  {
    $mdSidenav('right').toggle();
  };

}
