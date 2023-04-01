const knex = require("knex")(require('../knexfile'))

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