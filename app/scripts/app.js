'use strict';

/**
* @ngdoc overview
* @name frontazApp
* @description
* # frontazApp
*
* Main module of the application.
*/
angular
.module('frontazApp', [
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ui.router',
	'ngSanitize',
	'ngTouch'
	])
.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

	$locationProvider.html5Mode({
       enabled: true,
       requireBase: false,
	});
	
	
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/main.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
	});
	$stateProvider.state('about', {
		url: '/about',
		templateUrl: 'views/about.html',
		controller: 'AboutCtrl',
		controllerAs: 'about'
	});
	$stateProvider.state('contact', {
		url: '/contact',
		templateUrl: 'views/contact.html',
		controller: 'ContactCtrl',
		controllerAs: 'contact'
	});

	$urlRouterProvider.otherwise("/");
});
