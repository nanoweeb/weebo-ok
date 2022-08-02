exports.up = function (knex) {
  return knex.schema.createTable("books", function (table) {
    table.increments();
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.string("description").notNullable();
    table.string("image").notNullable();
    table.string("link").notNullable();
    table.string("price").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("books");
};
