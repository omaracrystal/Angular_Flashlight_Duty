app.controller("profileController", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){
  //ng-model='score' on input in html
  $scope.score= "";
  //
  $scope.allScores = [];
  //ng-click='getscore' on button
  $scope.getScore= function () {
    //single score
    console.log($scope.score);
    $scope.allScore.push($scope.score);
    //all scores
    console.log($scope.allScore);
    $scope.score = "";
}]);

app.controller("d3Controller", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){

}]);


// CRUD - Most likely not needed
// app.controller("scoreController", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){
//   var score = "";
//   var scores = "/scores";

//   getscores = function(score){
//     httpFactory.get(score)
//     .then(function(response){
//       $scope.score = response.data;
//     });
//   };

//   function showMessage(messageString) {
//     getscores(scores);
//     $scope.messageSection = true;
//     $scope.message = messageString;
//     $timeout(function() {
//       $scope.messageSection = false;
//     }, 5000);
//   }
//   getscores(scores);

//   $scope.postscore = function(){
//     var payload = $scope.score;
//     httpFactory.post(scores, payload);
//     $scope.score = {};
//     showMessage("score Successfully Added!");
//   };

//   $scope.editscore = function(id){
//     score = "/api/v1/score/" + id;
//     httpFactory.get(score).then(function(response) {
//       $scope.score = response.data;
//     });
//     $scope.edit = true;
//   };

//   $scope.updatescore = function() {
//     var payload = $scope.score;
//     httpFactory.put(score, payload);
//     $scope.edit = false;
//     $scope.score = {};
//     showMessage("score Successfully Updated!");
//   };

//   $scope.deletescore = function(id) {
//     score = "/api/v1/score/" + id;
//     httpFactory.delete(score);
//     showMessage("score Successfully Deleted!");
//   };
// }]);
