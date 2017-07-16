angular.module('app.mainView', [])
  .directive('mainView', mainView);


function mainView() {
  var directive = {
    controller: mainViewController(),
    templateUrl: '/layout/main/mainView.component.html'
  };
  return directive;
}

function mainViewController() {
  console.log('app content is loaded');
}
