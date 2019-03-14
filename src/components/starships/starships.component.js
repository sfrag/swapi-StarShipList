(() => {
    'use strict';

    angular
        .module('starshipList', [])
        .component('starshipList', {
            bindings: {
                data: '<',
                nextSh: '&'
            },
            templateUrl: './components/starships/starships.component.html'
        });
})();