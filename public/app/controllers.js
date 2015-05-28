var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
  $scope.message = 'Hello, I am the home page, guys!';
}]);

controllers.controller('AboutController' ['$scope', function($scope){
  $scope.message = 'Hello, I am the About page, folks!';
}]);

controllers.controller('SamplesController', ['$scope', function($scope){
  $scope.message = 'Hello, I am the Samples page, guys!';
  $scope.samples=[];

  $scope.addSamples = function(delightful){
    $scope.samples.push(delightful);
    $scope.newSample='';
  }
}]);