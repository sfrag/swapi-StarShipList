(() => {
    'use strict';

    angular
        .module('starshipList', [])
        .component('starshipList', {
            bindings: {
                data: '='
            },
            templateUrl: './components/starships/starships.component.html',
        });
})();