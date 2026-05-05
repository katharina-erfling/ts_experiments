// Interface definiert den "Vertrag" für alle Fahrzeuge:
// Jedes Objekt, das als Vehicle gilt, muss diese zwei Methoden haben.
interface Vehicle {
    startEngine: (key: string) => boolean;  // Schlüssel rein → Motor an (true) oder nicht (false)
    drive: (speed: number) => string;        // Geschwindigkeit rein → Status als Text zurück
}

// Ein konkretes Objekt, das den Vehicle-Vertrag erfüllt.
// TypeScript prüft das implizit, sobald es an operateVehicle übergeben wird.
const myCar = {
    startEngine: (key: string) => {
        console.log(`Engine started with key: ${key}`);
        return true;  // Startet hier immer – kein echter Fehlerfall implementiert
    },
    drive: (speed: number) => {
        return `Driving at ${speed} km/h`;
    },
};

// Nimmt irgendein Vehicle entgegen – nicht nur myCar.
// Das ist der Punkt: durch das Interface ist die Funktion wiederverwendbar.
function operateVehicle(vehicle: Vehicle): string {
    if (vehicle.startEngine("car-key")) {
        return vehicle.drive(60);       // Motor läuft → fahren
    } else {
        return "Engine failed to start."; // Wird bei myCar nie erreicht (s.o.)
    }
}