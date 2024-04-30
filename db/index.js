// Import the MySQL connection
const connection = require('./connection');

// Database class with methods to perform CRUD operations
class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // View all departments
    viewAllDepartments() {
        return this.connection.promise().query(
            'SELECT * FROM department'
        );
    }

    // View all roles
    viewAllRoles() {
        return this.connection.promise().query(
            'SELECT role.id, role.title, department.name AS department, role.salary  FROM role JOIN department ON role.department_id = department.id'
        );
    }

    // View all employees
    viewAllEmployees() {
        return this.connection.promise().query(
            'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id'
        );
    }

    // Add a department
    addDepartment(department) {
        return this.connection.promise().query(
            'INSERT INTO department SET ?',
            department
        );
    }

    // Add a role
    addRole(role) {
        return this.connection.promise().query(
            'INSERT INTO role SET ?',
            role
        );
    }

    // Add an employee
    addEmployee(employee) {
        return this.connection.promise().query(
            'INSERT INTO employee SET ?',
            employee
        );
    }

    // Update an employee's role
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.promise().query(
            'UPDATE employee SET role_id = ? WHERE id = ?',
            [roleId, employeeId]
        );
    }

    // Update an employee's manager
    updateEmployeeManager(employeeId, managerId) {
        return this.connection.promise().query(
            'UPDATE employee SET manager_id = ? WHERE id = ?',
            [managerId, employeeId]
        );
    }

    // View employees by manager
    viewEmployeesByManager(managerId) {
        return this.connection.promise().query(
            'SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id WHERE manager_id = ?',
            managerId
        );
    }

    // View employees by department
    viewEmployeesByDepartment(departmentId) {
        return this.connection.promise().query(
            'SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id WHERE department_id = ?',
            departmentId
        );
    }

    // Delete a department
    deleteDepartment(departmentId) {
        return this.connection.promise().query(
            'DELETE FROM department WHERE id = ?',
            departmentId
        );
    }

    // Delete a role
    deleteRole(roleId) {
        return this.connection.promise().query(
            'DELETE FROM role WHERE id = ?',
            roleId
        );
    }

    // Delete an employee
    deleteEmployee(employeeId) {
        return this.connection.promise().query(
            'DELETE FROM employee WHERE id = ?',
            employeeId
        );
    }

    // View the total utilized budget of a all departments
    viewDepartmentBudgets() {
        return this.connection.promise().query(
            'SELECT department.name AS department, SUM(role.salary) AS budget FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id GROUP BY department.name'
        );
    }

    // Close the connection
    close() {
        return this.connection.promise().end();
    }
}

// Export the DB class
module.exports = new DB(connection);
