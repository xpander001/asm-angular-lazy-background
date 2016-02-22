angular.module('lazy-example', [
    'asmAngularLazyBackground',
  ]);

(function () {
  'use strict';

  angular
    .module('lazy-example')
    .controller('ExampleController', function () {
      var _this = this;
      _this.myName = '';
    });
})();
