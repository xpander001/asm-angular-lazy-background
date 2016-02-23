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

    var directive = {
      restrict: 'A',
      scope: {
      },
      link: link,
    };

    return directive;

    function link(scope, elem, attrs) {

      setScope(scope, elem, attrs);
      $timeout(function () {
        scope.createImage();
      }, 3000);

      scope.setBackgroundImage = function (element, imageSource) {
        element.style.backgroundSize = 'cover';
        element.style.background = 'url(' + imageSource + ') no-repeat center center';
      };

      scope.createImage = function () {
        var newImage = new Image();
        newImage.src = scope.imageSource;
        newImage.onload = scope.onImageLoad;
      };

      scope.subscribeToEvents = function () {

      };

      scope.unsuscribeToEvents = function () {

      };

      scope.onImageLoad = function () {
        scope.setBackgroundImage(scope.el, scope.imageSource);
      };
    }
  }

})();
