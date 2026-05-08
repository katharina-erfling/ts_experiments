// Verarbeitet einen String, eine Zahl oder einen Boolean und gibt String oder Zahl zurück
function processInput(input: string | number | boolean): string | number {
    if (typeof input === "string") {
        return input.toUpperCase(); // String → Großbuchstaben: "example" → "EXAMPLE"
    } else if (typeof input === "number") {
        return input * input; // Zahl → Quadrat: 7 → 49
    } else if (typeof input === "boolean") {
        return input ? "Yes" : "No"; // true → "Yes", false → "No"
    }

    // Wird nie erreicht, da alle drei Typen abgedeckt sind
    return "Invalid input type";
}

console.log(processInput("example")); // → "EXAMPLE"
console.log(processInput(7));         // → 49
console.log(processInput(true));      // → "Yes"
console.log(processInput(false));     // → "No"