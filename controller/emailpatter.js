angular.module('mainApp').controller('HomeCtrl', function ($scope) {

    $scope.re=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
});


// function($scope) {
//     $scope.login = function() {
//         // $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
//         var user = {
//             email: $scope.email,
//             password: $scope.password
//         }
//     }
// })
// //
// <!DOCTYPE html>
// <html xmlns="http://www.w3.org/1999/xhtml">
//     <head>
//     <title></title>
//     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
//     </head>
//     <body ng-app="app">
//     <div ng-controller="controllerName">
//     <ng-form name="mailForm">
//     Email: <input type="text" ng-model="mail" name="mail" ng-pattern="re" /><br />
//     <span ng-show="mailForm.mail.$error.pattern" style="color:red">Please enter correct email address.</span>
// </ng-form>
// </div>
// <script>
// var app = angular.module("app", []);
// app.controller('controllerName', ['$scope', function ($scope) {
//     $scope.mail = "visrosoftware@gmail.com";
//     $scope.re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
// }]);
// </script>
// </body>
// </html>