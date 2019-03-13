(function () {
    'use strict';

    angular
        .module('app')
        .controller('StarshipsController', StarshipsController);

    StarshipsController.$inject = ['StarshipService'];

    function StarshipsController(StarshipService) {

        var vm = this;

        vm.getShips = getShips;
        vm.pagenum = 0;

        getShips(vm.pagenum);
        
        function getShips(pagenum) {
            StarshipService.GetStarships(pagenum+1).then((res) => {
                vm.shipList = res.results;
            })
        }
    }
})();