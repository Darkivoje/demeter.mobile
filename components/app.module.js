require('./machine/machine.routes.js');
require('./job/job.routes.js');
require('./layout/header.directive.js');
require('./app.router.js');
require('./layout/main/mainView.component.js');
require('./layout/sidenav/sidenav.component.js');

angular.module('app', [

    'ngMaterial',
    'ngAnimate',
    'ngMessages',
    'ngMdIcons',
    'templates',
    'app.router',
    'app.machine.router',
    'app.job.router',
    'app.header',
    'app.sidenav',
    'app.mainView'
])


.run(runBlock);

function runBlock() {
    console.log('app sterted');
}