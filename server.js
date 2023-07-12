const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');
const viewDepartments = require('./db/utils');


function startApp() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'command',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View  all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ]).then((answer) => {
        viewDepartments();
    })
}

startApp();