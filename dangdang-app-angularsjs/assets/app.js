
var app = angular.module('app',['ngRoute'])



app.config(['$routeProvider'],function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'./tpl/index.html',
      controller:''
    })
    .when('/blog',{
      templateUrl:'./tpl/index.html',
      controller:''
    })
    .when('/book',{
      templateUrl:'./tpl/book.html',
      controller:'bookController'
    })
    .when('/about_me',{
      templateUrl:'./tpl/about_me.html',
      controller:''
    })
    .when('/book_list',{
      templateUrl:'./assets/tpl/book_list.html',
      controller:'bookListController'
    })
    .otherwise({
      redirectTo:'/'
    })
})
