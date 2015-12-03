app.controller('darkroomController', ['$scope', function ($scope) {
  console.log('ok');

  var socket = window.io();

  window.darkroom();
  window.chat();
  window.play();
  window.nio();
  window.nio2();

}]);
