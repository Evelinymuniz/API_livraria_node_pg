const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: '251011',
    database: "biblioteca",
});

module.exports = {
    pool,
};
