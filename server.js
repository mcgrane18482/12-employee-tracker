const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware