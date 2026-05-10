// Basis-Interface für ein Produkt
interface Product {
    id: number;
    name: string;
    price: number;
}

// Electronics erbt alle Felder von Product und fügt brand und warranty hinzu
interface Electronics extends Product {
    brand: string;
    warranty: number; // Garantie in Monaten
}

// Objekt muss alle Felder aus Product und Electronics erfüllen
const laptop: Electronics = {
    id: 1,
    name: "Gaming Laptop",
    price: 1500,
    brand: "TechBrand",
    warranty: 24,
};