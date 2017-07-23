angular.module('app.job.service', [])
  .factory('jobService', jobService);

jobService.$inject = ['$http'];


function jobService($http) {
  var service = {
    getEmptyJob: getEmptyJob,
    getById: getById,
    get: get,
    save: save
  };
  return service;

  function getEmptyJob() {
    return {
      make: '',
      model: '',
      plates: '',
      vin: '',
      manufactured: new Date(),
      workHours: ''
    };
  }

  function get() {
    return $http.get('https://demeter-api.herokuapp.com/job/')
      .then(function (response) {
        return response.data
      });
  }

  function getById(id) {
    return $http.get('https://demeter-api.herokuapp.com/job/' + id)
      .then(function (response) {
        return response.data
      });
  }

  function update(job) {
    return $http.put('https://demeter-api.herokuapp.com/job/' + job.id, job)
      .then(function (response) {
        return response.data
      });
  }

  function create(job) {
    return $http.post('https://demeter-api.herokuapp.com/job/', job)
      .then(function (response) {
        return response.data
      });
  }

  function save(job) {
    if (job.id) {
      return update(job);
    } else {
      return create(job);
    }
  }

}