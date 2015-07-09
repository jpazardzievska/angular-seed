(function(module){
    'use strict';

    module.directive('background', function($interval){
       return {
           restrict: 'A',
           scope: {},
           link: function(scope, element, attribute){
               var slides = ['images/bg1.jpg',
                   'images/bg2.jpg',
                   'images/bg3.jpg',
                   'images/bg4.jpg'];
               scope.slide = slides[0];
               var index = 0;
               $interval(function () {
                   if (index === (slides.length - 1)) {
                       index = 0;
                   } else {
                       index++;
                   }
                   scope.slide = slides[index];
                   element.animate({
                       backgroundColor: 'transparent'
                   }, 1000);
                   $('body').css('backgroundImage', 'url(' + scope.slide + ')');
                   element.delay(3000).animate({
                      backgroundColor: '#fff'
                   }, 1000);
               }, 5000, 0);
           }
       }
    });

}(angular.module('myApp')));