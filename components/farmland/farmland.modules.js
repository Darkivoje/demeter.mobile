require('./farmland.routes');
require('./list/farmlandList.component.js');
require('./form/farmlandForm.component.js');

angular.module('app.farmland.modules', [
  'app.farmland.router',
  'app.farmland.list',
  'app.farmland.form'
]);