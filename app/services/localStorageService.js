(function() {
  angular
    .module('angularLocalStorage')
    .factory('localStorageService', localStorageService);

    localStorageService.$inject = ['$window'];

    function localStorageService($window){

      
      const _save = function(name, value){
        var result = {name: name, value: value};
        $window.localStorage.setItem(name, value);
        return _get(name);
      };
      const _get = function(name){

        var result = $window.localStorage.getItem(name)

        return result;
      };

      const _remove = function(name){
        $window.localStorage.removeItem(name);

        if(!_get(name)){
          return {message:'removed'};
        }else{
          return {message:'not removed'};
        }
      };

      const service =  {
        save:_save,
        get: _get,
        remove: _remove
      };

      return service;
    };
})();
