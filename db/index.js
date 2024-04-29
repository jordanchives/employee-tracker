const connection = require('./connection');

/*
QUERIES

viewAllDepartments - SELECT * FROM department

viewAllRoles - SELECT role.id, role.title, role.salary, department.name FROM role JOIN department ON role.department_id = department.id

viewAllEmployees - SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id

addDepartment - INSERT INTO department (name) VALUES ?

addRole - INSERT INTO role SET ?

addEmployee - INSERT INTO employee SET ?

updateEmployeeRole - UPDATE employee SET role_id = ? WHERE id = ?

updateEmployeeManager - UPDATE employee SET manager_id = ? WHERE id = ?

viewEmployeesByManager - SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id WHERE manager_id = ?

viewEmployeesByDepartment - SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id WHERE department_id = ?

deleteDepartment - DELETE FROM department WHERE id = ?

deleteRole - DELETE FROM role WHERE id = ?

deleteEmployee - DELETE FROM employee WHERE id = ?

viewDepartmentBudgets - SELECT department.name AS department, SUM(role.salary) AS budget FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id GROUP BY department.name
*/

class DB {
    constructor(connection) {
        this.connection = connection;
    }
}