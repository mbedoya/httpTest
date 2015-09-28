angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $http, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  console.log("hi there!");
  
  var cedula = '32244446';
  var urlServicio = "http://200.47.173.68:9081" + "/AntaresWebServices/interfaceAntares/validarME/" + cedula;

  $http.get(urlServicio).
      success(function(data, status, headers, config) {
          console.log(data);
          alert('success');
      }).
      error(function(data, status, headers, config) {
          console.log('error');
          alert('error');
      });

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
