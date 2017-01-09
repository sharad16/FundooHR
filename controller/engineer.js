angular.module('mainApp').controller('engineer', function($scope,$http) {
     localStorage.setItem('key-', 'sssssss');
     var akey=localStorage.getItem('satellizer_token');
     console.log("key::",akey);


    $http({
        method: 'GET',
        url: 'http://192.168.0.171:3000/readFalloutAttendanceEmployee?timeStamp=1483315200000&token=21hghj'
// headers:{'satellizer_token':}
    }).then(function(data) {
        console.log(data.data);
        $scope.engineer=data.data.falloutEmployee;

    });

});
