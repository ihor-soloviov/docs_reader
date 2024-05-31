const Pool = require('pg').Pool;
const pool = new Pool({
  user: "postgres",
  password: "J7b9L65yHy",
  host: "localhost",
  port: 5432,
  database: "angebot",
});

module.exports = pool;