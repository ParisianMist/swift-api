/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('shift', (table) => {
        table.uuid('id').primary();
        table.string('description').notNullable();
        table.time('start_time').notNullable();
        table.time('end_time').notNullable();
        table.json('employees').notNullable();
        table.timestamp(true,true); //to set created, updated timestamps
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('shift');
};
