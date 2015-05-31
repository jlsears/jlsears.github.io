var app = angular.module('myapp', ['ngRoute', 'myapp.controllers']);

app.config(['$routeProvider', function($routeProvider){
 $routeProvider
    .when('/', {templateUrl: 'partials/index', controller: 'IndexController'})
    .when('/about', {templateUrl: 'partials/about', controller: 'AboutController'})
    .when('/experience', {templateUrl: 'partials/experience', controller: 'ExperienceController'})
    .when('/contact', {templateUrl: 'partials/contact', controller: 'ContactController'})
    .when('/samples', {templateUrl: 'partials/samples', controller: 'SamplesController'})
}])

.config(['$locationProvider', function($locationProvider){
  $locationProvider.html5Mode(true);
}]);