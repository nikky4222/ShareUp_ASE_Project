angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.shareUp', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/shareUp.html',
        controller: 'shareUpCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.groceryList', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/groceryList.html',
        controller: 'groceryListCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});