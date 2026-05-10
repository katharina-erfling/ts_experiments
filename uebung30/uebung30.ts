// Furniture erbt alle Felder von Product und fügt material und dimensions hinzu
// Bug: `Furnitur` → `Furniture` (Tippfehler im Interface-Namen)
interface Furniture extends Product {
    material: string;
    dimensions: { length: number; width: number; height: number };
}

// Objekt muss alle Felder aus Product und Furniture erfüllen
const chair: Furniture = {
    id: 2,
    name: "Office Chair",
    price: 200,
    material: "Leather",
    dimensions: { length: 60, width: 50, height: 110 },
};