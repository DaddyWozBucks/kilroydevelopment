angular.module('kDev',
    ['kDev.controllers',
      'kDev.services',
      'kDev.directives',
      'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'ngResource',
    'ngFileUpload',
    'ngSanitize'
  ])

  .config(function($stateProvider, $urlRouterProvider) {


      $stateProvider
      .state('app',{
        url: '/app',
        abstract: true,
        views: {
          "header": { templateUrl: "templates/app.html", controller: "AppCtrl" }
        }
      })
      .state('app.kilroy',{
        url: '/projects',
        views: {
          "main": { templateUrl: "templates/kilroy.html", controller: "KilroyCtrl"}
        }
      })
      .state('app.project',{
        url: '/projects/:projectId',
        views: {
          "main": { templateUrl: "templates/project-detail.html", controller: "ProjectDetailCtrl"}
        }
      })
      .state('app.about',{
        url: '/about',
        views: {
          "main": { templateUrl: "templates/about.html", controller: "AboutCtrl"}
        }
      })
      .state('app.landing',{
        url: '/',
        views: {
          "main": { templateUrl: "templates/landing.html", controller: "LandingCtrl"}
        }
      })
      .state('app.blog',{
        url: '/blog',
        views: {
          "main": { templateUrl: "templates/blog.html", controller: "BlogCtrl"}
        }
      })
      .state('app.post',{
        url: '/blog/:postId',
        views: {
          "main": { templateUrl: "templates/post.html", controller: "PostCtrl"}
        }
      })
      .state('app.contact',{
        url: '/contact',
        views: {
          "main": { templateUrl: "templates/contact.html", controller: "ContactCtrl"}
        }
      })

        $urlRouterProvider.otherwise('/app/');
    })
