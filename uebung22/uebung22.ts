// Erstellt ein Benutzerprofil als String
// age und email sind optional – Standardwerte: 18 und "N/A"
function createUserProfile(
    username: string,
    age: number = 18,
    email: string = "N/A"
): string {
    return `User ${username} is ${age} years old and can be contacted at ${email}.`;
}