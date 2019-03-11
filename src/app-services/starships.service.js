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
            var req = {
                method: 'GET',
                url: 'https://swapi.co/api/starships/',
                headers: {
                    'Authorization': 'none',
                    'Content-Type': 'application/json'
                }
            }
            return $http(req).then(handleSuccess, handleError('Error getting starships'));
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