// Verarbeitet String, Zahl, Boolean oder null und gibt String oder Zahl zurück
function handleInput(input: string | number | boolean | null): string | number {
    // Fix: null-Check statt 0-Check
    if (input === null) {
        return "No value provided";
    }

    if (typeof input === "boolean") {
        return input ? "True" : "False"; // true → "True", false → "False"
    }

    if (typeof input === "string") {
        return input.toUpperCase(); // String → Großbuchstaben
    }

    return input * input; // Zahl → Quadrat: 5 → 25
}

console.log(handleInput(null));    // → "No value provided"
console.log(handleInput(true));    // → "True"
console.log(handleInput("hello")); // → "HELLO"
console.log(handleInput(5));       // → 25
console.log(handleInput(0));       // → 0