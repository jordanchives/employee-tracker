const inquirer = require('inquirer');
const db = require('./db');
/*
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
Bonus
Try to add some additional functionality to your application, such as the ability to do the following:

Update employee managers.

View employees by manager.

View employees by department.

Delete departments, roles, and employees.

View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
*/

/*

viewAllDepartments() - returns a promise that resolves with all departments
viewAllRoles() - returns a promise that resolves with all roles
viewAllEmployees() - returns a promise that resolves with all employees
addDepartment(department) - returns a promise that resolves with the result of adding a department
addRole(role) - returns a promise that resolves with the result of adding a role
addEmployee(employee) - returns a promise that resolves with the result of adding an employee
updateEmployeeRole(employeeId, roleId) - returns a promise that resolves with the result of updating an employee's role
updateEmployeeManager(employeeId, managerId) - returns a promise that resolves with the result of updating an employee's manager
viewEmployeesByManager(managerId) - returns a promise that resolves with all employees with the given manager
viewEmployeesByDepartment(departmentId) - returns a promise that resolves with all employees in the given department
deleteDepartment(departmentId) - returns a promise that resolves with the result of deleting a department
deleteRole(roleId) - returns a promise that resolves with the result of deleting a role
deleteEmployee(employeeId) - returns a promise that resolves with the result of deleting an employee
viewDepartmentBudgets() - returns a promise that resolves with the department budgets
close() - closes the connection

*/

function viewAllDepartments() {
    db.viewAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log('\n');
            console.table(departments);
        })
        .catch(err => console.log(err))
}

viewAllDepartments();