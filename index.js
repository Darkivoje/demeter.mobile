var demeter = angular.module('DemeterApp', ['templates', 'ngMaterial', 'ngAnimate', 'ngMessages', 'ngRoute']);

demeter.run(['$rootScope', function ($rootScope) {



}]);

demeter.controller('MyCtrl', ['$scope',
    function ($scope) {
        $scope.birthday = new Date();
        $scope.something = "hey hey hey";
        $scope.showProgress = false;
        $scope.submitForm = function () {
            $scope.showProgress = true;
        }

    }]);
