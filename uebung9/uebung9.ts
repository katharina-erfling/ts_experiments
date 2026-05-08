// Basis-Interface für eine Person
interface Person1 {
    name: string;
    age: number;
}

// Employee erbt alle Felder von Person1 und fügt employeeId hinzu
interface Employee extends Person1 {
    employeeId: number;
}

// Gibt Mitarbeiterdetails aus
function printEmployeeDetails(employee: Employee) {
    console.log('Name: ' + employee.name);
    console.log('Age: ' + employee.age);
    console.log('Employee ID: ' + employee.employeeId);
}

// Interface Declaration Merging: beide Deklarationen werden zu einem Interface zusammengeführt
// → Display hat am Ende: { resolution: string; size: number }
interface Display {
    resolution: string;
}

interface Display {
    size: number;
}

// Gibt Display-Details aus
function printDisplayDetails(display: Display) {
    console.log('Resolution: ' + display.resolution);
    console.log('Size: ' + display.size);
}

const employee = { name: 'Bob', age: 40, employeeId: 12345 };
printEmployeeDetails(employee); // → Name: Bob, Age: 40, Employee ID: 12345

const display = { resolution: '4K', size: 27 };
printDisplayDetails(display); // → Resolution: 4K, Size: 27