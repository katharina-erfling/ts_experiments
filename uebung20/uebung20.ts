// Einfacher Funktionstyp: nimmt eine Zahl, gibt eine Zahl zurück
type NumberOperation = (num: number) => number;

const double: NumberOperation = (num) => num * 2;
const halve: NumberOperation = (num) => num / 2;

// Callable Type mit zusätzlicher Property:
// Funktion die aufgerufen werden kann UND eine description-Property hat
type DescribableNumberOperation = {
    description: string;
    (num: number): number;
};

// Gibt die Beschreibung aus und führt die Operation aus
function describeAndApply(operation: DescribableNumberOperation, num: number) {
    console.log(operation.description);
    return operation(num);
}

// Object.assign fügt description zur Funktion hinzu → erfüllt DescribableNumberOperation
const describableDouble: DescribableNumberOperation = Object.assign(double, {
    description: "This operation doubles the number.",
});

const describableHalve: DescribableNumberOperation = Object.assign(halve, {
    description: "This operation halves the number.",
});

console.log(describeAndApply(describableDouble, 10)); // → 20
console.log(describeAndApply(describableHalve, 10));  // → 5