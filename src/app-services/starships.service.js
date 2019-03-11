(function () {
    'use strict';

    angular
        .module('app')
        .factory('StarshipService', StarshipService);

    StarshipService.$inject = ['$http'];

    function StarshipService($http) {
        var service = {};

        service.GetStarships = GetStarships;

        return service;

        function GetStarships() {

        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return {
                    success: false,
                    message: error
                };
            };
        }
    }

})();