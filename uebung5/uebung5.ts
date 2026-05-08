let person_name: string = "Erik"; // Wird deklariert, aber nie verwendet

// Gibt Vor- und Nachname zusammen zurück – fehlt ein Leerzeichen: "JohnDoe" statt "John Doe"
function getFullName(firstName: string, lastName: string): string {
    return firstName + lastName; // Bug: sollte `firstName + " " + lastName` sein
}

// Summiert alle Zahlen im Array
function calculateTotal(numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0); // Startwert 0 ist korrekt
}

const fullName = getFullName("John", "Doe");       // → "JohnDoe"
const total = calculateTotal([10, 20, 30]);         // → 60

console.log(`Person: ${fullName}, Total: ${total}`); // Gibt "Person: JohnDoe, Total: 60" aus