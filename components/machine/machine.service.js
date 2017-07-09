angular.module('app.machine.service', [])
    .factory('machineService', machineService);

machineService.$inject = ['$http'];


function machineService($http) {
    var machines = [];
    var service = {
        addMachine: addMachine,
        getMachines: getMachines,
        save: save
    };
    return service;

    function addMachine(data) {
        getMachines().push(data);
    }

    function getMachines() {
      return $http.get('http://localhost:8080/machine/')
        .then(function (response) {
          return response.data
        });
    }

    function save(machine) {
        return $http.post('http://localhost:8080/machine/', machine)
            .then(function (response) {
              return response.data
        });
    }
}