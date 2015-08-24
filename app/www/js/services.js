angular.module('ImageShare.services',[])

.value('USER',{})
.value('SOCKET_URL','http://192.168.1.203:8000')

.factory('Camera', ['$q', function($q) {
 
  return {
    getPicture: function(options) {
      var q = $q.defer();
      navigator.camera.getPicture(function(result) {        
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);
      
      return q.promise;
    }
  }
}]);
