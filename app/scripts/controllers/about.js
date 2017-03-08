'use strict';

/**
 * @ngdoc function
 * @name frontazApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontazApp
 */
angular.module('frontazApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.data = [
    	{
    		id: 1,
    		title: 'post1title',
    		content: 'eloags asg sas dsa 1'
    	},
    	{
    		id: 2, 
    		title: 'post2title',
    		content: 'aggasdgasd gas ad gaeaw sag a 2'
    	}
    ];
  });
