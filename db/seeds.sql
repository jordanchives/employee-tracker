use employee_db;

INSERT INTO department (name) VALUES
    ('IT'),
    ('HR'),
    ('Legal'),
    ('Sales');

INSERT INTO role (title, salary, department_id) VALUES
    ('Help Desk Technician', 50000, 1),
    ('Software Engineer', 100000, 1),
    ('Senior Software Engineer', 120000, 1),
    ('HR Manager', 80000, 2),
    ('Legal Counsel', 120000, 3),
    ('Sales Manager', 90000, 4);
    ('Sales Associate', 60000, 4);
    ('Legal Assistant', 50000, 3);
    ('HR Assistant', 40000, 2);
    ('Junior Software Engineer', 80000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Alice', 'Smith', 2, NULL),
    ('Bob', 'Johnson', 3, 1),
    ('Charlie', 'Brown', 4, 1),
    ('David', 'White', 5, 2),
    ('Eve', 'Black', 6, 3),
    ('Frank', 'Green', 7, 3),
    ('Grace', 'Purple', 8, 4),
    ('Heidi', 'Orange', 9, 4),
    ('Ivan', 'Yellow', 10, 2);