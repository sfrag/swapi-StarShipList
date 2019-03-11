(() => {
    'use strict';

    angular
        .module('app')
        .component('starshipList', {
            bindings: {
                brand: '<'
            },
            templateUrl: '/components/starships.component.html',
            controller: function () {

            }
        });
})();