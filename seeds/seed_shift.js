/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
//tools
const uuid = require('uuid');

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex('shift')
    .del()
    //then add these ones
    .then(() => {
      return knex('shift').insert(
        [//Molly Weasley
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-01T07:30',
            'end_time': '2023-04-01T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-02T07:30',
            'end_time': '2023-04-02T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-04-03T19:30',
            'end_time': '2023-04-04T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-04-04T19:30',
            'end_time': '2023-04-05T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-10T07:30',
            'end_time': '2023-04-10T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-11T07:30',
            'end_time': '2023-04-11T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-04-12T19:30',
            'end_time': '2023-04-13T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-04-13T19:30',
            'end_time': '2023-04-14T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          }, {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-19T07:30',
            'end_time': '2023-04-19T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-20T07:30',
            'end_time': '2023-04-20T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-04-21T19:30',
            'end_time': '2023-04-22T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-04-22T19:30',
            'end_time': '2023-04-23T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-28T07:30',
            'end_time': '2023-04-28T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-29T07:30',
            'end_time': '2023-04-29T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-04-30T19:30',
            'end_time': '2023-05-01T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-01T19:30',
            'end_time': '2023-05-02T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-05-07T07:30',
            'end_time': '2023-05-07T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-05-08T07:30',
            'end_time': '2023-05-08T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-09T19:30',
            'end_time': '2023-05-10T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-10T19:30',
            'end_time': '2023-05-11T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-05-16T07:30',
            'end_time': '2023-05-16T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-05-17T07:30',
            'end_time': '2023-05-17T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-18T19:30',
            'end_time': '2023-05-19T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-19T19:30',
            'end_time': '2023-05-20T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-05-25T07:30',
            'end_time': '2023-05-25T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-05-26T07:30',
            'end_time': '2023-05-26T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-27T19:30',
            'end_time': '2023-05-28T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-28T19:30',
            'end_time': '2023-05-29T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          //Luna Lovegood
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-08T07:30',
            'end_time': '2023-04-08T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-16T07:30',
            'end_time': '2023-04-16T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-17T07:30',
            'end_time': '2023-04-17T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-24T07:30',
            'end_time': '2023-04-24T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-04-27T07:30',
            'end_time': '2023-04-27T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-05-03T07:30',
            'end_time': '2023-05-03T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-04T07:30',
            'end_time': '2023-05-05T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-05-13T07:30',
            'end_time': '2023-05-13T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-14T07:30',
            'end_time': '2023-05-15T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-21T07:30',
            'end_time': '2023-05-22T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-22T07:30',
            'end_time': '2023-05-23T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Night',
            'start_time': '2023-05-23T07:30',
            'end_time': '2023-05-24T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
          {
            'id': uuid.v4(),
            'description': 'Day',
            'start_time': '2023-05-30T07:30',
            'end_time': '2023-05-30T19:30',
            'employee_id': '861c4cde-2f0f-4796-8d8f-9492e74b2573'
          },
        ]
      )
    })
};
