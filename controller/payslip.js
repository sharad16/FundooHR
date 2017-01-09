angular.module("mainApp").controller('selectAll', function($scope,$http){
    $http.get('json/report.json').then(function(data){
        console.log("json data:"+data);
        $scope.checkboxes = data.data;
        $scope.toggleSelect = function(){
            angular.forEach($scope.checkboxes, function(item){
                item.selected = event.target.checked;
            });
        }

    });
});