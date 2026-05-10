// Interface für ein Auto mit drei Pflichtfeldern
interface Car {
    make: string;
    model: string;
    year: number;
}

// Gibt die Autodetails in der Konsole aus
function printCarDetails(car: Car): void {
    console.log(`Car Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
}

printCarDetails({ make: "Toyota", model: "Corolla", year: 2021 });
// → "Car Make: Toyota, Model: Corolla, Year: 2021"