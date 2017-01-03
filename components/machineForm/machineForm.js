/**
 * Created by darkorajin on 22/12/2016.
 */

angular.module('components.machineForm', [])
    .directive('machineForm', [function () {
        return {
            templateUrl: '/machineForm/machineForm.html',
            restrict: 'EA',
            link: function (scope, element, attrs) {

            }
        };
    }]);
 