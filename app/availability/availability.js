(function(module){
    'use strict';

    function AvailabilityCtrl(){
        var availabilityCtrl = this;
        availabilityCtrl.fromDate = new Date();
        availabilityCtrl.toDate = new Date();
        availabilityCtrl.toDate.setDate(this.fromDate.getDate() + 1);
    }
    module.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'availability/availability.html',
                controller: 'AvailabilityCtrl'
            });
        }])
        .controller('AvailabilityCtrl', AvailabilityCtrl);
}(angular.module('myApp.availability', ['ngRoute'])));