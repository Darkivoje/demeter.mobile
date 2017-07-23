require('./job.routes');
require('./list/jobList.component.js');

angular.module('app.job.modules', [
  'app.job.router',
  'app.job.list'
]);