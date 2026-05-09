// Verarbeitet String, Zahl oder Boolean unterschiedlich
function handleValue(value: string | number | boolean) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // String → Großbuchstaben
    } else if (typeof value === "number") {
        console.log(value * 2);           // Zahl → verdoppelt
    } else {
        console.log(value ? "It's true!" : "It's false!"); // Boolean → Text
    }
}

handleValue("hello");      // → "HELLO"
handleValue("TypeScript"); // → "TYPESCRIPT"
handleValue(21);           // → 42
handleValue(50);           // → 100
handleValue(false);        // → "It's false!"
handleValue(true);         // → "It's true!"