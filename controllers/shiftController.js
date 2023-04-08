//tools
const knex = require("knex")(require('../knexfile'))
const jwt = require('jsonwebtoken');
const uuid= require('uuid');
const moment = require('moment');

//secret key
const secretKey = process.env.SECRET_KEY;

exports.allShifts = (_req, res) => {
    knex('shift')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving shifts: ${err}`)
        })
}

exports.oneShift = (req, res) => {
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

exports.postShift = (req, res) => {
    const { id } = req.params;

    knex('shift')
        .select('*')
        .where({ id })
        .then((row) => {
            if (row.length === 0) {
                return res.status(404).send(`shift at ${id} not found`)
            }

            knex('shift')
                .where({ id })
                .update(req.body)
                .then((data) => {
                    res.status(200).send(data[0])
                })
                .catch((err) => {
                    res.status(400).console.error(err)
                })
        })
        .catch((err) => {
            res.status(400).console.error(err)
        })
}

exports.getUpForGrabs = (req, res) => {
    // get token from request headers
    const token = req.headers.authorization;
    const splitToken = token.split(' ')[1];

    // verify & decode JWT
    jwt.verify(splitToken, secretKey, (err, decoded) => {
        const employeeID = decoded.id;

        knex('shift')
            .select(
                'shift.id as shift_id',
                'shift.description',
                'shift.start_time',
                'shift.end_time',
                'shift.up_for_grabs',
                'shift.employee_id',
                'shift.swap_status'
            )
            .where('shift.up_for_grabs', true)
            .whereNot('shift.employee_id', employeeID)
            .then((data) => {
                if (!data.length) {
                    return res.send(`No up for grabs shifts found`);
                }
                else {
                    const result = data.map(shift => ({
                        shiftID: shift.shift_id,
                        title: shift.description,
                        start: shift.start_time,
                        end: shift.end_time,
                        upForGrabs: shift.up_for_grabs,
                        employeeID: shift.employee_id,
                        swapStatus: shift.swap_status,
                    }))
                    res.status(200).send(result);
                }
            })
            .catch((err) => {
                res.status(401);
                res.json({
                    error: `Invalid token, ${err}`
                });
            });
    });
};


exports.acceptShift = (req, res) => {
    const shiftID = req.params.id;
    knex('shift')
        .where('id', shiftID)
        .then((shift) => {
            if (!shift) {
                res.status(404).json({ error: 'Sorry, no shift found' });
            } else {
                knex.transaction((trx) => {
                    trx('shift')
                        .where('id', shiftID)
                        .update({
                            up_for_grabs: false,
                            swap_status: true,
                            updated_at: new Date()
                        })
                        .then(() => {
                            return trx('shift')
                                .select('description', 'start_time', 'end_time')
                                .where('id', shiftID)
                                .first();
                        })
                        .then((updatedShift) => {
                            return trx('shift')
                                .insert({
                                    id: uuid.v4(),
                                    description: updatedShift.description,
                                    start_time: updatedShift.start_time,
                                    end_time: updatedShift.end_time,
                                    employee_id: req.body.employee_id, // assuming employee_id is in the req.body
                                });
                        })
                        .then(() => {
                            trx.commit();
                            res.status(200).json({ message: 'Shift accepted and swapped successfully' });
                        })
                        .catch((error) => {
                            trx.rollback();
                            console.error(error);
                            res.status(500).json({ error: 'INTERNAL server error' });
                        });
                });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Internal EXTERNAL server error' });
        });
}

