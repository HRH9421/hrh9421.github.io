var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
            .when('/',{
                templateUrl:'/assets/tpl/index.html'
            })
}])