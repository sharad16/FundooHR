var mainApp = angular.module("mainApp", ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'satellizer']);
mainApp.config( function ($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {
    var skipIfLoggedIn = ['$q','$auth', function ($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.reject();
        } else {
            deferred.resolve();
        }
        return deferred.promise;
    }];
    var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }
        return deferred.promise;
    }];
    $urlRouterProvider.otherwise('/home');
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl',

            // resolve: {
            //     loginRequired: loginRequired
            // }
        })
        .state('home.dashboard',{
            url:'/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller:'DashCtrl',
            // resolve: {
            //     loginRequired:loginRequired
            // }
        })
        .state('home.report', {
            url: '/report',
            templateUrl: 'templates/report.html',
            controller: 'report',
            // resolve: {
            //     loginRequired: loginRequired
            // }
        })
        .state('home.payslip', {
            url: '/payslip',
            templateUrl: 'templates/payslip.html',
            controller: 'selectAll',
            // resolve: {
            //     loginRequired: loginRequired
            // }
        })

        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
             controller: 'LoginCtrl',
            // resolve: {
            //     skipIfLoggedIn: skipIfLoggedIn
            // }
        })
         .state('logout', {
             url: '/logout',
               controller: 'LogoutCtrl',
             activetab: 'logout'
        })

        .state('home.attReport',{
            url: 'attandance',
            templateUrl: 'templates/attandance.html',
            controller:'AttCtrl',
            resolve: {
                loginRequired:loginRequired
            }
        })


});