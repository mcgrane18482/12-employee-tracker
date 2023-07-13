const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table')
const { insertDepartment, insertRole, insertEmployee, updateEmployee } = require('./db/queryUtils');


function startApp() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'command',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'exit']
        }
    ]).then((answer) => {
        if (answer.command === 'View all departments') {
            viewDepartments()
        }
        else if (answer.command === 'View all roles') {
            viewRoles();
        }
        else if (answer.command === 'View all employees') {
            viewEmployees();
        }
        else if (answer.command === 'Add a department') {
            addDepartment();
        }
        else if (answer.command === 'Add a role') {
            addRole();
        }
        else if (answer.command === 'Add an employee') {
            addEmployee();
        }
        else if (answer.command === 'Update an employee role') {
            updateEmployeeRole();
        } else {
            process.exit()
        }
    })
};


function viewRoles() {
    db.query('SELECT * FROM roles', (err, res) => {
        if (err) throw error
        console.table(res);
    });
};

function viewDepartments() {
    db.query('SELECT * FROM departments', (err, res) => {
        if (err) throw err
        console.table(res);
        startApp()
    });
}

function viewEmployees() {
    db.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err
        console.table(res);
        startApp()
    });
}

function addDepartment() {
    inquirer.prompt({
        name: 'department',
        message: 'Enter the name of the department you would like to add'
    }).then((answer) => {
        insertDepartment(answer.department);
        console.log(`Added ${answer.department} to the database`)
    })
}

function addEmployee() {
    db.query('select *  from departments', (err, result) => {
        const departmentList = result.map(({ id, name }) => ({
            name: name,
            value: id
        }))
        
        db.query('select * from roles', (err, result) => {
            const roleList = result.map(({ title, id }) => ({
                name: title,
                value: id
            }))

            inquirer.prompt([{
                name: 'first_name',
                message: 'Enter the employees first name'
            },
            {
                name: 'last_name',
                message: 'Enter the employees last name'
            },
            {
                name: 'role',
                type: 'list',
                message: 'Select employee position',
                choices: roleList
            },
            {
                name: 'department',
                type: 'list',
                message: 'Select employees department',
                choices: departmentList
            }]).then((answer) => {
                insertEmployee(answer.first_name, answer.last_name, answer.role, answer.department);
                console.log(`Added ${answer.first_name} ${answer.last_name} to the database`)
            })
        })
    })
}


function addRole() {
    db.query('select *  from departments', (err, result) => {
        const departmentList = result.map(({ id, name }) => ({
            name: name,
            value: id
        }))

        inquirer.prompt([{
            name: 'title',
            message: 'Enter the role title'
        },
        {
            name: 'salary',
            message: 'Enter the salary for the role'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'Enter the department id for the role',
            choices: departmentList
        }]).then((answer) => {
            insertRole(answer.title, answer.salary, answer.department_id);
            console.log(`Added ${answer.title} to the database`)
            startApp()
        })
    })
}

function updateEmployeeRole() {
    db.query('select *  from employees', (err, result) => {
        const employeeList = result.map(({ first_name, last_name, id }) => ({
            name: first_name + ' ' + last_name,
            value: id
        }))

        db.query('select * from roles', (err, result) => {
            const roleList = result.map(({ title, id }) => ({
                name: title,
                value: id
            }))

            inquirer.prompt([{
                name: 'employee',
                type: 'list',
                message: 'Pick an employee to update',
                choices: employeeList
            },
            {
                name: 'role',
                type: 'list',
                message: 'Pick a role',
                choices: roleList
            }]).then((answer) => {
                updateEmployee(answer.role, answer.employee)
                startApp()
            })
        })
    })
}

startApp();