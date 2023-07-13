const db = require('./connection.js');

function viewDepartments() {
    db.query('SELECT * FROM departments', (err, res) => {
        if (err) throw error
        console.log(res);
    });
};

function viewRoles(){
    db.query('SELECT * FROM roles', (err, res) => {
        if (err) throw error
        console.log(res);
    });
};

function viewEmployees(){
    db.query('SELECT * FROM employees', (err, res) => {
        if (err) throw error
        console.log(res);
    });
}

function addDepartment(department){
    db.query(`INSERT INTO departments (name) VALUES ('${department}')`)
}

function addRole(title, salary, department_id){
    db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${title}', ${salary}, ${department_id})`)
}

function addEmployee(first_name, last_name, role_id, manager_id){
    db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${title}', ${salary}, ${department_id})`)
}

module.exports = {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee};