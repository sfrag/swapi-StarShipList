(function () {
    'use strict';

    angular
        .module('app')
        .controller('StarshipsController', StarshipsController);

    StarshipsController.$inject = ['StarshipService'];

    function StarshipsController(StarshipService) {
        var vm = this;

        vm.getShips = getShips;

        getShips();

        function getShips() {
            StarshipService.GetStarships();
        }
    }
})();