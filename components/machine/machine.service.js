angular.module('app.machine.service', [])
    .factory('machineService', machineService);

function machineService() {
    var service = {
        setMachine: setMachine,
        getMachine: getMachine
    };
    return service;

    var machine;
    function setMachine(data) {
        machine = data;
    }

    function getMachine() {
        return machine
    }
}