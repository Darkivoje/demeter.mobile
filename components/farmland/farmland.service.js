angular.module('app.farmland.service', [])
  .factory('farmlandService', farmlandService);

farmlandService.$inject = ['$http'];


function farmlandService($http) {
  var service = {
    get: get,
    save: save,
    getEmptyFarm: getEmptyFarm
  };
  return service;

  function get() {
    return $http.get('https://pure-stream-30641.herokuapp.com/farmland/')
      .then(function (response) {
        console.log(response.data);
        return response.data
      });
  }

  function save(farmland) {
    return $http.post('https://pure-stream-30641.herokuapp.com/farmland/', farmland)
      .then(function (response) {
        return response.data
      });
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