angular.module('appRoutes', [])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('javascript', {
                url: '/javascript',
                templateUrl: 'templates/the_vanilla.html',
                controller: 'LibraryController as javascriptCtrl'
            })
            .state('angularjs', {
                url: '/angularjs',
                templateUrl: 'templates/the_angular.html',
                controller: 'LibraryController as angularCtrl'
            })
            .state('jquery',{
                url: '/jqueryjs',
                templateUrl: 'templates/the_jquery.html',
                controller: 'LibraryController as jQueryCtrl'
            })
            .state('defaultPage', {
                url: '/',
                templateUrl: 'templates/mainBody.html',
                controller: 'LibraryController as theDefault'
            })
    })
    