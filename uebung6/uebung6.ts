// Typ für ein Buch – yearPublished ist optional (?)
type Book = { // Fix: Großgeschrieben
    title: string;
    author: string;
    yearPublished?: number;
};

// Gibt Buchdetails in der Konsole aus
function printBookDetails(book: Book) {
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);

    // Zeigt Jahr nur an, wenn es angegeben wurde
    if (book.yearPublished !== undefined) {
        console.log("Year Published: " + book.yearPublished);
    } else {
        console.log("Year Published: Unknown"); // Fix: Typo korrigiert
    }
}

// Ohne Jahr → gibt "Year Published: Unknown" aus
printBookDetails({ title: "The TypeScript Handbook", author: "Dan Vanderkam" });
// Mit Jahr → gibt "Year Published: 2008" aus
printBookDetails({ title: "Clean Code", author: "Robert C. Martin", yearPublished: 2008 });