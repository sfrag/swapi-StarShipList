(function () {
    'use strict';

    angular
        .module('app')
        .controller('StarshipsController', StarshipsController);

    StarshipsController.$inject = [];

    function StarshipsController() {
        var vm = this;
    }
})();