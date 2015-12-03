//login controller
app.controller('loginController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {
    // console.log(AuthService.getUserStatus());
    $scope.login = function () {
      // initial values
      $scope.error = false;
      $scope.disabled = true;
      // call login from service
      AuthService.login($scope.loginForm.username, $scope.loginForm.password)
        // handle success
        .then(function () {
          $location.path('/list');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });
    };
}]);

//logout controller
app.controller('logoutController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {
    $scope.logout = function () {
      console.log(AuthService.getUserStatus());
      // call logout from service
      AuthService.logout()
        .then(function () {
          $location.path('/login');
        });
    };
}]);

//register controller
app.controller('registerController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {
    console.log(AuthService.getUserStatus());
    $scope.register = function () {
      // initial values
      $scope.error = false;
      $scope.disabled = true;
      // call register from service
      AuthService.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          $location.path('/login');
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Sorry! That user name is already being used";
          $scope.disabled = false;
          $scope.registerForm = {};
        });
    };
}]);
