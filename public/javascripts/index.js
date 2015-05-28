(function () {
  'use strict';

  angular.module('demo', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.description="Portfolio App";
  }])
})();