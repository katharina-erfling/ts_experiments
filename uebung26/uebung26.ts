// Interface für einen Mitarbeiter
// employeeId ist readonly – kann nach Initialisierung nicht mehr geändert werden
interface Employee {
    readonly employeeId: number;
    details: {
        position: string;
        salary: number;
    };
}

// Aktualisiert die Position eines Mitarbeiters
// Hinweis: readonly schützt nur employeeId – details und seine Felder sind weiterhin änderbar
function updateEmployeePosition(employee: Employee, newPosition: string): void {
    employee.details.position = newPosition;
    console.log(`Employee ID: ${employee.employeeId}, New Position: ${employee.details.position}`);
}

const employee1: Employee = {
    employeeId: 1001,
    details: {
        position: "Junior Developer",
        salary: 5000
    }
};

updateEmployeePosition(employee1, "Senior Developer");
// → "Employee ID: 1001, New Position: Senior Developer"