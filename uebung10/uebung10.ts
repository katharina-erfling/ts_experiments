// `unknown` erzwingt explizite Typprüfung vor der Verwendung
const mysteryObject: unknown = {
    info: 'Initial Info',
};

// Type Assertion: TypeScript wird angewiesen, mysteryObject als { info: string } zu behandeln
const typedMysteryObject = mysteryObject as { info: string };

typedMysteryObject.info = 'Updated Info';

type ComplexObject = {
    compute: () => string;
};

const basicObject = {
    compute: function () {
        return 'BasicComputation'; // Kein Leerzeichen
    },
};

// Double Assertion – nötig wenn Typen inkompatibel sind
// Riskant: TypeScript vertraut blind, keine echte Prüfung zur Laufzeit
const complexObject = basicObject as unknown as ComplexObject;

console.log(complexObject.compute()); // → "BasicComputation"

console.log('Updated info:', typedMysteryObject.info); // → "Updated Info"

// Fix: 'Basic Computation' → 'BasicComputation' (Leerzeichen entfernt)
if (complexObject.compute() === 'BasicComputation') {
    console.log('compute method returned the expected result.'); // → wird jetzt ausgeführt
} else {
    console.error('compute method did not return the expected result.');
}

// Prüft zur Laufzeit ob info wirklich ein string ist
if (typeof typedMysteryObject.info === 'string') {
    console.log('info property is of type string.'); // → wird ausgeführt
} else {
    console.error('info property is not of type string.');
}