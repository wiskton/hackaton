angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('NotasCtrl', function($scope, $stateParams, Chats) {

  var ctrl = this;

  ctrl.notas = [{
    id: 1,
    serie: "3A",
    disciplina: 'Programação',
    faltas: 0,
    nota1: 9.00
  }, {
    id: 2,
    serie: "3A",
    disciplina: 'Modelagem 3D',
    faltas: 0,
    nota1: 9.00
  }, {
    id: 3,
    serie: "3A",
    disciplina: 'Criação de Personagens',
    faltas: 0,
    nota1: 8.00
  }, {
    id: 4,
    serie: "3A",
    disciplina: 'Roteiro',
    faltas: 0,
    nota1: 7.00
  }];

})