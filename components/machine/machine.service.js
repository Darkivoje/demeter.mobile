angular.module('app.machine.service', [])
    .factory('machineService', machineService);

function machineService() {
    var machines = [];
    var service = {
        addMachine: addMachine,
        getMachines: getMachines
    };
    return service;

    function addMachine(data) {
        getMachines().push(data);
    }

    function getMachines() {
        return machines
    }
}