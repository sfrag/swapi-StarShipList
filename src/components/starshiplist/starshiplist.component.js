(() => {
    'use strict';

    angular
        .module('starshipList', [])
        .component('starshipList', {
            bindings: {
                data: '<',
                nextSh: '&'
            },
            templateUrl: './components/starshiplist/starshiplist.component.html'
        });
})();