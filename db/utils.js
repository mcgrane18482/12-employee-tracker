const db = require('./connection.js');

function viewDepartments() {
    db.query('SELECT * FROM departments', (err, res) => {
        if (err) throw error
        console.log(res);
    });
};

module.exports = viewDepartments;