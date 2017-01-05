angular
    .module('app.customers')
    .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'customer',
            config: {
                abstract: true,
                template: '<ui-view class="shuffle-animation"/>',
                url: '/customer'
            }
        }
    ];
}