angular.module('app.farmland.service', [])
  .factory('farmlandService', farmlandService);

farmlandService.$inject = ['$http'];


function farmlandService($http) {
  var service = {
    get: get,
    save: save,
    getEmptyFarm: getEmptyFarm,
    getById: getById
  };
  return service;

  function get() {
    return $http.get('https://demeter-api.herokuapp.com/farmland/')
      .then(function (response) {
        return response.data
      });
  }

  function getById(id) {
    return $http.get('https://demeter-api.herokuapp.com/farmland/' + id)
      .then(function (response) {
        return response.data
      });
  }

  function update(farmland) {
    return $http.put('https://demeter-api.herokuapp.com/farmland/' + farmland.id, farmland)
      .then(function (response) {
        return response.data
      });
  }

  function create(farmland) {
    return $http.post('https://demeter-api.herokuapp.com/farmland/', farmland)
      .then(function (response) {
        return response.data
      });
  }

  function save(farmland) {
    if (farmland.id) {
      return update(farmland);
    } else {
      return create(farmland);
    }
  }

  function getEmptyFarm() {
    return {
      name: '',
      location: '',
      size: 0,
      number: ''
    };
  };
}