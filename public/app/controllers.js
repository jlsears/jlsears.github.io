var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
  $scope.message = 'Please feel free to take a look around';
  $scope.title = 'Jen Sears | Portfolio';
}]);

controllers.controller('AboutController', ['$scope', function($scope){
  $scope.message = 'Hello, I am the About page, folks!';
  $scope.aboutTitle = "About Jen";
  $scope.aboutContent = "In short, English major gone tech. Native Floridian who has abdicated and returned to her roots in the South.";
  $scope.secondContent = "She is notorious for both her ways with the written and spoken word, as well as marvelous feats of detail-orientation. Along with some fairly cheeky endeavours in cross-stitching from time to time.";
  $scope.thirdContent = "Having reached a juncture in life where... something something... Nashville Software School... two sides of brain joining forces... something something here.";

}]);

controllers.controller('ExperienceController', ['$scope', function($scope){
  $scope.message = 'Experience page here!';
}]);

controllers.controller('ContactController', ['$scope', function($scope){
  $scope.message = 'Contact page here!';
}]);

controllers.controller('SamplesController', ['$scope', function($scope){
  $scope.message = 'There will be samples';
  $scope.samples=[];

  $scope.addSamples = function(delightful){
    $scope.samples.push(delightful);
    $scope.newSample='';
  }
}]);