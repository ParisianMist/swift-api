/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('shift', (table) => {
        table.uuid('id').primary();
        table.string('description').notNullable();
        table.timestamp('start_time').notNullable();
        table.timestamp('end_time').notNullable();
        table
            .uuid('employee_id')
            .references('employees.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable();
        table.timestamp(true, true); //to set created, updated timestamps
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('shift');
};
