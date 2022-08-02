const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "weebook",
    password: "weebook123",
    database: "weebook",
  },
});

export default knex;
