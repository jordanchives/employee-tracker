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
function init() {
    console.log('Welcome to Employee Manager!');
    displayMainPrompt();
}


function displayMainPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            pageSize: 15,
            name: 'option',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Update employee manager', 'View employees by manager', 'View employees by department', 'Delete department', 'Delete role', 'Delete employee', 'View department budgets', 'Quit']
        }
    ]).then(response => {
        switch (response.option) {
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
            case 'Update employee manager':
                updateEmployeeManager();
                break;
            case 'View employees by manager':
                viewEmployeesByManager();
                break;
            case 'View employees by department':
                viewEmployeesByDepartment();
                break;
            case 'Delete department':
                deleteDepartment();
                break;
            case 'Delete role':
                deleteRole();
                break;
            case 'Delete employee':
                deleteEmployee();
                break;
            case 'View department budgets':
                viewDepartmentBudgets();
                break;
            case 'Quit':
                quit();
        }
    });

}

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
    db.viewAllDepartments().then(([rows]) => {
        console.table(rows);
        displayMainPrompt();
    });
}

function viewAllRoles() {
    db.viewAllRoles().then(([rows]) => {
        console.table(rows);
        displayMainPrompt();
    });
}

function viewAllEmployees() {
    db.viewAllEmployees().then(([rows]) => {
        console.table(rows);
        displayMainPrompt();
    });
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department:'
        }
    ]).then(response => {
        db.addDepartment(response).then(() => {
            console.log('Department added successfully!');
            displayMainPrompt();
        });
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the role:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary of the role:'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter the department id of the role:'
        }
    ]).then(response => {
        db.addRole(response).then(() => {
            console.log('Role added successfully!');
            displayMainPrompt();
        });
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the first name of the employee:'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the last name of the employee:'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter the role id of the employee:'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter the manager id of the employee:'
        }
    ]).then(response => {
        db.addEmployee(response).then(() => {
            console.log('Employee added successfully!');
            displayMainPrompt();
        });
    });
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the id of the employee:'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the id of the new role:'
        }
    ]).then(response => {
        db.updateEmployeeRole(response.employeeId, response.roleId).then(() => {
            console.log('Employee role updated successfully!');
            displayMainPrompt();
        });
    });
}

function updateEmployeeManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the id of the employee:'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the id of the new manager:'
        }
    ]).then(response => {
        db.updateEmployeeManager(response.employeeId, response.managerId).then(() => {
            console.log('Employee manager updated successfully!');
            displayMainPrompt();
        });
    });
}

function viewEmployeesByManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the id of the manager:'
        }
    ]).then(response => {
        db.viewEmployeesByManager(response.managerId).then(([rows]) => {
            console.table(rows);
            displayMainPrompt();
        });
    });
}

function viewEmployeesByDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the id of the department:'
        }
    ]).then(response => {
        db.viewEmployeesByDepartment(response.departmentId).then(([rows]) => {
            console.table(rows);
            displayMainPrompt();
        });
    });
}

function deleteDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the id of the department:'
        }
    ]).then(response => {
        db.deleteDepartment(response.departmentId).then(() => {
            console.log('Department deleted successfully!');
            displayMainPrompt();
        });
    });
}

function deleteRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the id of the role:'
        }
    ]).then(response => {
        db.deleteRole(response.roleId).then(() => {
            console.log('Role deleted successfully!');
            displayMainPrompt();
        });
    });
}

function deleteEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the id of the employee:'
        }
    ]).then(response => {
        db.deleteEmployee(response.employeeId).then(() => {
            console.log('Employee deleted successfully!');
            displayMainPrompt();
        });
    });
}

function viewDepartmentBudgets() {
    db.viewDepartmentBudgets().then(([rows]) => {
        console.table(rows);
        displayMainPrompt();
    });
}

function quit() {
    db.close();
    console.log('Goodbye!');
    process.exit();
}

init();