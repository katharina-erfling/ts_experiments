// Das ? bei email macht das Feld optional –
// d.h. ein User-Objekt ist auch ohne E-Mail gültig.
interface User {
    name: string;
    age: number;
    email?: string; // Typ ist hier intern: string | undefined
}

// Gültig, obwohl email fehlt – dank des ?
const user: User = {
    name: "John Doe",
    age: 30,
};

// TypeScript erzwingt die Prüfung: ohne das if würde
// user.email.toLocaleLowerCase() einen Compile-Fehler werfen,
// weil email undefined sein könnte.
if (user.email) {
    console.log(user.email.toLocaleLowerCase()); // Hier weiß TS: email ist string
} else {
    console.log("E-Mail is missing");
}