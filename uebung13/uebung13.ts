// Gibt den Status aus – behandelt null, undefined und leeren String gleich
function displayStatus(status: string | null | undefined): string {
    // Falsy-Check: null, undefined und "" landen alle im else-Zweig
    if (status) {
        return "Status: " + status;
    } else {
        return "No status available.";
    }
}

console.log(displayStatus("Active"));    // → "Status: Active"
console.log(displayStatus("Pending"));   // → "Status: Pending"
console.log(displayStatus(null));        // → "No status available."
console.log(displayStatus(undefined));   // → "No status available."
console.log(displayStatus(""));          // → "No status available."