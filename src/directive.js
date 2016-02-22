(function () {

  'use strict';

  angular
    .module('asmAngularLazyBackground')
    .directive('asmAngularLazyBackground', asmAngularLazyBackground);

  /* @ngInject */
  function asmAngularLazyBackground($window, $document, $timeout) {

    function setScope(scope, element, atributes) {
      scope.el = element[0];
      scope.imageSource = atributes.asmImgSrc;
    }

    function setBackgroundImage(element, imageSource) {
      element.style.backgroundSize = 'cover';
      element.style.background = 'url(' + imageSource + ') no-repeat center center';
    }

    var directive = {
      restrict: 'A',
      scope: {
      },
      link: link,
    };

    return directive;

    function link($scope, $elem, $attrs) {
      setScope($scope, $elem, $attrs);
      setBackgroundImage($scope.el, $scope.imageSource);
    }
  }

})();
