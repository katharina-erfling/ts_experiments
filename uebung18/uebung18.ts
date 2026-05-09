// Typen für die zwei Fahrzeuge mit jeweils eigener Methode
type Car = {
    drive: () => void;
};

type Truck = {
    loadCargo: () => void;
};

// Type Predicate: prüft zur Laufzeit ob das Fahrzeug ein Car ist
// `vehicle is Car` informiert TypeScript über den Typ nach der Prüfung
function isCar(vehicle: Car | Truck): vehicle is Car {
    return (vehicle as Car).drive !== undefined;
}

// Narrowing mit Type Predicate: TypeScript kennt den genauen Typ im jeweiligen Zweig
function handleVehicle(vehicle: Car | Truck) {
    if (isCar(vehicle)) {
        vehicle.drive();       // → Car
    } else {
        vehicle.loadCargo();   // → Truck
    }
}

const vehicles: (Car | Truck)[] = [
    { drive: () => console.log("Car driving") },
    { loadCargo: () => console.log("Truck loading cargo") },
];

// filter() nutzt isCar als Type Predicate → cars hat Typ Car[]
const cars = vehicles.filter(isCar);
cars.forEach(car => car.drive()); // → "Car driving"

handleVehicle({ drive: () => console.log("Car driving") });             // → "Car driving"
handleVehicle({ loadCargo: () => console.log("Truck loading cargo") }); // → "Truck loading cargo"