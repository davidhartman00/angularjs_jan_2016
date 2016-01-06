(function(){
    angular.module('myFactory', [])
    .factory('jsFactory', jsFactory)
    jsFactory.$inject = ['$http']
    function jsFactory($http){
        var myFactoryObject = {}
        
        myFactoryObject.getLinks = function(){
            return $http.get('/api/libraries')
            // js-library-project-philuchansky.c9users.io/api/libraries/
        }
        
        myFactoryObject.getPage = function(libId){
            console.log("from factory ", libId)
            return $http.get('/api/libraries/' + libId)
        }
        
        myFactoryObject.removeLinks = function(libId , link_id){
            return $http.delete('/api/libraries/' + libId, link_id)
        }
        
        myFactoryObject.putLinks = function(libId , resource){
            return $http.put('/api/libraries/' + libId, resource)
        }
        
        return myFactoryObject
        
    }
    
}())