angular.module('starter')
    .service('ProdutosService',function($http,$q){
      var url = 'http://cozinhapp.sergiolopes.org/produtos';

      var promisse= $http.get(url).then(function(response){
          var json= JSON.stringify(response.data);
          localStorage.setItem('cache',json);
          return response.data;
      });

      var cache = localStorage.getItem('cache');

      if(cache!=null){
          promisse = $q(function(resolve,reject){
          resolve(JSON.parse(cache));
        });
      }
      return{
        lista: function(){
          return promisse;
        }
      };
});
