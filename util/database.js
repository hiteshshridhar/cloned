const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "database-2.cpslqr44gyke.us-east-1.rds.amazonaws.com",
  user: "hiteshtest",
  database: "node_complete",
  password: "hiteshtest",
  insecureAuth: true,
});

module.exports = pool.promise();


if (pool) console.log("Connected to Database!!!");



