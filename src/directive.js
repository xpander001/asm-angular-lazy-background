(function () {

  'use strict';

  angular
    .module('asmAngularLazyBackground')
    .directive('asmAngularLazyBackground', asmAngularLazyBackground);

  /* @ngInject */
  function asmAngularLazyBackground($window, $document, $timeout) {

    var directive = {
      restrict: 'A',
      scope: {
      },
      link: link,
    };

    return directive;

    function link(scope, elem, attrs) {

      setScope(scope, elem, attrs);
      elem.addClass('asm-ang-lazy-bg');
      createImage(scope.imageSource, function () {
        return onImageLoad(scope.el, scope.imageSource);
      });

      /* Private functions */

      function setScope(scope, element, atributes) {
        scope.el = element;
        scope.imageSource = atributes.asmImgSrc;
      }

      function setBackgroundImage(element, imageSource) {
        element.css({
          backgroundImage: 'url(' + imageSource + ')',
        });
      }

      function createImage(source, onLoadCallback) {
        var newImage = new Image();
        newImage.src = source;
        newImage.onload = onLoadCallback;
        return newImage;
      }

      function subscribeToEvents() {

      }

      function unsuscribeToEvents() {

      }

      function onImageLoad(element, imageSource) {
        setBackgroundImage(element, imageSource);
        element.addClass('loaded');
      }
    }
  }

})();
