(function() {
  'use strict';

  angular
    .module('carServiceScheduleMaker')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
