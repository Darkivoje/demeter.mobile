angular.module('app.machine.service', [])
  .factory('machineService', machineService);

machineService.$inject = ['$http'];


function machineService($http) {
  var service = {
    getEmptyMachine: getEmptyMachine,
    getById: getById,
    get: get,
    save: save
  };
  return service;

  function getEmptyMachine() {
    return {
      make: '',
      model: '',
      plates: '',
      vin: '',
      manufactured: new Date(),
      workHours: 0
    };
  };

  function get() {
    return $http.get('https://demeter-api.herokuapp.com/machine/')
      .then(function (response) {
        return response.data
      });
  }

  function getById(id) {
    return $http.get('https://demeter-api.herokuapp.com/machine/' + id)
      .then(function (response) {
        return response.data
      });
  }

  function update(machine) {
    return $http.put('https://demeter-api.herokuapp.com/machine/' + machine.id, machine)
      .then(function (response) {
        return response.data
      });
  }

  function create(machine) {
    return $http.post('https://demeter-api.herokuapp.com/machine/', machine)
      .then(function (response) {
        return response.data
      });
  }

  function save(machine) {
    if (machine.id) {
      return update(machine);
    } else {
      return create(machine);
    }
  }

}