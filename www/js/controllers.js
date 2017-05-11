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

.controller('ContatosCtrl', function($scope, $stateParams, Chats) {

  var ctrl = this;

  ctrl.contatos = [{
    id: 0,
    name: 'Diogo Porfirio',
    tipo: 'Docente',
    imagem: 'img/diogo.png'
  }, {
    id: 1,
    name: 'Guilherme Torres',
    tipo: 'Coordenador',
    imagem: 'img/guilherme.jpg'
  }, {
    id: 2,
    name: 'João Pedro',
    tipo: 'Aluno',
    imagem: 'img/joao.jpg'
  }, {
    id: 3,
    name: 'Mauricio Ioshimine',
    tipo: 'Aluno',
    imagem: 'img/mauricio.jpg'
  }, {
    id: 4,
    name: 'Vitor Aleixo',
    tipo: 'Aluno',
    imagem: 'img/vitor.jpg'
  }, {
    id: 5,
    name: 'Jansen Duarte',
    tipo: 'Aluno',
    imagem: 'img/jansen.jpg'
  }, {
    id: 6,
    name: 'Flavio Novi',
    tipo: 'Docente',
    imagem: 'img/flavio.jpg'
  }, {
    id: 7,
    name: 'Flavio Novi',
    tipo: 'Docente',
    imagem: 'img/flavio.jpg'
  }];

})