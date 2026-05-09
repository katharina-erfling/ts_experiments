// Typ für eine mathematische Operation mit zwei Zahlen
type MathOperation = (a: number, b: number) => number;

// Führt eine beliebige MathOperation mit zwei Werten aus
function calculate(fn: MathOperation, x: number, y: number): number {
    return fn(x, y);
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

console.log(calculate(add, 10, 5));      // → 15
console.log(calculate(multiply, 10, 5)); // → 50