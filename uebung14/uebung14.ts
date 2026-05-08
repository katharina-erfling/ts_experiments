// Analysiert einen String, eine Zahl oder einen Boolean und gibt eine Beschreibung zurück
function analyzeInput(input: string | number | boolean): string {
    if (input === true) {
        return "Input is exactly true";
    } else if (input === false) {
        return "Input is exactly false";
    } else if (input === 0) {
        return "Input is zero";
    } else if (typeof input === "number") {
        if (input > 0) {
            return "Input is a positive number";
        } else if (input < 0) {
            return "Input is a negative number";
        } else {
            return "Unknown input"; // Wird nie erreicht: 0 ist bereits oben abgefangen
        }
    } else if (input === "hello") {
        return "Input is the string 'hello'";
    } else if (typeof input === "string") {
        return "Input is another string"; // Greift für alle anderen Strings inkl. ""
    } else {
        return "Unknown input"; // Wird nie erreicht: alle drei Typen sind abgedeckt
    }
}

console.log(analyzeInput(true));      // → "Input is exactly true"
console.log(analyzeInput(false));     // → "Input is exactly false"
console.log(analyzeInput(0));         // → "Input is zero"
console.log(analyzeInput(42));        // → "Input is a positive number"
console.log(analyzeInput(-7));        // → "Input is a negative number"
console.log(analyzeInput("hello"));   // → "Input is the string 'hello'"
console.log(analyzeInput("world"));   // → "Input is another string"
console.log(analyzeInput(""));        // → "Input is another string"
// console.log(analyzeInput(undefined)); // Compilerfehler: undefined ist kein gültiger Typ
// console.log(analyzeInput(null));      // Compilerfehler: null ist kein gültiger Typ