angular.module('mainApp').controller('report', function ($scope, $location, $stateParams, $state, $auth) {
    $state.go('home.report');
    localStorage.setItem('akey','1332345678');
    var akey=localStorage.getItem('satellizer_token');
    console.log("Key=:"+akey);
});