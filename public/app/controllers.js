var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
  $scope.message = 'Please feel free to take a look around';
  $scope.title = 'Jen Sears | Portfolio';
}]);

controllers.controller('AboutController', ['$scope', function($scope){
  $scope.message = 'Hello, I am the About page, folks!';
  $scope.aboutTitle = "About Jen";
  $scope.aboutContent = "In short, English major gone tech. Native Floridian who has abdicated and returned to her roots in the South.";
  $scope.secondContent = "She is notorious for her ways with both the written and spoken word, as well as marvelous feats of detail-orientation, and artfully bridging the tech-to-non-tech communication gap. Along with some fairly cheeky endeavours in custom cross-stitching from time to time.";
  $scope.thirdContent = "Having reached a juncture in life where... something something... Nashville Software School... two sides of brain joining forces... something something here.";
  $scope.quote = "'Make voyages. Attempt them. There's nothing else.' Tennessee Williams";
}]);

controllers.controller('ExperienceController', ['$scope', function($scope){
  $scope.message = 'Experience page here!';
}]);

controllers.controller('ContactController', ['$scope', function($scope){
  $scope.contactTitle = 'Contact';
  $scope.email = 'jen.lauren.sears@gmail.com';
}]);

controllers.controller('SamplesController', ['$scope', function($scope){
  $scope.message = 'There will be samples';
  $scope.samples=[];

  $scope.addSamples = function(delightful){
    $scope.samples.push(delightful);
    $scope.newSample='';
  }
}]);