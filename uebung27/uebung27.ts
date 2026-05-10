// Interface für ein Auto – year und color optional, vin readonly
interface Car {
    make: string;
    model: string;
    year?: number;
    color?: string;
    readonly vin: string; // Kann nach Initialisierung nicht mehr geändert werden
}

// Erstellt ein neues Car-Objekt – year und color optional
function createCar(make: string, model: string, vin: string, year?: number, color?: string): Car {
    return { make, model, vin, year, color };
}

// Ändert die Farbe eines Autos
function paintCar(car: Car, newColor: string): void {
    car.color = newColor;
    console.log(`Car ${car.make} ${car.model} has been painted ${car.color}`);
}

// Fix: Erstellt eine aktualisierte Kopie des Autos mit neuem Jahr und neuer Farbe
// Spread-Operator stellt sicher dass vin und andere Felder erhalten bleiben
function updateCarDetails(car: Car, year: number, color: string): Car {
    return { ...car, year, color };
}

const car1: Car = createCar("Toyota", "Corolla", "12345VIN", 2020);
paintCar(car1, "Red"); // → "Car Toyota Corolla has been painted Red"

const car2: Car = createCar("Honda", "Civic", "67890VIN", 2018, "Blue");
// → { make: "Honda", model: "Civic", vin: "67890VIN", year: 2021, color: "Black" }
const updatedCar = updateCarDetails(car2, 2021, "Black");
console.log(updatedCar);