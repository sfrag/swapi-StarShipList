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
        vm.shipList = [];

        getShips(vm.pagenum);
        
        function getShips() {
            vm.pagenum = vm.pagenum + 1;
            StarshipService.GetStarships(vm.pagenum)
            .then((res) => {
                if(res.results.length != 0) {
                    (vm.shipList).push.apply(vm.shipList,res.results);
                }
            })
            .catch ((err)=>{
                alert("No more ships")
            })
        }
    }
})();