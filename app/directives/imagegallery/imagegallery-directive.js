(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name bornholmZwei.directive:imagegallery
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="bornholmZwei">
       <file name="index.html">
        <imagegallery></imagegallery>
       </file>
     </example>
   *
   */
  angular
    .module('bornholmZwei')
    .directive('imagegallery', imagegallery);

  function imagegallery() {
    return {
      restrict: 'EA',
      scope: false,
      templateUrl: 'directives/imagegallery/imagegallery-directive.tpl.html',
      replace: true,
      controllerAs: 'imagegallery',
      controller: function () {
        var vm = this;
        vm.name = 'imagegallery';
      },
      link: function (scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
