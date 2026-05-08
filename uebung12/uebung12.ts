// Formatiert eine Zahl, einen String oder einen Boolean als String
function formatInput(input: number | string | boolean): string {
    if (typeof input === "number") {
        return (input * 100).toString(); // Zahl × 100 → als String: 0.5 → "50", 12 → "1200"
    } else if (typeof input === "string") {
        return input.toLowerCase(); // String → Kleinbuchstaben: "Hello" → "hello"
    } else {
        return input ? "Yes" : "No"; // Boolean: true → "Yes", false → "No"
    }
}

console.log(formatInput(0.5));    // → "50"
console.log(formatInput(12));     // → "1200"
console.log(formatInput("Hello")); // → "hello"
console.log(formatInput("WORLD")); // → "world"
console.log(formatInput(true));   // → "Yes"
console.log(formatInput(false));  // → "No"