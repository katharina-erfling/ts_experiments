"use strict";
const myCar = {
    startEngine: (key) => {
        console.log(`Engine started with key: ${key}`);
        return true;
    },
    drive: (speed) => {
        return `Driving at ${speed} km/h`;
    },
};
function operateVehicle(vehicle) {
    if (vehicle.startEngine("car-key")) {
        return vehicle.drive(60);
    }
    else {
        return "Engine failed to start.";
    }
}
