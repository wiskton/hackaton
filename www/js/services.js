angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Diogo Porfirio',
    lastText: 'Como esta o PI?',
    face: 'img/diogo.png'
  }, {
    id: 1,
    name: 'Guilherme Torres',
    lastText: 'Atualiza a tabela do campeonato de Mortal Kombat',
    face: 'img/guilherme.jpg'
  }, {
    id: 2,
    name: 'João Pedro',
    lastText: 'Enviei os arquivos do PI para o drive',
    face: 'img/joao.jpg'
  }, {
    id: 3,
    name: 'Mauricio Ioshimine',
    lastText: 'Atualizei o roteiro do PI',
    face: 'img/mauricio.jpg'
  }, {
    id: 4,
    name: 'Vitor Aleixo',
    lastText: 'Já modelei a nave pro game jam',
    face: 'img/vitor.jpg'
  }, {
    id: 5,
    name: 'Jansen Duarte',
    lastText: 'Atualize o drive com projeto do PI',
    face: 'img/jansen.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == '1667493' && pw == 'will') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})