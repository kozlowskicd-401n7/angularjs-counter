    angular.module('counterApp', [])
    .controller('counterController', function() {

      var counter = this;
      
      counter.currentCount = 0;

      counter.increment = function() {
        counter.currentCount = counter.currentCount + 1;
      }

      counter.decrement = function() {
        counter.currentCount = counter.currentCount - 1;
      }
      
    });