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
        [//PINK
          {
            'id': uuid.v4(),
            'description': 'Pink Day #1',
            'start_time': '2023-04-01T07:30',
            'end_time': '2023-04-01T19:30',
            'employee_id': '3db6dc51-b461-4fa4-a6e4-b1ff352221c5'
          },
          {
            'id': uuid.v4(),
            'description': 'Pink Day #2',
            'start_time': '2023-04-02T07:30',
            'end_time': '2023-04-02T19:30',
            'employee_id': '3db6dc51-b461-4fa4-a6e4-b1ff352221c5'
          },
          {
            'id': uuid.v4(),
            'description': 'Pink Night #1',
            'start_time': '2023-04-03T19:30',
            'end_time': '2023-04-04T07:30',
            'employee_id': '3db6dc51-b461-4fa4-a6e4-b1ff352221c5'
          },
          {
            'id': uuid.v4(),
            'description': 'Pink Night #2',
            'start_time': '2023-04-04T19:30',
            'end_time': '2023-04-05T07:30',
            'employee_id': '3db6dc51-b461-4fa4-a6e4-b1ff352221c5'
          },
          //green
          {
            'id': uuid.v4(),
            'description': 'Green Day #1',
            'start_time': '2023-04-03T07:30',
            'end_time': '2023-04-03T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Green Day #2',
            'start_time': '2023-04-04T07:30',
            'end_time': '2023-04-04T19:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'

          },
          {
            'id': uuid.v4(),
            'description': 'Green Night #1',
            'start_time': '2023-04-05T19:30',
            'end_time': '2023-04-06T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'
          },
          {
            'id': uuid.v4(),
            'description': 'Green Night #2',
            'start_time': '2023-04-06T19:30',
            'end_time': '2023-04-07T07:30',
            'employee_id': '79e02eb5-17c0-4dd9-bf55-aec03434812c'

          },
          //PURPLE
          {
            'id': uuid.v4(),
            'description': 'Purple Day #1',
            'start_time': '2023-04-05T07:30',
            'end_time': '2023-04-05T19:30',
            'employee_id': '4c7e6819-a91a-45b2-a454-f931e4a7cce3'
          },
          {
            'id': uuid.v4(),
            'description': 'Purple Day #2',
            'start_time': '2023-04-06T07:30',
            'end_time': '2023-04-06T19:30',
            'employee_id': '4c7e6819-a91a-45b2-a454-f931e4a7cce3'
          },
          {
            'id': uuid.v4(),
            'description': 'Purple Night #1',
            'start_time': '2023-04-07T19:30',
            'end_time': '2023-04-08T07:30',
            'employee_id': '4c7e6819-a91a-45b2-a454-f931e4a7cce3'
          },
          {
            'id': uuid.v4(),
            'description': 'Purple Night #2',
            'start_time': '2023-04-08T19:30',
            'end_time': '2023-04-09T07:30',
            'employee_id': '4c7e6819-a91a-45b2-a454-f931e4a7cce3'
          },
          //ORANGE
          {
            'id': uuid.v4(),
            'description': 'Orange Day #1',
            'start_time': '2023-04-07T07:30',
            'end_time': '2023-04-07T19:30',
            'employee_id': 'd5c4daa3-c726-426a-aa98-fb40f3fba816'
          },
          //BLUE
          {
            'id': uuid.v4(),
            'description': 'Blue Night #1',
            'start_time': '2023-04-01T19:30',
            'end_time': '2023-04-02T07:30',
            'employee_id': 'ca3827f0-375a-4891-aaa5-f5e8a5bad225'
          },
          {
            'id': uuid.v4(),
            'description': 'Blue Night #2',
            'start_time': '2023-04-02T19:30',
            'end_time': '2023-04-03T07:30',
            'employee_id': 'ca3827f0-375a-4891-aaa5-f5e8a5bad225'
          },]
      )
    })
};
