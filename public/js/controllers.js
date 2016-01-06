(function(){
  angular.module('AppControllers', [])
    .controller('jsController', jsController)
    .controller('LibraryController', LibraryController)
    
    jsController.$inject = ['$http','jsFactory']
    LibraryController.$inject = ['$http','jsFactory','$rootScope']
    
    function jsController(myHTTP, jsFactory){
        
        
        var self = this
        
        self.nav = []
        self.links = [
                      'https://docs.angularjs.org/api/ngRoute',
                      'https://docs.angularjs.org/api/ng/directive/ngApp',
                      'https://docs.angularjs.org/api/ng/directive/ngValue',
                      'this is a link'
                      ]
                      
        
        self.changeColor = function(color){
          self.colorScheme = color
        }
        
        console.log("The controller is being instantiated")
        // Angular Button on NAV
        self.angularClick = function(targetLibName){
          console.log("==clicked Angular==")
            jsFactory.getPage(targetLibName)
              .then(function(response){
              console.log("w: ", response)
              })
        }
        // JS Button on NAV
       
        // JQuery on NAV
        self.jqueryClick = function(){
          console.log("==clicked JQuery==")
          // jsFactory.getPage()
        }
        
        self.addLink = function(){
        console.log('====added resource====')
      
        }
    }
      
    function LibraryController(myHTTP, jsFactory,$rootScope){
      var self = this
      self.name = 'The Library Controller'
      self.jsId = "5681c5b5c3d0b7182ff26cc9"
      self.angularId = "5681c5c8c3d0b7182ff26ccb"
      self.jqueryId = "5681c5c4c3d0b7182ff26cca"
      self.jsLibrary = {}
      self.jqueryLibrary = {}
      self.angularLibrary = {}
      $rootScope.processing = false
      
      self.addResource= function(libId){
        jsFactory.putLinks(libId, self.resource)
          .then(function(response){
            console.log(response)
          })
      }
      
      self.javascriptInit = function(){
        console.log("getting vanilla js resources")
        $rootScope.processing = true
        $rootScope.search = ''
        jsFactory.getPage(self.jsId)
            .then(function(response){             
              self.jsLibrary = response.data
              console.log($rootScope.jsLibrary)
              $rootScope.processing = false
              console.log($rootScope.processing)
            })
      }
      self.angularjsInit = function(){
        console.log('getting angularjs resources')
        $rootScope.processing = true
        $rootScope.search = ''
        console.log($rootScope.processing)
        jsFactory.getPage(self.angularId)
            .then(function(response){             
              self.angularLibrary = response.data
              console.log(self.angularLibrary)
              $rootScope.processing = false
              console.log($rootScope.processing)
            })
      }
      self.jQueryInit = function(){
        console.log('getting jQuery resources')
        $rootScope.processing = true
        $rootScope.search = ''
        jsFactory.getPage(self.jqueryId)
            .then(function(response){             
              self.jqueryLibrary = response.data
              console.log(self.jqueryLibrary)
              $rootScope.processing = false
            })
      }
      self.defaultInit = function(){
        console.log('getting default resources')
        
      }
    }  
    
}())