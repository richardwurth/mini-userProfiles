angular.module('userProfiles').controller('MainController', function($scope, mainService){

    $scope.thisAppIsBroken = "This angular app is working";
    //set initial list
    $scope.users = mainService.getUsers();
    $scope.toggleFavorite = function(userId) {
      // mainService.toggleFavorite will toggle the matching user and return
      //an updated list we can use to reset (update) the list
      $scope.users = mainService.toggleFavorite(userId);
    }
});
