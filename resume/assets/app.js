var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/basics', {
            templateUrl: './assets/tpl/index.html',
            controller: ''
        })
}])
