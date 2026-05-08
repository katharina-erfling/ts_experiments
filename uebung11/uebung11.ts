// Akzeptiert nur exakt diese drei Strings – andere Werte gibt TypeScript als Fehler aus
function setStatus(status: 'success' | 'error' | 'loading') {
    console.log(`Status: ${status}`);
}

// Akzeptiert nur die Zahlen 1–5 als Literal Types
function rateExperience(rating: 1 | 2 | 3 | 4 | 5): string {
    return `You rated the experience as ${rating}`;
}

// Hinweis: `true | false` ist equivalent zu `boolean` – kann vereinfacht werden
function togglePower(state: true | false): string {
    return state ? 'Power is ON' : 'Power is OFF';
}

setStatus('success'); // → "Status: success"
setStatus('error');   // → "Status: error"

console.log(rateExperience(5)); // → "You rated the experience as 5"
console.log(rateExperience(3)); // → "You rated the experience as 3"
// console.log(rateExperience(6)); // Compilerfehler: 6 ist kein gültiger Wert

console.log(togglePower(true));  // → "Power is ON"
console.log(togglePower(false)); // → "Power is OFF"
// console.log(togglePower("on")); // Compilerfehler: "on" ist kein boolean