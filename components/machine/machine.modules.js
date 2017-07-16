require('./machine.routes');
require('./list/machineList.directive.js');
require('./form/machineForm.directive.js');

angular.module('app.machine.modules', [
  'app.machine.router',
  'app.machine.list',
  'app.machine.form'
]);