// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform,$rootScope, $timeout, $ionicHistory) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
.state('tab.model', {
    url: '/model',
    views: {
      'tab-model': {
        templateUrl: 'templates/tab-model.html',
        controller: 'ModelCtrl'
      }
    }
  })
.state('tab.model-add', {
    url: '/model/add',
    views: {
      'tab-model': {
        templateUrl: 'templates/add-model.html',
        controller: 'ModelCtrl'
      }
    }
  })
  .state('tab.model-update', {
    url: '/model/update',
    views: {
      'tab-model': {
        templateUrl: 'templates/update-model.html',
        controller: 'ModelCtrl'
      }
    }
  })
  .state('tab.model-list', {
    url: '/model/list',
    views: {
      'tab-model': {
        templateUrl: 'templates/list-model.html',
        controller: 'ModelCtrl'
      }
    }
  })
  .state('tab.model-delete', {
    url: '/model/delete',
    views: {
      'tab-model': {
        templateUrl: 'templates/delete-model.html',
        controller: 'ModelCtrl'
      }
    }
  })
  .state('tab.concept', {
    url: '/concept',
    views: {
      'tab-concept': {
        templateUrl: 'templates/tab-concept.html',
        controller: 'ConceptCtrl'
      }
    }
  })
  .state('tab.concept-add', {
    url: '/concept/add',
    views: {
      'tab-concept': {
        templateUrl: 'templates/add-concept.html',
        controller: 'ConceptCtrl'
      }
    }
  })
  .state('tab.concept-update', {
    url: '/concept/update',
    views: {
      'tab-concept': {
        templateUrl: 'templates/update-concept.html',
        controller: 'ConceptCtrl'
      }
    }
  })
  .state('tab.concept-list', {
    url: '/concept/list',
    views: {
      'tab-concept': {
        templateUrl: 'templates/list-concept.html',
        controller: 'ConceptCtrl'
      }
    }
  })
  .state('tab.concept-delete', {
    url: '/concept/delete',
    views: {
      'tab-concept': {
        templateUrl: 'templates/delete-concept.html',
        controller: 'ConceptCtrl'
      }
    }
  })
  .state('tab.input', {
    url: '/input',
    views: {
      'tab-input': {
        templateUrl: 'templates/tab-input.html',      
         controller: 'InputCtrl'  
      }
    }
  })
.state('tab.input-add', {
    url: '/input/add',
    views: {
      'tab-input': {
        templateUrl: 'templates/add-input.html',
         controller: 'InputCtrl'        
      }
    }
  })
  .state('tab.input-update', {
    url: '/input/update',
    views: {
      'tab-input': {
        templateUrl: 'templates/update-input.html',
         controller: 'InputCtrl'        
      }
    }
  })
  .state('tab.input-list', {
    url: '/input/list',
    views: {
      'tab-input': {
        templateUrl: 'templates/list-input.html',
         controller: 'InputCtrl'
      }
    }
  })
  .state('tab.input-delete', {
    url: '/input/delete',
    views: {
      'tab-input': {
        templateUrl: 'templates/delete-input.html',
         controller: 'InputCtrl'
      }
    }
  })
.state('tab.predict', {
    url: '/predict',
    views: {
      'tab-predict': {
        templateUrl: 'templates/tab-predict.html',
        controller:'PredicateCtrl'        
      }
    }
  })
  .state('tab.predict-show', {
    url: '/predict/show',
    views: {
      'tab-predict': {
        templateUrl: 'templates/show-predict.html',      
        controller:'PredicateCtrl'  
      }
    }
  })

    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/model');

});
