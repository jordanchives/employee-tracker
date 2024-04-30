// Import required modules
const inquirer = require('inquirer');
const db = require('./db');

// Initialize the application
function init() {
    console.log('Welcome to Employee Manager!');
    displayMainPrompt();
}

// Display the main prompt
function displayMainPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            pageSize: 15,
            name: 'option',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'View employees by manager', 'View employees by department', 'View department budgets', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Update employee manager', 'Delete department', 'Delete role', 'Delete employee', 'Quit']
        }
    ]).then(response => {
        // Call the appropriate function based on the user's choice
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

// Define the functions that will be called based on the user's choice

// View all departments
function viewAllDepartments() {
    db.viewAllDepartments().then(([rows]) => {
        const array =
        console.table(rows);
        displayMainPrompt();
    });
}

// View all roles
function viewAllRoles() {
    db.viewAllRoles().then(([rows]) => {
        console.table(rows);
        displayMainPrompt();
    });
}


// View all employees
function viewAllEmployees() {
    db.viewAllEmployees().then(([rows]) => {
        console.table(rows);
        displayMainPrompt();
    });
}

// Add a department
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

// Add a role
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

// Add an employee
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

// Update an employee's role
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

// Update an employee's manager
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

// View all employees under a manager
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

// View all employees in a department
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

// Delete a department
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

// Delete a role
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

// Delete an employee
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

// View the salary budget of a department
function viewDepartmentBudgets() {
    db.viewDepartmentBudgets().then(([rows]) => {
        console.table(rows);
        displayMainPrompt();
    });
}

// Quit the application
function quit() {
    db.close();
    console.log('Goodbye!');
    process.exit();
}

// Call the init function to start the application
init();