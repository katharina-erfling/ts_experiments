// Generische Funktion: gibt das erste Element zurück oder undefined wenn das Array leer ist
// T wird automatisch aus dem übergebenen Array abgeleitet
function getFirstElement<T>(arr: Array<T>): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

const firstNumber = getFirstElement([1, 2, 3]);                    // T → number
const firstString = getFirstElement(["apple", "banana", "cherry"]); // T → string

console.log(firstNumber); // → 1
console.log(firstString); // → "apple" 
