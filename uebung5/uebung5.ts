let person_name: string = "Erik";

function getFullName(firstName: string, lastName: string): string {
    return firstName + lastName;
}

function calculateTotal(numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

const fullName = getFullName("John", "Doe");
const total = calculateTotal([10, 20, 30]);

console.log(`Person: ${fullName}, Total: ${total}`);