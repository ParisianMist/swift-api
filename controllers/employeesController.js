//tools
const knex = require("knex")(require('../knexfile'))
const jwt = require('jsonwebtoken')

//secret key
const secretKey = process.env.SECRET_KEY;


exports.allEmployees = (_req, res) => {
    knex('employees')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving Employees: ${err}`)
        );
};

exports.oneEmployee = (req, res) => {
    const { id } = req.params;

    knex('employees')
        .select('*')
        .where('employees.id', id)
        .then((data) => {
            if (!data.length) {
                return res.status(404).send(`Employee id: ${req.params.id} not found`);
            } else {
                const { id, name, email, password } = data[0];
                const result = {
                    id,
                    name,
                    email,
                    password,
                };
                res.status(200).send(result);
            }
        })
        .catch(() => {
            res.status(400).send('Could not retrieve employee information')
        })
}

exports.getEmployeeSchedule = (req, res) => {
    // get token from request headers
    const token = req.headers.authorization;
    const splitToken = token.split(' ')[1];

    // verify & decode JWT
    jwt.verify(splitToken, secretKey, (err, decoded) => {
        const employeeID = decoded.id
        // console.log(employeeID)
        knex('employees')
            .select(
                'employees.id as employee_id',
                'employees.name',
                'shift.id as shift_id',
                'shift.description',
                'shift.start_time',
                'shift.end_time',
                'shift.up_for_grabs',
                'shift.swap_status'
            )
            .join('shift', 'shift.employee_id', 'employees.id')
            .where('shift.employee_id', employeeID)
            .then((data) => {
                if (!data.length) {
                    return res.send(`No shifts found for employee ${employeeID}`);
                }
                else {
                    const result = data.map(shift => ({
                        shiftID: shift.shift_id,
                        title: shift.description,
                        start: shift.start_time,
                        end: shift.end_time,
                        employeeID: shift.employee_id,
                        employeeName: shift.name,
                        upForGrabs: shift.up_for_grabs,
                        swapStatus: shift.swap_status,

                    }))
                    res.status(200).send(result);
                }
            })
            .catch((err) => {
                res.status(401);
                res.json({
                    error: "Invalid token"
                });
            });

    });
    //query db to find employee 
    ///join where empoyee id=employee_id
    // get employee's shifts

};