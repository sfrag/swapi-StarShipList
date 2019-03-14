(() => {
    'use strict';

    angular
        .module('starship', [])
        .component('starship', {
            require: {
                parentComp:'^starshipList'
            },
            bindings: {
                data: '<'
            },
            templateUrl: './components/starship/starship.component.html'
        });
})();