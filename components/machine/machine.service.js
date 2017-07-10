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
      return $http.get('https://pure-stream-30641.herokuapp.com/machine/')
        .then(function (response) {
          return response.data
        });
    }

    function save(machine) {
        return $http.post('https://pure-stream-30641.herokuapp.com/machine/', machine)
            .then(function (response) {
              return response.data
        });
    }
}