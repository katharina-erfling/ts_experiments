// Interface für ein Produkt – price und description optional, category readonly
interface Product {
    id: number;
    name: string;
    price?: number;
    description?: string;
    readonly category: string; // Kann nach Initialisierung nicht mehr geändert werden
}

function printProductDetails(product: Product): void {
    // Ternary statt ?? da price 0 sein könnte – ?? würde 0 durchlassen, aber "Not available" wäre falsch
    const price = product.price !== undefined ? `$${product.price}` : "Not available";
    // ?? gibt rechten Wert nur bei null/undefined zurück – korrekt für optionalen String
    const description = product.description ?? "No description available";

    console.log(`ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Category: ${product.category}`);
    console.log(`Price: ${price}`);
    console.log(`Description: ${description}`);
}

// Ohne price und description → Standardwerte greifen
const product1: Product = {
    id: 101,
    name: "Laptop",
    category: "Electronics"
};

// Mit allen Feldern
const product2: Product = {
    id: 102,
    name: "Phone",
    price: 799,
    description: "Latest model",
    category: "Electronics"
};

printProductDetails(product1);
printProductDetails(product2);