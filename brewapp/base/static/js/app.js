angular.module('myApp', ['timer','angularFileUpload','ngResource', 'ui.bootstrap', 'ngRoute', 'myApp.controllers', 'myApp.controllers5','myApp.controllers2', 'myApp.controllers3','myApp.controllers6','myApp.services', 'ui.sortable', 'dndLists']).config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/base/static/partials/dashboard/overview.html',
      name: "Dashboard"
    })
    .when('/step/overview', {
      templateUrl: '/base/static/partials/steps/overview.html',
      name: "Steps"
    })
    .when('/setup', {
      templateUrl: '/base/static/partials/setup/setup.html',
    })
    .when('/kettle/overview', {
      templateUrl: '/base/static/partials/kettle/overview.html',
      name: "Kettle"
    })
    .when('/about', {
      templateUrl: '/base/static/partials/about/about.html',
      name: "About"
    })
    .when('/kettle/:vid', {
      templateUrl: '/base/static/partials/kettle/edit.html',
    })
    .when('/chart/:vid', {
      templateUrl: '/base/static/partials/chart/chart.html',
    })
    .when('/step/kb', {
      templateUrl: '/base/static/partials/steps/kbupload.html',
    })
    .when('/step/:vid', {
      templateUrl: '/base/static/partials/steps/edit.html',
    })

    .otherwise({
      redirectTo: '/'
    });
});