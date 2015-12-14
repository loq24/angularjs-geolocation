(function(){
  var app = angular.module('geocodeAPI',[]);
  //main ctrller
  app.controller('MainCtrl',function($scope, $http){
      $scope.key = "AIzaSyDABuHvrQV0dPHbsRlnH80zxTm3b3vaqBc";
      $scope.lat = "";
      $scope.lng = "";
      //process data after pressing enter
      $scope.findLatLng = function(keyEvent, address){
        if (keyEvent.which === 13){
          $http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&sensor=false&key="+$scope.key).success(function(data){
            console.log(data);
            $scope.lat = data.results[0].geometry.location.lat;
            $scope.lng = data.results[0].geometry.location.lng;
          }).error(function(data) {
              console.log("Error: "+data);
          });
        }
      };
      //reset
      $scope.reset = function(){
        $scope.addressBox = "";
        $scope.lat = "";
        $scope.lng = "";
      };
  });
})();
