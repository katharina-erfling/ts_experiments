/*Übung 1: Erkennung von Typenfehlern */


// discount war falsch als string deklariert
// parseFloat war nur nötig um den String in eine Zahl umzuwandeln


function calculateDiscount(price: number, discount: number): number {
    return price - discount;
}

const finalPrice = calculateDiscount(100, 10);
console.log(`The final price is $${finalPrice}`);

