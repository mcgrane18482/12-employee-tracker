const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee } = require('./db/utils');


function startApp() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'command',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View  all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ]).then((answer) => {
        if (answer.command === 'View all departments') {
            viewDepartments();
        }
        else if (answer.command === 'View all roles') {
            viewRoles();
        }
        else if (answer.command === 'View all employees') {
            viewEmployees();
        }
        else if (answer.command === 'Add a department') {
            inquirer.prompt({
                name: 'department',
                message: 'Enter the name of the department you would like to add'
            }).then((answer) => {
                addDepartment(answer.department);
            })
        }
        else if (answer.command === 'Add a role') {
            inquirer.prompt([{
                name: 'title',
                message: 'Enter the role title'
            },
            {
                name: 'salary',
                message: 'Enter the salary for the role'
            },
            {
                name: 'department_id',
                message: 'Enter the department id for the role'
            }]).then((answer) => {
                addRole(answer.title, answer.salary, answer.department_id);
            })
        }
        else if (answer.command === 'Add an employee'){
            inquirer.prompt([{
                name: 'first_name',
                message: 'Enter the employees first name'
            },
            {
                name: 'last_name',
                message: 'Enter the employees last name'
            },
            {
                name: 'role_id',
                message: 'Enter the role id for the employee'
            },
            {
                name: 'manager_id',
                message: 'Enter the manager id for the employee'
            }]).then((answer) => {
                addEmployee(answer.first_name, answer.last_name, answer.manager_id);
            })
        }
    })
};

startApp();