require('./farmland.routes');
require('./list/farmlandList.component.js');

angular.module('app.farmland.modules', [
  'app.farmland.router',
  'app.farmland.list'
]);