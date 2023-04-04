//dependencies
const knex = require("knex")(require('../knexfile'))
const jwt = require('jsonwebtoken');

//env variables
const secretKey = process.env.SECRET_KEY;

exports.employeeLogin = (req, res) => {
    const { email, password } = req.body;

    // get all employees
    knex('employees')
        .then((data) => {
            // find employee w matching email and password
            const employee = data.find(
                (employee) => employee.email === email && employee.password === password
            );
            if (!employee) {
                return res.status(401).send('Invalid email or password');
            } 
            //send token back in response body
            else {
                const token = jwt.sign({ email: employee.email }, secretKey);
                res.status(200).json({ token });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal server error');
        });
};