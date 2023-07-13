const db = require('./connection.js');

function insertDepartment(department){
    db.query(`INSERT INTO departments (name) VALUES ('${department}')`)
}

function insertRole(title, salary, department_id){
    db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${title}', ${salary}, ${department_id})`)
}

function insertEmployee(first_name, last_name, role_id, department_id){
    db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', ${last_name}, ${role_id}, ${department_id})`)
}

function updateEmployee(role_id, employee_id){
    db.query(`UPDATE employees SET role_id = ${role_id} WHERE id = '${employee_id}'`)
}

module.exports = { insertDepartment, insertRole, insertEmployee, updateEmployee};