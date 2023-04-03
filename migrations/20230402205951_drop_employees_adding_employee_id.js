// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = function(knex) {
//   return knex.schema.alterTable('shift', (table) =>{
//   table.dropColumn('employees');
//   table.string('employee_id').notNullable();
// })
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {
//     return knex.schema.table('shift', (table) => {
//       table.dropColumn('employee_id');
//       table.json('employees').notNullable();
//     });
//   };
  
