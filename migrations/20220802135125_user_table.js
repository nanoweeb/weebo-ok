exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.increments();
    table.string("email").notNullable().unique();
    table.string("username").notNullable();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
