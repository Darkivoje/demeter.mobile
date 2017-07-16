require('./job/job.routes.js');
require('./layout/header.directive.js');
require('./app.router.js');
require('./layout/main/mainView.component.js');
require('./layout/sidenav/sidenav.component.js');
require('./farmland/farmland.modules');
require('./machine/machine.modules');

angular.module('app', [

    'ngMaterial',
    'ngAnimate',
    'ngMessages',
    'ngMdIcons',
    'templates',
    'app.router',
    'app.job.router',
    'app.header',
    'app.sidenav',
    'app.mainView',
    'app.machine.modules',
    'app.farmland.modules'
])


.run(runBlock);

function runBlock() {
    console.log('app sterted');
}