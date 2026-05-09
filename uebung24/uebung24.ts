// Destrukturiert ein Objekt direkt im Parameter – age ist optional mit Standardwert 25
function displayUserInfo(
    { name, age = 25 }: { name: string; age?: number }
): void {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Destrukturiert ein Tuple direkt im Parameter – second ist optional
function getFirstTwoElements(
    [first, second]: [number, number?]
): void {
    console.log(`First: ${first}, Second: ${second}`);
}

displayUserInfo({ name: "John" });              // → "Hello, John! You are 25 years old."
displayUserInfo({ name: "Alice", age: 30 });    // → "Hello, Alice! You are 30 years old."

// Bug: `[5, 10)` → schließende Klammer falsch: `)` statt `]`
getFirstTwoElements([5, 10]); // → "First: 5, Second: 10"
getFirstTwoElements([8]);     // → "First: 8, Second: undefined"