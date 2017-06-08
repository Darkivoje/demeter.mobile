angular.module('app.job.form', [])
    .directive('jobForm', jobForm);

function jobForm() {
    var directive = {
        controller: JobFormController,
        controllerAs: 'vm',
        templateUrl: '/job/form/jobForm.directive.html',
        restrict: 'EA'
    };
    return directive;
}

JobFormController.$inject = [];

function JobFormController() {
    var vm = this;
    vm.$onInit = onInit;
    function onInit() {

        vm.availableMachines = [
            {
                category: 'powered',
                name: 'IMT Traktor',
                id: 1
            },{
                category: 'powered',
                name: 'Klass Kombajn',
                id: 2
            },{
                category: 'towed',
                name: 'Masina za oranje',
                id: 3
            },{
                category: 'towed',
                name: 'Cisterna Voda',
                id: 4
            }
        ];

        vm.availableJobs = [
            {
                value: 'preparing',
                title: 'Spremanje'
            }, {
                value: 'plowing',
                title: 'Oranje'
            }, {
                value: 'spraying',
                title: 'Prskanje'
            }, {
                value: 'fertilizing',
                title: 'Djubrenje'
            }, {
                value: 'watering',
                title: 'Zalivanje'
            }
        ];

        vm.availableFields = [
            {
                id: 1,
                name: 'Kod Markovica'
            }, {
                id: 2,
                name: 'Pre hetina'
            }, {
                id: 3,
                name: 'Iza itebeja'
            }
        ];
    }


}
