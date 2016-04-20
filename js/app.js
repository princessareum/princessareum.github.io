angular.module('app', [ 'firebase','ui.router'])
  .constant('firebaseRoot', 'https://mb-email-list.firebaseio.com/')

  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'pages/home.html'
      })

      .state('about', {
        url:'/about',
        templateUrl: 'pages/about.html'
      })

      .state('menu', {
        url: '/menu',
        templateUrl: 'pages/menu.html'
      })

      .state('contactus', {
        url: '/contactus',
        templateUrl: 'pages/contactus.html'
      })

      .state('secret', {
        url: '/secret',
        templateUrl: 'pages/secret.html'
      })

      $urlRouterProvider.otherwise('/');
  })
