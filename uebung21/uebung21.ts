// Generische Funktion: gibt den Eingabewert unverändert zurück
// T wird beim Aufruf automatisch aus dem Argument abgeleitet
function identity<T>(arg: T): T {
    return arg;
}

const num = identity(42);                        // T → number
console.log(num);                                // → 42

const str = identity("Hello TypeScript!");       // T → string
console.log(str);                                // → "Hello TypeScript!"

const objArray = identity([{ id: 1 }, { id: 2 }]); // T → { id: number }[]
console.log(objArray);                           // → [{ id: 1 }, { id: 2 }]