(function(){
  angular.module('AppDirectives', [])
    .directive('theMainBody', theMainBody) // the-main-body
    .directive('theHeader', theHeader) // the-header
    .directive('theFooter', theFooter) // the-footer
    .directive('theVanilla', theVanilla) // the-vanilla
    .directive('theJquery', theJquery) // the-jquery
    .directive('theAngular', theAngular) // the-angular
    
    function theMainBody(){
        var directive ={
        templateUrl: 'templates/mainBody.html',
        restrict: 'E'
        }
        return directive
    }
    
    function theFooter(){
        var directive ={
        templateUrl: 'templates/footer.html',
        restrict: 'E'
        }
        return directive
    }
    
    function theHeader(){
        var directive ={
        templateUrl: 'templates/header.html',
        restrict: 'E'
        }
        return directive
    }
    
    function theVanilla(){
        var directive ={
        templateUrl: 'templates/the_vanilla.html',
        restrict: 'E'
        }
        return directive
    }
    
    function theJquery(){
        var directive ={
        templateUrl: 'templates/the_jquery.html',
        restrict: 'E'
        }
        return directive
    }
    
    function theAngular(){
        var directive ={
        templateUrl: 'templates/the_angular.html',
        restrict: 'E'
        }
        return directive
    }
}())