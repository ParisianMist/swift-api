/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex('employees')
    .del()
    .then(function () {
      return knex('employees').insert(
        [
          {
            "id": "3db6dc51-b461-4fa4-a6e4-b1ff352221c5",
            "name": "Neville Longbottom",
            "email": "NevilleLongbottom@stMungos.wiz"
          },
          {
            "id": "79e02eb5-17c0-4dd9-bf55-aec03434812c",
            "name": "Molly Weasley",
            "email": "MollyWeasley@stMungos.wiz"
          }
        ]);
    });
}
