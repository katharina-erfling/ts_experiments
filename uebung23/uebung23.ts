// Summiert beliebig viele Zahlen via Rest Parameter
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Berechnet die Hypotenuse mit dem Satz des Pythagoras: √(a² + b²)
function calculateHypotenuse(a: number, b: number): number {
    return Math.sqrt(a * a + b * b);
}

const total = sumAll(1, 2, 3, 4, 5);
console.log(total); // → 15

// Tuple [number, number] garantiert exakt zwei Zahlen → Spread funktioniert sicher
const sides: [number, number] = [3, 4];
const hypotenuse = calculateHypotenuse(...sides);
console.log(hypotenuse); // → 5

// Hinweis: normales Array statt Tuple → Spread auf calculateHypotenuse würde Compilerfehler geben
// da TypeScript nicht garantieren kann, dass genau zwei Zahlen vorhanden sind
const invalidSides = [3, 4, 5];