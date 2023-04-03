const knex = require('knex')(require('../knexfile'));

exports.allShifts = (_req, res) => {
    knex('shift')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving shifts: ${err}`)
        })
}

exports.oneShift = (_req, res) => {
    knex('shift')
        .then((data) => {
            if (!data.length) {
                return res.status(404).send(`Shift with id: ${req.params.id} is not found`);
            } else {
                const { id, description, start_time, end_time, employee_id } = data[0];
                const result = {
                    id,
                    description,
                    start_time,
                    end_time,
                    employee_id
                };
                res.status(200).send(result);
            }
        })
        .catch(() => {
            res.status(400).send('Could not retrieve shift information')
        })
}