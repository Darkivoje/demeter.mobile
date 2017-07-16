angular.module('app.farmland.service', [])
  .factory('farmlandService', farmlandService);

farmlandService.$inject = ['$http'];


function farmlandService($http) {
  var service = {
    get: get,
    save: save
  };
  return service;

  function get() {
    return $http.get('https://pure-stream-30641.herokuapp.com/farmland/')
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