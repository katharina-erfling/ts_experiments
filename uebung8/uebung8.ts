// Typ für eine Person
type Person = {
    name: string;
    age: number;
    isActive: boolean;
};

// Erlaubte Werte für den Response-Status
type ResponseStatus = 'success' | 'failure' | 'pending';

// Gibt Personendetails in der Konsole aus
function printPersonDetails(person: Person) {
    console.log('Name: ' + person.name);
    console.log('Age: ' + person.age);
    console.log('Status: ' + (person.isActive ? 'Active' : 'Inactive')); // true → "Active", false → "Inactive"
}

// Gibt je nach Status eine Meldung aus
function handleResponse(status: ResponseStatus) {
    if (status === 'success') {
        console.log('Operation successful');
    } else if (status === 'failure') {
        console.log('Operation failed');
    } else {
        console.log('Operation pending'); // Greift bei 'pending'
    }
}

const person = { name: 'Alice', age: 30, isActive: true };
printPersonDetails(person); // → Name: Alice, Age: 30, Status: Active

handleResponse('success'); // → "Operation successful"
handleResponse('failure'); // → "Operation failed"
handleResponse('pending'); // → "Operation pending"